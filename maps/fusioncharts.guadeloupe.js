(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=596)})({596:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(597);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},597:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Guadeloupe.1.09-25-2017 11:37:35
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Guadeloupe",revision:1,creditLabel:false,standaloneInit:false,baseWidth:500,baseHeight:405,baseScaleFactor:10,firstEntity:"FR.GD.GD",entities:{"FR.GD.GD":{outlines:[[M,3620,3356,Q,3611,3352,3611,3342,3606,3277,3550,3272,3531,3267,3513,3263,3484,3244,3461,3230,3419,3202,3372,3169,3349,3150,3320,3155,3316,3155,3311,3155,3302,3160,3288,3164,3278,3169,3269,3178,3260,3192,3250,3202,3222,3221,3199,3239,3189,3253,3175,3258,3138,3286,3100,3319,3096,3333,3091,3342,3086,3380,3058,3394,3053,3399,3049,3403,3021,3422,3030,3474,3039,3511,3011,3530,2992,3549,2969,3563,2936,3586,2946,3642,2946,3652,2950,3661,2964,3689,2969,3722,2974,3736,2983,3745,3016,3792,3016,3844,3011,3862,3030,3886,3030,3909,3058,3909,3096,3914,3138,3909,3156,3909,3156,3923,3156,3937,3161,3947,3166,3952,3166,3956,3175,3970,3185,3984,3189,3994,3199,3994,3264,4003,3330,4003,3424,4003,3513,3998,3531,3998,3545,3989,3550,3984,3555,3984,3583,3975,3588,3947,3588,3942,3592,3933,3602,3923,3611,3923,3672,3923,3681,3877,3681,3867,3681,3862,3719,3858,3752,3844,3761,3839,3761,3834,3770,3806,3803,3797,3822,3792,3831,3783,3864,3750,3864,3703,3864,3661,3859,3624,3859,3619,3855,3614,3831,3586,3812,3572,3803,3563,3798,3553,3780,3511,3723,3492,3686,3483,3677,3450,3672,3441,3672,3431,Q,3663,3385,3620,3356,Z],[M,4951,1145,Q,4937,1121,4914,1112,4909,1112,4904,1107,4895,1103,4881,1098,4839,1089,4792,1098,4787,1098,4782,1103,4759,1126,4745,1140,4740,1149,4731,1149,4670,1145,4661,1187,4661,1196,4656,1196,4628,1206,4590,1206,4581,1206,4576,1210,4567,1215,4562,1224,4557,1229,4553,1234,4548,1248,4548,1267,4543,1295,4511,1290,4408,1271,4417,1388,4520,1388,4618,1388,4632,1388,4642,1384,4679,1370,4679,1328,4679,1318,4684,1313,4726,1290,4782,1295,4829,1304,4820,1257,4815,1224,4825,1210,4853,1187,4914,1196,4965,1206,4956,1154,Q,4956,1149,4951,1145,Z],[M,2538,414,Q,2505,395,2491,358,2486,348,2482,339,2477,329,2468,329,2407,329,2411,269,2411,217,2374,198,2332,170,2322,119,2318,105,2308,91,2266,39,2196,48,2177,48,2158,58,2144,67,2126,72,2093,86,2074,119,2065,147,2023,166,1999,175,1985,180,1980,184,1980,189,1976,255,1915,245,1882,245,1873,259,1868,269,1863,278,1859,283,1854,287,1816,315,1774,339,1760,348,1755,372,1755,376,1755,381,1737,447,1737,522,1741,615,1746,704,1746,718,1755,728,1784,751,1802,775,1807,779,1812,784,1840,798,1849,821,1882,873,1943,859,1994,850,2004,892,2004,906,2004,915,2013,953,1994,962,1990,967,1990,971,1985,1e3,1980,1032,1980,1046,1971,1046,1934,1056,1891,1051,1830,1046,1793,1060,1704,1098,1718,1206,1718,1224,1704,1229,1662,1248,1662,1295,1662,1332,1657,1374,1657,1388,1648,1388,1610,1398,1573,1393,1521,1388,1521,1435,1521,1449,1516,1454,1498,1477,1479,1487,1470,1496,1460,1501,1413,1515,1385,1482,1376,1477,1376,1468,1371,1417,1371,1365,1371,1304,1310,1285,1282,1276,1254,1257,1221,1234,1179,1239,1081,1253,982,1215,978,1192,959,1192,889,1192,828,1164,818,1154,814,1140,800,1107,767,1103,734,1098,706,1089,678,1079,664,1056,654,1032,640,1014,636,1004,626,1004,500,995,373,1e3,336,1e3,331,1032,331,1065,303,1070,289,1070,275,1075,256,1089,242,1089,205,1103,209,1135,214,1192,186,1220,176,1224,176,1234,181,1290,144,1313,115,1332,120,1356,120,1398,115,1445,115,1454,111,1459,92,1487,69,1515,41,1552,50,1609,50,1618,55,1623,69,1637,78,1651,101,1670,125,1684,148,1698,148,1716,153,1745,172,1768,176,1773,181,1773,219,1787,242,1820,247,1824,247,1829,265,1899,261,1969,261,1979,265,1988,289,2035,294,2101,294,2124,284,2143,275,2297,275,2452,275,2551,270,2644,270,2677,279,2691,289,2696,289,2705,294,2729,308,2747,317,2757,317,2766,322,2846,322,2925,322,2935,326,2939,340,2953,354,2963,369,2972,378,2986,387,3e3,387,3014,392,3043,392,3066,397,3178,504,3183,514,3183,518,3192,522,3200,542,3213,561,3225,575,3267,579,3263,584,3258,589,3253,593,3249,622,3291,650,3314,664,3333,673,3347,682,3361,692,3366,696,3375,696,3380,706,3417,706,3450,706,3474,701,3502,692,3563,748,3558,842,3553,935,3549,935,3520,940,3488,940,3478,945,3478,1001,3460,1057,3455,1109,3445,1160,3441,1193,3441,1203,3417,1207,3408,1212,3403,1221,3394,1231,3389,1254,3380,1273,3366,1296,3352,1296,3338,1301,3310,1306,3286,1306,3277,1315,3272,1320,3267,1329,3267,1338,3263,1348,3258,1395,3239,1381,3188,1376,3160,1399,3155,1427,3150,1460,3146,1470,3146,1479,3141,1516,3132,1545,3103,1559,3089,1573,3080,1596,3075,1601,3047,1601,3028,1606,3005,1606,2996,1606,2986,1610,2864,1610,2743,1610,2555,1606,2372,1606,2358,1596,2349,1568,2326,1540,2283,1531,2274,1531,2260,1531,2176,1502,2101,1493,2068,1484,2030,1479,1998,1488,1965,1493,1941,1493,1918,1488,1852,1521,1820,1526,1815,1531,1810,1535,1796,1540,1796,1573,1796,1610,1801,1629,1805,1634,1815,1680,1871,1774,1876,1812,1880,1854,1885,1863,1885,1868,1895,1877,1918,1905,1932,1952,1951,2013,1941,2023,1941,2032,1946,2055,1960,2069,1988,2074,2002,2083,2002,2196,2012,2304,2012,2318,2012,2322,2007,2336,2002,2346,1988,2355,1984,2360,1974,2369,1941,2416,1941,2430,1941,2444,1937,2486,1923,2557,1932,2590,1932,2618,1927,2622,1927,2627,1918,2650,1895,2669,1871,2679,1862,2693,1857,2711,1848,2730,1843,2739,1843,2749,1843,2777,1843,2777,1820,2777,1810,2782,1801,2786,1796,2786,1787,L,2791,1777,Q,2843,1768,2889,1768,2918,1768,2941,1763,2974,1759,3011,1759,3030,1759,3049,1754,3138,1735,3231,1740,3264,1740,3288,1731,3302,1731,3302,1716,3306,1665,3363,1660,3541,1660,3714,1660,3723,1660,3723,1656,3733,1637,3737,1609,3742,1576,3714,1567,3677,1548,3625,1552,3573,1557,3564,1515,3555,1487,3550,1477,3545,1468,3541,1463,3531,1454,3513,1449,3494,1449,3494,1426,3503,1393,3484,1384,3466,1374,3442,1365,3400,1346,3386,1304,3381,1295,3377,1285,3372,1271,3358,1267,3302,1257,3283,1224,3278,1220,3274,1215,3260,1210,3250,1196,3246,1187,3236,1182,3217,1173,3189,1168,3175,1168,3161,1168,3124,1168,3110,1154,3105,1149,3100,1149,3025,1145,2950,1145,2903,1149,2871,1135,2861,1131,2847,1131,2828,1131,2824,1117,2814,1103,2810,1093,2800,1089,2791,1089,2777,1084,2758,1079,2735,1070,2702,1065,2697,1056,2693,1051,2674,1032,2650,1009,2636,1e3,2632,985,2627,953,2627,915,2627,906,2622,892,2604,850,2566,821,2561,817,2561,812,2552,756,2566,704,2571,695,2580,681,2585,676,2590,672,2599,662,2608,643,2613,639,2618,634,2641,620,2641,592,2636,573,2641,550,2650,475,2590,465,2580,461,2566,456,2557,451,2547,433,Q,2543,419,2538,414,Z]],label:"Guadeloupe",shortLabel:"GD",labelPosition:[89.2,244.5],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"guadeloupe",type:"maps"}}})});