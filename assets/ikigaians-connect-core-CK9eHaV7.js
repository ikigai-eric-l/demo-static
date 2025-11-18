var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { A as AfterKicked, M as MessageContentType } from "./ikigaians-house-core-CYkxu2p9.js";
var ws = null;
if (typeof WebSocket !== "undefined") {
  ws = WebSocket;
} else if (typeof MozWebSocket !== "undefined") {
  ws = MozWebSocket;
} else if (typeof global !== "undefined") {
  ws = global.WebSocket || global.MozWebSocket;
} else if (typeof window !== "undefined") {
  ws = window.WebSocket || window.MozWebSocket;
} else if (typeof self !== "undefined") {
  ws = self.WebSocket || self.MozWebSocket;
}
const WebSocket$1 = ws;
var WsEvent;
(function(WsEvent2) {
  WsEvent2["WS_OPENED"] = "ws.opened";
  WsEvent2["WS_CLOSED"] = "ws.closed";
  WsEvent2["WS_RECONNECTING"] = "ws.reconnecting";
  WsEvent2["WS_RECONNECTED"] = "ws.reconnected";
  WsEvent2["WS_ERROR"] = "ws.error";
})(WsEvent || (WsEvent = {}));
var WsAction;
(function(WsAction2) {
  WsAction2["ACK"] = "ack";
  WsAction2["PING"] = "ping";
  WsAction2["KICK"] = "kick";
})(WsAction || (WsAction = {}));
var GameAction;
(function(GameAction2) {
  GameAction2["SUBSCRIBE_TABLE"] = "sub.table";
  GameAction2["UNSUBSCRIBE_TABLE"] = "unsub.table";
  GameAction2["SUBSCRIBE_LOBBY"] = "sub.lobby";
  GameAction2["UNSUBSCRIBE_LOBBY"] = "unsub.lobby";
  GameAction2["UNSUBSCRIBE_SUPPORT"] = "unsub.support";
  GameAction2["SYNC_WALLET"] = "sync.wallet";
  GameAction2["BET_PEEK"] = "bet.peek";
  GameAction2["LIST_BET_HISTORY"] = "list.betHistory";
  GameAction2["SUBTOTAL_BET_HISTORY"] = "subtotal.betHistory";
  GameAction2["CHAT_GAME"] = "chat.table";
  GameAction2["CHAT_SUPPORT"] = "chat.support";
  GameAction2["LIST_MESSAGE"] = "list.msg";
  GameAction2["LIST_SUPPORT_MESSAGE"] = "list.supportMsg";
  GameAction2["SET_PREFERENCE"] = "set.pref";
})(GameAction || (GameAction = {}));
var GameEvent;
(function(GameEvent2) {
  GameEvent2["UNKNOWN"] = "unknown";
  GameEvent2["SESSION_KICKED"] = "session.kicked";
  GameEvent2["TABLE_KICKED"] = "table.kicked";
  GameEvent2["TABLE_STATE"] = "table.state";
  GameEvent2["TABLE_START"] = "table.start";
  GameEvent2["TABLE_BET_STOP"] = "table.betStop";
  GameEvent2["TABLE_DEAL"] = "table.deal";
  GameEvent2["TABLE_FINISH"] = "table.finish";
  GameEvent2["TABLE_WINNERS"] = "table.winners";
  GameEvent2["STREAM_ROTATE"] = "stream.rotate";
  GameEvent2["LOBBY_STATE"] = "lobby.state";
  GameEvent2["PLAYER_STATE"] = "player.state";
  GameEvent2["WALLET_STATE"] = "wallet.state";
  GameEvent2["BET_PEEK_ACK"] = "bet.ack";
  GameEvent2["BET_RESULT"] = "bet.result";
  GameEvent2["BET_STATS"] = "bet.stats";
  GameEvent2["BET_HISTORY_LIST"] = "betHistory.list";
  GameEvent2["BET_HISTORY_SUBTOTAL"] = "betHistory.subtotal";
  GameEvent2["GAME_MESSAGE"] = "table.msg";
  GameEvent2["SUPPORT_MESSAGE"] = "support.msg";
  GameEvent2["SYSTEM_MESSAGE"] = "system.msg";
  GameEvent2["TABLE_PAUSE"] = "table.pause";
  GameEvent2["TABLE_RESUME"] = "table.resume";
  GameEvent2["TABLE_MAINTENANCE"] = "table.maintenance";
})(GameEvent || (GameEvent = {}));
class Event {
  constructor(origin) {
    __publicField(this, "origin");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __publicField(this, "json");
    this.origin = origin;
    this.parse();
  }
  get type() {
    var _a;
    const value = (_a = this.json) == null ? void 0 : _a.type;
    if (typeof value === "string") {
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
    var _a;
    return (_a = this.json) == null ? void 0 : _a.syn;
  }
  get timecode() {
    var _a;
    return (_a = this.json) == null ? void 0 : _a.timecode;
  }
  get isValid() {
    return this.type != GameEvent.UNKNOWN;
  }
  get data() {
    var _a;
    return this.isValid ? (_a = this.json) == null ? void 0 : _a.data : void 0;
  }
  get error() {
    var _a;
    return this.isValid ? (_a = this.json) == null ? void 0 : _a.error : void 0;
  }
  parse() {
    if (!this.origin) {
      return;
    }
    let bufStr;
    if (typeof this.origin === "string") {
      bufStr = this.origin;
    } else if (this.origin instanceof ArrayBuffer) {
      bufStr = new TextDecoder().decode(this.origin);
    } else if (Array.isArray(this.origin) && this.origin.every((item) => item instanceof ArrayBuffer)) {
      bufStr = this.origin.reduce((acc, buf) => acc + new TextDecoder().decode(buf), "");
    } else if (globalThis.window === void 0 && Buffer.isBuffer(this.origin)) {
      bufStr = this.origin.toString();
    } else {
      this.json = this.origin;
      return;
    }
    try {
      this.json = JSON.parse(bufStr);
    } catch (e) {
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
  if (typeof handler === "function") {
    handler(evt, conn);
  }
}
const SERVER_ACTIVATE_SESSION_PATH = "/v1/exp/session/activate";
class Connect {
  /**
   * @param rgsUrl Url to game server
   * @param launchUrl Url of current session url. If omitted, use `windows.location`
   */
  constructor(rgsUrl, launchUrl) {
    __publicField(this, "rgsUrl");
    __publicField(this, "launchUrl");
    __publicField(this, "handlerMap");
    __publicField(this, "ws");
    __publicField(this, "logger");
    __publicField(this, "synNo", 0);
    __publicField(this, "heartbeatTimer");
    /** The last time we see a server message. */
    __publicField(this, "lastMessageTime", 0);
    __publicField(this, "lastHeartbeatTime", 0);
    /** Send a heartbeat if we see no incoming message after this duration.  */
    __publicField(this, "heartbeatIntervalMs", 1e3);
    /** If server has no response for this duration, a reconnect will be triggered. */
    __publicField(this, "heartbeatTimeoutMs", 5e3);
    __publicField(this, "reconnectDelayMs", 1e3);
    __publicField(this, "reconnectCount", 0);
    __publicField(this, "inflightReconnect");
    this.rgsUrl = rgsUrl;
    this.launchUrl = launchUrl;
    this.handlerMap = /* @__PURE__ */ new Map();
    this.ws = void 0;
  }
  get sid() {
    var _a;
    try {
      return new URL((_a = this.launchUrl) != null ? _a : "").searchParams.get("sid") || "";
    } catch (e) {
      return "";
    }
  }
  get url() {
    const url = new URL(this.rgsUrl);
    url.pathname = SERVER_ACTIVATE_SESSION_PATH;
    url.searchParams.set("sid", this.sid);
    return url.toString();
  }
  connect() {
    var _a, _b, _c, _d;
    if (!this.rgsUrl) {
      (_b = (_a = this.logger) == null ? void 0 : _a.error) == null ? void 0 : _b.call(_a, "Missing server URL to connect");
      return;
    }
    if (!this.sid) {
      (_d = (_c = this.logger) == null ? void 0 : _c.error) == null ? void 0 : _d.call(_c, "Missing sid to connect");
      return;
    }
    this.doConnect();
    this.lastMessageTime = Date.now();
    this.startHeartbeat();
  }
  close() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = void 0;
    }
    this.doClose();
    this.emitEvent(WsEvent.WS_CLOSED);
  }
  doConnect() {
    var _a, _b;
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
      (_b = (_a = this.logger) == null ? void 0 : _a.error) == null ? void 0 : _b.call(_a, "Failed to create WebSocket connection", error);
      const errorEvent = new Event({
        type: WsEvent.WS_ERROR,
        data: {
          error: error instanceof Error ? error.message : String(error)
        }
      });
      this.emitEvent(WsEvent.WS_ERROR, errorEvent);
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
      } catch (e) {
      }
      this.ws = void 0;
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
    var _a, _b;
    if (!this.isConnected || !this.ws) {
      (_b = (_a = this.logger) == null ? void 0 : _a.info) == null ? void 0 : _b.call(_a, "Message not sent (not connected): ".concat(act));
      return;
    }
    const data = {
      type: act,
      data: void 0,
      syn: "#".concat(this.synNo += 2)
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
    var _a, _b;
    let handler;
    if (this.handlerMap.has(type)) {
      handler = this.handlerMap.get(type);
    }
    if (!data) {
      data = new Event({ data: { type } });
    }
    if (handler) {
      setTimeout(() => {
        var _a2, _b2;
        try {
          handler(data, this);
        } catch (error) {
          (_b2 = (_a2 = this.logger) == null ? void 0 : _a2.error) == null ? void 0 : _b2.call(_a2, "Error in event handler", { type, error });
        }
      }, 0);
    } else {
      if (type === WsAction.ACK || type === WsAction.PING) {
        return;
      }
      (_b = (_a = this.logger) == null ? void 0 : _a.info) == null ? void 0 : _b.call(_a, "unhandled message", data);
    }
  }
  ack(evt) {
    if (!evt.syn)
      return;
    setTimeout(() => {
      this.send(WsAction.ACK, { syn: evt.syn });
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
      if (this.inflightReconnect) {
        return;
      }
      if (Date.now() - this.lastMessageTime >= this.heartbeatIntervalMs && Date.now() - this.lastHeartbeatTime >= this.heartbeatIntervalMs) {
        this.lastHeartbeatTime = Date.now();
        this.send(WsAction.PING);
      }
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
        await new Promise((r) => setTimeout(r, delay));
        this.doClose();
        this.doConnect();
      } finally {
        this.inflightReconnect = void 0;
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
    this.send(GameAction.SET_PREFERENCE, { player: { nickname } });
  }
  /**
   * Request a day list that shows player bet and win subtotal.
   * @param {number[]} days List of request days in UTC timestamp.
   */
  subtotalBetHistory(days) {
    const payload = { days };
    this.send(GameAction.SUBTOTAL_BET_HISTORY, payload);
  }
  /**
   * Request a list of player's bet history.
   * @param {number} limit The maximum number of records to return in the result set.
   * @param {number?} offset The timestamp to skip before starting to return results.
   */
  listBetHistory(limit, offset) {
    const payload = { limit, offset };
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
var LruCacheOption;
(function(LruCacheOption2) {
  LruCacheOption2[LruCacheOption2["MoveToEndWhenSet"] = 0] = "MoveToEndWhenSet";
  LruCacheOption2[LruCacheOption2["MoveToEndWhenGet"] = 1] = "MoveToEndWhenGet";
})(LruCacheOption || (LruCacheOption = {}));
export {
  Connect as C,
  GameEvent as G,
  WsEvent as W,
  GameAction as a
};
//# sourceMappingURL=ikigaians-connect-core-CK9eHaV7.js.map
