/*
 * @Author: huangxinmin
 * @Date:   2018-07-23 11:07:49
 * @Last Modified by:   huangxinmin
 * @Last Modified time: 2018-08-03 12:00:02
 */

;
(function(factory) {
  if (typeof define === "function" && (define.amd || define.cmd) && !jQuery) {
    // AMD或CMD
    define(["jquery"], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function(root, jQuery) {
      if (jQuery === undefined) {
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        } else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    //Browser globals
    factory(jQuery);
  }

}(function($) {
  'use strict';
  var win = window,
    doc = document,
    tools = {};

  var $win = $(win),
    $doc = $(doc);

  // 封装方式
  $.fn.brand = function(options) {
    return new Brand(this, options);
  }

  // 工具方法
  tools = {
    globalTouch: {},
    lContPos: {},
    tree: {},
    json: {
      "A": [{
          "id": 1959,
          "name": "阿尔法·罗密欧",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38d1e13823677fb8a790.jpg",
          "letter": "A"
        },
        {
          "id": 1960,
          "name": "阿斯顿·马丁",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38d1e13823677fb8a791.jpg",
          "letter": "A"
        },
        {
          "id": 1961,
          "name": "奥迪",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38d7e13823677fb8a792.jpg",
          "letter": "A"
        },
        {
          "id": 2105,
          "name": "安凯客车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38d6e138238fc1b8a78f.jpg",
          "letter": "A"
        },
        {
          "id": 2156,
          "name": "AC Schnitzer",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38cde13823677fb8a78e.jpg",
          "letter": "A"
        },
        {
          "id": 2157,
          "name": "ALPINA",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38cfe13823677fb8a78f.jpg",
          "letter": "A"
        },
        {
          "id": 2173,
          "name": "ARCFOX",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f982c9e138237a38b8a793.jpg",
          "letter": "A"
        }
      ],
      "B": [{
          "id": 2174,
          "name": "北汽道达",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f982cde138238ea5b8a78b.jpg",
          "letter": "B"
        },
        {
          "id": 2122,
          "name": "北京",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38dee13823677fb8a797.jpg",
          "letter": "B"
        },
        {
          "id": 2170,
          "name": "比速汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e4e13823677fb8a79c.jpg",
          "letter": "B"
        },
        {
          "id": 2158,
          "name": "宝沃",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38dbe13823568bb8a791.jpg",
          "letter": "B"
        },
        {
          "id": 2106,
          "name": "北汽新能源",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e1e13823568bb8a792.jpg",
          "letter": "B"
        },
        {
          "id": 2076,
          "name": "北汽绅宝",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e0e13823677fb8a799.jpg",
          "letter": "B"
        },
        {
          "id": 1962,
          "name": "巴博斯",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38d8e13823677fb8a793.jpg",
          "letter": "B"
        },
        {
          "id": 1963,
          "name": "宝骏",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38d9e13823677fb8a794.jpg",
          "letter": "B"
        },
        {
          "id": 1964,
          "name": "宝马",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38dae13823677fb8a795.jpg",
          "letter": "B"
        },
        {
          "id": 1965,
          "name": "保时捷",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38dde13823677fb8a796.jpg",
          "letter": "B"
        },
        {
          "id": 1967,
          "name": "北汽幻速",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38dfe13823677fb8a798.jpg",
          "letter": "B"
        },
        {
          "id": 1968,
          "name": "北汽威旺",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e1e1382360abb8a799.jpg",
          "letter": "B"
        },
        {
          "id": 1969,
          "name": "北汽制造",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e2e13823677fb8a79a.jpg",
          "letter": "B"
        },
        {
          "id": 1970,
          "name": "奔驰",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e2e13823568bb8a793.jpg",
          "letter": "B"
        },
        {
          "id": 1971,
          "name": "奔腾",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e3e13823677fb8a79b.jpg",
          "letter": "B"
        },
        {
          "id": 1972,
          "name": "本田",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e4e138235ad3b8a78d.jpg",
          "letter": "B"
        },
        {
          "id": 1973,
          "name": "比亚迪",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e5e13823677fb8a79d.jpg",
          "letter": "B"
        },
        {
          "id": 1974,
          "name": "标致",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e6e138238fc1b8a790.jpg",
          "letter": "B"
        },
        {
          "id": 1975,
          "name": "别克",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e6e13823677fb8a79e.jpg",
          "letter": "B"
        },
        {
          "id": 1976,
          "name": "宾利",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e7e138238fc1b8a791.jpg",
          "letter": "B"
        },
        {
          "id": 1977,
          "name": "布加迪",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e7e138235ad3b8a78e.jpg",
          "letter": "B"
        }
      ],
      "C": [{
          "id": 1978,
          "name": "昌河",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e8e13823677fb8a79f.jpg",
          "letter": "C"
        },
        {
          "id": 1979,
          "name": "长安",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38e9e13823677fb8a7a0.jpg",
          "letter": "C"
        },
        {
          "id": 1980,
          "name": "长安欧尚",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38eae138238fc1b8a792.jpg",
          "letter": "C"
        },
        {
          "id": 1981,
          "name": "长城",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38eae138238fc1b8a793.jpg",
          "letter": "C"
        },
        {
          "id": 2107,
          "name": "成功汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38ebe138238fc1b8a794.jpg",
          "letter": "C"
        },
        {
          "id": 2175,
          "name": "长安跨越",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f982d4e138238ea5b8a78c.jpg",
          "letter": "C"
        },
        {
          "id": 2176,
          "name": "长安轻型车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f982d5e138236109b8a793.jpg",
          "letter": "C"
        }
      ],
      "D": [{
          "id": 2200,
          "name": "电咖",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/dianka_logo.jpg",
          "letter": "D"
        },
        {
          "id": 2159,
          "name": "东风风光",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f1e13823677fb8a7a5.jpg",
          "letter": "D"
        },
        {
          "id": 1982,
          "name": "Dacia",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140818320649.jpg",
          "letter": "D"
        },
        {
          "id": 1983,
          "name": "DS",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38ebe13823677fb8a7a1.png",
          "letter": "D"
        },
        {
          "id": 1984,
          "name": "大发",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38ece13823677fb8a7a2.jpg",
          "letter": "D"
        },
        {
          "id": 1985,
          "name": "大众",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38ede138238fc1b8a795.jpg",
          "letter": "D"
        },
        {
          "id": 1986,
          "name": "道奇",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38eee13823677fb8a7a3.jpg",
          "letter": "D"
        },
        {
          "id": 1987,
          "name": "东风",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38efe1382367e0b8a78d.jpg",
          "letter": "D"
        },
        {
          "id": 1988,
          "name": "东风风度",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f0e13823677fb8a7a4.jpg",
          "letter": "D"
        },
        {
          "id": 1989,
          "name": "东风风神",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f2e13823677fb8a7a6.jpg",
          "letter": "D"
        },
        {
          "id": 1990,
          "name": "东风风行",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f3e138236afab8a78e.jpg",
          "letter": "D"
        },
        {
          "id": 1991,
          "name": "东风小康",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f4e13823677fb8a7a7.jpg",
          "letter": "D"
        },
        {
          "id": 1992,
          "name": "东南",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f5e13823677fb8a7a8.jpg",
          "letter": "D"
        }
      ],
      "F": [{
          "id": 1993,
          "name": "Fisker",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140818540801.jpg",
          "letter": "F"
        },
        {
          "id": 1994,
          "name": "法拉利",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f6e13823677fb8a7a9.jpg",
          "letter": "F"
        },
        {
          "id": 1995,
          "name": "菲亚特",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f6e1382360abb8a79a.jpg",
          "letter": "F"
        },
        {
          "id": 1996,
          "name": "丰田",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f7e13823677fb8a7aa.jpg",
          "letter": "F"
        },
        {
          "id": 1997,
          "name": "福迪",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f8e1382367e0b8a78e.jpg",
          "letter": "F"
        },
        {
          "id": 1998,
          "name": "福汽启腾",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f9e13823677fb8a7ab.jpg",
          "letter": "F"
        },
        {
          "id": 1999,
          "name": "福特",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38f9e13823677fb8a7ac.jpg",
          "letter": "F"
        },
        {
          "id": 2000,
          "name": "福田",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38fae13823677fb8a7ad.jpg",
          "letter": "F"
        },
        {
          "id": 2198,
          "name": "Faraday Future",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/Faraday_Future_logo.jpg",
          "letter": "F"
        },
        {
          "id": 2199,
          "name": "飞驰商务车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/feichishangwuche_logo.jpg",
          "letter": "F"
        },
        {
          "id": 2171,
          "name": "福田乘用车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38fbe13823677fb8a7ae.jpg",
          "letter": "F"
        }
      ],
      "G": [{
          "id": 2196,
          "name": "广汽日野",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/guangqiriye_logo.jpg",
          "letter": "G"
        },
        {
          "id": 2197,
          "name": "广汽新能源",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/guangqixingnengyuan_logo.jpg",
          "letter": "G"
        },
        {
          "id": 2001,
          "name": "GMC",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38fce13823677fb8a7af.jpg",
          "letter": "G"
        },
        {
          "id": 2002,
          "name": "Gumpert",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140819250092.jpg",
          "letter": "G"
        },
        {
          "id": 2003,
          "name": "观致",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38fde13823677fb8a7b0.jpg",
          "letter": "G"
        },
        {
          "id": 2004,
          "name": "光冈",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38fee138236afab8a78f.jpg",
          "letter": "G"
        },
        {
          "id": 2005,
          "name": "广汽传祺",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca38ffe138237567b8a78c.jpg",
          "letter": "G"
        },
        {
          "id": 2006,
          "name": "广汽吉奥",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3900e13823677fb8a7b1.jpg",
          "letter": "G"
        },
        {
          "id": 2205,
          "name": "国金",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201806/guojingqiche.jpg",
          "letter": "G"
        }
      ],
      "H": [{
          "id": 2207,
          "name": "红星汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201807/HongXingQiChe.jpg",
          "letter": "H"
        },
        {
          "id": 2007,
          "name": "Hennessey",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140819310504.gif",
          "letter": "H"
        },
        {
          "id": 2008,
          "name": "哈飞",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3901e13823677fb8a7b2.jpg",
          "letter": "H"
        },
        {
          "id": 2009,
          "name": "哈弗",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3902e13823677fb8a7b3.jpg",
          "letter": "H"
        },
        {
          "id": 2010,
          "name": "海格",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3904e138238fc1b8a796.jpg",
          "letter": "H"
        },
        {
          "id": 2011,
          "name": "海马",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3904e13823677fb8a7b4.jpg",
          "letter": "H"
        },
        {
          "id": 2012,
          "name": "悍马",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3906e13823677fb8a7b6.jpg",
          "letter": "H"
        },
        {
          "id": 2013,
          "name": "恒天",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3907e13823677fb8a7b7.jpg",
          "letter": "H"
        },
        {
          "id": 2014,
          "name": "红旗",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3908e1382360abb8a79b.jpg",
          "letter": "H"
        },
        {
          "id": 2015,
          "name": "华普",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca390be13823677fb8a7ba.jpg",
          "letter": "H"
        },
        {
          "id": 2017,
          "name": "华泰",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca390de13823677fb8a7bb.jpg",
          "letter": "H"
        },
        {
          "id": 2018,
          "name": "黄海",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca390fe13823677fb8a7bd.jpg",
          "letter": "H"
        },
        {
          "id": 2195,
          "name": "汇众",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/huizhong_logo.jpg",
          "letter": "H"
        },
        {
          "id": 2121,
          "name": "华颂",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca390ce13823568bb8a794.jpg",
          "letter": "H"
        },
        {
          "id": 2124,
          "name": "华利",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca390ae13823677fb8a7b9.jpg",
          "letter": "H"
        },
        {
          "id": 2177,
          "name": "华骐",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f982e1e138238ea5b8a78d.jpg",
          "letter": "H"
        },
        {
          "id": 2160,
          "name": "汉腾汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3905e13823677fb8a7b5.jpg",
          "letter": "H"
        },
        {
          "id": 2161,
          "name": "华凯",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3909e13823677fb8a7b8.jpg",
          "letter": "H"
        },
        {
          "id": 2162,
          "name": "华泰新能源",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca390ee13823677fb8a7bc.jpg",
          "letter": "H"
        }
      ],
      "I": [{
        "id": 2178,
        "name": "Icona",
        "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f982e3e138236109b8a794.jpg",
        "letter": "I"
      }],
      "J": [{
          "id": 2194,
          "name": "君马",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/junma_logo.jpg",
          "letter": "J"
        },
        {
          "id": 2163,
          "name": "江铃集团新能源",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3914e138236afab8a790.jpg",
          "letter": "J"
        },
        {
          "id": 2108,
          "name": "江铃集团轻汽",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3913e1382367e0b8a791.jpg",
          "letter": "J"
        },
        {
          "id": 2109,
          "name": "金龙",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3918e13823677fb8a7c2.jpg",
          "letter": "J"
        },
        {
          "id": 2019,
          "name": "Jeep",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca390fe1382367e0b8a78f.jpg",
          "letter": "J"
        },
        {
          "id": 2020,
          "name": "吉利汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3910e1382367e0b8a790.jpg",
          "letter": "J"
        },
        {
          "id": 2021,
          "name": "江淮",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3911e13823677fb8a7be.jpg",
          "letter": "J"
        },
        {
          "id": 2022,
          "name": "江铃",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3912e13823677fb8a7bf.jpg",
          "letter": "J"
        },
        {
          "id": 2023,
          "name": "捷豹",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3915e13823677fb8a7c0.jpg",
          "letter": "J"
        },
        {
          "id": 2024,
          "name": "金杯",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3916e13823677fb8a7c1.jpg",
          "letter": "J"
        },
        {
          "id": 2025,
          "name": "金旅",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3918e13823677fb8a7c3.jpg",
          "letter": "J"
        },
        {
          "id": 2026,
          "name": "九龙",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3919e138236afab8a791.jpg",
          "letter": "J"
        },
        {
          "id": 2204,
          "name": "捷途",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201806/jietuqiche.jpg",
          "letter": "J"
        }
      ],
      "K": [{
          "id": 2027,
          "name": "KTM",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca391ae13823677fb8a7c4.jpg",
          "letter": "K"
        },
        {
          "id": 2028,
          "name": "卡尔森",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca391be13823677fb8a7c5.jpg",
          "letter": "K"
        },
        {
          "id": 2029,
          "name": "卡威",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3920e13823568bb8a795.jpg",
          "letter": "K"
        },
        {
          "id": 2030,
          "name": "开瑞",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3921e1382367e0b8a792.jpg",
          "letter": "K"
        },
        {
          "id": 2031,
          "name": "凯佰赫",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140820130213.jpg",
          "letter": "K"
        },
        {
          "id": 2032,
          "name": "凯迪拉克",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3922e13823677fb8a7c6.jpg",
          "letter": "K"
        },
        {
          "id": 2033,
          "name": "科尼赛克",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3926e13823677fb8a7c7.jpg",
          "letter": "K"
        },
        {
          "id": 2034,
          "name": "克莱斯勒",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3927e13823677fb8a7c8.jpg",
          "letter": "K"
        },
        {
          "id": 2110,
          "name": "凯翼",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3923e13823568bb8a796.jpg",
          "letter": "K"
        },
        {
          "id": 2164,
          "name": "康迪全球鹰",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3925e138236afab8a792.jpg",
          "letter": "K"
        },
        {
          "id": 2193,
          "name": "科瑞斯的",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/keruisidi_logo.jpg",
          "letter": "K"
        },
        {
          "id": 2125,
          "name": "康迪",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/kangdi.jpg",
          "letter": "K"
        },
        {
          "id": 2120,
          "name": "卡升",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca391fe138237567b8a78d.jpg",
          "letter": "K"
        }
      ],
      "L": [{
          "id": 2126,
          "name": "LOCAL MOTORS",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3928e13823677fb8a7c9.jpg",
          "letter": "L"
        },
        {
          "id": 2179,
          "name": "领克",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f982f0e138238ea5b8a78e.jpg",
          "letter": "L"
        },
        {
          "id": 2111,
          "name": "Lorinser",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3929e13823568bb8a797.jpg",
          "letter": "L"
        },
        {
          "id": 2112,
          "name": "雷丁",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/leiding.jpg",
          "letter": "L"
        },
        {
          "id": 2113,
          "name": "陆地方舟",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3932e13823677fb8a7d2.jpg",
          "letter": "L"
        },
        {
          "id": 2035,
          "name": "兰博基尼",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca392ae138236afab8a793.jpg",
          "letter": "L"
        },
        {
          "id": 2036,
          "name": "劳斯莱斯",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca392ae13823677fb8a7ca.jpg",
          "letter": "L"
        },
        {
          "id": 2037,
          "name": "雷克萨斯",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca392be13823677fb8a7cb.jpg",
          "letter": "L"
        },
        {
          "id": 2038,
          "name": "雷诺",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca392ce13823677fb8a7cc.jpg",
          "letter": "L"
        },
        {
          "id": 2039,
          "name": "理念",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca392de13823677fb8a7cd.jpg",
          "letter": "L"
        },
        {
          "id": 2040,
          "name": "力帆汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca392ee13823677fb8a7ce.jpg",
          "letter": "L"
        },
        {
          "id": 2041,
          "name": "莲花汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca392fe13823677fb8a7cf.jpg",
          "letter": "L"
        },
        {
          "id": 2042,
          "name": "猎豹汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3930e13823568bb8a798.jpg",
          "letter": "L"
        },
        {
          "id": 2043,
          "name": "林肯",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3931e13823677fb8a7d0.jpg",
          "letter": "L"
        },
        {
          "id": 2044,
          "name": "铃木",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3931e13823677fb8a7d1.jpg",
          "letter": "L"
        },
        {
          "id": 2045,
          "name": "陆风",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3933e13823677fb8a7d3.jpg",
          "letter": "L"
        },
        {
          "id": 2046,
          "name": "路虎",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3933e13823677fb8a7d4.jpg",
          "letter": "L"
        },
        {
          "id": 2047,
          "name": "路特斯",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3934e1382360abb8a79c.jpg",
          "letter": "L"
        },
        {
          "id": 2208,
          "name": "零跑汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201807/LingPaoQiChe.jpg",
          "letter": "L"
        }
      ],
      "M": [{
          "id": 2048,
          "name": "名爵",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3935e13823568bb8a799.jpg",
          "letter": "M"
        },
        {
          "id": 2049,
          "name": "MINI",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3935e13823568bb8a79a.jpg",
          "letter": "M"
        },
        {
          "id": 2050,
          "name": "马自达",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3936e13823677fb8a7d5.jpg",
          "letter": "M"
        },
        {
          "id": 2051,
          "name": "玛莎拉蒂",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3936e13823677fb8a7d6.jpg",
          "letter": "M"
        },
        {
          "id": 2052,
          "name": "迈巴赫",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3937e13823568bb8a79b.jpg",
          "letter": "M"
        },
        {
          "id": 2053,
          "name": "迈凯伦",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3938e138238fc1b8a797.jpg",
          "letter": "M"
        },
        {
          "id": 2054,
          "name": "摩根",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3938e13823677fb8a7d7.jpg",
          "letter": "M"
        }
      ],
      "N": [{
          "id": 2055,
          "name": "Noble",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140821020815.jpg",
          "letter": "N"
        },
        {
          "id": 2056,
          "name": "纳智捷",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3939e13823677fb8a7d8.jpg",
          "letter": "N"
        },
        {
          "id": 2114,
          "name": "南京金龙",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3939e13823677fb8a7d9.jpg",
          "letter": "N"
        }
      ],
      "O": [{
          "id": 2057,
          "name": "讴歌",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca393ae13823677fb8a7da.jpg",
          "letter": "O"
        },
        {
          "id": 2058,
          "name": "欧宝",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca393be13823677fb8a7db.jpg",
          "letter": "O"
        },
        {
          "id": 2059,
          "name": "欧朗",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca393ce13823677fb8a7dc.jpg",
          "letter": "O"
        }
      ],
      "P": [{
          "id": 2060,
          "name": "帕加尼",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca393ce13823677fb8a7dd.jpg",
          "letter": "P"
        },
        {
          "id": 2061,
          "name": "佩奇奥",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140821120499.jpg",
          "letter": "P"
        },
        {
          "id": 2192,
          "name": "Polestar",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/Polestar_logo.jpg",
          "letter": "P"
        }
      ],
      "Q": [{
          "id": 2190,
          "name": "庆铃",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/qingling_logo.jpg",
          "letter": "Q"
        },
        {
          "id": 2191,
          "name": "奇点汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/qidian_logo.jpg",
          "letter": "Q"
        },
        {
          "id": 2165,
          "name": "前途",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca393fe1382360abb8a79d.jpg",
          "letter": "Q"
        },
        {
          "id": 2062,
          "name": "奇瑞",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca393de13823677fb8a7de.jpg",
          "letter": "Q"
        },
        {
          "id": 2063,
          "name": "启辰",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca393de1382367e0b8a793.jpg",
          "letter": "Q"
        },
        {
          "id": 2064,
          "name": "起亚",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca393ee13823677fb8a7df.jpg",
          "letter": "Q"
        }
      ],
      "R": [{
          "id": 2065,
          "name": "日产",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3940e13823677fb8a7e0.jpg",
          "letter": "R"
        },
        {
          "id": 2066,
          "name": "荣威",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3941e1382360abb8a79e.jpg",
          "letter": "R"
        },
        {
          "id": 2067,
          "name": "如虎",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3941e13823677fb8a7e1.jpg",
          "letter": "R"
        },
        {
          "id": 2068,
          "name": "瑞麒",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3942e13823677fb8a7e2.jpg",
          "letter": "R"
        },
        {
          "id": 2180,
          "name": "瑞驰新能源",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f982fae138238ea5b8a78f.jpg",
          "letter": "R"
        }
      ],
      "S": [{
          "id": 2127,
          "name": "斯达泰克",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca394ee13823677fb8a7e8.jpg",
          "letter": "S"
        },
        {
          "id": 2189,
          "name": "山姆",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/shanmu_logo.jpg",
          "letter": "S"
        },
        {
          "id": 2166,
          "name": "赛麟",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3945e138238fc1b8a799.jpg",
          "letter": "S"
        },
        {
          "id": 2167,
          "name": "SWM斯威汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3943e138238fc1b8a798.jpg",
          "letter": "S"
        },
        {
          "id": 2115,
          "name": "陕汽通家",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3948e13823677fb8a7e4.jpg",
          "letter": "S"
        },
        {
          "id": 2077,
          "name": "世爵",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca394ae13823677fb8a7e5.jpg",
          "letter": "S"
        },
        {
          "id": 2078,
          "name": "双环",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca394be13823677fb8a7e6.jpg",
          "letter": "S"
        },
        {
          "id": 2079,
          "name": "双龙",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca394ce138236afab8a796.jpg",
          "letter": "S"
        },
        {
          "id": 2080,
          "name": "思铭",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca394ce138236afab8a797.jpg",
          "letter": "S"
        },
        {
          "id": 2081,
          "name": "斯巴鲁",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca394de13823677fb8a7e7.jpg",
          "letter": "S"
        },
        {
          "id": 2082,
          "name": "斯柯达",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca394ee13823677fb8a7e9.jpg",
          "letter": "S"
        },
        {
          "id": 2069,
          "name": "Scion",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140821580817.jpg",
          "letter": "S"
        },
        {
          "id": 2070,
          "name": "smart",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3943e13823677fb8a7e3.jpg",
          "letter": "S"
        },
        {
          "id": 2071,
          "name": "SPIRRA",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140822010308.jpg",
          "letter": "S"
        },
        {
          "id": 2072,
          "name": "SSC",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140822010609.jpg",
          "letter": "S"
        },
        {
          "id": 2073,
          "name": "萨博",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3944e138236afab8a794.jpg",
          "letter": "S"
        },
        {
          "id": 2074,
          "name": "三菱",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3946e138236afab8a795.jpg",
          "letter": "S"
        },
        {
          "id": 2075,
          "name": "上汽大通",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3949e138237567b8a78e.jpg",
          "letter": "S"
        },
        {
          "id": 2203,
          "name": "思皓",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201806/sikuqiche.jpg",
          "letter": "S"
        }
      ],
      "T": [{
          "id": 2083,
          "name": "特斯拉",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3950e1382367e0b8a795.jpg",
          "letter": "T"
        },
        {
          "id": 2084,
          "name": "腾势",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3950e13823677fb8a7ea.jpg",
          "letter": "T"
        },
        {
          "id": 2116,
          "name": "泰卡特",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca394fe1382367e0b8a794.jpg",
          "letter": "T"
        }
      ],
      "W": [{
          "id": 2168,
          "name": "潍柴英致",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3953e1382367e0b8a797.jpg",
          "letter": "W"
        },
        {
          "id": 2085,
          "name": "威麟",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3952e1382367e0b8a796.jpg",
          "letter": "W"
        },
        {
          "id": 2086,
          "name": "威兹曼",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3953e13823677fb8a7eb.jpg",
          "letter": "W"
        },
        {
          "id": 2087,
          "name": "沃尔沃",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3955e13823677fb8a7ed.gif",
          "letter": "W"
        },
        {
          "id": 2088,
          "name": "沃克斯豪尔",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140822370398.jpg",
          "letter": "W"
        },
        {
          "id": 2089,
          "name": "五菱汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3956e13823677fb8a7ee.jpg",
          "letter": "W"
        },
        {
          "id": 2090,
          "name": "五十铃",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3957e1382367e0b8a798.jpg",
          "letter": "W"
        },
        {
          "id": 2188,
          "name": "潍柴欧睿",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/weichaiourui_logo.jpg",
          "letter": "W"
        },
        {
          "id": 2202,
          "name": "威马汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201806/weimaqiche.jpg",
          "letter": "W"
        },
        {
          "id": 2172,
          "name": "蔚来",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3954e13823677fb8a7ec.jpg",
          "letter": "W"
        },
        {
          "id": 2181,
          "name": "WEY",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f98303e138231517b8a78f.jpg",
          "letter": "W"
        }
      ],
      "X": [{
          "id": 2182,
          "name": "鑫源",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f98308e138238ea5b8a790.jpg",
          "letter": "X"
        },
        {
          "id": 2201,
          "name": "小鹏汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201806/xiaopenqiche.jpg",
          "letter": "X"
        },
        {
          "id": 2187,
          "name": "星驰",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201802/xingchi_logo.jpg",
          "letter": "X"
        },
        {
          "id": 2091,
          "name": "西雅特",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3958e13823677fb8a7ef.jpg",
          "letter": "X"
        },
        {
          "id": 2092,
          "name": "现代",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3959e13823677fb8a7f0.jpg",
          "letter": "X"
        },
        {
          "id": 2093,
          "name": "雪佛兰",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca395ae138236afab8a798.jpg",
          "letter": "X"
        },
        {
          "id": 2094,
          "name": "雪铁龙",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca395be13823677fb8a7f2.jpg",
          "letter": "X"
        },
        {
          "id": 2117,
          "name": "新凯",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca395ae13823677fb8a7f1.jpg",
          "letter": "X"
        }
      ],
      "Y": [{
          "id": 2169,
          "name": "驭胜",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3961e13823677fb8a7f6.jpg",
          "letter": "Y"
        },
        {
          "id": 2095,
          "name": "亚琛施纳泽",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201405140823050473.jpg",
          "letter": "Y"
        },
        {
          "id": 2096,
          "name": "野马汽车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca395ce1382360abb8a79f.jpg",
          "letter": "Y"
        },
        {
          "id": 2097,
          "name": "一汽",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca395de138237567b8a78f.jpg",
          "letter": "Y"
        },
        {
          "id": 2098,
          "name": "依维柯",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca395ee13823677fb8a7f3.jpg",
          "letter": "Y"
        },
        {
          "id": 2099,
          "name": "英菲尼迪",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca395fe13823677fb8a7f4.jpg",
          "letter": "Y"
        },
        {
          "id": 2100,
          "name": "永源",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3960e13823677fb8a7f5.jpg",
          "letter": "Y"
        },
        {
          "id": 2183,
          "name": "宇通客车",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f98309e1382351b1b8a790.jpg",
          "letter": "Y"
        },
        {
          "id": 2184,
          "name": "御捷",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f9830de138238ea5b8a791.jpg",
          "letter": "Y"
        },
        {
          "id": 2185,
          "name": "裕路",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f9830de138238ea5b8a792.jpg",
          "letter": "Y"
        },
        {
          "id": 2186,
          "name": "云度",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201711/59f9830de138238ea5b8a793.jpg",
          "letter": "Y"
        }
      ],
      "Z": [{
          "id": 2101,
          "name": "之诺",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3962e13823677fb8a7f7.jpg",
          "letter": "Z"
        },
        {
          "id": 2102,
          "name": "中华",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3965e13823677fb8a7f8.jpg",
          "letter": "Z"
        },
        {
          "id": 2103,
          "name": "中兴",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3966e13823677fb8a7f9.jpg",
          "letter": "Z"
        },
        {
          "id": 2104,
          "name": "众泰",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3967e13823568bb8a79c.jpg",
          "letter": "Z"
        },
        {
          "id": 2119,
          "name": "知豆",
          "logo": "https://cdd-static.b0.upaiyun.com/autohome/Logo/201703/58ca3963e138237567b8a790.jpg",
          "letter": "Z"
        }
      ]
    },
    selectVal:{},
    bindTouchEvents: function(e) {
      console.log(e)
    },
    brandWrap: '.brand_list',
    brandScorll:'.brand_list__main'
  }
  // 创建构造函数
  var Brand = function(ele, ops) {
    var me = this;

    me.$element = ele;

    me.init(ops);
  }

  // 初始化
  var prototype = Brand.prototype;

  prototype.init = function(opts) {
    var me = this;
    tools.opts = me.opts = $.extend(true,{}, {
      level:3,//选择级别
      json:tools.json,//品牌的json数据
      brandName:'name',//品牌的单行名称
      brandId:'id',//品牌的单行id
      brandClick:'',//品牌单选点击
      systemName:'name',//车系的名称
      systemId:'id',//车系的id
      systemClick:'',//车系单选点击
      modelName:'name',//车型的名称
      modelId:'id',//车型的id
      success:'',//车型单选点击
    }, opts);

    // 先通过接口获取车辆品牌
    getBrand(me)
    // 给字母绑定事件
    $(".brand_list__letter ol")
          .on('touchstart', bindTouchEvents)
          .on('touchmove', bindTouchEvents)
          .on('touchend', bindTouchEvents);



    // 关闭当前
    $doc.on('touchstart','.brand_pop__bg,.brand_pop .brand_pop__close',function(){
      var bg = $(this).parents('.brand_pop');
      if(bg.data('index') == 2){
          tools.selectVal.systemVal = '';
          tools.selectVal.systemCid = '';
      }else if(bg.data('index') == 3){
          tools.selectVal.modelVal = '';
          tools.selectVal.modelCid = '';
      }
      bg.find('.brand_pop__wrap')
          .removeClass('in')
          .addClass('out');
      setTimeout(function(){
        bg.hide();
      },250)
    })
    // 首层关闭
    $doc.on('click','.brand_list .brand_pop__close',function(){
      // 重置参数
      tools.selectVal.brandVal = '';
      tools.selectVal.brandCid = '';
      tools.selectVal.systemVal = '';
      tools.selectVal.systemCid = '';
      tools.selectVal.modelVal = '';
      tools.selectVal.modelCid = '';
      console.log(tools.selectVal)
      // 关闭层
      closeBrand();
    })


    // 点击品牌单选
    $doc.on('click','.brand_list .brand_group__item',function(){
      tools.selectVal.brandVal = $(this).text();
      tools.selectVal.brandCid = $(this).data('cid');
      if(me.opts.level == 1){
        closeBrand();
        me.opts.success(tools.selectVal)
      }else{
        me.opts.brandClick(tools.selectVal);
      }
    })
    // 点击车系单选
    $doc.on('click','.card_system li',function(){
      tools.selectVal.systemVal = $(this).text();
      tools.selectVal.systemCid = $(this).data('cid');
      // 判断要选用几层
      if(me.opts.level == 2){
        closeBrand();
        me.opts.success(tools.selectVal)
      }else{
        me.opts.systemClick(tools.selectVal);
      }
    })

    // 点击车型
    $doc.on('click','.card_model li',function(){
      tools.selectVal.modelVal = $(this).text();
      tools.selectVal.modelCid = $(this).data('cid');

      // 关闭所有层
      closeBrand();
      me.opts.success(tools.selectVal)
    })
  }
  /**
   * 关闭所有层
   */
  function closeBrand(){
    $('.brand_pop__wrap')
          .removeClass('in')
          .addClass('out');
    setTimeout(function(){
        $(".brand_pop,.brand_list").hide();
      },250)
  }
  /**
   * 把车辆品牌写入到html内
   * @param  {[type]} me [description]
   * @return {[type]}    [description]
   */
  function getBrand(me) {
    var html = '<div class="brand_list" data-index="1"> <div class="brand_list__wrap"> <div class="brand_list__title"><span>车辆品牌选择</span> <div class="brand_pop__close"></div> </div> <div class="brand_list__main"> <div class="brand_list__group"><ul>';
    var i = 0;
    var opts = me.opts;
    var dataJson = opts.json == '' ? tools.json : opts.json;
    // 把json写入html
    for(var jsonItem in dataJson){
      // 把jsonItem写入到tools.tree
      tools.tree[jsonItem] = {};
      html += '<li class="brand_group__title" data-key="' + jsonItem + '">' + jsonItem + '</li>';
      dataJson[jsonItem].forEach(function(item,index){
        html += '<li class="brand_group__item" data-cid="'+item[opts.brandId]+'" >' + item[opts.brandName] + '</li>';
      })
    }
    html +='</ul> </div> </div><div class="brand_list__letter"> <ol>';
    for(var jsonItem in dataJson){
      html += '<li data-key="'+jsonItem+'" data-index="'+ i++ +'">'+jsonItem+'</li>'
    }
    html+='</ol></div></div></div><div class="brand_alert"><span></span></div> <div class="brand_pop card_system" data-index="2"> <div  class="brand_pop__bg"></div> <div class="brand_pop__wrap"> <div class="brand_pop__main"> <div class="brand_pop__title"><span>标题</span> <div class="brand_pop__close"></div> </div> <div class="brand_pop__list"> <ul></ul> </div> </div> </div> </div> <div class="brand_pop card_model" data-index="3"> <div  class="brand_pop__bg"></div> <div class="brand_pop__wrap"> <div class="brand_pop__main"> <div class="brand_pop__title"><span>标题</span> <div class="brand_pop__close"></div> </div> <div class="brand_pop__list"> <ul></ul> </div> </div> </div> </div>';
    // 写入html
    me.$element.append(html)
  }
  /**
   * 获取品牌的offset
   * @return {[type]} [description]
   */
  function getOffset() {
    if(tools.lContPos.B > 0) return;
    for(var i in tools.tree){
      tools.lContPos[i] = $('.brand_list__group .brand_group__title[data-key=' + i + ']').offset().top - 40;
    }
  }

  /**
   * 用于touch事件的回调
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  function bindTouchEvents(e) {
    e.preventDefault();
    e.stopPropagation();
    var letsilderheight = parseInt($('.brand_list__letter ol li').eq(0).css('height'));
    var letWrapHeight = $(".brand_list__letter").height();
    var globalTouch = tools.globalTouch,
        lContPos  = tools.lContPos;

    if (e.originalEvent.touches.length <= 1) {
      switch (e.type) {
        case 'touchstart':
          globalTouch.y = e.originalEvent.touches[0].clientY;
          globalTouch.dy = 0;
          globalTouch.index = $(e.target).data('index');
          var dataKey = $(e.target).data('key');
          $('.brand_alert').show().children('span').text(dataKey);
          $('.brand_list__main').scrollTop(lContPos[dataKey]);
          break;
        case 'touchmove':
          var dataKey = $('.brand_list__letter li').eq(globalTouch.dindex).text();
          globalTouch.dy = e.originalEvent.touches[0].clientY - globalTouch.y;
          globalTouch.dindex = globalTouch.dy > 0 ? Math.floor(globalTouch.dy / letsilderheight) + globalTouch.index : Math.ceil(globalTouch.dy / letsilderheight) + globalTouch.index;
          // 解决滑动到外面
          if(globalTouch.dindex > $('.brand_list__letter li').length-1 || globalTouch.dindex < 0){
            $('.brand_alert').hide();
            return;
          }
          if (Math.abs(globalTouch.dy) >= letsilderheight) {

            $('.brand_alert').show().children('span').text(dataKey);
            $('.brand_list__main').scrollTop(lContPos[dataKey]);
          }

          break;
        case 'touchend':
          setTimeout(function() {
            $('.brand_alert').hide();
          }, 300);
          break;
      }
    }
  }
  /**
   * 选择车辆品牌的回调
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  function brandClick(me){
    me.opts.brandClick($(this))
  }
  // 可以分享的方法
  prototype.show = function() {

    $(tools.brandWrap).show();
    $(tools.brandScorll).scrollTop(0);
    // 获取品牌的offset.top
    getOffset();
  }
  prototype.hide = function() {
    $('.brand_pop__wrap')
          .removeClass('in')
          .addClass('out');
    setTimeout(function(){
        $(".brand_pop,.brand_list").hide();
      },250)
  }
  // 显示车型
  prototype.systemShow = function(json){
    var html = '';
    if(!Array.isArray(json)){
      console.warn('传入的json格式不合法,json必须为Array格式')
      return;
    }
    $(".card_system .brand_pop__title span")
            .text(tools.selectVal.brandVal);
    $(".card_system")
          .show()
          .find('.brand_pop__wrap')
          .removeClass('out')
          .addClass('in');
    $(".card_system .brand_pop__list").scrollTop(0);
    json.forEach(function(item,index){
        html += '<li data-cid="'+item[tools.opts.modelId]+'">'+item[tools.opts.modelName]+'</li>'
    })

    $(".card_system ul").html(html);
  }
  // 隐藏车型
  prototype.systemHide = function(){
    $(".card_system")
          .find('.brand_pop__wrap')
          .removeClass('in')
          .addClass('out');
    setTimeout(function(){
      $(".card_system").hide();
    },400)
  }

  // 显示车系
  prototype.modelShow = function(json){
    var html = '';
    if(!Array.isArray(json)){
      console.warn('传入的json格式不合法,json必须为Array格式')
      return;
    }
    $(".card_model .brand_pop__title span")
            .text(tools.selectVal.systemVal);
    $(".card_model")
          .show()
          .find('.brand_pop__wrap')
          .removeClass('out')
          .addClass('in');
    $(".card_model .brand_pop__list").scrollTop(0);
    json.forEach(function(item,index){
        html += '<li data-cid="'+item[tools.opts.modelId]+'">'+item[tools.opts.modelName]+'</li>'
    })

    $(".card_model ul").html(html);
  }
  prototype.modelHide =  function(){
    $(".card_model")
          .find('.brand_pop__wrap')
          .removeClass('in')
          .addClass('out');
    setTimeout(function(){
      $(".card_model").hide();
    },400)
  }
}))
