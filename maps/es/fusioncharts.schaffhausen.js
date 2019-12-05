/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Schaffhausen.20.10-31-2012 09:47:03
 */

let M = 'M', // SVG MoveTo
  L = 'L', // SVG LineTo
  Z = 'Z', // SVG ClosePath
  Q = 'Q', // SVG Quadratic Beizer
  LFT = 'left',
  RGT = 'right',
  CEN = 'center',
  MID = 'middle',
  TOP = 'top',
  BTM = 'bottom',
  geodefinitions = [{
  "name": "Schaffhausen",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 950,
  "baseHeight": 740,
  "baseScaleFactor": 10,
  "entities": {
    "CH.SH.UK": {
      "outlines": [
        [M, 2666, 4401, Q, 2666, 4372, 2666, 4343, 2666, 4339, 2666, 4335, 2667, 4329, 2663, 4330, 2662, 4330, 2660, 4326, 2660, 4323, 2659, 4321, 2658, 4319, 2656, 4317, 2649, 4313, 2650, 4299, 2632, 4287, 2617, 4274, 2545, 4211, 2534, 4124, L, 2534, 4123, 2244, 4150, 2243, 4150, 2243, 4241, 2274, 4305, 2270, 4368, 2157, 4457, 2347, 4458, Q, 2361, 4484, 2385, 4529, 2465, 4613, 2531, 4665, 2532, 4665, 2534, 4665, 2558, 4665, 2586, 4665, 2615, 4665, 2644, 4665, 2649, 4665, 2651, 4664, L, 2716, 4607, 2723, 4511, Z],
        [M, 1196, 2549, L, 1031, 2539, 943, 2619, 972, 2685, 860, 2685, 631, 2865, 502, 2889, 251, 3215, 289, 3288, 289, 3300, Q, 334, 3295, 380, 3300, L, 544, 3603, Q, 497, 3620, 508, 3678, L, 433, 3685, 310, 3730, 257, 3875, 455, 4088, 630, 4088, Q, 761, 4167, 855, 4273, 868, 4329, 1037, 4415, L, 1213, 4407, 1306, 4456, 1436, 4351, 1460, 4391, 1423, 4565, 1412, 4688, 1445, 4799, 1530, 4834, 1605, 4850, 1658, 4828, 1649, 4785, Q, 1599, 4762, 1543, 4744, L, 1654, 4688, Q, 1655, 4681, 1655, 4672, 1654, 4661, 1654, 4649, 1654, 4641, 1655, 4632, 1655, 4627, 1652, 4627, 1639, 4626, 1624, 4626, 1620, 4627, 1614, 4622, 1600, 4619, 1581, 4619, 1579, 4615, 1577, 4614, 1571, 4614, 1562, 4613, 1559, 4612, 1555, 4612, L, 1618, 4532, 1713, 4569, Q, 1722, 4570, 1721, 4581, 1720, 4589, 1720, 4596, 1720, 4599, 1719, 4601, 1718, 4605, 1718, 4606, 1718, 4611, 1719, 4615, 1720, 4627, 1721, 4636, 1727, 4640, 1723, 4641, 1724, 4647, 1725, 4649, 1726, 4652, 1727, 4655, 1728, 4659, 1732, 4660, 1734, 4661, 1736, 4664, 1736, 4671, 1739, 4675, 1741, 4682, 1742, 4686, 1743, 4691, 1745, 4694, 1747, 4695, 1747, 4700, 1748, 4701, 1750, 4705, 1750, 4710, 1750, 4712, 1757, 4710, 1765, 4707, 1768, 4705, 1772, 4706, 1776, 4706, 1780, 4706, 1810, 4706, 1839, 4706, 1842, 4706, 1845, 4706, L, 1859, 4748, 1960, 4748, 1993, 4625, 1759, 4392, 1588, 4330, Q, 1588, 4309, 1588, 4287, 1588, 4277, 1589, 4267, 1601, 4268, 1599, 4256, 1599, 4253, 1601, 4249, 1657, 4183, 1814, 4061, 1874, 4028, 1936, 4015, 1936, 3994, 1936, 3972, 1936, 3937, 1936, 3902, 1936, 3900, 1934, 3895, 1932, 3892, 1924, 3892, 1922, 3890, 1919, 3890, 1913, 3890, 1906, 3889, 1903, 3887, 1898, 3886, 1895, 3885, 1891, 3884, 1889, 3884, 1885, 3884, 1881, 3884, 1879, 3881, 1879, 3878, 1876, 3876, 1872, 3868, 1870, 3860, 1870, 3855, 1868, 3852, 1867, 3850, 1867, 3848, 1867, 3845, 1864, 3841, 1864, 3833, 1860, 3830, 1858, 3828, 1857, 3824, 1855, 3820, 1853, 3818, 1850, 3812, 1845, 3807, 1844, 3805, 1842, 3804, 1839, 3802, 1836, 3804, 1833, 3805, 1828, 3807, 1820, 3808, 1813, 3812, 1804, 3813, 1799, 3819, 1796, 3823, 1790, 3823, 1788, 3823, 1784, 3824, 1778, 3824, 1773, 3826, 1771, 3827, 1768, 3827, 1760, 3827, 1752, 3829, 1749, 3831, 1744, 3832, 1742, 3837, 1733, 3838, 1725, 3837, 1721, 3844, 1720, 3845, 1718, 3850, 1718, 3845, 1718, 3840, 1718, 3811, 1717, 3780, 1713, 3778, 1711, 3778, 1637, 3726, 1560, 3699, 1441, 3668, 1410, 3601, L, 1687, 3401, Q, 1690, 3388, 1693, 3368, 1696, 3346, 1687, 3318, 1682, 3317, 1678, 3314, 1678, 3313, 1679, 3309, 1682, 3306, 1685, 3306, 1699, 3306, 1713, 3305, L, 1842, 3274, Q, 1891, 3234, 1919, 3191, L, 1869, 3151, Q, 1860, 3151, 1852, 3151, 1822, 3151, 1793, 3151, 1793, 3145, 1793, 3138, 1793, 3109, 1793, 3079, 1793, 3050, 1793, 3022, L, 1863, 2980, 1844, 2914, Q, 1844, 2886, 1844, 2858, 1844, 2829, 1844, 2801, 1844, 2772, 1844, 2743, 1832, 2738, 1829, 2727, 1830, 2723, 1830, 2722, 1831, 2716, 1833, 2711, 1836, 2699, 1844, 2691, 1846, 2689, 1847, 2684, 1848, 2677, 1850, 2676, 1853, 2674, 1853, 2673, 1855, 2668, 1857, 2664, 1860, 2659, 1865, 2654, 1865, 2642, 1868, 2638, 1839, 2650, 1796, 2639, 1794, 2638, 1792, 2638, 1746, 2579, 1732, 2450, 1732, 2450, 1731, 2450, L, 1654, 2370, 1549, 2354, 1462, 2410, 1205, 2335, Z]
      ],
      "label": "Unterklettgau",
      "shortLabel": "UK",
      "labelPosition": [102.3, 359.2],
      "labelAlignment": [CEN, MID]
    },
    "CH.SH.SH": {
      "outlines": [
        [M, 3149, 5975, L, 3140, 6061, 3057, 6088, 2976, 6088, 2761, 6237, 2762, 6238, 2791, 6337, 2743, 6346, 2745, 6431, Q, 2793, 6470, 2852, 6486, 2845, 6487, 2842, 6488, 2839, 6488, 2834, 6490, 2829, 6490, 2824, 6492, 2819, 6493, 2812, 6495, 2800, 6497, 2785, 6496, 2784, 6518, 2784, 6542, 2779, 6542, 2777, 6546, 2776, 6565, 2776, 6583, 2776, 6584, 2776, 6584, 2871, 6583, 2966, 6639, 2967, 6654, 2967, 6673, 2966, 6674, 2964, 6677, 2960, 6680, 2952, 6680, 2937, 6678, 2922, 6682, 2914, 6685, 2900, 6686, 2896, 6689, 2891, 6694, 2889, 6696, 2887, 6698, 2883, 6701, 2880, 6703, L, 2880, 6703, 3009, 6860, 3094, 7140, 3141, 7189, 3212, 7183, Q, 3213, 7182, 3214, 7180, 3344, 7008, 3378, 6865, 3412, 6722, 3479, 6575, L, 3550, 6575, Q, 3605, 6531, 3596, 6484, 3576, 6384, 3550, 6289, 3563, 6204, 3626, 6118, 3737, 6057, 3860, 6019, 3895, 5980, 3895, 5952, 3895, 5950, 3895, 5948, 3895, 5948, 3895, 5947, 3895, 5918, 3900, 5889, 3905, 5859, 3902, 5830, 3900, 5801, 3897, 5772, 3895, 5744, 3895, 5715, 3865, 5715, 3837, 5715, 3804, 5802, 3712, 5850, L, 3646, 6001, 3494, 5994, 3443, 5943, 3353, 5971, 3311, 5919, 3229, 5920, Z],
        [M, 4299, 895, Q, 4287, 853, 4299, 811, L, 4352, 780, 4411, 588, 4214, 385, 3973, 374, 3869, 460, 3749, 365, 3615, 438, Q, 3611, 438, 3606, 438, 3577, 438, 3548, 438, 3541, 438, 3531, 438, 3526, 437, 3520, 437, L, 3511, 312, 3373, 193, 3254, 376, 3259, 664, 3468, 726, Q, 3475, 727, 3481, 730, 3488, 731, 3488, 735, 3488, 763, 3488, 790, 3495, 797, 3499, 802, 3503, 805, 3504, 807, 3514, 809, 3519, 813, 3521, 815, 3521, 819, 3523, 824, 3523, 825, 3523, 835, 3524, 845, 3525, 850, 3525, 850, 3526, 857, 3527, 864, 3529, 872, 3529, 880, 3529, 901, 3527, 918, L, 3336, 1019, Q, 3355, 1037, 3373, 1057, 3389, 1180, 3384, 1331, L, 3442, 1501, Q, 3427, 1607, 3401, 1726, 3323, 1796, 3286, 1889, 3277, 1886, 3271, 1886, 3261, 1887, 3256, 1884, 3255, 1883, 3251, 1880, 3245, 1876, 3235, 1874, 3210, 1873, 3186, 1873, 3158, 1873, 3130, 1873, 3108, 1873, 3086, 1873, 3066, 1873, 3046, 1874, 3037, 1874, 3029, 1872, 3024, 1871, 3022, 1871, 3022, 1884, 3022, 1897, 3022, 1927, 3022, 1956, 3022, 1983, 3022, 2011, L, 2890, 2094, Q, 2890, 2094, 2886, 2098, 2886, 2110, 2885, 2122, 2885, 2138, 2888, 2154, 2942, 2198, 2997, 2243, 2993, 2255, 3007, 2248, 3037, 2248, 3066, 2248, 3095, 2248, 3124, 2248, L, 2946, 2485, Q, 2946, 2510, 2946, 2534, 2946, 2564, 2949, 2590, 2983, 2590, 3012, 2590, 3026, 2590, 3041, 2590, L, 3074, 2628, 3021, 2659, 3200, 2734, 3308, 2872, 3308, 2875, Q, 3338, 2984, 3348, 3094, L, 3292, 3152, 3307, 3342, 3364, 3356, 3378, 3444, 3435, 3458, 3435, 3536, 3487, 3589, 3413, 3595, 3458, 3954, 3327, 3932, 3269, 3992, 3305, 4112, 3543, 4192, 3896, 4013, 3977, 3912, Q, 4068, 3940, 4165, 3943, 4171, 3942, 4179, 3941, 4177, 3911, 4177, 3881, 4177, 3875, 4180, 3873, 4182, 3866, 4185, 3861, 4186, 3858, 4187, 3856, 4188, 3854, 4190, 3852, 4191, 3848, 4193, 3845, 4196, 3839, 4199, 3833, 4208, 3825, 4213, 3814, 4216, 3808, 4220, 3803, 4225, 3794, 4230, 3788, 4232, 3786, 4232, 3783, 4240, 3775, 4245, 3768, 4248, 3763, 4251, 3758, 4258, 3759, 4265, 3761, 4272, 3769, 4278, 3778, 4279, 3780, 4282, 3783, 4286, 3785, 4288, 3787, 4290, 3789, 4293, 3789, 4293, 3795, 4296, 3796, 4299, 3798, 4301, 3800, 4305, 3808, 4313, 3813, 4319, 3818, 4326, 3820, 4332, 3821, 4335, 3825, 4339, 3827, 4343, 3828, 4345, 3829, 4347, 3833, 4351, 3837, 4353, 3841, 4354, 3843, 4356, 3845, 4365, 3849, 4369, 3855, 4507, 3806, 4500, 3694, L, 4442, 3464, 4475, 3394, 4640, 3357, 4815, 3302, Q, 4994, 3459, 5178, 3554, L, 5188, 3557, Q, 5189, 3558, 5190, 3558, 5192, 3521, 5192, 3507, 5193, 3504, 5194, 3503, 5198, 3501, 5199, 3498, 5201, 3492, 5208, 3490, 5208, 3482, 5208, 3476, 5206, 3471, 5204, 3469, L, 5136, 3424, Q, 5136, 3402, 5135, 3378, 5136, 3378, 5137, 3378, 5146, 3379, 5156, 3379, 5189, 3381, 5218, 3382, 5222, 3382, 5226, 3382, 5232, 3381, 5236, 3383, 5239, 3385, 5242, 3384, 5249, 3384, 5256, 3384, 5260, 3385, 5263, 3385, 5271, 3386, 5278, 3387, 5281, 3387, 5283, 3387, 5294, 3387, 5304, 3386, 5307, 3386, 5309, 3385, 5310, 3385, 5311, 3384, L, 5444, 3205, Q, 5429, 3099, 5392, 3025, L, 5236, 2936, 5248, 2818, 5355, 2865, 5437, 2819, 5483, 2819, 5524, 2827, 5524, 2827, Q, 5524, 2830, 5525, 2833, 5525, 2838, 5525, 2845, 5524, 2863, 5524, 2882, L, 5616, 2927, 5711, 2898, 5710, 2824, Q, 5781, 2809, 5841, 2764, L, 5762, 2648, 5826, 2556, 5976, 2556, 5931, 2476, 5757, 2476, 5774, 2354, 5702, 2281, 5589, 2254, 5516, 2134, 5390, 2148, 5229, 2240, 5160, 2327, 5101, 2355, 5027, 2291, Q, 4979, 2401, 4854, 2465, L, 4767, 2401, Q, 4774, 2345, 4757, 2289, 4765, 2260, 4791, 2235, L, 4750, 2210, 4750, 2209, 4776, 2164, 4588, 1992, Q, 4591, 1891, 4608, 1790, L, 4722, 1634, 4641, 1531, 4609, 1560, 4544, 1548, 4405, 1349, 4442, 1082, Q, 4403, 1053, 4358, 1046, Z]
      ],
      "label": "Schaffhausen",
      "shortLabel": "SH",
      "labelPosition": [405.8, 254.9],
      "labelAlignment": [CEN, MID]
    },
    "CH.SH.OK": {
      "outlines": [
        [M, 2533, 2216, Q, 2530, 2215, 2525, 2212, 2518, 2211, 2508, 2210, 2505, 2208, 2503, 2208, 2429, 2110, 2328, 2065, L, 2192, 2076, 2025, 2281, Q, 2025, 2307, 2025, 2334, 2025, 2338, 2026, 2343, 2027, 2348, 2023, 2348, 1892, 2413, 1732, 2450, 1746, 2579, 1792, 2637, 1794, 2638, 1796, 2638, 1839, 2650, 1868, 2637, 1865, 2641, 1865, 2653, 1860, 2659, 1857, 2664, 1855, 2668, 1853, 2673, 1853, 2674, 1850, 2675, 1848, 2677, 1847, 2684, 1846, 2688, 1844, 2690, 1836, 2698, 1833, 2710, 1831, 2715, 1830, 2721, 1830, 2722, 1829, 2726, 1832, 2738, 1844, 2743, 1844, 2771, 1844, 2800, 1844, 2829, 1844, 2858, 1844, 2886, 1844, 2914, L, 1863, 2980, 1793, 3022, Q, 1793, 3050, 1793, 3079, 1793, 3108, 1793, 3138, 1793, 3144, 1793, 3150, 1822, 3150, 1852, 3150, 1860, 3150, 1869, 3150, L, 1919, 3191, Q, 1891, 3233, 1842, 3274, L, 1713, 3305, Q, 1699, 3305, 1685, 3306, 1682, 3306, 1679, 3309, 1678, 3312, 1678, 3313, 1682, 3317, 1687, 3317, 1696, 3346, 1693, 3367, 1690, 3388, 1687, 3400, L, 1410, 3601, Q, 1441, 3668, 1560, 3698, 1637, 3726, 1711, 3777, 1713, 3778, 1717, 3779, 1718, 3811, 1718, 3839, 1718, 3844, 1718, 3849, 1720, 3845, 1721, 3844, 1725, 3836, 1733, 3837, 1742, 3837, 1744, 3832, 1749, 3830, 1752, 3828, 1760, 3826, 1768, 3826, 1771, 3827, 1773, 3826, 1778, 3824, 1784, 3824, 1788, 3823, 1790, 3823, 1796, 3822, 1799, 3818, 1804, 3813, 1813, 3811, 1820, 3808, 1828, 3806, 1833, 3805, 1836, 3803, 1839, 3801, 1842, 3803, 1844, 3805, 1845, 3807, 1850, 3812, 1853, 3817, 1855, 3820, 1857, 3824, 1858, 3827, 1860, 3829, 1864, 3833, 1864, 3840, 1867, 3845, 1867, 3848, 1867, 3850, 1868, 3852, 1870, 3854, 1870, 3859, 1872, 3868, 1876, 3875, 1879, 3878, 1879, 3880, 1881, 3884, 1885, 3883, 1889, 3883, 1891, 3884, 1895, 3884, 1898, 3885, 1903, 3887, 1906, 3889, 1913, 3889, 1919, 3889, 1922, 3890, 1924, 3891, 1932, 3891, 1934, 3895, 1936, 3899, 1936, 3902, 1936, 3937, 1936, 3972, 1936, 3993, 1936, 4015, 1874, 4028, 1814, 4061, 1657, 4183, 1601, 4249, 1599, 4253, 1599, 4255, 1601, 4268, 1589, 4267, 1588, 4277, 1588, 4287, 1588, 4308, 1588, 4330, L, 1759, 4391, 1993, 4625, 2531, 4667, 2531, 4665, Q, 2465, 4612, 2385, 4529, 2361, 4483, 2347, 4458, L, 2157, 4456, 2270, 4368, 2274, 4305, 2243, 4241, 2243, 4150, 2244, 4150, 2534, 4123, 2534, 4123, Q, 2545, 4211, 2617, 4273, L, 2691, 4210, 2832, 4343, Q, 2832, 4346, 2837, 4345, 2840, 4344, 2842, 4342, 2842, 4324, 2842, 4307, 2842, 4301, 2843, 4296, 2843, 4294, 2842, 4289, 2842, 4286, 2841, 4283, 2841, 4281, 2841, 4278, 2842, 4269, 2835, 4263, 2834, 4248, 2834, 4233, 2834, 4204, 2834, 4174, 2834, 4160, 2835, 4146, L, 2834, 4134, Q, 3051, 4059, 3268, 4000, L, 3269, 3993, 3326, 3932, 3457, 3955, 3412, 3596, 3486, 3590, 3435, 3536, 3435, 3459, 3378, 3445, 3363, 3356, 3306, 3342, 3291, 3153, 3347, 3095, Q, 3337, 2984, 3308, 2876, L, 3307, 2873, 3199, 2735, 3021, 2660, 3074, 2629, 3040, 2590, Q, 3026, 2590, 3012, 2590, 2982, 2590, 2949, 2591, 2836, 2719, 2765, 2891, L, 2809, 2945, 2776, 3036, 2380, 3013, 2201, 2792, 2224, 2727, 2049, 2507, 2097, 2458, 2074, 2396, 2192, 2338, 2271, 2337, 2271, 2288, 2368, 2288, 2426, 2347, 2545, 2297, Q, 2545, 2290, 2550, 2284, L, 2550, 2283, Q, 2550, 2282, 2551, 2279, 2552, 2255, 2551, 2228, 2550, 2224, 2551, 2220, 2551, 2217, 2545, 2216, Q, 2539, 2216, 2533, 2216, Z]
      ],
      "label": "Oberklettgau",
      "shortLabel": "OK",
      "labelPosition": [244.8, 352.6],
      "labelAlignment": [CEN, MID]
    },
    "CH.SH.SM": {
      "outlines": [
        [M, 3024, 872, Q, 2866, 904, 2681, 1018, L, 2553, 1032, 2458, 1201, 2280, 1079, 2198, 1144, 2073, 1159, 2008, 1218, 1860, 1168, 1540, 1442, 1429, 1738, 1255, 1801, 1235, 1988, 1135, 2094, 1179, 2313, Q, 1189, 2325, 1205, 2334, L, 1462, 2409, 1549, 2353, 1654, 2370, 1731, 2450, Q, 1732, 2450, 1732, 2450, 1892, 2413, 2023, 2348, 2027, 2348, 2026, 2343, 2025, 2338, 2025, 2334, 2025, 2307, 2025, 2281, L, 2192, 2076, 2328, 2065, Q, 2429, 2110, 2503, 2208, 2505, 2208, 2508, 2210, 2518, 2211, 2525, 2212, 2530, 2215, 2533, 2216, 2539, 2216, 2545, 2216, 2551, 2217, 2551, 2220, 2550, 2224, 2551, 2228, 2552, 2255, 2551, 2279, 2550, 2282, 2550, 2283, L, 2550, 2284, Q, 2545, 2290, 2545, 2297, L, 2426, 2347, 2368, 2288, 2271, 2288, 2271, 2337, 2192, 2338, 2074, 2396, 2097, 2458, 2049, 2507, 2224, 2727, 2201, 2792, 2380, 3013, 2776, 3036, 2809, 2945, 2765, 2891, Q, 2836, 2719, 2949, 2591, 2946, 2564, 2946, 2535, 2946, 2510, 2946, 2486, L, 3123, 2249, Q, 3094, 2249, 3066, 2249, 3035, 2249, 3003, 2249, 3003, 2253, 2997, 2250, 2996, 2244, 2996, 2243, L, 2887, 2154, Q, 2885, 2139, 2885, 2123, 2885, 2111, 2886, 2099, 2889, 2095, 2890, 2094, L, 3022, 2012, Q, 3022, 1984, 3022, 1956, 3022, 1927, 3022, 1898, 3022, 1884, 3022, 1871, 3024, 1871, 3028, 1872, 3037, 1874, 3046, 1874, 3066, 1874, 3086, 1874, 3108, 1874, 3129, 1874, 3157, 1874, 3186, 1874, 3210, 1874, 3234, 1874, 3245, 1876, 3251, 1880, 3255, 1884, 3255, 1884, 3260, 1888, 3271, 1887, 3277, 1886, 3286, 1889, 3323, 1797, 3401, 1727, 3426, 1607, 3441, 1501, L, 3383, 1331, Q, 3388, 1181, 3372, 1058, 3354, 1038, 3336, 1019, 3309, 993, 3282, 970, 3187, 888, 3080, 843, 3076, 846, 3072, 847, 3064, 847, 3058, 850, 3050, 854, 3041, 862, 3037, 862, 3034, 866, 3034, 869, 3029, 870, Q, 3026, 873, 3024, 872, Z]
      ],
      "label": "Schleitheim",
      "shortLabel": "SM",
      "labelPosition": [228.8, 165.1],
      "labelAlignment": [CEN, MID]
    },
    "CH.SH.RE": {
      "outlines": [
        [M, 5554, 807, Q, 5550, 807, 5547, 807, 5542, 807, 5535, 807, 5520, 807, 5505, 806, 5500, 806, 5499, 808, 5495, 814, 5488, 816, 5462, 817, 5435, 817, 5434, 817, 5429, 816, L, 5112, 669, 5151, 583, 5080, 417, 4930, 485, 4854, 784, 4951, 892, 4909, 1149, Q, 4938, 1150, 4967, 1150, 4980, 1150, 4992, 1150, L, 4846, 1316, 4873, 1359, 4863, 1397, 4789, 1397, 4641, 1532, 4722, 1634, 4607, 1791, Q, 4590, 1892, 4588, 1992, L, 4775, 2164, 4750, 2210, 4790, 2235, Q, 4765, 2261, 4756, 2289, 4773, 2346, 4767, 2402, L, 4854, 2466, Q, 4979, 2402, 5026, 2292, L, 5100, 2355, 5159, 2328, 5229, 2241, 5389, 2148, 5516, 2135, 5588, 2254, 5702, 2282, 5773, 2355, 5757, 2477, 5930, 2477, 5975, 2557, 5825, 2557, 5762, 2648, 5841, 2765, 5842, 2764, Q, 5881, 2744, 5952, 2763, L, 6112, 3109, Q, 6118, 3158, 6105, 3244, L, 6224, 3313, 6237, 3382, Q, 6353, 3380, 6427, 3357, 6426, 3321, 6426, 3292, 6426, 3263, 6426, 3235, 6426, 3206, 6426, 3177, 6426, 3169, 6426, 3162, 6427, 3157, 6427, 3150, 6428, 3144, 6432, 3145, 6435, 3146, 6438, 3138, 6441, 3131, 6439, 3125, 6437, 3120, 6439, 3117, L, 6589, 2704, Q, 6378, 2598, 6378, 2595, L, 6378, 2595, 6380, 2584, Q, 6381, 2576, 6373, 2576, 6372, 2575, 6369, 2573, 6364, 2568, 6357, 2569, 6354, 2570, 6350, 2570, 6343, 2570, 6337, 2569, 6322, 2569, 6307, 2569, 6277, 2569, 6246, 2568, 6245, 2565, 6242, 2562, 6175, 2450, 6136, 2339, L, 6184, 2130, 6301, 2045, 6332, 1924, 6413, 1941, 6453, 1906, Q, 6549, 1919, 6642, 1906, 6644, 1906, 6645, 1906, L, 6685, 1861, Q, 6685, 1855, 6685, 1850, 6685, 1821, 6685, 1791, 6685, 1777, 6686, 1762, 6686, 1753, 6684, 1745, 6682, 1739, 6684, 1736, 6685, 1735, 6681, 1732, L, 6460, 1585, 6499, 1542, Q, 6447, 1469, 6392, 1448, L, 6144, 1385, 5876, 1544, 5875, 1544, Q, 5875, 1564, 5875, 1584, 5876, 1592, 5874, 1597, 5873, 1603, 5866, 1607, 5860, 1607, 5854, 1607, 5849, 1606, 5845, 1609, 5841, 1612, 5835, 1618, 5826, 1619, 5816, 1619, 5787, 1619, 5757, 1619, 5756, 1619, 5754, 1615, 5753, 1609, 5746, 1610, 5743, 1610, 5739, 1609, 5732, 1608, 5729, 1598, L, 5601, 1233, 5671, 1192, Q, 5677, 1162, 5664, 1138, L, 5579, 1038, Z]
      ],
      "label": "Reiat",
      "shortLabel": "RE",
      "labelPosition": [525.3, 161.1],
      "labelAlignment": [CEN, MID]
    },
    "CH.SH.ST": {
      "outlines": [
        [M, 8691, 2861, L, 8691, 2860, 8445, 2776, 8363, 2863, Q, 8363, 2873, 8356, 2872, 8336, 2872, 8317, 2872, 8288, 2872, 8261, 2871, L, 8186, 2806, 8299, 2688, 8300, 2687, Q, 8296, 2685, 8293, 2682, L, 8292, 2681, 8174, 2691, 8032, 2515, 7911, 2497, Q, 7909, 2484, 7911, 2472, L, 8040, 2371, 7962, 2303, 7951, 2280, Q, 7959, 2195, 7951, 2114, L, 7757, 2244, 7789, 2416, 7646, 2384, Q, 7572, 2413, 7502, 2462, 7472, 2524, 7439, 2549, 7438, 2550, 7437, 2551, L, 7224, 2680, 7223, 2681, 7223, 2794, Q, 7231, 2793, 7235, 2798, 7237, 2800, 7237, 2804, 7237, 2832, 7237, 2861, 7237, 2890, 7237, 2919, 7237, 2927, 7243, 2996, L, 7243, 2996, 7473, 3036, 7654, 3045, 7748, 3092, Q, 7745, 3110, 7746, 3128, 7753, 3128, 7759, 3128, 7756, 3133, 7756, 3140, 7752, 3145, 7751, 3148, 7750, 3150, 7750, 3153, 7749, 3162, 7751, 3170, 7750, 3198, 7750, 3224, 7750, 3230, 7749, 3237, 7749, 3243, 7750, 3248, L, 7755, 3252, 7931, 3280, 7975, 3335, 7920, 3387, 7806, 3387, 7714, 3535, Q, 7683, 3654, 7680, 3782, L, 7727, 3833, 7901, 3760, 8015, 3811, 8110, 3765, Q, 8338, 3815, 8533, 3964, L, 8598, 4124, 8846, 4252, 8697, 4450, Q, 8692, 4453, 8693, 4459, 8690, 4465, 8690, 4470, 8691, 4485, 8691, 4499, 8691, 4510, 8693, 4520, 8725, 4520, 8755, 4520, 8780, 4520, 8805, 4520, 8815, 4518, 8823, 4517, 8830, 4514, 8837, 4513, 8843, 4513, 8848, 4513, 8850, 4514, 8852, 4515, 8859, 4519, 8861, 4524, 8866, 4524, 8870, 4525, 8878, 4524, 8880, 4526, 8886, 4527, 8887, 4529, 8889, 4531, 8892, 4531, 8906, 4531, 8919, 4530, L, 9034, 4396, 9242, 4358, Q, 9239, 4128, 9209, 3972, L, 8956, 3682, Q, 8933, 3682, 8909, 3682, 8881, 3682, 8852, 3682, 8823, 3682, 8792, 3682, 8791, 3675, 8791, 3669, 8791, 3640, 8791, 3610, L, 8910, 3390, 8814, 3226, Q, 8829, 3228, 8836, 3231, 8843, 3234, 8852, 3234, 8860, 3235, 8877, 3242, L, 8882, 3242, Q, 8885, 3240, 8886, 3237, 8894, 3233, 8900, 3229, 8907, 3224, 8911, 3216, 8914, 3212, 8917, 3205, L, 9060, 3271, 9008, 3375, 9091, 3327, 9242, 3326, 9252, 3185, Q, 9239, 3185, 9225, 3185, 9219, 3185, 9212, 3186, 9201, 3187, 9204, 3176, L, 9162, 3107, 9206, 3062, 9115, 3027, 8954, 3057, 8849, 3016, 8743, 3066, Q, 8691, 2967, 8691, 2861, Z]
      ],
      "label": "Stein",
      "shortLabel": "ST",
      "labelPosition": [838.2, 332.2],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'schaffhausen',
  type: 'maps'
};