
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBSWxGO0lBQUE7SUFlQSxDQUFDO0lBZFUsbUJBQVksR0FBaUIsSUFBSSxDQUFBO0lBQ2pDLGdCQUFTLEdBQVcsQ0FBQyxDQUFDO0lBQ3RCLGVBQVEsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNqRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbkQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ2xELEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNsRCxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ2xELGdCQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2YsaUJBQVUsR0FBRyxFQUFFLENBQUM7SUFDaEIsZ0JBQVMsR0FBRyxJQUFJLENBQUM7SUFDakIsZ0JBQVMsR0FBRyxJQUFJLENBQUM7SUFDakIsa0JBQVcsR0FBVyxDQUFDLENBQUM7SUFHbkMsYUFBQztDQWZELEFBZUMsSUFBQTtrQkFmb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuL1NodVNoaUNhcmIuU291bmRNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbCB7XG4gICAgc3RhdGljIHNvdW5kTWFuYWdlcjogU291bmRNYW5hZ2VyID0gbnVsbFxuICAgIHN0YXRpYyB0b3RhbEdvbGQ6IG51bWJlciA9IDA7XG4gICAgc3RhdGljIGRhdGFIb29rID0gW3twcmljZTogMTUwLHNwZWVkOiAxLjUsIHdpZHRoSG9vazogMyxpc0J1eTogZmFsc2V9LFxuICAgICAgICB7cHJpY2U6IDMwMCxzcGVlZDogMi41LCB3aWR0aEhvb2s6IDUsIGlzQnV5OiBmYWxzZX0sIFxuICAgICAgICB7cHJpY2U6IDQ1MCxzcGVlZDogMy41LCB3aWR0aEhvb2s6IDcsaXNCdXk6IGZhbHNlfSxcbiAgICAgICAge3ByaWNlOiA2MDAsc3BlZWQ6IDQuNSwgd2lkdGhIb29rOiA5LGlzQnV5OiBmYWxzZX0sXG4gICAgICAgIHtwcmljZTogNzUwLHNwZWVkOiA1LjUsIHdpZHRoSG9vazogMTEsaXNCdXk6IGZhbHNlfV07XG4gICAgc3RhdGljIHNwZWVkSG9vayA9IDIwO1xuICAgIHN0YXRpYyBsZW5ndGhIb29rID0gMzU7XG4gICAgc3RhdGljIGlzTXVzaWNPbiA9IHRydWU7XG4gICAgc3RhdGljIGlzU291bmRPbiA9IHRydWU7XG4gICAgc3RhdGljIGFjdGl2ZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIC8vIHN0YXRpYyBkYXRhSG9vayA9IFsxLDIzXTtcbiAgICBcbn1cbiJdfQ==