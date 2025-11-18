;
(function () {
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./ikigaians-house-core-legacy-BYu6jnS6.js'], function (exports, module) {
    'use strict';

    var AfterKicked, MessageContentType;
    return {
      setters: [module => {
        AfterKicked = module.A;
        MessageContentType = module.M;
      }],
      execute: function () {
        // https://github.com/maxogden/websocket-stream/blob/48dc3ddf943e5ada668c31ccd94e9186f02fafbd/ws-fallback.js

        var ws = null;
        if (typeof WebSocket !== 'undefined') {
          ws = WebSocket;
        } else if (typeof MozWebSocket !== 'undefined') {
          ws = MozWebSocket;
        } else if (typeof global !== 'undefined') {
          ws = global.WebSocket || global.MozWebSocket;
        } else if (typeof window !== 'undefined') {
          ws = window.WebSocket || window.MozWebSocket;
        } else if (typeof self !== 'undefined') {
          ws = self.WebSocket || self.MozWebSocket;
        }
        const WebSocket$1 = ws;
        var WsEvent;
        exports("W", WsEvent);
        (function (WsEvent) {
          WsEvent["WS_OPENED"] = "ws.opened";
          WsEvent["WS_CLOSED"] = "ws.closed";
          WsEvent["WS_RECONNECTING"] = "ws.reconnecting";
          WsEvent["WS_RECONNECTED"] = "ws.reconnected";
          WsEvent["WS_ERROR"] = "ws.error";
        })(WsEvent || exports("W", WsEvent = {}));
        var WsAction;
        (function (WsAction) {
          WsAction["ACK"] = "ack";
          WsAction["PING"] = "ping";
          WsAction["KICK"] = "kick";
        })(WsAction || (WsAction = {}));
        var GameAction;
        exports("a", GameAction);
        (function (GameAction) {
          GameAction["SUBSCRIBE_TABLE"] = "sub.table";
          GameAction["UNSUBSCRIBE_TABLE"] = "unsub.table";
          GameAction["SUBSCRIBE_LOBBY"] = "sub.lobby";
          GameAction["UNSUBSCRIBE_LOBBY"] = "unsub.lobby";
          /** Stop listening support chat */
          GameAction["UNSUBSCRIBE_SUPPORT"] = "unsub.support";
          GameAction["SYNC_WALLET"] = "sync.wallet";
          /** Sends a preliminary glance of the bet for bet statistic and winner list */
          GameAction["BET_PEEK"] = "bet.peek";
          GameAction["LIST_BET_HISTORY"] = "list.betHistory";
          GameAction["SUBTOTAL_BET_HISTORY"] = "subtotal.betHistory";
          /** Send a message to the chatroom in the game */
          GameAction["CHAT_GAME"] = "chat.table";
          /** Send a message to support */
          GameAction["CHAT_SUPPORT"] = "chat.support";
          /** Request for history of message in game */
          GameAction["LIST_MESSAGE"] = "list.msg";
          /** Request for history of message in support */
          GameAction["LIST_SUPPORT_MESSAGE"] = "list.supportMsg";
          /** Request to save player preference */
          GameAction["SET_PREFERENCE"] = "set.pref";
        })(GameAction || exports("a", GameAction = {}));
        var GameEvent;
        exports("G", GameEvent);
        (function (GameEvent) {
          GameEvent["UNKNOWN"] = "unknown";
          GameEvent["SESSION_KICKED"] = "session.kicked";
          GameEvent["TABLE_KICKED"] = "table.kicked";
          GameEvent["TABLE_STATE"] = "table.state";
          GameEvent["TABLE_START"] = "table.start";
          GameEvent["TABLE_BET_STOP"] = "table.betStop";
          GameEvent["TABLE_DEAL"] = "table.deal";
          GameEvent["TABLE_FINISH"] = "table.finish";
          GameEvent["TABLE_WINNERS"] = "table.winners";
          GameEvent["STREAM_ROTATE"] = "stream.rotate";
          GameEvent["LOBBY_STATE"] = "lobby.state";
          GameEvent["PLAYER_STATE"] = "player.state";
          GameEvent["WALLET_STATE"] = "wallet.state";
          GameEvent["BET_PEEK_ACK"] = "bet.ack";
          GameEvent["BET_RESULT"] = "bet.result";
          GameEvent["BET_STATS"] = "bet.stats";
          GameEvent["BET_HISTORY_LIST"] = "betHistory.list";
          GameEvent["BET_HISTORY_SUBTOTAL"] = "betHistory.subtotal";
          /** Message from the game chat */
          GameEvent["GAME_MESSAGE"] = "table.msg";
          /** Message from the support dialog */
          GameEvent["SUPPORT_MESSAGE"] = "support.msg";
          /** system message */
          GameEvent["SYSTEM_MESSAGE"] = "system.msg";
          GameEvent["TABLE_PAUSE"] = "table.pause";
          GameEvent["TABLE_RESUME"] = "table.resume";
          GameEvent["TABLE_MAINTENANCE"] = "table.maintenance";
        })(GameEvent || exports("G", GameEvent = {}));
        class Event {
          constructor(origin) {
            _defineProperty(this, "origin", void 0);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            _defineProperty(this, "json", void 0);
            this.origin = origin;
            this.parse();
          }
          get type() {
            var _this$json;
            const value = (_this$json = this.json) === null || _this$json === void 0 ? void 0 : _this$json.type;
            if (typeof value === 'string') {
              if (Object.values(GameAction).includes(value)) {
                return value;
              }
              if (Object.values(GameEvent).includes(value)) {
                return value;
              }
              if (Object.values(WsAction).includes(value)) {
                return value;
              }
              if (Object.values(WsEvent).includes(value)) {
                return value;
              }
            }
            return GameEvent.UNKNOWN;
          }
          get syn() {
            var _this$json2;
            return (_this$json2 = this.json) === null || _this$json2 === void 0 ? void 0 : _this$json2.syn;
          }
          get timecode() {
            var _this$json3;
            return (_this$json3 = this.json) === null || _this$json3 === void 0 ? void 0 : _this$json3.timecode;
          }
          get isValid() {
            return this.type != GameEvent.UNKNOWN;
          }
          get data() {
            var _this$json4;
            return this.isValid ? (_this$json4 = this.json) === null || _this$json4 === void 0 ? void 0 : _this$json4.data : undefined;
          }
          get error() {
            var _this$json5;
            return this.isValid ? (_this$json5 = this.json) === null || _this$json5 === void 0 ? void 0 : _this$json5.error : undefined;
          }
          parse() {
            if (!this.origin) {
              return;
            }
            let bufStr;
            if (typeof this.origin === 'string') {
              bufStr = this.origin;
            } else if (this.origin instanceof ArrayBuffer) {
              bufStr = new TextDecoder().decode(this.origin);
            } else if (Array.isArray(this.origin) && this.origin.every(item => item instanceof ArrayBuffer)) {
              bufStr = this.origin.reduce((acc, buf) => acc + new TextDecoder().decode(buf), '');
            } else if (globalThis.window === undefined && Buffer.isBuffer(this.origin)) {
              bufStr = this.origin.toString();
            } else {
              this.json = this.origin;
              return;
            }
            try {
              this.json = JSON.parse(bufStr);
            } catch (_unused) {
              return;
            }
          }
        }
        const KickedHandler = (evt, conn) => {
          if (AfterKicked.DISCONNECT == evt.data.kicked.after) {
            conn.close();
          }
        };
        const EventHandler = {
          [GameEvent.SESSION_KICKED]: KickedHandler
        };
        function execEventHandler(evt, conn) {
          const handler = EventHandler[evt.type];
          if (typeof handler === 'function') {
            handler(evt, conn);
          }
        }

        /* eslint-disable @typescript-eslint/no-explicit-any */
        const SERVER_ACTIVATE_SESSION_PATH = '/v1/exp/session/activate';
        /**
         * Live RGS websocket client.
         *
         * The heartbeat and reconnection mechanism:
         * 1. The client will send PING message to server if the last incoming message is later than `heartbeatIntervalMs`.
         * 2. The server must respond some message after receiving any message.
         * 3. The client will reconnect if the last incoming message is later than `heartbeatTimeoutMs`.
         */
        class Connect {
          get sid() {
            try {
              var _this$launchUrl;
              return new URL((_this$launchUrl = this.launchUrl) !== null && _this$launchUrl !== void 0 ? _this$launchUrl : '').searchParams.get('sid') || '';
            } catch (_unused2) {
              return '';
            }
          }
          get url() {
            const url = new URL(this.rgsUrl);
            url.pathname = SERVER_ACTIVATE_SESSION_PATH;
            url.searchParams.set('sid', this.sid);
            return url.toString();
          }
          /**
           * @param rgsUrl Url to game server
           * @param launchUrl Url of current session url. If omitted, use `windows.location`
           */
          constructor(rgsUrl, launchUrl) {
            _defineProperty(this, "rgsUrl", void 0);
            _defineProperty(this, "launchUrl", void 0);
            _defineProperty(this, "handlerMap", void 0);
            _defineProperty(this, "ws", void 0);
            _defineProperty(this, "logger", void 0);
            _defineProperty(this, "synNo", 0);
            _defineProperty(this, "heartbeatTimer", void 0);
            /** The last time we see a server message. */
            _defineProperty(this, "lastMessageTime", 0);
            _defineProperty(this, "lastHeartbeatTime", 0);
            /** Send a heartbeat if we see no incoming message after this duration.  */
            _defineProperty(this, "heartbeatIntervalMs", 1000);
            /** If server has no response for this duration, a reconnect will be triggered. */
            _defineProperty(this, "heartbeatTimeoutMs", 5000);
            _defineProperty(this, "reconnectDelayMs", 1000);
            _defineProperty(this, "reconnectCount", 0);
            _defineProperty(this, "inflightReconnect", void 0);
            this.rgsUrl = rgsUrl;
            this.launchUrl = launchUrl;
            this.handlerMap = new Map();
            this.ws = undefined;
          }
          connect() {
            if (!this.rgsUrl) {
              var _this$logger, _this$logger$error;
              (_this$logger = this.logger) === null || _this$logger === void 0 || (_this$logger$error = _this$logger.error) === null || _this$logger$error === void 0 || _this$logger$error.call(_this$logger, 'Missing server URL to connect');
              return;
            }
            if (!this.sid) {
              var _this$logger2, _this$logger2$error;
              (_this$logger2 = this.logger) === null || _this$logger2 === void 0 || (_this$logger2$error = _this$logger2.error) === null || _this$logger2$error === void 0 || _this$logger2$error.call(_this$logger2, 'Missing sid to connect');
              return;
            }
            this.doConnect();
            this.lastMessageTime = Date.now();
            this.startHeartbeat();
          }
          close() {
            if (this.heartbeatTimer) {
              clearInterval(this.heartbeatTimer);
              this.heartbeatTimer = undefined;
            }
            this.doClose();
            this.emitEvent(WsEvent.WS_CLOSED);
          }
          doConnect() {
            if (this.isConnected) {
              return;
            }
            this.doClose();
            try {
              this.ws = new WebSocket$1(this.url);
              this.ws.onmessage = this.handleMessage.bind(this);
              this.ws.onopen = this.handleOpened.bind(this);
              this.ws.onclose = this.handleClosed.bind(this);
              this.ws.onerror = this.handleError.bind(this);
            } catch (error) {
              var _this$logger3, _this$logger3$error;
              (_this$logger3 = this.logger) === null || _this$logger3 === void 0 || (_this$logger3$error = _this$logger3.error) === null || _this$logger3$error === void 0 || _this$logger3$error.call(_this$logger3, 'Failed to create WebSocket connection', error);
              const errorEvent = new Event({
                type: WsEvent.WS_ERROR,
                data: {
                  error: error instanceof Error ? error.message : String(error)
                }
              });
              this.emitEvent(WsEvent.WS_ERROR, errorEvent);
              // Schedule retry if WebSocket construction fails
              if (this.heartbeatTimer) {
                setTimeout(() => {
                  this.reconnect();
                }, this.reconnectDelayMs);
              }
            }
          }
          doClose() {
            if (this.ws) {
              this.ws.onmessage = null;
              this.ws.onopen = null;
              this.ws.onclose = null;
              this.ws.onerror = null;
              try {
                this.ws.close();
              } catch (_unused3) {
                //
              }
              this.ws = undefined;
            }
          }
          /**
           * Registers a handler for a specific event type.
           *
           * This method allows you to associate a handler function with a specified event type.
           * When an event of the specified type occurs, the registered handler will be invoked.
           * This is useful for handling different types of events with specific logic.
           *
           * @param {GameEvent | string} type - The identifier of the event type to listen for. It should be one of the predefined values in the `GameEvent` enumeration.
           * @param {WsHandler | WsHandlerAsync} handler - The event handler to be executed when the specified event type is triggered.
           *                                               It can be either a synchronous (`WsHandler`) or asynchronous (`WsHandlerAsync`) function.
           * @returns {this} - Returns the current instance to allow method chaining.
           */
          on(type, handler) {
            this.handlerMap.set(type, handler);
            return this;
          }
          /**
           * Registers a handler for unknown event types.
           *
           * This method allows you to set a handler that will be invoked when an event of type `GameEvent.UNKNOWN`
           * is received. It can be useful for handling unexpected or miscellaneous events that do not match any
           * other predefined event types.
           *
           * @param {WsHandler | WsHandlerAsync} handler - The event handler to be executed for unknown events.
           *                                               This can either be a synchronous (`WsHandler`) or
           *                                               asynchronous (`WsHandlerAsync`) function.
           * @returns {this} - Returns the current instance for method chaining.
           */
          onElse(handler) {
            this.handlerMap.set(GameEvent.UNKNOWN, handler);
            return this;
          }
          /**
           * Sends an action with an optional payload to the WebSocket server.
           *
           * This method constructs a message containing a specified action and an optional payload,
           * then sends it to the WebSocket server. If the WebSocket connection is not established,
           * the method will return immediately without sending any data.
           *
           * @param {GameAction} act - The action to be sent. This should be one of the predefined actions in the `GameAction` enumeration.
           * @param {PayloadMap[E]?} [payload] - An optional payload to include with the action. This can be any data type that is serializable to JSON.
           *                          If no payload is provided, the action will be sent with a `data` field set to `undefined`.
           */
          send(act, payload) {
            if (!this.isConnected || !this.ws) {
              var _this$logger4, _this$logger4$info;
              (_this$logger4 = this.logger) === null || _this$logger4 === void 0 || (_this$logger4$info = _this$logger4.info) === null || _this$logger4$info === void 0 || _this$logger4$info.call(_this$logger4, `Message not sent (not connected): ${act}`);
              return;
            }
            const data = {
              type: act,
              data: undefined,
              syn: `#${this.synNo += 2}`
            };
            if (payload) {
              data.data = payload;
            }
            const dataStr = JSON.stringify(data);
            this.ws.send(dataStr);
          }
          handleMessage(msg) {
            this.lastMessageTime = Date.now();
            const evt = new Event(msg.data);
            this.emitEvent(evt.type, evt);
            this.ack(evt);
            execEventHandler(evt, this);
          }
          emitEvent(type, data) {
            let handler;
            if (this.handlerMap.has(type)) {
              handler = this.handlerMap.get(type);
            }
            if (!data) {
              data = new Event({
                data: {
                  type
                }
              });
            }
            if (handler) {
              setTimeout(() => {
                try {
                  handler(data, this);
                } catch (error) {
                  var _this$logger5, _this$logger5$error;
                  (_this$logger5 = this.logger) === null || _this$logger5 === void 0 || (_this$logger5$error = _this$logger5.error) === null || _this$logger5$error === void 0 || _this$logger5$error.call(_this$logger5, 'Error in event handler', {
                    type,
                    error
                  });
                }
              }, 0);
            } else {
              var _this$logger6, _this$logger6$info;
              if (type === WsAction.ACK || type === WsAction.PING) {
                return;
              }
              (_this$logger6 = this.logger) === null || _this$logger6 === void 0 || (_this$logger6$info = _this$logger6.info) === null || _this$logger6$info === void 0 || _this$logger6$info.call(_this$logger6, 'unhandled message', data);
            }
          }
          ack(evt) {
            if (!evt.syn) return;
            setTimeout(() => {
              this.send(WsAction.ACK, {
                syn: evt.syn
              });
            }, 0);
          }
          handleOpened() {
            this.lastMessageTime = Date.now();
            if (this.reconnectCount > 0) {
              this.emitEvent(WsEvent.WS_RECONNECTED);
            } else {
              this.emitEvent(WsEvent.WS_OPENED);
            }
            this.reconnectCount = 0;
          }
          handleClosed() {
            this.doClose();
            this.emitEvent(WsEvent.WS_CLOSED);
          }
          handleError(event) {
            const errorEvent = new Event({
              type: WsEvent.WS_ERROR,
              data: {
                error: event.message || event.error
              }
            });
            this.emitEvent(WsEvent.WS_ERROR, errorEvent);
          }
          get isConnected() {
            return this.ws && this.ws.readyState === WebSocket$1.OPEN;
          }
          startHeartbeat() {
            this.heartbeatTimer = setInterval(() => {
              // Skip heartbeat checks during reconnection
              if (this.inflightReconnect) {
                return;
              }
              // send ping when server has no recent activity
              if (Date.now() - this.lastMessageTime >= this.heartbeatIntervalMs && Date.now() - this.lastHeartbeatTime >= this.heartbeatIntervalMs) {
                this.lastHeartbeatTime = Date.now();
                this.send(WsAction.PING);
              }
              // reconnect when last incoming message is too long ago
              if (Date.now() - this.lastMessageTime > this.heartbeatTimeoutMs) {
                this.reconnect();
              }
            }, 200);
          }
          reconnect() {
            if (this.inflightReconnect) {
              return;
            }
            const promise = (async () => {
              try {
                this.reconnectCount++;
                const delay = this.reconnectDelayMs * 2 ** Math.min(this.reconnectCount - 1, 2);
                this.emitEvent(WsEvent.WS_RECONNECTING);
                await new Promise(r => setTimeout(r, delay));
                this.doClose();
                this.doConnect();
              } finally {
                this.inflightReconnect = undefined;
              }
            })();
            this.inflightReconnect = promise;
          }
          setLogger(logger) {
            this.logger = logger;
            return this;
          }
          /**
           * * Functions to send GameAction events
           */
          /** Save and store bet information on bet server. On bet stop, it will send all previous bets to debit transaction. */
          betPeek(roundId, gameType, gameCode, bets, count, uuid) {
            const payload = {
              roundId,
              gameType,
              gameCode,
              bets,
              count,
              uuid
            };
            this.send(GameAction.BET_PEEK, payload);
          }
          syncWallet() {
            this.send(GameAction.SYNC_WALLET);
          }
          /** Request RGS to save new nickname */
          rename(nickname) {
            this.send(GameAction.SET_PREFERENCE, {
              player: {
                nickname
              }
            });
          }
          /**
           * Request a day list that shows player bet and win subtotal.
           * @param {number[]} days List of request days in UTC timestamp.
           */
          subtotalBetHistory(days) {
            const payload = {
              days
            };
            this.send(GameAction.SUBTOTAL_BET_HISTORY, payload);
          }
          /**
           * Request a list of player's bet history.
           * @param {number} limit The maximum number of records to return in the result set.
           * @param {number?} offset The timestamp to skip before starting to return results.
           */
          listBetHistory(limit, offset) {
            const payload = {
              limit,
              offset
            };
            this.send(GameAction.LIST_BET_HISTORY, payload);
          }
          /** Send text message to game chat */
          sendGameChatText(text) {
            this.send(GameAction.CHAT_GAME, {
              msg: {
                content: {
                  text,
                  type: MessageContentType.TEXT
                }
              }
            });
          }
          /** List the history of game chat */
          listGameChatHistory(gameCode, limit) {
            this.send(GameAction.LIST_MESSAGE, {
              gameCode,
              limit
            });
          }
          /** List the history of support chat */
          listSupportChatHistory(limit) {
            this.send(GameAction.LIST_SUPPORT_MESSAGE, {
              limit
            });
          }
          /** Send text message to support chat */
          sendSupportChatChatText(text) {
            this.send(GameAction.CHAT_SUPPORT, {
              msg: {
                content: {
                  text,
                  type: MessageContentType.TEXT
                }
              }
            });
          }
          /** Send game history to support chat. This is a convenience for frontend to render game history in chatroom */
          sendSupportChatGameHistory(hist) {
            this.send(GameAction.CHAT_SUPPORT, {
              msg: {
                content: Object.assign({
                  type: MessageContentType.GAME_HISTORY
                }, hist)
              }
            });
          }
        }
        exports("C", Connect);
        var LruCacheOption;
        (function (LruCacheOption) {
          /** Move element to the end when set */
          LruCacheOption[LruCacheOption["MoveToEndWhenSet"] = 0] = "MoveToEndWhenSet";
          /** Move element to the end when get */
          LruCacheOption[LruCacheOption["MoveToEndWhenGet"] = 1] = "MoveToEndWhenGet";
        })(LruCacheOption || (LruCacheOption = {}));
      }
    };
  });
})();
//# sourceMappingURL=ikigaians-connect-core-legacy-DuYeXAwv.js.map
