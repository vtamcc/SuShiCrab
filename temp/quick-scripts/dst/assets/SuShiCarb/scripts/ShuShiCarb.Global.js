
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
    Global.totalGold = 0;
    Global.dataHook = [{ price: 150, speed: 10 }, { price: 300, speed: 15 }, { price: 450, speed: 20 }, { price: 600, speed: 25 }, { price: 750, speed: 30 }];
    Global.speedHook = 20;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBR2xGO0lBQUE7SUFNQSxDQUFDO0lBTFUsZ0JBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsZUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDakksZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFHMUIsYUFBQztDQU5ELEFBTUMsSUFBQTtrQkFOb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbCB7XG4gICAgc3RhdGljIHRvdGFsR29sZDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgZGF0YUhvb2sgPSBbe3ByaWNlOiAxNTAsc3BlZWQ6IDEwfSx7cHJpY2U6IDMwMCxzcGVlZDogMTV9LCB7cHJpY2U6IDQ1MCxzcGVlZDogMjB9LHtwcmljZTogNjAwLHNwZWVkOiAyNX0se3ByaWNlOiA3NTAsc3BlZWQ6IDMwfV07XG4gICAgc3RhdGljIHNwZWVkSG9vayA9IDIwO1xuICAgIC8vIHN0YXRpYyBkYXRhSG9vayA9IFsxLDIzXTtcbiAgICBcbn1cbiJdfQ==