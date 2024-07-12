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
    Global.totalGold = 0;
    Global.dataHook = [{ price: 150, speed: 10 }, { price: 300, speed: 15 }, { price: 450, speed: 20 }, { price: 600, speed: 25 }, { price: 750, speed: 30 }];
    Global.speedHook = 20;
    return Global;
}());
exports.default = Global;

cc._RF.pop();