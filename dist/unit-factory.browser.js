var UnitFactory=function(n){"use strict";var h=Object.defineProperty;var y=(n,o,r)=>o in n?h(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r;var m=(n,o,r)=>y(n,typeof o!="symbol"?o+"":o,r);function o(a){let i,u;if(typeof a=="string"){a=a.trim();const s=a.match(/^(?<value>(?:\+|-)?\d+(?:\.\d+)?(?:(?:e|E)(?:\+|-)?\d+)?) {0,1}(?<unit>[a-zA-Z]+)?$/);if(!s||!s.groups)throw new Error("Input is invalid");i=parseFloat(s.groups.value),u=s.groups.unit??""}else i=a,u="";if(isNaN(i))throw new Error("Value is not a number");if(!isFinite(i))throw new Error("Value is infinite");return[i,u]}function r(a){const i=a[0],u=a.reduce((s,t)=>([t.symbol,t.name].flat().forEach(e=>{s[e.toLowerCase()]=t}),s),{});return class l{constructor(t,e){m(this,"value");m(this,"unitConfig");this.value=t,e?this.unitConfig=u[e.toLowerCase()]:this.unitConfig=i}static from(t){const[e,c]=o(t);return new l(e,c)}get baseValue(){return this.value*this.unitConfig.factor}get symbol(){return typeof this.unitConfig.symbol=="string"?this.unitConfig.symbol:this.unitConfig.symbol[0]}get name(){return typeof this.unitConfig.name=="string"?this.unitConfig.name:this.unitConfig.name[0]}to(t){const e=u[t.toLowerCase()],c=this.baseValue/e.factor;return new l(c,t)}add(t){const e=(this.baseValue+t.baseValue)/this.unitConfig.factor;return new l(e,this.symbol)}subtract(t){const e=(this.baseValue-t.baseValue)/this.unitConfig.factor;return new l(e,this.symbol)}format(){return`${this.value}${this.symbol}`}clone(){return new l(this.value,this.symbol)}}}const f=r([{factor:1,symbol:"ms",name:"millisecond"},{factor:1e3,symbol:["s","sec"],name:"second"},{factor:6e4,symbol:["m","min"],name:"minute"},{factor:36e5,symbol:["h","hr"],name:"hour"},{factor:864e5,symbol:"d",name:"day"},{factor:6048e5,symbol:["w","wk"],name:"week"},{factor:26298e5,symbol:"mo",name:"month"},{factor:315576e5,symbol:["y","yr"],name:"year"}]);return n.Duration=f,n.createUnitFactory=r,n.parseValueUnitString=o,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),n}({});
//# sourceMappingURL=unit-factory.browser.js.map
