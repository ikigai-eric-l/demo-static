;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function () {
        exports({
          e: getPayout,
          g: getGameRuleByType,
          h: Card,
          j: capBets
        });
        var CardSuit;
        exports("f", CardSuit);
        (function (CardSuit) {
          CardSuit["UNKNOWN"] = "";
          CardSuit["CLUB"] = "c";
          CardSuit["DIAMOND"] = "d";
          CardSuit["HEART"] = "h";
          CardSuit["SPADE"] = "s";
        })(CardSuit || exports("f", CardSuit = {}));
        var CardRank;
        exports("C", CardRank);
        (function (CardRank) {
          CardRank["UNKNOWN"] = "";
          CardRank["R2"] = "2";
          CardRank["R3"] = "3";
          CardRank["R4"] = "4";
          CardRank["R5"] = "5";
          CardRank["R6"] = "6";
          CardRank["R7"] = "7";
          CardRank["R8"] = "8";
          CardRank["R9"] = "9";
          CardRank["R10"] = "T";
          CardRank["J"] = "J";
          CardRank["Q"] = "Q";
          CardRank["K"] = "K";
          CardRank["A"] = "A";
        })(CardRank || exports("C", CardRank = {}));
        const cardRankAlias = {
          [CardRank.R10]: ['10'],
          [CardRank.J]: ['11'],
          [CardRank.Q]: ['12'],
          [CardRank.K]: ['13']
        };
        const rankOrder = [CardRank.R2, CardRank.R3, CardRank.R4, CardRank.R5, CardRank.R6, CardRank.R7, CardRank.R8, CardRank.R9, CardRank.R10, CardRank.J, CardRank.Q, CardRank.K, CardRank.A];
        const suitOrder = [CardSuit.CLUB, CardSuit.DIAMOND, CardSuit.HEART, CardSuit.SPADE];
        function Card(input) {
          let suit = CardSuit.UNKNOWN;
          let rank = CardRank.UNKNOWN;
          if (typeof input === 'number') {
            if (input >= 1 && input <= 52) {
              const index = input - 1;
              suit = suitOrder[Math.floor(index / 13)];
              rank = rankOrder[index % 13];
            }
          } else if (typeof input === 'string') {
            var _input$;
            const s = (_input$ = input[0]) === null || _input$ === void 0 ? void 0 : _input$.toLowerCase();
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
              if (suitIndex === -1 || rankIndex === -1) return 0;
              return suitIndex * 13 + rankIndex + 1;
            },
            toString() {
              return `${this.suit}${this.rank}`;
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
          var _Object$values$find;
          return (_Object$values$find = Object.values(CardSuit).find(v => v === str)) !== null && _Object$values$find !== void 0 ? _Object$values$find : CardSuit.UNKNOWN;
        }
        function parseRank(str) {
          var _Object$values$find2;
          let rank = (_Object$values$find2 = Object.values(CardRank).find(v => v === str)) !== null && _Object$values$find2 !== void 0 ? _Object$values$find2 : CardRank.UNKNOWN;
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
            _defineProperty(this, "result", void 0);
            this.result = result;
            this.name = 'GameResultError';
          }
        }
        class GameRule {
          constructor(rules) {
            _defineProperty(this, "rules", void 0);
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
            return undefined;
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
              const hasAll = rule.every(betNo => betNos.has(betNo));
              if (hasAll) {
                return false;
              }
            }
            return true;
          }
        }

        /** Check if represents a valid dice number. */
        const isDiceNumber = num => [1, 2, 3, 4, 5, 6].includes(num);
        /** Check if the string represents a valid roulette number. Type in string due to america roulette has "00" */
        const isRouletteNumber = numStr => ['00', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'].includes(numStr);

        /*
         *  decimal.js-light v2.5.1
         *  An arbitrary-precision Decimal type for JavaScript.
         *  https://github.com/MikeMcl/decimal.js-light
         *  Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
         *  MIT Expat Licence
         */

        // ------------------------------------  EDITABLE DEFAULTS  ------------------------------------- //

        // The limit on the value of `precision`, and on the value of the first argument to
        // `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
        var MAX_DIGITS = 1e9,
          // 0 to 1e9

          // The initial configuration properties of the Decimal constructor.
          defaults = {
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
            LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
          },
          // ------------------------------------ END OF EDITABLE DEFAULTS -------------------------------- //

          Decimal,
          external = true,
          decimalError = '[DecimalError] ',
          invalidArgument = decimalError + 'Invalid argument: ',
          exponentOutOfRange = decimalError + 'Exponent out of range: ',
          mathfloor = Math.floor,
          mathpow = Math.pow,
          isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          ONE,
          BASE = 1e7,
          LOG_BASE = 7,
          MAX_SAFE_INTEGER = 9007199254740991,
          MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE),
          // 1286742750677284

          // Decimal.prototype object
          P = {};

        // Decimal prototype methods

        /*
         *  absoluteValue                       abs
         *  comparedTo                          cmp
         *  decimalPlaces                       dp
         *  dividedBy                           div
         *  dividedToIntegerBy                  idiv
         *  equals                              eq
         *  exponent
         *  greaterThan                         gt
         *  greaterThanOrEqualTo                gte
         *  isInteger                           isint
         *  isNegative                          isneg
         *  isPositive                          ispos
         *  isZero
         *  lessThan                            lt
         *  lessThanOrEqualTo                   lte
         *  logarithm                           log
         *  minus                               sub
         *  modulo                              mod
         *  naturalExponential                  exp
         *  naturalLogarithm                    ln
         *  negated                             neg
         *  plus                                add
         *  precision                           sd
         *  squareRoot                          sqrt
         *  times                               mul
         *  toDecimalPlaces                     todp
         *  toExponential
         *  toFixed
         *  toInteger                           toint
         *  toNumber
         *  toPower                             pow
         *  toPrecision
         *  toSignificantDigits                 tosd
         *  toString
         *  valueOf                             val
         */

        /*
         * Return a new Decimal whose value is the absolute value of this Decimal.
         *
         */
        P.absoluteValue = P.abs = function () {
          var x = new this.constructor(this);
          if (x.s) x.s = 1;
          return x;
        };

        /*
         * Return
         *   1    if the value of this Decimal is greater than the value of `y`,
         *  -1    if the value of this Decimal is less than the value of `y`,
         *   0    if they have the same value
         *
         */
        P.comparedTo = P.cmp = function (y) {
          var i,
            j,
            xdL,
            ydL,
            x = this;
          y = new x.constructor(y);

          // Signs differ?
          if (x.s !== y.s) return x.s || -y.s;

          // Compare exponents.
          if (x.e !== y.e) return x.e > y.e ^ x.s < 0 ? 1 : -1;
          xdL = x.d.length;
          ydL = y.d.length;

          // Compare digit by digit.
          for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
            if (x.d[i] !== y.d[i]) return x.d[i] > y.d[i] ^ x.s < 0 ? 1 : -1;
          }

          // Compare lengths.
          return xdL === ydL ? 0 : xdL > ydL ^ x.s < 0 ? 1 : -1;
        };

        /*
         * Return the number of decimal places of the value of this Decimal.
         *
         */
        P.decimalPlaces = P.dp = function () {
          var x = this,
            w = x.d.length - 1,
            dp = (w - x.e) * LOG_BASE;

          // Subtract the number of trailing zeros of the last word.
          w = x.d[w];
          if (w) for (; w % 10 == 0; w /= 10) dp--;
          return dp < 0 ? 0 : dp;
        };

        /*
         * Return a new Decimal whose value is the value of this Decimal divided by `y`, truncated to
         * `precision` significant digits.
         *
         */
        P.dividedBy = P.div = function (y) {
          return divide(this, new this.constructor(y));
        };

        /*
         * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
         * by the value of `y`, truncated to `precision` significant digits.
         *
         */
        P.dividedToIntegerBy = P.idiv = function (y) {
          var x = this,
            Ctor = x.constructor;
          return round(divide(x, new Ctor(y), 0, 1), Ctor.precision);
        };

        /*
         * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
         *
         */
        P.equals = P.eq = function (y) {
          return !this.cmp(y);
        };

        /*
         * Return the (base 10) exponent value of this Decimal (this.e is the base 10000000 exponent).
         *
         */
        P.exponent = function () {
          return getBase10Exponent(this);
        };

        /*
         * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
         * false.
         *
         */
        P.greaterThan = P.gt = function (y) {
          return this.cmp(y) > 0;
        };

        /*
         * Return true if the value of this Decimal is greater than or equal to the value of `y`,
         * otherwise return false.
         *
         */
        P.greaterThanOrEqualTo = P.gte = function (y) {
          return this.cmp(y) >= 0;
        };

        /*
         * Return true if the value of this Decimal is an integer, otherwise return false.
         *
         */
        P.isInteger = P.isint = function () {
          return this.e > this.d.length - 2;
        };

        /*
         * Return true if the value of this Decimal is negative, otherwise return false.
         *
         */
        P.isNegative = P.isneg = function () {
          return this.s < 0;
        };

        /*
         * Return true if the value of this Decimal is positive, otherwise return false.
         *
         */
        P.isPositive = P.ispos = function () {
          return this.s > 0;
        };

        /*
         * Return true if the value of this Decimal is 0, otherwise return false.
         *
         */
        P.isZero = function () {
          return this.s === 0;
        };

        /*
         * Return true if the value of this Decimal is less than `y`, otherwise return false.
         *
         */
        P.lessThan = P.lt = function (y) {
          return this.cmp(y) < 0;
        };

        /*
         * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
         *
         */
        P.lessThanOrEqualTo = P.lte = function (y) {
          return this.cmp(y) < 1;
        };

        /*
         * Return the logarithm of the value of this Decimal to the specified base, truncated to
         * `precision` significant digits.
         *
         * If no base is specified, return log[10](x).
         *
         * log[base](x) = ln(x) / ln(base)
         *
         * The maximum error of the result is 1 ulp (unit in the last place).
         *
         * [base] {number|string|Decimal} The base of the logarithm.
         *
         */
        P.logarithm = P.log = function (base) {
          var r,
            x = this,
            Ctor = x.constructor,
            pr = Ctor.precision,
            wpr = pr + 5;

          // Default base is 10.
          if (base === void 0) {
            base = new Ctor(10);
          } else {
            base = new Ctor(base);

            // log[-b](x) = NaN
            // log[0](x)  = NaN
            // log[1](x)  = NaN
            if (base.s < 1 || base.eq(ONE)) throw Error(decimalError + 'NaN');
          }

          // log[b](-x) = NaN
          // log[b](0) = -Infinity
          if (x.s < 1) throw Error(decimalError + (x.s ? 'NaN' : '-Infinity'));

          // log[b](1) = 0
          if (x.eq(ONE)) return new Ctor(0);
          external = false;
          r = divide(ln(x, wpr), ln(base, wpr), wpr);
          external = true;
          return round(r, pr);
        };

        /*
         * Return a new Decimal whose value is the value of this Decimal minus `y`, truncated to
         * `precision` significant digits.
         *
         */
        P.minus = P.sub = function (y) {
          var x = this;
          y = new x.constructor(y);
          return x.s == y.s ? subtract(x, y) : add(x, (y.s = -y.s, y));
        };

        /*
         * Return a new Decimal whose value is the value of this Decimal modulo `y`, truncated to
         * `precision` significant digits.
         *
         */
        P.modulo = P.mod = function (y) {
          var q,
            x = this,
            Ctor = x.constructor,
            pr = Ctor.precision;
          y = new Ctor(y);

          // x % 0 = NaN
          if (!y.s) throw Error(decimalError + 'NaN');

          // Return x if x is 0.
          if (!x.s) return round(new Ctor(x), pr);

          // Prevent rounding of intermediate calculations.
          external = false;
          q = divide(x, y, 0, 1).times(y);
          external = true;
          return x.minus(q);
        };

        /*
         * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
         * i.e. the base e raised to the power the value of this Decimal, truncated to `precision`
         * significant digits.
         *
         */
        P.naturalExponential = P.exp = function () {
          return exp(this);
        };

        /*
         * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
         * truncated to `precision` significant digits.
         *
         */
        P.naturalLogarithm = P.ln = function () {
          return ln(this);
        };

        /*
         * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
         * -1.
         *
         */
        P.negated = P.neg = function () {
          var x = new this.constructor(this);
          x.s = -x.s || 0;
          return x;
        };

        /*
         * Return a new Decimal whose value is the value of this Decimal plus `y`, truncated to
         * `precision` significant digits.
         *
         */
        P.plus = P.add = function (y) {
          var x = this;
          y = new x.constructor(y);
          return x.s == y.s ? add(x, y) : subtract(x, (y.s = -y.s, y));
        };

        /*
         * Return the number of significant digits of the value of this Decimal.
         *
         * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
         *
         */
        P.precision = P.sd = function (z) {
          var e,
            sd,
            w,
            x = this;
          if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
          e = getBase10Exponent(x) + 1;
          w = x.d.length - 1;
          sd = w * LOG_BASE + 1;
          w = x.d[w];

          // If non-zero...
          if (w) {
            // Subtract the number of trailing zeros of the last word.
            for (; w % 10 == 0; w /= 10) sd--;

            // Add the number of digits of the first word.
            for (w = x.d[0]; w >= 10; w /= 10) sd++;
          }
          return z && e > sd ? e : sd;
        };

        /*
         * Return a new Decimal whose value is the square root of this Decimal, truncated to `precision`
         * significant digits.
         *
         */
        P.squareRoot = P.sqrt = function () {
          var e,
            n,
            pr,
            r,
            s,
            t,
            wpr,
            x = this,
            Ctor = x.constructor;

          // Negative or zero?
          if (x.s < 1) {
            if (!x.s) return new Ctor(0);

            // sqrt(-x) = NaN
            throw Error(decimalError + 'NaN');
          }
          e = getBase10Exponent(x);
          external = false;

          // Initial estimate.
          s = Math.sqrt(+x);

          // Math.sqrt underflow/overflow?
          // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
          if (s == 0 || s == 1 / 0) {
            n = digitsToString(x.d);
            if ((n.length + e) % 2 == 0) n += '0';
            s = Math.sqrt(n);
            e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
            if (s == 1 / 0) {
              n = '5e' + e;
            } else {
              n = s.toExponential();
              n = n.slice(0, n.indexOf('e') + 1) + e;
            }
            r = new Ctor(n);
          } else {
            r = new Ctor(s.toString());
          }
          pr = Ctor.precision;
          s = wpr = pr + 3;

          // Newton-Raphson iteration.
          for (;;) {
            t = r;
            r = t.plus(divide(x, t, wpr + 2)).times(0.5);
            if (digitsToString(t.d).slice(0, wpr) === (n = digitsToString(r.d)).slice(0, wpr)) {
              n = n.slice(wpr - 3, wpr + 1);

              // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
              // 4999, i.e. approaching a rounding boundary, continue the iteration.
              if (s == wpr && n == '4999') {
                // On the first iteration only, check to see if rounding up gives the exact result as the
                // nines may infinitely repeat.
                round(t, pr + 1, 0);
                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              } else if (n != '9999') {
                break;
              }
              wpr += 4;
            }
          }
          external = true;
          return round(r, pr);
        };

        /*
         * Return a new Decimal whose value is the value of this Decimal times `y`, truncated to
         * `precision` significant digits.
         *
         */
        P.times = P.mul = function (y) {
          var carry,
            e,
            i,
            k,
            r,
            rL,
            t,
            xdL,
            ydL,
            x = this,
            Ctor = x.constructor,
            xd = x.d,
            yd = (y = new Ctor(y)).d;

          // Return 0 if either is 0.
          if (!x.s || !y.s) return new Ctor(0);
          y.s *= x.s;
          e = x.e + y.e;
          xdL = xd.length;
          ydL = yd.length;

          // Ensure xd points to the longer array.
          if (xdL < ydL) {
            r = xd;
            xd = yd;
            yd = r;
            rL = xdL;
            xdL = ydL;
            ydL = rL;
          }

          // Initialise the result array with zeros.
          r = [];
          rL = xdL + ydL;
          for (i = rL; i--;) r.push(0);

          // Multiply!
          for (i = ydL; --i >= 0;) {
            carry = 0;
            for (k = xdL + i; k > i;) {
              t = r[k] + yd[i] * xd[k - i - 1] + carry;
              r[k--] = t % BASE | 0;
              carry = t / BASE | 0;
            }
            r[k] = (r[k] + carry) % BASE | 0;
          }

          // Remove trailing zeros.
          for (; !r[--rL];) r.pop();
          if (carry) ++e;else r.shift();
          y.d = r;
          y.e = e;
          return external ? round(y, Ctor.precision) : y;
        };

        /*
         * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
         * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
         *
         * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         */
        P.toDecimalPlaces = P.todp = function (dp, rm) {
          var x = this,
            Ctor = x.constructor;
          x = new Ctor(x);
          if (dp === void 0) return x;
          checkInt32(dp, 0, MAX_DIGITS);
          if (rm === void 0) rm = Ctor.rounding;else checkInt32(rm, 0, 8);
          return round(x, dp + getBase10Exponent(x) + 1, rm);
        };

        /*
         * Return a string representing the value of this Decimal in exponential notation rounded to
         * `dp` fixed decimal places using rounding mode `rounding`.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         */
        P.toExponential = function (dp, rm) {
          var str,
            x = this,
            Ctor = x.constructor;
          if (dp === void 0) {
            str = toString(x, true);
          } else {
            checkInt32(dp, 0, MAX_DIGITS);
            if (rm === void 0) rm = Ctor.rounding;else checkInt32(rm, 0, 8);
            x = round(new Ctor(x), dp + 1, rm);
            str = toString(x, true, dp + 1);
          }
          return str;
        };

        /*
         * Return a string representing the value of this Decimal in normal (fixed-point) notation to
         * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
         * omitted.
         *
         * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
         * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
         * (-0).toFixed(3) is '0.000'.
         * (-0.5).toFixed(0) is '-0'.
         *
         */
        P.toFixed = function (dp, rm) {
          var str,
            y,
            x = this,
            Ctor = x.constructor;
          if (dp === void 0) return toString(x);
          checkInt32(dp, 0, MAX_DIGITS);
          if (rm === void 0) rm = Ctor.rounding;else checkInt32(rm, 0, 8);
          y = round(new Ctor(x), dp + getBase10Exponent(x) + 1, rm);
          str = toString(y.abs(), false, dp + getBase10Exponent(y) + 1);

          // To determine whether to add the minus sign look at the value before it was rounded,
          // i.e. look at `x` rather than `y`.
          return x.isneg() && !x.isZero() ? '-' + str : str;
        };

        /*
         * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
         * rounding mode `rounding`.
         *
         */
        P.toInteger = P.toint = function () {
          var x = this,
            Ctor = x.constructor;
          return round(new Ctor(x), getBase10Exponent(x) + 1, Ctor.rounding);
        };

        /*
         * Return the value of this Decimal converted to a number primitive.
         *
         */
        P.toNumber = function () {
          return +this;
        };

        /*
         * Return a new Decimal whose value is the value of this Decimal raised to the power `y`,
         * truncated to `precision` significant digits.
         *
         * For non-integer or very large exponents pow(x, y) is calculated using
         *
         *   x^y = exp(y*ln(x))
         *
         * The maximum error is 1 ulp (unit in last place).
         *
         * y {number|string|Decimal} The power to which to raise this Decimal.
         *
         */
        P.toPower = P.pow = function (y) {
          var e,
            k,
            pr,
            r,
            sign,
            yIsInt,
            x = this,
            Ctor = x.constructor,
            guard = 12,
            yn = +(y = new Ctor(y));

          // pow(x, 0) = 1
          if (!y.s) return new Ctor(ONE);
          x = new Ctor(x);

          // pow(0, y > 0) = 0
          // pow(0, y < 0) = Infinity
          if (!x.s) {
            if (y.s < 1) throw Error(decimalError + 'Infinity');
            return x;
          }

          // pow(1, y) = 1
          if (x.eq(ONE)) return x;
          pr = Ctor.precision;

          // pow(x, 1) = x
          if (y.eq(ONE)) return round(x, pr);
          e = y.e;
          k = y.d.length - 1;
          yIsInt = e >= k;
          sign = x.s;
          if (!yIsInt) {
            // pow(x < 0, y non-integer) = NaN
            if (sign < 0) throw Error(decimalError + 'NaN');

            // If y is a small integer use the 'exponentiation by squaring' algorithm.
          } else if ((k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
            r = new Ctor(ONE);

            // Max k of 9007199254740991 takes 53 loop iterations.
            // Maximum digits array length; leaves [28, 34] guard digits.
            e = Math.ceil(pr / LOG_BASE + 4);
            external = false;
            for (;;) {
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

          // Result is negative if x is negative and the last digit of integer y is odd.
          sign = sign < 0 && y.d[Math.max(e, k)] & 1 ? -1 : 1;
          x.s = 1;
          external = false;
          r = y.times(ln(x, pr + guard));
          external = true;
          r = exp(r);
          r.s = sign;
          return r;
        };

        /*
         * Return a string representing the value of this Decimal rounded to `sd` significant digits
         * using rounding mode `rounding`.
         *
         * Return exponential notation if `sd` is less than the number of digits necessary to represent
         * the integer part of the value in normal notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         */
        P.toPrecision = function (sd, rm) {
          var e,
            str,
            x = this,
            Ctor = x.constructor;
          if (sd === void 0) {
            e = getBase10Exponent(x);
            str = toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
          } else {
            checkInt32(sd, 1, MAX_DIGITS);
            if (rm === void 0) rm = Ctor.rounding;else checkInt32(rm, 0, 8);
            x = round(new Ctor(x), sd, rm);
            e = getBase10Exponent(x);
            str = toString(x, sd <= e || e <= Ctor.toExpNeg, sd);
          }
          return str;
        };

        /*
         * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
         * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
         * omitted.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         */
        P.toSignificantDigits = P.tosd = function (sd, rm) {
          var x = this,
            Ctor = x.constructor;
          if (sd === void 0) {
            sd = Ctor.precision;
            rm = Ctor.rounding;
          } else {
            checkInt32(sd, 1, MAX_DIGITS);
            if (rm === void 0) rm = Ctor.rounding;else checkInt32(rm, 0, 8);
          }
          return round(new Ctor(x), sd, rm);
        };

        /*
         * Return a string representing the value of this Decimal.
         *
         * Return exponential notation if this Decimal has a positive exponent equal to or greater than
         * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
         *
         */
        P.toString = P.valueOf = P.val = P.toJSON = P[Symbol.for('nodejs.util.inspect.custom')] = function () {
          var x = this,
            e = getBase10Exponent(x),
            Ctor = x.constructor;
          return toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
        };

        // Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.

        /*
         *  add                 P.minus, P.plus
         *  checkInt32          P.todp, P.toExponential, P.toFixed, P.toPrecision, P.tosd
         *  digitsToString      P.log, P.sqrt, P.pow, toString, exp, ln
         *  divide              P.div, P.idiv, P.log, P.mod, P.sqrt, exp, ln
         *  exp                 P.exp, P.pow
         *  getBase10Exponent   P.exponent, P.sd, P.toint, P.sqrt, P.todp, P.toFixed, P.toPrecision,
         *                      P.toString, divide, round, toString, exp, ln
         *  getLn10             P.log, ln
         *  getZeroString       digitsToString, toString
         *  ln                  P.log, P.ln, P.pow, exp
         *  parseDecimal        Decimal
         *  round               P.abs, P.idiv, P.log, P.minus, P.mod, P.neg, P.plus, P.toint, P.sqrt,
         *                      P.times, P.todp, P.toExponential, P.toFixed, P.pow, P.toPrecision, P.tosd,
         *                      divide, getLn10, exp, ln
         *  subtract            P.minus, P.plus
         *  toString            P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf
         *  truncate            P.pow
         *
         *  Throws:             P.log, P.mod, P.sd, P.sqrt, P.pow,  checkInt32, divide, round,
         *                      getLn10, exp, ln, parseDecimal, Decimal, config
         */

        function add(x, y) {
          var carry,
            d,
            e,
            i,
            k,
            len,
            xd,
            yd,
            Ctor = x.constructor,
            pr = Ctor.precision;

          // If either is zero...
          if (!x.s || !y.s) {
            // Return x if y is zero.
            // Return y if y is non-zero.
            if (!y.s) y = new Ctor(x);
            return external ? round(y, pr) : y;
          }
          xd = x.d;
          yd = y.d;

          // x and y are finite, non-zero numbers with the same sign.

          k = x.e;
          e = y.e;
          xd = xd.slice();
          i = k - e;

          // If base 1e7 exponents differ...
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

            // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
            k = Math.ceil(pr / LOG_BASE);
            len = k > len ? k + 1 : len + 1;
            if (i > len) {
              i = len;
              d.length = 1;
            }

            // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
            d.reverse();
            for (; i--;) d.push(0);
            d.reverse();
          }
          len = xd.length;
          i = yd.length;

          // If yd is longer than xd, swap xd and yd so xd points to the longer array.
          if (len - i < 0) {
            i = len;
            d = yd;
            yd = xd;
            xd = d;
          }

          // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
          for (carry = 0; i;) {
            carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
            xd[i] %= BASE;
          }
          if (carry) {
            xd.unshift(carry);
            ++e;
          }

          // Remove trailing zeros.
          // No need to check for zero, as +x + +y != 0 && -x + -y != 0
          for (len = xd.length; xd[--len] == 0;) xd.pop();
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
          var i,
            k,
            ws,
            indexOfLastWord = d.length - 1,
            str = '',
            w = d[0];
          if (indexOfLastWord > 0) {
            str += w;
            for (i = 1; i < indexOfLastWord; i++) {
              ws = d[i] + '';
              k = LOG_BASE - ws.length;
              if (k) str += getZeroString(k);
              str += ws;
            }
            w = d[i];
            ws = w + '';
            k = LOG_BASE - ws.length;
            if (k) str += getZeroString(k);
          } else if (w === 0) {
            return '0';
          }

          // Remove trailing zeros of last w.
          for (; w % 10 === 0;) w /= 10;
          return str + w;
        }
        var divide = function () {
          // Assumes non-zero x and k, and hence non-zero result.
          function multiplyInteger(x, k) {
            var temp,
              carry = 0,
              i = x.length;
            for (x = x.slice(); i--;) {
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
          function subtract(a, b, aL) {
            var i = 0;

            // Subtract b from a.
            for (; aL--;) {
              a[aL] -= i;
              i = a[aL] < b[aL] ? 1 : 0;
              a[aL] = i * BASE + a[aL] - b[aL];
            }

            // Remove leading zeros.
            for (; !a[0] && a.length > 1;) a.shift();
          }
          return function (x, y, pr, dp) {
            var cmp,
              e,
              i,
              k,
              prod,
              prodL,
              q,
              qd,
              rem,
              remL,
              rem0,
              sd,
              t,
              xi,
              xL,
              yd0,
              yL,
              yz,
              Ctor = x.constructor,
              sign = x.s == y.s ? 1 : -1,
              xd = x.d,
              yd = y.d;

            // Either 0?
            if (!x.s) return new Ctor(x);
            if (!y.s) throw Error(decimalError + 'Division by zero');
            e = x.e - y.e;
            yL = yd.length;
            xL = xd.length;
            q = new Ctor(sign);
            qd = q.d = [];

            // Result exponent may be one less than e.
            for (i = 0; yd[i] == (xd[i] || 0);) ++i;
            if (yd[i] > (xd[i] || 0)) --e;
            if (pr == null) {
              sd = pr = Ctor.precision;
            } else if (dp) {
              sd = pr + (getBase10Exponent(x) - getBase10Exponent(y)) + 1;
            } else {
              sd = pr;
            }
            if (sd < 0) return new Ctor(0);

            // Convert precision in number of base 10 digits to base 1e7 digits.
            sd = sd / LOG_BASE + 2 | 0;
            i = 0;

            // divisor < 1e7
            if (yL == 1) {
              k = 0;
              yd = yd[0];
              sd++;

              // k is the carry.
              for (; (i < xL || k) && sd--; i++) {
                t = k * BASE + (xd[i] || 0);
                qd[i] = t / yd | 0;
                k = t % yd | 0;
              }

              // divisor >= 1e7
            } else {
              // Normalise xd and yd so highest order digit of yd is >= BASE/2
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

              // Add zeros to make remainder as long as divisor.
              for (; remL < yL;) rem[remL++] = 0;
              yz = yd.slice();
              yz.unshift(0);
              yd0 = yd[0];
              if (yd[1] >= BASE / 2) ++yd0;
              do {
                k = 0;

                // Compare divisor and remainder.
                cmp = compare(yd, rem, yL, remL);

                // If divisor < remainder.
                if (cmp < 0) {
                  // Calculate trial digit, k.
                  rem0 = rem[0];
                  if (yL != remL) rem0 = rem0 * BASE + (rem[1] || 0);

                  // k will be how many times the divisor goes into the current remainder.
                  k = rem0 / yd0 | 0;

                  //  Algorithm:
                  //  1. product = divisor * trial digit (k)
                  //  2. if product > remainder: product -= divisor, k--
                  //  3. remainder -= product
                  //  4. if product was < remainder at 2:
                  //    5. compare new remainder and divisor
                  //    6. If remainder > divisor: remainder -= divisor, k++

                  if (k > 1) {
                    if (k >= BASE) k = BASE - 1;

                    // product = divisor * trial digit.
                    prod = multiplyInteger(yd, k);
                    prodL = prod.length;
                    remL = rem.length;

                    // Compare product and remainder.
                    cmp = compare(prod, rem, prodL, remL);

                    // product > remainder.
                    if (cmp == 1) {
                      k--;

                      // Subtract divisor from product.
                      subtract(prod, yL < prodL ? yz : yd, prodL);
                    }
                  } else {
                    // cmp is -1.
                    // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
                    // to avoid it. If k is 1 there is a need to compare yd and rem again below.
                    if (k == 0) cmp = k = 1;
                    prod = yd.slice();
                  }
                  prodL = prod.length;
                  if (prodL < remL) prod.unshift(0);

                  // Subtract product from remainder.
                  subtract(rem, prod, remL);

                  // If product was < previous remainder.
                  if (cmp == -1) {
                    remL = rem.length;

                    // Compare divisor and new remainder.
                    cmp = compare(yd, rem, yL, remL);

                    // If divisor < new remainder, subtract divisor from remainder.
                    if (cmp < 1) {
                      k++;

                      // Subtract divisor from remainder.
                      subtract(rem, yL < remL ? yz : yd, remL);
                    }
                  }
                  remL = rem.length;
                } else if (cmp === 0) {
                  k++;
                  rem = [0];
                } // if cmp === 1, k will be 0

                // Add the next digit, k, to the result array.
                qd[i++] = k;

                // Update the remainder.
                if (cmp && rem[0]) {
                  rem[remL++] = xd[xi] || 0;
                } else {
                  rem = [xd[xi]];
                  remL = 1;
                }
              } while ((xi++ < xL || rem[0] !== void 0) && sd--);
            }

            // Leading zero?
            if (!qd[0]) qd.shift();
            q.e = e;
            return round(q, dp ? pr + getBase10Exponent(q) + 1 : pr);
          };
        }();

        /*
         * Return a new Decimal whose value is the natural exponential of `x` truncated to `sd`
         * significant digits.
         *
         * Taylor/Maclaurin series.
         *
         * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
         *
         * Argument reduction:
         *   Repeat x = x / 32, k += 5, until |x| < 0.1
         *   exp(x) = exp(x / 2^k)^(2^k)
         *
         * Previously, the argument was initially reduced by
         * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
         * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
         * found to be slower than just dividing repeatedly by 32 as above.
         *
         * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
         *
         *  exp(x) is non-terminating for any finite, non-zero x.
         *
         */
        function exp(x, sd) {
          var denominator,
            guard,
            pow,
            sum,
            t,
            wpr,
            i = 0,
            k = 0,
            Ctor = x.constructor,
            pr = Ctor.precision;
          if (getBase10Exponent(x) > 16) throw Error(exponentOutOfRange + getBase10Exponent(x));

          // exp(0) = 1
          if (!x.s) return new Ctor(ONE);
          {
            external = false;
            wpr = pr;
          }
          t = new Ctor(0.03125);
          while (x.abs().gte(0.1)) {
            x = x.times(t); // x = x / 2^5
            k += 5;
          }

          // Estimate the precision increase necessary to ensure the first 4 rounding digits are correct.
          guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
          wpr += guard;
          denominator = pow = sum = new Ctor(ONE);
          Ctor.precision = wpr;
          for (;;) {
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

        // Calculate the base 10 exponent from the base 1e7 exponent.
        function getBase10Exponent(x) {
          var e = x.e * LOG_BASE,
            w = x.d[0];

          // Add the number of digits of the first word of the digits array.
          for (; w >= 10; w /= 10) e++;
          return e;
        }
        function getLn10(Ctor, sd, pr) {
          if (sd > Ctor.LN10.sd()) {
            // Reset global state in case the exception is caught.
            external = true;
            if (pr) Ctor.precision = pr;
            throw Error(decimalError + 'LN10 precision limit exceeded');
          }
          return round(new Ctor(Ctor.LN10), sd);
        }
        function getZeroString(k) {
          var zs = '';
          for (; k--;) zs += '0';
          return zs;
        }

        /*
         * Return a new Decimal whose value is the natural logarithm of `x` truncated to `sd` significant
         * digits.
         *
         *  ln(n) is non-terminating (n != 1)
         *
         */
        function ln(y, sd) {
          var c,
            c0,
            denominator,
            e,
            numerator,
            sum,
            t,
            wpr,
            x2,
            n = 1,
            guard = 10,
            x = y,
            xd = x.d,
            Ctor = x.constructor,
            pr = Ctor.precision;

          // ln(-x) = NaN
          // ln(0) = -Infinity
          if (x.s < 1) throw Error(decimalError + (x.s ? 'NaN' : '-Infinity'));

          // ln(1) = 0
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
          if (Math.abs(e) < 1.5e15) {
            // Argument reduction.
            // The series converges faster the closer the argument is to 1, so using
            // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
            // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
            // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
            // later be divided by this number, then separate out the power of 10 using
            // ln(a*10^b) = ln(a) + b*ln(10).

            // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
            //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
            // max n is 6 (gives 0.7 - 1.3)
            while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
              x = x.times(y);
              c = digitsToString(x.d);
              c0 = c.charAt(0);
              n++;
            }
            e = getBase10Exponent(x);
            if (c0 > 1) {
              x = new Ctor('0.' + c);
              e++;
            } else {
              x = new Ctor(c0 + '.' + c.slice(1));
            }
          } else {
            // The argument reduction method above may result in overflow if the argument y is a massive
            // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
            // function using ln(x*10^e) = ln(x) + e*ln(10).
            t = getLn10(Ctor, wpr + 2, pr).times(e + '');
            x = ln(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);
            Ctor.precision = pr;
            return sd == null ? (external = true, round(x, pr)) : x;
          }

          // x is reduced to a value near 1.

          // Taylor series.
          // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
          // where x = (y - 1)/(y + 1)    (|x| < 1)
          sum = numerator = x = divide(x.minus(ONE), x.plus(ONE), wpr);
          x2 = round(x.times(x), wpr);
          denominator = 3;
          for (;;) {
            numerator = round(numerator.times(x2), wpr);
            t = sum.plus(divide(numerator, new Ctor(denominator), wpr));
            if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
              sum = sum.times(2);

              // Reverse the argument reduction.
              if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
              sum = divide(sum, new Ctor(n), wpr);
              Ctor.precision = pr;
              return sd == null ? (external = true, round(sum, pr)) : sum;
            }
            sum = t;
            denominator += 2;
          }
        }

        /*
         * Parse the value of a new Decimal `x` from string `str`.
         */
        function parseDecimal(x, str) {
          var e, i, len;

          // Decimal point?
          if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

          // Exponential form?
          if ((i = str.search(/e/i)) > 0) {
            // Determine exponent.
            if (e < 0) e = i;
            e += +str.slice(i + 1);
            str = str.substring(0, i);
          } else if (e < 0) {
            // Integer.
            e = str.length;
          }

          // Determine leading zeros.
          for (i = 0; str.charCodeAt(i) === 48;) ++i;

          // Determine trailing zeros.
          for (len = str.length; str.charCodeAt(len - 1) === 48;) --len;
          str = str.slice(i, len);
          if (str) {
            len -= i;
            e = e - i - 1;
            x.e = mathfloor(e / LOG_BASE);
            x.d = [];

            // Transform base

            // e is the base 10 exponent.
            // i is where to slice str to get the first word of the digits array.
            i = (e + 1) % LOG_BASE;
            if (e < 0) i += LOG_BASE;
            if (i < len) {
              if (i) x.d.push(+str.slice(0, i));
              for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
              str = str.slice(i);
              i = LOG_BASE - str.length;
            } else {
              i -= len;
            }
            for (; i--;) str += '0';
            x.d.push(+str);
            if (external && (x.e > MAX_E || x.e < -MAX_E)) throw Error(exponentOutOfRange + e);
          } else {
            // Zero.
            x.s = 0;
            x.e = 0;
            x.d = [0];
          }
          return x;
        }

        /*
         * Round `x` to `sd` significant digits, using rounding mode `rm` if present (truncate otherwise).
         */
        function round(x, sd, rm) {
          var i,
            j,
            k,
            n,
            rd,
            doRound,
            w,
            xdi,
            xd = x.d;

          // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
          // w: the word of xd which contains the rounding digit, a base 1e7 number.
          // xdi: the index of w within xd.
          // n: the number of digits of w.
          // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
          // they had leading zeros)
          // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

          // Get the length of the first word of the digits array xd.
          for (n = 1, k = xd[0]; k >= 10; k /= 10) n++;
          i = sd - n;

          // Is the rounding digit in the first word of xd?
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            w = xd[xdi = 0];
          } else {
            xdi = Math.ceil((i + 1) / LOG_BASE);
            k = xd.length;
            if (xdi >= k) return x;
            w = k = xd[xdi];

            // Get the number of digits of w.
            for (n = 1; k >= 10; k /= 10) n++;

            // Get the index of rd within w.
            i %= LOG_BASE;

            // Get the index of rd within w, adjusted for leading zeros.
            // The number of leading zeros of w is given by LOG_BASE - n.
            j = i - LOG_BASE + n;
          }
          if (rm !== void 0) {
            k = mathpow(10, n - j - 1);

            // Get the rounding digit at index j of w.
            rd = w / k % 10 | 0;

            // Are there any non-zero digits after the rounding digit?
            doRound = sd < 0 || xd[xdi + 1] !== void 0 || w % k;

            // The expression `w % mathpow(10, n - j - 1)` returns all the digits of w to the right of the
            // digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression will give
            // 714.

            doRound = rm < 4 ? (rd || doRound) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || doRound || rm == 6 &&
            // Check whether the digit to the left of the rounding digit is odd.
            (i > 0 ? j > 0 ? w / mathpow(10, n - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
          }
          if (sd < 1 || !xd[0]) {
            if (doRound) {
              k = getBase10Exponent(x);
              xd.length = 1;

              // Convert sd to decimal places.
              sd = sd - k - 1;

              // 1, 0.1, 0.01, 0.001, 0.0001 etc.
              xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
              x.e = mathfloor(-sd / LOG_BASE) || 0;
            } else {
              xd.length = 1;

              // Zero.
              xd[0] = x.e = x.s = 0;
            }
            return x;
          }

          // Remove excess digits.
          if (i == 0) {
            xd.length = xdi;
            k = 1;
            xdi--;
          } else {
            xd.length = xdi + 1;
            k = mathpow(10, LOG_BASE - i);

            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of w.
            xd[xdi] = j > 0 ? (w / mathpow(10, n - j) % mathpow(10, j) | 0) * k : 0;
          }
          if (doRound) {
            for (;;) {
              // Is the digit to be rounded up in the first word of xd?
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

          // Remove trailing zeros.
          for (i = xd.length; xd[--i] === 0;) xd.pop();
          if (external && (x.e > MAX_E || x.e < -MAX_E)) {
            throw Error(exponentOutOfRange + getBase10Exponent(x));
          }
          return x;
        }
        function subtract(x, y) {
          var d,
            e,
            i,
            j,
            k,
            len,
            xd,
            xe,
            xLTy,
            yd,
            Ctor = x.constructor,
            pr = Ctor.precision;

          // Return y negated if x is zero.
          // Return x if y is zero and x is non-zero.
          if (!x.s || !y.s) {
            if (y.s) y.s = -y.s;else y = new Ctor(x);
            return external ? round(y, pr) : y;
          }
          xd = x.d;
          yd = y.d;

          // x and y are non-zero numbers with the same sign.

          e = y.e;
          xe = x.e;
          xd = xd.slice();
          k = xe - e;

          // If exponents differ...
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

            // Numbers with massively different exponents would result in a very high number of zeros
            // needing to be prepended, but this can be avoided while still ensuring correct rounding by
            // limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
            i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
            if (k > i) {
              k = i;
              d.length = 1;
            }

            // Prepend zeros to equalise exponents.
            d.reverse();
            for (i = k; i--;) d.push(0);
            d.reverse();

            // Base 1e7 exponents equal.
          } else {
            // Check digits to determine which is the bigger number.

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

          // Append zeros to xd if shorter.
          // Don't add zeros to yd if shorter as subtraction only needs to start at yd length.
          for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

          // Subtract yd from xd.
          for (i = yd.length; i > k;) {
            if (xd[--i] < yd[i]) {
              for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
              --xd[j];
              xd[i] += BASE;
            }
            xd[i] -= yd[i];
          }

          // Remove trailing zeros.
          for (; xd[--len] === 0;) xd.pop();

          // Remove leading zeros and adjust exponent accordingly.
          for (; xd[0] === 0; xd.shift()) --e;

          // Zero?
          if (!xd[0]) return new Ctor(0);
          y.d = xd;
          y.e = e;

          //return external && xd.length >= pr / LOG_BASE ? round(y, pr) : y;
          return external ? round(y, pr) : y;
        }
        function toString(x, isExp, sd) {
          var k,
            e = getBase10Exponent(x),
            str = digitsToString(x.d),
            len = str.length;
          if (isExp) {
            if (sd && (k = sd - len) > 0) {
              str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
            } else if (len > 1) {
              str = str.charAt(0) + '.' + str.slice(1);
            }
            str = str + (e < 0 ? 'e' : 'e+') + e;
          } else if (e < 0) {
            str = '0.' + getZeroString(-e - 1) + str;
            if (sd && (k = sd - len) > 0) str += getZeroString(k);
          } else if (e >= len) {
            str += getZeroString(e + 1 - len);
            if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
          } else {
            if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
            if (sd && (k = sd - len) > 0) {
              if (e + 1 === len) str += '.';
              str += getZeroString(k);
            }
          }
          return x.s < 0 ? '-' + str : str;
        }

        // Does not strip trailing zeros.
        function truncate(arr, len) {
          if (arr.length > len) {
            arr.length = len;
            return true;
          }
        }

        // Decimal methods

        /*
         *  clone
         *  config/set
         */

        /*
         * Create and return a Decimal constructor with the same configuration properties as this Decimal
         * constructor.
         *
         */
        function clone(obj) {
          var i, p, ps;

          /*
           * The Decimal constructor and exported function.
           * Return a new Decimal instance.
           *
           * value {number|string|Decimal} A numeric value.
           *
           */
          function Decimal(value) {
            var x = this;

            // Decimal called without new.
            if (!(x instanceof Decimal)) return new Decimal(value);

            // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
            // which points to Object.
            x.constructor = Decimal;

            // Duplicate.
            if (value instanceof Decimal) {
              x.s = value.s;
              x.e = value.e;
              x.d = (value = value.d) ? value.slice() : value;
              return;
            }
            if (typeof value === 'number') {
              // Reject Infinity/NaN.
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

              // Fast path for small integers.
              if (value === ~~value && value < 1e7) {
                x.e = 0;
                x.d = [value];
                return;
              }
              return parseDecimal(x, value.toString());
            } else if (typeof value !== 'string') {
              throw Error(invalidArgument + value);
            }

            // Minus sign?
            if (value.charCodeAt(0) === 45) {
              value = value.slice(1);
              x.s = -1;
            } else {
              x.s = 1;
            }
            if (isDecimal.test(value)) parseDecimal(x, value);else throw Error(invalidArgument + value);
          }
          Decimal.prototype = P;
          Decimal.ROUND_UP = 0;
          Decimal.ROUND_DOWN = 1;
          Decimal.ROUND_CEIL = 2;
          Decimal.ROUND_FLOOR = 3;
          Decimal.ROUND_HALF_UP = 4;
          Decimal.ROUND_HALF_DOWN = 5;
          Decimal.ROUND_HALF_EVEN = 6;
          Decimal.ROUND_HALF_CEIL = 7;
          Decimal.ROUND_HALF_FLOOR = 8;
          Decimal.clone = clone;
          Decimal.config = Decimal.set = config;
          if (obj === void 0) obj = {};
          if (obj) {
            ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'];
            for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
          }
          Decimal.config(obj);
          return Decimal;
        }

        /*
         * Configure global settings for a Decimal constructor.
         *
         * `obj` is an object with one or more of the following properties,
         *
         *   precision  {number}
         *   rounding   {number}
         *   toExpNeg   {number}
         *   toExpPos   {number}
         *
         * E.g. Decimal.config({ precision: 20, rounding: 4 })
         *
         */
        function config(obj) {
          if (!obj || typeof obj !== 'object') {
            throw Error(decimalError + 'Object expected');
          }
          var i,
            p,
            v,
            ps = ['precision', 1, MAX_DIGITS, 'rounding', 0, 8, 'toExpNeg', -1 / 0, 0, 'toExpPos', 0, 1 / 0];
          for (i = 0; i < ps.length; i += 3) {
            if ((v = obj[p = ps[i]]) !== void 0) {
              if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;else throw Error(invalidArgument + p + ': ' + v);
            }
          }
          if ((v = obj[p = 'LN10']) !== void 0) {
            if (v == Math.LN10) this[p] = new this(v);else throw Error(invalidArgument + p + ': ' + v);
          }
          return this;
        }

        // Create and configure initial Decimal constructor.
        var Decimal = clone(defaults);

        // Internal constant.
        ONE = new Decimal(1);
        const Decimal$1 = exports("D", Decimal);
        var BaccaratBetLimitProfile;
        exports("b", BaccaratBetLimitProfile);
        (function (BaccaratBetLimitProfile) {
          BaccaratBetLimitProfile["PLAYER"] = "bc.player";
          BaccaratBetLimitProfile["BANKER"] = "bc.banker";
          BaccaratBetLimitProfile["TIE"] = "bc.tie";
          BaccaratBetLimitProfile["PLAYER_PAIR"] = "bc.p-pair";
          BaccaratBetLimitProfile["BANKER_PAIR"] = "bc.b-pair";
          BaccaratBetLimitProfile["PERFECT_PAIR"] = "bc.pp";
          BaccaratBetLimitProfile["EITHER_PAIR"] = "bc.e-pair";
          BaccaratBetLimitProfile["PLAYER_BANKER_BONUS"] = "bc.pb-bonus";
        })(BaccaratBetLimitProfile || exports("b", BaccaratBetLimitProfile = {}));
        var BaccaratBetNo;
        exports("B", BaccaratBetNo);
        (function (BaccaratBetNo) {
          BaccaratBetNo["PLAYER"] = "bc.player";
          BaccaratBetNo["BANKER"] = "bc.banker";
          BaccaratBetNo["TIE"] = "bc.tie";
          BaccaratBetNo["PLAYER_PAIR"] = "bc.p-pair";
          BaccaratBetNo["BANKER_PAIR"] = "bc.b-pair";
          BaccaratBetNo["PERFECT_PAIR"] = "bc.pp";
          BaccaratBetNo["EITHER_PAIR"] = "bc.e-pair";
          BaccaratBetNo["PLAYER_BONUS"] = "bc.pb";
          BaccaratBetNo["BANKER_BONUS"] = "bc.bb";
        })(BaccaratBetNo || exports("B", BaccaratBetNo = {}));
        var BaccaratBetType;
        (function (BaccaratBetType) {
          BaccaratBetType["PLAYER_TIE"] = "bc.p-tie";
          BaccaratBetType["PLAYER"] = "bc.player";
          BaccaratBetType["BANKER_TIE"] = "bc.b-tie";
          BaccaratBetType["BANKER"] = "bc.banker";
          BaccaratBetType["TIE"] = "bc.tie";
          BaccaratBetType["PLAYER_PAIR"] = "bc.p-pair";
          BaccaratBetType["BANKER_PAIR"] = "bc.b-pair";
          BaccaratBetType["PERFECT_PAIR_ONE_HAND"] = "bc.pp-one";
          BaccaratBetType["PERFECT_PAIR_BOTH_HANDS"] = "bc.pp-both";
          BaccaratBetType["EITHER_PAIR"] = "bc.e-pair";
          BaccaratBetType["PLAYER_BONUS_NATURAL_TIE"] = "bc.pb-n-tie";
          BaccaratBetType["PLAYER_BONUS_NATURAL_WIN"] = "bc.pb-n-win";
          BaccaratBetType["PLAYER_BONUS_NON_NATURAL_WIN_BY_4"] = "bc.pb-nn-4";
          BaccaratBetType["PLAYER_BONUS_NON_NATURAL_WIN_BY_5"] = "bc.pb-nn-5";
          BaccaratBetType["PLAYER_BONUS_NON_NATURAL_WIN_BY_6"] = "bc.pb-nn-6";
          BaccaratBetType["PLAYER_BONUS_NON_NATURAL_WIN_BY_7"] = "bc.pb-nn-7";
          BaccaratBetType["PLAYER_BONUS_NON_NATURAL_WIN_BY_8"] = "bc.pb-nn-8";
          BaccaratBetType["PLAYER_BONUS_NON_NATURAL_WIN_BY_9"] = "bc.pb-nn-9";
          BaccaratBetType["BANKER_BONUS_NATURAL_TIE"] = "bc.bb-n-tie";
          BaccaratBetType["BANKER_BONUS_NATURAL_WIN"] = "bc.bb-n-win";
          BaccaratBetType["BANKER_BONUS_NON_NATURAL_WIN_BY_4"] = "bc.bb-nn-4";
          BaccaratBetType["BANKER_BONUS_NON_NATURAL_WIN_BY_5"] = "bc.bb-nn-5";
          BaccaratBetType["BANKER_BONUS_NON_NATURAL_WIN_BY_6"] = "bc.bb-nn-6";
          BaccaratBetType["BANKER_BONUS_NON_NATURAL_WIN_BY_7"] = "bc.bb-nn-7";
          BaccaratBetType["BANKER_BONUS_NON_NATURAL_WIN_BY_8"] = "bc.bb-nn-8";
          BaccaratBetType["BANKER_BONUS_NON_NATURAL_WIN_BY_9"] = "bc.bb-nn-9";
        })(BaccaratBetType || (BaccaratBetType = {}));
        function parseBaccaratBetNo(input) {
          const enumValues = Object.values(BaccaratBetNo);
          if (enumValues.includes(input)) {
            return input;
          }
          return undefined;
        }
        var BaccaratOutcome;
        (function (BaccaratOutcome) {
          BaccaratOutcome["PLAYER"] = "bc.player";
          BaccaratOutcome["BANKER"] = "bc.banker";
          BaccaratOutcome["TIE"] = "bc.tie";
          BaccaratOutcome["UNKNOWN"] = "unknown";
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
        /**
         * Maps Baccarat bet types to their corresponding payout rates.
         *
         * Note: When the payout is 0, it means the bet will return to the player
         * without any winnings, such as in the case of a tie for player or banker bets.
         */
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
        const BaccaratOppositeBetRules = [[BaccaratBetNo.PLAYER, BaccaratBetNo.BANKER]];

        /**
         * Gets the Baccarat point value for a card.
         * In Baccarat: A=1, 2-9=face value, 10/J/Q/K=0
         */
        function getBaccaratCardValue(card) {
          switch (card.rank) {
            case CardRank.A:
              {
                return 1;
              }
            case CardRank.R2:
            case CardRank.R3:
            case CardRank.R4:
            case CardRank.R5:
            case CardRank.R6:
            case CardRank.R7:
            case CardRank.R8:
            case CardRank.R9:
              {
                return Number.parseInt(card.rank, 10);
              }
            // 10, J, Q, K are all worth 0 in Baccarat
            default:
              {
                return 0;
              }
          }
        }
        /**
         * Calculates the Baccarat hand total.
         * The total is the sum of card values modulo 10.
         */
        function sumBaccarat(cards) {
          const total = cards.reduce((sum, card) => sum + getBaccaratCardValue(card), 0);
          return total % 10;
        }
        /**
         * Encapsulates baccarat card data and provides convenient methods for game logic
         */
        class BaccaratCards {
          constructor(cards) {
            _defineProperty(this, "cards", void 0);
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
            var _this$cards$, _this$cards$2;
            return ((_this$cards$ = this.cards[0]) === null || _this$cards$ === void 0 ? void 0 : _this$cards$.rank) === ((_this$cards$2 = this.cards[1]) === null || _this$cards$2 === void 0 ? void 0 : _this$cards$2.rank);
          }
          hasBankerPair() {
            var _this$cards$3, _this$cards$4;
            return ((_this$cards$3 = this.cards[3]) === null || _this$cards$3 === void 0 ? void 0 : _this$cards$3.rank) === ((_this$cards$4 = this.cards[4]) === null || _this$cards$4 === void 0 ? void 0 : _this$cards$4.rank);
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
            const cards = this.cards.map(card => card.toString());
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
        exports("i", BaccaratCards);
        function playerCards(result) {
          return result.slice(0, 3).filter(Boolean).map(r => Card(r));
        }
        function bankerCards(result) {
          return result.slice(3, 6).filter(Boolean).map(r => Card(r));
        }
        /** Determines if the Player should draw next card in baccarat. */
        function needDrawPlayer(result) {
          const cards = playerCards(result);
          const bankers = bankerCards(result);
          return needDrawPlayerFromCards(cards, bankers);
        }
        function needDrawPlayerFromCards(cards, bankerCards) {
          // 1st, 2nd
          if (cards.length < 2) return true;
          // 3rd
          const total = sumBaccarat(cards.slice(0, 2));
          const bankerTotal = sumBaccarat(bankerCards.slice(0, 2));
          if (Math.max(total, bankerTotal) >= 8) return false; // No draw on naturals
          return total >= 0 && total <= 5;
        }
        function needDrawBanker(result) {
          const players = playerCards(result);
          const bankers = bankerCards(result);
          return needDrawBankerFromCards(players, bankers);
        }
        function needDrawBankerFromCards(playerHand, bankerHand) {
          // 1st, 2nd
          if (bankerHand.length < 2) return true;
          const playerTotal = sumBaccarat(playerHand.slice(0, 2));
          const bankerTotal = sumBaccarat(bankerHand.slice(0, 2));
          if (Math.max(playerTotal, bankerTotal) >= 8) return false; // No draw on naturals
          // 3rd
          const playerHas3 = playerHand.length === 3;
          const player3 = playerHas3 ? getBaccaratCardValue(playerHand[2]) : null;
          if (bankerTotal <= 2) return true;
          if (bankerTotal === 3) return !playerHas3 || player3 !== 8;
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
        /**
         * Checks if a baccarat deal is complete and valid.
         * @param cards array of cards in order they were dealt. Empty strings for un-dealt cards.
         * @returns true if the deal is complete and is valid baccarat pattern, false otherwise.
         */
        function isDealComplete(cards) {
          if (cards.length < 6) return false;
          const gameResult = {
            baccarat: cards
          };
          for (const [res] of BaccaratGameFinishRules) {
            if (!res(gameResult)) {
              return false;
            }
          }
          return true;
        }
        const BaccaratGameResultRules = [[result => {
          const {
            baccarat
          } = result;
          return !(baccarat == undefined || baccarat == null);
        }, 'the baccarat cards are missing'], [result => {
          const {
            baccarat
          } = result;
          return Array.isArray(baccarat);
        }, 'the baccarat cards are incorrect type'], [result => {
          const {
            baccarat
          } = result;
          return baccarat.length === 6;
        }, 'the baccarat cards are incorrect length'], [result => {
          var _result$baccarat;
          const player1 = result === null || result === void 0 || (_result$baccarat = result.baccarat) === null || _result$baccarat === void 0 ? void 0 : _result$baccarat[0];
          return !player1 || isCard(player1);
        }, 'the 1st player card is incorrect'], [result => {
          var _result$baccarat2;
          const player2 = result === null || result === void 0 || (_result$baccarat2 = result.baccarat) === null || _result$baccarat2 === void 0 ? void 0 : _result$baccarat2[1];
          return !player2 || isCard(player2);
        }, 'the 2nd player card is incorrect'], [result => {
          var _result$baccarat3;
          const player3 = result === null || result === void 0 || (_result$baccarat3 = result.baccarat) === null || _result$baccarat3 === void 0 ? void 0 : _result$baccarat3[2];
          return !player3 || isCard(player3);
        }, 'the 3rd player card is incorrect'], [result => {
          var _result$baccarat4;
          const banker1 = result === null || result === void 0 || (_result$baccarat4 = result.baccarat) === null || _result$baccarat4 === void 0 ? void 0 : _result$baccarat4[3];
          return !banker1 || isCard(banker1);
        }, 'the 1st banker card is incorrect'], [result => {
          var _result$baccarat5;
          const banker2 = result === null || result === void 0 || (_result$baccarat5 = result.baccarat) === null || _result$baccarat5 === void 0 ? void 0 : _result$baccarat5[4];
          return !banker2 || isCard(banker2);
        }, 'the 2nd banker card is incorrect'], [result => {
          var _result$baccarat6;
          const banker3 = result === null || result === void 0 || (_result$baccarat6 = result.baccarat) === null || _result$baccarat6 === void 0 ? void 0 : _result$baccarat6[5];
          return !banker3 || isCard(banker3);
        }, 'the 3rd banker card is incorrect']];
        const BaccaratGameFinishRules = [[result => {
          const {
            baccarat
          } = result;
          return Array.isArray(baccarat) && baccarat.length === 6;
        }, 'the baccarat cards are incorrect length'], [result => {
          const {
            baccarat
          } = result;
          return Array.isArray(baccarat) && (
          // If need to draw banker, must have a card. Else must be empty.
          needDrawBanker(baccarat) ? baccarat[5] !== '' : baccarat[5] === '');
        }, 'banker draw validation failed'], [result => {
          const {
            baccarat
          } = result;
          return Array.isArray(baccarat) && (
          // If need to draw player, must have a card. Else must be empty.
          needDrawPlayer(baccarat) ? baccarat[2] !== '' : baccarat[2] === '');
        }, 'player draw validation failed']];
        class BaccaratGame extends GameRule {
          constructor() {
            super(BaccaratGameResultRules);
          }
          validateBetType(betNo) {
            return parseBaccaratBetNo(betNo) != undefined;
          }
          getWinningProfile(result) {
            if (this.validateResult(result) !== undefined) {
              return new Map();
            }
            const cardArray = result.baccarat ? result.baccarat.map(card => Card(card)) : [];
            if (cardArray.length !== 6) {
              return new Map();
            }
            const baccaratCards = new BaccaratCards(cardArray);
            const profileForRank = getWinningProfileForRankComparison(baccaratCards);
            const profileForPair = getWinningProfileForPairExistence(baccaratCards);
            return new Map([...profileForRank, ...profileForPair]);
          }
          extractBetLimitProfileFromNo(maybeBetNo) {
            const betNo = parseBaccaratBetNo(maybeBetNo);
            if (!betNo) {
              return undefined;
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
          // Banker wins
          return handleBankerWinScenario(baccaratCards, bankerIsNatural);
        }
        function handleTieScenario(playerIsNatural, bankerIsNatural) {
          const tieResult = new Map([[BaccaratBetNo.PLAYER, BaccaratWinningRate[BaccaratBetType.PLAYER_TIE]], [BaccaratBetNo.BANKER, BaccaratWinningRate[BaccaratBetType.BANKER_TIE]], [BaccaratBetNo.TIE, BaccaratWinningRate[BaccaratBetType.TIE]]]);
          // For Dragon Bonus: Natural tie = push (return bet), Non-natural tie = lose (no payout)
          if (playerIsNatural || bankerIsNatural) {
            tieResult.set(BaccaratBetNo.PLAYER_BONUS, BaccaratWinningRate[BaccaratBetType.PLAYER_BONUS_NATURAL_TIE]);
            tieResult.set(BaccaratBetNo.BANKER_BONUS, BaccaratWinningRate[BaccaratBetType.BANKER_BONUS_NATURAL_TIE]);
          }
          // Non-natural ties don't add bonus entries (they lose)
          return tieResult;
        }
        function handlePlayerWinScenario(baccaratCards, playerIsNatural) {
          const basicRes = new Map([[BaccaratBetNo.PLAYER, BaccaratWinningRate[BaccaratBetType.PLAYER]]]);
          // Player wins - calculate Dragon Bonus payout
          if (playerIsNatural) {
            // Natural win always pays 1:1 regardless of margin
            basicRes.set(BaccaratBetNo.PLAYER_BONUS, BaccaratWinningRate[BaccaratBetType.PLAYER_BONUS_NATURAL_WIN]);
          } else {
            // Non-natural win - payout based on margin of victory
            const margin = baccaratCards.getMarginOfVictory();
            if (margin >= 4) {
              const bonusType = getPlayerBonusTypeByMargin(margin);
              basicRes.set(BaccaratBetNo.PLAYER_BONUS, BaccaratWinningRate[bonusType]);
            }
            // If margin < 4, no bonus payout (Dragon Bonus loses)
          }
          return basicRes;
        }
        function handleBankerWinScenario(baccaratCards, bankerIsNatural) {
          const basicRes = new Map([[BaccaratBetNo.BANKER, BaccaratWinningRate[BaccaratBetType.BANKER]]]);
          // Banker wins - calculate Dragon Bonus payout
          if (bankerIsNatural) {
            // Natural win always pays 1:1 regardless of margin
            basicRes.set(BaccaratBetNo.BANKER_BONUS, BaccaratWinningRate[BaccaratBetType.BANKER_BONUS_NATURAL_WIN]);
          } else {
            // Non-natural win - payout based on margin of victory
            const margin = baccaratCards.getMarginOfVictory();
            if (margin >= 4) {
              const bonusType = getBankerBonusTypeByMargin(margin);
              basicRes.set(BaccaratBetNo.BANKER_BONUS, BaccaratWinningRate[bonusType]);
            }
            // If margin < 4, no bonus payout (Dragon Bonus loses)
          }
          return basicRes;
        }
        function getPlayerBonusTypeByMargin(margin) {
          switch (margin) {
            case 4:
              {
                return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_4;
              }
            case 5:
              {
                return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_5;
              }
            case 6:
              {
                return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_6;
              }
            case 7:
              {
                return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_7;
              }
            case 8:
              {
                return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_8;
              }
            case 9:
              {
                return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_9;
              }
            default:
              {
                return BaccaratBetType.PLAYER_BONUS_NON_NATURAL_WIN_BY_9;
              }
          }
        }
        function getBankerBonusTypeByMargin(margin) {
          switch (margin) {
            case 4:
              {
                return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_4;
              }
            case 5:
              {
                return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_5;
              }
            case 6:
              {
                return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_6;
              }
            case 7:
              {
                return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_7;
              }
            case 8:
              {
                return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_8;
              }
            case 9:
              {
                return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_9;
              }
            default:
              {
                return BaccaratBetType.BANKER_BONUS_NON_NATURAL_WIN_BY_9;
              }
          }
        }
        function getWinningProfileForPairExistence(baccaratCards) {
          if (!baccaratCards.hasAnyPair()) {
            return new Map();
          }
          const resultPayouts = new Map([[BaccaratBetNo.EITHER_PAIR, BaccaratWinningRate[BaccaratBetType.EITHER_PAIR]]]);
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
            return new Map([...resultPayouts, [BaccaratBetNo.PERFECT_PAIR, BaccaratWinningRate[BaccaratBetType.PERFECT_PAIR_BOTH_HANDS]]]);
          }
          return new Map([...resultPayouts, [BaccaratBetNo.PERFECT_PAIR, BaccaratWinningRate[BaccaratBetType.PERFECT_PAIR_ONE_HAND]]]);
        }
        const defaultErrorConfig = {
          withStackTrace: false
        };
        // Custom error object
        // Context / discussion: https://github.com/supermacro/neverthrow/pull/215
        const createNeverThrowError = (message, result, config = defaultErrorConfig) => {
          const data = result.isOk() ? {
            type: 'Ok',
            value: result.value
          } : {
            type: 'Err',
            value: result.error
          };
          const maybeStack = config.withStackTrace ? new Error().stack : undefined;
          return {
            data,
            message,
            stack: maybeStack
          };
        };

        /******************************************************************************
        Copyright (c) Microsoft Corporation.
          Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
        /* global Reflect, Promise, SuppressedError, Symbol, Iterator */

        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
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
          var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
          if (m) return m.call(o);
          if (o && typeof o.length === "number") return {
            next: function () {
              if (o && i >= o.length) o = void 0;
              return {
                value: o && o[i++],
                done: !o
              };
            }
          };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function __await(v) {
          return this instanceof __await ? (this.v = v, this) : new __await(v);
        }
        function __asyncGenerator(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
          return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () {
            return this;
          }, i;
          function awaitReturn(f) {
            return function (v) {
              return Promise.resolve(v).then(f, reject);
            };
          }
          function verb(n, f) {
            if (g[n]) {
              i[n] = function (v) {
                return new Promise(function (a, b) {
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
          return i = {}, verb("next"), verb("throw", function (e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function () {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function (v) {
              return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
              } : f ? f(v) : v;
            } : f;
          }
        }
        function __asyncValues(o) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator],
            i;
          return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function (v) {
              return new Promise(function (resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function (v) {
              resolve({
                value: v,
                done: d
              });
            }, reject);
          }
        }
        typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
          var e = new Error(message);
          return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
        };
        class ResultAsync {
          constructor(res) {
            this._promise = res;
          }
          static fromSafePromise(promise) {
            const newPromise = promise.then(value => new Ok(value));
            return new ResultAsync(newPromise);
          }
          static fromPromise(promise, errorFn) {
            const newPromise = promise.then(value => new Ok(value)).catch(e => new Err(errorFn(e)));
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
            return new ResultAsync(this._promise.then(res => __awaiter(this, void 0, void 0, function* () {
              if (res.isErr()) {
                return new Err(res.error);
              }
              return new Ok(yield f(res.value));
            })));
          }
          andThrough(f) {
            return new ResultAsync(this._promise.then(res => __awaiter(this, void 0, void 0, function* () {
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
            return new ResultAsync(this._promise.then(res => __awaiter(this, void 0, void 0, function* () {
              if (res.isErr()) {
                return new Err(res.error);
              }
              try {
                yield f(res.value);
              } catch (e) {
                // Tee does not care about the error
              }
              return new Ok(res.value);
            })));
          }
          orTee(f) {
            return new ResultAsync(this._promise.then(res => __awaiter(this, void 0, void 0, function* () {
              if (res.isOk()) {
                return new Ok(res.value);
              }
              try {
                yield f(res.error);
              } catch (e) {
                // Tee does not care about the error
              }
              return new Err(res.error);
            })));
          }
          mapErr(f) {
            return new ResultAsync(this._promise.then(res => __awaiter(this, void 0, void 0, function* () {
              if (res.isOk()) {
                return new Ok(res.value);
              }
              return new Err(yield f(res.error));
            })));
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
          andThen(f) {
            return new ResultAsync(this._promise.then(res => {
              if (res.isErr()) {
                return new Err(res.error);
              }
              const newValue = f(res.value);
              return newValue instanceof ResultAsync ? newValue._promise : newValue;
            }));
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
          orElse(f) {
            return new ResultAsync(this._promise.then(res => __awaiter(this, void 0, void 0, function* () {
              if (res.isErr()) {
                return f(res.error);
              }
              return new Ok(res.value);
            })));
          }
          match(ok, _err) {
            return this._promise.then(res => res.match(ok, _err));
          }
          unwrapOr(t) {
            return this._promise.then(res => res.unwrapOr(t));
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
              return yield __await(yield __await(yield* __asyncDelegator(__asyncValues(yield __await(this._promise.then(res => res.safeUnwrap()))))));
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
                // @ts-expect-error -- This is structurally equivalent and safe
                yield yield __await(errAsync(result.error));
              }
              // @ts-expect-error -- This is structurally equivalent and safe
              return yield __await(result.value);
            });
          }
        }
        function errAsync(err) {
          return new ResultAsync(Promise.resolve(new Err(err)));
        }

        /**
         * Short circuits on the FIRST Err value that we find
         */
        const combineResultList = resultList => {
          let acc = ok([]);
          for (const result of resultList) {
            if (result.isErr()) {
              acc = err(result.error);
              break;
            } else {
              acc.map(list => list.push(result.value));
            }
          }
          return acc;
        };
        /* This is the typesafe version of Promise.all
         *
         * Takes a list of ResultAsync<T, E> and success if all inner results are Ok values
         * or fails if one (or more) of the inner results are Err values
         */
        const combineResultAsyncList = asyncResultList => ResultAsync.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultList);
        /**
         * Give a list of all the errors we find
         */
        const combineResultListWithAllErrors = resultList => {
          let acc = ok([]);
          for (const result of resultList) {
            if (result.isErr() && acc.isErr()) {
              acc.error.push(result.error);
            } else if (result.isErr() && acc.isOk()) {
              acc = err([result.error]);
            } else if (result.isOk() && acc.isOk()) {
              acc.value.push(result.value);
            }
            // do nothing when result.isOk() && acc.isErr()
          }
          return acc;
        };
        const combineResultAsyncListWithAllErrors = asyncResultList => ResultAsync.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultListWithAllErrors);

        // eslint-disable-next-line @typescript-eslint/no-namespace
        var Result;
        (function (Result) {
          /**
           * Wraps a function with a try catch, creating a new function with the same
           * arguments but returning `Ok` if successful, `Err` if the function throws
           *
           * @param fn function to wrap with ok on success or err on failure
           * @param errorFn when an error is thrown, this will wrap the error result if provided
           */
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          Result.fromThrowable = fromThrowable;
          function combine(resultList) {
            return combineResultList(resultList);
          }
          Result.combine = combine;
          function combineWithAllErrors(resultList) {
            return combineResultListWithAllErrors(resultList);
          }
          Result.combineWithAllErrors = combineWithAllErrors;
        })(Result || (Result = {}));
        function ok(value) {
          return new Ok(value);
        }
        function err(err) {
          return new Err(err);
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
            return f(this.value).map(_value => this.value);
          }
          andTee(f) {
            try {
              f(this.value);
            } catch (e) {
              // Tee doesn't care about the error
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
          match(ok, _err) {
            return ok(this.value);
          }
          safeUnwrap() {
            const value = this.value;
            /* eslint-disable-next-line require-yield */
            return function* () {
              return value;
            }();
          }
          _unsafeUnwrap(_) {
            return this.value;
          }
          _unsafeUnwrapErr(config) {
            throw createNeverThrowError('Called `_unsafeUnwrapErr` on an Ok', this, config);
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
              // Tee doesn't care about the error
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
          match(_ok, err) {
            return err(this.error);
          }
          safeUnwrap() {
            const error = this.error;
            return function* () {
              yield err(error);
              throw new Error('Do not use this generator out of `safeTry`');
            }();
          }
          _unsafeUnwrap(config) {
            throw createNeverThrowError('Called `_unsafeUnwrap` on an Err', this, config);
          }
          _unsafeUnwrapErr(_) {
            return this.error;
          }
          *[Symbol.iterator]() {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this;
            // @ts-expect-error -- This is structurally equivalent and safe
            yield self;
            // @ts-expect-error -- This is structurally equivalent and safe
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
              return err(`Invalid betNo:${betNo}`);
            }
          }
          return ok();
        }

        /**
         * Validate that bets total should <= player balance.
         *
         * @param bets: Input bets to be validated.
         * @param balance: Player balance.
         *
         * @returns
         *  - `ok(void)` If bets total is valid.
         *  - `err(ValidateBetsHint)` If total exceeds balance, isLowBalance=true.
         */
        function validateBetsMeetBalance(bets, balance) {
          const total = getBetDetailTotal(bets);
          if (total > balance) {
            return err({
              isLowBalance: true,
              message: 'Insufficient balance'
            });
          }
          return ok();
        }
        /**
         * Validates bets against bet limit configuration.
         * This function checks both minimum and maximum limits.
         *
         * @param rule GameRule object derived from gameType.
         * @param bets Input bets to be validated.
         * @param betLimit Object including table limit and bet type limit. Derived from BetSettings.
         *
         * @returns
         *  - `ok()` If all bets are valid.
         */
        function validateByBetLimit(rule, bets, betLimit) {
          return validateBetsMeetMinimum(rule, bets, betLimit).andThen(() => validateBetsMeetMaximum(rule, bets, betLimit));
        }
        /**
         * Validate that bets should >= per-type min and total should >= table round min.
         *
         * @param game: GameRule object.
         * @param bets: Input bets to be validated.
         * @param betLimit: Object including table limit and bet type limit. Derived from BetSettings.
         *
         * @returns
         *  - `ok()` If all bets are valid.
         *  - `err(ValidateBetsHint)` If any bet is below bet type minimum, isUnderBetTypeMin=true. If bets total is below table round minimum, isUnderTableMin=true.
         */
        function validateBetsMeetMinimum(game, bets, betLimit) {
          return ok().andThen(() => validateBetsMeetTypeMinimum(game, bets, betLimit)).andThen(() => validateBetsMeetTableMinimum(bets, betLimit));
        }
        function validateBetsMeetTypeMinimum(game, bets, betLimit) {
          if (betLimit.betTypesLimit === undefined) {
            return ok();
          }
          const betTypesLimit = betLimit.betTypesLimit;
          for (const [key, amount] of Object.entries(bets)) {
            var _betTypesLimit$betLim;
            const betNo = key;
            const findProfileResult = findBetNumberLimitProfile(game, betNo);
            if (findProfileResult.isErr()) {
              return err({
                message: findProfileResult.error
              });
            }
            const betLimitProfile = findProfileResult.value;
            const min = (_betTypesLimit$betLim = betTypesLimit[betLimitProfile]) === null || _betTypesLimit$betLim === void 0 ? void 0 : _betTypesLimit$betLim.min;
            if (min !== undefined && amount < min) {
              return err({
                isUnderBetTypeMin: true,
                message: `Below bet type min, betNo:${betNo}`
              });
            }
          }
          return ok();
        }
        function validateBetsMeetTableMinimum(bets, betLimit) {
          if (betLimit.tableLimit === undefined) {
            return ok();
          }
          const total = getBetDetailTotal(bets);
          const tableMin = betLimit.tableLimit.min;
          if (tableMin !== undefined && total < tableMin) {
            return err({
              isUnderTableMin: true,
              message: 'Below table round min'
            });
          }
          return ok();
        }
        /**
         * Validate that bets should
         *  - Each betNo <= bet limit max
         *  - Total <= balance
         *  - Total <= table round max
         *
         * @param game: GameRule object.
         * @param bets: Input bets to be validated.
         * @param betLimit: Object including table limit and bet type limit. Derived from BetSettings.
         *
         * @returns
         *  - `ok()` If all bets are valid.
         *  - `err(ValidateBetsHint)` If any betNo exceeds bet limit max, isOverBetTypeMax=true. If total exceeds balance, isLowBalance=true. If total exceeds table round maximum, isOverTableMax=true.
         */
        function validateBetsMeetMaximum(game, bets, betLimit) {
          return ok().andThen(() => validateBetsMeetTypeMaximum(game, bets, betLimit)).andThen(() => validateBetsMeetTableMaximum(bets, betLimit));
        }
        function validateBetsMeetTypeMaximum(game, bets, betLimit) {
          if (betLimit.betTypesLimit === undefined) {
            return ok();
          }
          const betTypesLimit = betLimit.betTypesLimit;
          for (const [key, amount] of Object.entries(bets)) {
            var _betTypesLimit$betLim2;
            const betNo = key;
            const findProfileResult = findBetNumberLimitProfile(game, betNo);
            if (findProfileResult.isErr()) {
              return err({
                message: findProfileResult.error
              });
            }
            const betLimitProfile = findProfileResult.value;
            const max = (_betTypesLimit$betLim2 = betTypesLimit[betLimitProfile]) === null || _betTypesLimit$betLim2 === void 0 ? void 0 : _betTypesLimit$betLim2.max;
            if (max !== undefined && amount > max) {
              return err({
                isOverBetTypeMax: true,
                message: `Exceed bet type max, betNo:${betNo}`
              });
            }
          }
          return ok();
        }
        /**
         * Validate that bets total should <= table round max.
         *
         * @param bets: Input bets to be validated.
         * @param betLimit: Object including table limit and bet type limit. Derived from BetSettings.
         *
         * @returns
         *  - `ok()` If bets total is valid.
         *  - `err(ValidateBetsHint)` If total exceeds table round maximum, isOverTableMax=true.
         */
        function validateBetsMeetTableMaximum(bets, betLimit) {
          if (betLimit.tableLimit === undefined) {
            return ok();
          }
          const total = getBetDetailTotal(bets);
          const tableMax = betLimit.tableLimit.max;
          if (tableMax !== undefined && total > tableMax) {
            return err({
              isOverTableMax: true,
              message: 'Exceed table round max'
            });
          }
          return ok();
        }
        function findBetNumberLimitProfile(game, betNo) {
          const profile = game.extractBetLimitProfileFromNo(betNo);
          if (!profile) {
            return err(`Cannot find bet limit profile, betNo:${betNo}`);
          }
          return ok(profile);
        }
        /**
         * Validate opposite bets to be placed.
         *
         * @param rule: `GameRule` object.
         * @param bets: Input bets to be placed.
         *
         * @returns
         *  - `ok()` If all bets are valid.
         *  - `err(ValidateBetsHint)` If opposite betting is not allowed for this game, `isOppositeBet=true`.
         */
        function validateOppositeBets(rule, bets) {
          if (rule.validateOppositeBets(bets)) {
            return ok();
          }
          return err({
            isOppositeBet: true,
            message: 'Opposite betting is not allowed for this game'
          });
        }

        /**
         * Validates the bets to be placed.
         * If the bet exceeds the allowed limit or available balance,
         * it will be capped to a valid amount and returned.
         *
         * @param input - The input data required for bet validation and capping
         *
         * @returns `CapBetsOutput` object containing the validated (and possibly adjusted) bets and hints for tooltip display
         */
        function capBets(input) {
          const ruleRes = findGameRule(input.gameType);
          if (ruleRes.isErr()) {
            return {
              hints: {
                message: ruleRes.error
              }
            };
          }
          const rule = ruleRes.value;
          return preValidate(input, rule).andThen(() => processCapBets(input, rule)).andThen(({
            resultBets,
            hints
          }) => postValidate(input, rule, resultBets, hints)).match(result => result, hints => ({
            hints
          }));
        }
        /**
         * Validates all input parameters and preconditions.
         * This function chains all validation steps together.
         */
        function preValidate(input, rule) {
          return validateNewBetsNotEmpty(input.newBets).andThen(() => validateInputBetTypes(rule, input.original, input.newBets)).andThen(() => validateBetsMeetBalance(input.original, input.balance)).andThen(() => input.betLimit ? validateBetsMeetMaximum(rule, input.original, input.betLimit) : ok()).andThen(() => validateOriginalBelowBetTypeMaxForNewBets(rule, input)).andThen(() => validateDragModeConstraints(input)).andThen(() => input.dragSourceBetNo ? ok() : validateOriginalBelowBalanceForNonDragNewBets(input.original, input.balance)).andThen(() => input.betLimit && !input.dragSourceBetNo ? validateOriginalBelowTableMaxForNonDragNewBets(input.original, input.betLimit) : ok()).mapErr(errHint => _objectSpread(_objectSpread({}, errHint), {}, {
            message: `Invalid original: ${errHint.message}`
          }));
        }
        /**
         * @param newBets New bets to be validated.
         *
         * @returns
         * - `ok()` If newBets is not empty.
         */
        function validateNewBetsNotEmpty(newBets) {
          if (Object.keys(newBets).length === 0) {
            return err({
              message: 'Invalid newBets, empty'
            });
          }
          return ok();
        }
        /**
         * Validates the bet types of both original and new bets.
         * If any bet type is invalid, it returns an error hint.
         *
         * @param rule GameRule object derived from gameType.
         * @param original Original bet detail before new bets are added.
         * @param newBets New bets to be validated.
         *
         * @returns
         * - `ok()` If both original and new bets have valid bet types.
         * - `err(ValidateBetsHint)` If any bet type is invalid, result.error provides hints.
         */
        function validateInputBetTypes(rule, original, newBets) {
          const toHint = label => errMsg => ({
            message: `Invalid ${label}: ${errMsg}`
          });
          return ok().andThen(() => validateBetTypes(rule, original).mapErr(toHint('original'))).andThen(() => validateBetTypes(rule, newBets).mapErr(toHint('newBets')));
        }
        /**
         * Go through newBets, if all keys already reached max in original state, cancel because there is no room for newBets.
         *
         * @param game  GameRule object derived from gameType.
         * @param input `CapBetsInput`
         *
         * @returns
         *  - `ok()` If input bet is valid.
         *  - `err(ValidateBetsHint)` result.error provides hints isOverBetTypeMax=true if bet is cancelled.
         */
        function validateOriginalBelowBetTypeMaxForNewBets(rule, input) {
          if (input.betLimit === undefined || input.betLimit.betTypesLimit === undefined) {
            return ok();
          }
          const betTypesLimit = input.betLimit.betTypesLimit;
          const original = input.original;
          for (const key of Object.keys(input.newBets)) {
            var _betTypesLimit$profil;
            const betNo = key;
            const profileResult = findBetNumberLimitProfile(rule, betNo);
            if (profileResult.isErr()) {
              return err({
                message: profileResult.error
              });
            }
            const profile = profileResult.value;
            const betLimitMax = (_betTypesLimit$profil = betTypesLimit[profile]) === null || _betTypesLimit$profil === void 0 ? void 0 : _betTypesLimit$profil.max;
            if (betLimitMax === undefined || original[betNo] === undefined || original[betNo] < betLimitMax) {
              return ok();
            }
          }
          /**
           * Fail cases:
           *  - Drag, newBets cancelled if drag destination already reached bet limit
           *  - Non-drag, newBets cancelled if all bet positions already reached bet limit
           */
          return err({
            isOverBetTypeMax: true,
            message: 'Exceed bet type max'
          });
        }
        /**
         * Validates constraints specific to drag mode operations.
         */
        function validateDragModeConstraints(input) {
          return validateOriginalDragSourcePlaced(input).andThen(() => validateNewBetOnlyOneDragDestination(input));
        }
        /**
         * Validates drag input, drag source must be a positive number.
         *
         * @param input `CapBetsInput`
         *
         * @returns
         *  - `ok()` If input bet is valid.
         *  - `err(ValidateBetsHint)` result.error provides hints if bet input is invalid.
         */
        function validateOriginalDragSourcePlaced(input) {
          const dragSourceBetNo = input.dragSourceBetNo;
          if (dragSourceBetNo === undefined) {
            return ok();
          }
          const original = input.original;
          if (original[dragSourceBetNo] == null || original[dragSourceBetNo] <= 0) {
            return err({
              message: `Invalid drag input: source must be positive, source betNo: ${dragSourceBetNo}`
            });
          }
          return ok();
        }
        /**
         * Validates drag input, there must be only single drag destination.
         *
         * @param input `CapBetsInput`
         *
         * @returns
         *  - `ok()` If input bet is valid.
         *  - `err(ValidateBetsHint)` result.error provides hints if bet input is invalid.
         */
        function validateNewBetOnlyOneDragDestination(input) {
          if (input.dragSourceBetNo === undefined) {
            return ok();
          }
          if (Object.keys(input.newBets).length != 1) {
            return err({
              message: 'Invalid drag input newBets'
            });
          }
          return ok();
        }
        function validateOriginalBelowBalanceForNonDragNewBets(original, balance) {
          const originalTotal = getBetDetailTotal(original);
          /**
           * Since non-drag move only increases total, newBets will be cancelled if original total already reached balance.
           * Fail cases: Non-drag
           *  - newBets cancelled if original total already reached balance
           */
          if (originalTotal >= balance) {
            return err({
              isLowBalance: true,
              message: 'Insufficient balance'
            });
          }
          return ok();
        }
        /**
         * Validates non-drag input. If original total already reached max, cancel because there is no room for newBets.
         *
         * @param original Original bet detail before new bets are added.
         * @param balance Player's current balance.
         * @param betLimit Object including table limit and bet type limit. Derived from BetSettings.
         *
         * @returns
         *  - `ok()` If input bet is valid.
         *  - `err(ValidateBetsHint)` result.error provides hints if bet is cancelled.
         */
        function validateOriginalBelowTableMaxForNonDragNewBets(original, betLimit) {
          var _betLimit$tableLimit;
          const tableMax = (_betLimit$tableLimit = betLimit.tableLimit) === null || _betLimit$tableLimit === void 0 ? void 0 : _betLimit$tableLimit.max;
          const originalTotal = getBetDetailTotal(original);
          /**
           * Since non-drag move only increases total, newBets will be cancelled if original total already reached maximum.
           * Fail cases: Non-drag
           *  - newBets cancelled if original total already reached table limit
           */
          if (tableMax !== undefined && originalTotal >= tableMax) {
            return err({
              isOverTableMax: true,
              message: 'Exceed table round max'
            });
          }
          return ok();
        }
        /**
         * Processes the capping logic after validation passes.
         * This function chains all capping operations together.
         */
        function processCapBets(input, rule) {
          const mergedBets = mergeBets(input.original, input.newBets, input.dragSourceBetNo);
          return (input.betLimit ? capByBetLimitAndReportHints(rule, mergedBets, input.betLimit, input.dragSourceBetNo) : ok({
            resultBets: mergedBets,
            hints: {}
          })).andThen(({
            resultBets,
            hints
          }) => capByUserBalanceAndReportHints(input.original, resultBets, input.balance).map(({
            resultBets: balanceResultBets,
            hints: balanceHints
          }) => ({
            resultBets: balanceResultBets,
            hints: _objectSpread(_objectSpread({}, hints), balanceHints)
          }))).andThen(({
            resultBets,
            hints
          }) => input.betLimit ? capByTableMaxAndReportHints(input.original, resultBets, input.betLimit).map(({
            resultBets: tableResultBets,
            hints: tableHints
          }) => ({
            resultBets: tableResultBets,
            hints: _objectSpread(_objectSpread({}, hints), tableHints)
          })) : ok({
            resultBets,
            hints
          }));
        }
        function mergeBets(original, newBets, dragSourceBetNo) {
          const joinedBets = join(original, newBets);
          // In drag case, delete source
          if (dragSourceBetNo !== undefined) {
            delete joinedBets[dragSourceBetNo];
          }
          return joinedBets;
        }
        /**
         * Go through input bets, if amount exceeds bet limit, cap and report in hints.
         *
         * @param rule  GameRule object derived from gameType.
         * @param bets  bets to be capped.
         * @param betLimit Object including table limit and bet type limit. Derived from BetSettings.
         * @param dragSourceBetNo Optional source bet number when `bets` originate from a drag action.
         *
         * @returns
         *  - `ok(ValidatedBetOutput)` result.value include capped bets and hints if isOverBetTypeMax occurred.
         *  - `err(ValidateBetsHint)` result.error is error message only if failed to access bet limit profile.
         */
        function capByBetLimitAndReportHints(rule, bets, betLimit, dragSourceBetNo) {
          const resultBets = _objectSpread({}, bets);
          if (betLimit.betTypesLimit === undefined) {
            return ok({
              resultBets,
              hints: {}
            });
          }
          const betTypesLimit = betLimit.betTypesLimit;
          let exceedTotal = new Decimal$1(0);
          // Go through joinedBets, cap if upper limit reached.
          for (const [key, amount] of Object.entries(bets)) {
            var _betTypesLimit$profil2;
            const betNo = key;
            const profileResult = findBetNumberLimitProfile(rule, betNo);
            if (profileResult.isErr()) {
              return err({
                message: profileResult.error
              });
            }
            const profile = profileResult.value;
            const betLimitMax = (_betTypesLimit$profil2 = betTypesLimit[profile]) === null || _betTypesLimit$profil2 === void 0 ? void 0 : _betTypesLimit$profil2.max;
            if (betLimitMax !== undefined && amount > betLimitMax) {
              exceedTotal = exceedTotal.add(amount).sub(betLimitMax);
              resultBets[betNo] = betLimitMax;
            }
          }
          // In drag case, return exceed amount back to source
          if (dragSourceBetNo !== undefined && exceedTotal.greaterThan(0)) {
            resultBets[dragSourceBetNo] = exceedTotal.toNumber();
          }
          const hints = exceedTotal.greaterThan(0) ? {
            isOverBetTypeMax: true,
            message: 'Exceed bet type max'
          } : {};
          return ok({
            resultBets,
            hints
          });
        }
        /**
         * Caps bets by user balance and reports hints if exceeded.
         *
         * @param original original bet state before the new bets are added
         * @param bets bets to be capped
         * @param balance Player's current balance used to validate sufficient funds for the bet or cap to
         *
         * @returns
         *   - `ok(ValidatedBetOutput)` result.value include capped bets and hints if isLowBalance occurred.
         *   - `err(ValidateBetsHint)` result.error is error message only if failed to access bet limit profile.
         */
        function capByUserBalanceAndReportHints(original, bets, balance) {
          const resultBets = _objectSpread({}, bets);
          const validateBetsMeetBalanceRes = validateBetsMeetBalance(bets, balance);
          if (validateBetsMeetBalanceRes.isOk()) {
            return ok({
              resultBets,
              hints: {}
            });
          }
          const hints = {
            isLowBalance: true,
            message: 'Insufficient balance'
          };
          const capBetNo = findEffectiveSingleBetNo(original, bets);
          if (capBetNo === undefined) {
            return err(_objectSpread({}, hints));
          }
          const exceedAmount = new Decimal$1(getBetDetailTotal(bets)).sub(balance);
          resultBets[capBetNo] = new Decimal$1(resultBets[capBetNo]).sub(exceedAmount).toNumber();
          return ok({
            resultBets,
            hints
          });
        }
        /**
         * Caps bets by table maximum limit and reports hints if exceeded.
         *
         * @param original original bet state before the new bets are added
         * @param bets bets to be capped
         * @param betLimit Object including table limit and bet type limit. Derived from BetSettings.
         *
         * @returns
         *   - `ok(ValidatedBetOutput)` result.value include capped bets and hints if isOverTableMax occurred.
         *   - `err(ValidateBetsHint)` result.error is error message only if failed to access bet limit profile.
         */
        function capByTableMaxAndReportHints(original, bets, betLimit) {
          const resultBets = _objectSpread({}, bets);
          const validateBetsMeetTableMaximumRes = validateBetsMeetTableMaximum(bets, betLimit);
          if (validateBetsMeetTableMaximumRes.isOk() || betLimit.tableLimit === undefined || betLimit.tableLimit.max === undefined) {
            return ok({
              resultBets,
              hints: {}
            });
          }
          const hints = {
            isOverTableMax: true,
            message: 'Exceed table round max'
          };
          const capBetNo = findEffectiveSingleBetNo(original, bets);
          if (capBetNo === undefined) {
            return err(_objectSpread({}, hints));
          }
          const exceedAmount = new Decimal$1(getBetDetailTotal(bets)).sub(betLimit.tableLimit.max);
          resultBets[capBetNo] = new Decimal$1(resultBets[capBetNo]).sub(exceedAmount).toNumber();
          return ok({
            resultBets,
            hints
          });
        }
        /**
         * Finds a single effective bet number from the bets.
         * An effective bet is one that has a different amount than the original bet.
         * If there is exactly one effective bet, it returns that bet number.
         * If there are multiple or none, it returns undefined.
         *
         * @param original Original bets before new bets are added
         * @param bets New bets to be checked against the original
         *
         * @returns The effective bet number if exactly one is found, otherwise undefined
         */
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
          return undefined;
        }
        /**
         * Post-validation step to ensure bets comply with bet limit configuration.
         * This function can be called separately for post-validation processes.
         *
         * @param input CapBetsInput object containing bet limit and balance.
         * @param rule GameRule object derived from gameType.
         * @param cappedBets Resulting bets after initial capping and validation.
         * @param hints Optional hints for frontend feedback.
         *
         * @returns
         *  - `ok(CapBetsOutput)` If all bets are valid after post-validation.
         */
        function postValidate(input, rule, cappedBets, hints) {
          return validateBetsMeetBalance(cappedBets, input.balance).andThen(() => input.betLimit ? validateByBetLimit(rule, cappedBets, input.betLimit) : ok()).andThen(() => input.betOptions.forbidOppositeBets ? validateOppositeBets(rule, cappedBets) : ok()).map(() => ({
            resultBets: cappedBets,
            hints: hints
          }));
        }
        var GameType;
        exports("G", GameType);
        (function (GameType) {
          GameType["UNKNOWN"] = "unknown";
          GameType["ALL"] = "all";
          GameType["ROULETTE"] = "roulette";
          GameType["AUTO_ROULETTE"] = "auto-roulette";
          GameType["ROULETTE_MULTIPLIER"] = "roulette-multiplier";
          GameType["SIC_BO"] = "sic-bo";
          GameType["AUTO_SIC_BO"] = "auto-sic-bo";
          GameType["BACCARAT"] = "baccarat";
        })(GameType || exports("G", GameType = {}));
        var GameMode;
        (function (GameMode) {
          GameMode["DEMO"] = "demo";
          GameMode["REAL"] = "real";
        })(GameMode || (GameMode = {}));

        /**
         * Actions to trigger after player is kicked from WS.
         */
        var AfterKicked;
        exports("A", AfterKicked);
        (function (AfterKicked) {
          AfterKicked["DISCONNECT"] = "disconnect";
          AfterKicked["LOBBY"] = "lobby";
        })(AfterKicked || exports("A", AfterKicked = {}));
        /**
         * Kick codes for player disconnection events.
         */
        var KickCode;
        (function (KickCode) {
          KickCode[KickCode["SESSION_EXPIRED"] = 13040] = "SESSION_EXPIRED";
          KickCode[KickCode["SESSION_DUPLICATE"] = 13041] = "SESSION_DUPLICATE";
          KickCode[KickCode["SERVICE_UNAVAILABLE"] = 13042] = "SERVICE_UNAVAILABLE";
        })(KickCode || (KickCode = {}));
        var TableRoundStatus;
        exports("T", TableRoundStatus);
        (function (TableRoundStatus) {
          TableRoundStatus["UNKNOWN"] = "unknown";
          TableRoundStatus["OPENED"] = "opened";
          TableRoundStatus["BET_STOPPED"] = "bet-stopped";
          TableRoundStatus["BET_TXN_STOPPED"] = "bet-txn-stopped";
          TableRoundStatus["FINISHED"] = "finished";
          TableRoundStatus["CANCELLED"] = "cancelled";
        })(TableRoundStatus || exports("T", TableRoundStatus = {}));
        var TableVisibility;
        (function (TableVisibility) {
          TableVisibility["DISABLED"] = "disabled";
          TableVisibility["HIDDEN"] = "hidden";
          TableVisibility["VISIBLE"] = "visible";
        })(TableVisibility || (TableVisibility = {}));
        class PayoutInvalidInputError extends Error {
          constructor(message) {
            super(message);
            _defineProperty(this, "code", void 0);
            this.name = 'PayoutInvalidInputError';
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
            case GameType.ROULETTE:
              {
                return new RouletteGame();
              }
            case GameType.ROULETTE_MULTIPLIER:
              {
                return new RouletteMultiplierGame();
              }
            case GameType.AUTO_SIC_BO:
            case GameType.SIC_BO:
              {
                return new SicBoGame();
              }
            case GameType.BACCARAT:
              {
                return new BaccaratGame();
              }
            default:
              {
                return null;
              }
          }
        }
        function findGameRule(gameType) {
          const game = getGameRuleByType(gameType);
          if (!game) {
            return err(`Invalid gameType:${gameType}`);
          }
          return ok(game);
        }
        class JurisdictionPayloadHelper {
          constructor(payload = {}) {
            _defineProperty(this, "payload", void 0);
            this.payload = payload;
          }
          getAutoplayAllowed() {
            return this.payload['AP'];
          }
          getFullscreenAllowed() {
            return this.payload['FS'];
          }
          getShowLobby() {
            return this.payload['SLOB'];
          }
          getShowActiveSessionCounter() {
            return this.payload['SASC'];
          }
          /**
           * @deprecated: Use `getBetOptions` instead.
           */
          getAllowOppositeBetting() {
            return this.payload['AOB'];
          }
          getShowSupportChat() {
            return this.payload['SSC'];
          }
          getBetOptions() {
            return {
              forbidOppositeBets: this.payload['AOB'] == undefined ? true : !this.payload['AOB']
            };
          }
        }
        exports("J", JurisdictionPayloadHelper);

        /**
         * @param result: Game result.
         * @param bets: User bets.
         * @returns: Winning user bets and payout amounts.
         */
        function getPayout(gameType, result, bets, winMax, winningContext) {
          const game = getGameRuleByType(gameType);
          if (!game) {
            throw new PayoutInvalidInputError('Invalid game type');
          }
          const userBetPayouts = {};
          const resultWinningProfile = game.getWinningProfile(result, winningContext);
          const resultWinningBetTypes = new Set(resultWinningProfile.keys());
          let totalWins = new Decimal$1(0);
          let totalBets = new Decimal$1(0);
          for (const key in bets) {
            const betNo = key;
            if (!game.validateBetType(betNo)) {
              throw new PayoutInvalidInputError('Invalid bet type');
            }
            const userBetAmount = bets[betNo];
            const payoutMultiplier = resultWinningProfile.get(betNo);
            if (resultWinningBetTypes.has(betNo) && userBetAmount && payoutMultiplier !== undefined) {
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
        (function (RouletteBetType) {
          RouletteBetType["STRAIGHT_UP"] = "straight";
          RouletteBetType["COLUMN"] = "column";
          RouletteBetType["DOZEN"] = "dozen";
          RouletteBetType["EVEN"] = "even";
          RouletteBetType["ODD"] = "odd";
          RouletteBetType["LOW"] = "low";
          RouletteBetType["HIGH"] = "high";
          RouletteBetType["RED"] = "red";
          RouletteBetType["BLACK"] = "black";
          RouletteBetType["STREET"] = "street";
          RouletteBetType["SPLIT"] = "split";
          RouletteBetType["CORNER"] = "corner";
          RouletteBetType["LINE"] = "line";
        })(RouletteBetType || (RouletteBetType = {}));
        function parseRouletteBetType(input) {
          const enumValues = Object.values(RouletteBetType);
          if (enumValues.includes(input)) {
            return input;
          }
          return undefined;
        }
        var RouletteBetNo;
        exports("a", RouletteBetNo);
        (function (RouletteBetNo) {
          RouletteBetNo["STRAIGHT_UP_0"] = "straight-0";
          RouletteBetNo["STRAIGHT_UP_1"] = "straight-1";
          RouletteBetNo["STRAIGHT_UP_2"] = "straight-2";
          RouletteBetNo["STRAIGHT_UP_3"] = "straight-3";
          RouletteBetNo["STRAIGHT_UP_4"] = "straight-4";
          RouletteBetNo["STRAIGHT_UP_5"] = "straight-5";
          RouletteBetNo["STRAIGHT_UP_6"] = "straight-6";
          RouletteBetNo["STRAIGHT_UP_7"] = "straight-7";
          RouletteBetNo["STRAIGHT_UP_8"] = "straight-8";
          RouletteBetNo["STRAIGHT_UP_9"] = "straight-9";
          RouletteBetNo["STRAIGHT_UP_10"] = "straight-10";
          RouletteBetNo["STRAIGHT_UP_11"] = "straight-11";
          RouletteBetNo["STRAIGHT_UP_12"] = "straight-12";
          RouletteBetNo["STRAIGHT_UP_13"] = "straight-13";
          RouletteBetNo["STRAIGHT_UP_14"] = "straight-14";
          RouletteBetNo["STRAIGHT_UP_15"] = "straight-15";
          RouletteBetNo["STRAIGHT_UP_16"] = "straight-16";
          RouletteBetNo["STRAIGHT_UP_17"] = "straight-17";
          RouletteBetNo["STRAIGHT_UP_18"] = "straight-18";
          RouletteBetNo["STRAIGHT_UP_19"] = "straight-19";
          RouletteBetNo["STRAIGHT_UP_20"] = "straight-20";
          RouletteBetNo["STRAIGHT_UP_21"] = "straight-21";
          RouletteBetNo["STRAIGHT_UP_22"] = "straight-22";
          RouletteBetNo["STRAIGHT_UP_23"] = "straight-23";
          RouletteBetNo["STRAIGHT_UP_24"] = "straight-24";
          RouletteBetNo["STRAIGHT_UP_25"] = "straight-25";
          RouletteBetNo["STRAIGHT_UP_26"] = "straight-26";
          RouletteBetNo["STRAIGHT_UP_27"] = "straight-27";
          RouletteBetNo["STRAIGHT_UP_28"] = "straight-28";
          RouletteBetNo["STRAIGHT_UP_29"] = "straight-29";
          RouletteBetNo["STRAIGHT_UP_30"] = "straight-30";
          RouletteBetNo["STRAIGHT_UP_31"] = "straight-31";
          RouletteBetNo["STRAIGHT_UP_32"] = "straight-32";
          RouletteBetNo["STRAIGHT_UP_33"] = "straight-33";
          RouletteBetNo["STRAIGHT_UP_34"] = "straight-34";
          RouletteBetNo["STRAIGHT_UP_35"] = "straight-35";
          RouletteBetNo["STRAIGHT_UP_36"] = "straight-36";
          RouletteBetNo["COLUMN_1"] = "column-1";
          RouletteBetNo["COLUMN_2"] = "column-2";
          RouletteBetNo["COLUMN_3"] = "column-3";
          RouletteBetNo["DOZEN_1"] = "dozen-1";
          RouletteBetNo["DOZEN_13"] = "dozen-13";
          RouletteBetNo["DOZEN_25"] = "dozen-25";
          RouletteBetNo["ODD"] = "odd";
          RouletteBetNo["EVEN"] = "even";
          RouletteBetNo["LOW"] = "low";
          RouletteBetNo["HIGH"] = "high";
          RouletteBetNo["RED"] = "red";
          RouletteBetNo["BLACK"] = "black";
          RouletteBetNo["LINE_1"] = "line-1";
          RouletteBetNo["LINE_4"] = "line-4";
          RouletteBetNo["LINE_7"] = "line-7";
          RouletteBetNo["LINE_10"] = "line-10";
          RouletteBetNo["LINE_13"] = "line-13";
          RouletteBetNo["LINE_16"] = "line-16";
          RouletteBetNo["LINE_19"] = "line-19";
          RouletteBetNo["LINE_22"] = "line-22";
          RouletteBetNo["LINE_25"] = "line-25";
          RouletteBetNo["LINE_28"] = "line-28";
          RouletteBetNo["LINE_31"] = "line-31";
          RouletteBetNo["STREET_0_1_2"] = "street-0_1_2";
          RouletteBetNo["STREET_0_2_3"] = "street-0_2_3";
          RouletteBetNo["STREET_1_2_3"] = "street-1_2_3";
          RouletteBetNo["STREET_4_5_6"] = "street-4_5_6";
          RouletteBetNo["STREET_7_8_9"] = "street-7_8_9";
          RouletteBetNo["STREET_10_11_12"] = "street-10_11_12";
          RouletteBetNo["STREET_13_14_15"] = "street-13_14_15";
          RouletteBetNo["STREET_16_17_18"] = "street-16_17_18";
          RouletteBetNo["STREET_19_20_21"] = "street-19_20_21";
          RouletteBetNo["STREET_22_23_24"] = "street-22_23_24";
          RouletteBetNo["STREET_25_26_27"] = "street-25_26_27";
          RouletteBetNo["STREET_28_29_30"] = "street-28_29_30";
          RouletteBetNo["STREET_31_32_33"] = "street-31_32_33";
          RouletteBetNo["STREET_34_35_36"] = "street-34_35_36";
          RouletteBetNo["SPLIT_0_1"] = "split-0_1";
          RouletteBetNo["SPLIT_0_2"] = "split-0_2";
          RouletteBetNo["SPLIT_0_3"] = "split-0_3";
          RouletteBetNo["SPLIT_1_2"] = "split-1_2";
          RouletteBetNo["SPLIT_1_4"] = "split-1_4";
          RouletteBetNo["SPLIT_2_3"] = "split-2_3";
          RouletteBetNo["SPLIT_2_5"] = "split-2_5";
          RouletteBetNo["SPLIT_3_6"] = "split-3_6";
          RouletteBetNo["SPLIT_4_5"] = "split-4_5";
          RouletteBetNo["SPLIT_4_7"] = "split-4_7";
          RouletteBetNo["SPLIT_5_6"] = "split-5_6";
          RouletteBetNo["SPLIT_5_8"] = "split-5_8";
          RouletteBetNo["SPLIT_6_9"] = "split-6_9";
          RouletteBetNo["SPLIT_7_10"] = "split-7_10";
          RouletteBetNo["SPLIT_7_8"] = "split-7_8";
          RouletteBetNo["SPLIT_8_11"] = "split-8_11";
          RouletteBetNo["SPLIT_8_9"] = "split-8_9";
          RouletteBetNo["SPLIT_9_12"] = "split-9_12";
          RouletteBetNo["SPLIT_10_11"] = "split-10_11";
          RouletteBetNo["SPLIT_10_13"] = "split-10_13";
          RouletteBetNo["SPLIT_11_12"] = "split-11_12";
          RouletteBetNo["SPLIT_11_14"] = "split-11_14";
          RouletteBetNo["SPLIT_12_15"] = "split-12_15";
          RouletteBetNo["SPLIT_13_14"] = "split-13_14";
          RouletteBetNo["SPLIT_13_16"] = "split-13_16";
          RouletteBetNo["SPLIT_14_15"] = "split-14_15";
          RouletteBetNo["SPLIT_14_17"] = "split-14_17";
          RouletteBetNo["SPLIT_15_18"] = "split-15_18";
          RouletteBetNo["SPLIT_16_17"] = "split-16_17";
          RouletteBetNo["SPLIT_16_19"] = "split-16_19";
          RouletteBetNo["SPLIT_17_18"] = "split-17_18";
          RouletteBetNo["SPLIT_17_20"] = "split-17_20";
          RouletteBetNo["SPLIT_18_21"] = "split-18_21";
          RouletteBetNo["SPLIT_19_20"] = "split-19_20";
          RouletteBetNo["SPLIT_19_22"] = "split-19_22";
          RouletteBetNo["SPLIT_20_21"] = "split-20_21";
          RouletteBetNo["SPLIT_20_23"] = "split-20_23";
          RouletteBetNo["SPLIT_21_24"] = "split-21_24";
          RouletteBetNo["SPLIT_22_23"] = "split-22_23";
          RouletteBetNo["SPLIT_22_25"] = "split-22_25";
          RouletteBetNo["SPLIT_23_24"] = "split-23_24";
          RouletteBetNo["SPLIT_23_26"] = "split-23_26";
          RouletteBetNo["SPLIT_24_27"] = "split-24_27";
          RouletteBetNo["SPLIT_25_26"] = "split-25_26";
          RouletteBetNo["SPLIT_25_28"] = "split-25_28";
          RouletteBetNo["SPLIT_26_27"] = "split-26_27";
          RouletteBetNo["SPLIT_26_29"] = "split-26_29";
          RouletteBetNo["SPLIT_27_30"] = "split-27_30";
          RouletteBetNo["SPLIT_28_29"] = "split-28_29";
          RouletteBetNo["SPLIT_28_31"] = "split-28_31";
          RouletteBetNo["SPLIT_29_30"] = "split-29_30";
          RouletteBetNo["SPLIT_29_32"] = "split-29_32";
          RouletteBetNo["SPLIT_30_33"] = "split-30_33";
          RouletteBetNo["SPLIT_31_32"] = "split-31_32";
          RouletteBetNo["SPLIT_31_34"] = "split-31_34";
          RouletteBetNo["SPLIT_32_33"] = "split-32_33";
          RouletteBetNo["SPLIT_32_35"] = "split-32_35";
          RouletteBetNo["SPLIT_33_36"] = "split-33_36";
          RouletteBetNo["SPLIT_34_35"] = "split-34_35";
          RouletteBetNo["SPLIT_35_36"] = "split-35_36";
          RouletteBetNo["CORNER_0_1_2_3"] = "corner-0_1_2_3";
          RouletteBetNo["CORNER_1_2_4_5"] = "corner-1_2_4_5";
          RouletteBetNo["CORNER_2_3_5_6"] = "corner-2_3_5_6";
          RouletteBetNo["CORNER_4_5_7_8"] = "corner-4_5_7_8";
          RouletteBetNo["CORNER_5_6_8_9"] = "corner-5_6_8_9";
          RouletteBetNo["CORNER_7_8_10_11"] = "corner-7_8_10_11";
          RouletteBetNo["CORNER_8_9_11_12"] = "corner-8_9_11_12";
          RouletteBetNo["CORNER_10_11_13_14"] = "corner-10_11_13_14";
          RouletteBetNo["CORNER_11_12_14_15"] = "corner-11_12_14_15";
          RouletteBetNo["CORNER_13_14_16_17"] = "corner-13_14_16_17";
          RouletteBetNo["CORNER_14_15_17_18"] = "corner-14_15_17_18";
          RouletteBetNo["CORNER_16_17_19_20"] = "corner-16_17_19_20";
          RouletteBetNo["CORNER_17_18_20_21"] = "corner-17_18_20_21";
          RouletteBetNo["CORNER_19_20_22_23"] = "corner-19_20_22_23";
          RouletteBetNo["CORNER_20_21_23_24"] = "corner-20_21_23_24";
          RouletteBetNo["CORNER_22_23_25_26"] = "corner-22_23_25_26";
          RouletteBetNo["CORNER_23_24_26_27"] = "corner-23_24_26_27";
          RouletteBetNo["CORNER_25_26_28_29"] = "corner-25_26_28_29";
          RouletteBetNo["CORNER_26_27_29_30"] = "corner-26_27_29_30";
          RouletteBetNo["CORNER_28_29_31_32"] = "corner-28_29_31_32";
          RouletteBetNo["CORNER_29_30_32_33"] = "corner-29_30_32_33";
          RouletteBetNo["CORNER_31_32_34_35"] = "corner-31_32_34_35";
          RouletteBetNo["CORNER_32_33_35_36"] = "corner-32_33_35_36";
        })(RouletteBetNo || exports("a", RouletteBetNo = {}));
        var RouletteCallBet;
        exports("R", RouletteCallBet);
        (function (RouletteCallBet) {
          RouletteCallBet["TIER"] = "TIER";
          RouletteCallBet["ORPH"] = "ORPH";
          RouletteCallBet["VOISINS"] = "VOISINS";
          RouletteCallBet["ZERO"] = "ZERO";
        })(RouletteCallBet || exports("R", RouletteCallBet = {}));
        function parseRouletteBetNo(input) {
          const enumValues = Object.values(RouletteBetNo);
          if (enumValues.includes(input)) {
            return input;
          }
          return undefined;
        }
        function extractRouletteBetTypeFromNo(input) {
          const typePart = input.split('-')[0];
          return parseRouletteBetType(typePart);
        }
        var RouletteBetLimitProfile;
        exports("d", RouletteBetLimitProfile);
        (function (RouletteBetLimitProfile) {
          RouletteBetLimitProfile["STRAIGHT_UP"] = "ro.straight";
          RouletteBetLimitProfile["COLUMN"] = "ro.column";
          RouletteBetLimitProfile["DOZEN"] = "ro.dozen";
          RouletteBetLimitProfile["STREET"] = "ro.street";
          RouletteBetLimitProfile["SPLIT"] = "ro.split";
          RouletteBetLimitProfile["CORNER"] = "ro.corner";
          RouletteBetLimitProfile["LINE"] = "ro.line";
          RouletteBetLimitProfile["RED_BLACK"] = "ro.redBlack";
          RouletteBetLimitProfile["ODD_EVEN"] = "ro.oddEven";
          RouletteBetLimitProfile["LOW_HIGH"] = "ro.lowHigh";
        })(RouletteBetLimitProfile || exports("d", RouletteBetLimitProfile = {}));
        const mutableBetMap = new Map();
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_0, ['0']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_1, ['1']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_2, ['2']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_3, ['3']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_4, ['4']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_5, ['5']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_6, ['6']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_7, ['7']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_8, ['8']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_9, ['9']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_10, ['10']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_11, ['11']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_12, ['12']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_13, ['13']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_14, ['14']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_15, ['15']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_16, ['16']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_17, ['17']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_18, ['18']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_19, ['19']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_20, ['20']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_21, ['21']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_22, ['22']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_23, ['23']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_24, ['24']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_25, ['25']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_26, ['26']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_27, ['27']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_28, ['28']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_29, ['29']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_30, ['30']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_31, ['31']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_32, ['32']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_33, ['33']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_34, ['34']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_35, ['35']);
        mutableBetMap.set(RouletteBetNo.STRAIGHT_UP_36, ['36']);
        mutableBetMap.set(RouletteBetNo.COLUMN_1, ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34']);
        mutableBetMap.set(RouletteBetNo.COLUMN_2, ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35']);
        mutableBetMap.set(RouletteBetNo.COLUMN_3, ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36']);
        mutableBetMap.set(RouletteBetNo.DOZEN_1, ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
        mutableBetMap.set(RouletteBetNo.DOZEN_13, ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']);
        mutableBetMap.set(RouletteBetNo.DOZEN_25, ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']);
        mutableBetMap.set(RouletteBetNo.LINE_1, ['1', '2', '3', '4', '5', '6']);
        mutableBetMap.set(RouletteBetNo.LINE_4, ['4', '5', '6', '7', '8', '9']);
        mutableBetMap.set(RouletteBetNo.LINE_7, ['7', '8', '9', '10', '11', '12']);
        mutableBetMap.set(RouletteBetNo.LINE_10, ['10', '11', '12', '13', '14', '15']);
        mutableBetMap.set(RouletteBetNo.LINE_13, ['13', '14', '15', '16', '17', '18']);
        mutableBetMap.set(RouletteBetNo.LINE_16, ['16', '17', '18', '19', '20', '21']);
        mutableBetMap.set(RouletteBetNo.LINE_19, ['19', '20', '21', '22', '23', '24']);
        mutableBetMap.set(RouletteBetNo.LINE_22, ['22', '23', '24', '25', '26', '27']);
        mutableBetMap.set(RouletteBetNo.LINE_25, ['25', '26', '27', '28', '29', '30']);
        mutableBetMap.set(RouletteBetNo.LINE_28, ['28', '29', '30', '31', '32', '33']);
        mutableBetMap.set(RouletteBetNo.LINE_31, ['31', '32', '33', '34', '35', '36']);
        mutableBetMap.set(RouletteBetNo.STREET_0_1_2, ['0', '1', '2']);
        mutableBetMap.set(RouletteBetNo.STREET_0_2_3, ['0', '2', '3']);
        mutableBetMap.set(RouletteBetNo.STREET_1_2_3, ['1', '2', '3']);
        mutableBetMap.set(RouletteBetNo.STREET_4_5_6, ['4', '5', '6']);
        mutableBetMap.set(RouletteBetNo.STREET_7_8_9, ['7', '8', '9']);
        mutableBetMap.set(RouletteBetNo.STREET_10_11_12, ['10', '11', '12']);
        mutableBetMap.set(RouletteBetNo.STREET_13_14_15, ['13', '14', '15']);
        mutableBetMap.set(RouletteBetNo.STREET_16_17_18, ['16', '17', '18']);
        mutableBetMap.set(RouletteBetNo.STREET_19_20_21, ['19', '20', '21']);
        mutableBetMap.set(RouletteBetNo.STREET_22_23_24, ['22', '23', '24']);
        mutableBetMap.set(RouletteBetNo.STREET_25_26_27, ['25', '26', '27']);
        mutableBetMap.set(RouletteBetNo.STREET_28_29_30, ['28', '29', '30']);
        mutableBetMap.set(RouletteBetNo.STREET_31_32_33, ['31', '32', '33']);
        mutableBetMap.set(RouletteBetNo.STREET_34_35_36, ['34', '35', '36']);
        mutableBetMap.set(RouletteBetNo.SPLIT_0_1, ['0', '1']);
        mutableBetMap.set(RouletteBetNo.SPLIT_0_2, ['0', '2']);
        mutableBetMap.set(RouletteBetNo.SPLIT_0_3, ['0', '3']);
        mutableBetMap.set(RouletteBetNo.SPLIT_1_2, ['1', '2']);
        mutableBetMap.set(RouletteBetNo.SPLIT_1_4, ['1', '4']);
        mutableBetMap.set(RouletteBetNo.SPLIT_2_3, ['2', '3']);
        mutableBetMap.set(RouletteBetNo.SPLIT_2_5, ['2', '5']);
        mutableBetMap.set(RouletteBetNo.SPLIT_3_6, ['3', '6']);
        mutableBetMap.set(RouletteBetNo.SPLIT_4_5, ['4', '5']);
        mutableBetMap.set(RouletteBetNo.SPLIT_4_7, ['4', '7']);
        mutableBetMap.set(RouletteBetNo.SPLIT_5_6, ['5', '6']);
        mutableBetMap.set(RouletteBetNo.SPLIT_5_8, ['5', '8']);
        mutableBetMap.set(RouletteBetNo.SPLIT_6_9, ['6', '9']);
        mutableBetMap.set(RouletteBetNo.SPLIT_7_10, ['7', '10']);
        mutableBetMap.set(RouletteBetNo.SPLIT_7_8, ['7', '8']);
        mutableBetMap.set(RouletteBetNo.SPLIT_8_11, ['8', '11']);
        mutableBetMap.set(RouletteBetNo.SPLIT_8_9, ['8', '9']);
        mutableBetMap.set(RouletteBetNo.SPLIT_9_12, ['9', '12']);
        mutableBetMap.set(RouletteBetNo.SPLIT_10_11, ['10', '11']);
        mutableBetMap.set(RouletteBetNo.SPLIT_10_13, ['10', '13']);
        mutableBetMap.set(RouletteBetNo.SPLIT_11_12, ['11', '12']);
        mutableBetMap.set(RouletteBetNo.SPLIT_11_14, ['11', '14']);
        mutableBetMap.set(RouletteBetNo.SPLIT_12_15, ['12', '15']);
        mutableBetMap.set(RouletteBetNo.SPLIT_13_14, ['13', '14']);
        mutableBetMap.set(RouletteBetNo.SPLIT_13_16, ['13', '16']);
        mutableBetMap.set(RouletteBetNo.SPLIT_14_15, ['14', '15']);
        mutableBetMap.set(RouletteBetNo.SPLIT_14_17, ['14', '17']);
        mutableBetMap.set(RouletteBetNo.SPLIT_15_18, ['15', '18']);
        mutableBetMap.set(RouletteBetNo.SPLIT_16_17, ['16', '17']);
        mutableBetMap.set(RouletteBetNo.SPLIT_16_19, ['16', '19']);
        mutableBetMap.set(RouletteBetNo.SPLIT_17_18, ['17', '18']);
        mutableBetMap.set(RouletteBetNo.SPLIT_17_20, ['17', '20']);
        mutableBetMap.set(RouletteBetNo.SPLIT_18_21, ['18', '21']);
        mutableBetMap.set(RouletteBetNo.SPLIT_19_20, ['19', '20']);
        mutableBetMap.set(RouletteBetNo.SPLIT_19_22, ['19', '22']);
        mutableBetMap.set(RouletteBetNo.SPLIT_20_21, ['20', '21']);
        mutableBetMap.set(RouletteBetNo.SPLIT_20_23, ['20', '23']);
        mutableBetMap.set(RouletteBetNo.SPLIT_21_24, ['21', '24']);
        mutableBetMap.set(RouletteBetNo.SPLIT_22_23, ['22', '23']);
        mutableBetMap.set(RouletteBetNo.SPLIT_22_25, ['22', '25']);
        mutableBetMap.set(RouletteBetNo.SPLIT_23_24, ['23', '24']);
        mutableBetMap.set(RouletteBetNo.SPLIT_23_26, ['23', '26']);
        mutableBetMap.set(RouletteBetNo.SPLIT_24_27, ['24', '27']);
        mutableBetMap.set(RouletteBetNo.SPLIT_25_26, ['25', '26']);
        mutableBetMap.set(RouletteBetNo.SPLIT_25_28, ['25', '28']);
        mutableBetMap.set(RouletteBetNo.SPLIT_26_27, ['26', '27']);
        mutableBetMap.set(RouletteBetNo.SPLIT_26_29, ['26', '29']);
        mutableBetMap.set(RouletteBetNo.SPLIT_27_30, ['27', '30']);
        mutableBetMap.set(RouletteBetNo.SPLIT_28_29, ['28', '29']);
        mutableBetMap.set(RouletteBetNo.SPLIT_28_31, ['28', '31']);
        mutableBetMap.set(RouletteBetNo.SPLIT_29_30, ['29', '30']);
        mutableBetMap.set(RouletteBetNo.SPLIT_29_32, ['29', '32']);
        mutableBetMap.set(RouletteBetNo.SPLIT_30_33, ['30', '33']);
        mutableBetMap.set(RouletteBetNo.SPLIT_31_32, ['31', '32']);
        mutableBetMap.set(RouletteBetNo.SPLIT_31_34, ['31', '34']);
        mutableBetMap.set(RouletteBetNo.SPLIT_32_33, ['32', '33']);
        mutableBetMap.set(RouletteBetNo.SPLIT_32_35, ['32', '35']);
        mutableBetMap.set(RouletteBetNo.SPLIT_33_36, ['33', '36']);
        mutableBetMap.set(RouletteBetNo.SPLIT_34_35, ['34', '35']);
        mutableBetMap.set(RouletteBetNo.SPLIT_35_36, ['35', '36']);
        mutableBetMap.set(RouletteBetNo.CORNER_0_1_2_3, ['0', '1', '2', '3']);
        mutableBetMap.set(RouletteBetNo.CORNER_1_2_4_5, ['1', '2', '4', '5']);
        mutableBetMap.set(RouletteBetNo.CORNER_2_3_5_6, ['2', '3', '5', '6']);
        mutableBetMap.set(RouletteBetNo.CORNER_4_5_7_8, ['4', '5', '7', '8']);
        mutableBetMap.set(RouletteBetNo.CORNER_5_6_8_9, ['5', '6', '8', '9']);
        mutableBetMap.set(RouletteBetNo.CORNER_7_8_10_11, ['7', '8', '10', '11']);
        mutableBetMap.set(RouletteBetNo.CORNER_8_9_11_12, ['8', '9', '11', '12']);
        mutableBetMap.set(RouletteBetNo.CORNER_10_11_13_14, ['10', '11', '13', '14']);
        mutableBetMap.set(RouletteBetNo.CORNER_11_12_14_15, ['11', '12', '14', '15']);
        mutableBetMap.set(RouletteBetNo.CORNER_13_14_16_17, ['13', '14', '16', '17']);
        mutableBetMap.set(RouletteBetNo.CORNER_14_15_17_18, ['14', '15', '17', '18']);
        mutableBetMap.set(RouletteBetNo.CORNER_16_17_19_20, ['16', '17', '19', '20']);
        mutableBetMap.set(RouletteBetNo.CORNER_17_18_20_21, ['17', '18', '20', '21']);
        mutableBetMap.set(RouletteBetNo.CORNER_19_20_22_23, ['19', '20', '22', '23']);
        mutableBetMap.set(RouletteBetNo.CORNER_20_21_23_24, ['20', '21', '23', '24']);
        mutableBetMap.set(RouletteBetNo.CORNER_22_23_25_26, ['22', '23', '25', '26']);
        mutableBetMap.set(RouletteBetNo.CORNER_23_24_26_27, ['23', '24', '26', '27']);
        mutableBetMap.set(RouletteBetNo.CORNER_25_26_28_29, ['25', '26', '28', '29']);
        mutableBetMap.set(RouletteBetNo.CORNER_26_27_29_30, ['26', '27', '29', '30']);
        mutableBetMap.set(RouletteBetNo.CORNER_28_29_31_32, ['28', '29', '31', '32']);
        mutableBetMap.set(RouletteBetNo.CORNER_29_30_32_33, ['29', '30', '32', '33']);
        mutableBetMap.set(RouletteBetNo.CORNER_31_32_34_35, ['31', '32', '34', '35']);
        mutableBetMap.set(RouletteBetNo.CORNER_32_33_35_36, ['32', '33', '35', '36']);
        mutableBetMap.set(RouletteBetNo.RED, ['1', '3', '5', '7', '9', '12', '14', '16', '18', '19', '21', '23', '25', '27', '30', '32', '34', '36']);
        mutableBetMap.set(RouletteBetNo.BLACK, ['2', '4', '6', '8', '10', '11', '13', '15', '17', '20', '22', '24', '26', '28', '29', '31', '33', '35']);
        mutableBetMap.set(RouletteBetNo.EVEN, ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36']);
        mutableBetMap.set(RouletteBetNo.ODD, ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31', '33', '35']);
        mutableBetMap.set(RouletteBetNo.LOW, ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']);
        mutableBetMap.set(RouletteBetNo.HIGH, ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']);
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
        const RouletteOppositeBetRules = [[RouletteBetNo.EVEN, RouletteBetNo.ODD], [RouletteBetNo.RED, RouletteBetNo.BLACK], [RouletteBetNo.LOW, RouletteBetNo.HIGH], [RouletteBetNo.DOZEN_1, RouletteBetNo.DOZEN_13, RouletteBetNo.DOZEN_25], [RouletteBetNo.COLUMN_1, RouletteBetNo.COLUMN_2, RouletteBetNo.COLUMN_3]];
        const RouletteGameResultRules = [[result => {
          const roulette = result.roulette;
          return !(roulette == undefined || roulette == null);
        }, 'the roulette number is missing'], [result => {
          const roulette = result.roulette;
          return typeof roulette === 'string';
        }, 'the roulette number is incorrect type'], [result => {
          return isRouletteNumber(result.roulette);
        }, 'the roulette number is incorrect range']];

        /**
         * Initializes basic bet types and payout configurations.
         */
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
            return parseRouletteBetNo(betNo) != undefined;
          }
          getWinningProfile(result) {
            const resultPayouts = new Map();
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
              return undefined;
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
          candidateBetNos: [RouletteBetNo.STRAIGHT_UP_0, RouletteBetNo.STRAIGHT_UP_1, RouletteBetNo.STRAIGHT_UP_2, RouletteBetNo.STRAIGHT_UP_3, RouletteBetNo.STRAIGHT_UP_4, RouletteBetNo.STRAIGHT_UP_5, RouletteBetNo.STRAIGHT_UP_6, RouletteBetNo.STRAIGHT_UP_7, RouletteBetNo.STRAIGHT_UP_8, RouletteBetNo.STRAIGHT_UP_9, RouletteBetNo.STRAIGHT_UP_10, RouletteBetNo.STRAIGHT_UP_11, RouletteBetNo.STRAIGHT_UP_12, RouletteBetNo.STRAIGHT_UP_13, RouletteBetNo.STRAIGHT_UP_14, RouletteBetNo.STRAIGHT_UP_15, RouletteBetNo.STRAIGHT_UP_16, RouletteBetNo.STRAIGHT_UP_17, RouletteBetNo.STRAIGHT_UP_18, RouletteBetNo.STRAIGHT_UP_19, RouletteBetNo.STRAIGHT_UP_20, RouletteBetNo.STRAIGHT_UP_21, RouletteBetNo.STRAIGHT_UP_22, RouletteBetNo.STRAIGHT_UP_23, RouletteBetNo.STRAIGHT_UP_24, RouletteBetNo.STRAIGHT_UP_25, RouletteBetNo.STRAIGHT_UP_26, RouletteBetNo.STRAIGHT_UP_27, RouletteBetNo.STRAIGHT_UP_28, RouletteBetNo.STRAIGHT_UP_29, RouletteBetNo.STRAIGHT_UP_30, RouletteBetNo.STRAIGHT_UP_31, RouletteBetNo.STRAIGHT_UP_32, RouletteBetNo.STRAIGHT_UP_33, RouletteBetNo.STRAIGHT_UP_34, RouletteBetNo.STRAIGHT_UP_35, RouletteBetNo.STRAIGHT_UP_36]
        });
        class RouletteMultiplierGame extends RouletteGame {
          getWinningProfile(result, winningContext) {
            const resultPayouts = new Map();
            for (const betNo of Object.values(RouletteBetNo)) {
              const betType = extractRouletteBetTypeFromNo(betNo);
              if (betType) {
                const betNoValues = RouletteBetNoMap.get(betNo);
                if (betNoValues && betNoValues.includes(result.roulette)) {
                  var _winningContext$multi;
                  let payout = RouletteMultiplierBaseWinningRate[betType];
                  if ((winningContext === null || winningContext === void 0 || (_winningContext$multi = winningContext.multipliers) === null || _winningContext$multi === void 0 ? void 0 : _winningContext$multi[betNo]) !== undefined) {
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
        (function (SicBoBetType) {
          SicBoBetType["SMALL"] = "small";
          SicBoBetType["BIG"] = "big";
          SicBoBetType["ODD"] = "odd";
          SicBoBetType["EVEN"] = "even";
          SicBoBetType["TOTAL_4"] = "total4";
          SicBoBetType["TOTAL_5"] = "total5";
          SicBoBetType["TOTAL_6"] = "total6";
          SicBoBetType["TOTAL_7"] = "total7";
          SicBoBetType["TOTAL_8"] = "total8";
          SicBoBetType["TOTAL_9"] = "total9";
          SicBoBetType["TOTAL_10"] = "total10";
          SicBoBetType["TOTAL_11"] = "total11";
          SicBoBetType["TOTAL_12"] = "total12";
          SicBoBetType["TOTAL_13"] = "total13";
          SicBoBetType["TOTAL_14"] = "total14";
          SicBoBetType["TOTAL_15"] = "total15";
          SicBoBetType["TOTAL_16"] = "total16";
          SicBoBetType["TOTAL_17"] = "total17";
          SicBoBetType["DOUBLE"] = "double";
          SicBoBetType["TRIPLE"] = "triple";
          SicBoBetType["ANY_TRIPLE"] = "anyTriple";
          SicBoBetType["COMBINATION"] = "comb";
          SicBoBetType["SINGLE"] = "single";
        })(SicBoBetType || (SicBoBetType = {}));
        function parseSicBoBetType(input) {
          const enumValues = Object.values(SicBoBetType);
          if (enumValues.includes(input)) {
            return input;
          }
          return undefined;
        }
        var SicBoBetNo;
        exports("S", SicBoBetNo);
        (function (SicBoBetNo) {
          SicBoBetNo["SMALL"] = "sb.small";
          SicBoBetNo["BIG"] = "sb.big";
          SicBoBetNo["ODD"] = "sb.odd";
          SicBoBetNo["EVEN"] = "sb.even";
          SicBoBetNo["TOTAL_4"] = "sb.total4";
          SicBoBetNo["TOTAL_5"] = "sb.total5";
          SicBoBetNo["TOTAL_6"] = "sb.total6";
          SicBoBetNo["TOTAL_7"] = "sb.total7";
          SicBoBetNo["TOTAL_8"] = "sb.total8";
          SicBoBetNo["TOTAL_9"] = "sb.total9";
          SicBoBetNo["TOTAL_10"] = "sb.total10";
          SicBoBetNo["TOTAL_11"] = "sb.total11";
          SicBoBetNo["TOTAL_12"] = "sb.total12";
          SicBoBetNo["TOTAL_13"] = "sb.total13";
          SicBoBetNo["TOTAL_14"] = "sb.total14";
          SicBoBetNo["TOTAL_15"] = "sb.total15";
          SicBoBetNo["TOTAL_16"] = "sb.total16";
          SicBoBetNo["TOTAL_17"] = "sb.total17";
          SicBoBetNo["DOUBLE_1"] = "sb.double-1";
          SicBoBetNo["DOUBLE_2"] = "sb.double-2";
          SicBoBetNo["DOUBLE_3"] = "sb.double-3";
          SicBoBetNo["DOUBLE_4"] = "sb.double-4";
          SicBoBetNo["DOUBLE_5"] = "sb.double-5";
          SicBoBetNo["DOUBLE_6"] = "sb.double-6";
          SicBoBetNo["TRIPLE_1"] = "sb.triple-1";
          SicBoBetNo["TRIPLE_2"] = "sb.triple-2";
          SicBoBetNo["TRIPLE_3"] = "sb.triple-3";
          SicBoBetNo["TRIPLE_4"] = "sb.triple-4";
          SicBoBetNo["TRIPLE_5"] = "sb.triple-5";
          SicBoBetNo["TRIPLE_6"] = "sb.triple-6";
          SicBoBetNo["ANY_TRIPLE"] = "sb.anyTriple";
          SicBoBetNo["COMBINATION_1_2"] = "sb.comb-1_2";
          SicBoBetNo["COMBINATION_1_3"] = "sb.comb-1_3";
          SicBoBetNo["COMBINATION_1_4"] = "sb.comb-1_4";
          SicBoBetNo["COMBINATION_1_5"] = "sb.comb-1_5";
          SicBoBetNo["COMBINATION_1_6"] = "sb.comb-1_6";
          SicBoBetNo["COMBINATION_2_3"] = "sb.comb-2_3";
          SicBoBetNo["COMBINATION_2_4"] = "sb.comb-2_4";
          SicBoBetNo["COMBINATION_2_5"] = "sb.comb-2_5";
          SicBoBetNo["COMBINATION_2_6"] = "sb.comb-2_6";
          SicBoBetNo["COMBINATION_3_4"] = "sb.comb-3_4";
          SicBoBetNo["COMBINATION_3_5"] = "sb.comb-3_5";
          SicBoBetNo["COMBINATION_3_6"] = "sb.comb-3_6";
          SicBoBetNo["COMBINATION_4_5"] = "sb.comb-4_5";
          SicBoBetNo["COMBINATION_4_6"] = "sb.comb-4_6";
          SicBoBetNo["COMBINATION_5_6"] = "sb.comb-5_6";
          SicBoBetNo["SINGLE_1"] = "sb.single-1";
          SicBoBetNo["SINGLE_2"] = "sb.single-2";
          SicBoBetNo["SINGLE_3"] = "sb.single-3";
          SicBoBetNo["SINGLE_4"] = "sb.single-4";
          SicBoBetNo["SINGLE_5"] = "sb.single-5";
          SicBoBetNo["SINGLE_6"] = "sb.single-6";
        })(SicBoBetNo || exports("S", SicBoBetNo = {}));
        function parseSicBoBetNo(input) {
          const enumValues = Object.values(SicBoBetNo);
          if (enumValues.includes(input)) {
            return input;
          }
          return undefined;
        }
        function extractSicBoBetTypeFromNo(input) {
          const typePart = input.replace('sb.', '').split('-')[0];
          return parseSicBoBetType(typePart);
        }
        var SicBoBetLimitProfile;
        exports("c", SicBoBetLimitProfile);
        (function (SicBoBetLimitProfile) {
          SicBoBetLimitProfile["SMALL_BIG"] = "sb.smallBig";
          SicBoBetLimitProfile["ODD_EVEN"] = "sb.oddEven";
          SicBoBetLimitProfile["DOUBLE"] = "sb.double";
          SicBoBetLimitProfile["TRIPLE"] = "sb.triple";
          SicBoBetLimitProfile["ANY_TRIPLE"] = "sb.anyTriple";
          SicBoBetLimitProfile["COMBINATION"] = "sb.comb";
          SicBoBetLimitProfile["TOTAL_4_17"] = "sb.total4Or17";
          SicBoBetLimitProfile["TOTAL_5_16"] = "sb.total5Or16";
          SicBoBetLimitProfile["TOTAL_6_15"] = "sb.total6Or15";
          SicBoBetLimitProfile["TOTAL_7_14"] = "sb.total7Or14";
          SicBoBetLimitProfile["TOTAL_8_13"] = "sb.total8Or13";
          SicBoBetLimitProfile["TOTAL_9_12"] = "sb.total9Or12";
          SicBoBetLimitProfile["TOTAL_10_11"] = "sb.total10Or11";
          SicBoBetLimitProfile["SINGLE"] = "sb.single";
        })(SicBoBetLimitProfile || exports("c", SicBoBetLimitProfile = {}));
        const mutableBetTotalMap = new Map();
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
        const SicBoBetExcludeTripleList = [SicBoBetNo.SMALL, SicBoBetNo.BIG, SicBoBetNo.ODD, SicBoBetNo.EVEN];
        const mutableBetSingleMap = new Map();
        mutableBetSingleMap.set(1, SicBoBetNo.SINGLE_1);
        mutableBetSingleMap.set(2, SicBoBetNo.SINGLE_2);
        mutableBetSingleMap.set(3, SicBoBetNo.SINGLE_3);
        mutableBetSingleMap.set(4, SicBoBetNo.SINGLE_4);
        mutableBetSingleMap.set(5, SicBoBetNo.SINGLE_5);
        mutableBetSingleMap.set(6, SicBoBetNo.SINGLE_6);
        const SicBoBetSingleMap = mutableBetSingleMap;
        const mutableBetDoubleMap = new Map();
        mutableBetDoubleMap.set(1, SicBoBetNo.DOUBLE_1);
        mutableBetDoubleMap.set(2, SicBoBetNo.DOUBLE_2);
        mutableBetDoubleMap.set(3, SicBoBetNo.DOUBLE_3);
        mutableBetDoubleMap.set(4, SicBoBetNo.DOUBLE_4);
        mutableBetDoubleMap.set(5, SicBoBetNo.DOUBLE_5);
        mutableBetDoubleMap.set(6, SicBoBetNo.DOUBLE_6);
        const SicBoBetDoubleMap = mutableBetDoubleMap;
        const mutableBetTripleMap = new Map();
        mutableBetTripleMap.set(1, SicBoBetNo.TRIPLE_1);
        mutableBetTripleMap.set(2, SicBoBetNo.TRIPLE_2);
        mutableBetTripleMap.set(3, SicBoBetNo.TRIPLE_3);
        mutableBetTripleMap.set(4, SicBoBetNo.TRIPLE_4);
        mutableBetTripleMap.set(5, SicBoBetNo.TRIPLE_5);
        mutableBetTripleMap.set(6, SicBoBetNo.TRIPLE_6);
        const SicBoBetTripleMap = mutableBetTripleMap;
        const mutableBetCombinationMap = new Map();
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
        const SicBoOppositeBetRules = [[SicBoBetNo.EVEN, SicBoBetNo.ODD], [SicBoBetNo.SMALL, SicBoBetNo.BIG]];
        const SicBoResultRules = [[result => {
          const sicBo = result.sicBo;
          return !(sicBo == undefined || sicBo == null);
        }, 'the dice numbers are missing'], [result => {
          const sicBo = result.sicBo;
          return Array.isArray(sicBo);
        }, 'the dice numbers are incorrect type'], [result => {
          const sicBo = result.sicBo;
          return sicBo.length === 3;
        }, 'the dice numbers are incorrect length'], [result => isDiceNumber(result.sicBo[0]), 'the 1st dice number is incorrect'], [result => isDiceNumber(result.sicBo[1]), 'the 2nd dice number is incorrect'], [result => isDiceNumber(result.sicBo[2]), 'the 3rd dice number is incorrect']];

        /**
         * Initializes basic bet types and payout configurations.
         */
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
        /**
         * Single bet type: use dice count to get winning rate
         */
        const mutableSicBoSingleWinningRateMap = new Map();
        mutableSicBoSingleWinningRateMap.set(1, new Decimal$1(1));
        mutableSicBoSingleWinningRateMap.set(2, new Decimal$1(2));
        mutableSicBoSingleWinningRateMap.set(3, new Decimal$1(15));
        const SicBoSingleWinningRateMap = mutableSicBoSingleWinningRateMap;
        function isValidSicBoArray(sicBo) {
          return Array.isArray(sicBo) && sicBo.length == 3 && sicBo.every(num => Number.isInteger(num) && num >= 1 && num <= 6);
        }
        class SicBoGame extends GameRule {
          constructor() {
            super(SicBoResultRules);
          }
          validateBetType(betType) {
            return parseSicBoBetNo(betType) != undefined;
          }
          getWinningProfile(result) {
            const winningProfile = new Map();
            if (!isValidSicBoArray(result.sicBo)) {
              return winningProfile;
            }
            // Check bet type by count
            const diceCounts = new Map();
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
              // Check single winning rate
              winningProfile.set(SicBoBetSingleMap.get(i), SicBoSingleWinningRateMap.get(diceCounts.get(i)));
            }
            // Check bet type by total
            const total = result.sicBo.reduce((sum, num) => sum + num, 0);
            for (const betNo of SicBoBetTotalMap.keys()) {
              if (SicBoBetTotalMap.get(betNo).includes(total) && !(hasTriple && SicBoBetExcludeTripleList.includes(betNo))) {
                winningProfile.set(betNo, SicBoWinningRate[extractSicBoBetTypeFromNo(betNo)]);
              }
            }
            // Check combinations bet type by include
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
              return undefined;
            }
            return SicBoBetToLimitProfileMap[basicType];
          }
          getOppositeBetRules() {
            return SicBoOppositeBetRules;
          }
        }
        var MessageActor;
        (function (MessageActor) {
          /** Messages sent by myself */
          MessageActor["ME"] = "me";
          /** Messages sent by others */
          MessageActor["OTHERS"] = "others";
          /** Messages sent by system */
          MessageActor["SYSTEM"] = "system";
        })(MessageActor || (MessageActor = {}));
        var MessageContentType;
        exports("M", MessageContentType);
        (function (MessageContentType) {
          MessageContentType["TEXT"] = "text";
          MessageContentType["GAME_HISTORY"] = "gameHistory";
        })(MessageContentType || exports("M", MessageContentType = {}));
      }
    };
  });
})();
//# sourceMappingURL=ikigaians-house-core-legacy-BYu6jnS6.js.map
