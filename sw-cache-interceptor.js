// Service Worker for Cache API Interception
const CACHE_NAME = 'react-live-resources'

// Track ongoing fetch requests to prevent duplicate fetches across all tabs
const ongoingFetches = new Map()

// Install event - just activate immediately
self.addEventListener('install', (event) => {
  // console.debug('Cache Interceptor Service Worker installing...')
  self.skipWaiting()
})

// Activate event - claim all clients immediately
self.addEventListener('activate', (event) => {
  // console.debug('Cache Interceptor Service Worker activating...')
  event.waitUntil(self.clients.claim())
})

// Fetch event - intercept all fetch requests
self.addEventListener('fetch', (event) => {
  const request = event.request
  const url = new URL(request.url)

  // Only handle http and https requests
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return
  }

  // Only intercept GET requests for assets (images, videos, json, etc.)
  if (request.method !== 'GET') {
    return
  }

  // Skip non-asset requests (API calls, HTML pages, etc.)
  const isAsset = url.pathname.match(/\.(webp|jpg|jpeg|png|gif|svg|mp4|webm|json|aac)$/i)
  if (!isAsset) return

  // console.debug('SW intercepting:', url.pathname)

  event.respondWith(cacheFirst(request))
})

async function fetchAndCache(request, cache, requestUrl) {
  try {
    // console.debug('SW: Not in cache, fetching:', requestUrl)
    const response = await fetch(request)

    // Cache the response for future use if successful
    if (response.ok) {
      const responseClone = response.clone()
      await cache.put(request, responseClone)
      // console.debug('SW: Cached response for:', requestUrl)
    } else {
      console.warn('SW: Fetch returned non-OK status:', response.status, requestUrl)
    }

    return response
  } finally {
    // Clean up the ongoing fetch tracking
    ongoingFetches.delete(requestUrl)
  }
}

async function cacheFirst(request) {
  try {
    const cache = await caches.open(CACHE_NAME)
    const requestUrl = request.url

    // Try to get from cache first
    const cachedResponse = await cache.match(request)

    if (cachedResponse) {
      // console.debug('SW: Serving from cache:', requestUrl)
      return cachedResponse
    }

    // Check if there's already an ongoing fetch for this URL
    if (ongoingFetches.has(requestUrl)) {
      // console.debug('SW: Request already in progress, waiting for completion:', requestUrl)
      const ongoingResponse = await ongoingFetches.get(requestUrl)
      // Clone the response so each request gets its own consumable response
      return ongoingResponse.clone()
    }

    // Create a new fetch promise and store it
    const fetchPromise = fetchAndCache(request, cache, requestUrl)
    ongoingFetches.set(requestUrl, fetchPromise)
    return await fetchPromise
  } catch (error) {
    console.error('SW: Error handling request:', request.url, error)

    // Clean up ongoing fetch tracking on error
    ongoingFetches.delete(request.url)

    // Fallback to direct network request
    return fetch(request)
  }
}
