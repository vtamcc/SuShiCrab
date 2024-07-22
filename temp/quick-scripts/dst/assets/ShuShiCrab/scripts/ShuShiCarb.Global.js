
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/ShuShiCarb.Global.js';
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
    // static formatNumber(mo) {
    //     let format = "";
    //     if (mo >= 1000000) {
    //         mo /= 1000000;
    //         format = " M";
    //     } else if (mo >= 1000) {
    //         mo /= 1000;
    //         format = " K";
    //     }
    //     return Math.floor(mo) + format;
    // }
    Global.formatNumber = function (num, digits) {
        if (digits === void 0) { digits = 0; }
        if (num == 0)
            return "0";
        if (digits != 0) {
            return num.toFixed(digits).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        }
        return num.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    Global.soundManager = null;
    Global.totalGold = 0;
    Global.dataHook = [{ price: 150, speed: 1.5, widthHook: 3 },
        { price: 300, speed: 1.5, widthHook: 4 },
        { price: 450, speed: 1.5, widthHook: 4 },
        { price: 600, speed: 1.5, widthHook: 4 },
        { price: 750, speed: 2.5, widthHook: 6, }];
    Global.dataBagMoney = [{ price: 120, gold: 1 },
        { price: 250, gold: 2 },
        { price: 320, gold: 2 },
        { price: 450, gold: 2 },
        { price: 750, gold: 4 }
    ];
    Global.dataTimeHappy = [{ price: 120, time: 2 },
        { price: 250, time: 2 },
        { price: 320, time: 2 },
        { price: 450, time: 2 },
        { price: 750, time: 4 }
    ];
    Global.timeHappy = 10;
    Global.checkBagMoney = false;
    Global.speedHook = 20;
    Global.moneyBag = 10;
    Global.lengthHook = 40;
    Global.isMusicOn = true;
    Global.isSoundOn = true;
    Global.hookIndex = 0;
    Global.bagIndex = 0;
    Global.timeIndex = 0;
    Global.timeHappyUpdated = false; // Thêm biến cờ
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBSWxGO0lBQUE7SUE0REEsQ0FBQztJQXhCRyw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBRXZCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFFBQVE7SUFFUixzQ0FBc0M7SUFDdEMsSUFBSTtJQUVVLG1CQUFZLEdBQTFCLFVBQTJCLEdBQVcsRUFBRSxNQUFrQjtRQUFsQix1QkFBQSxFQUFBLFVBQWtCO1FBQ3RELElBQUksR0FBRyxJQUFJLENBQUM7WUFDUixPQUFPLEdBQUcsQ0FBQztRQUNmLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNiLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEU7UUFDRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQXhETSxtQkFBWSxHQUFpQixJQUFJLENBQUE7SUFDakMsZ0JBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsZUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQztRQUNwRCxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFDO1FBQ3JDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUM7UUFDckMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQztRQUNyQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQztJQUVyQyxtQkFBWSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDeEMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDckIsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDckIsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDcEIsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUM7S0FDdkIsQ0FBQTtJQUVNLG9CQUFhLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUN6QyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUNyQixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUNyQixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUNyQixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztLQUN4QixDQUFBO0lBRU0sZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixvQkFBYSxHQUFHLEtBQUssQ0FBQztJQUN0QixnQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLGVBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxpQkFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQixnQkFBUyxHQUFHLElBQUksQ0FBQztJQUNqQixnQkFBUyxHQUFHLElBQUksQ0FBQztJQUNqQixnQkFBUyxHQUFXLENBQUMsQ0FBQztJQUN0QixlQUFRLEdBQVcsQ0FBQyxDQUFDO0lBQ3JCLGdCQUFTLEdBQVcsQ0FBQyxDQUFDO0lBRXRCLHVCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLGVBQWU7SUEwQnBELGFBQUM7Q0E1REQsQUE0REMsSUFBQTtrQkE1RG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi9TaHVTaGlDYXJiLlNvdW5kTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWwge1xuICAgIHN0YXRpYyBzb3VuZE1hbmFnZXI6IFNvdW5kTWFuYWdlciA9IG51bGxcbiAgICBzdGF0aWMgdG90YWxHb2xkOiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBkYXRhSG9vayA9IFt7cHJpY2U6IDE1MCxzcGVlZDogMS41LCB3aWR0aEhvb2s6IDN9LCAvLyBpZCAwXG4gICAgICAgIHtwcmljZTogMzAwLHNwZWVkOiAxLjUsIHdpZHRoSG9vazogNH0sIFxuICAgICAgICB7cHJpY2U6IDQ1MCxzcGVlZDogMS41LCB3aWR0aEhvb2s6IDR9LFxuICAgICAgICB7cHJpY2U6IDYwMCxzcGVlZDogMS41LCB3aWR0aEhvb2s6IDR9LFxuICAgICAgICB7cHJpY2U6IDc1MCxzcGVlZDogMi41LCB3aWR0aEhvb2s6IDYsfV07XG5cbiAgICBzdGF0aWMgZGF0YUJhZ01vbmV5ID0gW3twcmljZTogMTIwLCBnb2xkOiAxfSwgLy8gaWQgMVxuICAgICAgICB7cHJpY2U6IDI1MCwgZ29sZDogMn0sXG4gICAgICAgIHtwcmljZTogMzIwLCBnb2xkOiAyfSxcbiAgICAgICAge3ByaWNlOiA0NTAsZ29sZDogMn0sXG4gICAgICAgIHtwcmljZTogNzUwLGdvbGQ6IDR9XG4gICAgXVxuXG4gICAgc3RhdGljIGRhdGFUaW1lSGFwcHkgPSBbe3ByaWNlOiAxMjAsIHRpbWU6IDJ9LCAvL2lkIDJcbiAgICAgICAge3ByaWNlOiAyNTAsIHRpbWU6IDJ9LFxuICAgICAgICB7cHJpY2U6IDMyMCwgdGltZTogMn0sXG4gICAgICAgIHtwcmljZTogNDUwLCB0aW1lOiAyfSxcbiAgICAgICAge3ByaWNlOiA3NTAsIHRpbWU6IDR9XG4gICAgXVxuICAgIFxuICAgIHN0YXRpYyB0aW1lSGFwcHkgPSAxMDtcbiAgICBzdGF0aWMgY2hlY2tCYWdNb25leSA9IGZhbHNlO1xuICAgIHN0YXRpYyBzcGVlZEhvb2sgPSAyMDtcbiAgICBzdGF0aWMgbW9uZXlCYWcgPSAxMDtcbiAgICBzdGF0aWMgbGVuZ3RoSG9vayA9IDQwO1xuICAgIHN0YXRpYyBpc011c2ljT24gPSB0cnVlO1xuICAgIHN0YXRpYyBpc1NvdW5kT24gPSB0cnVlO1xuICAgIHN0YXRpYyBob29rSW5kZXg6IG51bWJlciA9IDA7XG4gICAgc3RhdGljIGJhZ0luZGV4OiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyB0aW1lSW5kZXg6IG51bWJlciA9IDA7XG4gICAgXG4gICAgc3RhdGljIHRpbWVIYXBweVVwZGF0ZWQgPSBmYWxzZTsgLy8gVGjDqm0gYmnhur9uIGPhu51cblxuICAgIC8vIHN0YXRpYyBmb3JtYXROdW1iZXIobW8pIHtcbiAgICAvLyAgICAgbGV0IGZvcm1hdCA9IFwiXCI7XG5cbiAgICAvLyAgICAgaWYgKG1vID49IDEwMDAwMDApIHtcbiAgICAvLyAgICAgICAgIG1vIC89IDEwMDAwMDA7XG4gICAgLy8gICAgICAgICBmb3JtYXQgPSBcIiBNXCI7XG4gICAgLy8gICAgIH0gZWxzZSBpZiAobW8gPj0gMTAwMCkge1xuICAgIC8vICAgICAgICAgbW8gLz0gMTAwMDtcbiAgICAvLyAgICAgICAgIGZvcm1hdCA9IFwiIEtcIjtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHJldHVybiBNYXRoLmZsb29yKG1vKSArIGZvcm1hdDtcbiAgICAvLyB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdE51bWJlcihudW06IG51bWJlciwgZGlnaXRzOiBudW1iZXIgPSAwKTogc3RyaW5nIHsgXG4gICAgICAgIGlmIChudW0gPT0gMCkgXG4gICAgICAgICAgICByZXR1cm4gXCIwXCI7IFxuICAgICAgICBpZiAoZGlnaXRzICE9IDApIHsgXG4gICAgICAgICAgICByZXR1cm4gbnVtLnRvRml4ZWQoZGlnaXRzKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pK1xcLikvZywgJyQxLCcpOyBcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIG51bS50b0ZpeGVkKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIuXCIpOyBcbiAgICB9XG4gICAgLy8gc3RhdGljIGRhdGFIb29rID0gWzEsMjNdO1xuICAgIFxufVxuIl19