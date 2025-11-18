var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var CardSuit;
(function(CardSuit2) {
  CardSuit2["UNKNOWN"] = "";
  CardSuit2["CLUB"] = "c";
  CardSuit2["DIAMOND"] = "d";
  CardSuit2["HEART"] = "h";
  CardSuit2["SPADE"] = "s";
})(CardSuit || (CardSuit = {}));
var CardRank;
(function(CardRank2) {
  CardRank2["UNKNOWN"] = "";
  CardRank2["R2"] = "2";
  CardRank2["R3"] = "3";
  CardRank2["R4"] = "4";
  CardRank2["R5"] = "5";
  CardRank2["R6"] = "6";
  CardRank2["R7"] = "7";
  CardRank2["R8"] = "8";
  CardRank2["R9"] = "9";
  CardRank2["R10"] = "T";
  CardRank2["J"] = "J";
  CardRank2["Q"] = "Q";
  CardRank2["K"] = "K";
  CardRank2["A"] = "A";
})(CardRank || (CardRank = {}));
const cardRankAlias = {
  [CardRank.R10]: ["10"],
  [CardRank.J]: ["11"],
  [CardRank.Q]: ["12"],
  [CardRank.K]: ["13"]
};
const rankOrder = [
  CardRank.R2,
  CardRank.R3,
  CardRank.R4,
  CardRank.R5,
  CardRank.R6,
  CardRank.R7,
  CardRank.R8,
  CardRank.R9,
  CardRank.R10,
  CardRank.J,
  CardRank.Q,
  CardRank.K,
  CardRank.A
];
const suitOrder = [
  CardSuit.CLUB,
  CardSuit.DIAMOND,
  CardSuit.HEART,
  CardSuit.SPADE
];
function Card(input) {
  var _a;
  let suit = CardSuit.UNKNOWN;
  let rank = CardRank.UNKNOWN;
  if (typeof input === "number") {
    if (input >= 1 && input <= 52) {
      const index = input - 1;
      suit = suitOrder[Math.floor(index / 13)];
      rank = rankOrder[index % 13];
    }
  } else if (typeof input === "string") {
    const s = (_a = input[0]) == null ? void 0 : _a.toLowerCase();
    const r = input.slice(1).toUpperCase();
    suit = parseSuit(s);
    rank = parseRank(r);
  }
  if (suit === CardSuit.UNKNOWN || rank === CardRank.UNKNOWN) {
    suit = CardSuit.UNKNOWN;
    rank = CardRank.UNKNOWN;
  }
  return {
    suit,
    rank,
    toNumber() {
      const suitIndex = suitOrder.indexOf(this.suit);
      const rankIndex = rankOrder.indexOf(this.rank);
      if (suitIndex === -1 || rankIndex === -1)
        return 0;
      return suitIndex * 13 + rankIndex + 1;
    },
    toString() {
      return "".concat(this.suit).concat(this.rank);
    },
    isUnknown() {
      return this.suit === CardSuit.UNKNOWN && this.rank === CardRank.UNKNOWN;
    },
    equals(card) {
      return this.suit === card.suit && this.rank === card.rank;
    }
  };
}
function isCard(card) {
  return Card(card).toNumber() > 0;
}
function parseSuit(str) {
  var _a;
  return (_a = Object.values(CardSuit).find((v) => v === str)) != null ? _a : CardSuit.UNKNOWN;
}
function parseRank(str) {
  var _a;
  let rank = (_a = Object.values(CardRank).find((v) => v === str)) != null ? _a : CardRank.UNKNOWN;
  if (rank === CardRank.UNKNOWN) {
    for (const [r, alias] of Object.entries(cardRankAlias)) {
      if (alias.includes(str)) {
        rank = r;
        break;
      }
    }
  }
  return rank;
}
class GameResultError extends Error {
  constructor(message, result) {
    super(message);
    __publicField(this, "result");
    this.result = result;
    this.name = "GameResultError";
  }
}
class GameRule {
  constructor(rules) {
    __publicField(this, "rules");
    this.rules = rules;
  }
  /**
   * Determines whether the given game result is valid and can be settled.
   * @param result - The game result to evaluate.
   * @returns GameResultError if the result is invalid; otherwise, undefined.
   */
  validateResult(result) {
    for (const [validate, msg] of this.rules) {
      if (!validate(result)) {
        return new GameResultError(msg, result);
      }
    }
    return void 0;
  }
  /**
   * Validate opposite bets for the game.
   * @param bets - The bets to validate.
   * @returns boolean - true if opposite bets are valid, false otherwise.
   */
  validateOppositeBets(bets) {
    const rules = this.getOppositeBetRules();
    if (!rules) {
      return true;
    }
    const betNos = new Set(Object.entries(bets).filter(([, amount]) => amount > 0).map(([betNo]) => betNo));
    for (const rule of rules) {
      const hasAll = rule.every((betNo) => betNos.has(betNo));
      if (hasAll) {
        return false;
      }
    }
    return true;
  }
}
const isDiceNumber = (num) => [1, 2, 3, 4, 5, 6].includes(num);
const isRouletteNumber = (numStr) => [
  "00",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36"
].includes(numStr);
var MAX_DIGITS = 1e9, defaults = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Decimal, external = true, decimalError = "[DecimalError] ", invalidArgument = decimalError + "Invalid argument: ", exponentOutOfRange = decimalError + "Exponent out of range: ", mathfloor = Math.floor, mathpow = Math.pow, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ONE, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE), P = {};
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s) x.s = 1;
  return x;
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this;
  y = new x.constructor(y);
  if (x.s !== y.s) return x.s || -y.s;
  if (x.e !== y.e) return x.e > y.e ^ x.s < 0 ? 1 : -1;
  xdL = x.d.length;
  ydL = y.d.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (x.d[i] !== y.d[i]) return x.d[i] > y.d[i] ^ x.s < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ x.s < 0 ? 1 : -1;
};
P.decimalPlaces = P.dp = function() {
  var x = this, w = x.d.length - 1, dp = (w - x.e) * LOG_BASE;
  w = x.d[w];
  if (w) for (; w % 10 == 0; w /= 10) dp--;
  return dp < 0 ? 0 : dp;
};
P.dividedBy = P.div = function(y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.idiv = function(y) {
  var x = this, Ctor = x.constructor;
  return round(divide(x, new Ctor(y), 0, 1), Ctor.precision);
};
P.equals = P.eq = function(y) {
  return !this.cmp(y);
};
P.exponent = function() {
  return getBase10Exponent(this);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  return this.cmp(y) >= 0;
};
P.isInteger = P.isint = function() {
  return this.e > this.d.length - 2;
};
P.isNegative = P.isneg = function() {
  return this.s < 0;
};
P.isPositive = P.ispos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return this.s === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var r, x = this, Ctor = x.constructor, pr = Ctor.precision, wpr = pr + 5;
  if (base === void 0) {
    base = new Ctor(10);
  } else {
    base = new Ctor(base);
    if (base.s < 1 || base.eq(ONE)) throw Error(decimalError + "NaN");
  }
  if (x.s < 1) throw Error(decimalError + (x.s ? "NaN" : "-Infinity"));
  if (x.eq(ONE)) return new Ctor(0);
  external = false;
  r = divide(ln(x, wpr), ln(base, wpr), wpr);
  external = true;
  return round(r, pr);
};
P.minus = P.sub = function(y) {
  var x = this;
  y = new x.constructor(y);
  return x.s == y.s ? subtract(x, y) : add(x, (y.s = -y.s, y));
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor, pr = Ctor.precision;
  y = new Ctor(y);
  if (!y.s) throw Error(decimalError + "NaN");
  if (!x.s) return round(new Ctor(x), pr);
  external = false;
  q = divide(x, y, 0, 1).times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return exp(this);
};
P.naturalLogarithm = P.ln = function() {
  return ln(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s || 0;
  return x;
};
P.plus = P.add = function(y) {
  var x = this;
  y = new x.constructor(y);
  return x.s == y.s ? add(x, y) : subtract(x, (y.s = -y.s, y));
};
P.precision = P.sd = function(z) {
  var e, sd, w, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
  e = getBase10Exponent(x) + 1;
  w = x.d.length - 1;
  sd = w * LOG_BASE + 1;
  w = x.d[w];
  if (w) {
    for (; w % 10 == 0; w /= 10) sd--;
    for (w = x.d[0]; w >= 10; w /= 10) sd++;
  }
  return z && e > sd ? e : sd;
};
P.squareRoot = P.sqrt = function() {
  var e, n, pr, r, s, t, wpr, x = this, Ctor = x.constructor;
  if (x.s < 1) {
    if (!x.s) return new Ctor(0);
    throw Error(decimalError + "NaN");
  }
  e = getBase10Exponent(x);
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(x.d);
    if ((n.length + e) % 2 == 0) n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  pr = Ctor.precision;
  s = wpr = pr + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide(x, t, wpr + 2)).times(0.5);
    if (digitsToString(t.d).slice(0, wpr) === (n = digitsToString(r.d)).slice(0, wpr)) {
      n = n.slice(wpr - 3, wpr + 1);
      if (s == wpr && n == "4999") {
        round(t, pr + 1, 0);
        if (t.times(t).eq(x)) {
          r = t;
          break;
        }
      } else if (n != "9999") {
        break;
      }
      wpr += 4;
    }
  }
  external = true;
  return round(r, pr);
};
P.times = P.mul = function(y) {
  var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  if (!x.s || !y.s) return new Ctor(0);
  y.s *= x.s;
  e = x.e + y.e;
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; ) r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL]; ) r.pop();
  if (carry) ++e;
  else r.shift();
  y.d = r;
  y.e = e;
  return external ? round(y, Ctor.precision) : y;
};
P.toDecimalPlaces = P.todp = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0) return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);
  return round(x, dp + getBase10Exponent(x) + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = toString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    x = round(new Ctor(x), dp + 1, rm);
    str = toString(x, true, dp + 1);
  }
  return str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === void 0) return toString(x);
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);
  y = round(new Ctor(x), dp + getBase10Exponent(x) + 1, rm);
  str = toString(y.abs(), false, dp + getBase10Exponent(y) + 1);
  return x.isneg() && !x.isZero() ? "-" + str : str;
};
P.toInteger = P.toint = function() {
  var x = this, Ctor = x.constructor;
  return round(new Ctor(x), getBase10Exponent(x) + 1, Ctor.rounding);
};
P.toNumber = function() {
  return +this;
};
P.toPower = P.pow = function(y) {
  var e, k, pr, r, sign, yIsInt, x = this, Ctor = x.constructor, guard = 12, yn = +(y = new Ctor(y));
  if (!y.s) return new Ctor(ONE);
  x = new Ctor(x);
  if (!x.s) {
    if (y.s < 1) throw Error(decimalError + "Infinity");
    return x;
  }
  if (x.eq(ONE)) return x;
  pr = Ctor.precision;
  if (y.eq(ONE)) return round(x, pr);
  e = y.e;
  k = y.d.length - 1;
  yIsInt = e >= k;
  sign = x.s;
  if (!yIsInt) {
    if (sign < 0) throw Error(decimalError + "NaN");
  } else if ((k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = new Ctor(ONE);
    e = Math.ceil(pr / LOG_BASE + 4);
    external = false;
    for (; ; ) {
      if (k % 2) {
        r = r.times(x);
        truncate(r.d, e);
      }
      k = mathfloor(k / 2);
      if (k === 0) break;
      x = x.times(x);
      truncate(x.d, e);
    }
    external = true;
    return y.s < 0 ? new Ctor(ONE).div(r) : round(r, pr);
  }
  sign = sign < 0 && y.d[Math.max(e, k)] & 1 ? -1 : 1;
  x.s = 1;
  external = false;
  r = y.times(ln(x, pr + guard));
  external = true;
  r = exp(r);
  r.s = sign;
  return r;
};
P.toPrecision = function(sd, rm) {
  var e, str, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    e = getBase10Exponent(x);
    str = toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    x = round(new Ctor(x), sd, rm);
    e = getBase10Exponent(x);
    str = toString(x, sd <= e || e <= Ctor.toExpNeg, sd);
  }
  return str;
};
P.toSignificantDigits = P.tosd = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  }
  return round(new Ctor(x), sd, rm);
};
P.toString = P.valueOf = P.val = P.toJSON = P[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var x = this, e = getBase10Exponent(x), Ctor = x.constructor;
  return toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
};
function add(x, y) {
  var carry, d, e, i, k, len, xd, yd, Ctor = x.constructor, pr = Ctor.precision;
  if (!x.s || !y.s) {
    if (!y.s) y = new Ctor(x);
    return external ? round(y, pr) : y;
  }
  xd = x.d;
  yd = y.d;
  k = x.e;
  e = y.e;
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; ) d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; ) xd.pop();
  y.d = xd;
  y.e = e;
  return external ? round(y, pr) : y;
}
function checkInt32(i, min, max) {
  if (i !== ~~i || i < min || i > max) {
    throw Error(invalidArgument + i);
  }
}
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k) str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; ) w /= 10;
  return str + w;
}
var divide = /* @__PURE__ */ (function() {
  function multiplyInteger(x, k) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % BASE | 0;
      carry = temp / BASE | 0;
    }
    if (carry) x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract2(a, b, aL) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * BASE + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; ) a.shift();
  }
  return function(x, y, pr, dp) {
    var cmp, e, i, k, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!x.s) return new Ctor(x);
    if (!y.s) throw Error(decimalError + "Division by zero");
    e = x.e - y.e;
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); ) ++i;
    if (yd[i] > (xd[i] || 0)) --e;
    if (pr == null) {
      sd = pr = Ctor.precision;
    } else if (dp) {
      sd = pr + (getBase10Exponent(x) - getBase10Exponent(y)) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) return new Ctor(0);
    sd = sd / LOG_BASE + 2 | 0;
    i = 0;
    if (yL == 1) {
      k = 0;
      yd = yd[0];
      sd++;
      for (; (i < xL || k) && sd--; i++) {
        t = k * BASE + (xd[i] || 0);
        qd[i] = t / yd | 0;
        k = t % yd | 0;
      }
    } else {
      k = BASE / (yd[0] + 1) | 0;
      if (k > 1) {
        yd = multiplyInteger(yd, k);
        xd = multiplyInteger(xd, k);
        yL = yd.length;
        xL = xd.length;
      }
      xi = yL;
      rem = xd.slice(0, yL);
      remL = rem.length;
      for (; remL < yL; ) rem[remL++] = 0;
      yz = yd.slice();
      yz.unshift(0);
      yd0 = yd[0];
      if (yd[1] >= BASE / 2) ++yd0;
      do {
        k = 0;
        cmp = compare(yd, rem, yL, remL);
        if (cmp < 0) {
          rem0 = rem[0];
          if (yL != remL) rem0 = rem0 * BASE + (rem[1] || 0);
          k = rem0 / yd0 | 0;
          if (k > 1) {
            if (k >= BASE) k = BASE - 1;
            prod = multiplyInteger(yd, k);
            prodL = prod.length;
            remL = rem.length;
            cmp = compare(prod, rem, prodL, remL);
            if (cmp == 1) {
              k--;
              subtract2(prod, yL < prodL ? yz : yd, prodL);
            }
          } else {
            if (k == 0) cmp = k = 1;
            prod = yd.slice();
          }
          prodL = prod.length;
          if (prodL < remL) prod.unshift(0);
          subtract2(rem, prod, remL);
          if (cmp == -1) {
            remL = rem.length;
            cmp = compare(yd, rem, yL, remL);
            if (cmp < 1) {
              k++;
              subtract2(rem, yL < remL ? yz : yd, remL);
            }
          }
          remL = rem.length;
        } else if (cmp === 0) {
          k++;
          rem = [0];
        }
        qd[i++] = k;
        if (cmp && rem[0]) {
          rem[remL++] = xd[xi] || 0;
        } else {
          rem = [xd[xi]];
          remL = 1;
        }
      } while ((xi++ < xL || rem[0] !== void 0) && sd--);
    }
    if (!qd[0]) qd.shift();
    q.e = e;
    return round(q, dp ? pr + getBase10Exponent(q) + 1 : pr);
  };
})();
function exp(x, sd) {
  var denominator, guard, pow, sum, t, wpr, i = 0, k = 0, Ctor = x.constructor, pr = Ctor.precision;
  if (getBase10Exponent(x) > 16) throw Error(exponentOutOfRange + getBase10Exponent(x));
  if (!x.s) return new Ctor(ONE);
  {
    external = false;
    wpr = pr;
  }
  t = new Ctor(0.03125);
  while (x.abs().gte(0.1)) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow = sum = new Ctor(ONE);
  Ctor.precision = wpr;
  for (; ; ) {
    pow = round(pow.times(x), wpr);
    denominator = denominator.times(++i);
    t = sum.plus(divide(pow, denominator, wpr));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      while (k--) sum = round(sum.times(sum), wpr);
      Ctor.precision = pr;
      return sd == null ? (external = true, round(sum, pr)) : sum;
    }
    sum = t;
  }
}
function getBase10Exponent(x) {
  var e = x.e * LOG_BASE, w = x.d[0];
  for (; w >= 10; w /= 10) e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > Ctor.LN10.sd()) {
    external = true;
    if (pr) Ctor.precision = pr;
    throw Error(decimalError + "LN10 precision limit exceeded");
  }
  return round(new Ctor(Ctor.LN10), sd);
}
function getZeroString(k) {
  var zs = "";
  for (; k--; ) zs += "0";
  return zs;
}
function ln(y, sd) {
  var c, c0, denominator, e, numerator, sum, t, wpr, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, pr = Ctor.precision;
  if (x.s < 1) throw Error(decimalError + (x.s ? "NaN" : "-Infinity"));
  if (x.eq(ONE)) return new Ctor(0);
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  if (x.eq(10)) {
    if (sd == null) external = true;
    return getLn10(Ctor, wpr);
  }
  wpr += guard;
  Ctor.precision = wpr;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  e = getBase10Exponent(x);
  if (Math.abs(e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = getBase10Exponent(x);
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = ln(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? (external = true, round(x, pr)) : x;
  }
  sum = numerator = x = divide(x.minus(ONE), x.plus(ONE), wpr);
  x2 = round(x.times(x), wpr);
  denominator = 3;
  for (; ; ) {
    numerator = round(numerator.times(x2), wpr);
    t = sum.plus(divide(numerator, new Ctor(denominator), wpr));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      sum = sum.times(2);
      if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum = divide(sum, new Ctor(n), wpr);
      Ctor.precision = pr;
      return sd == null ? (external = true, round(sum, pr)) : sum;
    }
    sum = t;
    denominator += 2;
  }
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0) e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; ) ++i;
  for (len = str.length; str.charCodeAt(len - 1) === 48; ) --len;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    e = e - i - 1;
    x.e = mathfloor(e / LOG_BASE);
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0) i += LOG_BASE;
    if (i < len) {
      if (i) x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; ) x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; ) str += "0";
    x.d.push(+str);
    if (external && (x.e > MAX_E || x.e < -MAX_E)) throw Error(exponentOutOfRange + e);
  } else {
    x.s = 0;
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function round(x, sd, rm) {
  var i, j, k, n, rd, doRound, w, xdi, xd = x.d;
  for (n = 1, k = xd[0]; k >= 10; k /= 10) n++;
  i = sd - n;
  if (i < 0) {
    i += LOG_BASE;
    j = sd;
    w = xd[xdi = 0];
  } else {
    xdi = Math.ceil((i + 1) / LOG_BASE);
    k = xd.length;
    if (xdi >= k) return x;
    w = k = xd[xdi];
    for (n = 1; k >= 10; k /= 10) n++;
    i %= LOG_BASE;
    j = i - LOG_BASE + n;
  }
  if (rm !== void 0) {
    k = mathpow(10, n - j - 1);
    rd = w / k % 10 | 0;
    doRound = sd < 0 || xd[xdi + 1] !== void 0 || w % k;
    doRound = rm < 4 ? (rd || doRound) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || doRound || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (i > 0 ? j > 0 ? w / mathpow(10, n - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
  }
  if (sd < 1 || !xd[0]) {
    if (doRound) {
      k = getBase10Exponent(x);
      xd.length = 1;
      sd = sd - k - 1;
      xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
      x.e = mathfloor(-sd / LOG_BASE) || 0;
    } else {
      xd.length = 1;
      xd[0] = x.e = x.s = 0;
    }
    return x;
  }
  if (i == 0) {
    xd.length = xdi;
    k = 1;
    xdi--;
  } else {
    xd.length = xdi + 1;
    k = mathpow(10, LOG_BASE - i);
    xd[xdi] = j > 0 ? (w / mathpow(10, n - j) % mathpow(10, j) | 0) * k : 0;
  }
  if (doRound) {
    for (; ; ) {
      if (xdi == 0) {
        if ((xd[0] += k) == BASE) {
          xd[0] = 1;
          ++x.e;
        }
        break;
      } else {
        xd[xdi] += k;
        if (xd[xdi] != BASE) break;
        xd[xdi--] = 0;
        k = 1;
      }
    }
  }
  for (i = xd.length; xd[--i] === 0; ) xd.pop();
  if (external && (x.e > MAX_E || x.e < -MAX_E)) {
    throw Error(exponentOutOfRange + getBase10Exponent(x));
  }
  return x;
}
function subtract(x, y) {
  var d, e, i, j, k, len, xd, xe, xLTy, yd, Ctor = x.constructor, pr = Ctor.precision;
  if (!x.s || !y.s) {
    if (y.s) y.s = -y.s;
    else y = new Ctor(x);
    return external ? round(y, pr) : y;
  }
  xd = x.d;
  yd = y.d;
  e = y.e;
  xe = x.e;
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; ) d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy) len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; ) xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; ) xd.pop();
  for (; xd[0] === 0; xd.shift()) --e;
  if (!xd[0]) return new Ctor(0);
  y.d = xd;
  y.e = e;
  return external ? round(y, pr) : y;
}
function toString(x, isExp, sd) {
  var k, e = getBase10Exponent(x), str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (e < 0 ? "e" : "e+") + e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0) str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0) str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len) str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len) str += ".";
      str += getZeroString(k);
    }
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function clone(obj) {
  var i, p, ps;
  function Decimal2(value) {
    var x = this;
    if (!(x instanceof Decimal2)) return new Decimal2(value);
    x.constructor = Decimal2;
    if (value instanceof Decimal2) {
      x.s = value.s;
      x.e = value.e;
      x.d = (value = value.d) ? value.slice() : value;
      return;
    }
    if (typeof value === "number") {
      if (value * 0 !== 0) {
        throw Error(invalidArgument + value);
      }
      if (value > 0) {
        x.s = 1;
      } else if (value < 0) {
        value = -value;
        x.s = -1;
      } else {
        x.s = 0;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (value === ~~value && value < 1e7) {
        x.e = 0;
        x.d = [value];
        return;
      }
      return parseDecimal(x, value.toString());
    } else if (typeof value !== "string") {
      throw Error(invalidArgument + value);
    }
    if (value.charCodeAt(0) === 45) {
      value = value.slice(1);
      x.s = -1;
    } else {
      x.s = 1;
    }
    if (isDecimal.test(value)) parseDecimal(x, value);
    else throw Error(invalidArgument + value);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.clone = clone;
  Decimal2.config = Decimal2.set = config;
  if (obj === void 0) obj = {};
  if (obj) {
    ps = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
    for (i = 0; i < ps.length; ) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
  }
  Decimal2.config(obj);
  return Decimal2;
}
function config(obj) {
  if (!obj || typeof obj !== "object") {
    throw Error(decimalError + "Object expected");
  }
  var i, p, v, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (i = 0; i < ps.length; i += 3) {
    if ((v = obj[p = ps[i]]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
      else throw Error(invalidArgument + p + ": " + v);
    }
  }
  if ((v = obj[p = "LN10"]) !== void 0) {
    if (v == Math.LN10) this[p] = new this(v);
    else throw Error(invalidArgument + p + ": " + v);
  }
  return this;
}
var Decimal = clone(defaults);
ONE = new Decimal(1);
const Decimal$1 = Decimal;
var BaccaratBetLimitProfile;
(function(BaccaratBetLimitProfile2) {
  BaccaratBetLimitProfile2["PLAYER"] = "bc.player";
  BaccaratBetLimitProfile2["BANKER"] = "bc.banker";
  BaccaratBetLimitProfile2["TIE"] = "bc.tie";
  BaccaratBetLimitProfile2["PLAYER_PAIR"] = "bc.p-pair";
  BaccaratBetLimitProfile2["BANKER_PAIR"] = "bc.b-pair";
  BaccaratBetLimitProfile2["PERFECT_PAIR"] = "bc.pp";
  BaccaratBetLimitProfile2["EITHER_PAIR"] = "bc.e-pair";
  BaccaratBetLimitProfile2["PLAYER_BANKER_BONUS"] = "bc.pb-bonus";
})(BaccaratBetLimitProfile || (BaccaratBetLimitProfile = {}));
var BaccaratBetNo;
(function(BaccaratBetNo2) {
  BaccaratBetNo2["PLAYER"] = "bc.player";
  BaccaratBetNo2["BANKER"] = "bc.banker";
  BaccaratBetNo2["TIE"] = "bc.tie";
  BaccaratBetNo2["PLAYER_PAIR"] = "bc.p-pair";
  BaccaratBetNo2["BANKER_PAIR"] = "bc.b-pair";
  BaccaratBetNo2["PERFECT_PAIR"] = "bc.pp";
  BaccaratBetNo2["EITHER_PAIR"] = "bc.e-pair";
  BaccaratBetNo2["PLAYER_BONUS"] = "bc.pb";
  BaccaratBetNo2["BANKER_BONUS"] = "bc.bb";
})(BaccaratBetNo || (BaccaratBetNo = {}));
var BaccaratBetType;
(function(BaccaratBetType2) {
  BaccaratBetType2["PLAYER_TIE"] = "bc.p-tie";
  BaccaratBetType2["PLAYER"] = "bc.player";
  BaccaratBetType2["BANKER_TIE"] = "bc.b-tie";
  BaccaratBetType2["BANKER"] = "bc.banker";
  BaccaratBetType2["TIE"] = "bc.tie";
  BaccaratBetType2["PLAYER_PAIR"] = "bc.p-pair";
  BaccaratBetType2["BANKER_PAIR"] = "bc.b-pair";
  BaccaratBetType2["PERFECT_PAIR_ONE_HAND"] = "bc.pp-one";
  BaccaratBetType2["PERFECT_PAIR_BOTH_HANDS"] = "bc.pp-both";
  BaccaratBetType2["EITHER_PAIR"] = "bc.e-pair";
  BaccaratBetType2["PLAYER_BONUS_NATURAL_TIE"] = "bc.pb-n-tie";
  BaccaratBetType2["PLAYER_BONUS_NATURAL_WIN"] = "bc.pb-n-win";
  BaccaratBetType2["PLAYER_BONUS_NON_NATURAL_WIN_BY_4"] = "bc.pb-nn-4";
  BaccaratBetType2["PLAYER_BONUS_NON_NATURAL_WIN_BY_5"] = "bc.pb-nn-5";
  BaccaratBetType2["PLAYER_BONUS_NON_NATURAL_WIN_BY_6"] = "bc.pb-nn-6";
  BaccaratBetType2["PLAYER_BONUS_NON_NATURAL_WIN_BY_7"] = "bc.pb-nn-7";
  BaccaratBetType2["PLAYER_BONUS_NON_NATURAL_WIN_BY_8"] = "bc.pb-nn-8";
  BaccaratBetType2["PLAYER_BONUS_NON_NATURAL_WIN_BY_9"] = "bc.pb-nn-9";
  BaccaratBetType2["BANKER_BONUS_NATURAL_TIE"] = "bc.bb-n-tie";
  BaccaratBetType2["BANKER_BONUS_NATURAL_WIN"] = "bc.bb-n-win";
  BaccaratBetType2["BANKER_BONUS_NON_NATURAL_WIN_BY_4"] = "bc.bb-nn-4";
  BaccaratBetType2["BANKER_BONUS_NON_NATURAL_WIN_BY_5"] = "bc.bb-nn-5";
  BaccaratBetType2["BANKER_BONUS_NON_NATURAL_WIN_BY_6"] = "bc.bb-nn-6";
  BaccaratBetType2["BANKER_BONUS_NON_NATURAL_WIN_BY_7"] = "bc.bb-nn-7";
  BaccaratBetType2["BANKER_BONUS_NON_NATURAL_WIN_BY_8"] = "bc.bb-nn-8";
  BaccaratBetType2["BANKER_BONUS_NON_NATURAL_WIN_BY_9"] = "bc.bb-nn-9";
})(BaccaratBetType || (BaccaratBetType = {}));
function parseBaccaratBetNo(input) {
  const enumValues = Object.values(BaccaratBetNo);
  if (enumValues.includes(input)) {
    return input;
  }
  return void 0;
}
var BaccaratOutcome;
(function(BaccaratOutcome2) {
  BaccaratOutcome2["PLAYER"] = "bc.player";
  BaccaratOutcome2["BANKER"] = "bc.banker";
  BaccaratOutcome2["TIE"] = "bc.tie";
  BaccaratOutcome2["UNKNOWN"] = "unknown";
})(BaccaratOutcome || (BaccaratOutcome = {}));
const BaccaratBetNoToLimitProfileMap = {
  [BaccaratBetNo.PLAYER]: BaccaratBetLimitProfile.PLAYER,
  [BaccaratBetNo.BANKER]: BaccaratBetLimitProfile.BANKER,
  [BaccaratBetNo.TIE]: BaccaratBetLimitProfile.TIE,
  [BaccaratBetNo.PLAYER_PAIR]: BaccaratBetLimitProfile.PLAYER_PAIR,
  [BaccaratBetNo.BANKER_PAIR]: BaccaratBetLimitProfile.BANKER_PAIR,
  [BaccaratBetNo.PERFECT_PAIR]: BaccaratBetLimitProfile.PERFECT_PAIR,
  [BaccaratBetNo.EITHER_PAIR]: BaccaratBetLimitProfile.EITHER_PAIR,
  [BaccaratBetNo.PLAYER_BONUS]: BaccaratBetLimitProfile.PLAYER_BANKER_BONUS,
  [BaccaratBetNo.BANKER_BONUS]: BaccaratBetLimitProfile.PLAYER_BANKER_BONUS
};
const BaccaratWinningRate = {
  [BaccaratBetType.PLAYER_TIE]: new Decimal$1(0),
  [BaccaratBetType.PLAYER]: new Decimal$1(1),
  [BaccaratBetType.BANKER_TIE]: new Decimal$1(0),
  [BaccaratBetType.BANKER]: new Decimal$1(0.95),
  [BaccaratBetType.TIE]: new Decimal$1(8),
  [BaccaratBetType.PLAYER_PAIR]: new Decimal$1(11),
  [BaccaratBetType.BANKER_PAIR]: new Decimal$1(11),
  [BaccaratBetType.PERFECT_PAIR_ONE_HAND]: new Decimal$1(25),
  [BaccaratBetType.PERFECT_PAIR_BOTH_HANDS]: new Decimal$1(200),
  [BaccaratBetType.EITHER_PAIR]: new Decimal$1(5),
  [BaccaratBetType.PLAYER_BONUS_NATURAL_TIE]: new Decimal$1(0),
  [BaccaratBetType.PLAYER_BONUS_NATURAL_WIN]: new Decimal$1(1),
  [BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_4]: new Decimal$1(1),
  [BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_5]: new Decimal$1(2),
  [BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_6]: new Decimal$1(4),
  [BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_7]: new Decimal$1(6),
  [BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_8]: new Decimal$1(10),
  [BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_9]: new Decimal$1(30),
  [BaccaratBetType.BANKER_BONUS_NATURAL_TIE]: new Decimal$1(0),
  [BaccaratBetType.BANKER_BONUS_NATURAL_WIN]: new Decimal$1(1),
  [BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_4]: new Decimal$1(1),
  [BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_5]: new Decimal$1(2),
  [BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_6]: new Decimal$1(4),
  [BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_7]: new Decimal$1(6),
  [BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_8]: new Decimal$1(10),
  [BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_9]: new Decimal$1(30)
};
const BaccaratOppositeBetRules = [
  [BaccaratBetNo.PLAYER, BaccaratBetNo.BANKER]
];
function getBaccaratCardValue(card) {
  switch (card.rank) {
    case CardRank.A: {
      return 1;
    }
    case CardRank.R2:
    case CardRank.R3:
    case CardRank.R4:
    case CardRank.R5:
    case CardRank.R6:
    case CardRank.R7:
    case CardRank.R8:
    case CardRank.R9: {
      return Number.parseInt(card.rank, 10);
    }
    // 10, J, Q, K are all worth 0 in Baccarat
    default: {
      return 0;
    }
  }
}
function sumBaccarat(cards) {
  const total = cards.reduce((sum, card) => sum + getBaccaratCardValue(card), 0);
  return total % 10;
}
class BaccaratCards {
  constructor(cards) {
    __publicField(this, "cards");
    this.cards = cards;
  }
  get playerCards() {
    return this.cards.slice(0, 3);
  }
  get bankerCards() {
    return this.cards.slice(3, 6);
  }
  get playerFirstTwoCards() {
    return this.cards.slice(0, 2);
  }
  get bankerFirstTwoCards() {
    return this.cards.slice(3, 5);
  }
  isPlayerNatural() {
    const sum = sumBaccarat(this.playerFirstTwoCards);
    return sum === 8 || sum === 9;
  }
  isBankerNatural() {
    const sum = sumBaccarat(this.bankerFirstTwoCards);
    return sum === 8 || sum === 9;
  }
  sumPlayer() {
    return sumBaccarat(this.playerCards);
  }
  sumBanker() {
    return sumBaccarat(this.bankerCards);
  }
  getMarginOfVictory() {
    return Math.abs(this.sumPlayer() - this.sumBanker());
  }
  isPlayerWin() {
    return this.sumPlayer() > this.sumBanker();
  }
  isBankerWin() {
    return this.sumBanker() > this.sumPlayer();
  }
  isTie() {
    return this.sumPlayer() === this.sumBanker();
  }
  hasPlayerPair() {
    var _a, _b;
    return ((_a = this.cards[0]) == null ? void 0 : _a.rank) === ((_b = this.cards[1]) == null ? void 0 : _b.rank);
  }
  hasBankerPair() {
    var _a, _b;
    return ((_a = this.cards[3]) == null ? void 0 : _a.rank) === ((_b = this.cards[4]) == null ? void 0 : _b.rank);
  }
  hasPlayerPerfectPair() {
    return this.cards[0].equals(this.cards[1]);
  }
  hasBankerPerfectPair() {
    return this.cards[3].equals(this.cards[4]);
  }
  hasAnyPair() {
    return this.hasPlayerPair() || this.hasBankerPair();
  }
  hasAnyPerfectPair() {
    return this.hasPlayerPerfectPair() || this.hasBankerPerfectPair();
  }
  hasBothPerfectPairs() {
    return this.hasPlayerPerfectPair() && this.hasBankerPerfectPair();
  }
  getSettledOutcome() {
    const cards = this.cards.map((card) => card.toString());
    if (!isDealComplete(cards)) {
      return BaccaratOutcome.UNKNOWN;
    }
    if (this.isPlayerWin()) {
      return BaccaratOutcome.PLAYER;
    } else if (this.isBankerWin()) {
      return BaccaratOutcome.BANKER;
    }
    return BaccaratOutcome.TIE;
  }
}
function playerCards(result) {
  return result.slice(0, 3).filter(Boolean).map((r) => Card(r));
}
function bankerCards(result) {
  return result.slice(3, 6).filter(Boolean).map((r) => Card(r));
}
function needDrawPlayer(result) {
  const cards = playerCards(result);
  const bankers = bankerCards(result);
  return needDrawPlayerFromCards(cards, bankers);
}
function needDrawPlayerFromCards(cards, bankerCards2) {
  if (cards.length < 2)
    return true;
  const total = sumBaccarat(cards.slice(0, 2));
  const bankerTotal = sumBaccarat(bankerCards2.slice(0, 2));
  if (Math.max(total, bankerTotal) >= 8)
    return false;
  return total >= 0 && total <= 5;
}
function needDrawBanker(result) {
  const players = playerCards(result);
  const bankers = bankerCards(result);
  return needDrawBankerFromCards(players, bankers);
}
function needDrawBankerFromCards(playerHand, bankerHand) {
  if (bankerHand.length < 2)
    return true;
  const playerTotal = sumBaccarat(playerHand.slice(0, 2));
  const bankerTotal = sumBaccarat(bankerHand.slice(0, 2));
  if (Math.max(playerTotal, bankerTotal) >= 8)
    return false;
  const playerHas3 = playerHand.length === 3;
  const player3 = playerHas3 ? getBaccaratCardValue(playerHand[2]) : null;
  if (bankerTotal <= 2)
    return true;
  if (bankerTotal === 3)
    return !playerHas3 || player3 !== 8;
  if (bankerTotal === 4 && player3 !== null) {
    return player3 >= 2 && player3 <= 7;
  }
  if (bankerTotal === 5 && player3 !== null) {
    return player3 >= 4 && player3 <= 7;
  }
  if (bankerTotal === 6 && player3 !== null) {
    return player3 === 6 || player3 === 7;
  }
  return false;
}
function isDealComplete(cards) {
  if (cards.length < 6)
    return false;
  const gameResult = { baccarat: cards };
  for (const [res] of BaccaratGameFinishRules) {
    if (!res(gameResult)) {
      return false;
    }
  }
  return true;
}
const BaccaratGameResultRules = [
  [
    (result) => {
      const { baccarat } = result;
      return !(baccarat == void 0 || baccarat == null);
    },
    "the baccarat cards are missing"
  ],
  [
    (result) => {
      const { baccarat } = result;
      return Array.isArray(baccarat);
    },
    "the baccarat cards are incorrect type"
  ],
  [
    (result) => {
      const { baccarat } = result;
      return baccarat.length === 6;
    },
    "the baccarat cards are incorrect length"
  ],
  [
    (result) => {
      var _a;
      const player1 = (_a = result == null ? void 0 : result.baccarat) == null ? void 0 : _a[0];
      return !player1 || isCard(player1);
    },
    "the 1st player card is incorrect"
  ],
  [
    (result) => {
      var _a;
      const player2 = (_a = result == null ? void 0 : result.baccarat) == null ? void 0 : _a[1];
      return !player2 || isCard(player2);
    },
    "the 2nd player card is incorrect"
  ],
  [
    (result) => {
      var _a;
      const player3 = (_a = result == null ? void 0 : result.baccarat) == null ? void 0 : _a[2];
      return !player3 || isCard(player3);
    },
    "the 3rd player card is incorrect"
  ],
  [
    (result) => {
      var _a;
      const banker1 = (_a = result == null ? void 0 : result.baccarat) == null ? void 0 : _a[3];
      return !banker1 || isCard(banker1);
    },
    "the 1st banker card is incorrect"
  ],
  [
    (result) => {
      var _a;
      const banker2 = (_a = result == null ? void 0 : result.baccarat) == null ? void 0 : _a[4];
      return !banker2 || isCard(banker2);
    },
    "the 2nd banker card is incorrect"
  ],
  [
    (result) => {
      var _a;
      const banker3 = (_a = result == null ? void 0 : result.baccarat) == null ? void 0 : _a[5];
      return !banker3 || isCard(banker3);
    },
    "the 3rd banker card is incorrect"
  ]
];
const BaccaratGameFinishRules = [
  [
    (result) => {
      const { baccarat } = result;
      return Array.isArray(baccarat) && baccarat.length === 6;
    },
    "the baccarat cards are incorrect length"
  ],
  [
    (result) => {
      const { baccarat } = result;
      return Array.isArray(baccarat) && // If need to draw banker, must have a card. Else must be empty.
      (needDrawBanker(baccarat) ? baccarat[5] !== "" : baccarat[5] === "");
    },
    "banker draw validation failed"
  ],
  [
    (result) => {
      const { baccarat } = result;
      return Array.isArray(baccarat) && // If need to draw player, must have a card. Else must be empty.
      (needDrawPlayer(baccarat) ? baccarat[2] !== "" : baccarat[2] === "");
    },
    "player draw validation failed"
  ]
];
class BaccaratGame extends GameRule {
  constructor() {
    super(BaccaratGameResultRules);
  }
  validateBetType(betNo) {
    return parseBaccaratBetNo(betNo) != void 0;
  }
  getWinningProfile(result) {
    if (this.validateResult(result) !== void 0) {
      return /* @__PURE__ */ new Map();
    }
    const cardArray = result.baccarat ? result.baccarat.map((card) => Card(card)) : [];
    if (cardArray.length !== 6) {
      return /* @__PURE__ */ new Map();
    }
    const baccaratCards = new BaccaratCards(cardArray);
    const profileForRank = getWinningProfileForRankComparison(baccaratCards);
    const profileForPair = getWinningProfileForPairExistence(baccaratCards);
    return new Map([...profileForRank, ...profileForPair]);
  }
  extractBetLimitProfileFromNo(maybeBetNo) {
    const betNo = parseBaccaratBetNo(maybeBetNo);
    if (!betNo) {
      return void 0;
    }
    return BaccaratBetNoToLimitProfileMap[betNo];
  }
  getOppositeBetRules() {
    return BaccaratOppositeBetRules;
  }
}
function getWinningProfileForRankComparison(baccaratCards) {
  const playerIsNatural = baccaratCards.isPlayerNatural();
  const bankerIsNatural = baccaratCards.isBankerNatural();
  if (baccaratCards.isTie()) {
    return handleTieScenario(playerIsNatural, bankerIsNatural);
  }
  if (baccaratCards.isPlayerWin()) {
    return handlePlayerWinScenario(baccaratCards, playerIsNatural);
  }
  return handleBankerWinScenario(baccaratCards, bankerIsNatural);
}
function handleTieScenario(playerIsNatural, bankerIsNatural) {
  const tieResult = /* @__PURE__ */ new Map([
    [BaccaratBetNo.PLAYER, BaccaratWinningRate[BaccaratBetType.PLAYER_TIE]],
    [BaccaratBetNo.BANKER, BaccaratWinningRate[BaccaratBetType.BANKER_TIE]],
    [BaccaratBetNo.TIE, BaccaratWinningRate[BaccaratBetType.TIE]]
  ]);
  if (playerIsNatural || bankerIsNatural) {
    tieResult.set(BaccaratBetNo.PLAYER_BONUS, BaccaratWinningRate[BaccaratBetType.PLAYER_BONUS_NATURAL_TIE]);
    tieResult.set(BaccaratBetNo.BANKER_BONUS, BaccaratWinningRate[BaccaratBetType.BANKER_BONUS_NATURAL_TIE]);
  }
  return tieResult;
}
function handlePlayerWinScenario(baccaratCards, playerIsNatural) {
  const basicRes = /* @__PURE__ */ new Map([
    [BaccaratBetNo.PLAYER, BaccaratWinningRate[BaccaratBetType.PLAYER]]
  ]);
  if (playerIsNatural) {
    basicRes.set(BaccaratBetNo.PLAYER_BONUS, BaccaratWinningRate[BaccaratBetType.PLAYER_BONUS_NATURAL_WIN]);
  } else {
    const margin = baccaratCards.getMarginOfVictory();
    if (margin >= 4) {
      const bonusType = getPlayerBonusTypeByMargin(margin);
      basicRes.set(BaccaratBetNo.PLAYER_BONUS, BaccaratWinningRate[bonusType]);
    }
  }
  return basicRes;
}
function handleBankerWinScenario(baccaratCards, bankerIsNatural) {
  const basicRes = /* @__PURE__ */ new Map([
    [BaccaratBetNo.BANKER, BaccaratWinningRate[BaccaratBetType.BANKER]]
  ]);
  if (bankerIsNatural) {
    basicRes.set(BaccaratBetNo.BANKER_BONUS, BaccaratWinningRate[BaccaratBetType.BANKER_BONUS_NATURAL_WIN]);
  } else {
    const margin = baccaratCards.getMarginOfVictory();
    if (margin >= 4) {
      const bonusType = getBankerBonusTypeByMargin(margin);
      basicRes.set(BaccaratBetNo.BANKER_BONUS, BaccaratWinningRate[bonusType]);
    }
  }
  return basicRes;
}
function getPlayerBonusTypeByMargin(margin) {
  switch (margin) {
    case 4: {
      return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_4;
    }
    case 5: {
      return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_5;
    }
    case 6: {
      return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_6;
    }
    case 7: {
      return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_7;
    }
    case 8: {
      return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_8;
    }
    case 9: {
      return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_9;
    }
    default: {
      return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_9;
    }
  }
}
function getBankerBonusTypeByMargin(margin) {
  switch (margin) {
    case 4: {
      return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_4;
    }
    case 5: {
      return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_5;
    }
    case 6: {
      return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_6;
    }
    case 7: {
      return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_7;
    }
    case 8: {
      return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_8;
    }
    case 9: {
      return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_9;
    }
    default: {
      return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_9;
    }
  }
}
function getWinningProfileForPairExistence(baccaratCards) {
  if (!baccaratCards.hasAnyPair()) {
    return /* @__PURE__ */ new Map();
  }
  const resultPayouts = /* @__PURE__ */ new Map([
    [
      BaccaratBetNo.EITHER_PAIR,
      BaccaratWinningRate[BaccaratBetType.EITHER_PAIR]
    ]
  ]);
  if (baccaratCards.hasPlayerPair()) {
    resultPayouts.set(BaccaratBetNo.PLAYER_PAIR, BaccaratWinningRate[BaccaratBetType.PLAYER_PAIR]);
  }
  if (baccaratCards.hasBankerPair()) {
    resultPayouts.set(BaccaratBetNo.BANKER_PAIR, BaccaratWinningRate[BaccaratBetType.BANKER_PAIR]);
  }
  if (!baccaratCards.hasAnyPerfectPair()) {
    return resultPayouts;
  }
  if (baccaratCards.hasBothPerfectPairs()) {
    return new Map([
      ...resultPayouts,
      [
        BaccaratBetNo.PERFECT_PAIR,
        BaccaratWinningRate[BaccaratBetType.PERFECT_PAIR_BOTH_HANDS]
      ]
    ]);
  }
  return new Map([
    ...resultPayouts,
    [
      BaccaratBetNo.PERFECT_PAIR,
      BaccaratWinningRate[BaccaratBetType.PERFECT_PAIR_ONE_HAND]
    ]
  ]);
}
const defaultErrorConfig = {
  withStackTrace: false
};
const createNeverThrowError = (message, result, config2 = defaultErrorConfig) => {
  const data = result.isOk() ? { type: "Ok", value: result.value } : { type: "Err", value: result.error };
  const maybeStack = config2.withStackTrace ? new Error().stack : void 0;
  return {
    data,
    message,
    stack: maybeStack
  };
};
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
class ResultAsync {
  constructor(res) {
    this._promise = res;
  }
  static fromSafePromise(promise) {
    const newPromise = promise.then((value) => new Ok(value));
    return new ResultAsync(newPromise);
  }
  static fromPromise(promise, errorFn) {
    const newPromise = promise.then((value) => new Ok(value)).catch((e) => new Err(errorFn(e)));
    return new ResultAsync(newPromise);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromThrowable(fn, errorFn) {
    return (...args) => {
      return new ResultAsync((() => __awaiter(this, void 0, void 0, function* () {
        try {
          return new Ok(yield fn(...args));
        } catch (error) {
          return new Err(errorFn ? errorFn(error) : error);
        }
      }))());
    };
  }
  static combine(asyncResultList) {
    return combineResultAsyncList(asyncResultList);
  }
  static combineWithAllErrors(asyncResultList) {
    return combineResultAsyncListWithAllErrors(asyncResultList);
  }
  map(f) {
    return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
      if (res.isErr()) {
        return new Err(res.error);
      }
      return new Ok(yield f(res.value));
    })));
  }
  andThrough(f) {
    return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
      if (res.isErr()) {
        return new Err(res.error);
      }
      const newRes = yield f(res.value);
      if (newRes.isErr()) {
        return new Err(newRes.error);
      }
      return new Ok(res.value);
    })));
  }
  andTee(f) {
    return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
      if (res.isErr()) {
        return new Err(res.error);
      }
      try {
        yield f(res.value);
      } catch (e) {
      }
      return new Ok(res.value);
    })));
  }
  orTee(f) {
    return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
      if (res.isOk()) {
        return new Ok(res.value);
      }
      try {
        yield f(res.error);
      } catch (e) {
      }
      return new Err(res.error);
    })));
  }
  mapErr(f) {
    return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
      if (res.isOk()) {
        return new Ok(res.value);
      }
      return new Err(yield f(res.error));
    })));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  andThen(f) {
    return new ResultAsync(this._promise.then((res) => {
      if (res.isErr()) {
        return new Err(res.error);
      }
      const newValue = f(res.value);
      return newValue instanceof ResultAsync ? newValue._promise : newValue;
    }));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  orElse(f) {
    return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
      if (res.isErr()) {
        return f(res.error);
      }
      return new Ok(res.value);
    })));
  }
  match(ok2, _err) {
    return this._promise.then((res) => res.match(ok2, _err));
  }
  unwrapOr(t) {
    return this._promise.then((res) => res.unwrapOr(t));
  }
  /**
   * @deprecated will be removed in 9.0.0.
   *
   * You can use `safeTry` without this method.
   * @example
   * ```typescript
   * safeTry(async function* () {
   *   const okValue = yield* yourResult
   * })
   * ```
   * Emulates Rust's `?` operator in `safeTry`'s body. See also `safeTry`.
   */
  safeUnwrap() {
    return __asyncGenerator(this, arguments, function* safeUnwrap_1() {
      return yield __await(yield __await(yield* __asyncDelegator(__asyncValues(yield __await(this._promise.then((res) => res.safeUnwrap()))))));
    });
  }
  // Makes ResultAsync implement PromiseLike<Result>
  then(successCallback, failureCallback) {
    return this._promise.then(successCallback, failureCallback);
  }
  [Symbol.asyncIterator]() {
    return __asyncGenerator(this, arguments, function* _a() {
      const result = yield __await(this._promise);
      if (result.isErr()) {
        yield yield __await(errAsync(result.error));
      }
      return yield __await(result.value);
    });
  }
}
function errAsync(err2) {
  return new ResultAsync(Promise.resolve(new Err(err2)));
}
const combineResultList = (resultList) => {
  let acc = ok([]);
  for (const result of resultList) {
    if (result.isErr()) {
      acc = err(result.error);
      break;
    } else {
      acc.map((list) => list.push(result.value));
    }
  }
  return acc;
};
const combineResultAsyncList = (asyncResultList) => ResultAsync.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultList);
const combineResultListWithAllErrors = (resultList) => {
  let acc = ok([]);
  for (const result of resultList) {
    if (result.isErr() && acc.isErr()) {
      acc.error.push(result.error);
    } else if (result.isErr() && acc.isOk()) {
      acc = err([result.error]);
    } else if (result.isOk() && acc.isOk()) {
      acc.value.push(result.value);
    }
  }
  return acc;
};
const combineResultAsyncListWithAllErrors = (asyncResultList) => ResultAsync.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultListWithAllErrors);
var Result;
(function(Result2) {
  function fromThrowable(fn, errorFn) {
    return (...args) => {
      try {
        const result = fn(...args);
        return ok(result);
      } catch (e) {
        return err(errorFn ? errorFn(e) : e);
      }
    };
  }
  Result2.fromThrowable = fromThrowable;
  function combine(resultList) {
    return combineResultList(resultList);
  }
  Result2.combine = combine;
  function combineWithAllErrors(resultList) {
    return combineResultListWithAllErrors(resultList);
  }
  Result2.combineWithAllErrors = combineWithAllErrors;
})(Result || (Result = {}));
function ok(value) {
  return new Ok(value);
}
function err(err2) {
  return new Err(err2);
}
class Ok {
  constructor(value) {
    this.value = value;
  }
  isOk() {
    return true;
  }
  isErr() {
    return !this.isOk();
  }
  map(f) {
    return ok(f(this.value));
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapErr(_f) {
    return ok(this.value);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  andThen(f) {
    return f(this.value);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  andThrough(f) {
    return f(this.value).map((_value) => this.value);
  }
  andTee(f) {
    try {
      f(this.value);
    } catch (e) {
    }
    return ok(this.value);
  }
  orTee(_f) {
    return ok(this.value);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  orElse(_f) {
    return ok(this.value);
  }
  asyncAndThen(f) {
    return f(this.value);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  asyncAndThrough(f) {
    return f(this.value).map(() => this.value);
  }
  asyncMap(f) {
    return ResultAsync.fromSafePromise(f(this.value));
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  unwrapOr(_v) {
    return this.value;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  match(ok2, _err) {
    return ok2(this.value);
  }
  safeUnwrap() {
    const value = this.value;
    return (function* () {
      return value;
    })();
  }
  _unsafeUnwrap(_) {
    return this.value;
  }
  _unsafeUnwrapErr(config2) {
    throw createNeverThrowError("Called `_unsafeUnwrapErr` on an Ok", this, config2);
  }
  // eslint-disable-next-line @typescript-eslint/no-this-alias, require-yield
  *[Symbol.iterator]() {
    return this.value;
  }
}
class Err {
  constructor(error) {
    this.error = error;
  }
  isOk() {
    return false;
  }
  isErr() {
    return !this.isOk();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  map(_f) {
    return err(this.error);
  }
  mapErr(f) {
    return err(f(this.error));
  }
  andThrough(_f) {
    return err(this.error);
  }
  andTee(_f) {
    return err(this.error);
  }
  orTee(f) {
    try {
      f(this.error);
    } catch (e) {
    }
    return err(this.error);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  andThen(_f) {
    return err(this.error);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  orElse(f) {
    return f(this.error);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  asyncAndThen(_f) {
    return errAsync(this.error);
  }
  asyncAndThrough(_f) {
    return errAsync(this.error);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  asyncMap(_f) {
    return errAsync(this.error);
  }
  unwrapOr(v) {
    return v;
  }
  match(_ok, err2) {
    return err2(this.error);
  }
  safeUnwrap() {
    const error = this.error;
    return (function* () {
      yield err(error);
      throw new Error("Do not use this generator out of `safeTry`");
    })();
  }
  _unsafeUnwrap(config2) {
    throw createNeverThrowError("Called `_unsafeUnwrap` on an Err", this, config2);
  }
  _unsafeUnwrapErr(_) {
    return this.error;
  }
  *[Symbol.iterator]() {
    const self = this;
    yield self;
    return self;
  }
}
Result.fromThrowable;
function join(...bets) {
  const result = {};
  for (const bet of bets) {
    for (const [key, amount] of Object.entries(bet)) {
      result[key] = new Decimal$1(amount || 0).add(result[key] || 0).toNumber();
      if (result[key] === 0) {
        delete result[key];
      }
    }
  }
  return result;
}
function validateBetTypes(game, bets) {
  for (const betNo of Object.keys(bets)) {
    if (!game.validateBetType(betNo)) {
      return err("Invalid betNo:".concat(betNo));
    }
  }
  return ok();
}
function validateBetsMeetBalance(bets, balance) {
  const total = getBetDetailTotal(bets);
  if (total > balance) {
    return err({ isLowBalance: true, message: "Insufficient balance" });
  }
  return ok();
}
function validateByBetLimit(rule, bets, betLimit) {
  return validateBetsMeetMinimum(rule, bets, betLimit).andThen(() => validateBetsMeetMaximum(rule, bets, betLimit));
}
function validateBetsMeetMinimum(game, bets, betLimit) {
  return ok().andThen(() => validateBetsMeetTypeMinimum(game, bets, betLimit)).andThen(() => validateBetsMeetTableMinimum(bets, betLimit));
}
function validateBetsMeetTypeMinimum(game, bets, betLimit) {
  var _a;
  if (betLimit.betTypesLimit === void 0) {
    return ok();
  }
  const betTypesLimit = betLimit.betTypesLimit;
  for (const [key, amount] of Object.entries(bets)) {
    const betNo = key;
    const findProfileResult = findBetNumberLimitProfile(game, betNo);
    if (findProfileResult.isErr()) {
      return err({ message: findProfileResult.error });
    }
    const betLimitProfile = findProfileResult.value;
    const min = (_a = betTypesLimit[betLimitProfile]) == null ? void 0 : _a.min;
    if (min !== void 0 && amount < min) {
      return err({
        isUnderBetTypeMin: true,
        message: "Below bet type min, betNo:".concat(betNo)
      });
    }
  }
  return ok();
}
function validateBetsMeetTableMinimum(bets, betLimit) {
  if (betLimit.tableLimit === void 0) {
    return ok();
  }
  const total = getBetDetailTotal(bets);
  const tableMin = betLimit.tableLimit.min;
  if (tableMin !== void 0 && total < tableMin) {
    return err({ isUnderTableMin: true, message: "Below table round min" });
  }
  return ok();
}
function validateBetsMeetMaximum(game, bets, betLimit) {
  return ok().andThen(() => validateBetsMeetTypeMaximum(game, bets, betLimit)).andThen(() => validateBetsMeetTableMaximum(bets, betLimit));
}
function validateBetsMeetTypeMaximum(game, bets, betLimit) {
  var _a;
  if (betLimit.betTypesLimit === void 0) {
    return ok();
  }
  const betTypesLimit = betLimit.betTypesLimit;
  for (const [key, amount] of Object.entries(bets)) {
    const betNo = key;
    const findProfileResult = findBetNumberLimitProfile(game, betNo);
    if (findProfileResult.isErr()) {
      return err({ message: findProfileResult.error });
    }
    const betLimitProfile = findProfileResult.value;
    const max = (_a = betTypesLimit[betLimitProfile]) == null ? void 0 : _a.max;
    if (max !== void 0 && amount > max) {
      return err({
        isOverBetTypeMax: true,
        message: "Exceed bet type max, betNo:".concat(betNo)
      });
    }
  }
  return ok();
}
function validateBetsMeetTableMaximum(bets, betLimit) {
  if (betLimit.tableLimit === void 0) {
    return ok();
  }
  const total = getBetDetailTotal(bets);
  const tableMax = betLimit.tableLimit.max;
  if (tableMax !== void 0 && total > tableMax) {
    return err({ isOverTableMax: true, message: "Exceed table round max" });
  }
  return ok();
}
function findBetNumberLimitProfile(game, betNo) {
  const profile = game.extractBetLimitProfileFromNo(betNo);
  if (!profile) {
    return err("Cannot find bet limit profile, betNo:".concat(betNo));
  }
  return ok(profile);
}
function validateOppositeBets(rule, bets) {
  if (rule.validateOppositeBets(bets)) {
    return ok();
  }
  return err({
    isOppositeBet: true,
    message: "Opposite betting is not allowed for this game"
  });
}
function capBets(input) {
  const ruleRes = findGameRule(input.gameType);
  if (ruleRes.isErr()) {
    return { hints: { message: ruleRes.error } };
  }
  const rule = ruleRes.value;
  return preValidate(input, rule).andThen(() => processCapBets(input, rule)).andThen(({ resultBets, hints }) => postValidate(input, rule, resultBets, hints)).match((result) => result, (hints) => ({ hints }));
}
function preValidate(input, rule) {
  return validateNewBetsNotEmpty(input.newBets).andThen(() => validateInputBetTypes(rule, input.original, input.newBets)).andThen(() => validateBetsMeetBalance(input.original, input.balance)).andThen(() => input.betLimit ? validateBetsMeetMaximum(rule, input.original, input.betLimit) : ok()).andThen(() => validateOriginalBelowBetTypeMaxForNewBets(rule, input)).andThen(() => validateDragModeConstraints(input)).andThen(() => input.dragSourceBetNo ? ok() : validateOriginalBelowBalanceForNonDragNewBets(input.original, input.balance)).andThen(() => input.betLimit && !input.dragSourceBetNo ? validateOriginalBelowTableMaxForNonDragNewBets(input.original, input.betLimit) : ok()).mapErr((errHint) => ({
    ...errHint,
    message: "Invalid original: ".concat(errHint.message)
  }));
}
function validateNewBetsNotEmpty(newBets) {
  if (Object.keys(newBets).length === 0) {
    return err({ message: "Invalid newBets, empty" });
  }
  return ok();
}
function validateInputBetTypes(rule, original, newBets) {
  const toHint = (label) => (errMsg) => ({
    message: "Invalid ".concat(label, ": ").concat(errMsg)
  });
  return ok().andThen(() => validateBetTypes(rule, original).mapErr(toHint("original"))).andThen(() => validateBetTypes(rule, newBets).mapErr(toHint("newBets")));
}
function validateOriginalBelowBetTypeMaxForNewBets(rule, input) {
  var _a;
  if (input.betLimit === void 0 || input.betLimit.betTypesLimit === void 0) {
    return ok();
  }
  const betTypesLimit = input.betLimit.betTypesLimit;
  const original = input.original;
  for (const key of Object.keys(input.newBets)) {
    const betNo = key;
    const profileResult = findBetNumberLimitProfile(rule, betNo);
    if (profileResult.isErr()) {
      return err({ message: profileResult.error });
    }
    const profile = profileResult.value;
    const betLimitMax = (_a = betTypesLimit[profile]) == null ? void 0 : _a.max;
    if (betLimitMax === void 0 || original[betNo] === void 0 || original[betNo] < betLimitMax) {
      return ok();
    }
  }
  return err({
    isOverBetTypeMax: true,
    message: "Exceed bet type max"
  });
}
function validateDragModeConstraints(input) {
  return validateOriginalDragSourcePlaced(input).andThen(() => validateNewBetOnlyOneDragDestination(input));
}
function validateOriginalDragSourcePlaced(input) {
  const dragSourceBetNo = input.dragSourceBetNo;
  if (dragSourceBetNo === void 0) {
    return ok();
  }
  const original = input.original;
  if (original[dragSourceBetNo] == null || original[dragSourceBetNo] <= 0) {
    return err({
      message: "Invalid drag input: source must be positive, source betNo: ".concat(dragSourceBetNo)
    });
  }
  return ok();
}
function validateNewBetOnlyOneDragDestination(input) {
  if (input.dragSourceBetNo === void 0) {
    return ok();
  }
  if (Object.keys(input.newBets).length != 1) {
    return err({ message: "Invalid drag input newBets" });
  }
  return ok();
}
function validateOriginalBelowBalanceForNonDragNewBets(original, balance) {
  const originalTotal = getBetDetailTotal(original);
  if (originalTotal >= balance) {
    return err({ isLowBalance: true, message: "Insufficient balance" });
  }
  return ok();
}
function validateOriginalBelowTableMaxForNonDragNewBets(original, betLimit) {
  var _a;
  const tableMax = (_a = betLimit.tableLimit) == null ? void 0 : _a.max;
  const originalTotal = getBetDetailTotal(original);
  if (tableMax !== void 0 && originalTotal >= tableMax) {
    return err({ isOverTableMax: true, message: "Exceed table round max" });
  }
  return ok();
}
function processCapBets(input, rule) {
  const mergedBets = mergeBets(input.original, input.newBets, input.dragSourceBetNo);
  return (input.betLimit ? capByBetLimitAndReportHints(rule, mergedBets, input.betLimit, input.dragSourceBetNo) : ok({ resultBets: mergedBets, hints: {} })).andThen(({ resultBets, hints }) => capByUserBalanceAndReportHints(input.original, resultBets, input.balance).map(({ resultBets: balanceResultBets, hints: balanceHints }) => ({
    resultBets: balanceResultBets,
    hints: { ...hints, ...balanceHints }
  }))).andThen(({ resultBets, hints }) => input.betLimit ? capByTableMaxAndReportHints(input.original, resultBets, input.betLimit).map(({ resultBets: tableResultBets, hints: tableHints }) => ({
    resultBets: tableResultBets,
    hints: { ...hints, ...tableHints }
  })) : ok({ resultBets, hints }));
}
function mergeBets(original, newBets, dragSourceBetNo) {
  const joinedBets = join(original, newBets);
  if (dragSourceBetNo !== void 0) {
    delete joinedBets[dragSourceBetNo];
  }
  return joinedBets;
}
function capByBetLimitAndReportHints(rule, bets, betLimit, dragSourceBetNo) {
  var _a;
  const resultBets = { ...bets };
  if (betLimit.betTypesLimit === void 0) {
    return ok({ resultBets, hints: {} });
  }
  const betTypesLimit = betLimit.betTypesLimit;
  let exceedTotal = new Decimal$1(0);
  for (const [key, amount] of Object.entries(bets)) {
    const betNo = key;
    const profileResult = findBetNumberLimitProfile(rule, betNo);
    if (profileResult.isErr()) {
      return err({ message: profileResult.error });
    }
    const profile = profileResult.value;
    const betLimitMax = (_a = betTypesLimit[profile]) == null ? void 0 : _a.max;
    if (betLimitMax !== void 0 && amount > betLimitMax) {
      exceedTotal = exceedTotal.add(amount).sub(betLimitMax);
      resultBets[betNo] = betLimitMax;
    }
  }
  if (dragSourceBetNo !== void 0 && exceedTotal.greaterThan(0)) {
    resultBets[dragSourceBetNo] = exceedTotal.toNumber();
  }
  const hints = exceedTotal.greaterThan(0) ? {
    isOverBetTypeMax: true,
    message: "Exceed bet type max"
  } : {};
  return ok({ resultBets, hints });
}
function capByUserBalanceAndReportHints(original, bets, balance) {
  const resultBets = { ...bets };
  const validateBetsMeetBalanceRes = validateBetsMeetBalance(bets, balance);
  if (validateBetsMeetBalanceRes.isOk()) {
    return ok({ resultBets, hints: {} });
  }
  const hints = {
    isLowBalance: true,
    message: "Insufficient balance"
  };
  const capBetNo = findEffectiveSingleBetNo(original, bets);
  if (capBetNo === void 0) {
    return err({ ...hints });
  }
  const exceedAmount = new Decimal$1(getBetDetailTotal(bets)).sub(balance);
  resultBets[capBetNo] = new Decimal$1(resultBets[capBetNo]).sub(exceedAmount).toNumber();
  return ok({ resultBets, hints });
}
function capByTableMaxAndReportHints(original, bets, betLimit) {
  const resultBets = { ...bets };
  const validateBetsMeetTableMaximumRes = validateBetsMeetTableMaximum(bets, betLimit);
  if (validateBetsMeetTableMaximumRes.isOk() || betLimit.tableLimit === void 0 || betLimit.tableLimit.max === void 0) {
    return ok({ resultBets, hints: {} });
  }
  const hints = {
    isOverTableMax: true,
    message: "Exceed table round max"
  };
  const capBetNo = findEffectiveSingleBetNo(original, bets);
  if (capBetNo === void 0) {
    return err({ ...hints });
  }
  const exceedAmount = new Decimal$1(getBetDetailTotal(bets)).sub(betLimit.tableLimit.max);
  resultBets[capBetNo] = new Decimal$1(resultBets[capBetNo]).sub(exceedAmount).toNumber();
  return ok({ resultBets, hints });
}
function findEffectiveSingleBetNo(original, bets) {
  const effectiveBetNos = [];
  for (const [key, amount] of Object.entries(bets)) {
    const betNo = key;
    if (amount !== original[betNo]) {
      effectiveBetNos.push(betNo);
    }
  }
  if (effectiveBetNos.length == 1) {
    return effectiveBetNos[0];
  }
  return void 0;
}
function postValidate(input, rule, cappedBets, hints) {
  return validateBetsMeetBalance(cappedBets, input.balance).andThen(() => input.betLimit ? validateByBetLimit(rule, cappedBets, input.betLimit) : ok()).andThen(() => input.betOptions.forbidOppositeBets ? validateOppositeBets(rule, cappedBets) : ok()).map(() => ({
    resultBets: cappedBets,
    hints
  }));
}
var GameType;
(function(GameType2) {
  GameType2["UNKNOWN"] = "unknown";
  GameType2["ALL"] = "all";
  GameType2["ROULETTE"] = "roulette";
  GameType2["AUTO_ROULETTE"] = "auto-roulette";
  GameType2["ROULETTE_MULTIPLIER"] = "roulette-multiplier";
  GameType2["SIC_BO"] = "sic-bo";
  GameType2["AUTO_SIC_BO"] = "auto-sic-bo";
  GameType2["BACCARAT"] = "baccarat";
})(GameType || (GameType = {}));
var GameMode;
(function(GameMode2) {
  GameMode2["DEMO"] = "demo";
  GameMode2["REAL"] = "real";
})(GameMode || (GameMode = {}));
var AfterKicked;
(function(AfterKicked2) {
  AfterKicked2["DISCONNECT"] = "disconnect";
  AfterKicked2["LOBBY"] = "lobby";
})(AfterKicked || (AfterKicked = {}));
var KickCode;
(function(KickCode2) {
  KickCode2[KickCode2["SESSION_EXPIRED"] = 13040] = "SESSION_EXPIRED";
  KickCode2[KickCode2["SESSION_DUPLICATE"] = 13041] = "SESSION_DUPLICATE";
  KickCode2[KickCode2["SERVICE_UNAVAILABLE"] = 13042] = "SERVICE_UNAVAILABLE";
})(KickCode || (KickCode = {}));
var TableRoundStatus;
(function(TableRoundStatus2) {
  TableRoundStatus2["UNKNOWN"] = "unknown";
  TableRoundStatus2["OPENED"] = "opened";
  TableRoundStatus2["BET_STOPPED"] = "bet-stopped";
  TableRoundStatus2["BET_TXN_STOPPED"] = "bet-txn-stopped";
  TableRoundStatus2["FINISHED"] = "finished";
  TableRoundStatus2["CANCELLED"] = "cancelled";
})(TableRoundStatus || (TableRoundStatus = {}));
var TableVisibility;
(function(TableVisibility2) {
  TableVisibility2["DISABLED"] = "disabled";
  TableVisibility2["HIDDEN"] = "hidden";
  TableVisibility2["VISIBLE"] = "visible";
})(TableVisibility || (TableVisibility = {}));
class PayoutInvalidInputError extends Error {
  constructor(message) {
    super(message);
    __publicField(this, "code");
    this.name = "PayoutInvalidInputError";
    this.code = 13020;
  }
}
function getBetDetailTotal(bets) {
  let total = new Decimal$1(0);
  for (const key in bets) {
    const value = bets[key];
    if (value) {
      total = total.plus(new Decimal$1(value));
    }
  }
  return total.toNumber();
}
function getGameRuleByType(gameType) {
  switch (gameType) {
    case GameType.AUTO_ROULETTE:
    case GameType.ROULETTE: {
      return new RouletteGame();
    }
    case GameType.ROULETTE_MULTIPLIER: {
      return new RouletteMultiplierGame();
    }
    case GameType.AUTO_SIC_BO:
    case GameType.SIC_BO: {
      return new SicBoGame();
    }
    case GameType.BACCARAT: {
      return new BaccaratGame();
    }
    default: {
      return null;
    }
  }
}
function findGameRule(gameType) {
  const game = getGameRuleByType(gameType);
  if (!game) {
    return err("Invalid gameType:".concat(gameType));
  }
  return ok(game);
}
class JurisdictionPayloadHelper {
  constructor(payload = {}) {
    __publicField(this, "payload");
    this.payload = payload;
  }
  getAutoplayAllowed() {
    return this.payload["AP"];
  }
  getFullscreenAllowed() {
    return this.payload["FS"];
  }
  getShowLobby() {
    return this.payload["SLOB"];
  }
  getShowActiveSessionCounter() {
    return this.payload["SASC"];
  }
  /**
   * @deprecated: Use `getBetOptions` instead.
   */
  getAllowOppositeBetting() {
    return this.payload["AOB"];
  }
  getShowSupportChat() {
    return this.payload["SSC"];
  }
  getBetOptions() {
    return {
      forbidOppositeBets: this.payload["AOB"] == void 0 ? true : !this.payload["AOB"]
    };
  }
}
function getPayout(gameType, result, bets, winMax, winningContext) {
  const game = getGameRuleByType(gameType);
  if (!game) {
    throw new PayoutInvalidInputError("Invalid game type");
  }
  const userBetPayouts = {};
  const resultWinningProfile = game.getWinningProfile(result, winningContext);
  const resultWinningBetTypes = new Set(resultWinningProfile.keys());
  let totalWins = new Decimal$1(0);
  let totalBets = new Decimal$1(0);
  for (const key in bets) {
    const betNo = key;
    if (!game.validateBetType(betNo)) {
      throw new PayoutInvalidInputError("Invalid bet type");
    }
    const userBetAmount = bets[betNo];
    const payoutMultiplier = resultWinningProfile.get(betNo);
    if (resultWinningBetTypes.has(betNo) && userBetAmount && payoutMultiplier !== void 0) {
      const betAmount = new Decimal$1(userBetAmount);
      const betWin = betAmount.mul(payoutMultiplier);
      totalBets = totalBets.plus(betAmount);
      totalWins = totalWins.plus(betWin);
      userBetPayouts[betNo] = betAmount.plus(betWin).toNumber();
    }
  }
  return {
    amount: totalBets.plus(totalWins).toNumber(),
    payoutDetail: userBetPayouts
  };
}
var RouletteBetType;
(function(RouletteBetType2) {
  RouletteBetType2["STRAIGHT_UP"] = "straight";
  RouletteBetType2["COLUMN"] = "column";
  RouletteBetType2["DOZEN"] = "dozen";
  RouletteBetType2["EVEN"] = "even";
  RouletteBetType2["ODD"] = "odd";
  RouletteBetType2["LOW"] = "low";
  RouletteBetType2["HIGH"] = "high";
  RouletteBetType2["RED"] = "red";
  RouletteBetType2["BLACK"] = "black";
  RouletteBetType2["STREET"] = "street";
  RouletteBetType2["SPLIT"] = "split";
  RouletteBetType2["CORNER"] = "corner";
  RouletteBetType2["LINE"] = "line";
})(RouletteBetType || (RouletteBetType = {}));
function parseRouletteBetType(input) {
  const enumValues = Object.values(RouletteBetType);
  if (enumValues.includes(input)) {
    return input;
  }
  return void 0;
}
var RouletteBetNo;
(function(RouletteBetNo2) {
  RouletteBetNo2["STRAIGHT_UP_0"] = "straight-0";
  RouletteBetNo2["STRAIGHT_UP_1"] = "straight-1";
  RouletteBetNo2["STRAIGHT_UP_2"] = "straight-2";
  RouletteBetNo2["STRAIGHT_UP_3"] = "straight-3";
  RouletteBetNo2["STRAIGHT_UP_4"] = "straight-4";
  RouletteBetNo2["STRAIGHT_UP_5"] = "straight-5";
  RouletteBetNo2["STRAIGHT_UP_6"] = "straight-6";
  RouletteBetNo2["STRAIGHT_UP_7"] = "straight-7";
  RouletteBetNo2["STRAIGHT_UP_8"] = "straight-8";
  RouletteBetNo2["STRAIGHT_UP_9"] = "straight-9";
  RouletteBetNo2["STRAIGHT_UP_10"] = "straight-10";
  RouletteBetNo2["STRAIGHT_UP_11"] = "straight-11";
  RouletteBetNo2["STRAIGHT_UP_12"] = "straight-12";
  RouletteBetNo2["STRAIGHT_UP_13"] = "straight-13";
  RouletteBetNo2["STRAIGHT_UP_14"] = "straight-14";
  RouletteBetNo2["STRAIGHT_UP_15"] = "straight-15";
  RouletteBetNo2["STRAIGHT_UP_16"] = "straight-16";
  RouletteBetNo2["STRAIGHT_UP_17"] = "straight-17";
  RouletteBetNo2["STRAIGHT_UP_18"] = "straight-18";
  RouletteBetNo2["STRAIGHT_UP_19"] = "straight-19";
  RouletteBetNo2["STRAIGHT_UP_20"] = "straight-20";
  RouletteBetNo2["STRAIGHT_UP_21"] = "straight-21";
  RouletteBetNo2["STRAIGHT_UP_22"] = "straight-22";
  RouletteBetNo2["STRAIGHT_UP_23"] = "straight-23";
  RouletteBetNo2["STRAIGHT_UP_24"] = "straight-24";
  RouletteBetNo2["STRAIGHT_UP_25"] = "straight-25";
  RouletteBetNo2["STRAIGHT_UP_26"] = "straight-26";
  RouletteBetNo2["STRAIGHT_UP_27"] = "straight-27";
  RouletteBetNo2["STRAIGHT_UP_28"] = "straight-28";
  RouletteBetNo2["STRAIGHT_UP_29"] = "straight-29";
  RouletteBetNo2["STRAIGHT_UP_30"] = "straight-30";
  RouletteBetNo2["STRAIGHT_UP_31"] = "straight-31";
  RouletteBetNo2["STRAIGHT_UP_32"] = "straight-32";
  RouletteBetNo2["STRAIGHT_UP_33"] = "straight-33";
  RouletteBetNo2["STRAIGHT_UP_34"] = "straight-34";
  RouletteBetNo2["STRAIGHT_UP_35"] = "straight-35";
  RouletteBetNo2["STRAIGHT_UP_36"] = "straight-36";
  RouletteBetNo2["COLUMN_1"] = "column-1";
  RouletteBetNo2["COLUMN_2"] = "column-2";
  RouletteBetNo2["COLUMN_3"] = "column-3";
  RouletteBetNo2["DOZEN_1"] = "dozen-1";
  RouletteBetNo2["DOZEN_13"] = "dozen-13";
  RouletteBetNo2["DOZEN_25"] = "dozen-25";
  RouletteBetNo2["ODD"] = "odd";
  RouletteBetNo2["EVEN"] = "even";
  RouletteBetNo2["LOW"] = "low";
  RouletteBetNo2["HIGH"] = "high";
  RouletteBetNo2["RED"] = "red";
  RouletteBetNo2["BLACK"] = "black";
  RouletteBetNo2["LINE_1"] = "line-1";
  RouletteBetNo2["LINE_4"] = "line-4";
  RouletteBetNo2["LINE_7"] = "line-7";
  RouletteBetNo2["LINE_10"] = "line-10";
  RouletteBetNo2["LINE_13"] = "line-13";
  RouletteBetNo2["LINE_16"] = "line-16";
  RouletteBetNo2["LINE_19"] = "line-19";
  RouletteBetNo2["LINE_22"] = "line-22";
  RouletteBetNo2["LINE_25"] = "line-25";
  RouletteBetNo2["LINE_28"] = "line-28";
  RouletteBetNo2["LINE_31"] = "line-31";
  RouletteBetNo2["STREET_0_1_2"] = "street-0_1_2";
  RouletteBetNo2["STREET_0_2_3"] = "street-0_2_3";
  RouletteBetNo2["STREET_1_2_3"] = "street-1_2_3";
  RouletteBetNo2["STREET_4_5_6"] = "street-4_5_6";
  RouletteBetNo2["STREET_7_8_9"] = "street-7_8_9";
  RouletteBetNo2["STREET_10_11_12"] = "street-10_11_12";
  RouletteBetNo2["STREET_13_14_15"] = "street-13_14_15";
  RouletteBetNo2["STREET_16_17_18"] = "street-16_17_18";
  RouletteBetNo2["STREET_19_20_21"] = "street-19_20_21";
  RouletteBetNo2["STREET_22_23_24"] = "street-22_23_24";
  RouletteBetNo2["STREET_25_26_27"] = "street-25_26_27";
  RouletteBetNo2["STREET_28_29_30"] = "street-28_29_30";
  RouletteBetNo2["STREET_31_32_33"] = "street-31_32_33";
  RouletteBetNo2["STREET_34_35_36"] = "street-34_35_36";
  RouletteBetNo2["SPLIT_0_1"] = "split-0_1";
  RouletteBetNo2["SPLIT_0_2"] = "split-0_2";
  RouletteBetNo2["SPLIT_0_3"] = "split-0_3";
  RouletteBetNo2["SPLIT_1_2"] = "split-1_2";
  RouletteBetNo2["SPLIT_1_4"] = "split-1_4";
  RouletteBetNo2["SPLIT_2_3"] = "split-2_3";
  RouletteBetNo2["SPLIT_2_5"] = "split-2_5";
  RouletteBetNo2["SPLIT_3_6"] = "split-3_6";
  RouletteBetNo2["SPLIT_4_5"] = "split-4_5";
  RouletteBetNo2["SPLIT_4_7"] = "split-4_7";
  RouletteBetNo2["SPLIT_5_6"] = "split-5_6";
  RouletteBetNo2["SPLIT_5_8"] = "split-5_8";
  RouletteBetNo2["SPLIT_6_9"] = "split-6_9";
  RouletteBetNo2["SPLIT_7_10"] = "split-7_10";
  RouletteBetNo2["SPLIT_7_8"] = "split-7_8";
  RouletteBetNo2["SPLIT_8_11"] = "split-8_11";
  RouletteBetNo2["SPLIT_8_9"] = "split-8_9";
  RouletteBetNo2["SPLIT_9_12"] = "split-9_12";
  RouletteBetNo2["SPLIT_10_11"] = "split-10_11";
  RouletteBetNo2["SPLIT_10_13"] = "split-10_13";
  RouletteBetNo2["SPLIT_11_12"] = "split-11_12";
  RouletteBetNo2["SPLIT_11_14"] = "split-11_14";
  RouletteBetNo2["SPLIT_12_15"] = "split-12_15";
  RouletteBetNo2["SPLIT_13_14"] = "split-13_14";
  RouletteBetNo2["SPLIT_13_16"] = "split-13_16";
  RouletteBetNo2["SPLIT_14_15"] = "split-14_15";
  RouletteBetNo2["SPLIT_14_17"] = "split-14_17";
  RouletteBetNo2["SPLIT_15_18"] = "split-15_18";
  RouletteBetNo2["SPLIT_16_17"] = "split-16_17";
  RouletteBetNo2["SPLIT_16_19"] = "split-16_19";
  RouletteBetNo2["SPLIT_17_18"] = "split-17_18";
  RouletteBetNo2["SPLIT_17_20"] = "split-17_20";
  RouletteBetNo2["SPLIT_18_21"] = "split-18_21";
  RouletteBetNo2["SPLIT_19_20"] = "split-19_20";
  RouletteBetNo2["SPLIT_19_22"] = "split-19_22";
  RouletteBetNo2["SPLIT_20_21"] = "split-20_21";
  RouletteBetNo2["SPLIT_20_23"] = "split-20_23";
  RouletteBetNo2["SPLIT_21_24"] = "split-21_24";
  RouletteBetNo2["SPLIT_22_23"] = "split-22_23";
  RouletteBetNo2["SPLIT_22_25"] = "split-22_25";
  RouletteBetNo2["SPLIT_23_24"] = "split-23_24";
  RouletteBetNo2["SPLIT_23_26"] = "split-23_26";
  RouletteBetNo2["SPLIT_24_27"] = "split-24_27";
  RouletteBetNo2["SPLIT_25_26"] = "split-25_26";
  RouletteBetNo2["SPLIT_25_28"] = "split-25_28";
  RouletteBetNo2["SPLIT_26_27"] = "split-26_27";
  RouletteBetNo2["SPLIT_26_29"] = "split-26_29";
  RouletteBetNo2["SPLIT_27_30"] = "split-27_30";
  RouletteBetNo2["SPLIT_28_29"] = "split-28_29";
  RouletteBetNo2["SPLIT_28_31"] = "split-28_31";
  RouletteBetNo2["SPLIT_29_30"] = "split-29_30";
  RouletteBetNo2["SPLIT_29_32"] = "split-29_32";
  RouletteBetNo2["SPLIT_30_33"] = "split-30_33";
  RouletteBetNo2["SPLIT_31_32"] = "split-31_32";
  RouletteBetNo2["SPLIT_31_34"] = "split-31_34";
  RouletteBetNo2["SPLIT_32_33"] = "split-32_33";
  RouletteBetNo2["SPLIT_32_35"] = "split-32_35";
  RouletteBetNo2["SPLIT_33_36"] = "split-33_36";
  RouletteBetNo2["SPLIT_34_35"] = "split-34_35";
  RouletteBetNo2["SPLIT_35_36"] = "split-35_36";
  RouletteBetNo2["CORNER_0_1_2_3"] = "corner-0_1_2_3";
  RouletteBetNo2["CORNER_1_2_4_5"] = "corner-1_2_4_5";
  RouletteBetNo2["CORNER_2_3_5_6"] = "corner-2_3_5_6";
  RouletteBetNo2["CORNER_4_5_7_8"] = "corner-4_5_7_8";
  RouletteBetNo2["CORNER_5_6_8_9"] = "corner-5_6_8_9";
  RouletteBetNo2["CORNER_7_8_10_11"] = "corner-7_8_10_11";
  RouletteBetNo2["CORNER_8_9_11_12"] = "corner-8_9_11_12";
  RouletteBetNo2["CORNER_10_11_13_14"] = "corner-10_11_13_14";
  RouletteBetNo2["CORNER_11_12_14_15"] = "corner-11_12_14_15";
  RouletteBetNo2["CORNER_13_14_16_17"] = "corner-13_14_16_17";
  RouletteBetNo2["CORNER_14_15_17_18"] = "corner-14_15_17_18";
  RouletteBetNo2["CORNER_16_17_19_20"] = "corner-16_17_19_20";
  RouletteBetNo2["CORNER_17_18_20_21"] = "corner-17_18_20_21";
  RouletteBetNo2["CORNER_19_20_22_23"] = "corner-19_20_22_23";
  RouletteBetNo2["CORNER_20_21_23_24"] = "corner-20_21_23_24";
  RouletteBetNo2["CORNER_22_23_25_26"] = "corner-22_23_25_26";
  RouletteBetNo2["CORNER_23_24_26_27"] = "corner-23_24_26_27";
  RouletteBetNo2["CORNER_25_26_28_29"] = "corner-25_26_28_29";
  RouletteBetNo2["CORNER_26_27_29_30"] = "corner-26_27_29_30";
  RouletteBetNo2["CORNER_28_29_31_32"] = "corner-28_29_31_32";
  RouletteBetNo2["CORNER_29_30_32_33"] = "corner-29_30_32_33";
  RouletteBetNo2["CORNER_31_32_34_35"] = "corner-31_32_34_35";
  RouletteBetNo2["CORNER_32_33_35_36"] = "corner-32_33_35_36";
})(RouletteBetNo || (RouletteBetNo = {}));
var RouletteCallBet;
(function(RouletteCallBet2) {
  RouletteCallBet2["TIER"] = "TIER";
  RouletteCallBet2["ORPH"] = "ORPH";
  RouletteCallBet2["VOISINS"] = "VOISINS";
  RouletteCallBet2["ZERO"] = "ZERO";
})(RouletteCallBet || (RouletteCallBet = {}));
function parseRouletteBetNo(input) {
  const enumValues = Object.values(RouletteBetNo);
  if (enumValues.includes(input)) {
    return input;
  }
  return void 0;
}
function extractRouletteBetTypeFromNo(input) {
  const typePart = input.split("-")[0];
  return parseRouletteBetType(typePart);
}
var RouletteBetLimitProfile;
(function(RouletteBetLimitProfile2) {
  RouletteBetLimitProfile2["STRAIGHT_UP"] = "ro.straight";
  RouletteBetLimitProfile2["COLUMN"] = "ro.column";
  RouletteBetLimitProfile2["DOZEN"] = "ro.dozen";
  RouletteBetLimitProfile2["STREET"] = "ro.street";
  RouletteBetLimitProfile2["SPLIT"] = "ro.split";
  RouletteBetLimitProfile2["CORNER"] = "ro.corner";
  RouletteBetLimitProfile2["LINE"] = "ro.line";
  RouletteBetLimitProfile2["RED_BLACK"] = "ro.redBlack";
  RouletteBetLimitProfile2["ODD_EVEN"] = "ro.oddEven";
  RouletteBetLimitProfile2["LOW_HIGH"] = "ro.lowHigh";
})(RouletteBetLimitProfile || (RouletteBetLimitProfile = {}));
const mutableBetMap = /* @__PURE__ */ new Map();
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_0, ["0"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_1, ["1"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_2, ["2"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_3, ["3"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_4, ["4"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_5, ["5"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_6, ["6"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_7, ["7"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_8, ["8"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_9, ["9"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_10, ["10"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_11, ["11"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_12, ["12"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_13, ["13"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_14, ["14"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_15, ["15"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_16, ["16"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_17, ["17"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_18, ["18"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_19, ["19"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_20, ["20"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_21, ["21"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_22, ["22"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_23, ["23"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_24, ["24"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_25, ["25"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_26, ["26"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_27, ["27"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_28, ["28"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_29, ["29"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_30, ["30"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_31, ["31"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_32, ["32"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_33, ["33"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_34, ["34"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_35, ["35"]);
mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_36, ["36"]);
mutableBetMap.set(RouletteBetNo.COLUMN_1, [
  "1",
  "4",
  "7",
  "10",
  "13",
  "16",
  "19",
  "22",
  "25",
  "28",
  "31",
  "34"
]);
mutableBetMap.set(RouletteBetNo.COLUMN_2, [
  "2",
  "5",
  "8",
  "11",
  "14",
  "17",
  "20",
  "23",
  "26",
  "29",
  "32",
  "35"
]);
mutableBetMap.set(RouletteBetNo.COLUMN_3, [
  "3",
  "6",
  "9",
  "12",
  "15",
  "18",
  "21",
  "24",
  "27",
  "30",
  "33",
  "36"
]);
mutableBetMap.set(RouletteBetNo.DOZEN_1, [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12"
]);
mutableBetMap.set(RouletteBetNo.DOZEN_13, [
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24"
]);
mutableBetMap.set(RouletteBetNo.DOZEN_25, [
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36"
]);
mutableBetMap.set(RouletteBetNo.LINE_1, ["1", "2", "3", "4", "5", "6"]);
mutableBetMap.set(RouletteBetNo.LINE_4, ["4", "5", "6", "7", "8", "9"]);
mutableBetMap.set(RouletteBetNo.LINE_7, ["7", "8", "9", "10", "11", "12"]);
mutableBetMap.set(RouletteBetNo.LINE_10, ["10", "11", "12", "13", "14", "15"]);
mutableBetMap.set(RouletteBetNo.LINE_13, ["13", "14", "15", "16", "17", "18"]);
mutableBetMap.set(RouletteBetNo.LINE_16, ["16", "17", "18", "19", "20", "21"]);
mutableBetMap.set(RouletteBetNo.LINE_19, ["19", "20", "21", "22", "23", "24"]);
mutableBetMap.set(RouletteBetNo.LINE_22, ["22", "23", "24", "25", "26", "27"]);
mutableBetMap.set(RouletteBetNo.LINE_25, ["25", "26", "27", "28", "29", "30"]);
mutableBetMap.set(RouletteBetNo.LINE_28, ["28", "29", "30", "31", "32", "33"]);
mutableBetMap.set(RouletteBetNo.LINE_31, ["31", "32", "33", "34", "35", "36"]);
mutableBetMap.set(RouletteBetNo.STREET_0_1_2, ["0", "1", "2"]);
mutableBetMap.set(RouletteBetNo.STREET_0_2_3, ["0", "2", "3"]);
mutableBetMap.set(RouletteBetNo.STREET_1_2_3, ["1", "2", "3"]);
mutableBetMap.set(RouletteBetNo.STREET_4_5_6, ["4", "5", "6"]);
mutableBetMap.set(RouletteBetNo.STREET_7_8_9, ["7", "8", "9"]);
mutableBetMap.set(RouletteBetNo.STREET_10_11_12, ["10", "11", "12"]);
mutableBetMap.set(RouletteBetNo.STREET_13_14_15, ["13", "14", "15"]);
mutableBetMap.set(RouletteBetNo.STREET_16_17_18, ["16", "17", "18"]);
mutableBetMap.set(RouletteBetNo.STREET_19_20_21, ["19", "20", "21"]);
mutableBetMap.set(RouletteBetNo.STREET_22_23_24, ["22", "23", "24"]);
mutableBetMap.set(RouletteBetNo.STREET_25_26_27, ["25", "26", "27"]);
mutableBetMap.set(RouletteBetNo.STREET_28_29_30, ["28", "29", "30"]);
mutableBetMap.set(RouletteBetNo.STREET_31_32_33, ["31", "32", "33"]);
mutableBetMap.set(RouletteBetNo.STREET_34_35_36, ["34", "35", "36"]);
mutableBetMap.set(RouletteBetNo.SPLIT_0_1, ["0", "1"]);
mutableBetMap.set(RouletteBetNo.SPLIT_0_2, ["0", "2"]);
mutableBetMap.set(RouletteBetNo.SPLIT_0_3, ["0", "3"]);
mutableBetMap.set(RouletteBetNo.SPLIT_1_2, ["1", "2"]);
mutableBetMap.set(RouletteBetNo.SPLIT_1_4, ["1", "4"]);
mutableBetMap.set(RouletteBetNo.SPLIT_2_3, ["2", "3"]);
mutableBetMap.set(RouletteBetNo.SPLIT_2_5, ["2", "5"]);
mutableBetMap.set(RouletteBetNo.SPLIT_3_6, ["3", "6"]);
mutableBetMap.set(RouletteBetNo.SPLIT_4_5, ["4", "5"]);
mutableBetMap.set(RouletteBetNo.SPLIT_4_7, ["4", "7"]);
mutableBetMap.set(RouletteBetNo.SPLIT_5_6, ["5", "6"]);
mutableBetMap.set(RouletteBetNo.SPLIT_5_8, ["5", "8"]);
mutableBetMap.set(RouletteBetNo.SPLIT_6_9, ["6", "9"]);
mutableBetMap.set(RouletteBetNo.SPLIT_7_10, ["7", "10"]);
mutableBetMap.set(RouletteBetNo.SPLIT_7_8, ["7", "8"]);
mutableBetMap.set(RouletteBetNo.SPLIT_8_11, ["8", "11"]);
mutableBetMap.set(RouletteBetNo.SPLIT_8_9, ["8", "9"]);
mutableBetMap.set(RouletteBetNo.SPLIT_9_12, ["9", "12"]);
mutableBetMap.set(RouletteBetNo.SPLIT_10_11, ["10", "11"]);
mutableBetMap.set(RouletteBetNo.SPLIT_10_13, ["10", "13"]);
mutableBetMap.set(RouletteBetNo.SPLIT_11_12, ["11", "12"]);
mutableBetMap.set(RouletteBetNo.SPLIT_11_14, ["11", "14"]);
mutableBetMap.set(RouletteBetNo.SPLIT_12_15, ["12", "15"]);
mutableBetMap.set(RouletteBetNo.SPLIT_13_14, ["13", "14"]);
mutableBetMap.set(RouletteBetNo.SPLIT_13_16, ["13", "16"]);
mutableBetMap.set(RouletteBetNo.SPLIT_14_15, ["14", "15"]);
mutableBetMap.set(RouletteBetNo.SPLIT_14_17, ["14", "17"]);
mutableBetMap.set(RouletteBetNo.SPLIT_15_18, ["15", "18"]);
mutableBetMap.set(RouletteBetNo.SPLIT_16_17, ["16", "17"]);
mutableBetMap.set(RouletteBetNo.SPLIT_16_19, ["16", "19"]);
mutableBetMap.set(RouletteBetNo.SPLIT_17_18, ["17", "18"]);
mutableBetMap.set(RouletteBetNo.SPLIT_17_20, ["17", "20"]);
mutableBetMap.set(RouletteBetNo.SPLIT_18_21, ["18", "21"]);
mutableBetMap.set(RouletteBetNo.SPLIT_19_20, ["19", "20"]);
mutableBetMap.set(RouletteBetNo.SPLIT_19_22, ["19", "22"]);
mutableBetMap.set(RouletteBetNo.SPLIT_20_21, ["20", "21"]);
mutableBetMap.set(RouletteBetNo.SPLIT_20_23, ["20", "23"]);
mutableBetMap.set(RouletteBetNo.SPLIT_21_24, ["21", "24"]);
mutableBetMap.set(RouletteBetNo.SPLIT_22_23, ["22", "23"]);
mutableBetMap.set(RouletteBetNo.SPLIT_22_25, ["22", "25"]);
mutableBetMap.set(RouletteBetNo.SPLIT_23_24, ["23", "24"]);
mutableBetMap.set(RouletteBetNo.SPLIT_23_26, ["23", "26"]);
mutableBetMap.set(RouletteBetNo.SPLIT_24_27, ["24", "27"]);
mutableBetMap.set(RouletteBetNo.SPLIT_25_26, ["25", "26"]);
mutableBetMap.set(RouletteBetNo.SPLIT_25_28, ["25", "28"]);
mutableBetMap.set(RouletteBetNo.SPLIT_26_27, ["26", "27"]);
mutableBetMap.set(RouletteBetNo.SPLIT_26_29, ["26", "29"]);
mutableBetMap.set(RouletteBetNo.SPLIT_27_30, ["27", "30"]);
mutableBetMap.set(RouletteBetNo.SPLIT_28_29, ["28", "29"]);
mutableBetMap.set(RouletteBetNo.SPLIT_28_31, ["28", "31"]);
mutableBetMap.set(RouletteBetNo.SPLIT_29_30, ["29", "30"]);
mutableBetMap.set(RouletteBetNo.SPLIT_29_32, ["29", "32"]);
mutableBetMap.set(RouletteBetNo.SPLIT_30_33, ["30", "33"]);
mutableBetMap.set(RouletteBetNo.SPLIT_31_32, ["31", "32"]);
mutableBetMap.set(RouletteBetNo.SPLIT_31_34, ["31", "34"]);
mutableBetMap.set(RouletteBetNo.SPLIT_32_33, ["32", "33"]);
mutableBetMap.set(RouletteBetNo.SPLIT_32_35, ["32", "35"]);
mutableBetMap.set(RouletteBetNo.SPLIT_33_36, ["33", "36"]);
mutableBetMap.set(RouletteBetNo.SPLIT_34_35, ["34", "35"]);
mutableBetMap.set(RouletteBetNo.SPLIT_35_36, ["35", "36"]);
mutableBetMap.set(RouletteBetNo.CORNER_0_1_2_3, ["0", "1", "2", "3"]);
mutableBetMap.set(RouletteBetNo.CORNER_1_2_4_5, ["1", "2", "4", "5"]);
mutableBetMap.set(RouletteBetNo.CORNER_2_3_5_6, ["2", "3", "5", "6"]);
mutableBetMap.set(RouletteBetNo.CORNER_4_5_7_8, ["4", "5", "7", "8"]);
mutableBetMap.set(RouletteBetNo.CORNER_5_6_8_9, ["5", "6", "8", "9"]);
mutableBetMap.set(RouletteBetNo.CORNER_7_8_10_11, ["7", "8", "10", "11"]);
mutableBetMap.set(RouletteBetNo.CORNER_8_9_11_12, ["8", "9", "11", "12"]);
mutableBetMap.set(RouletteBetNo.CORNER_10_11_13_14, ["10", "11", "13", "14"]);
mutableBetMap.set(RouletteBetNo.CORNER_11_12_14_15, ["11", "12", "14", "15"]);
mutableBetMap.set(RouletteBetNo.CORNER_13_14_16_17, ["13", "14", "16", "17"]);
mutableBetMap.set(RouletteBetNo.CORNER_14_15_17_18, ["14", "15", "17", "18"]);
mutableBetMap.set(RouletteBetNo.CORNER_16_17_19_20, ["16", "17", "19", "20"]);
mutableBetMap.set(RouletteBetNo.CORNER_17_18_20_21, ["17", "18", "20", "21"]);
mutableBetMap.set(RouletteBetNo.CORNER_19_20_22_23, ["19", "20", "22", "23"]);
mutableBetMap.set(RouletteBetNo.CORNER_20_21_23_24, ["20", "21", "23", "24"]);
mutableBetMap.set(RouletteBetNo.CORNER_22_23_25_26, ["22", "23", "25", "26"]);
mutableBetMap.set(RouletteBetNo.CORNER_23_24_26_27, ["23", "24", "26", "27"]);
mutableBetMap.set(RouletteBetNo.CORNER_25_26_28_29, ["25", "26", "28", "29"]);
mutableBetMap.set(RouletteBetNo.CORNER_26_27_29_30, ["26", "27", "29", "30"]);
mutableBetMap.set(RouletteBetNo.CORNER_28_29_31_32, ["28", "29", "31", "32"]);
mutableBetMap.set(RouletteBetNo.CORNER_29_30_32_33, ["29", "30", "32", "33"]);
mutableBetMap.set(RouletteBetNo.CORNER_31_32_34_35, ["31", "32", "34", "35"]);
mutableBetMap.set(RouletteBetNo.CORNER_32_33_35_36, ["32", "33", "35", "36"]);
mutableBetMap.set(RouletteBetNo.RED, [
  "1",
  "3",
  "5",
  "7",
  "9",
  "12",
  "14",
  "16",
  "18",
  "19",
  "21",
  "23",
  "25",
  "27",
  "30",
  "32",
  "34",
  "36"
]);
mutableBetMap.set(RouletteBetNo.BLACK, [
  "2",
  "4",
  "6",
  "8",
  "10",
  "11",
  "13",
  "15",
  "17",
  "20",
  "22",
  "24",
  "26",
  "28",
  "29",
  "31",
  "33",
  "35"
]);
mutableBetMap.set(RouletteBetNo.EVEN, [
  "2",
  "4",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
  "24",
  "26",
  "28",
  "30",
  "32",
  "34",
  "36"
]);
mutableBetMap.set(RouletteBetNo.ODD, [
  "1",
  "3",
  "5",
  "7",
  "9",
  "11",
  "13",
  "15",
  "17",
  "19",
  "21",
  "23",
  "25",
  "27",
  "29",
  "31",
  "33",
  "35"
]);
mutableBetMap.set(RouletteBetNo.LOW, [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18"
]);
mutableBetMap.set(RouletteBetNo.HIGH, [
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36"
]);
const RouletteBetNoMap = mutableBetMap;
const RouletteBetToLimitProfileMap = {
  [RouletteBetType.STRAIGHT_UP]: RouletteBetLimitProfile.STRAIGHT_UP,
  [RouletteBetType.COLUMN]: RouletteBetLimitProfile.COLUMN,
  [RouletteBetType.DOZEN]: RouletteBetLimitProfile.DOZEN,
  [RouletteBetType.STREET]: RouletteBetLimitProfile.STREET,
  [RouletteBetType.SPLIT]: RouletteBetLimitProfile.SPLIT,
  [RouletteBetType.CORNER]: RouletteBetLimitProfile.CORNER,
  [RouletteBetType.LINE]: RouletteBetLimitProfile.LINE,
  [RouletteBetType.RED]: RouletteBetLimitProfile.RED_BLACK,
  [RouletteBetType.BLACK]: RouletteBetLimitProfile.RED_BLACK,
  [RouletteBetType.ODD]: RouletteBetLimitProfile.ODD_EVEN,
  [RouletteBetType.EVEN]: RouletteBetLimitProfile.ODD_EVEN,
  [RouletteBetType.LOW]: RouletteBetLimitProfile.LOW_HIGH,
  [RouletteBetType.HIGH]: RouletteBetLimitProfile.LOW_HIGH
};
const RouletteOppositeBetRules = [
  [RouletteBetNo.EVEN, RouletteBetNo.ODD],
  [RouletteBetNo.RED, RouletteBetNo.BLACK],
  [RouletteBetNo.LOW, RouletteBetNo.HIGH],
  [RouletteBetNo.DOZEN_1, RouletteBetNo.DOZEN_13, RouletteBetNo.DOZEN_25],
  [RouletteBetNo.COLUMN_1, RouletteBetNo.COLUMN_2, RouletteBetNo.COLUMN_3]
];
const RouletteGameResultRules = [
  [
    (result) => {
      const roulette = result.roulette;
      return !(roulette == void 0 || roulette == null);
    },
    "the roulette number is missing"
  ],
  [
    (result) => {
      const roulette = result.roulette;
      return typeof roulette === "string";
    },
    "the roulette number is incorrect type"
  ],
  [
    (result) => {
      return isRouletteNumber(result.roulette);
    },
    "the roulette number is incorrect range"
  ]
];
const RouletteWinningRate = {};
for (const [betType, rate] of Object.entries({
  [RouletteBetType.STRAIGHT_UP]: 35,
  [RouletteBetType.COLUMN]: 2,
  [RouletteBetType.DOZEN]: 2,
  [RouletteBetType.LINE]: 5,
  [RouletteBetType.EVEN]: 1,
  [RouletteBetType.ODD]: 1,
  [RouletteBetType.LOW]: 1,
  [RouletteBetType.HIGH]: 1,
  [RouletteBetType.RED]: 1,
  [RouletteBetType.BLACK]: 1,
  [RouletteBetType.STREET]: 11,
  [RouletteBetType.SPLIT]: 17,
  [RouletteBetType.CORNER]: 8
})) {
  RouletteWinningRate[betType] = new Decimal$1(rate);
}
class RouletteGame extends GameRule {
  constructor() {
    super(RouletteGameResultRules);
  }
  validateBetType(betNo) {
    return parseRouletteBetNo(betNo) != void 0;
  }
  getWinningProfile(result) {
    const resultPayouts = /* @__PURE__ */ new Map();
    for (const betType of Object.values(RouletteBetNo)) {
      const basicType = extractRouletteBetTypeFromNo(betType);
      if (basicType) {
        const betTypeValues = RouletteBetNoMap.get(betType);
        if (betTypeValues && betTypeValues.includes(result.roulette)) {
          resultPayouts.set(betType, RouletteWinningRate[basicType]);
        }
      }
    }
    return resultPayouts;
  }
  extractBetLimitProfileFromNo(betNo) {
    const basicType = extractRouletteBetTypeFromNo(betNo);
    if (!basicType) {
      return void 0;
    }
    return RouletteBetToLimitProfileMap[basicType];
  }
  getOppositeBetRules() {
    return RouletteOppositeBetRules;
  }
  removeDisplayOnlyBetNos(displayable) {
    const copied = structuredClone(displayable);
    for (const k of Object.values(RouletteCallBet)) {
      delete copied[k];
    }
    return copied;
  }
}
const RouletteMultiplierBaseWinningRate = {};
for (const [betType, rate] of Object.entries({
  [RouletteBetType.STRAIGHT_UP]: 1,
  [RouletteBetType.COLUMN]: 2,
  [RouletteBetType.DOZEN]: 2,
  [RouletteBetType.LINE]: 5,
  [RouletteBetType.EVEN]: 1,
  [RouletteBetType.ODD]: 1,
  [RouletteBetType.LOW]: 1,
  [RouletteBetType.HIGH]: 1,
  [RouletteBetType.RED]: 1,
  [RouletteBetType.BLACK]: 1,
  [RouletteBetType.STREET]: 11,
  [RouletteBetType.SPLIT]: 17,
  [RouletteBetType.CORNER]: 8
})) {
  RouletteMultiplierBaseWinningRate[betType] = new Decimal$1(rate);
}
({
  candidateBetNos: [
    RouletteBetNo.STRAIGHT_UP_0,
    RouletteBetNo.STRAIGHT_UP_1,
    RouletteBetNo.STRAIGHT_UP_2,
    RouletteBetNo.STRAIGHT_UP_3,
    RouletteBetNo.STRAIGHT_UP_4,
    RouletteBetNo.STRAIGHT_UP_5,
    RouletteBetNo.STRAIGHT_UP_6,
    RouletteBetNo.STRAIGHT_UP_7,
    RouletteBetNo.STRAIGHT_UP_8,
    RouletteBetNo.STRAIGHT_UP_9,
    RouletteBetNo.STRAIGHT_UP_10,
    RouletteBetNo.STRAIGHT_UP_11,
    RouletteBetNo.STRAIGHT_UP_12,
    RouletteBetNo.STRAIGHT_UP_13,
    RouletteBetNo.STRAIGHT_UP_14,
    RouletteBetNo.STRAIGHT_UP_15,
    RouletteBetNo.STRAIGHT_UP_16,
    RouletteBetNo.STRAIGHT_UP_17,
    RouletteBetNo.STRAIGHT_UP_18,
    RouletteBetNo.STRAIGHT_UP_19,
    RouletteBetNo.STRAIGHT_UP_20,
    RouletteBetNo.STRAIGHT_UP_21,
    RouletteBetNo.STRAIGHT_UP_22,
    RouletteBetNo.STRAIGHT_UP_23,
    RouletteBetNo.STRAIGHT_UP_24,
    RouletteBetNo.STRAIGHT_UP_25,
    RouletteBetNo.STRAIGHT_UP_26,
    RouletteBetNo.STRAIGHT_UP_27,
    RouletteBetNo.STRAIGHT_UP_28,
    RouletteBetNo.STRAIGHT_UP_29,
    RouletteBetNo.STRAIGHT_UP_30,
    RouletteBetNo.STRAIGHT_UP_31,
    RouletteBetNo.STRAIGHT_UP_32,
    RouletteBetNo.STRAIGHT_UP_33,
    RouletteBetNo.STRAIGHT_UP_34,
    RouletteBetNo.STRAIGHT_UP_35,
    RouletteBetNo.STRAIGHT_UP_36
  ]
});
class RouletteMultiplierGame extends RouletteGame {
  getWinningProfile(result, winningContext) {
    var _a;
    const resultPayouts = /* @__PURE__ */ new Map();
    for (const betNo of Object.values(RouletteBetNo)) {
      const betType = extractRouletteBetTypeFromNo(betNo);
      if (betType) {
        const betNoValues = RouletteBetNoMap.get(betNo);
        if (betNoValues && betNoValues.includes(result.roulette)) {
          let payout = RouletteMultiplierBaseWinningRate[betType];
          if (((_a = winningContext == null ? void 0 : winningContext.multipliers) == null ? void 0 : _a[betNo]) !== void 0) {
            payout = payout.mul(winningContext.multipliers[betNo]);
          }
          resultPayouts.set(betNo, payout);
        }
      }
    }
    return resultPayouts;
  }
}
var SicBoBetType;
(function(SicBoBetType2) {
  SicBoBetType2["SMALL"] = "small";
  SicBoBetType2["BIG"] = "big";
  SicBoBetType2["ODD"] = "odd";
  SicBoBetType2["EVEN"] = "even";
  SicBoBetType2["TOTAL_4"] = "total4";
  SicBoBetType2["TOTAL_5"] = "total5";
  SicBoBetType2["TOTAL_6"] = "total6";
  SicBoBetType2["TOTAL_7"] = "total7";
  SicBoBetType2["TOTAL_8"] = "total8";
  SicBoBetType2["TOTAL_9"] = "total9";
  SicBoBetType2["TOTAL_10"] = "total10";
  SicBoBetType2["TOTAL_11"] = "total11";
  SicBoBetType2["TOTAL_12"] = "total12";
  SicBoBetType2["TOTAL_13"] = "total13";
  SicBoBetType2["TOTAL_14"] = "total14";
  SicBoBetType2["TOTAL_15"] = "total15";
  SicBoBetType2["TOTAL_16"] = "total16";
  SicBoBetType2["TOTAL_17"] = "total17";
  SicBoBetType2["DOUBLE"] = "double";
  SicBoBetType2["TRIPLE"] = "triple";
  SicBoBetType2["ANY_TRIPLE"] = "anyTriple";
  SicBoBetType2["COMBINATION"] = "comb";
  SicBoBetType2["SINGLE"] = "single";
})(SicBoBetType || (SicBoBetType = {}));
function parseSicBoBetType(input) {
  const enumValues = Object.values(SicBoBetType);
  if (enumValues.includes(input)) {
    return input;
  }
  return void 0;
}
var SicBoBetNo;
(function(SicBoBetNo2) {
  SicBoBetNo2["SMALL"] = "sb.small";
  SicBoBetNo2["BIG"] = "sb.big";
  SicBoBetNo2["ODD"] = "sb.odd";
  SicBoBetNo2["EVEN"] = "sb.even";
  SicBoBetNo2["TOTAL_4"] = "sb.total4";
  SicBoBetNo2["TOTAL_5"] = "sb.total5";
  SicBoBetNo2["TOTAL_6"] = "sb.total6";
  SicBoBetNo2["TOTAL_7"] = "sb.total7";
  SicBoBetNo2["TOTAL_8"] = "sb.total8";
  SicBoBetNo2["TOTAL_9"] = "sb.total9";
  SicBoBetNo2["TOTAL_10"] = "sb.total10";
  SicBoBetNo2["TOTAL_11"] = "sb.total11";
  SicBoBetNo2["TOTAL_12"] = "sb.total12";
  SicBoBetNo2["TOTAL_13"] = "sb.total13";
  SicBoBetNo2["TOTAL_14"] = "sb.total14";
  SicBoBetNo2["TOTAL_15"] = "sb.total15";
  SicBoBetNo2["TOTAL_16"] = "sb.total16";
  SicBoBetNo2["TOTAL_17"] = "sb.total17";
  SicBoBetNo2["DOUBLE_1"] = "sb.double-1";
  SicBoBetNo2["DOUBLE_2"] = "sb.double-2";
  SicBoBetNo2["DOUBLE_3"] = "sb.double-3";
  SicBoBetNo2["DOUBLE_4"] = "sb.double-4";
  SicBoBetNo2["DOUBLE_5"] = "sb.double-5";
  SicBoBetNo2["DOUBLE_6"] = "sb.double-6";
  SicBoBetNo2["TRIPLE_1"] = "sb.triple-1";
  SicBoBetNo2["TRIPLE_2"] = "sb.triple-2";
  SicBoBetNo2["TRIPLE_3"] = "sb.triple-3";
  SicBoBetNo2["TRIPLE_4"] = "sb.triple-4";
  SicBoBetNo2["TRIPLE_5"] = "sb.triple-5";
  SicBoBetNo2["TRIPLE_6"] = "sb.triple-6";
  SicBoBetNo2["ANY_TRIPLE"] = "sb.anyTriple";
  SicBoBetNo2["COMBINATION_1_2"] = "sb.comb-1_2";
  SicBoBetNo2["COMBINATION_1_3"] = "sb.comb-1_3";
  SicBoBetNo2["COMBINATION_1_4"] = "sb.comb-1_4";
  SicBoBetNo2["COMBINATION_1_5"] = "sb.comb-1_5";
  SicBoBetNo2["COMBINATION_1_6"] = "sb.comb-1_6";
  SicBoBetNo2["COMBINATION_2_3"] = "sb.comb-2_3";
  SicBoBetNo2["COMBINATION_2_4"] = "sb.comb-2_4";
  SicBoBetNo2["COMBINATION_2_5"] = "sb.comb-2_5";
  SicBoBetNo2["COMBINATION_2_6"] = "sb.comb-2_6";
  SicBoBetNo2["COMBINATION_3_4"] = "sb.comb-3_4";
  SicBoBetNo2["COMBINATION_3_5"] = "sb.comb-3_5";
  SicBoBetNo2["COMBINATION_3_6"] = "sb.comb-3_6";
  SicBoBetNo2["COMBINATION_4_5"] = "sb.comb-4_5";
  SicBoBetNo2["COMBINATION_4_6"] = "sb.comb-4_6";
  SicBoBetNo2["COMBINATION_5_6"] = "sb.comb-5_6";
  SicBoBetNo2["SINGLE_1"] = "sb.single-1";
  SicBoBetNo2["SINGLE_2"] = "sb.single-2";
  SicBoBetNo2["SINGLE_3"] = "sb.single-3";
  SicBoBetNo2["SINGLE_4"] = "sb.single-4";
  SicBoBetNo2["SINGLE_5"] = "sb.single-5";
  SicBoBetNo2["SINGLE_6"] = "sb.single-6";
})(SicBoBetNo || (SicBoBetNo = {}));
function parseSicBoBetNo(input) {
  const enumValues = Object.values(SicBoBetNo);
  if (enumValues.includes(input)) {
    return input;
  }
  return void 0;
}
function extractSicBoBetTypeFromNo(input) {
  const typePart = input.replace("sb.", "").split("-")[0];
  return parseSicBoBetType(typePart);
}
var SicBoBetLimitProfile;
(function(SicBoBetLimitProfile2) {
  SicBoBetLimitProfile2["SMALL_BIG"] = "sb.smallBig";
  SicBoBetLimitProfile2["ODD_EVEN"] = "sb.oddEven";
  SicBoBetLimitProfile2["DOUBLE"] = "sb.double";
  SicBoBetLimitProfile2["TRIPLE"] = "sb.triple";
  SicBoBetLimitProfile2["ANY_TRIPLE"] = "sb.anyTriple";
  SicBoBetLimitProfile2["COMBINATION"] = "sb.comb";
  SicBoBetLimitProfile2["TOTAL_4_17"] = "sb.total4Or17";
  SicBoBetLimitProfile2["TOTAL_5_16"] = "sb.total5Or16";
  SicBoBetLimitProfile2["TOTAL_6_15"] = "sb.total6Or15";
  SicBoBetLimitProfile2["TOTAL_7_14"] = "sb.total7Or14";
  SicBoBetLimitProfile2["TOTAL_8_13"] = "sb.total8Or13";
  SicBoBetLimitProfile2["TOTAL_9_12"] = "sb.total9Or12";
  SicBoBetLimitProfile2["TOTAL_10_11"] = "sb.total10Or11";
  SicBoBetLimitProfile2["SINGLE"] = "sb.single";
})(SicBoBetLimitProfile || (SicBoBetLimitProfile = {}));
const mutableBetTotalMap = /* @__PURE__ */ new Map();
mutableBetTotalMap.set(SicBoBetNo.SMALL, [4, 5, 6, 7, 8, 9, 10]);
mutableBetTotalMap.set(SicBoBetNo.BIG, [11, 12, 13, 14, 15, 16, 17]);
mutableBetTotalMap.set(SicBoBetNo.ODD, [5, 7, 9, 11, 13, 15, 17]);
mutableBetTotalMap.set(SicBoBetNo.EVEN, [4, 6, 8, 10, 12, 14, 16]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_4, [4]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_5, [5]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_6, [6]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_7, [7]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_8, [8]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_9, [9]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_10, [10]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_11, [11]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_12, [12]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_13, [13]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_14, [14]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_15, [15]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_16, [16]);
mutableBetTotalMap.set(SicBoBetNo.TOTAL_17, [17]);
const SicBoBetTotalMap = mutableBetTotalMap;
const SicBoBetExcludeTripleList = [
  SicBoBetNo.SMALL,
  SicBoBetNo.BIG,
  SicBoBetNo.ODD,
  SicBoBetNo.EVEN
];
const mutableBetSingleMap = /* @__PURE__ */ new Map();
mutableBetSingleMap.set(1, SicBoBetNo.SINGLE_1);
mutableBetSingleMap.set(2, SicBoBetNo.SINGLE_2);
mutableBetSingleMap.set(3, SicBoBetNo.SINGLE_3);
mutableBetSingleMap.set(4, SicBoBetNo.SINGLE_4);
mutableBetSingleMap.set(5, SicBoBetNo.SINGLE_5);
mutableBetSingleMap.set(6, SicBoBetNo.SINGLE_6);
const SicBoBetSingleMap = mutableBetSingleMap;
const mutableBetDoubleMap = /* @__PURE__ */ new Map();
mutableBetDoubleMap.set(1, SicBoBetNo.DOUBLE_1);
mutableBetDoubleMap.set(2, SicBoBetNo.DOUBLE_2);
mutableBetDoubleMap.set(3, SicBoBetNo.DOUBLE_3);
mutableBetDoubleMap.set(4, SicBoBetNo.DOUBLE_4);
mutableBetDoubleMap.set(5, SicBoBetNo.DOUBLE_5);
mutableBetDoubleMap.set(6, SicBoBetNo.DOUBLE_6);
const SicBoBetDoubleMap = mutableBetDoubleMap;
const mutableBetTripleMap = /* @__PURE__ */ new Map();
mutableBetTripleMap.set(1, SicBoBetNo.TRIPLE_1);
mutableBetTripleMap.set(2, SicBoBetNo.TRIPLE_2);
mutableBetTripleMap.set(3, SicBoBetNo.TRIPLE_3);
mutableBetTripleMap.set(4, SicBoBetNo.TRIPLE_4);
mutableBetTripleMap.set(5, SicBoBetNo.TRIPLE_5);
mutableBetTripleMap.set(6, SicBoBetNo.TRIPLE_6);
const SicBoBetTripleMap = mutableBetTripleMap;
const mutableBetCombinationMap = /* @__PURE__ */ new Map();
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_1_2, [1, 2]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_1_3, [1, 3]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_1_4, [1, 4]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_1_5, [1, 5]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_1_6, [1, 6]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_2_3, [2, 3]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_2_4, [2, 4]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_2_5, [2, 5]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_2_6, [2, 6]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_3_4, [3, 4]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_3_5, [3, 5]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_3_6, [3, 6]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_4_5, [4, 5]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_4_6, [4, 6]);
mutableBetCombinationMap.set(SicBoBetNo.COMBINATION_5_6, [5, 6]);
const SicBoBetCombinationMap = mutableBetCombinationMap;
const SicBoBetToLimitProfileMap = {
  [SicBoBetType.DOUBLE]: SicBoBetLimitProfile.DOUBLE,
  [SicBoBetType.TRIPLE]: SicBoBetLimitProfile.TRIPLE,
  [SicBoBetType.ANY_TRIPLE]: SicBoBetLimitProfile.ANY_TRIPLE,
  [SicBoBetType.COMBINATION]: SicBoBetLimitProfile.COMBINATION,
  [SicBoBetType.SINGLE]: SicBoBetLimitProfile.SINGLE,
  [SicBoBetType.SMALL]: SicBoBetLimitProfile.SMALL_BIG,
  [SicBoBetType.BIG]: SicBoBetLimitProfile.SMALL_BIG,
  [SicBoBetType.ODD]: SicBoBetLimitProfile.ODD_EVEN,
  [SicBoBetType.EVEN]: SicBoBetLimitProfile.ODD_EVEN,
  [SicBoBetType.TOTAL_4]: SicBoBetLimitProfile.TOTAL_4_17,
  [SicBoBetType.TOTAL_5]: SicBoBetLimitProfile.TOTAL_5_16,
  [SicBoBetType.TOTAL_6]: SicBoBetLimitProfile.TOTAL_6_15,
  [SicBoBetType.TOTAL_7]: SicBoBetLimitProfile.TOTAL_7_14,
  [SicBoBetType.TOTAL_8]: SicBoBetLimitProfile.TOTAL_8_13,
  [SicBoBetType.TOTAL_9]: SicBoBetLimitProfile.TOTAL_9_12,
  [SicBoBetType.TOTAL_10]: SicBoBetLimitProfile.TOTAL_10_11,
  [SicBoBetType.TOTAL_11]: SicBoBetLimitProfile.TOTAL_10_11,
  [SicBoBetType.TOTAL_12]: SicBoBetLimitProfile.TOTAL_9_12,
  [SicBoBetType.TOTAL_13]: SicBoBetLimitProfile.TOTAL_8_13,
  [SicBoBetType.TOTAL_14]: SicBoBetLimitProfile.TOTAL_7_14,
  [SicBoBetType.TOTAL_15]: SicBoBetLimitProfile.TOTAL_6_15,
  [SicBoBetType.TOTAL_16]: SicBoBetLimitProfile.TOTAL_5_16,
  [SicBoBetType.TOTAL_17]: SicBoBetLimitProfile.TOTAL_4_17
};
const SicBoOppositeBetRules = [
  [SicBoBetNo.EVEN, SicBoBetNo.ODD],
  [SicBoBetNo.SMALL, SicBoBetNo.BIG]
];
const SicBoResultRules = [
  [
    (result) => {
      const sicBo = result.sicBo;
      return !(sicBo == void 0 || sicBo == null);
    },
    "the dice numbers are missing"
  ],
  [
    (result) => {
      const sicBo = result.sicBo;
      return Array.isArray(sicBo);
    },
    "the dice numbers are incorrect type"
  ],
  [
    (result) => {
      const sicBo = result.sicBo;
      return sicBo.length === 3;
    },
    "the dice numbers are incorrect length"
  ],
  [
    (result) => isDiceNumber(result.sicBo[0]),
    "the 1st dice number is incorrect"
  ],
  [
    (result) => isDiceNumber(result.sicBo[1]),
    "the 2nd dice number is incorrect"
  ],
  [
    (result) => isDiceNumber(result.sicBo[2]),
    "the 3rd dice number is incorrect"
  ]
];
const SicBoWinningRate = {};
for (const [betType, rate] of Object.entries({
  [SicBoBetType.SMALL]: 1,
  [SicBoBetType.BIG]: 1,
  [SicBoBetType.ODD]: 1,
  [SicBoBetType.EVEN]: 1,
  [SicBoBetType.TOTAL_4]: 70,
  [SicBoBetType.TOTAL_5]: 34,
  [SicBoBetType.TOTAL_6]: 20,
  [SicBoBetType.TOTAL_7]: 13,
  [SicBoBetType.TOTAL_8]: 9,
  [SicBoBetType.TOTAL_9]: 7,
  [SicBoBetType.TOTAL_10]: 6,
  [SicBoBetType.TOTAL_11]: 6,
  [SicBoBetType.TOTAL_12]: 7,
  [SicBoBetType.TOTAL_13]: 9,
  [SicBoBetType.TOTAL_14]: 13,
  [SicBoBetType.TOTAL_15]: 20,
  [SicBoBetType.TOTAL_16]: 34,
  [SicBoBetType.TOTAL_17]: 70,
  [SicBoBetType.DOUBLE]: 12,
  [SicBoBetType.TRIPLE]: 210,
  [SicBoBetType.ANY_TRIPLE]: 34,
  [SicBoBetType.COMBINATION]: 6
})) {
  SicBoWinningRate[betType] = new Decimal$1(rate);
}
const mutableSicBoSingleWinningRateMap = /* @__PURE__ */ new Map();
mutableSicBoSingleWinningRateMap.set(1, new Decimal$1(1));
mutableSicBoSingleWinningRateMap.set(2, new Decimal$1(2));
mutableSicBoSingleWinningRateMap.set(3, new Decimal$1(15));
const SicBoSingleWinningRateMap = mutableSicBoSingleWinningRateMap;
function isValidSicBoArray(sicBo) {
  return Array.isArray(sicBo) && sicBo.length == 3 && sicBo.every((num) => Number.isInteger(num) && num >= 1 && num <= 6);
}
class SicBoGame extends GameRule {
  constructor() {
    super(SicBoResultRules);
  }
  validateBetType(betType) {
    return parseSicBoBetNo(betType) != void 0;
  }
  getWinningProfile(result) {
    const winningProfile = /* @__PURE__ */ new Map();
    if (!isValidSicBoArray(result.sicBo)) {
      return winningProfile;
    }
    const diceCounts = /* @__PURE__ */ new Map();
    for (const die of result.sicBo) {
      diceCounts.set(die, (diceCounts.get(die) || 0) + 1);
    }
    let hasTriple = false;
    for (let i = 1; i <= 6; i++) {
      if (!diceCounts.get(i) || diceCounts.get(i) === 0) {
        continue;
      } else if (diceCounts.get(i) === 3) {
        const betNo = SicBoBetTripleMap.get(i);
        winningProfile.set(betNo, SicBoWinningRate[extractSicBoBetTypeFromNo(betNo)]);
        winningProfile.set(SicBoBetNo.ANY_TRIPLE, SicBoWinningRate[SicBoBetType.ANY_TRIPLE]);
        hasTriple = true;
        const doubleBetNo = SicBoBetDoubleMap.get(i);
        winningProfile.set(doubleBetNo, SicBoWinningRate[SicBoBetType.DOUBLE]);
      } else if (diceCounts.get(i) === 2) {
        const betNo = SicBoBetDoubleMap.get(i);
        winningProfile.set(betNo, SicBoWinningRate[extractSicBoBetTypeFromNo(betNo)]);
      }
      winningProfile.set(SicBoBetSingleMap.get(i), SicBoSingleWinningRateMap.get(diceCounts.get(i)));
    }
    const total = result.sicBo.reduce((sum, num) => sum + num, 0);
    for (const betNo of SicBoBetTotalMap.keys()) {
      if (SicBoBetTotalMap.get(betNo).includes(total) && !(hasTriple && SicBoBetExcludeTripleList.includes(betNo))) {
        winningProfile.set(betNo, SicBoWinningRate[extractSicBoBetTypeFromNo(betNo)]);
      }
    }
    for (const betNo of SicBoBetCombinationMap.keys()) {
      const members = SicBoBetCombinationMap.get(betNo);
      if (result.sicBo.includes(members[0]) && result.sicBo.includes(members[1])) {
        winningProfile.set(betNo, SicBoWinningRate[SicBoBetType.COMBINATION]);
      }
    }
    return winningProfile;
  }
  extractBetLimitProfileFromNo(betNo) {
    const basicType = extractSicBoBetTypeFromNo(betNo);
    if (!basicType) {
      return void 0;
    }
    return SicBoBetToLimitProfileMap[basicType];
  }
  getOppositeBetRules() {
    return SicBoOppositeBetRules;
  }
}
var MessageActor;
(function(MessageActor2) {
  MessageActor2["ME"] = "me";
  MessageActor2["OTHERS"] = "others";
  MessageActor2["SYSTEM"] = "system";
})(MessageActor || (MessageActor = {}));
var MessageContentType;
(function(MessageContentType2) {
  MessageContentType2["TEXT"] = "text";
  MessageContentType2["GAME_HISTORY"] = "gameHistory";
})(MessageContentType || (MessageContentType = {}));
export {
  AfterKicked as A,
  BaccaratBetNo as B,
  CardRank as C,
  Decimal$1 as D,
  GameType as G,
  JurisdictionPayloadHelper as J,
  MessageContentType as M,
  RouletteCallBet as R,
  SicBoBetNo as S,
  TableRoundStatus as T,
  RouletteBetNo as a,
  BaccaratBetLimitProfile as b,
  SicBoBetLimitProfile as c,
  RouletteBetLimitProfile as d,
  getPayout as e,
  CardSuit as f,
  getGameRuleByType as g,
  Card as h,
  BaccaratCards as i,
  capBets as j
};
//# sourceMappingURL=ikigaians-house-core-CYkxu2p9.js.map
