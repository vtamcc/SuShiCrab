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
    Global.soundManager = null;
    Global.totalGold = 0;
    Global.dataHook = [{ price: 150, speed: 1.5, widthHook: 3, isBuy: false },
        { price: 300, speed: 2.5, widthHook: 5, isBuy: false },
        { price: 450, speed: 3.5, widthHook: 7, isBuy: false },
        { price: 600, speed: 4.5, widthHook: 9, isBuy: false },
        { price: 750, speed: 5.5, widthHook: 11, isBuy: false }];
    Global.dataMoney = [{ price: 120, gold: 20, isBuy: false },
        { price: 250, gold: 25, isBuy: false },
        { price: 320, gold: 30, isBuy: false },
        { price: 450, gold: 35, isBuy: false },
        { price: 750, gold: 40, isBuy: false }
    ];
    Global.checkBagMoney = false;
    Global.speedHook = 20;
    Global.lengthHook = 35;
    Global.isMusicOn = true;
    Global.isSoundOn = true;
    Global.activeIndex = 0;
    return Global;
}());
exports.default = Global;

cc._RF.pop();