(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=18)})({18:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(19);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},19:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Pemagatshel.1.06-18-2019 09:36:33
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Pemagatshel",revision:1,creditLabel:false,standaloneInit:false,baseWidth:600,baseHeight:488,baseScaleFactor:10,firstEntity:"BT.PM.CM",entities:{"BT.PM.CM":{outlines:[[M,3622,1216,Q,3606,1222,3590,1222,3574,1222,3565,1222,L,3437,1222,Q,3429,1222,3416,1231,3399,1244,3398,1244,3395,1245,3376,1245,3362,1245,3360,1251,3355,1262,3350,1276,3344,1286,3334,1292,3320,1299,3311,1307,3300,1315,3292,1320,3284,1325,3268,1325,3251,1325,3247,1326,3242,1328,3229,1337,3217,1345,3209,1346,3183,1348,3165,1370,3154,1381,3131,1397,3103,1415,3096,1422,3062,1446,3058,1450,3034,1470,3014,1469,3011,1468,3009,1468,2925,1465,2887,1465,2868,1465,2849,1478,2828,1497,2815,1506,2787,1524,2774,1526,2737,1526,2735,1528,2711,1547,2692,1547,2663,1545,2633,1547,L,2605,1546,Q,2589,1546,2583,1550,L,2567,1561,Q,2550,1563,2548,1577,2542,1601,2547,1686,2547,1703,2543,1709,2541,1713,2528,1725,2520,1731,2506,1739,2486,1749,2483,1751,2482,1752,2469,1764,2461,1770,2449,1770,2442,1769,2435,1783,2429,1794,2426,1808,2426,1814,2426,1854,2426,1879,2423,1899,L,2423,1918,Q,2424,1918,2460,1922,2476,1924,2477,1938,2477,1952,2485,1967,2495,1986,2497,1994,2499,2001,2499,2056,2500,2104,2509,2121,2515,2133,2526,2150,2527,2156,2527,2165,2527,2172,2532,2177,2538,2183,2550,2204,2560,2223,2568,2228,L,2722,2231,2722,2203,Q,2722,2184,2722,2172,2722,2152,2715,2147,2699,2136,2700,2122,2700,2104,2693,2094,2691,2091,2690,2082,2688,2070,2687,2067,2685,2063,2676,2057,2664,2049,2662,2047,2660,2044,2660,2022,2660,2013,2654,2008,2649,2003,2649,1996,2649,1991,2653,1986,2659,1980,2660,1974,L,2660,1939,Q,2659,1930,2663,1926,2665,1924,2674,1918,2681,1914,2682,1907,2684,1898,2686,1890,2688,1883,2703,1872,2721,1858,2725,1853,2723,1847,2728,1841,2732,1838,2737,1834,2743,1823,2747,1805,L,2845,1805,Q,2867,1822,2897,1826,2906,1827,2927,1824,2945,1824,2953,1839,2955,1844,2975,1894,2988,1928,2999,1946,L,3031,1998,Q,3036,2008,3054,2017,3080,2029,3084,2032,3100,2043,3124,2082,3125,2083,3148,2103,3164,2117,3170,2129,3179,2139,3200,2156,3221,2173,3230,2186,3239,2199,3309,2191,L,3309,2194,Q,3336,2184,3338,2144,L,3404,2144,Q,3421,2144,3428,2132,3436,2118,3444,2116,3466,2108,3478,2106,3486,2104,3493,2095,3502,2084,3505,2082,3510,2078,3513,2069,3516,2060,3528,2053,3536,2048,3538,2044,3539,2040,3539,2031,3539,2027,3535,1997,L,3535,1996,Q,3496,1991,3484,1972,3477,1963,3461,1957,3447,1952,3438,1952,3438,1947,3443,1945,L,3450,1940,Q,3453,1936,3453,1922,3453,1906,3446,1899,3436,1888,3430,1870,3424,1852,3418,1845,3414,1840,3404,1834,3395,1828,3395,1826,3396,1804,3394,1794,3392,1778,3379,1770,3368,1763,3368,1746,3370,1731,3370,1721,3369,1719,3369,1716,3368,1702,3381,1682,3389,1669,3408,1643,3424,1617,3456,1572,3491,1515,3501,1502,3503,1500,3532,1470,3535,1465,3548,1463,3563,1461,3568,1457,3575,1452,3601,1428,3622,1409,3640,1397,3645,1394,3656,1392,3666,1390,3677,1380,L,3710,1353,Q,3712,1352,3728,1350,3740,1348,3746,1344,3762,1334,3785,1312,3789,1309,3798,1298,3806,1288,3813,1284,3821,1278,3842,1268,3829,1268,3821,1261,3813,1253,3793,1249,3774,1244,3768,1237,3760,1229,3741,1228,3706,1227,3703,1227,3692,1225,3681,1209,3672,1194,3659,1192,Q,3640,1208,3622,1216,Z]],label:"Chhimung Gewog",shortLabel:"CM",labelPosition:[313.2,171.1],labelAlignment:[CEN,MID],nextId:"BT.PM.CH"},"BT.PM.CH":{outlines:[[M,3604,3048,Q,3595,3075,3573,3081,3565,3083,3557,3090,3547,3099,3540,3104,3530,3112,3519,3112,3507,3111,3499,3111,3496,3111,3494,3111,3486,3112,3477,3118,3468,3127,3467,3136,3466,3148,3463,3155,3460,3160,3449,3176,L,3450,3258,Q,3450,3301,3451,3310,3451,3329,3461,3335,3467,3339,3467,3364,3467,3378,3466,3381,3464,3385,3455,3394,3441,3407,3431,3420,3425,3426,3426,3438,3426,3444,3427,3460,3426,3475,3421,3479,3415,3483,3415,3492,3415,3499,3422,3514,3428,3529,3428,3544,3428,3563,3426,3566,3418,3575,3406,3593,3393,3606,3388,3612,3379,3622,3379,3643,3379,3649,3385,3667,3388,3676,3390,3681,3391,3686,3392,3688,L,3392,3715,Q,3378,3726,3370,3739,3363,3748,3353,3769,3342,3791,3339,3804,3335,3832,3332,3838,3327,3845,3319,3850,3311,3856,3307,3859,3300,3865,3296,3868,3291,3873,3282,3874,L,3250,3874,3241,3916,Q,3235,3920,3215,3917,3197,3915,3195,3921,3188,3939,3187,3967,3186,3983,3187,4012,L,3177,4013,Q,3175,4013,3167,4006,3158,4e3,3156,3996,3147,3983,3134,3978,3133,3978,3118,3976,3110,3975,3105,3967,L,3085,3938,Q,3074,3920,3065,3913,3059,3908,3049,3908,3038,3909,3032,3909,3020,3909,3014,3908,3005,3907,3001,3903,2999,3900,2997,3894,2996,3890,2991,3888,2988,3886,2979,3887,2971,3888,2971,3887,2966,3887,2962,3887,2945,3888,2941,3893,2937,3898,2914,3926,2910,3929,2906,3944,2903,3958,2901,3960,L,2890,3967,Q,2885,3970,2883,3974,2877,3986,2868,4e3,2862,4010,2862,4020,2862,4041,2886,4089,2908,4135,2906,4158,2901,4198,2907,4233,2908,4238,2926,4256,2943,4273,2942,4297,2938,4357,2940,4448,2941,4499,2942,4596,2955,4604,2968,4613,3147,4720,3317,4745,3417,4759,3748,4758,3751,4758,3754,4758,3828,4758,3972,4748,4023,4747,4062,4693,4104,4620,4131,4583,4156,4549,4199,4471,4248,4383,4270,4348,4412,4147,4412,4132,4412,4121,4355,4092,4342,4085,4336,4071,4330,4055,4325,4051,4306,4036,4281,4011,4257,3987,4253,3976,L,4241,3975,4218,3977,Q,4217,3996,4217,4012,4214,4018,4191,4018,4174,4018,4168,4017,4157,4014,4149,4003,4141,3982,4138,3978,4136,3973,4114,3973,4045,3973,4016,3976,4009,3976,3999,3978,3997,3978,3995,3982,L,3993,3988,Q,3985,3996,3956,3990,3913,3990,3899,3984,3889,3979,3885,3976,3876,3972,3869,3972,L,3843,3972,Q,3820,3976,3794,3957,3790,3954,3782,3953,3772,3952,3769,3950,3754,3934,3744,3934,3729,3934,3712,3923,3694,3911,3689,3911,3656,3908,3634,3893,3628,3889,3620,3875,3611,3862,3603,3856,3600,3854,3582,3827,3577,3820,3571,3818,3568,3817,3568,3808,L,3569,3752,Q,3571,3746,3579,3733,3591,3714,3590,3708,3586,3684,3611,3662,3622,3653,3638,3639,3650,3628,3657,3616,3659,3612,3668,3606,3675,3602,3675,3598,L,3675,3565,Q,3675,3539,3673,3525,L,3673,3511,Q,3680,3509,3696,3506,3710,3503,3718,3493,3720,3490,3739,3477,3753,3468,3752,3451,3752,3441,3762,3423,3773,3404,3773,3402,3774,3394,3774,3355,3774,3351,3775,3348,3776,3309,3738,3281,L,3663,3211,Q,3646,3201,3640,3197,3628,3190,3629,3180,3629,3168,3622,3154,3612,3133,3610,3128,L,3605,3045,Q,3605,3046,3604,3048,Z]],label:"Choekhorling Gewog",shortLabel:"CH",labelPosition:[352.9,431.6],labelAlignment:[CEN,MID],nextId:"BT.PM.DE"},"BT.PM.DE":{outlines:[[M,3114,2700,Q,3108,2690,3106,2685,3106,2683,3103,2666,L,3094,2666,Q,3092,2667,3071,2666,3058,2666,3053,2681,3051,2686,3038,2688,3022,2689,3014,2697,2980,2713,2971,2726,2959,2741,2956,2743,2951,2746,2933,2746,2916,2746,2909,2738,2902,2731,2877,2730,2876,2730,2875,2730,2873,2730,2872,2729,2847,2721,2834,2738,2828,2744,2815,2746,2800,2749,2797,2751,2779,2765,2764,2771,2737,2777,2730,2782,L,2656,2805,Q,2632,2828,2627,2831,2622,2833,2597,2833,2570,2833,2565,2828,2547,2810,2533,2810,L,2489,2810,Q,2479,2809,2474,2800,2468,2792,2459,2791,2419,2786,2394,2763,2382,2751,2363,2749,2361,2749,2316,2749,2288,2749,2283,2750,2273,2752,2255,2765,2245,2771,2224,2770,2202,2769,2180,2769,L,2177,2769,Q,2170,2768,2147,2769,2109,2770,2099,2768,2090,2766,2074,2752,2059,2739,2046,2739,2030,2739,2016,2690,2013,2680,2013,2660,L,2013,2634,1985,2647,Q,1967,2666,1963,2666,1951,2666,1940,2675,1929,2682,1920,2696,1907,2712,1896,2712,L,1895,2739,Q,1895,2741,1899,2769,1899,2770,1910,2786,1915,2793,1917,2800,1918,2803,1919,2806,1920,2814,1921,2828,1923,2846,1932,2857,1938,2866,1940,2890,1940,2896,1948,2904,1957,2913,1958,2919,1958,2920,1958,2933,1958,2942,1960,2947,L,1974,2977,Q,1979,2993,1979,3037,1983,3065,1970,3072,1963,3075,1954,3088,1940,3092,1933,3092,L,1895,3093,Q,1889,3093,1877,3103,1866,3111,1858,3107,1857,3115,1856,3149,1854,3181,1848,3193,1835,3214,1838,3235,1840,3251,1822,3275,1820,3277,1818,3279,1806,3296,1785,3317,1777,3325,1777,3354,1777,3387,1789,3405,1801,3424,1801,3449,L,1799,3550,Q,1761,3595,1757,3633,L,1772,3665,Q,1774,3668,1776,3684,1778,3696,1786,3705,1787,3707,1802,3736,1815,3762,1824,3767,L,1858,3783,Q,1865,3787,1897,3790,1904,3791,1913,3801,1922,3810,1926,3811,1934,3812,1960,3811,1975,3810,1980,3811,1982,3811,1982,3812,2009,3812,2017,3811,2034,3808,2045,3797,2051,3791,2058,3792,2068,3793,2075,3790,L,2107,3775,Q,2167,3781,2229,3737,2243,3726,2285,3705,2290,3702,2297,3688,2303,3677,2320,3676,2342,3674,2376,3649,2396,3631,2400,3628,2402,3627,2428,3627,2455,3627,2458,3633,2465,3646,2492,3658,2507,3665,2521,3676,2547,3697,2553,3701,2561,3707,2583,3718,2602,3730,2602,3750,2602,3754,2601,3783,2602,3811,2612,3811,2643,3811,2655,3801,2672,3781,2693,3762,2701,3753,2716,3753,2724,3752,2743,3752,2745,3752,2750,3747,2756,3741,2762,3738,2771,3734,2775,3731,2777,3730,2787,3730,L,2788,3730,Q,2792,3728,2823,3733,2839,3735,2852,3746,L,2873,3768,Q,2876,3771,2884,3774,2893,3778,2901,3786,2906,3791,2912,3802,2917,3811,2922,3814,2927,3817,2938,3822,2948,3827,2947,3835,L,2962,3887,Q,2966,3887,2971,3887,2971,3888,2979,3887,2988,3886,2991,3888,2996,3890,2997,3894,2999,3900,3001,3903,3005,3907,3014,3908,3020,3909,3032,3909,3038,3909,3049,3908,3059,3908,3065,3913,3074,3920,3085,3938,L,3105,3967,Q,3110,3975,3118,3976,3133,3978,3134,3978,3147,3983,3156,3996,3158,4e3,3167,4006,3175,4013,3177,4013,L,3187,4012,Q,3186,3983,3187,3967,3188,3939,3195,3921,3197,3915,3215,3917,3235,3920,3241,3916,L,3250,3874,3282,3874,Q,3291,3873,3296,3868,3300,3865,3307,3859,3311,3856,3319,3850,3327,3845,3332,3838,3335,3832,3339,3804,3342,3791,3353,3769,3363,3748,3370,3739,3378,3726,3392,3715,L,3392,3688,Q,3391,3686,3390,3681,3388,3676,3385,3667,3379,3649,3379,3643,3379,3622,3388,3612,3393,3606,3406,3593,3418,3575,3426,3566,3428,3563,3428,3544,3428,3529,3422,3514,3415,3499,3415,3492,3415,3483,3421,3479,3426,3475,3427,3460,3426,3444,3426,3438,3425,3426,3431,3420,3441,3407,3455,3394,3464,3385,3466,3381,3467,3378,3467,3364,3467,3339,3461,3335,3451,3329,3451,3310,3450,3301,3450,3258,L,3449,3176,Q,3460,3160,3463,3155,3466,3148,3467,3136,3468,3127,3477,3118,3486,3112,3494,3111,3491,3110,3484,3100,3476,3091,3468,3089,3462,3087,3428,3087,3410,3087,3403,3087,3393,3087,3384,3090,3368,3094,3364,3099,3362,3102,3351,3102,3344,3102,3339,3098,3333,3093,3328,3091,3324,3089,3292,3089,3276,3087,3268,3076,3261,3062,3255,3054,3241,3037,3236,3029,3228,3017,3228,3007,L,3228,2950,Q,3230,2924,3205,2890,3175,2852,3163,2833,3161,2830,3153,2824,3149,2821,3148,2814,3144,2794,3140,2789,3127,2770,3128,2761,3129,2752,3127,2733,Q,3117,2705,3114,2700,Z]],label:"Dechenling Gewog",shortLabel:"DE",labelPosition:[262.5,327],labelAlignment:[CEN,MID],nextId:"BT.PM.DM"},"BT.PM.DM":{outlines:[[M,2999,1946,Q,2988,1928,2975,1894,2955,1844,2953,1839,2945,1824,2927,1824,2906,1827,2897,1826,2867,1822,2845,1805,L,2747,1805,Q,2743,1823,2737,1834,2732,1838,2728,1841,2723,1847,2725,1853,2721,1858,2703,1872,2688,1883,2686,1890,2684,1898,2682,1907,2681,1914,2674,1918,2665,1924,2663,1926,2659,1930,2660,1939,L,2660,1974,Q,2659,1980,2653,1986,2649,1991,2649,1996,2649,2003,2654,2008,2660,2013,2660,2022,2660,2044,2662,2047,2664,2049,2676,2057,2685,2063,2687,2067,2688,2070,2690,2082,2691,2091,2693,2094,2700,2104,2700,2122,2699,2136,2715,2147,2722,2152,2722,2172,2722,2184,2722,2203,L,2722,2231,2568,2228,Q,2560,2223,2550,2204,2538,2183,2532,2177,2527,2172,2527,2165,2527,2156,2526,2150,2515,2133,2509,2121,2500,2104,2499,2056,2499,2001,2497,1994,2495,1986,2485,1967,2477,1952,2477,1938,2476,1924,2460,1922,2424,1918,2423,1918,L,2423,1934,Q,2401,1954,2394,1961,L,2337,2009,Q,2320,2021,2318,2038,2317,2048,2318,2073,2317,2088,2317,2110,2316,2126,2308,2139,2305,2144,2306,2155,2306,2168,2304,2175,2295,2195,2285,2201,2264,2210,2251,2229,2236,2252,2224,2261,2217,2266,2192,2289,2174,2305,2154,2314,2135,2320,2125,2339,2118,2351,2117,2365,2116,2369,2116,2373,L,2116,2375,Q,2116,2388,2116,2419,2116,2458,2109,2483,2098,2521,2100,2540,L,2100,2575,Q,2100,2588,2090,2595,L,2013,2634,2013,2660,Q,2013,2680,2016,2690,2030,2739,2046,2739,2059,2739,2074,2752,2090,2766,2099,2768,2109,2770,2147,2769,2170,2768,2177,2769,L,2180,2769,Q,2202,2769,2224,2770,2245,2771,2255,2765,2273,2752,2283,2750,2288,2749,2316,2749,2361,2749,2363,2749,2382,2751,2394,2763,2419,2786,2459,2791,2468,2792,2474,2800,2479,2809,2489,2810,L,2533,2810,Q,2547,2810,2565,2828,2570,2833,2597,2833,2622,2833,2627,2831,2632,2828,2656,2805,L,2730,2782,Q,2737,2777,2764,2771,2779,2765,2797,2751,2800,2749,2815,2746,2828,2744,2834,2738,2847,2721,2872,2729,2873,2730,2875,2730,L,2876,2729,Q,2877,2728,2877,2730,2902,2731,2909,2738,2916,2746,2933,2746,2951,2746,2956,2743,2959,2741,2971,2726,2980,2713,3014,2697,3022,2689,3038,2688,3051,2686,3053,2681,3058,2666,3071,2666,3092,2667,3094,2666,L,3103,2666,Q,3106,2683,3106,2685,3108,2690,3114,2700,3117,2705,3127,2733,3129,2752,3128,2761,3127,2770,3140,2789,3144,2794,3148,2814,3149,2821,3153,2824,3161,2830,3163,2833,3175,2852,3205,2890,3230,2924,3228,2950,L,3228,3007,Q,3228,3017,3236,3029,3241,3037,3255,3054,3261,3062,3268,3076,3276,3087,3292,3089,3324,3089,3328,3091,3333,3093,3339,3098,3344,3102,3351,3102,3362,3102,3364,3099,3368,3094,3384,3090,3393,3087,3403,3087,3410,3087,3428,3087,3462,3087,3468,3089,3476,3091,3484,3100,3491,3110,3494,3111,3496,3111,3499,3111,3507,3111,3519,3112,3530,3112,3540,3104,3547,3099,3557,3090,3565,3083,3573,3081,3595,3075,3604,3048,3605,3046,3605,3045,3609,3033,3620,3029,3627,3027,3641,3024,L,3660,3012,Q,3666,3009,3685,3007,3684,2999,3692,2988,3700,2976,3708,2974,3714,2972,3724,2964,3732,2956,3745,2954,3754,2952,3766,2952,3777,2950,3788,2942,3802,2930,3832,2930,3863,2930,3876,2920,3885,2913,3918,2910,3933,2908,3935,2896,3934,2888,3934,2884,3935,2871,3947,2859,3953,2852,3954,2847,3954,2845,3954,2830,3954,2811,3942,2783,3938,2773,3937,2760,3936,2745,3933,2737,3930,2729,3922,2715,3916,2703,3916,2698,L,3915,2658,Q,3909,2644,3896,2639,3879,2634,3872,2623,3857,2596,3840,2574,3832,2564,3822,2546,3813,2529,3805,2519,3800,2513,3794,2493,L,3785,2468,Q,3774,2443,3754,2418,3732,2392,3710,2379,L,3668,2351,Q,3646,2341,3638,2336,3632,2332,3623,2306,3603,2279,3596,2273,3581,2261,3547,2261,3537,2260,3532,2261,3523,2261,3516,2267,3502,2280,3492,2287,3467,2306,3463,2308,3460,2310,3430,2310,3407,2310,3400,2309,3389,2307,3379,2297,3358,2269,3341,2270,3305,2270,3309,2243,L,3309,2191,Q,3239,2199,3230,2186,3221,2173,3200,2156,3179,2139,3170,2129,3164,2117,3148,2103,3125,2083,3124,2082,3100,2043,3084,2032,3080,2029,3054,2017,3036,2008,3031,1998,Z]],label:"Dungmaed Gewog",shortLabel:"DM",labelPosition:[255.1,251.2],labelAlignment:[CEN,MID],nextId:"BT.PM.KR"},"BT.PM.KR":{outlines:[[M,4938,2115,Q,4932,2115,4918,2103,4904,2091,4899,2090,4893,2089,4872,2090,4863,2091,4854,2083,4846,2076,4837,2074,4825,2072,4815,2070,4779,2048,4775,2048,4762,2045,4750,2046,4736,2047,4731,2046,4724,2045,4710,2038,4698,2031,4691,2031,4644,2031,4642,2031,4608,2030,4594,2031,4587,2031,4573,2040,4563,2047,4559,2051,4550,2056,4543,2056,4537,2056,4533,2059,L,4513,2074,Q,4510,2076,4508,2082,4506,2086,4501,2086,L,4481,2086,Q,4480,2086,4479,2087,4457,2094,4438,2078,4435,2076,4430,2069,4427,2067,4424,2066,4407,2062,4402,2063,L,4390,2027,4360,2007,4311,2008,Q,4309,2008,4308,2008,4310,2019,4306,2023,4301,2029,4297,2034,4296,2035,4292,2049,4289,2062,4283,2065,4265,2076,4255,2093,4240,2120,4235,2125,4221,2139,4210,2159,4199,2174,4185,2183,4159,2188,4154,2189,4150,2189,4140,2196,4130,2202,4126,2202,4108,2200,4100,2215,4088,2239,4087,2240,4070,2253,4018,2248,3984,2245,3966,2254,3939,2267,3933,2268,3923,2267,3918,2267,3908,2266,3905,2274,3898,2287,3894,2309,L,3894,2337,Q,3894,2343,3904,2350,3915,2358,3917,2361,L,3936,2387,Q,3939,2390,3949,2398,3958,2406,3958,2413,3958,2437,3957,2489,3959,2517,3965,2527,3970,2536,3970,2557,3972,2577,3966,2582,3947,2596,3945,2600,3933,2614,3927,2621,3916,2634,3914,2652,L,3915,2658,3916,2698,Q,3916,2703,3922,2715,3930,2729,3933,2737,3936,2745,3937,2760,3938,2773,3942,2783,3954,2811,3954,2830,3954,2845,3954,2847,3953,2852,3947,2859,3935,2871,3934,2884,3934,2888,3935,2896,3933,2908,3918,2910,3885,2913,3876,2920,3863,2930,3832,2930,3802,2930,3788,2942,3777,2950,3766,2952,3754,2952,3745,2954,3732,2956,3724,2964,3714,2972,3708,2974,3700,2976,3692,2988,3684,2999,3685,3007,3666,3009,3660,3012,L,3641,3024,Q,3627,3027,3620,3029,3609,3033,3605,3045,L,3610,3128,Q,3612,3133,3622,3154,3629,3168,3629,3180,3628,3190,3640,3197,3646,3201,3663,3211,L,3738,3281,Q,3776,3309,3775,3348,3774,3351,3774,3355,3774,3394,3773,3402,3773,3404,3762,3423,3752,3441,3752,3451,3753,3468,3739,3477,3720,3490,3718,3493,3710,3503,3696,3506,3680,3509,3673,3511,L,3673,3525,Q,3675,3539,3675,3565,L,3675,3598,Q,3675,3602,3668,3606,3659,3612,3657,3616,3650,3628,3638,3639,3622,3653,3611,3662,3586,3684,3590,3708,3591,3714,3579,3733,3571,3746,3569,3752,L,3568,3808,Q,3568,3817,3571,3818,3577,3820,3582,3827,3600,3854,3603,3856,3611,3862,3620,3875,3628,3889,3634,3893,3656,3908,3689,3911,3694,3911,3712,3923,3729,3934,3744,3934,3754,3934,3769,3950,3772,3952,3782,3953,3790,3954,3794,3957,3820,3976,3843,3972,L,3869,3972,Q,3876,3972,3885,3976,3889,3979,3899,3984,3913,3990,3956,3990,L,3956,3989,Q,3957,3990,3958,3990,3957,3990,3956,3990,3985,3996,3993,3988,L,3995,3982,Q,3997,3978,3999,3978,4009,3976,4016,3976,4045,3973,4114,3973,4136,3973,4138,3978,4141,3982,4149,4003,4157,4014,4168,4017,4174,4018,4191,4018,4214,4018,4217,4012,4217,3996,4218,3977,L,4241,3975,4253,3976,Q,4252,3973,4252,3971,4252,3961,4267,3952,4280,3944,4293,3943,4312,3942,4321,3932,4325,3927,4331,3918,4345,3907,4375,3885,4398,3865,4398,3845,4398,3834,4388,3800,4379,3771,4378,3760,4380,3738,4370,3709,4358,3672,4358,3643,4358,3588,4354,3559,4350,3529,4350,3502,4350,3453,4354,3438,4361,3410,4391,3384,4395,3380,4416,3366,4433,3354,4439,3344,4442,3338,4442,3329,4442,3321,4445,3314,4462,3299,4464,3291,4468,3270,4473,3263,4482,3251,4503,3252,4542,3254,4584,3239,4612,3228,4642,3205,4672,3181,4681,3163,4682,3161,4683,3158,4686,3125,4686,3113,4702,3086,4708,3072,4704,3061,4715,3032,4725,3005,4737,2989,4748,2974,4799,2926,4824,2905,4824,2851,4824,2802,4791,2741,4758,2682,4758,2658,L,4759,2632,Q,4758,2628,4758,2623,4754,2549,4777,2484,4776,2439,4785,2408,4795,2377,4823,2343,4837,2325,4877,2292,4898,2274,4933,2247,4969,2217,4976,2183,4978,2176,4980,2116,Z]],label:"Khar Gewog",shortLabel:"KR",labelPosition:[427.4,290.5],labelAlignment:[CEN,MID],nextId:"BT.PM.NN"},"BT.PM.NN":{outlines:[[M,4969,80,Q,4934,81,4913,80,4892,79,4895,50,4895,39,4862,38,L,4840,38,Q,4827,38,4827,49,4824,55,4811,64,4798,73,4795,78,4787,88,4775,94,4775,109,4780,137,4780,150,4740,226,4700,299,4690,308,4685,311,4679,333,4672,355,4664,363,4642,383,4616,394,4599,400,4582,427,4565,453,4562,476,4567,504,4549,522,4516,553,4508,570,4487,607,4478,616,4443,646,4443,647,4437,654,4437,675,4437,686,4445,694,4452,701,4451,718,4451,722,4452,725,4460,727,4469,730,4484,735,4492,736,4499,737,4512,756,4528,778,4532,782,4543,791,4562,800,4574,809,4576,824,L,4579,880,Q,4579,883,4579,886,4579,891,4579,897,4579,910,4586,923,4597,945,4624,974,4629,979,4641,993,4653,1006,4655,1017,4659,1037,4666,1045,4671,1051,4690,1067,4699,1077,4734,1093,4739,1096,4755,1111,4769,1124,4778,1127,4787,1130,4803,1134,4816,1139,4822,1150,4827,1162,4837,1174,4849,1189,4859,1189,4860,1189,4891,1181,4914,1181,4963,1222,4972,1228,4979,1260,4985,1286,5006,1286,5010,1286,5038,1282,5048,1282,5074,1303,5082,1306,5083,1309,5084,1312,5084,1321,L,5084,1347,Q,5095,1347,5118,1345,5139,1344,5153,1347,5161,1348,5179,1361,5194,1370,5211,1367,5218,1367,5232,1366,5248,1365,5256,1370,5263,1374,5272,1380,5280,1384,5292,1386,L,5334,1386,Q,5347,1386,5353,1390,5369,1399,5373,1401,5376,1402,5390,1405,5400,1407,5407,1415,5419,1430,5436,1443,5446,1450,5468,1472,5469,1473,5487,1482,5495,1485,5495,1496,5495,1502,5486,1516,5478,1529,5475,1531,5452,1539,5449,1542,5447,1543,5447,1563,5447,1588,5458,1604,5458,1605,5496,1650,5503,1659,5501,1690,L,5502,1732,Q,5502,1758,5495,1780,5493,1787,5485,1804,5481,1817,5482,1828,5482,1829,5482,1831,5482,1832,5482,1833,5481,1849,5491,1861,5500,1874,5512,1887,5518,1898,5520,1899,5526,1907,5536,1908,5556,1910,5559,1920,5563,1930,5570,1930,5592,1930,5608,1914,5617,1904,5643,1878,L,5659,1862,Q,5662,1858,5662,1849,5663,1841,5667,1837,5690,1812,5699,1798,5705,1788,5718,1772,5732,1755,5737,1751,5743,1746,5753,1729,5763,1713,5767,1710,L,5788,1690,Q,5797,1680,5803,1667,5806,1663,5818,1655,5829,1647,5834,1641,5838,1633,5854,1621,5860,1612,5868,1612,5877,1611,5881,1609,5887,1604,5890,1596,5894,1585,5896,1581,5908,1571,5908,1559,L,5908,1526,Q,5910,1519,5916,1515,5919,1513,5927,1507,5929,1504,5932,1495,5934,1487,5939,1484,L,5951,1476,Q,5952,1474,5952,1461,5952,1448,5951,1446,5950,1444,5937,1439,5932,1437,5930,1427,5930,1417,5929,1414,5925,1406,5871,1406,5836,1404,5826,1412,5815,1420,5796,1425,5791,1426,5771,1425,L,5752,1424,Q,5750,1422,5747,1411,5744,1405,5738,1406,5721,1406,5722,1395,5725,1378,5723,1368,5720,1353,5715,1344,5707,1332,5707,1319,5707,1307,5691,1307,L,5629,1307,Q,5597,1307,5592,1309,5586,1311,5576,1329,L,5558,1357,Q,5550,1361,5549,1362,5544,1367,5547,1376,L,5518,1376,Q,5521,1368,5503,1364,5483,1360,5482,1343,5481,1298,5480,1277,5481,1231,5481,1209,5481,1168,5467,1150,5458,1145,5447,1122,5433,1094,5429,1090,5421,1081,5416,1076,5409,1067,5408,1056,5406,1042,5408,1017,5409,974,5393,943,L,5390,922,5382,906,Q,5372,896,5358,873,5333,838,5240,772,5149,707,5121,662,5120,643,5109,616,5103,602,5103,567,5103,524,5110,509,5128,469,5137,437,5140,427,5151,409,5163,389,5166,379,5168,354,5169,346,5170,345,5177,333,5181,326,5181,319,5181,306,5147,262,5118,226,5106,215,5105,214,5104,213,5089,201,5077,181,5065,159,5062,138,5061,134,5050,121,5038,108,5037,106,5034,101,5022,100,5010,98,5004,90,4997,81,4986,79,Q,4974,80,4969,80,Z]],label:"Nanong Gewog",shortLabel:"NN",labelPosition:[483.4,71.4],labelAlignment:[CEN,MID],nextId:"BT.PM.ZB"},"BT.PM.ZB":{outlines:[[M,4891,1181,Q,4860,1189,4859,1189,4849,1189,4837,1174,4827,1162,4822,1150,4816,1139,4803,1134,4787,1130,4778,1127,4769,1124,4755,1111,4739,1096,4734,1093,4699,1077,4690,1067,4671,1051,4666,1045,4659,1037,4655,1017,4653,1006,4641,993,4629,979,4624,974,4597,945,4586,923,4579,910,4579,897,4579,891,4579,886,4579,883,4579,880,L,4576,824,Q,4574,809,4562,800,4543,791,4532,782,4528,778,4512,756,4499,737,4492,736,4484,735,4469,730,4460,727,4452,725,4455,734,4468,739,4486,748,4486,754,L,4478,802,Q,4478,831,4479,866,4474,891,4428,925,4414,935,4410,959,4408,972,4408,992,4410,999,4401,1003,4389,1009,4387,1011,4378,1019,4370,1021,4365,1022,4351,1022,4327,1022,4320,1021,4300,1018,4291,1006,4283,997,4272,980,4264,966,4253,956,4240,943,4226,940,4220,939,4199,939,4169,939,4156,929,4142,918,4141,918,4128,931,4107,931,L,4107,953,Q,4111,972,4123,995,4130,1009,4133,1025,4134,1029,4134,1034,4134,1065,4136,1079,4140,1083,4158,1093,4174,1104,4181,1114,4188,1125,4213,1159,4234,1193,4234,1219,L,4233,1336,Q,4225,1349,4274,1364,4288,1368,4327,1391,4397,1425,4425,1477,4428,1483,4441,1503,4452,1519,4455,1528,4461,1544,4470,1549,4489,1561,4494,1566,4501,1572,4525,1571,4531,1571,4539,1579,4547,1587,4551,1588,4562,1590,4577,1589,L,4603,1588,Q,4615,1588,4625,1601,4643,1622,4644,1623,4663,1639,4665,1641,4675,1652,4681,1668,4684,1680,4684,1710,4684,1735,4682,1738,4677,1744,4646,1747,4643,1747,4628,1746,4620,1745,4618,1750,4618,1751,4608,1763,4601,1772,4601,1777,L,4602,1840,Q,4602,1844,4596,1901,4596,1914,4603,1916,4618,1919,4625,1925,4632,1931,4645,1931,4652,1931,4667,1930,4668,1930,4681,1931,4695,1932,4702,1930,4705,1929,4711,1919,4715,1911,4725,1912,L,4758,1912,Q,4760,1912,4769,1900,4777,1890,4784,1893,4789,1836,4790,1822,L,4902,1823,Q,4905,1828,4907,1839,4908,1849,4913,1854,4918,1860,4919,1870,4920,1875,4920,1885,4921,1896,4920,1922,4923,1943,4941,1949,4953,1953,4969,1969,4978,1978,4991,1993,5002,1953,5033,1943,5062,1942,5091,1942,5098,1943,5103,1947,5112,1954,5123,1960,L,5177,1960,5221,1925,5221,1847,Q,5220,1838,5225,1834,5228,1832,5236,1830,5240,1829,5248,1819,5255,1811,5262,1811,L,5306,1811,Q,5309,1811,5357,1811,5360,1811,5376,1825,5382,1827,5395,1827,L,5482,1828,Q,5481,1817,5485,1804,5493,1787,5495,1780,5502,1758,5502,1732,L,5501,1690,Q,5503,1659,5496,1650,5458,1605,5458,1604,5447,1588,5447,1563,5447,1543,5449,1542,5452,1539,5475,1531,5478,1529,5486,1516,5495,1502,5495,1496,5495,1485,5487,1482,5469,1473,5468,1472,5446,1450,5436,1443,5419,1430,5407,1415,5400,1407,5390,1405,5376,1402,5373,1401,5369,1399,5353,1390,5347,1386,5334,1386,L,5292,1386,Q,5280,1384,5272,1380,5263,1374,5256,1370,5248,1365,5232,1366,5218,1367,5211,1367,5194,1370,5179,1361,5161,1348,5153,1347,5139,1344,5118,1345,5095,1347,5084,1347,L,5084,1321,Q,5084,1312,5083,1309,5082,1306,5074,1303,5048,1282,5038,1282,5010,1286,5006,1286,4985,1286,4979,1260,4972,1228,4963,1222,Q,4914,1181,4891,1181,Z]],label:"Zobel Gewog",shortLabel:"ZB",labelPosition:[487.6,150.3],labelAlignment:[CEN,MID],nextId:"BT.PM.NB"},"BT.PM.NB":{outlines:[[M,1897,3790,Q,1865,3787,1858,3783,L,1824,3767,Q,1815,3762,1802,3736,1787,3707,1786,3705,1778,3696,1776,3684,1774,3668,1772,3665,L,1757,3633,1757,3634,1661,3634,Q,1658,3630,1642,3631,1632,3632,1628,3632,L,1626,3631,Q,1594,3631,1592,3633,1588,3637,1572,3668,1553,3694,1540,3726,1533,3740,1519,3747,1509,3751,1487,3756,1464,3760,1455,3768,1448,3774,1430,3774,1408,3775,1387,3773,1376,3772,1371,3768,1363,3761,1359,3759,1344,3752,1329,3740,1314,3727,1305,3720,L,1255,3680,Q,1242,3670,1226,3652,L,1203,3632,Q,1172,3621,1151,3634,1138,3643,1110,3671,L,1037,3731,1013,3731,Q,1012,3716,993,3676,972,3631,959,3631,951,3631,936,3650,920,3672,919,3673,910,3679,890,3688,873,3698,866,3706,845,3729,808,3750,793,3758,746,3781,666,3821,623,3839,549,3872,509,3872,469,3872,433,3852,396,3832,376,3832,364,3832,336,3843,308,3853,301,3860,295,3865,284,3869,275,3872,268,3883,245,3912,228,3911,222,3918,222,3931,222,3939,223,3954,222,3967,216,3973,200,3985,199,3986,167,4018,165,4020,142,4039,123,4036,126,4071,116,4076,105,4082,105,4102,105,4108,120,4126,132,4144,139,4148,146,4154,145,4170,144,4183,144,4191,144,4198,145,4201,141,4213,122,4219,118,4220,106,4229,96,4236,89,4236,81,4236,73,4243,68,4247,59,4255,51,4260,42,4264,38,4267,38,4279,L,82,4350,Q,129,4428,146,4461,149,4467,156,4482,162,4494,162,4504,162,4512,160,4532,159,4552,162,4565,164,4576,171,4591,176,4604,176,4611,176,4631,178,4644,178,4645,179,4647,179,4650,181,4656,184,4669,192,4696,201,4729,199,4748,193,4811,266,4811,280,4811,418,4829,532,4843,532,4833,619,4833,681,4790,716,4766,814,4669,865,4599,929,4500,947,4471,995,4419,1056,4352,1084,4352,1138,4352,1231,4371,1310,4388,1348,4402,1366,4409,1414,4432,1450,4449,1492,4461,1546,4477,1601,4484,1641,4487,1653,4483,1741,4478,1948,4465,1960,4465,2114,4464,2267,4462,2296,4466,L,2680,4470,Q,2751,4471,2828,4519,2867,4543,2942,4596,2941,4499,2940,4448,2938,4357,2942,4297,2943,4273,2926,4256,2908,4238,2907,4233,2901,4198,2906,4158,2908,4135,2886,4089,2862,4041,2862,4020,2862,4010,2868,4e3,2877,3986,2883,3974,2885,3970,2890,3967,L,2901,3960,Q,2903,3958,2906,3944,2910,3929,2914,3926,2937,3898,2941,3893,2945,3888,2962,3887,L,2947,3835,Q,2948,3827,2938,3822,2927,3817,2922,3814,2917,3811,2912,3802,2906,3791,2901,3786,2893,3778,2884,3774,2876,3771,2873,3768,L,2852,3746,Q,2839,3735,2823,3733,2792,3728,2788,3730,L,2787,3730,Q,2777,3730,2775,3731,2771,3734,2762,3738,2756,3741,2750,3747,2745,3752,2743,3752,2724,3752,2716,3753,2701,3753,2693,3762,2672,3781,2655,3801,2643,3811,2612,3811,2602,3811,2601,3783,2602,3754,2602,3750,2602,3730,2583,3718,2561,3707,2553,3701,2547,3697,2521,3676,2507,3665,2492,3658,2465,3646,2458,3633,2455,3627,2428,3627,2402,3627,2400,3628,2396,3631,2376,3649,2342,3674,2320,3676,2303,3677,2297,3688,2290,3702,2285,3705,2243,3726,2229,3737,2167,3781,2107,3775,L,2075,3790,Q,2068,3793,2058,3792,2051,3791,2045,3797,2034,3808,2017,3811,2009,3812,1982,3812,1982,3811,1980,3811,1978,3810,1975,3810,1970,3810,1960,3811,1934,3812,1926,3811,1922,3810,1913,3801,Q,1904,3791,1897,3790,Z]],label:"Norbugang Gewog",shortLabel:"NB",labelPosition:[168,410.6],labelAlignment:[CEN,MID],nextId:"BT.PM.YR"},"BT.PM.YR":{outlines:[[M,3925,1367,Q,3918,1349,3908,1344,L,3866,1295,3850,1267,Q,3846,1268,3842,1268,3821,1278,3813,1284,3806,1288,3798,1298,3789,1309,3785,1312,3762,1334,3746,1344,3740,1348,3728,1350,3712,1352,3710,1353,L,3677,1380,Q,3666,1390,3656,1392,3645,1394,3640,1397,3622,1409,3601,1428,3575,1452,3568,1457,3563,1461,3548,1463,3535,1465,3532,1470,3503,1500,3501,1502,3491,1515,3456,1572,3424,1617,3408,1643,3389,1669,3381,1682,3368,1702,3369,1716,3369,1719,3370,1721,3370,1731,3368,1746,3368,1763,3379,1770,3392,1778,3394,1794,3396,1804,3395,1826,3395,1828,3404,1834,3414,1840,3418,1845,3424,1852,3430,1870,3436,1888,3446,1899,3453,1906,3453,1922,3453,1936,3450,1940,L,3443,1945,Q,3438,1947,3438,1952,3447,1952,3461,1957,3477,1963,3484,1972,3496,1991,3535,1996,L,3535,1997,3543,1997,Q,3556,2004,3579,2021,3580,2022,3600,2023,3619,2023,3624,2031,3633,2046,3658,2057,3690,2073,3695,2076,3705,2083,3713,2086,3718,2087,3737,2090,3745,2091,3755,2102,3764,2112,3771,2113,3777,2114,3783,2125,3790,2140,3792,2143,3794,2146,3811,2150,3827,2154,3833,2154,3844,2154,3873,2149,3863,2128,3887,2118,3903,2111,3923,2111,L,3924,2108,Q,3924,2097,3900,2081,3896,2078,3893,2054,3882,2034,3882,2024,L,3882,1990,Q,3884,1970,3885,1957,3885,1935,3879,1924,3873,1896,3870,1893,3866,1889,3854,1881,3849,1878,3849,1870,3847,1838,3851,1828,3853,1822,3861,1817,3870,1811,3875,1800,3894,1748,3911,1748,3942,1746,4069,1746,L,4069,1745,Q,4069,1730,4065,1711,4061,1693,4061,1685,4061,1668,4067,1660,4072,1651,4072,1644,4072,1634,4062,1619,4053,1606,4052,1604,4050,1592,4049,1589,4037,1576,4036,1572,4031,1555,4021,1536,4007,1512,4004,1506,3987,1469,3973,1456,3961,1445,3951,1425,3942,1404,3937,1396,Q,3934,1392,3925,1367,Z]],label:"Yurung Gewog",shortLabel:"YR",labelPosition:[361.2,172.8],labelAlignment:[CEN,MID],nextId:"BT.PM.SM"},"BT.PM.SM":{outlines:[[M,4590,111,Q,4585,117,4578,118,4575,119,4558,119,L,4533,119,Q,4524,119,4512,115,4504,111,4499,108,4489,103,4477,103,L,4383,101,Q,4376,101,4365,107,4353,113,4348,115,4329,118,4311,125,4308,126,4297,136,4286,145,4278,145,4269,145,4266,157,L,4229,157,Q,4224,156,4223,154,4221,150,4219,148,4213,141,4203,141,4190,143,4181,143,4164,143,4159,135,4157,126,4153,124,4143,119,4136,118,L,4072,120,Q,4056,119,4045,119,4026,119,4020,130,4018,135,4014,138,4010,142,4e3,142,L,3975,142,Q,3971,158,3971,183,3970,189,3963,201,3956,213,3954,220,3951,250,3944,260,L,3919,287,Q,3913,292,3894,315,3879,332,3865,340,3852,346,3852,423,3852,464,3853,469,3855,477,3869,509,3870,512,3871,515,3876,526,3889,545,3905,568,3910,587,3913,599,3919,628,3919,629,3932,646,3934,649,3934,670,3934,687,3930,690,3915,699,3907,706,3876,739,3868,744,3795,775,3782,807,L,3775,829,Q,3774,830,3764,842,3755,852,3754,861,L,3754,893,Q,3738,911,3737,915,3734,924,3723,940,3715,957,3717,971,3706,986,3701,994,3695,1004,3693,1014,3691,1018,3691,1022,3688,1029,3680,1038,3668,1050,3672,1062,3667,1077,3659,1091,3655,1098,3655,1114,3655,1135,3668,1143,3681,1151,3681,1162,3681,1173,3659,1192,3672,1194,3681,1209,3692,1225,3703,1227,3706,1227,3741,1228,3760,1229,3768,1237,3774,1244,3793,1249,3813,1253,3821,1261,3829,1268,3842,1268,3846,1268,3850,1267,L,3866,1295,3908,1344,Q,3918,1349,3925,1367,3934,1392,3937,1396,3942,1404,3951,1425,3961,1445,3973,1456,3987,1469,4004,1506,4007,1512,4021,1536,4031,1555,4036,1572,4037,1576,4049,1589,4050,1592,4052,1604,4053,1606,4062,1619,4072,1634,4072,1644,4072,1651,4067,1660,4061,1668,4061,1685,4061,1693,4065,1711,4069,1730,4069,1745,L,4069,1746,Q,4069,1758,4081,1772,4093,1785,4107,1788,4127,1790,4135,1797,4153,1811,4160,1823,4171,1842,4202,1870,4208,1873,4213,1888,4218,1905,4222,1909,4225,1913,4239,1921,4251,1928,4256,1935,4257,1936,4265,1945,4272,1954,4275,1960,4278,1968,4277,1979,4276,1991,4278,1995,4283,2007,4308,2008,4309,2008,4311,2008,L,4360,2007,4390,2027,4402,2063,Q,4407,2062,4424,2066,4427,2067,4430,2069,4435,2076,4438,2078,4457,2094,4479,2087,4480,2086,4481,2086,L,4501,2086,Q,4506,2086,4508,2082,4510,2076,4513,2074,L,4533,2059,Q,4537,2056,4543,2056,4550,2056,4559,2051,4563,2047,4573,2040,4587,2031,4594,2031,4608,2030,4642,2031,4644,2031,4691,2031,4698,2031,4710,2038,4724,2045,4731,2046,4736,2047,4750,2046,4762,2045,4775,2048,4779,2048,4815,2070,4825,2072,4837,2074,4846,2076,4854,2083,4863,2091,4872,2090,4893,2089,4899,2090,4904,2091,4918,2103,4932,2115,4938,2115,L,4980,2116,Q,4980,2115,4980,2113,4980,2109,4980,2106,4981,2044,4986,2013,4988,2002,4991,1993,4978,1978,4969,1969,4953,1953,4941,1949,4923,1943,4920,1922,4921,1896,4920,1885,4920,1875,4919,1870,4918,1860,4913,1854,4908,1849,4907,1839,4905,1828,4902,1823,L,4790,1822,Q,4789,1836,4784,1893,4777,1890,4769,1900,4760,1912,4758,1912,L,4725,1912,Q,4715,1911,4711,1919,4705,1929,4702,1930,4695,1932,4681,1931,4668,1930,4667,1930,4652,1931,4645,1931,4632,1931,4625,1925,4618,1919,4603,1916,4596,1914,4596,1901,4602,1844,4602,1840,L,4601,1777,Q,4601,1772,4608,1763,4618,1751,4618,1750,4620,1745,4628,1746,4643,1747,4646,1747,4677,1744,4682,1738,4684,1735,4684,1710,4684,1680,4681,1668,4675,1652,4665,1641,4663,1639,4644,1623,4643,1622,4625,1601,4615,1588,4603,1588,L,4577,1589,Q,4562,1590,4551,1588,4547,1587,4539,1579,4531,1571,4525,1571,4501,1572,4494,1566,4489,1561,4470,1549,4461,1544,4455,1528,4452,1519,4441,1503,4428,1483,4425,1477,4397,1425,4327,1391,4288,1368,4274,1364,4225,1349,4233,1336,L,4234,1219,Q,4234,1193,4213,1159,4188,1125,4181,1114,4174,1104,4158,1093,4140,1083,4136,1079,4134,1065,4134,1034,4134,1029,4133,1025,4130,1009,4123,995,4111,972,4107,953,L,4107,931,Q,4128,931,4141,918,4142,918,4156,929,4169,939,4199,939,4220,939,4226,940,4240,943,4253,956,4264,966,4272,980,4283,997,4291,1006,4300,1018,4320,1021,4327,1022,4351,1022,4365,1022,4370,1021,4378,1019,4387,1011,4389,1009,4401,1003,4410,999,4408,992,4408,972,4410,959,4414,935,4428,925,4474,891,4479,866,4478,831,4478,802,L,4486,754,Q,4486,748,4468,739,4455,734,4452,725,4451,722,4451,718,4452,701,4445,694,4437,686,4437,675,4437,654,4443,647,4443,646,4478,616,4487,607,4508,570,4516,553,4549,522,4567,504,4562,476,4565,453,4582,427,4599,400,4616,394,4642,383,4664,363,4672,355,4679,333,4685,311,4690,308,4700,299,4740,226,4780,150,4780,137,4775,109,4775,94,4757,102,4728,101,4717,101,4627,103,4611,102,4605,103,Q,4595,103,4590,111,Z]],label:"Shumar Gewog",shortLabel:"SM",labelPosition:[421.5,47.5],labelAlignment:[CEN,MID],nextId:"BT.PM.CS"},"BT.PM.CS":{outlines:[[M,4069,1746,Q,3942,1746,3911,1748,3894,1748,3875,1800,3870,1811,3861,1817,3853,1822,3851,1828,3847,1838,3849,1870,3849,1878,3854,1881,3866,1889,3870,1893,3873,1896,3879,1924,3885,1935,3885,1957,3884,1970,3882,1990,L,3882,2024,Q,3882,2034,3893,2054,3896,2078,3900,2081,3924,2097,3924,2108,L,3923,2111,Q,3903,2111,3887,2118,3863,2128,3873,2149,3844,2154,3833,2154,3827,2154,3811,2150,3794,2146,3792,2143,3790,2140,3783,2125,3777,2114,3771,2113,3764,2112,3755,2102,3745,2091,3737,2090,3718,2087,3713,2086,3705,2083,3695,2076,3690,2073,3658,2057,3633,2046,3624,2031,3619,2023,3600,2023,3580,2022,3579,2021,3556,2004,3543,1997,L,3535,1997,Q,3539,2027,3539,2031,3539,2040,3538,2044,3536,2048,3528,2053,3516,2060,3513,2069,3510,2078,3505,2082,3502,2084,3493,2095,3486,2104,3478,2106,3466,2108,3444,2116,3436,2118,3428,2132,3421,2144,3404,2144,L,3338,2144,Q,3336,2184,3309,2194,L,3309,2243,Q,3305,2270,3341,2270,3358,2269,3379,2297,3389,2307,3400,2309,3407,2310,3430,2310,3460,2310,3463,2308,3467,2306,3492,2287,3502,2280,3516,2267,3523,2261,3532,2261,3537,2260,3547,2261,3581,2261,3596,2273,3603,2279,3623,2306,3632,2332,3638,2336,3646,2341,3668,2351,L,3710,2379,Q,3732,2392,3754,2418,3774,2443,3785,2468,L,3794,2493,Q,3800,2513,3805,2519,3813,2529,3822,2546,3832,2564,3840,2574,3857,2596,3872,2623,3879,2634,3896,2639,3909,2644,3915,2658,L,3914,2652,Q,3916,2634,3927,2621,3933,2614,3945,2600,3947,2596,3966,2582,3972,2577,3970,2557,3970,2536,3965,2527,3959,2517,3957,2489,3958,2437,3958,2413,3958,2406,3949,2398,3939,2390,3936,2387,L,3917,2361,Q,3915,2358,3904,2350,3894,2343,3894,2337,L,3894,2309,Q,3898,2287,3905,2274,3908,2266,3918,2267,3923,2267,3933,2268,3939,2267,3966,2254,3984,2245,4018,2248,4070,2253,4087,2240,4088,2239,4100,2215,4108,2200,4126,2202,4130,2202,4140,2196,4150,2189,4154,2189,4159,2188,4185,2183,4199,2174,4210,2159,4221,2139,4235,2125,4240,2120,4255,2093,4265,2076,4283,2065,4289,2062,4292,2049,4296,2035,4297,2034,4301,2029,4306,2023,4310,2019,4308,2008,4283,2007,4278,1995,4276,1991,4277,1979,4278,1968,4275,1960,4272,1954,4265,1945,4257,1936,4256,1935,4251,1928,4239,1921,4225,1913,4222,1909,4218,1905,4213,1888,4208,1873,4202,1870,4171,1842,4160,1823,4153,1811,4135,1797,4127,1790,4107,1788,4093,1785,4081,1772,Q,4069,1758,4069,1746,Z]],label:"Chongshing Borang Gewog",shortLabel:"CS",labelPosition:[404.2,198.6],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"pemagatshel",type:"maps"}}})});