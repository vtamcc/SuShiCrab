
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
    Global.dataBagMoney = [{ price: 120, gold: 1, isBuy: false },
        { price: 250, gold: 2, isBuy: false },
        { price: 320, gold: 3, isBuy: false },
        { price: 450, gold: 4, isBuy: false },
        { price: 750, gold: 2, isBuy: false }
    ];
    Global.dataTimeHappy = [{ price: 120, time: 2, isBuy: false },
        { price: 250, time: 1, isBuy: false },
        { price: 320, time: 1, isBuy: false },
        { price: 450, time: 1, isBuy: false },
        { price: 750, time: 2, isBuy: false }
    ];
    Global.timeHappy = 10;
    Global.checkBagMoney = false;
    Global.speedHook = 20;
    Global.moneyBag = 10;
    Global.lengthHook = 35;
    Global.isMusicOn = true;
    Global.isSoundOn = true;
    Global.activeIndex = 0;
    Global.activeIndexMoneyBag = 0;
    Global.activeIndexTimeHappy = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBSWxGO0lBQUE7SUFtQ0EsQ0FBQztJQWxDVSxtQkFBWSxHQUFpQixJQUFJLENBQUE7SUFDakMsZ0JBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsZUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ2pFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNuRCxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbEQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ2xELEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFFbEQsbUJBQVksR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDdEQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNuQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ25DLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbEMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztLQUNyQyxDQUFBO0lBRU0sb0JBQWEsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDdkQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNuQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ25DLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbkMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztLQUN0QyxDQUFBO0lBRU0sZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixvQkFBYSxHQUFHLEtBQUssQ0FBQztJQUN0QixnQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLGVBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxpQkFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQixnQkFBUyxHQUFHLElBQUksQ0FBQztJQUNqQixnQkFBUyxHQUFHLElBQUksQ0FBQztJQUNqQixrQkFBVyxHQUFXLENBQUMsQ0FBQztJQUN4QiwwQkFBbUIsR0FBVyxDQUFDLENBQUM7SUFDaEMsMkJBQW9CLEdBQVcsQ0FBQyxDQUFDO0lBRzVDLGFBQUM7Q0FuQ0QsQUFtQ0MsSUFBQTtrQkFuQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi9TaHVTaGlDYXJiLlNvdW5kTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWwge1xuICAgIHN0YXRpYyBzb3VuZE1hbmFnZXI6IFNvdW5kTWFuYWdlciA9IG51bGxcbiAgICBzdGF0aWMgdG90YWxHb2xkOiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBkYXRhSG9vayA9IFt7cHJpY2U6IDE1MCxzcGVlZDogMS41LCB3aWR0aEhvb2s6IDMsaXNCdXk6IGZhbHNlfSwgLy8gaWQgMFxuICAgICAgICB7cHJpY2U6IDMwMCxzcGVlZDogMi41LCB3aWR0aEhvb2s6IDUsIGlzQnV5OiBmYWxzZX0sIFxuICAgICAgICB7cHJpY2U6IDQ1MCxzcGVlZDogMy41LCB3aWR0aEhvb2s6IDcsaXNCdXk6IGZhbHNlfSxcbiAgICAgICAge3ByaWNlOiA2MDAsc3BlZWQ6IDQuNSwgd2lkdGhIb29rOiA5LGlzQnV5OiBmYWxzZX0sXG4gICAgICAgIHtwcmljZTogNzUwLHNwZWVkOiA1LjUsIHdpZHRoSG9vazogMTEsaXNCdXk6IGZhbHNlfV07XG5cbiAgICBzdGF0aWMgZGF0YUJhZ01vbmV5ID0gW3twcmljZTogMTIwLCBnb2xkOiAxLCBpc0J1eTogZmFsc2V9LCAvLyBpZCAxXG4gICAgICAgIHtwcmljZTogMjUwLCBnb2xkOiAyLCBpc0J1eTogZmFsc2V9LFxuICAgICAgICB7cHJpY2U6IDMyMCwgZ29sZDogMywgaXNCdXk6IGZhbHNlfSxcbiAgICAgICAge3ByaWNlOiA0NTAsZ29sZDogNCwgaXNCdXk6IGZhbHNlfSxcbiAgICAgICAge3ByaWNlOiA3NTAsZ29sZDogMiwgaXNCdXk6IGZhbHNlfVxuICAgIF1cblxuICAgIHN0YXRpYyBkYXRhVGltZUhhcHB5ID0gW3twcmljZTogMTIwLCB0aW1lOiAyLCBpc0J1eTogZmFsc2V9LCAvL2lkIDJcbiAgICAgICAge3ByaWNlOiAyNTAsIHRpbWU6IDEsIGlzQnV5OiBmYWxzZX0sXG4gICAgICAgIHtwcmljZTogMzIwLCB0aW1lOiAxLCBpc0J1eTogZmFsc2V9LFxuICAgICAgICB7cHJpY2U6IDQ1MCwgdGltZTogMSwgaXNCdXk6IGZhbHNlfSxcbiAgICAgICAge3ByaWNlOiA3NTAsIHRpbWU6IDIsIGlzQnV5OiBmYWxzZX1cbiAgICBdXG4gICAgXG4gICAgc3RhdGljIHRpbWVIYXBweSA9IDEwO1xuICAgIHN0YXRpYyBjaGVja0JhZ01vbmV5ID0gZmFsc2U7XG4gICAgc3RhdGljIHNwZWVkSG9vayA9IDIwO1xuICAgIHN0YXRpYyBtb25leUJhZyA9IDEwO1xuICAgIHN0YXRpYyBsZW5ndGhIb29rID0gMzU7XG4gICAgc3RhdGljIGlzTXVzaWNPbiA9IHRydWU7XG4gICAgc3RhdGljIGlzU291bmRPbiA9IHRydWU7XG4gICAgc3RhdGljIGFjdGl2ZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBhY3RpdmVJbmRleE1vbmV5QmFnOiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBhY3RpdmVJbmRleFRpbWVIYXBweTogbnVtYmVyID0gMDtcbiAgICAvLyBzdGF0aWMgZGF0YUhvb2sgPSBbMSwyM107XG4gICAgXG59XG4iXX0=