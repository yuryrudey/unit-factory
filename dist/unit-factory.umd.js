(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.UnitFactory={}))})(this,function(e){"use strict";function t(i){let n,o;if(typeof i=="string"){i=i.trim();const r=i.match(/^(?<value>(?:\+|-)?\d+(?:\.\d+)?(?:(?:e|E)(?:\+|-)?\d+)?) {0,1}(?<unit>[a-zA-Z]+)?$/);if(!r||!r.groups)throw new Error("Input is invalid");n=parseFloat(r.groups.value),o=r.groups.unit??""}else n=i,o="";if(isNaN(n))throw new Error("Value is not a number");if(!isFinite(n))throw new Error("Value is infinite");return[n,o]}e.parseValueUnitString=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=unit-factory.umd.js.map
