!function(e){"object"==typeof module&&"undefined"!=typeof module.exports?module.exports=e:e()}(function(){arguments.length&&setTimeout(function(){throw new Error("A deprecated way of resolving FusionCharts as a dependency is detected. Please use FusionCharts.addDep instead. For more information, please visit https://www.fusioncharts.com/dev/getting-started/plain-javascript/install-using-plain-javascript#install-fusioncharts-via-npm-5")},0),(window.webpackJsonpFusionCharts=window.webpackJsonpFusionCharts||[]).push([[9],{703:function(e,t,n){"use strict";t.__esModule=!0,t.MSStackedColumn2DSplineDY=undefined;var a,o=n(704),r=(a=o)&&a.__esModule?a:{"default":a};t.MSStackedColumn2DSplineDY=r["default"],t["default"]={name:"msstackedcolumn2dsplinedy",type:"package",requiresFusionCharts:!0,extension:function(e){return e.addDep(r["default"])}}},704:function(e,t,n){"use strict";t.__esModule=!0;var a=u(n(439)),o=u(n(400)),r=u(n(331)),i=u(n(409)),s=u(n(705));function u(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),a=0;a<n.length;a++){var o=n[a],r=Object.getOwnPropertyDescriptor(t,o);r&&r.configurable&&e[o]===undefined&&Object.defineProperty(e,o,r)}}(e,t))}var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return n.stack100percent=0,n.hasLineSet=!0,n.lineset=!0,n.registerFactory("dataset",s["default"],["vCanvas"]),n}return l(t,e),t.prototype.getName=function(){return"MSStackedColumn2DSplineDy"},t.getName=function(){return"MSStackedColumn2DSplineDy"},t.prototype.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this);var t=this.config;t.sDefaultDatasetType="spline",t.friendlyName="Multi-series Dual Y-Axis Stacked Column and Line Chart",t.defaultDatasetType="column"},t.prototype.getDSdef=function(e){return"spline"===e?o["default"]:r["default"]},t.prototype.getDSGroupdef=function(){return i["default"]},t}(a["default"]);t["default"]=f},705:function(e,t,n){"use strict";t.__esModule=!0,t["default"]=function(e){var t,n=e.getFromEnv("dataSource"),a=n.dataset,o=n.lineset||[],u=void 0,l=e.getChildren("canvas")[0].getChildren("vCanvas")[1];a||0!==o.length?((0,r["default"])(e),t=e.config._lastDatasetIndex+1,o&&o.length?(u=Array(o.length).fill(t).map(function(e,t){return e+t}),(0,i.datasetFactory)(l,e.getDSdef("spline"),"dataset_spline",o.length,o,u)):s(l)):e.setChartMessage()};var a,o=n(425),r=(a=o)&&a.__esModule?a:{"default":a},i=n(118);var s=function(e){var t=e.getChildren("dataset_line"),n=void 0;for(n=t&&t.length-1;n>-1;n--)t[n].remove()}}}])});
//# sourceMappingURL=http://localhost:3052/3.13.1-sr.1/map/eval/fusioncharts.msstackedcolumn2dsplinedy.js.map