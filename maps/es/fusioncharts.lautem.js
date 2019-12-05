/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Lautem.17.06-21-2016 06:10:57
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
  "name": "Lautem",
  "revision": 17,
  "standaloneInit": true,
  "baseWidth": 500,
  "baseHeight": 340,
  "baseScaleFactor": 10,
  "entities": {
    "TL.BT.IL": {
      "outlines": [
        [M, 1608, 2200, Q, 1599, 2200, 1568, 2178, 1538, 2155, 1521, 2155, 1518, 2155, 1501, 2166, 1485, 2176, 1471, 2176, 1457, 2172, 1442, 2166, 1412, 2154, 1404, 2142, 1402, 2139, 1402, 2126, 1403, 2112, 1402, 2108, 1406, 2094, 1397, 2088, 1387, 2082, 1387, 2080, 1387, 2076, 1391, 2074, 1396, 2072, 1396, 2066, 1396, 2065, 1394, 2061, 1392, 2058, 1392, 2055, 1392, 2052, 1404, 2048, 1416, 2044, 1416, 2031, 1416, 2022, 1406, 1994, 1396, 1965, 1396, 1963, 1395, 1948, 1381, 1939, 1381, 1938, 1380, 1938, 1376, 1943, 1369, 1951, 1359, 1961, 1359, 1968, 1359, 1971, 1362, 1976, 1365, 1980, 1365, 1983, 1365, 1986, 1365, 1986, L, 1364, 1987, Q, 1347, 1987, 1336, 1987, 1315, 1987, 1308, 1990, 1307, 1992, 1304, 2003, 1301, 2012, 1299, 2013, 1293, 2018, 1291, 2025, 1291, 2027, 1291, 2037, 1290, 2038, 1286, 2045, 1282, 2051, 1279, 2054, 1275, 2056, 1266, 2061, 1259, 2066, 1261, 2074, 1261, 2083, 1262, 2101, 1262, 2117, 1260, 2130, 1256, 2153, 1235, 2172, 1217, 2190, 1184, 2205, 1173, 2211, 1131, 2234, 1092, 2255, 1079, 2255, 1073, 2255, 1067, 2243, 1061, 2225, 1056, 2215, 1040, 2176, 1015, 2178, 999, 2179, 960, 2165, 925, 2153, 895, 2157, 898, 2161, 899, 2168, 901, 2176, 902, 2186, 905, 2193, 911, 2228, 916, 2263, 916, 2271, 916, 2297, 914, 2300, 911, 2303, 876, 2313, 864, 2317, 848, 2329, 836, 2338, 820, 2338, 810, 2338, 793, 2333, 776, 2327, 763, 2327, 704, 2327, 681, 2367, 679, 2371, 663, 2406, 651, 2432, 637, 2448, 630, 2457, 602, 2478, 581, 2495, 574, 2513, 568, 2529, 563, 2562, 557, 2587, 530, 2587, L, 490, 2583, Q, 488, 2583, 471, 2605, 453, 2627, 448, 2628, 443, 2630, 439, 2633, 418, 2648, 402, 2686, 377, 2741, 375, 2744, 360, 2764, 341, 2775, 334, 2780, 311, 2789, 295, 2796, 289, 2804, 281, 2816, 281, 2839, L, 283, 2897, Q, 284, 2909, 287, 2927, 290, 2943, 290, 2952, 290, 2964, 284, 2980, 277, 2995, 277, 3000, 277, 3015, 300, 3040, 322, 3065, 322, 3076, 322, 3086, 313, 3102, 304, 3117, 304, 3123, 304, 3131, 310, 3133, 314, 3135, 324, 3136, 344, 3141, 344, 3171, 344, 3199, 327, 3234, 310, 3270, 310, 3304, 310, 3335, 340, 3335, 350, 3335, 460, 3297, 570, 3259, 603, 3259, 620, 3259, 627, 3260, 636, 3262, 647, 3268, 655, 3273, 670, 3283, 683, 3290, 695, 3291, 712, 3292, 735, 3314, 757, 3335, 771, 3335, 782, 3335, 799, 3325, 817, 3314, 825, 3314, 834, 3314, 844, 3319, 856, 3324, 865, 3326, 894, 3329, 904, 3333, 917, 3340, 939, 3354, 958, 3364, 974, 3364, 989, 3364, 1011, 3350, 1038, 3333, 1061, 3327, 1075, 3324, 1104, 3319, 1126, 3315, 1139, 3310, 1189, 3294, 1217, 3283, 1261, 3267, 1283, 3252, L, 1284, 3252, Q, 1284, 3251, 1284, 3251, 1328, 3233, 1384, 3168, 1442, 3100, 1466, 3088, 1480, 3081, 1507, 3061, 1541, 3036, 1556, 3027, 1622, 2985, 1680, 2991, 1702, 2993, 1726, 2960, 1754, 2920, 1766, 2914, 1800, 2897, 1837, 2875, 1875, 2852, 1889, 2843, 1906, 2833, 1948, 2827, 1973, 2824, 1987, 2808, 1982, 2788, 1977, 2776, 1972, 2763, 1963, 2748, 1961, 2746, 1957, 2744, 1949, 2740, 1949, 2739, 1944, 2737, 1943, 2730, 1943, 2723, 1942, 2719, 1940, 2709, 1931, 2707, 1921, 2707, 1916, 2705, 1906, 2701, 1903, 2682, 1897, 2653, 1896, 2650, 1894, 2647, 1872, 2637, 1851, 2629, 1851, 2619, 1851, 2616, 1854, 2608, 1857, 2600, 1857, 2599, 1857, 2595, 1853, 2590, 1849, 2587, 1845, 2586, 1840, 2585, 1839, 2578, 1838, 2571, 1831, 2570, 1819, 2568, 1814, 2565, 1805, 2561, 1805, 2551, 1805, 2545, 1818, 2535, 1831, 2524, 1831, 2510, 1831, 2469, 1814, 2448, 1805, 2439, 1801, 2435, 1796, 2429, 1796, 2421, 1796, 2412, 1804, 2407, 1807, 2405, 1822, 2399, 1848, 2390, 1848, 2368, 1848, 2353, 1846, 2352, 1846, 2351, 1826, 2342, 1820, 2332, 1819, 2330, 1817, 2325, 1817, 2315, 1817, 2307, 1815, 2304, 1813, 2299, 1806, 2295, 1797, 2290, 1783, 2274, 1770, 2260, 1770, 2257, 1770, 2251, 1781, 2245, 1791, 2238, 1791, 2229, 1791, 2223, 1781, 2223, 1778, 2223, 1772, 2226, 1765, 2228, 1762, 2229, 1761, 2212, 1747, 2205, 1727, 2198, 1714, 2190, 1718, 2185, 1727, 2177, 1730, 2174, 1730, 2163, 1730, 2155, 1719, 2153, 1715, 2152, 1705, 2152, 1694, 2152, 1687, 2162, 1680, 2171, 1654, 2171, 1642, 2171, 1636, 2171, 1628, 2172, 1625, 2179, 1622, 2187, 1619, 2195, Q, 1617, 2200, 1608, 2200, Z]
      ],
      "label": "Iliomar",
      "shortLabel": "IL",
      "labelPosition": [113.2, 270.7],
      "labelAlignment": [CEN, MID]
    },
    "TL.BT.LA": {
      "outlines": [
        [M, 2356, 45, Q, 2343, 45, 2301, 53, 2257, 61, 2256, 61, 2246, 62, 2198, 69, 2156, 75, 2137, 75, 2097, 77, 2080, 79, 2050, 82, 2035, 94, 2012, 112, 1984, 124, 1968, 132, 1937, 142, 1900, 150, 1882, 155, 1851, 162, 1836, 177, 1834, 180, 1761, 251, 1737, 275, 1666, 315, 1594, 354, 1571, 369, 1570, 370, 1569, 371, 1537, 383, 1529, 393, 1520, 403, 1509, 406, 1497, 408, 1484, 403, 1471, 398, 1467, 398, 1438, 398, 1320, 472, 1187, 557, 1183, 558, 1162, 567, 1114, 594, 1087, 609, 1054, 613, 1028, 617, 1019, 621, 1008, 625, 985, 638, 961, 657, 951, 664, 934, 677, 918, 677, 912, 677, 890, 673, 869, 669, 857, 669, 832, 669, 818, 680, 813, 684, 789, 714, 780, 724, 715, 764, 702, 764, 693, 758, 684, 752, 676, 752, 666, 752, 624, 772, 583, 793, 571, 793, 522, 793, 485, 768, 458, 750, 428, 713, 390, 665, 383, 658, 357, 633, 330, 633, 327, 633, 257, 672, 183, 713, 173, 723, 157, 739, 138, 755, 118, 772, 105, 779, 103, 781, 68, 796, 34, 813, 34, 828, 34, 850, 51, 868, 62, 879, 87, 894, 115, 911, 124, 918, 140, 934, 140, 952, 140, 953, 137, 970, 134, 988, 134, 993, 134, 1038, 158, 1086, 180, 1133, 180, 1152, 180, 1157, 179, 1177, 191, 1220, 204, 1240, 227, 1274, 270, 1277, 271, 1277, 292, 1279, 316, 1282, 359, 1293, 403, 1303, 401, 1322, 401, 1324, 400, 1326, 412, 1324, 432, 1326, 456, 1329, 459, 1329, 462, 1329, 471, 1326, 479, 1323, 485, 1323, 493, 1323, 495, 1326, 496, 1327, 495, 1334, 493, 1349, 509, 1359, 516, 1364, 531, 1363, 538, 1362, 542, 1370, 546, 1378, 549, 1378, 551, 1378, 558, 1377, 564, 1376, 567, 1378, 570, 1381, 573, 1389, 575, 1393, 581, 1393, 588, 1393, 617, 1374, 652, 1352, 659, 1348, 664, 1346, 678, 1339, 690, 1333, 697, 1333, L, 716, 1331, Q, 721, 1330, 724, 1324, 727, 1318, 733, 1317, 735, 1317, 753, 1317, 765, 1318, 773, 1314, 807, 1297, 811, 1295, 823, 1287, 834, 1285, 843, 1283, 856, 1285, 863, 1286, 879, 1282, 896, 1278, 901, 1278, 924, 1278, 943, 1291, 962, 1304, 963, 1304, 966, 1304, 972, 1295, 977, 1287, 982, 1287, 987, 1287, 996, 1291, 1005, 1295, 1009, 1295, 1014, 1295, 1020, 1292, 1027, 1288, 1031, 1288, 1036, 1288, 1040, 1291, 1045, 1295, 1045, 1299, 1045, 1300, 1043, 1307, 1043, 1314, 1048, 1318, 1051, 1320, 1057, 1321, 1062, 1323, 1062, 1329, 1062, 1333, 1059, 1334, 1058, 1334, 1051, 1334, L, 1051, 1341, Q, 1051, 1343, 1052, 1345, 1053, 1359, 1065, 1368, 1079, 1377, 1079, 1387, 1079, 1390, 1075, 1396, 1070, 1401, 1070, 1402, 1070, 1403, 1085, 1425, 1101, 1448, 1106, 1453, 1108, 1455, 1109, 1467, 1111, 1481, 1113, 1484, 1114, 1486, 1119, 1487, 1126, 1488, 1128, 1488, 1131, 1489, 1133, 1494, 1135, 1499, 1137, 1500, 1139, 1497, 1146, 1497, 1149, 1497, 1154, 1502, 1158, 1506, 1162, 1506, 1164, 1506, 1170, 1503, 1175, 1500, 1178, 1500, 1183, 1500, 1192, 1503, 1203, 1507, 1203, 1513, 1203, 1516, 1201, 1518, 1198, 1522, 1193, 1522, 1194, 1526, 1198, 1529, 1203, 1531, 1203, 1533, 1203, 1538, 1198, 1540, 1192, 1541, 1192, 1546, 1192, 1549, 1199, 1552, 1206, 1555, 1206, 1563, L, 1207, 1581, Q, 1208, 1583, 1207, 1593, 1206, 1600, 1209, 1602, 1223, 1612, 1225, 1615, 1231, 1622, 1231, 1634, 1231, 1636, 1228, 1643, 1224, 1649, 1224, 1651, 1224, 1654, 1235, 1666, 1244, 1677, 1239, 1688, L, 1251, 1688, Q, 1259, 1685, 1262, 1685, 1269, 1685, 1269, 1692, 1269, 1698, 1263, 1699, 1257, 1699, 1257, 1705, 1257, 1708, 1261, 1711, 1263, 1713, 1272, 1717, 1273, 1717, 1278, 1723, 1284, 1729, 1284, 1731, L, 1284, 1738, Q, 1282, 1738, 1273, 1741, 1265, 1743, 1261, 1742, L, 1261, 1765, Q, 1264, 1771, 1271, 1775, 1275, 1779, 1275, 1784, 1275, 1792, 1269, 1796, 1263, 1800, 1263, 1808, 1263, 1816, 1270, 1820, 1274, 1822, 1284, 1825, 1283, 1831, 1285, 1844, 1285, 1846, 1285, 1847, 1284, 1858, 1293, 1867, 1298, 1872, 1316, 1883, 1350, 1904, 1344, 1929, 1365, 1929, 1379, 1938, 1381, 1935, 1382, 1933, 1383, 1928, 1383, 1908, 1385, 1906, 1391, 1903, 1395, 1902, 1397, 1895, 1395, 1881, 1395, 1874, 1395, 1862, 1412, 1863, 1425, 1863, 1425, 1851, 1423, 1836, 1423, 1830, 1423, 1822, 1428, 1820, 1432, 1819, 1432, 1808, 1432, 1794, 1440, 1787, 1457, 1772, 1457, 1772, 1464, 1763, 1468, 1750, 1465, 1745, 1456, 1737, 1448, 1730, 1448, 1722, 1448, 1703, 1460, 1683, 1472, 1662, 1472, 1644, 1472, 1631, 1481, 1627, 1493, 1622, 1494, 1620, 1490, 1602, 1498, 1597, 1514, 1590, 1515, 1588, L, 1515, 1586, Q, 1499, 1585, 1485, 1583, 1458, 1579, 1458, 1567, 1458, 1563, 1475, 1550, 1483, 1543, 1495, 1533, L, 1495, 1527, Q, 1492, 1527, 1486, 1524, 1480, 1521, 1473, 1522, L, 1473, 1508, Q, 1477, 1506, 1488, 1505, 1496, 1505, 1502, 1499, 1521, 1478, 1526, 1474, 1531, 1470, 1539, 1464, 1546, 1459, 1552, 1459, 1568, 1459, 1571, 1458, 1581, 1457, 1586, 1450, 1587, 1448, 1598, 1446, 1604, 1445, 1602, 1430, 1600, 1418, 1606, 1413, 1609, 1410, 1621, 1409, 1633, 1409, 1648, 1392, 1663, 1375, 1663, 1362, 1663, 1356, 1659, 1347, 1655, 1338, 1654, 1334, L, 1654, 1316, 1671, 1316, Q, 1671, 1318, 1677, 1319, L, 1683, 1318, Q, 1684, 1321, 1692, 1324, 1700, 1326, 1703, 1326, 1708, 1326, 1710, 1325, L, 1710, 1301, Q, 1689, 1300, 1682, 1298, 1668, 1294, 1668, 1282, 1668, 1276, 1689, 1257, 1710, 1238, 1710, 1235, 1708, 1217, 1708, 1208, 1708, 1197, 1703, 1190, 1698, 1183, 1698, 1180, 1698, 1175, 1700, 1171, 1702, 1168, 1702, 1165, 1702, 1159, 1700, 1150, 1698, 1142, 1698, 1135, 1698, 1129, 1702, 1121, 1705, 1114, 1709, 1114, 1711, 1114, 1714, 1119, 1717, 1127, 1720, 1130, L, 1728, 1130, 1728, 1125, Q, 1736, 1125, 1739, 1124, 1744, 1122, 1744, 1115, 1743, 1114, 1738, 1114, 1730, 1114, 1727, 1118, L, 1720, 1118, Q, 1720, 1117, 1718, 1113, 1717, 1109, 1717, 1107, 1717, 1100, 1723, 1099, 1729, 1099, 1729, 1094, 1729, 1093, 1728, 1091, L, 1728, 1090, 1721, 1090, Q, 1707, 1093, 1704, 1093, 1700, 1093, 1697, 1091, 1698, 1085, 1705, 1079, 1711, 1074, 1713, 1068, L, 1713, 1058, Q, 1691, 1058, 1686, 1054, 1680, 1051, 1680, 1034, 1680, 1029, 1684, 1018, 1690, 1006, 1694, 1006, 1698, 1006, 1707, 1017, 1717, 1028, 1729, 1028, 1737, 1028, 1738, 1013, 1738, 996, 1738, 992, 1738, 978, 1750, 973, 1756, 971, 1769, 967, 1788, 955, 1809, 949, 1832, 943, 1851, 931, 1867, 922, 1932, 886, 1982, 858, 1999, 843, 2011, 836, 2041, 817, 2069, 799, 2080, 785, 2083, 781, 2093, 777, 2100, 773, 2104, 772, 2113, 770, 2118, 767, 2121, 765, 2127, 760, 2133, 757, 2147, 745, 2161, 736, 2170, 734, 2181, 733, 2193, 724, 2200, 718, 2214, 707, 2215, 706, 2223, 698, 2228, 693, 2234, 691, 2241, 688, 2247, 687, 2255, 687, 2258, 686, 2279, 681, 2309, 671, 2323, 667, 2342, 666, 2357, 664, 2360, 665, 2360, 665, 2360, 665, L, 2360, 666, Q, 2376, 666, 2382, 668, 2391, 671, 2400, 681, 2407, 689, 2415, 700, 2422, 707, 2436, 707, 2503, 706, 2503, 703, 2502, 703, 2502, 703, 2502, 703, 2503, 702, L, 2503, 703, Q, 2513, 704, 2515, 706, 2518, 709, 2525, 709, 2527, 709, 2555, 692, 2583, 675, 2591, 675, 2594, 675, 2609, 682, 2625, 689, 2633, 695, 2638, 699, 2654, 701, 2670, 703, 2676, 707, 2683, 711, 2699, 711, 2704, 711, 2710, 713, 2717, 716, 2720, 716, 2742, 715, 2745, 720, 2747, 725, 2760, 725, 2767, 725, 2773, 720, 2778, 716, 2793, 716, 2800, 716, 2812, 713, 2824, 710, 2831, 710, 2838, 710, 2844, 712, 2851, 713, 2856, 713, 2865, 713, 2884, 702, 2902, 691, 2918, 690, 2934, 689, 2938, 689, 2941, 688, 2965, 690, 2988, 691, 3007, 694, 3031, 693, 3054, 680, 3072, 669, 3080, 661, 3081, 660, 3083, 659, 3084, 658, 3084, 658, 3090, 654, 3101, 648, 3117, 638, 3125, 632, 3145, 615, 3178, 616, 3182, 616, 3190, 617, 3193, 617, 3196, 616, 3200, 615, 3204, 613, 3213, 609, 3216, 591, 3218, 573, 3222, 560, 3223, 555, 3223, 535, 3223, 516, 3222, 513, 3222, 506, 3218, 497, 3215, 491, 3215, 476, 3215, 472, 3213, 468, 3211, 464, 3211, 461, 3223, 440, 3225, 430, 3228, 421, 3229, 416, 3232, 409, 3233, 401, 3222, 402, 3211, 402, 3173, 401, 3147, 401, L, 3146, 401, Q, 3142, 402, 3109, 400, 3056, 397, 3045, 396, 3039, 396, 3029, 388, 3019, 380, 3011, 379, 3000, 379, 2994, 379, 2984, 379, 2976, 377, 2957, 375, 2931, 375, 2898, 376, 2893, 375, 2854, 373, 2835, 342, 2827, 328, 2789, 290, 2757, 259, 2749, 233, 2744, 216, 2727, 210, 2717, 207, 2697, 205, 2681, 204, 2661, 188, 2643, 173, 2641, 173, 2634, 173, 2622, 184, 2610, 194, 2595, 194, 2570, 194, 2477, 120, Q, 2385, 45, 2356, 45, Z]
      ],
      "label": "Lautém",
      "shortLabel": "LA",
      "labelPosition": [217.9, 41.3],
      "labelAlignment": [CEN, MID]
    },
    "TL.BT.LO": {
      "outlines": [
        [M, 2416, 700, Q, 2408, 689, 2401, 681, 2392, 672, 2383, 669, 2377, 667, 2361, 666, 2360, 666, 2359, 666, 2360, 666, 2361, 666, 2358, 665, 2343, 666, 2324, 668, 2310, 672, 2280, 681, 2259, 687, 2256, 688, 2248, 688, 2242, 688, 2235, 691, 2229, 694, 2224, 699, 2216, 707, 2215, 707, 2201, 719, 2194, 724, 2182, 733, 2171, 735, 2162, 736, 2148, 746, 2134, 757, 2128, 760, 2122, 765, 2119, 767, 2114, 771, 2105, 773, 2101, 774, 2094, 777, 2084, 782, 2081, 785, 2070, 799, 2042, 817, 2012, 836, 2000, 844, 1983, 858, 1933, 886, 1868, 922, 1852, 932, 1833, 943, 1810, 949, 1789, 955, 1770, 968, 1757, 971, 1751, 974, 1739, 978, 1739, 993, 1739, 997, 1739, 1014, 1738, 1029, 1730, 1029, 1718, 1029, 1708, 1017, 1699, 1006, 1695, 1006, 1691, 1006, 1685, 1019, 1681, 1029, 1681, 1034, 1681, 1051, 1687, 1055, 1692, 1058, 1714, 1058, L, 1714, 1068, Q, 1712, 1074, 1706, 1080, 1699, 1086, 1698, 1092, 1701, 1093, 1705, 1093, 1708, 1093, 1722, 1091, L, 1729, 1091, 1729, 1092, Q, 1730, 1093, 1730, 1095, 1730, 1099, 1724, 1100, 1718, 1101, 1718, 1107, 1718, 1110, 1719, 1114, 1721, 1117, 1721, 1118, L, 1728, 1118, Q, 1731, 1114, 1739, 1114, 1744, 1114, 1745, 1115, 1745, 1123, 1740, 1124, 1737, 1125, 1729, 1125, L, 1729, 1130, 1721, 1130, Q, 1718, 1127, 1715, 1120, 1712, 1114, 1710, 1114, 1706, 1114, 1703, 1122, 1699, 1129, 1699, 1135, 1699, 1142, 1701, 1151, 1703, 1160, 1703, 1166, 1703, 1168, 1701, 1172, 1699, 1176, 1699, 1181, 1699, 1184, 1704, 1191, 1709, 1198, 1709, 1208, 1709, 1217, 1711, 1235, 1711, 1238, 1690, 1258, 1669, 1276, 1669, 1282, 1669, 1294, 1683, 1299, 1690, 1301, 1711, 1301, L, 1711, 1325, Q, 1709, 1326, 1704, 1326, 1701, 1326, 1693, 1324, 1685, 1321, 1684, 1319, L, 1678, 1319, Q, 1672, 1318, 1672, 1317, L, 1655, 1317, 1655, 1334, Q, 1656, 1338, 1660, 1348, 1664, 1357, 1664, 1363, 1664, 1376, 1649, 1392, 1634, 1409, 1622, 1410, 1610, 1410, 1607, 1414, 1601, 1418, 1603, 1431, 1605, 1446, 1599, 1447, 1588, 1449, 1587, 1451, 1582, 1457, 1572, 1459, 1569, 1459, 1553, 1460, 1547, 1460, 1540, 1465, 1532, 1471, 1527, 1474, 1522, 1478, 1503, 1499, 1497, 1505, 1489, 1506, 1478, 1507, 1474, 1509, L, 1474, 1523, Q, 1481, 1521, 1487, 1524, 1493, 1528, 1496, 1528, L, 1496, 1534, Q, 1484, 1544, 1476, 1551, 1459, 1564, 1459, 1567, 1459, 1579, 1486, 1583, 1500, 1586, 1516, 1586, L, 1516, 1588, Q, 1515, 1590, 1499, 1598, 1491, 1602, 1495, 1621, 1494, 1622, 1482, 1628, 1473, 1632, 1473, 1644, 1473, 1663, 1461, 1683, 1449, 1704, 1449, 1723, 1449, 1730, 1457, 1737, 1466, 1746, 1469, 1751, 1465, 1764, 1458, 1772, 1458, 1773, 1441, 1787, 1433, 1794, 1433, 1809, 1433, 1819, 1429, 1821, 1424, 1823, 1424, 1830, 1424, 1836, 1426, 1851, 1426, 1864, 1413, 1863, 1396, 1862, 1396, 1875, 1396, 1882, 1398, 1896, 1396, 1902, 1392, 1904, 1386, 1906, 1384, 1908, 1384, 1928, 1383, 1933, 1382, 1935, 1380, 1938, 1381, 1938, 1381, 1939, 1395, 1948, 1396, 1963, 1396, 1965, 1406, 1994, 1416, 2022, 1416, 2031, 1416, 2044, 1404, 2048, 1392, 2052, 1392, 2055, 1392, 2058, 1394, 2061, 1396, 2065, 1396, 2066, 1396, 2072, 1391, 2074, 1387, 2076, 1387, 2080, 1387, 2082, 1397, 2088, 1406, 2094, 1402, 2108, 1403, 2112, 1402, 2126, 1402, 2139, 1404, 2142, 1412, 2154, 1442, 2166, 1457, 2172, 1471, 2176, 1485, 2176, 1501, 2166, 1518, 2155, 1521, 2155, 1538, 2155, 1568, 2178, 1599, 2200, 1608, 2200, 1617, 2200, 1619, 2195, 1622, 2187, 1625, 2179, 1628, 2172, 1636, 2171, 1642, 2171, 1654, 2171, 1680, 2171, 1687, 2162, 1694, 2152, 1705, 2152, 1715, 2152, 1719, 2153, 1730, 2155, 1730, 2163, 1730, 2174, 1727, 2177, 1718, 2185, 1714, 2190, 1727, 2198, 1747, 2205, 1761, 2212, 1762, 2229, 1765, 2228, 1772, 2226, 1778, 2223, 1781, 2223, 1791, 2223, 1791, 2229, 1791, 2238, 1781, 2245, 1770, 2251, 1770, 2257, 1770, 2260, 1783, 2274, 1797, 2290, 1806, 2295, 1813, 2299, 1815, 2304, 1817, 2307, 1817, 2315, 1817, 2325, 1819, 2330, 1820, 2332, 1826, 2342, 1846, 2351, 1846, 2352, 1848, 2353, 1848, 2368, 1848, 2390, 1822, 2399, 1807, 2405, 1804, 2407, 1796, 2412, 1796, 2421, 1796, 2429, 1801, 2435, 1805, 2439, 1814, 2448, 1831, 2469, 1831, 2510, 1831, 2524, 1818, 2535, 1805, 2545, 1805, 2551, 1805, 2561, 1814, 2565, 1819, 2568, 1831, 2570, 1838, 2571, 1839, 2578, 1840, 2585, 1845, 2586, 1849, 2587, 1853, 2590, 1857, 2595, 1857, 2599, 1857, 2600, 1854, 2608, 1851, 2616, 1851, 2619, 1851, 2629, 1872, 2637, 1894, 2647, 1896, 2650, 1897, 2653, 1903, 2682, 1906, 2701, 1916, 2705, 1921, 2707, 1931, 2707, 1940, 2709, 1942, 2719, 1943, 2723, 1943, 2730, 1944, 2737, 1949, 2739, 1949, 2740, 1957, 2744, 1961, 2746, 1963, 2748, 1972, 2763, 1977, 2776, 1982, 2788, 1987, 2808, 1991, 2804, 1994, 2799, 1999, 2792, 2024, 2779, 2053, 2764, 2055, 2763, 2074, 2748, 2102, 2750, 2112, 2751, 2121, 2753, 2150, 2757, 2181, 2762, 2222, 2769, 2226, 2769, 2233, 2769, 2245, 2765, 2256, 2761, 2264, 2761, 2276, 2761, 2307, 2773, 2338, 2786, 2344, 2786, 2354, 2786, 2381, 2798, 2409, 2809, 2426, 2809, 2463, 2809, 2489, 2759, 2510, 2704, 2521, 2687, L, 2561, 2628, 2603, 2601, Q, 2628, 2585, 2640, 2574, 2662, 2553, 2711, 2515, 2751, 2480, 2767, 2451, 2807, 2377, 2877, 2298, 2933, 2234, 2996, 2181, 3000, 2149, 3037, 2120, 3057, 2104, 3107, 2076, 3128, 2064, 3166, 2016, 3205, 1966, 3221, 1954, 3232, 1946, 3290, 1920, 3334, 1901, 3354, 1873, 3368, 1853, 3382, 1845, 3384, 1844, 3388, 1842, 3379, 1822, 3355, 1804, 3335, 1790, 3335, 1769, 3335, 1761, 3344, 1756, 3348, 1753, 3357, 1749, 3364, 1743, 3368, 1732, 3371, 1721, 3372, 1717, 3375, 1708, 3400, 1700, 3422, 1693, 3422, 1679, 3422, 1669, 3407, 1661, 3393, 1653, 3393, 1646, 3393, 1642, 3397, 1637, 3401, 1633, 3401, 1628, 3401, 1619, 3397, 1613, 3393, 1606, 3391, 1588, 3391, 1580, 3391, 1566, 3391, 1552, 3391, 1546, L, 3392, 1537, Q, 3391, 1522, 3391, 1515, 3391, 1503, 3394, 1498, 3398, 1491, 3399, 1475, 3400, 1467, 3403, 1456, 3405, 1447, 3405, 1438, 3405, 1425, 3389, 1413, 3369, 1401, 3361, 1393, 3353, 1387, 3336, 1375, 3319, 1364, 3308, 1354, 3292, 1340, 3283, 1328, 3272, 1315, 3265, 1299, 3261, 1289, 3247, 1271, 3239, 1260, 3239, 1244, 3239, 1237, 3244, 1232, 3250, 1227, 3250, 1219, 3250, 1216, 3233, 1207, 3215, 1197, 3211, 1191, 3202, 1178, 3201, 1168, 3201, 1161, 3201, 1156, 3200, 1147, 3200, 1106, 3205, 1071, 3206, 1023, 3206, 1007, 3207, 1001, 3209, 989, 3216, 982, 3239, 959, 3239, 951, 3239, 949, 3230, 944, 3219, 938, 3215, 935, 3209, 931, 3193, 929, 3185, 928, 3178, 922, 3171, 913, 3168, 910, 3160, 902, 3158, 898, 3157, 894, 3157, 883, 3157, 881, 3159, 867, 3161, 853, 3161, 850, 3161, 844, 3155, 829, 3148, 814, 3148, 813, 3144, 807, 3143, 797, 3143, 797, 3142, 784, 3142, 783, 3142, 782, 3140, 767, 3145, 742, 3150, 717, 3158, 694, L, 3171, 652, Q, 3173, 645, 3185, 634, 3195, 625, 3197, 617, 3194, 617, 3191, 617, 3183, 617, 3179, 617, 3146, 616, 3126, 633, 3118, 639, 3102, 649, 3091, 655, 3085, 658, 3085, 658, 3084, 659, 3082, 660, 3081, 662, 3073, 670, 3055, 680, 3032, 694, 3008, 695, 2989, 692, 2966, 690, 2942, 689, 2939, 689, 2935, 689, 2919, 691, 2903, 692, 2885, 703, 2866, 713, 2857, 713, 2852, 713, 2845, 712, 2839, 711, 2832, 711, 2825, 711, 2813, 713, 2801, 716, 2794, 716, 2779, 716, 2774, 721, 2768, 726, 2761, 726, 2748, 726, 2746, 721, 2743, 716, 2721, 716, 2718, 716, 2711, 714, 2705, 711, 2700, 712, 2684, 712, 2677, 707, 2671, 704, 2655, 701, 2639, 699, 2634, 695, 2626, 690, 2610, 682, 2595, 676, 2592, 676, 2584, 676, 2556, 692, 2528, 709, 2526, 709, 2519, 709, 2516, 706, 2514, 704, 2504, 704, 2504, 706, 2437, 707, Q, 2423, 707, 2416, 700, Z]
      ],
      "label": "Lospalos",
      "shortLabel": "LO",
      "labelPosition": [240.1, 171.3],
      "labelAlignment": [CEN, MID]
    },
    "TL.BT.LU": {
      "outlines": [
        [M, 1046, 1300, Q, 1046, 1295, 1041, 1292, 1037, 1289, 1032, 1289, 1028, 1289, 1021, 1292, 1015, 1295, 1010, 1295, 1006, 1295, 997, 1292, 988, 1287, 983, 1287, 978, 1287, 973, 1296, 967, 1304, 964, 1304, 963, 1304, 944, 1292, 925, 1278, 902, 1278, 897, 1278, 880, 1283, 864, 1286, 857, 1285, 844, 1283, 835, 1285, 824, 1287, 812, 1295, 808, 1298, 774, 1314, 766, 1318, 754, 1318, 736, 1317, 734, 1318, 728, 1318, 725, 1324, 722, 1330, 717, 1331, L, 698, 1333, Q, 691, 1333, 679, 1339, 665, 1347, 660, 1349, 653, 1352, 618, 1374, 589, 1393, 582, 1393, 576, 1393, 574, 1389, 571, 1382, 568, 1379, 565, 1376, 559, 1377, 552, 1379, 550, 1379, 547, 1379, 543, 1371, 539, 1363, 532, 1363, 517, 1365, 510, 1360, 494, 1350, 496, 1335, 497, 1328, 496, 1326, 494, 1323, 486, 1323, 480, 1323, 472, 1327, 463, 1330, 460, 1330, 457, 1330, 433, 1327, 413, 1324, 401, 1326, 397, 1344, 361, 1359, 321, 1375, 311, 1387, 294, 1412, 265, 1425, 257, 1428, 254, 1435, 250, 1444, 250, 1465, 250, 1491, 256, 1516, 265, 1551, 281, 1556, 281, 1556, 304, 1559, 320, 1561, 327, 1570, 341, 1589, 345, 1593, 355, 1605, 363, 1608, 370, 1611, 413, 1621, 443, 1628, 459, 1647, 476, 1665, 484, 1698, 489, 1719, 493, 1756, 495, 1790, 508, 1801, 515, 1806, 531, 1812, 549, 1819, 554, 1821, 579, 1837, 599, 1852, 616, 1863, 656, 1881, 690, 1896, 697, 1902, 718, 1916, 723, 1939, 726, 1954, 720, 1989, 722, 2014, 748, 2022, 753, 2023, 758, 2024, 785, 2036, 809, 2065, 823, 2081, 850, 2126, 856, 2136, 887, 2149, 891, 2151, 894, 2155, 894, 2156, 895, 2157, 895, 2157, 895, 2157, 925, 2153, 960, 2165, 999, 2179, 1015, 2178, 1040, 2176, 1056, 2215, 1061, 2225, 1067, 2243, 1073, 2255, 1079, 2255, 1092, 2255, 1131, 2234, 1173, 2211, 1184, 2205, 1217, 2190, 1235, 2172, 1256, 2153, 1260, 2130, 1262, 2117, 1262, 2101, 1261, 2083, 1261, 2074, 1259, 2066, 1266, 2061, 1275, 2056, 1279, 2054, 1282, 2051, 1286, 2045, 1290, 2038, 1291, 2037, 1291, 2027, 1291, 2025, 1293, 2018, 1299, 2013, 1301, 2012, 1304, 2003, 1307, 1992, 1308, 1990, 1315, 1987, 1336, 1987, 1347, 1987, 1364, 1987, L, 1365, 1986, Q, 1365, 1986, 1365, 1983, 1365, 1980, 1362, 1976, 1359, 1971, 1359, 1968, 1359, 1961, 1369, 1951, 1376, 1943, 1380, 1938, 1366, 1929, 1345, 1929, 1351, 1904, 1317, 1884, 1299, 1873, 1294, 1868, 1285, 1859, 1286, 1848, 1286, 1846, 1286, 1845, 1284, 1832, 1285, 1826, 1275, 1822, 1271, 1820, 1264, 1817, 1264, 1808, 1264, 1801, 1270, 1796, 1276, 1793, 1276, 1785, 1276, 1779, 1272, 1776, 1265, 1771, 1262, 1765, L, 1262, 1743, Q, 1266, 1744, 1274, 1741, 1283, 1739, 1285, 1739, L, 1285, 1732, Q, 1285, 1730, 1279, 1724, 1274, 1718, 1273, 1717, 1264, 1713, 1262, 1711, 1258, 1709, 1258, 1705, 1258, 1700, 1264, 1699, 1270, 1698, 1270, 1693, 1270, 1685, 1263, 1686, 1260, 1686, 1252, 1688, L, 1240, 1688, Q, 1245, 1678, 1236, 1667, 1225, 1654, 1225, 1651, 1225, 1650, 1229, 1643, 1232, 1636, 1232, 1635, 1232, 1622, 1226, 1615, 1224, 1613, 1210, 1603, 1207, 1600, 1208, 1593, 1209, 1583, 1208, 1581, L, 1207, 1563, Q, 1207, 1556, 1200, 1553, 1193, 1550, 1193, 1546, 1193, 1542, 1199, 1540, 1204, 1538, 1204, 1534, 1204, 1532, 1199, 1529, 1195, 1526, 1194, 1522, 1199, 1522, 1202, 1519, 1204, 1517, 1204, 1514, 1204, 1508, 1193, 1503, 1184, 1500, 1179, 1500, 1176, 1500, 1171, 1504, 1165, 1507, 1163, 1507, 1159, 1507, 1155, 1503, 1150, 1498, 1147, 1498, 1140, 1498, 1138, 1500, 1136, 1499, 1134, 1494, 1132, 1490, 1129, 1489, 1127, 1488, 1120, 1487, 1115, 1487, 1114, 1485, 1112, 1481, 1110, 1467, 1109, 1455, 1107, 1453, 1102, 1449, 1086, 1426, 1071, 1403, 1071, 1403, 1071, 1402, 1076, 1396, 1080, 1391, 1080, 1387, 1080, 1378, 1066, 1368, 1054, 1360, 1053, 1345, 1052, 1344, 1052, 1342, L, 1052, 1334, Q, 1059, 1334, 1060, 1334, 1063, 1333, 1063, 1329, 1063, 1324, 1058, 1322, 1052, 1320, 1049, 1319, 1044, 1315, 1044, 1307, Q, 1046, 1300, 1046, 1300, Z]
      ],
      "label": "Luro",
      "shortLabel": "LU",
      "labelPosition": [81.5, 165.2],
      "labelAlignment": [CEN, MID]
    },
    "TL.BT.TU": {
      "outlines": [
        [M, 4729, 772, Q, 4695, 791, 4695, 826, 4695, 851, 4695, 857, 4697, 871, 4703, 891, 4706, 901, 4705, 923, 4707, 942, 4723, 949, 4750, 962, 4755, 971, 4765, 987, 4767, 990, 4771, 996, 4780, 1000, 4791, 1007, 4811, 1019, 4829, 1028, 4840, 1028, 4850, 1028, 4855, 1027, 4861, 1025, 4868, 1019, 4870, 1017, 4877, 1007, 4885, 999, 4891, 999, 4909, 998, 4925, 987, 4940, 976, 4944, 976, 4962, 959, 4963, 921, 4963, 883, 4915, 820, 4866, 756, 4793, 756, Q, 4756, 756, 4729, 772, Z],
        [M, 3830, 165, Q, 3817, 167, 3804, 167, 3784, 167, 3769, 158, 3754, 149, 3745, 149, 3722, 149, 3662, 192, 3637, 210, 3578, 258, 3517, 314, 3486, 339, 3437, 377, 3402, 376, 3399, 376, 3396, 375, 3395, 375, 3394, 376, 3375, 377, 3335, 384, 3293, 391, 3274, 395, 3255, 400, 3234, 402, 3233, 410, 3230, 417, 3229, 422, 3226, 431, 3224, 441, 3212, 461, 3212, 465, 3214, 469, 3216, 473, 3216, 476, 3216, 492, 3219, 497, 3223, 506, 3223, 513, 3224, 517, 3224, 536, 3224, 556, 3223, 560, 3219, 573, 3217, 591, 3214, 610, 3205, 614, 3201, 616, 3197, 617, 3195, 625, 3185, 634, 3173, 645, 3171, 652, L, 3158, 694, Q, 3150, 717, 3145, 742, 3140, 767, 3142, 782, 3142, 783, 3142, 784, 3143, 797, 3143, 797, 3144, 807, 3148, 813, 3148, 814, 3155, 829, 3161, 844, 3161, 850, 3161, 853, 3159, 867, 3157, 881, 3157, 883, 3157, 894, 3158, 898, 3160, 902, 3168, 910, 3171, 913, 3178, 922, 3185, 928, 3193, 929, 3209, 931, 3215, 935, 3219, 938, 3230, 944, 3239, 949, 3239, 951, 3239, 959, 3216, 982, 3209, 989, 3207, 1001, 3206, 1007, 3206, 1023, 3205, 1071, 3200, 1106, 3200, 1147, 3201, 1156, 3201, 1161, 3201, 1168, 3202, 1178, 3211, 1191, 3215, 1197, 3233, 1207, 3250, 1216, 3250, 1219, 3250, 1227, 3244, 1232, 3239, 1237, 3239, 1244, 3239, 1260, 3247, 1271, 3261, 1289, 3265, 1299, 3272, 1315, 3283, 1328, 3292, 1340, 3308, 1354, 3319, 1364, 3336, 1375, 3353, 1387, 3361, 1393, 3369, 1401, 3389, 1413, 3405, 1425, 3405, 1438, 3405, 1447, 3403, 1456, 3400, 1467, 3399, 1475, 3398, 1491, 3394, 1498, 3391, 1503, 3391, 1515, 3391, 1522, 3392, 1537, L, 3391, 1546, Q, 3391, 1552, 3391, 1566, 3391, 1580, 3391, 1588, 3393, 1606, 3397, 1613, 3401, 1619, 3401, 1628, 3401, 1633, 3397, 1637, 3393, 1642, 3393, 1646, 3393, 1653, 3407, 1661, 3422, 1669, 3422, 1679, 3422, 1693, 3400, 1700, 3375, 1708, 3372, 1717, 3371, 1721, 3368, 1732, 3364, 1743, 3357, 1749, 3348, 1753, 3344, 1756, 3335, 1761, 3335, 1769, 3335, 1790, 3355, 1804, 3379, 1822, 3388, 1842, 3398, 1837, 3418, 1829, 3435, 1821, 3453, 1808, 3462, 1800, 3482, 1784, 3495, 1774, 3553, 1739, 3603, 1709, 3619, 1694, 3633, 1680, 3691, 1651, 3722, 1635, 3777, 1609, 3802, 1596, 3838, 1566, 3875, 1535, 3893, 1510, 3904, 1496, 3932, 1467, 3952, 1442, 3954, 1416, 3955, 1414, 3955, 1411, 3962, 1394, 3985, 1378, 3994, 1372, 4036, 1349, 4062, 1335, 4079, 1303, 4088, 1285, 4102, 1253, 4158, 1245, 4214, 1223, 4286, 1195, 4323, 1153, L, 4339, 1130, Q, 4347, 1118, 4363, 1111, 4379, 1105, 4386, 1089, 4390, 1081, 4395, 1054, 4405, 1013, 4421, 992, 4434, 976, 4465, 958, 4494, 942, 4527, 943, 4554, 943, 4582, 934, 4592, 931, 4614, 924, 4633, 917, 4643, 906, 4654, 894, 4650, 863, 4650, 860, 4649, 857, L, 4642, 791, Q, 4640, 781, 4635, 714, 4631, 664, 4624, 634, 4613, 595, 4613, 593, 4603, 571, 4583, 569, 4576, 569, 4564, 569, 4551, 569, 4545, 569, 4541, 569, 4524, 564, 4508, 558, 4503, 558, 4499, 558, 4486, 562, 4474, 565, 4466, 565, 4440, 565, 4416, 551, 4392, 537, 4382, 537, 4364, 537, 4354, 537, 4333, 538, 4330, 540, 4330, 540, 4331, 540, 4330, 540, 4329, 540, 4294, 539, 4248, 517, 4202, 495, 4176, 497, 4132, 500, 4093, 467, 4072, 449, 4042, 408, 4037, 401, 4016, 372, 3998, 350, 3993, 342, 3982, 324, 3963, 311, 3938, 292, 3936, 290, 3921, 276, 3914, 256, 3909, 240, 3908, 218, 3908, 201, 3889, 181, 3870, 162, 3853, 162, Q, 3844, 162, 3830, 165, Z]
      ],
      "label": "Tutuala",
      "shortLabel": "TU",
      "labelPosition": [377.2, 88.3],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'lautem',
  type: 'maps'
};