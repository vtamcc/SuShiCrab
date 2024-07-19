
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBSWxGO0lBQUE7SUFxQ0EsQ0FBQztJQXBDVSxtQkFBWSxHQUFpQixJQUFJLENBQUE7SUFDakMsZ0JBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsZUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQztRQUNwRCxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFDO1FBQ3JDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUM7UUFDckMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQztRQUNyQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUV0QyxtQkFBWSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDeEMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDckIsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDckIsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDcEIsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUM7S0FDdkIsQ0FBQTtJQUVNLG9CQUFhLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUN6QyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUNyQixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUNyQixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUNyQixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztLQUN4QixDQUFBO0lBRU0sZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixvQkFBYSxHQUFHLEtBQUssQ0FBQztJQUN0QixnQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLGVBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxpQkFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQixnQkFBUyxHQUFHLElBQUksQ0FBQztJQUNqQixnQkFBUyxHQUFHLElBQUksQ0FBQztJQUNqQixnQkFBUyxHQUFXLENBQUMsQ0FBQztJQUN0QixlQUFRLEdBQVcsQ0FBQyxDQUFDO0lBQ3JCLGdCQUFTLEdBQVcsQ0FBQyxDQUFDO0lBS2pDLGFBQUM7Q0FyQ0QsQUFxQ0MsSUFBQTtrQkFyQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi9TaHVTaGlDYXJiLlNvdW5kTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWwge1xuICAgIHN0YXRpYyBzb3VuZE1hbmFnZXI6IFNvdW5kTWFuYWdlciA9IG51bGxcbiAgICBzdGF0aWMgdG90YWxHb2xkOiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBkYXRhSG9vayA9IFt7cHJpY2U6IDE1MCxzcGVlZDogMS41LCB3aWR0aEhvb2s6IDN9LCAvLyBpZCAwXG4gICAgICAgIHtwcmljZTogMzAwLHNwZWVkOiAyLjUsIHdpZHRoSG9vazogNX0sIFxuICAgICAgICB7cHJpY2U6IDQ1MCxzcGVlZDogMy41LCB3aWR0aEhvb2s6IDd9LFxuICAgICAgICB7cHJpY2U6IDYwMCxzcGVlZDogNC41LCB3aWR0aEhvb2s6IDl9LFxuICAgICAgICB7cHJpY2U6IDc1MCxzcGVlZDogNS41LCB3aWR0aEhvb2s6IDExLH1dO1xuXG4gICAgc3RhdGljIGRhdGFCYWdNb25leSA9IFt7cHJpY2U6IDEyMCwgZ29sZDogMX0sIC8vIGlkIDFcbiAgICAgICAge3ByaWNlOiAyNTAsIGdvbGQ6IDJ9LFxuICAgICAgICB7cHJpY2U6IDMyMCwgZ29sZDogM30sXG4gICAgICAgIHtwcmljZTogNDUwLGdvbGQ6IDR9LFxuICAgICAgICB7cHJpY2U6IDc1MCxnb2xkOiA1fVxuICAgIF1cblxuICAgIHN0YXRpYyBkYXRhVGltZUhhcHB5ID0gW3twcmljZTogMTIwLCB0aW1lOiAyfSwgLy9pZCAyXG4gICAgICAgIHtwcmljZTogMjUwLCB0aW1lOiAzfSxcbiAgICAgICAge3ByaWNlOiAzMjAsIHRpbWU6IDR9LFxuICAgICAgICB7cHJpY2U6IDQ1MCwgdGltZTogNX0sXG4gICAgICAgIHtwcmljZTogNzUwLCB0aW1lOiA2fVxuICAgIF1cbiAgICBcbiAgICBzdGF0aWMgdGltZUhhcHB5ID0gMTA7XG4gICAgc3RhdGljIGNoZWNrQmFnTW9uZXkgPSBmYWxzZTtcbiAgICBzdGF0aWMgc3BlZWRIb29rID0gMjA7XG4gICAgc3RhdGljIG1vbmV5QmFnID0gMTA7XG4gICAgc3RhdGljIGxlbmd0aEhvb2sgPSAzNTtcbiAgICBzdGF0aWMgaXNNdXNpY09uID0gdHJ1ZTtcbiAgICBzdGF0aWMgaXNTb3VuZE9uID0gdHJ1ZTtcbiAgICBzdGF0aWMgaG9va0luZGV4OiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBiYWdJbmRleDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgdGltZUluZGV4OiBudW1iZXIgPSAwO1xuXG5cbiAgICAvLyBzdGF0aWMgZGF0YUhvb2sgPSBbMSwyM107XG4gICAgXG59XG4iXX0=