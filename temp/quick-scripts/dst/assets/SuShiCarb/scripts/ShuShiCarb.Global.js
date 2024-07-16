
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/ShuShiCarb.Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    Global.dataBagMoney = [{ price: 120, gold: 20, isBuy: false },
        { price: 250, gold: 25, isBuy: false },
        { price: 320, gold: 30, isBuy: false },
        { price: 450, gold: 35, isBuy: false },
        { price: 750, gold: 40, isBuy: false }
    ];
    Global.checkBagMoney = false;
    Global.speedHook = 20;
    Global.moneyBag = 20;
    Global.lengthHook = 35;
    Global.isMusicOn = true;
    Global.isSoundOn = true;
    Global.activeIndex = 0;
    Global.activeIndexMoneyBag = 0;
    return Global;
}());
exports.default = Global;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxTaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBSWxGO0lBQUE7SUF5QkEsQ0FBQztJQXhCVSxtQkFBWSxHQUFpQixJQUFJLENBQUE7SUFDakMsZ0JBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsZUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ2pFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNuRCxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbEQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ2xELEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFFbEQsbUJBQVksR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDdkQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNwQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ3BDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbkMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztLQUN0QyxDQUFBO0lBQ00sb0JBQWEsR0FBRyxLQUFLLENBQUM7SUFDdEIsZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixlQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2QsaUJBQVUsR0FBRyxFQUFFLENBQUM7SUFDaEIsZ0JBQVMsR0FBRyxJQUFJLENBQUM7SUFDakIsZ0JBQVMsR0FBRyxJQUFJLENBQUM7SUFDakIsa0JBQVcsR0FBVyxDQUFDLENBQUM7SUFDeEIsMEJBQW1CLEdBQVcsQ0FBQyxDQUFDO0lBRzNDLGFBQUM7Q0F6QkQsQUF5QkMsSUFBQTtrQkF6Qm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuL1NodVNoaUNhcmIuU291bmRNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWwge1xyXG4gICAgc3RhdGljIHNvdW5kTWFuYWdlcjogU291bmRNYW5hZ2VyID0gbnVsbFxyXG4gICAgc3RhdGljIHRvdGFsR29sZDogbnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBkYXRhSG9vayA9IFt7cHJpY2U6IDE1MCxzcGVlZDogMS41LCB3aWR0aEhvb2s6IDMsaXNCdXk6IGZhbHNlfSxcclxuICAgICAgICB7cHJpY2U6IDMwMCxzcGVlZDogMi41LCB3aWR0aEhvb2s6IDUsIGlzQnV5OiBmYWxzZX0sIFxyXG4gICAgICAgIHtwcmljZTogNDUwLHNwZWVkOiAzLjUsIHdpZHRoSG9vazogNyxpc0J1eTogZmFsc2V9LFxyXG4gICAgICAgIHtwcmljZTogNjAwLHNwZWVkOiA0LjUsIHdpZHRoSG9vazogOSxpc0J1eTogZmFsc2V9LFxyXG4gICAgICAgIHtwcmljZTogNzUwLHNwZWVkOiA1LjUsIHdpZHRoSG9vazogMTEsaXNCdXk6IGZhbHNlfV07XHJcblxyXG4gICAgc3RhdGljIGRhdGFCYWdNb25leSA9IFt7cHJpY2U6IDEyMCwgZ29sZDogMjAsIGlzQnV5OiBmYWxzZX0sXHJcbiAgICAgICAge3ByaWNlOiAyNTAsIGdvbGQ6IDI1LCBpc0J1eTogZmFsc2V9LFxyXG4gICAgICAgIHtwcmljZTogMzIwLCBnb2xkOiAzMCwgaXNCdXk6IGZhbHNlfSxcclxuICAgICAgICB7cHJpY2U6IDQ1MCxnb2xkOiAzNSwgaXNCdXk6IGZhbHNlfSxcclxuICAgICAgICB7cHJpY2U6IDc1MCxnb2xkOiA0MCwgaXNCdXk6IGZhbHNlfVxyXG4gICAgXVxyXG4gICAgc3RhdGljIGNoZWNrQmFnTW9uZXkgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBzcGVlZEhvb2sgPSAyMDtcclxuICAgIHN0YXRpYyBtb25leUJhZyA9IDIwO1xyXG4gICAgc3RhdGljIGxlbmd0aEhvb2sgPSAzNTtcclxuICAgIHN0YXRpYyBpc011c2ljT24gPSB0cnVlO1xyXG4gICAgc3RhdGljIGlzU291bmRPbiA9IHRydWU7XHJcbiAgICBzdGF0aWMgYWN0aXZlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgYWN0aXZlSW5kZXhNb25leUJhZzogbnVtYmVyID0gMDtcclxuICAgIC8vIHN0YXRpYyBkYXRhSG9vayA9IFsxLDIzXTtcclxuICAgIFxyXG59XHJcbiJdfQ==