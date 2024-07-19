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
    Global.dataHook = [{ price: 150, speed: 1.5, widthHook: 3 },
        { price: 300, speed: 2.5, widthHook: 5 },
        { price: 450, speed: 3.5, widthHook: 7 },
        { price: 600, speed: 4.5, widthHook: 9 },
        { price: 750, speed: 5.5, widthHook: 11, }];
    Global.dataBagMoney = [{ price: 120, gold: 1 },
        { price: 250, gold: 2 },
        { price: 320, gold: 3 },
        { price: 450, gold: 4 },
        { price: 750, gold: 5 }
    ];
    Global.dataTimeHappy = [{ price: 120, time: 2 },
        { price: 250, time: 3 },
        { price: 320, time: 4 },
        { price: 450, time: 5 },
        { price: 750, time: 6 }
    ];
    Global.timeHappy = 10;
    Global.checkBagMoney = false;
    Global.speedHook = 20;
    Global.moneyBag = 10;
    Global.lengthHook = 35;
    Global.isMusicOn = true;
    Global.isSoundOn = true;
    Global.hookIndex = 0;
    Global.bagIndex = 0;
    Global.timeIndex = 0;
    return Global;
}());
exports.default = Global;

cc._RF.pop();