"use strict";var m=Object.defineProperty;var c=(n,e,s)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var u=(n,e,s)=>c(n,typeof e!="symbol"?e+"":e,s);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function l(n){let e,s;if(typeof n=="string"){n=n.trim();const i=n.match(/^(?<value>(?:\+|-)?\d+(?:\.\d+)?(?:(?:e|E)(?:\+|-)?\d+)?) {0,1}(?<unit>[a-zA-Z]+)?$/);if(!i||!i.groups)throw new Error("Input is invalid");e=parseFloat(i.groups.value),s=i.groups.unit??""}else e=n,s="";if(isNaN(e))throw new Error("Value is not a number");if(!isFinite(e))throw new Error("Value is infinite");return[e,s]}function f(n){const e=n[0],s=n.reduce((i,t)=>([t.symbol,t.name].flat().forEach(o=>{i[o.toLowerCase()]=t}),i),{});return class r{constructor(t,o){u(this,"value");u(this,"unitConfig");this.value=t,o?this.unitConfig=s[o.toLowerCase()]:this.unitConfig=e}static from(t){const[o,a]=l(t);return new r(o,a)}get baseValue(){return this.value*this.unitConfig.factor}get symbol(){return typeof this.unitConfig.symbol=="string"?this.unitConfig.symbol:this.unitConfig.symbol[0]}get name(){return typeof this.unitConfig.name=="string"?this.unitConfig.name:this.unitConfig.name[0]}to(t){const o=s[t.toLowerCase()],a=this.baseValue/o.factor;return new r(a,t)}add(t){(typeof t=="string"||typeof t=="number")&&(t=r.from(t));const o=(this.baseValue+t.baseValue)/this.unitConfig.factor;return new r(o,this.symbol)}subtract(t){(typeof t=="string"||typeof t=="number")&&(t=r.from(t));const o=(this.baseValue-t.baseValue)/this.unitConfig.factor;return new r(o,this.symbol)}format(){return`${this.value}${this.symbol}`}clone(){return new r(this.value,this.symbol)}toString(){return this.format()}valueOf(){return this.baseValue}}}const h=f([{factor:1,symbol:"ms",name:"millisecond"},{factor:1e3,symbol:["s","sec"],name:"second"},{factor:6e4,symbol:["m","min"],name:"minute"},{factor:36e5,symbol:["h","hr"],name:"hour"},{factor:864e5,symbol:"d",name:"day"},{factor:6048e5,symbol:["w","wk"],name:"week"},{factor:26298e5,symbol:"mo",name:"month"},{factor:315576e5,symbol:["y","yr"],name:"year"}]);exports.Duration=h;exports.createUnitFactory=f;exports.parseValueUnitString=l;
//# sourceMappingURL=unit-factory.cjs.map
