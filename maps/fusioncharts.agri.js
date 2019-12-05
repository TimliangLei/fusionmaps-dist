(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=26)})({26:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(27);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},27:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Agri.1.02-22-2017 02:30:32
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Agri",revision:1,standaloneInit:true,baseWidth:650,baseHeight:372,baseScaleFactor:10,entities:{"TR.AG.AG":{outlines:[[M,3138,154,Q,3105,148,3097,143,3093,140,3081,138,3066,136,3059,134,3050,131,3036,129,3019,128,3012,126,2903,104,2836,88,2773,75,2753,70,2722,61,2711,58,2691,53,2671,51,2612,47,2564,38,2535,33,2481,33,2458,33,2385,53,2321,72,2305,76,2302,77,2301,77,2282,81,2249,91,2210,103,2197,107,2165,117,2145,122,2107,133,2082,137,2063,140,2039,147,2042,151,2047,151,2053,150,2056,152,L,2070,159,Q,2091,167,2099,174,2102,176,2110,183,2119,189,2125,191,2135,194,2143,198,2152,203,2158,205,2191,216,2204,238,L,2224,259,Q,2238,274,2238,288,L,2237,333,Q,2237,336,2237,338,2236,362,2240,412,2241,463,2220,496,2215,503,2177,572,2148,625,2129,646,2127,648,2126,649,2107,673,2102,703,2101,704,2095,715,2090,724,2090,731,2090,739,2087,746,2082,753,2080,756,2078,762,2072,785,2067,808,2063,820,2061,824,2061,834,2062,843,2058,850,2052,861,2051,866,2050,869,2050,881,L,2052,910,Q,2052,939,2049,960,2049,962,2049,964,2048,971,2045,984,2042,1e3,2043,1007,2043,1018,2038,1037,2033,1057,2033,1065,2033,1065,2028,1077,2023,1089,2023,1092,2021,1101,2008,1111,1992,1124,1970,1142,1922,1183,1888,1202,1877,1207,1869,1215,1860,1224,1851,1233,1838,1241,1831,1246,1818,1256,1816,1266,L,1816,1267,Q,1817,1269,1818,1274,1819,1275,1830,1287,1832,1289,1840,1305,1842,1310,1845,1313,1850,1316,1856,1316,1862,1316,1864,1314,1869,1308,1876,1304,L,1879,1304,Q,1890,1306,1905,1301,1925,1294,1928,1293,1931,1293,1943,1293,1954,1293,1957,1292,1963,1289,1970,1285,1973,1283,1980,1283,1982,1283,2001,1281,2022,1281,2036,1284,2048,1286,2061,1292,2067,1294,2085,1294,2102,1294,2126,1288,2137,1286,2166,1287,2173,1287,2188,1288,2202,1288,2212,1284,2227,1275,2243,1273,2257,1271,2257,1275,L,2283,1275,Q,2288,1275,2294,1279,2300,1283,2306,1283,2320,1283,2331,1284,2343,1284,2372,1284,L,2411,1284,Q,2414,1284,2423,1288,2432,1292,2435,1292,2451,1289,2473,1296,2498,1304,2504,1304,2519,1303,2532,1312,2535,1314,2559,1314,2579,1314,2582,1312,2609,1287,2611,1286,2615,1284,2632,1268,2649,1253,2652,1253,L,2668,1254,Q,2673,1254,2676,1257,2683,1263,2684,1264,2696,1270,2698,1275,2699,1278,2699,1294,2699,1319,2697,1326,2696,1331,2694,1339,2693,1348,2693,1352,2696,1373,2686,1387,2677,1400,2674,1408,2674,1410,2674,1413,2674,1417,2673,1425,2673,1435,2669,1441,2661,1450,2658,1454,2652,1461,2652,1468,2652,1477,2666,1505,2680,1532,2685,1536,2699,1547,2721,1558,2733,1564,2759,1575,2783,1587,2836,1615,2882,1640,2909,1645,2930,1600,2936,1582,2939,1571,2951,1553,2962,1536,2966,1524,2974,1512,2984,1492,2995,1467,3001,1456,3007,1443,3020,1421,3034,1396,3042,1382,3075,1315,3120,1249,3123,1236,3130,1227,3134,1222,3144,1212,3147,1208,3158,1190,3166,1175,3169,1172,3184,1153,3226,1111,3259,1079,3272,1072,L,3272,1031,Q,3272,1027,3276,1013,3281,1e3,3280,994,3279,984,3280,971,3280,961,3280,955,3280,953,3280,952,3283,942,3287,933,3291,927,3301,909,3307,898,3308,886,3311,869,3313,864,3315,854,3320,843,3326,830,3330,825,3337,819,3337,808,3338,797,3342,791,3338,780,3340,762,3340,742,3340,732,3340,716,3335,703,3331,693,3331,640,3331,605,3332,586,3332,577,3336,562,3339,546,3339,532,3338,487,3340,477,3341,469,3348,452,3351,443,3352,436,3352,434,3351,432,L,3355,389,Q,3355,378,3351,371,3347,362,3345,348,3347,318,3341,304,3340,302,3332,265,3325,242,3310,226,3291,204,3286,200,3271,188,3251,188,3244,188,3233,183,3220,178,3215,177,3212,177,3204,173,3197,169,3195,168,3184,166,3180,161,Q,3155,158,3138,154,Z]],label:"Agri",shortLabel:"AG",labelPosition:[263.8,73.4],labelAlignment:[CEN,MID]},"TR.AG.DI":{outlines:[[M,4393,1404,Q,4390,1400,4383,1398,4374,1394,4372,1393,4369,1391,4365,1391,4359,1391,4353,1390,4349,1390,4342,1387,4335,1384,4334,1384,4326,1384,4316,1381,L,4296,1372,Q,4293,1371,4287,1370,4279,1369,4275,1368,4272,1367,4265,1364,4260,1361,4256,1361,4250,1361,4238,1357,4225,1353,4221,1352,4206,1346,4202,1344,4199,1343,4190,1342,4180,1342,4178,1341,4160,1338,4154,1334,4150,1332,4145,1332,4138,1332,4136,1332,4080,1316,4056,1309,4048,1307,4034,1301,4021,1294,4017,1293,3997,1288,3987,1281,3981,1277,3970,1273,3959,1269,3954,1265,3946,1258,3940,1256,3937,1255,3930,1254,3924,1254,3921,1251,3920,1256,3915,1264,3907,1274,3906,1277,3903,1281,3900,1291,3897,1299,3893,1302,3892,1302,3891,1303,3884,1316,3879,1322,3876,1325,3873,1333,3870,1341,3867,1345,3864,1348,3853,1364,3840,1378,3838,1382,3828,1397,3827,1401,3825,1409,3824,1411,3822,1416,3817,1419,3811,1422,3800,1434,3788,1447,3785,1451,L,3768,1467,Q,3765,1470,3760,1477,3756,1484,3751,1487,3742,1492,3728,1497,3706,1505,3703,1506,3701,1507,3692,1511,3683,1515,3681,1517,3661,1529,3659,1531,3657,1532,3632,1543,3620,1548,3614,1554,3613,1555,3612,1556,3610,1559,3605,1561,3597,1566,3595,1567,3582,1577,3578,1580,3562,1587,3552,1592,3536,1602,3533,1611,3532,1614,3527,1623,3523,1629,3524,1632,3524,1636,3520,1642,3515,1648,3514,1650,3511,1654,3509,1660,3505,1669,3503,1671,3497,1682,3496,1683,3495,1685,3495,1692,3495,1699,3496,1701,3499,1706,3502,1715,3503,1718,3504,1726,3505,1734,3508,1737,3511,1740,3514,1748,3515,1752,3517,1761,3522,1773,3525,1778,3525,1779,3525,1791,L,3526,1805,Q,3526,1815,3530,1822,3534,1831,3534,1838,3534,1849,3529,1853,3524,1857,3525,1875,3526,1883,3521,1893,3515,1902,3517,1916,3518,1932,3494,1943,3492,1944,3486,1944,3482,1944,3480,1946,3478,1947,3474,1952,3470,1960,3469,1961,3463,1969,3459,1974,3452,1983,3446,1986,3442,1988,3436,1989,3432,1990,3430,1992,3426,1994,3421,1999,3416,2005,3413,2008,3403,2015,3399,2019,3391,2026,3390,2032,3390,2036,3387,2041,3383,2045,3383,2045,3375,2056,3372,2059,3371,2065,3365,2071,3359,2077,3355,2083,3352,2088,3350,2090,3348,2092,3344,2096,3340,2100,3326,2115,3313,2130,3282,2179,3279,2183,3273,2196,3266,2208,3263,2212,3258,2218,3253,2229,3247,2241,3244,2246,3236,2255,3224,2280,3214,2296,3211,2310,3232,2311,3245,2311,3266,2311,3307,2321,3352,2331,3364,2332,3373,2333,3391,2338,3411,2345,3418,2350,3459,2383,3472,2390,3490,2400,3510,2419,3534,2444,3542,2471,3548,2487,3568,2507,3593,2531,3601,2547,3609,2564,3632,2586,3639,2592,3655,2600,3670,2608,3679,2616,3712,2645,3770,2670,3837,2701,3890,2702,3947,2704,3966,2690,3976,2683,3995,2671,3998,2668,4009,2664,4021,2659,4023,2658,4025,2657,4056,2643,4077,2634,4079,2620,4081,2611,4094,2593,4105,2575,4117,2565,4126,2556,4163,2508,4191,2472,4209,2466,4221,2461,4238,2447,4255,2434,4268,2431,4284,2427,4301,2414,4307,2410,4317,2409,4321,2409,4327,2408,4333,2406,4346,2403,L,4370,2395,Q,4384,2391,4384,2393,4417,2390,4455,2395,4493,2400,4498,2401,4504,2401,4505,2401,L,4505,2401,Q,4520,2402,4560,2409,4575,2411,4587,2412,4579,2372,4560,2307,4558,2303,4558,2293,4557,2283,4555,2277,4550,2266,4550,2252,4550,2240,4546,2221,4543,2203,4543,2195,L,4544,2156,Q,4543,2142,4544,2136,4546,2129,4553,2113,4556,2105,4556,2082,4555,2063,4555,2055,L,4555,2050,Q,4555,1995,4555,1964,4555,1904,4549,1866,4543,1813,4536,1786,4526,1740,4502,1708,4497,1705,4488,1693,4479,1678,4474,1673,4462,1652,4457,1645,4456,1643,4454,1638,4452,1632,4450,1629,4444,1619,4445,1613,4446,1607,4444,1602,4442,1597,4440,1592,4439,1590,4439,1581,L,4438,1574,Q,4438,1563,4441,1555,4443,1547,4443,1527,4443,1509,4445,1501,4447,1494,4447,1484,4447,1471,4444,1464,4442,1459,4433,1448,4429,1442,4421,1433,4409,1421,4407,1418,Q,4405,1416,4393,1404,Z]],label:"Diyadin",shortLabel:"DI",labelPosition:[393.4,197.6],labelAlignment:[CEN,MID]},"TR.AG.DO":{outlines:[[M,5961,1274,Q,5959,1275,5958,1275,L,5931,1275,Q,5903,1287,5869,1290,5858,1291,5819,1291,L,5800,1290,Q,5796,1290,5791,1290,5759,1291,5757,1291,5748,1291,5731,1287,5712,1282,5710,1282,5668,1275,5627,1243,5604,1224,5558,1206,5511,1186,5471,1183,L,5447,1182,Q,5441,1182,5430,1183,5398,1188,5372,1185,5353,1183,5333,1189,5312,1195,5300,1199,L,5275,1199,Q,5263,1204,5235,1209,5199,1215,5191,1217,5172,1218,5168,1219,5166,1219,5159,1223,5152,1228,5146,1229,5136,1229,5123,1233,5110,1236,5103,1236,5090,1236,5041,1222,4991,1209,4976,1201,4953,1190,4941,1184,4921,1173,4911,1163,4909,1161,4898,1156,4885,1150,4881,1147,4852,1126,4848,1124,4773,1079,4736,1056,4668,1015,4618,990,L,4618,990,Q,4568,969,4458,916,4348,863,4290,839,4257,829,4244,823,4210,806,4197,798,4178,786,4152,776,4104,758,4098,756,4027,723,4e3,711,3957,693,3918,693,3896,693,3884,699,3866,707,3840,711,3838,711,3837,711,L,3816,711,Q,3813,719,3797,720,3777,721,3772,724,3765,727,3751,727,3735,726,3732,727,3713,733,3700,751,3697,755,3676,791,3659,821,3650,832,3642,841,3636,852,3633,858,3628,872,3628,875,3625,883,3623,889,3618,891,3600,897,3593,901,3592,902,3591,902,3591,906,3590,913,3590,919,3594,924,3596,927,3599,935,3600,939,3601,943,3601,946,3600,949,3600,956,3599,968,3600,983,3604,993,3606,999,3606,1005,3607,1008,3607,1014,3607,1018,3611,1024,L,3619,1034,Q,3625,1042,3637,1051,3648,1060,3657,1063,3664,1066,3676,1077,3683,1083,3698,1096,3702,1100,3717,1111,3725,1117,3742,1135,3749,1141,3764,1149,3776,1156,3783,1161,3805,1178,3825,1189,3858,1205,3862,1213,L,3875,1222,Q,3884,1228,3889,1231,3910,1242,3921,1251,3924,1254,3930,1254,3937,1255,3940,1256,3946,1258,3954,1265,3959,1269,3970,1273,3981,1277,3987,1281,3997,1288,4017,1293,4021,1294,4034,1301,4048,1307,4056,1309,4080,1316,4136,1332,4138,1332,4145,1332,4150,1332,4154,1334,4160,1338,4178,1341,4180,1342,4190,1342,4199,1343,4202,1344,4206,1346,4221,1352,4225,1353,4238,1357,4250,1361,4256,1361,4260,1361,4265,1364,4272,1367,4275,1368,4279,1369,4287,1370,4293,1371,4296,1372,L,4316,1381,Q,4326,1384,4334,1384,4335,1384,4342,1387,4349,1390,4353,1390,4359,1391,4365,1391,4369,1391,4372,1393,4374,1394,4383,1398,4390,1400,4393,1404,4405,1416,4407,1418,4409,1421,4421,1433,4429,1442,4433,1448,4442,1459,4444,1464,4447,1471,4447,1484,4447,1494,4445,1501,4443,1509,4443,1527,4443,1547,4441,1555,4438,1563,4438,1574,L,4439,1581,Q,4439,1590,4440,1592,4442,1597,4444,1602,4446,1607,4445,1613,4444,1619,4450,1629,4452,1632,4454,1638,4456,1643,4457,1645,4462,1652,4474,1673,4479,1678,4488,1693,4497,1705,4502,1708,4526,1740,4536,1786,4543,1813,4549,1866,4555,1904,4555,1964,4555,1995,4555,2050,L,4555,2055,Q,4555,2063,4556,2082,4556,2105,4553,2113,4546,2129,4544,2136,4543,2142,4544,2156,L,4543,2195,Q,4543,2203,4546,2221,4550,2240,4550,2252,4550,2266,4555,2277,4557,2283,4558,2293,4558,2303,4560,2307,4579,2372,4587,2412,4606,2415,4617,2415,4688,2415,4711,2421,4748,2431,4840,2438,4872,2441,4983,2451,5065,2459,5065,2457,5086,2457,5140,2443,5167,2436,5189,2425,5195,2400,5218,2375,5233,2359,5256,2343,5278,2326,5292,2315,5306,2305,5312,2301,5318,2298,5327,2297,L,5345,2298,Q,5351,2297,5359,2296,5379,2293,5389,2293,5402,2293,5428,2293,5451,2293,5465,2291,5469,2291,5495,2285,5512,2282,5524,2282,L,5583,2282,Q,5607,2282,5620,2278,5633,2274,5647,2274,5673,2274,5719,2297,5772,2323,5801,2329,5807,2330,5880,2359,5948,2386,5965,2386,5983,2386,6008,2378,6027,2373,6043,2365,6044,2364,6045,2364,6065,2355,6144,2322,6214,2293,6246,2274,6257,2266,6267,2251,6278,2236,6286,2231,6292,2227,6304,2218,6314,2209,6318,2199,6328,2176,6327,2153,6326,2135,6329,2128,6329,2127,6336,2118,6339,2112,6340,2107,6340,2105,6340,2104,6340,2080,6351,2043,6354,2034,6356,2012,6357,1993,6362,1982,L,6377,1916,Q,6377,1908,6383,1885,6387,1866,6387,1856,L,6417,1698,Q,6430,1644,6437,1616,6446,1571,6447,1555,6448,1538,6448,1535,6447,1532,6451,1524,6454,1516,6453,1509,6452,1502,6456,1493,6461,1482,6463,1478,L,6464,1401,Q,6464,1384,6459,1325,6454,1265,6454,1253,L,6454,1213,6442,1213,6442,1206,6268,1206,Q,6235,1208,6186,1216,6139,1223,6111,1230,6086,1236,6074,1238,6054,1243,6035,1253,6020,1261,5997,1267,Q,5974,1272,5961,1274,Z]],label:"Dogubayazit",shortLabel:"DO",labelPosition:[537.7,178.5],labelAlignment:[CEN,MID]},"TR.AG.EL":{outlines:[[M,1861,207,Q,1842,216,1813,225,1780,236,1764,242,1753,244,1730,247,1709,249,1701,253,1690,258,1675,263,1656,268,1652,270,1633,277,1600,286,1552,299,1545,301,1526,306,1516,308,1500,312,1486,318,1479,322,1442,333,1440,333,1439,334,L,1422,334,Q,1411,341,1404,344,1403,344,1384,350,1378,351,1364,351,1350,351,1345,353,1316,362,1302,363,1268,366,1257,366,L,1252,365,1240,366,Q,1231,366,1226,365,1222,365,1216,361,1210,356,1207,356,1190,354,1181,354,1164,352,1154,349,1104,332,1075,323,1026,309,991,278,L,934,226,Q,927,226,913,243,897,265,895,266,887,271,881,288,876,303,863,308,851,327,819,344,781,360,768,368,743,383,708,399,663,419,654,424,634,434,591,460,547,487,534,494,475,527,464,530,461,531,410,531,L,371,531,Q,367,531,353,526,340,520,334,521,323,522,308,517,292,511,287,511,271,510,261,509,L,237,511,Q,169,514,134,512,111,511,57,555,55,556,54,557,51,562,46,569,41,577,41,586,41,593,39,629,37,643,42,647,46,652,66,665,76,673,80,687,86,701,97,712,116,729,147,752,149,753,193,783,209,793,248,816,256,821,276,826,300,831,309,835,323,840,340,843,366,846,370,847,373,847,395,856,413,863,420,865,421,865,422,865,434,866,449,872,480,878,485,882,492,886,496,886,502,885,503,885,505,886,523,894,532,896,554,905,556,906,568,906,579,906,582,908,604,922,611,924,637,929,668,946,694,959,724,972,737,978,746,995,758,1016,763,1021,787,1047,787,1150,787,1153,787,1201,787,1203,787,1206,787,1209,787,1212,793,1212,806,1208,819,1205,822,1205,832,1205,843,1205,852,1204,864,1198,870,1195,879,1195,884,1195,897,1196,903,1196,916,1190,929,1186,934,1187,939,1187,953,1182,969,1176,974,1176,983,1175,994,1175,1e3,1175,1010,1176,1015,1176,1028,1173,1035,1172,1045,1169,1050,1168,1079,1168,1100,1168,1128,1173,1155,1177,1182,1179,1184,1178,1231,1177,1258,1177,1277,1178,1287,1179,1326,1188,1362,1197,1375,1196,1379,1196,1395,1200,1410,1204,1416,1204,1429,1203,1459,1204,1461,1204,1479,1210,1496,1216,1503,1216,1510,1216,1525,1222,1541,1228,1548,1228,1566,1228,1590,1232,1618,1236,1632,1236,1663,1237,1722,1246,1727,1246,1740,1251,1753,1256,1761,1256,1773,1256,1788,1260,1803,1263,1809,1264,1814,1264,1816,1266,1818,1256,1831,1246,1838,1241,1851,1233,1860,1224,1869,1215,1877,1207,1888,1202,1922,1183,1970,1142,1992,1124,2008,1111,2021,1101,2023,1092,2023,1089,2028,1077,2033,1065,2033,1065,2033,1057,2038,1037,2043,1018,2043,1007,2042,1e3,2045,984,2048,971,2049,964,2049,962,2049,960,2052,939,2052,910,L,2050,881,Q,2050,869,2051,866,2052,861,2058,850,2062,843,2061,834,2061,824,2063,820,2067,808,2072,785,2078,762,2080,756,2082,753,2087,746,2090,739,2090,731,2090,724,2095,715,2101,704,2102,703,2107,673,2126,649,2127,648,2129,646,2148,625,2177,572,2215,503,2220,496,2241,463,2240,412,2236,362,2237,338,2237,336,2237,333,L,2238,288,Q,2238,274,2224,259,L,2204,238,Q,2191,216,2158,205,2152,203,2143,198,2135,194,2125,191,2119,189,2110,183,2102,176,2099,174,2091,167,2070,159,L,2056,152,Q,2053,150,2047,151,2042,151,2039,147,2034,149,2029,150,2014,156,1973,171,1957,177,1919,187,Q,1888,195,1861,207,Z]],label:"Eleskirt",shortLabel:"EL",labelPosition:[131.4,79.4],labelAlignment:[CEN,MID]},"TR.AG.HA":{outlines:[[M,2435,1292,Q,2432,1292,2423,1288,2414,1284,2411,1284,L,2372,1284,Q,2343,1284,2331,1284,2320,1283,2306,1283,2300,1283,2294,1279,2288,1275,2283,1275,L,2257,1275,Q,2257,1271,2243,1273,2227,1275,2212,1284,2202,1288,2188,1288,2173,1287,2166,1287,2137,1286,2126,1288,2102,1294,2085,1294,2067,1294,2061,1292,2048,1286,2036,1284,2022,1281,2001,1281,1982,1283,1980,1283,1973,1283,1970,1285,1963,1289,1957,1292,1954,1293,1943,1293,1931,1293,1928,1293,1925,1294,1905,1301,1890,1306,1879,1304,L,1876,1304,Q,1869,1308,1864,1314,1862,1316,1856,1316,1850,1316,1845,1313,1849,1316,1853,1325,1856,1334,1858,1340,1860,1348,1861,1353,1862,1359,1872,1361,1880,1364,1891,1370,1902,1377,1935,1396,1968,1414,2006,1434,2044,1454,2074,1475,2105,1496,2118,1505,2130,1511,2139,1520,2145,1526,2157,1537,2165,1544,2165,1558,2165,1569,2172,1576,2179,1584,2179,1584,L,2178,1596,Q,2178,1600,2171,1608,2168,1613,2164,1625,2159,1637,2157,1640,2147,1654,2147,1671,2147,1682,2148,1706,2148,1740,2150,1751,2151,1760,2154,1774,2155,1778,2162,1784,2167,1789,2167,1792,2167,1795,2161,1806,2160,1808,2156,1812,2152,1816,2151,1818,2143,1839,2135,1843,2115,1848,2104,1856,2092,1865,2087,1869,2079,1874,2066,1879,2057,1881,2041,1892,2027,1901,2013,1903,2008,1904,1998,1910,1989,1915,1985,1918,1978,1924,1965,1929,1961,1931,1961,1939,1961,1945,1963,1956,1965,1968,1965,1975,1966,1982,1965,1996,1964,2009,1969,2016,1973,2023,1973,2038,1973,2046,1973,2065,1973,2073,1980,2089,1985,2099,1985,2107,1985,2108,1985,2110,1985,2145,1984,2163,1977,2186,1973,2196,1972,2199,1972,2225,1972,2257,1985,2289,1989,2298,2017,2354,2024,2369,2051,2414,2053,2419,2056,2428,2060,2436,2066,2440,2071,2443,2072,2453,2074,2463,2077,2466,2079,2464,2081,2463,2100,2446,2116,2431,2133,2415,2147,2403,2161,2390,2168,2390,2175,2391,2190,2384,2194,2383,2210,2383,2227,2383,2232,2384,2248,2387,2269,2390,2280,2391,2296,2398,2315,2407,2321,2409,2343,2414,2373,2427,2410,2443,2432,2460,2444,2470,2481,2493,2510,2512,2523,2525,2531,2534,2545,2544,2553,2550,2573,2563,2578,2566,2595,2580,2608,2590,2615,2594,2621,2594,2626,2593,2626,2593,2652,2588,2670,2585,2678,2585,2699,2586,2730,2574,2748,2567,2780,2553,2827,2534,2833,2529,2839,2524,2844,2513,2848,2503,2862,2489,2875,2475,2881,2462,2886,2449,2892,2440,2895,2435,2900,2427,2901,2361,2900,2332,2899,2324,2906,2309,2913,2294,2913,2285,L,2913,2236,Q,2916,2202,2912,2179,2910,2172,2906,2162,2903,2155,2904,2146,2904,2135,2903,2121,2903,2120,2903,2118,2903,2118,2903,2117,2903,2113,2904,2105,2906,2090,2906,2087,2906,2078,2900,2053,2894,2029,2890,2021,2883,2002,2881,1989,2881,1983,2876,1973,2873,1963,2873,1959,2873,1950,2870,1929,2865,1904,2864,1895,2861,1869,2857,1859,2854,1851,2854,1836,2854,1817,2857,1809,L,2862,1798,Q,2864,1794,2864,1789,2864,1787,2865,1786,2877,1743,2884,1719,2898,1672,2908,1648,2908,1646,2909,1645,2882,1640,2836,1615,2783,1587,2759,1575,2733,1564,2721,1558,2699,1547,2685,1536,2680,1532,2666,1505,2652,1477,2652,1468,2652,1461,2658,1454,2661,1450,2669,1441,2673,1435,2673,1425,2674,1417,2674,1413,2674,1410,2674,1408,2677,1400,2686,1387,2696,1373,2693,1352,2693,1348,2694,1339,2696,1331,2697,1326,2699,1319,2699,1294,2699,1278,2698,1275,2696,1270,2684,1264,2683,1263,2676,1257,2673,1254,2668,1254,L,2652,1253,Q,2649,1253,2632,1268,2615,1284,2611,1286,2609,1287,2582,1312,2579,1314,2559,1314,2535,1314,2532,1312,2519,1303,2504,1304,2498,1304,2473,1296,Q,2451,1289,2435,1292,Z]],label:"Hamur",shortLabel:"HA",labelPosition:[241.5,199.4],labelAlignment:[CEN,MID]},"TR.AG.PA":{outlines:[[M,2373,2427,Q,2343,2414,2321,2409,2315,2407,2296,2398,2280,2391,2269,2390,2248,2387,2232,2384,2227,2383,2210,2383,2194,2383,2190,2384,2175,2391,2168,2390,2161,2390,2147,2403,2133,2415,2116,2431,2100,2446,2081,2463,2079,2464,2077,2466,2060,2481,2045,2502,2029,2525,2016,2532,2005,2541,2001,2543,1992,2549,1982,2550,1943,2553,1943,2553,L,1920,2553,Q,1915,2560,1884,2560,L,1861,2560,Q,1858,2560,1851,2556,1845,2553,1842,2553,L,1792,2553,Q,1782,2553,1770,2548,1758,2544,1749,2544,1718,2546,1706,2537,1702,2533,1686,2533,1665,2533,1656,2531,1655,2531,1634,2524,1623,2521,1611,2522,1592,2523,1568,2518,1558,2516,1538,2516,1524,2517,1520,2518,1520,2516,1496,2518,1474,2520,1454,2523,1451,2523,1419,2523,1396,2523,1387,2529,1383,2531,1371,2533,1361,2536,1358,2538,1351,2543,1336,2555,1325,2563,1307,2576,1285,2592,1282,2596,1279,2599,1259,2618,1243,2633,1238,2640,1234,2646,1222,2668,1213,2686,1204,2693,1193,2702,1184,2716,1178,2725,1168,2742,1164,2747,1154,2764,1145,2778,1140,2786,1148,2793,1155,2796,1168,2800,1175,2806,1183,2814,1186,2816,1203,2828,1211,2828,1222,2829,1230,2842,1233,2845,1242,2846,1254,2848,1260,2851,1281,2860,1284,2891,1286,2912,1302,2950,1317,2985,1322,3006,1322,3008,1323,3011,1324,3023,1331,3044,1337,3057,1347,3081,1352,3096,1363,3121,1374,3147,1375,3158,1375,3169,1386,3195,1397,3221,1401,3240,1403,3246,1408,3261,1412,3273,1412,3278,1412,3289,1416,3302,1419,3310,1420,3315,1421,3318,1421,3320,1419,3378,1427,3425,1433,3451,1440,3481,1446,3512,1446,3531,1445,3541,1450,3557,1456,3572,1455,3582,1454,3589,1460,3607,1467,3624,1467,3632,L,1467,3632,1468,3638,Q,1467,3643,1466,3648,1466,3660,1469,3664,1475,3674,1478,3681,1492,3672,1510,3663,1538,3649,1544,3647,1550,3644,1588,3624,1627,3603,1636,3600,1644,3598,1647,3596,1652,3593,1662,3586,1671,3581,1678,3578,1687,3573,1712,3563,1746,3550,1755,3550,L,1806,3552,Q,1807,3552,1821,3551,1837,3550,1848,3551,1854,3551,1872,3547,1889,3542,1893,3542,1907,3543,1931,3532,1955,3522,1970,3522,1975,3522,1989,3519,2004,3515,2008,3514,2026,3512,2048,3503,2059,3499,2084,3495,2106,3490,2117,3486,2118,3485,2119,3485,2130,3481,2151,3477,2175,3473,2189,3470,2202,3466,2218,3459,2230,3454,2246,3444,2262,3434,2281,3419,2300,3405,2303,3399,2305,3394,2332,3383,2358,3372,2365,3367,2377,3358,2395,3356,2398,3356,2437,3357,2476,3358,2485,3358,2493,3356,2535,3345,2575,3333,2604,3314,2616,3307,2621,3304,2632,3297,2636,3293,2641,3289,2642,3277,2643,3264,2644,3258,2644,3248,2646,3240,2648,3229,2657,3214,2662,3205,2663,3199,2664,3192,2664,3184,2665,3176,2665,3157,2665,3147,2665,3137,2665,3128,2667,3113,2669,3099,2670,3074,2670,3049,2671,3036,2673,3022,2673,2976,L,2673,2973,Q,2673,2971,2673,2969,2674,2948,2679,2937,2684,2925,2684,2910,2684,2888,2670,2879,2650,2872,2639,2863,2610,2842,2571,2820,2566,2817,2560,2816,2554,2815,2552,2815,2547,2814,2533,2804,2511,2790,2502,2784,2456,2759,2443,2735,2443,2734,2442,2732,2439,2729,2431,2722,2418,2712,2416,2704,2413,2696,2421,2662,2429,2628,2430,2619,2454,2611,2485,2604,2524,2597,2554,2596,2560,2596,2592,2595,2606,2594,2615,2594,2608,2590,2595,2580,2578,2566,2573,2563,2553,2550,2545,2544,2531,2534,2523,2525,2510,2512,2481,2493,2444,2470,2432,2460,Q,2410,2443,2373,2427,Z]],label:"Patnos",shortLabel:"PA",labelPosition:[191.2,303.2],labelAlignment:[CEN,MID]},"TR.AG.TA":{outlines:[[M,3676,1077,Q,3664,1066,3657,1063,3648,1060,3637,1051,3625,1042,3619,1034,L,3611,1024,Q,3607,1018,3607,1014,3607,1008,3606,1005,3606,999,3604,993,3600,983,3599,968,3600,956,3600,949,3601,946,3601,943,3600,939,3599,935,3596,927,3594,924,3590,919,3590,913,3591,906,3591,902,3578,911,3573,913,3565,917,3554,917,3550,917,3527,910,3501,901,3492,897,3491,896,3458,883,3434,874,3424,863,3419,857,3398,843,3375,826,3370,821,3346,799,3345,797,3343,794,3342,791,3338,797,3337,808,3337,819,3330,825,3326,830,3320,843,3315,854,3313,864,3311,869,3308,886,3307,898,3301,909,3291,927,3287,933,3283,942,3280,952,3280,953,3280,955,3280,961,3280,971,3279,984,3280,994,3281,1e3,3276,1013,3272,1027,3272,1031,L,3272,1072,Q,3259,1079,3226,1111,3184,1153,3169,1172,3166,1175,3158,1190,3147,1208,3144,1212,3134,1222,3130,1227,3123,1236,3120,1249,3075,1315,3042,1382,3034,1396,3020,1421,3007,1443,3001,1456,2995,1467,2984,1492,2974,1512,2966,1524,2962,1536,2951,1553,2939,1571,2936,1582,2930,1600,2909,1645,2908,1646,2908,1648,2898,1672,2884,1719,2877,1743,2865,1786,2864,1787,2864,1789,2864,1794,2862,1798,L,2857,1809,Q,2854,1817,2854,1836,2854,1851,2857,1859,2861,1869,2864,1895,2865,1904,2870,1929,2873,1950,2873,1959,2873,1963,2876,1973,2881,1983,2881,1989,2883,2002,2890,2021,2894,2029,2900,2053,2906,2078,2906,2087,2906,2090,2904,2105,2903,2113,2903,2117,2903,2118,2903,2118,2903,2120,2903,2121,2904,2135,2904,2146,2903,2155,2906,2162,2910,2172,2912,2179,2916,2202,2913,2236,L,2913,2285,Q,2913,2294,2906,2309,2899,2324,2900,2332,2901,2361,2900,2427,2906,2416,2916,2400,2928,2378,2944,2365,2954,2356,2974,2334,2992,2315,3006,2313,3008,2312,3026,2314,3041,2315,3053,2309,3057,2307,3075,2305,3091,2304,3106,2304,3106,2302,3106,2303,L,3107,2303,Q,3109,2301,3124,2301,3146,2301,3175,2307,3185,2309,3210,2310,L,3211,2310,Q,3214,2296,3224,2280,3236,2255,3244,2246,3247,2241,3253,2229,3258,2218,3263,2212,3266,2208,3273,2196,3279,2183,3282,2179,3313,2130,3326,2115,3340,2100,3344,2096,3348,2092,3350,2090,3352,2088,3355,2083,3359,2077,3365,2071,3371,2065,3372,2059,3375,2056,3383,2045,3383,2045,3387,2041,3390,2036,3390,2032,3391,2026,3399,2019,3403,2015,3413,2008,3416,2005,3421,1999,3426,1994,3430,1992,3432,1990,3436,1989,3442,1988,3446,1986,3452,1983,3459,1974,3463,1969,3469,1961,3470,1960,3474,1952,3478,1947,3480,1946,3482,1944,3486,1944,3492,1944,3494,1943,3518,1932,3517,1916,3515,1902,3521,1893,3526,1883,3525,1875,3524,1857,3529,1853,3534,1849,3534,1838,3534,1831,3530,1822,3526,1815,3526,1805,L,3525,1791,Q,3525,1779,3525,1778,3522,1773,3517,1761,3515,1752,3514,1748,3511,1740,3508,1737,3505,1734,3504,1726,3503,1718,3502,1715,3499,1706,3496,1701,3495,1699,3495,1692,3495,1685,3496,1683,3497,1682,3503,1671,3505,1669,3509,1660,3511,1654,3514,1650,3515,1648,3520,1642,3524,1636,3524,1632,3523,1629,3527,1623,3532,1614,3533,1611,3536,1602,3552,1592,3562,1587,3578,1580,3582,1577,3595,1567,3597,1566,3605,1561,3610,1559,3612,1556,3613,1555,3614,1554,3620,1548,3632,1543,3657,1532,3659,1531,3661,1529,3681,1517,3683,1515,3692,1511,3701,1507,3703,1506,3706,1505,3728,1497,3742,1492,3751,1487,3756,1484,3760,1477,3765,1470,3768,1467,L,3785,1451,Q,3788,1447,3800,1434,3811,1422,3817,1419,3822,1416,3824,1411,3825,1409,3827,1401,3828,1397,3838,1382,3840,1378,3853,1364,3864,1348,3867,1345,3870,1341,3873,1333,3876,1325,3879,1322,3884,1316,3891,1303,3892,1302,3893,1302,3897,1299,3900,1291,3903,1281,3906,1277,3907,1274,3915,1264,3920,1256,3921,1251,3910,1242,3889,1231,3884,1228,3875,1222,L,3862,1213,Q,3858,1205,3825,1189,3805,1178,3783,1161,3776,1156,3764,1149,3749,1141,3742,1135,3725,1117,3717,1111,3702,1100,3698,1096,Q,3683,1083,3676,1077,Z]],label:"Tasliçay",shortLabel:"TA",labelPosition:[323,160.9],labelAlignment:[CEN,MID]},"TR.AG.TU":{outlines:[[M,1840,1305,Q,1832,1289,1830,1287,1819,1275,1818,1274,1817,1269,1816,1267,L,1816,1266,Q,1814,1264,1809,1264,1803,1263,1788,1260,1773,1256,1761,1256,1753,1256,1740,1251,1727,1246,1722,1246,1663,1237,1632,1236,1618,1236,1590,1232,1566,1228,1548,1228,1541,1228,1525,1222,1510,1216,1503,1216,1496,1216,1479,1210,1461,1204,1459,1204,1429,1203,1416,1204,1410,1204,1395,1200,1379,1196,1375,1196,1362,1197,1326,1188,1287,1179,1277,1178,1258,1177,1231,1177,1184,1178,1182,1179,1155,1177,1128,1173,1100,1168,1079,1168,1050,1168,1045,1169,1035,1172,1028,1173,1015,1176,1010,1176,1e3,1175,994,1175,983,1175,974,1176,969,1176,953,1182,939,1187,934,1187,929,1186,916,1190,903,1196,897,1196,884,1195,879,1195,870,1195,864,1198,852,1204,843,1205,832,1205,822,1205,819,1205,806,1208,793,1212,787,1212,787,1264,789,1299,791,1326,797,1344,800,1356,800,1390,L,800,1563,Q,800,1575,804,1587,810,1600,811,1607,812,1621,811,1656,L,811,1695,Q,812,1704,808,1713,807,1718,802,1728,800,1747,797,1761,793,1776,782,1803,778,1813,761,1839,744,1864,742,1872,738,1882,703,1944,672,1997,672,2016,672,2023,675,2028,677,2032,677,2041,677,2042,677,2044,680,2068,688,2084,696,2102,716,2144,736,2185,748,2209,759,2234,780,2287,801,2341,819,2370,820,2371,821,2373,839,2409,878,2457,901,2485,942,2536,980,2582,998,2608,1015,2635,1036,2660,1057,2685,1065,2695,1065,2695,1066,2696,1074,2705,1081,2715,1087,2726,1095,2734,1104,2743,1123,2767,1132,2779,1140,2786,1145,2778,1154,2764,1164,2747,1168,2742,1178,2725,1184,2716,1193,2702,1204,2693,1213,2686,1222,2668,1234,2646,1238,2640,1243,2633,1259,2618,1279,2599,1282,2596,1285,2592,1307,2576,1325,2563,1336,2555,1351,2543,1358,2538,1361,2536,1371,2533,1383,2531,1387,2529,1396,2523,1419,2523,1451,2523,1454,2523,1474,2520,1496,2518,1520,2516,1520,2518,1524,2517,1538,2516,1558,2516,1568,2518,1592,2523,1611,2522,1623,2521,1634,2524,1655,2531,1656,2531,1665,2533,1686,2533,1702,2533,1706,2537,1718,2546,1749,2544,1758,2544,1770,2548,1782,2553,1792,2553,L,1842,2553,Q,1845,2553,1851,2556,1858,2560,1861,2560,L,1884,2560,Q,1915,2560,1920,2553,L,1943,2553,Q,1943,2553,1982,2550,1992,2549,2001,2543,2005,2541,2016,2532,2029,2525,2045,2502,2060,2481,2077,2466,2074,2463,2072,2453,2071,2443,2066,2440,2060,2436,2056,2428,2053,2419,2051,2414,2024,2369,2017,2354,1989,2298,1985,2289,1972,2257,1972,2225,1972,2199,1973,2196,1977,2186,1984,2163,1985,2145,1985,2110,1985,2108,1985,2107,1985,2099,1980,2089,1973,2073,1973,2065,1973,2046,1973,2038,1973,2023,1969,2016,1964,2009,1965,1996,1966,1982,1965,1975,1965,1968,1963,1956,1961,1945,1961,1939,1961,1931,1965,1929,1978,1924,1985,1918,1989,1915,1998,1910,2008,1904,2013,1903,2027,1901,2041,1892,2057,1881,2066,1879,2079,1874,2087,1869,2092,1865,2104,1856,2115,1848,2135,1843,2143,1839,2151,1818,2152,1816,2156,1812,2160,1808,2161,1806,2167,1795,2167,1792,2167,1789,2162,1784,2155,1778,2154,1774,2151,1760,2150,1751,2148,1740,2148,1706,2147,1682,2147,1671,2147,1654,2157,1640,2159,1637,2164,1625,2168,1613,2171,1608,2178,1600,2178,1596,L,2179,1584,Q,2179,1584,2172,1576,2165,1569,2165,1558,2165,1544,2157,1537,2145,1526,2139,1520,2130,1511,2118,1505,2105,1496,2074,1475,2044,1454,2006,1434,1968,1414,1935,1396,1902,1377,1891,1370,1880,1364,1872,1361,1862,1359,1861,1353,1860,1348,1858,1340,1856,1334,1853,1325,1849,1316,1845,1313,Q,1842,1310,1840,1305,Z]],label:"Tutak",shortLabel:"TU",labelPosition:[142.5,197.7],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"agri",type:"maps"}}})});