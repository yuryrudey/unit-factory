function n(r) {
  let e, i;
  if (typeof r == "string") {
    r = r.trim();
    const t = r.match(/^(?<value>(?:\+|-)?\d+(?:\.\d+)?(?:(?:e|E)(?:\+|-)?\d+)?) {0,1}(?<unit>[a-zA-Z]+)?$/);
    if (!t || !t.groups)
      throw new Error("Input is invalid");
    e = parseFloat(t.groups.value), i = t.groups.unit ?? "";
  } else
    e = r, i = "";
  if (isNaN(e))
    throw new Error("Value is not a number");
  if (!isFinite(e))
    throw new Error("Value is infinite");
  return [e, i];
}
export {
  n as parseValueUnitString
};
//# sourceMappingURL=unit-factory.esm.js.map
