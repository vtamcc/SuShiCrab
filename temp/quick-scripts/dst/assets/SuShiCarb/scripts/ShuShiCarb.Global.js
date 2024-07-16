
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBSWxGO0lBQUE7SUF1QkEsQ0FBQztJQXRCVSxtQkFBWSxHQUFpQixJQUFJLENBQUE7SUFDakMsZ0JBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsZUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ2pFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNuRCxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbEQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ2xELEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFFbEQsZ0JBQVMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDcEQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNwQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ3BDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbkMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztLQUN0QyxDQUFBO0lBQ00sb0JBQWEsR0FBRyxLQUFLLENBQUM7SUFDdEIsZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixpQkFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQixnQkFBUyxHQUFHLElBQUksQ0FBQztJQUNqQixnQkFBUyxHQUFHLElBQUksQ0FBQztJQUNqQixrQkFBVyxHQUFXLENBQUMsQ0FBQztJQUduQyxhQUFDO0NBdkJELEFBdUJDLElBQUE7a0JBdkJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Tb3VuZE1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsIHtcbiAgICBzdGF0aWMgc291bmRNYW5hZ2VyOiBTb3VuZE1hbmFnZXIgPSBudWxsXG4gICAgc3RhdGljIHRvdGFsR29sZDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgZGF0YUhvb2sgPSBbe3ByaWNlOiAxNTAsc3BlZWQ6IDEuNSwgd2lkdGhIb29rOiAzLGlzQnV5OiBmYWxzZX0sXG4gICAgICAgIHtwcmljZTogMzAwLHNwZWVkOiAyLjUsIHdpZHRoSG9vazogNSwgaXNCdXk6IGZhbHNlfSwgXG4gICAgICAgIHtwcmljZTogNDUwLHNwZWVkOiAzLjUsIHdpZHRoSG9vazogNyxpc0J1eTogZmFsc2V9LFxuICAgICAgICB7cHJpY2U6IDYwMCxzcGVlZDogNC41LCB3aWR0aEhvb2s6IDksaXNCdXk6IGZhbHNlfSxcbiAgICAgICAge3ByaWNlOiA3NTAsc3BlZWQ6IDUuNSwgd2lkdGhIb29rOiAxMSxpc0J1eTogZmFsc2V9XTtcblxuICAgIHN0YXRpYyBkYXRhTW9uZXkgPSBbe3ByaWNlOiAxMjAsIGdvbGQ6IDIwLCBpc0J1eTogZmFsc2V9LFxuICAgICAgICB7cHJpY2U6IDI1MCwgZ29sZDogMjUsIGlzQnV5OiBmYWxzZX0sXG4gICAgICAgIHtwcmljZTogMzIwLCBnb2xkOiAzMCwgaXNCdXk6IGZhbHNlfSxcbiAgICAgICAge3ByaWNlOiA0NTAsZ29sZDogMzUsIGlzQnV5OiBmYWxzZX0sXG4gICAgICAgIHtwcmljZTogNzUwLGdvbGQ6IDQwLCBpc0J1eTogZmFsc2V9XG4gICAgXVxuICAgIHN0YXRpYyBjaGVja0JhZ01vbmV5ID0gZmFsc2U7XG4gICAgc3RhdGljIHNwZWVkSG9vayA9IDIwO1xuICAgIHN0YXRpYyBsZW5ndGhIb29rID0gMzU7XG4gICAgc3RhdGljIGlzTXVzaWNPbiA9IHRydWU7XG4gICAgc3RhdGljIGlzU291bmRPbiA9IHRydWU7XG4gICAgc3RhdGljIGFjdGl2ZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIC8vIHN0YXRpYyBkYXRhSG9vayA9IFsxLDIzXTtcbiAgICBcbn1cbiJdfQ==