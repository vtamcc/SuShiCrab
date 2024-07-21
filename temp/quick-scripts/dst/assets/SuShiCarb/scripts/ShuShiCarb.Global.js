
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxTaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBSWxGO0lBQUE7SUE0REEsQ0FBQztJQXhCRyw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBRXZCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFFBQVE7SUFFUixzQ0FBc0M7SUFDdEMsSUFBSTtJQUVVLG1CQUFZLEdBQTFCLFVBQTJCLEdBQVcsRUFBRSxNQUFrQjtRQUFsQix1QkFBQSxFQUFBLFVBQWtCO1FBQ3RELElBQUksR0FBRyxJQUFJLENBQUM7WUFDUixPQUFPLEdBQUcsQ0FBQztRQUNmLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNiLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEU7UUFDRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQXhETSxtQkFBWSxHQUFpQixJQUFJLENBQUE7SUFDakMsZ0JBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsZUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQztRQUNwRCxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFDO1FBQ3JDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUM7UUFDckMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQztRQUNyQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQztJQUVyQyxtQkFBWSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDeEMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDckIsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDckIsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUM7UUFDcEIsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUM7S0FDdkIsQ0FBQTtJQUVNLG9CQUFhLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUN6QyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUNyQixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUNyQixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztRQUNyQixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztLQUN4QixDQUFBO0lBRU0sZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixvQkFBYSxHQUFHLEtBQUssQ0FBQztJQUN0QixnQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLGVBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxpQkFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQixnQkFBUyxHQUFHLElBQUksQ0FBQztJQUNqQixnQkFBUyxHQUFHLElBQUksQ0FBQztJQUNqQixnQkFBUyxHQUFXLENBQUMsQ0FBQztJQUN0QixlQUFRLEdBQVcsQ0FBQyxDQUFDO0lBQ3JCLGdCQUFTLEdBQVcsQ0FBQyxDQUFDO0lBRXRCLHVCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLGVBQWU7SUEwQnBELGFBQUM7Q0E1REQsQUE0REMsSUFBQTtrQkE1RG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuL1NodVNoaUNhcmIuU291bmRNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWwge1xyXG4gICAgc3RhdGljIHNvdW5kTWFuYWdlcjogU291bmRNYW5hZ2VyID0gbnVsbFxyXG4gICAgc3RhdGljIHRvdGFsR29sZDogbnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBkYXRhSG9vayA9IFt7cHJpY2U6IDE1MCxzcGVlZDogMS41LCB3aWR0aEhvb2s6IDN9LCAvLyBpZCAwXHJcbiAgICAgICAge3ByaWNlOiAzMDAsc3BlZWQ6IDEuNSwgd2lkdGhIb29rOiA0fSwgXHJcbiAgICAgICAge3ByaWNlOiA0NTAsc3BlZWQ6IDEuNSwgd2lkdGhIb29rOiA0fSxcclxuICAgICAgICB7cHJpY2U6IDYwMCxzcGVlZDogMS41LCB3aWR0aEhvb2s6IDR9LFxyXG4gICAgICAgIHtwcmljZTogNzUwLHNwZWVkOiAyLjUsIHdpZHRoSG9vazogNix9XTtcclxuXHJcbiAgICBzdGF0aWMgZGF0YUJhZ01vbmV5ID0gW3twcmljZTogMTIwLCBnb2xkOiAxfSwgLy8gaWQgMVxyXG4gICAgICAgIHtwcmljZTogMjUwLCBnb2xkOiAyfSxcclxuICAgICAgICB7cHJpY2U6IDMyMCwgZ29sZDogMn0sXHJcbiAgICAgICAge3ByaWNlOiA0NTAsZ29sZDogMn0sXHJcbiAgICAgICAge3ByaWNlOiA3NTAsZ29sZDogNH1cclxuICAgIF1cclxuXHJcbiAgICBzdGF0aWMgZGF0YVRpbWVIYXBweSA9IFt7cHJpY2U6IDEyMCwgdGltZTogMn0sIC8vaWQgMlxyXG4gICAgICAgIHtwcmljZTogMjUwLCB0aW1lOiAyfSxcclxuICAgICAgICB7cHJpY2U6IDMyMCwgdGltZTogMn0sXHJcbiAgICAgICAge3ByaWNlOiA0NTAsIHRpbWU6IDJ9LFxyXG4gICAgICAgIHtwcmljZTogNzUwLCB0aW1lOiA0fVxyXG4gICAgXVxyXG4gICAgXHJcbiAgICBzdGF0aWMgdGltZUhhcHB5ID0gMTA7XHJcbiAgICBzdGF0aWMgY2hlY2tCYWdNb25leSA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHNwZWVkSG9vayA9IDIwO1xyXG4gICAgc3RhdGljIG1vbmV5QmFnID0gMTA7XHJcbiAgICBzdGF0aWMgbGVuZ3RoSG9vayA9IDQwO1xyXG4gICAgc3RhdGljIGlzTXVzaWNPbiA9IHRydWU7XHJcbiAgICBzdGF0aWMgaXNTb3VuZE9uID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBob29rSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgYmFnSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgdGltZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgXHJcbiAgICBzdGF0aWMgdGltZUhhcHB5VXBkYXRlZCA9IGZhbHNlOyAvLyBUaMOqbSBiaeG6v24gY+G7nVxyXG5cclxuICAgIC8vIHN0YXRpYyBmb3JtYXROdW1iZXIobW8pIHtcclxuICAgIC8vICAgICBsZXQgZm9ybWF0ID0gXCJcIjtcclxuXHJcbiAgICAvLyAgICAgaWYgKG1vID49IDEwMDAwMDApIHtcclxuICAgIC8vICAgICAgICAgbW8gLz0gMTAwMDAwMDtcclxuICAgIC8vICAgICAgICAgZm9ybWF0ID0gXCIgTVwiO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAobW8gPj0gMTAwMCkge1xyXG4gICAgLy8gICAgICAgICBtbyAvPSAxMDAwO1xyXG4gICAgLy8gICAgICAgICBmb3JtYXQgPSBcIiBLXCI7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gTWF0aC5mbG9vcihtbykgKyBmb3JtYXQ7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmb3JtYXROdW1iZXIobnVtOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyID0gMCk6IHN0cmluZyB7IFxyXG4gICAgICAgIGlmIChudW0gPT0gMCkgXHJcbiAgICAgICAgICAgIHJldHVybiBcIjBcIjsgXHJcbiAgICAgICAgaWYgKGRpZ2l0cyAhPSAwKSB7IFxyXG4gICAgICAgICAgICByZXR1cm4gbnVtLnRvRml4ZWQoZGlnaXRzKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pK1xcLikvZywgJyQxLCcpOyBcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBudW0udG9GaXhlZCgpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLlwiKTsgXHJcbiAgICB9XHJcbiAgICAvLyBzdGF0aWMgZGF0YUhvb2sgPSBbMSwyM107XHJcbiAgICBcclxufVxyXG4iXX0=