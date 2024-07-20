"use strict";
cc._RF.push(module, '36872qNW/5Exbg45GQJNBd+', 'ShuShiCarb.Global');
// SuShiCarb/scripts/ShuShiCarb.Global.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var Global = /** @class */ (function () {
    function Global() {
    }
    // static formatNumber(mo) {
    //     let format = "";
    //     if (mo >= 1000000) {
    //         mo /= 1000000;
    //         format = " M";
    //     } else if (mo >= 1000) {
    //         mo /= 1000;
    //         format = " K";
    //     }
    //     return Math.floor(mo) + format;
    // }
    Global.formatNumber = function (num, digits) {
        if (digits === void 0) { digits = 0; }
        if (num == 0)
            return "0";
        if (digits != 0) {
            return num.toFixed(digits).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        }
        return num.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    Global.soundManager = null;
    Global.totalGold = 0;
    Global.dataHook = [{ price: 150, speed: 1.5, widthHook: 3 },
        { price: 300, speed: 1.5, widthHook: 4 },
        { price: 450, speed: 1.5, widthHook: 4 },
        { price: 600, speed: 1.5, widthHook: 4 },
        { price: 750, speed: 2.5, widthHook: 6, }];
    Global.dataBagMoney = [{ price: 120, gold: 1 },
        { price: 250, gold: 2 },
        { price: 320, gold: 2 },
        { price: 450, gold: 2 },
        { price: 750, gold: 4 }
    ];
    Global.dataTimeHappy = [{ price: 120, time: 2 },
        { price: 250, time: 2 },
        { price: 320, time: 2 },
        { price: 450, time: 2 },
        { price: 750, time: 4 }
    ];
    Global.timeHappy = 10;
    Global.checkBagMoney = false;
    Global.speedHook = 20;
    Global.moneyBag = 10;
    Global.lengthHook = 40;
    Global.isMusicOn = true;
    Global.isSoundOn = true;
    Global.hookIndex = 0;
    Global.bagIndex = 0;
    Global.timeIndex = 0;
    Global.timeHappyUpdated = false; // Thêm biến cờ
    return Global;
}());
exports.default = Global;

cc._RF.pop();