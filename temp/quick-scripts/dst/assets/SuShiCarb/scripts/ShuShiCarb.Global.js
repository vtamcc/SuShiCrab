
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
    Global.dataBagMoney = [{ price: 120, gold: 3, isBuy: false },
        { price: 250, gold: 5, isBuy: false },
        { price: 320, gold: 7, isBuy: false },
        { price: 450, gold: 9, isBuy: false },
        { price: 750, gold: 11, isBuy: false }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBSWxGO0lBQUE7SUF5QkEsQ0FBQztJQXhCVSxtQkFBWSxHQUFpQixJQUFJLENBQUE7SUFDakMsZ0JBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsZUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ2pFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNuRCxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbEQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ2xELEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFFbEQsbUJBQVksR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDdEQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNuQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ25DLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbEMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztLQUN0QyxDQUFBO0lBQ00sb0JBQWEsR0FBRyxLQUFLLENBQUM7SUFDdEIsZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixlQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2QsaUJBQVUsR0FBRyxFQUFFLENBQUM7SUFDaEIsZ0JBQVMsR0FBRyxJQUFJLENBQUM7SUFDakIsZ0JBQVMsR0FBRyxJQUFJLENBQUM7SUFDakIsa0JBQVcsR0FBVyxDQUFDLENBQUM7SUFDeEIsMEJBQW1CLEdBQVcsQ0FBQyxDQUFDO0lBRzNDLGFBQUM7Q0F6QkQsQUF5QkMsSUFBQTtrQkF6Qm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi9TaHVTaGlDYXJiLlNvdW5kTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWwge1xuICAgIHN0YXRpYyBzb3VuZE1hbmFnZXI6IFNvdW5kTWFuYWdlciA9IG51bGxcbiAgICBzdGF0aWMgdG90YWxHb2xkOiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBkYXRhSG9vayA9IFt7cHJpY2U6IDE1MCxzcGVlZDogMS41LCB3aWR0aEhvb2s6IDMsaXNCdXk6IGZhbHNlfSxcbiAgICAgICAge3ByaWNlOiAzMDAsc3BlZWQ6IDIuNSwgd2lkdGhIb29rOiA1LCBpc0J1eTogZmFsc2V9LCBcbiAgICAgICAge3ByaWNlOiA0NTAsc3BlZWQ6IDMuNSwgd2lkdGhIb29rOiA3LGlzQnV5OiBmYWxzZX0sXG4gICAgICAgIHtwcmljZTogNjAwLHNwZWVkOiA0LjUsIHdpZHRoSG9vazogOSxpc0J1eTogZmFsc2V9LFxuICAgICAgICB7cHJpY2U6IDc1MCxzcGVlZDogNS41LCB3aWR0aEhvb2s6IDExLGlzQnV5OiBmYWxzZX1dO1xuXG4gICAgc3RhdGljIGRhdGFCYWdNb25leSA9IFt7cHJpY2U6IDEyMCwgZ29sZDogMywgaXNCdXk6IGZhbHNlfSxcbiAgICAgICAge3ByaWNlOiAyNTAsIGdvbGQ6IDUsIGlzQnV5OiBmYWxzZX0sXG4gICAgICAgIHtwcmljZTogMzIwLCBnb2xkOiA3LCBpc0J1eTogZmFsc2V9LFxuICAgICAgICB7cHJpY2U6IDQ1MCxnb2xkOiA5LCBpc0J1eTogZmFsc2V9LFxuICAgICAgICB7cHJpY2U6IDc1MCxnb2xkOiAxMSwgaXNCdXk6IGZhbHNlfVxuICAgIF1cbiAgICBzdGF0aWMgY2hlY2tCYWdNb25leSA9IGZhbHNlO1xuICAgIHN0YXRpYyBzcGVlZEhvb2sgPSAyMDtcbiAgICBzdGF0aWMgbW9uZXlCYWcgPSAyMDtcbiAgICBzdGF0aWMgbGVuZ3RoSG9vayA9IDM1O1xuICAgIHN0YXRpYyBpc011c2ljT24gPSB0cnVlO1xuICAgIHN0YXRpYyBpc1NvdW5kT24gPSB0cnVlO1xuICAgIHN0YXRpYyBhY3RpdmVJbmRleDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgYWN0aXZlSW5kZXhNb25leUJhZzogbnVtYmVyID0gMDtcbiAgICAvLyBzdGF0aWMgZGF0YUhvb2sgPSBbMSwyM107XG4gICAgXG59XG4iXX0=