var l = Object.defineProperty;
var f = (o, e, s) => e in o ? l(o, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[e] = s;
var u = (o, e, s) => f(o, typeof e != "symbol" ? e + "" : e, s);
function m(o) {
  let e, s;
  if (typeof o == "string") {
    o = o.trim();
    const r = o.match(/^(?<value>(?:\+|-)?\d+(?:\.\d+)?(?:(?:e|E)(?:\+|-)?\d+)?) {0,1}(?<unit>[a-zA-Z]+)?$/);
    if (!r || !r.groups)
      throw new Error("Input is invalid");
    e = parseFloat(r.groups.value), s = r.groups.unit ?? "";
  } else
    e = o, s = "";
  if (isNaN(e))
    throw new Error("Value is not a number");
  if (!isFinite(e))
    throw new Error("Value is infinite");
  return [e, s];
}
function c(o) {
  const e = o[0], s = o.reduce((r, t) => ([t.symbol, t.name].flat().forEach((n) => {
    r[n.toLowerCase()] = t;
  }), r), {});
  return class i {
    constructor(t, n) {
      u(this, "value");
      u(this, "unitConfig");
      this.value = t, n ? this.unitConfig = s[n.toLowerCase()] : this.unitConfig = e;
    }
    static from(t) {
      const [n, a] = m(t);
      return new i(n, a);
    }
    get baseValue() {
      return this.value * this.unitConfig.factor;
    }
    get symbol() {
      return typeof this.unitConfig.symbol == "string" ? this.unitConfig.symbol : this.unitConfig.symbol[0];
    }
    get name() {
      return typeof this.unitConfig.name == "string" ? this.unitConfig.name : this.unitConfig.name[0];
    }
    to(t) {
      const n = s[t.toLowerCase()], a = this.baseValue / n.factor;
      return new i(a, t);
    }
    add(t) {
      (typeof t == "string" || typeof t == "number") && (t = i.from(t));
      const n = (this.baseValue + t.baseValue) / this.unitConfig.factor;
      return new i(n, this.symbol);
    }
    subtract(t) {
      (typeof t == "string" || typeof t == "number") && (t = i.from(t));
      const n = (this.baseValue - t.baseValue) / this.unitConfig.factor;
      return new i(n, this.symbol);
    }
    format() {
      return `${this.value}${this.symbol}`;
    }
    clone() {
      return new i(this.value, this.symbol);
    }
    toString() {
      return this.format();
    }
    valueOf() {
      return this.baseValue;
    }
  };
}
const b = c([
  { factor: 1, symbol: "ms", name: "millisecond" },
  // satisfies UnitConfig
  { factor: 1e3, symbol: ["s", "sec"], name: "second" },
  { factor: 6e4, symbol: ["m", "min"], name: "minute" },
  { factor: 36e5, symbol: ["h", "hr"], name: "hour" },
  { factor: 864e5, symbol: "d", name: "day" },
  { factor: 6048e5, symbol: ["w", "wk"], name: "week" },
  { factor: 26298e5, symbol: "mo", name: "month" },
  { factor: 315576e5, symbol: ["y", "yr"], name: "year" }
]);
export {
  b as Duration,
  c as createUnitFactory,
  m as parseValueUnitString
};
//# sourceMappingURL=unit-factory.js.map
