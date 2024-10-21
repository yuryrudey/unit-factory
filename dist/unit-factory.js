var l = Object.defineProperty;
var m = (e, t, s) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var u = (e, t, s) => m(e, typeof t != "symbol" ? t + "" : t, s);
function c(e) {
  let t, s;
  if (typeof e == "string") {
    e = e.trim();
    const a = e.match(/^(?<value>(?:\+|-)?\d+(?:\.\d+)?(?:(?:e|E)(?:\+|-)?\d+)?) {0,1}(?<unit>[a-zA-Z]+)?$/);
    if (!a || !a.groups)
      throw new Error("Input is invalid");
    t = parseFloat(a.groups.value), s = a.groups.unit ?? "";
  } else
    t = e, s = "";
  if (isNaN(t))
    throw new Error("Value is not a number");
  if (!isFinite(t))
    throw new Error("Value is infinite");
  return [t, s];
}
function f(e) {
  const t = e[0], s = e.reduce((a, n) => ([n.symbol, n.name].flat().forEach((o) => {
    a[o.toLowerCase()] = n;
  }), a), {});
  return class r {
    constructor(n, o) {
      u(this, "value");
      u(this, "unitConfig");
      this.value = n, o ? this.unitConfig = s[o.toLowerCase()] : this.unitConfig = t;
    }
    static from(n) {
      const [o, i] = c(n);
      return new r(o, i);
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
    to(n) {
      const o = s[n.toLowerCase()], i = this.baseValue / o.factor;
      return new r(i, n);
    }
    add(n) {
      const o = (this.baseValue + n.baseValue) / this.unitConfig.factor;
      return new r(o, this.symbol);
    }
    subtract(n) {
      const o = (this.baseValue - n.baseValue) / this.unitConfig.factor;
      return new r(o, this.symbol);
    }
    clone() {
      return new r(this.value, this.symbol);
    }
  };
}
const b = f([
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
  f as createUnitFactory,
  c as parseValueUnitString
};
//# sourceMappingURL=unit-factory.js.map
