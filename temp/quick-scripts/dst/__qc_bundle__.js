
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/ShuShiCrab/scripts/Game/ShuShiCarb.Conveyor');
require('./assets/ShuShiCrab/scripts/Game/ShuShiCarb.Food');
require('./assets/ShuShiCrab/scripts/Game/ShuShiCarb.Hook');
require('./assets/ShuShiCrab/scripts/Game/ShuShiCarb.Player');
require('./assets/ShuShiCrab/scripts/Game/ShuShiCard.CollierManager');
require('./assets/ShuShiCrab/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemShop');
require('./assets/ShuShiCrab/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ShopView');
require('./assets/ShuShiCrab/scripts/Game/Ui_Popup/ShuShiCarb.SettingView');
require('./assets/ShuShiCrab/scripts/Game/Ui_Popup/ShuShiCrab.GameOver');
require('./assets/ShuShiCrab/scripts/ShuShiCarb.Game');
require('./assets/ShuShiCrab/scripts/ShuShiCarb.GameManager');
require('./assets/ShuShiCrab/scripts/ShuShiCarb.Global');
require('./assets/ShuShiCrab/scripts/ShuShiCarb.GoldFly');
require('./assets/ShuShiCrab/scripts/ShuShiCarb.SoundManager');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ShopView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e44aVyW49Ht7kWO/WUQKjk', 'ShuShiCarb.ShopView');
// SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ShopView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShuShiCarb_Global_1 = require("../../../ShuShiCarb.Global");
var ShuShiCarb_ItemShop_1 = require("./ShuShiCarb.ItemShop");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbShopView = /** @class */ (function (_super) {
    __extends(ShuShiCarbShopView, _super);
    function ShuShiCarbShopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbGold = null;
        _this.nlistItem = null;
        _this.prfItem = null;
        _this.test = 0;
        _this.listDataHook = [];
        return _this;
        // update (dt) {}
    }
    ShuShiCarbShopView_1 = ShuShiCarbShopView;
    ShuShiCarbShopView.prototype.onLoad = function () {
        ShuShiCarbShopView_1.instance = this;
        var purchaseData = JSON.parse(cc.sys.localStorage.getItem("itemShopData")) || {
            dataHook: ShuShiCarb_Global_1.default.dataHook,
            dataBagMoney: ShuShiCarb_Global_1.default.dataBagMoney,
            dataTimeHappy: ShuShiCarb_Global_1.default.dataTimeHappy,
        };
        var hookIndex = parseInt(cc.sys.localStorage.getItem("hookIndex")) || 0;
        ShuShiCarb_Global_1.default.hookIndex = hookIndex;
        var bagIndex = parseInt(cc.sys.localStorage.getItem("bagIndex")) || 0;
        ShuShiCarb_Global_1.default.bagIndex = bagIndex;
        var timeIndex = parseInt(cc.sys.localStorage.getItem("timeIndex")) || 0;
        ShuShiCarb_Global_1.default.timeIndex = timeIndex;
        ShuShiCarb_Global_1.default.dataHook = purchaseData.dataHook;
        ShuShiCarb_Global_1.default.dataBagMoney = purchaseData.dataBagMoney;
        ShuShiCarb_Global_1.default.dataTimeHappy = purchaseData.dataTimeHappy;
        this.updateGold();
        this.itemShop();
    };
    ShuShiCarbShopView.prototype.start = function () {
    };
    ShuShiCarbShopView.prototype.updateShop = function () {
    };
    ShuShiCarbShopView.prototype.updateGold = function () {
        this.lbGold.string = ShuShiCarb_Global_1.default.totalGold + " ";
    };
    ShuShiCarbShopView.prototype.updateItemsState = function (totalGold) {
        var items = this.nlistItem.children;
        for (var i = 0; i < items.length; i++) {
            var item = items[i].getComponent(ShuShiCarb_ItemShop_1.default);
            item.updatePrice(item.index, totalGold);
        }
    };
    ShuShiCarbShopView.prototype.itemShop = function () {
        for (var i = 0; i < 3; i++) {
            var item = cc.instantiate(this.prfItem).getComponent(ShuShiCarb_ItemShop_1.default);
            item.setData(i);
            this.nlistItem.addChild(item.node);
        }
    };
    // changeBtn(isTrue: boolean) {
    //     this.nBtnGreen.active = isTrue;
    //     this.nBtnGray.active = !isTrue;
    // }
    ShuShiCarbShopView.prototype.onClickClose = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        this.node.destroy();
    };
    var ShuShiCarbShopView_1;
    ShuShiCarbShopView.instance = null;
    __decorate([
        property(cc.Label)
    ], ShuShiCarbShopView.prototype, "lbGold", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbShopView.prototype, "nlistItem", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbShopView.prototype, "prfItem", void 0);
    ShuShiCarbShopView = ShuShiCarbShopView_1 = __decorate([
        ccclass
    ], ShuShiCarbShopView);
    return ShuShiCarbShopView;
}(cc.Component));
exports.default = ShuShiCarbShopView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5TaG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnRUFBZ0Q7QUFDaEQsNkRBQXVEO0FBSWpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBdUVDO1FBcEVHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7UUE0RGxCLGlCQUFpQjtJQUNyQixDQUFDOzJCQXZFb0Isa0JBQWtCO0lBV25DLG1DQUFNLEdBQU47UUFDSSxvQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRW5DLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUk7WUFDMUUsUUFBUSxFQUFFLDJCQUFNLENBQUMsUUFBUTtZQUN6QixZQUFZLEVBQUUsMkJBQU0sQ0FBQyxZQUFZO1lBQ2pDLGFBQWEsRUFBRSwyQkFBTSxDQUFDLGFBQWE7U0FDdEMsQ0FBQztRQUVGLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEUs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YXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuaW1wb3J0IFNodVNoaUNhcmJJdGVtU2hvcCBmcm9tIFwiLi9TaHVTaGlDYXJiLkl0ZW1TaG9wXCI7XG5cblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYlNob3BWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTaHVTaGlDYXJiU2hvcFZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBubGlzdEl0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIHRlc3QgPSAwO1xuICAgIGxpc3REYXRhSG9vayA9IFtdO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU2h1U2hpQ2FyYlNob3BWaWV3Lmluc3RhbmNlID0gdGhpcztcblxuICAgICAgICBsZXQgcHVyY2hhc2VEYXRhID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpdGVtU2hvcERhdGFcIikpIHx8IHtcbiAgICAgICAgICAgIGRhdGFIb29rOiBHbG9iYWwuZGF0YUhvb2ssXG4gICAgICAgICAgICBkYXRhQmFnTW9uZXk6IEdsb2JhbC5kYXRhQmFnTW9uZXksXG4gICAgICAgICAgICBkYXRhVGltZUhhcHB5OiBHbG9iYWwuZGF0YVRpbWVIYXBweSxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaG9va0luZGV4ID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaG9va0luZGV4XCIpKSB8fCAwO1xuICAgICAgICBHbG9iYWwuaG9va0luZGV4ID0gaG9va0luZGV4O1xuICAgICAgICBsZXQgYmFnSW5kZXggPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiYWdJbmRleFwiKSkgfHwgMDtcbiAgICAgICAgR2xvYmFsLmJhZ0luZGV4ID0gYmFnSW5kZXg7XG4gICAgICAgIGxldCB0aW1lSW5kZXggPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aW1lSW5kZXhcIikpIHx8IDA7XG4gICAgICAgIEdsb2JhbC50aW1lSW5kZXggPSB0aW1lSW5kZXg7XG4gICAgICAgIEdsb2JhbC5kYXRhSG9vayA9IHB1cmNoYXNlRGF0YS5kYXRhSG9vaztcbiAgICAgICAgR2xvYmFsLmRhdGFCYWdNb25leSA9IHB1cmNoYXNlRGF0YS5kYXRhQmFnTW9uZXk7XG4gICAgICAgIEdsb2JhbC5kYXRhVGltZUhhcHB5ID0gcHVyY2hhc2VEYXRhLmRhdGFUaW1lSGFwcHk7XG4gICAgICAgIHRoaXMudXBkYXRlR29sZCgpO1xuICAgICAgICB0aGlzLml0ZW1TaG9wKCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVTaG9wKCkge1xuICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZUdvbGQoKSB7XG4gICAgICAgIHRoaXMubGJHb2xkLnN0cmluZyA9IEdsb2JhbC50b3RhbEdvbGQgKyBcIiBcIjtcbiAgICB9XG5cbiAgICB1cGRhdGVJdGVtc1N0YXRlKHRvdGFsR29sZCkge1xuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLm5saXN0SXRlbS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBpdGVtc1tpXS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkl0ZW1TaG9wKTtcbiAgICAgICAgICAgIGl0ZW0udXBkYXRlUHJpY2UoaXRlbS5pbmRleCwgdG90YWxHb2xkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGl0ZW1TaG9wKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW0pLmdldENvbXBvbmVudChTaHVTaGlDYXJiSXRlbVNob3ApXG4gICAgICAgICAgICBpdGVtLnNldERhdGEoaSk7XG4gICAgICAgICAgICB0aGlzLm5saXN0SXRlbS5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNoYW5nZUJ0bihpc1RydWU6IGJvb2xlYW4pIHtcbiAgICAvLyAgICAgdGhpcy5uQnRuR3JlZW4uYWN0aXZlID0gaXNUcnVlO1xuICAgIC8vICAgICB0aGlzLm5CdG5HcmF5LmFjdGl2ZSA9ICFpc1RydWU7XG4gICAgLy8gfVxuICAgIG9uQ2xpY2tDbG9zZSgpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5zb3VuZE1hbmFnZXIpIHtcbiAgICAgICAgICAgIEdsb2JhbC5zb3VuZE1hbmFnZXIucGxheVNvdW5kQ2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/ShuShiCarb.GoldFly.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2cbe1ypNFMMKbHC8zXu7Db', 'ShuShiCarb.GoldFly');
// SuShiCarb/scripts/ShuShiCarb.GoldFly.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGoldFly = /** @class */ (function (_super) {
    __extends(ShuShiCarbGoldFly, _super);
    function ShuShiCarbGoldFly() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coinPrefab = null;
        _this.coinPool = null;
        return _this;
    }
    ShuShiCarbGoldFly_1 = ShuShiCarbGoldFly;
    ShuShiCarbGoldFly.prototype.onLoad = function () {
        ShuShiCarbGoldFly_1.instance = this;
        this.coinPool = new cc.NodePool();
        this.initCoinPool();
    };
    ShuShiCarbGoldFly.prototype.initCoinPool = function (count) {
        if (count === void 0) { count = 5; }
        for (var i = 0; i < count; i++) {
            var coin = cc.instantiate(this.coinPrefab);
            this.coinPool.put(coin);
        }
    };
    ShuShiCarbGoldFly.prototype.playAnim = function (startPos, endPos, nodeEffect) {
        var randomCount = 5;
        var stPos = startPos.getPosition();
        var edPos = endPos.getPosition();
        this.playCoinFlyAnim(randomCount, stPos, edPos);
        nodeEffect.active = true;
        cc.tween(nodeEffect)
            .to(1.2, { y: edPos.y })
            .call(function () {
            nodeEffect.y = 0;
            nodeEffect.active = false;
        })
            .start();
    };
    ShuShiCarbGoldFly.prototype.playCoinFlyAnim = function (count, stPos, edPos, r) {
        var _this = this;
        if (r === void 0) { r = 130; }
        // 确保当前节点池有足够的金币
        var poolSize = this.coinPool.size();
        var reCreateCoinCount = poolSize > count ? 0 : count - poolSize;
        this.initCoinPool(reCreateCoinCount);
        // 生成圆，并且对圆上的点进行排序
        var points = this.getCirclePoints(r, stPos, count);
        var coinNodeList = points.map(function (pos) {
            var coin = _this.coinPool.get();
            coin.setPosition(stPos);
            _this.node.addChild(coin);
            return {
                node: coin,
                stPos: stPos,
                mdPos: pos,
                edPos: edPos,
                dis: pos.sub(edPos).mag()
            };
        });
        coinNodeList = coinNodeList.sort(function (a, b) {
            if (a.dis - b.dis > 0)
                return 1;
            if (a.dis - b.dis < 0)
                return -1;
            return 0;
        });
        // 执行金币落袋的动画
        coinNodeList.forEach(function (item, idx) {
            item.node.runAction(cc.sequence(cc.moveTo(0.3, item.mdPos), cc.delayTime(idx * 0.01), cc.moveTo(0.5, item.edPos), cc.callFunc(function () {
                _this.coinPool.put(item.node);
            })));
        });
    };
    /**
     * 以某点为圆心，生成圆周上等分点的坐标
     *
     * @param {number} r 半径
     * @param {cc.Vec2} pos 圆心坐标
     * @param {number} count 等分点数量
     * @param {number} [randomScope=80] 等分点的随机波动范围
     * @returns {cc.Vec2[]} 返回等分点坐标
     */
    ShuShiCarbGoldFly.prototype.getCirclePoints = function (r, pos, count, randomScope) {
        if (randomScope === void 0) { randomScope = 60; }
        var points = [];
        var radians = (Math.PI / 180) * Math.round(360 / count);
        for (var i = 0; i < count; i++) {
            var x = pos.x + r * Math.sin(radians * i);
            var y = pos.y + r * Math.cos(radians * i);
            points.unshift(cc.v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
        }
        return points;
    };
    var ShuShiCarbGoldFly_1;
    ShuShiCarbGoldFly.instance = null;
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGoldFly.prototype, "coinPrefab", void 0);
    ShuShiCarbGoldFly = ShuShiCarbGoldFly_1 = __decorate([
        ccclass
    ], ShuShiCarbGoldFly);
    return ShuShiCarbGoldFly;
}(cc.Component));
exports.default = ShuShiCarbGoldFly;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdvbGRGbHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFnR0M7UUE1RkMsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFnQixJQUFJLENBQUM7O0lBMEYvQixDQUFDOzBCQWhHb0IsaUJBQWlCO0lBUXBDLGtDQUFNLEdBQU47UUFDRSxtQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxTQUFpQjtRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxRQUFpQixFQUFFLE1BQWUsRUFBRSxVQUFtQjtRQUM5RCxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxLQUFLLEdB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LEdBZ0cxRDtrQkFoR29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHb2xkRmx5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2h1U2hpQ2FyYkdvbGRGbHkgPSBudWxsO1xuIFxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBjb2luUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gIGNvaW5Qb29sOiBjYy5Ob2RlUG9vbCA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIFNodVNoaUNhcmJHb2xkRmx5Lmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLmNvaW5Qb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgdGhpcy5pbml0Q29pblBvb2woKTtcbiAgfVxuXG4gIGluaXRDb2luUG9vbChjb3VudDogbnVtYmVyID0gNSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgbGV0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvaW5QcmVmYWIpO1xuICAgICAgdGhpcy5jb2luUG9vbC5wdXQoY29pbik7XG4gICAgfVxuICB9XG5cbiAgcGxheUFuaW0oc3RhcnRQb3M6IGNjLk5vZGUsIGVuZFBvczogY2MuTm9kZSwgbm9kZUVmZmVjdDogY2MuTm9kZSkge1xuICAgIGxldCByYW5kb21Db3VudCA9IDU7XG4gICAgbGV0IHN0UG9zID0gc3RhcnRQb3MuZ2V0UG9zaXRpb24oKTtcbiAgICBsZXQgZWRQb3MgPSBlbmRQb3MuZ2V0UG9zaXRpb24oKTtcbiAgICB0aGlzLnBsYXlDb2luRmx5QW5pbShyYW5kb21Db3VudCwgc3RQb3MsIGVkUG9zKTtcbiAgICBub2RlRWZmZWN0LmFjdGl2ZSA9IHRydWU7XG4gICAgY2MudHdlZW4obm9kZUVmZmVjdClcbiAgICAudG8oMS4yLCB7eTplZFBvcy55fSlcbiAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIG5vZGVFZmZlY3QueSA9IDA7XG4gICAgICAgIG5vZGVFZmZlY3QuYWN0aXZlID0gZmFsc2U7XG4gICAgfSlcbiAgICAuc3RhcnQoKTtcbiAgfVxuXG4gIHBsYXlDb2luRmx5QW5pbShjb3VudDogbnVtYmVyLCBzdFBvczogY2MuVmVjMiwgZWRQb3M6IGNjLlZlYzIsIHI6IG51bWJlciA9IDEzMCkge1xuICAgIC8vIOehruS/neW9k+WJjeiKgueCueaxoOaciei2s+Wkn+eahOmHkeW4gVxuICAgIGNvbnN0IHBvb2xTaXplID0gdGhpcy5jb2luUG9vbC5zaXplKCk7XG4gICAgY29uc3QgcmVDcmVhdGVDb2luQ291bnQgPSBwb29sU2l6ZSA+IGNvdW50ID8gMCA6IGNvdW50IC0gcG9vbFNpemU7XG4gICAgdGhpcy5pbml0Q29pblBvb2wocmVDcmVhdGVDb2luQ291bnQpO1xuXG4gICAgLy8g55Sf5oiQ5ZyG77yM5bm25LiU5a+55ZyG5LiK55qE54K56L+b6KGM5o6S5bqPXG4gICAgbGV0IHBvaW50cyA9IHRoaXMuZ2V0Q2lyY2xlUG9pbnRzKHIsIHN0UG9zLCBjb3VudCk7XG4gICAgbGV0IGNvaW5Ob2RlTGlzdCA9IHBvaW50cy5tYXAocG9zID0+IHtcbiAgICAgIGxldCBjb2luID0gdGhpcy5jb2luUG9vbC5nZXQoKTtcbiAgICAgIGNvaW4uc2V0UG9zaXRpb24oc3RQb3MpO1xuICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNvaW4pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogY29pbixcbiAgICAgICAgc3RQb3M6IHN0UG9zLFxuICAgICAgICBtZFBvczogcG9zLFxuICAgICAgICBlZFBvczogZWRQb3MsXG4gICAgICAgIGRpczogKHBvcyBhcyBhbnkpLnN1YihlZFBvcykubWFnKClcbiAgICAgIH07XG4gICAgfSk7XG4gICAgY29pbk5vZGVMaXN0ID0gY29pbk5vZGVMaXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLmRpcyAtIGIuZGlzID4gMCkgcmV0dXJuIDE7XG4gICAgICBpZiAoYS5kaXMgLSBiLmRpcyA8IDApIHJldHVybiAtMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8g5omn6KGM6YeR5biB6JC96KKL55qE5Yqo55S7XG4gICAgY29pbk5vZGVMaXN0LmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaXRlbS5ub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgY2MubW92ZVRvKDAuMywgaXRlbS5tZFBvcyksXG4gICAgICAgICAgY2MuZGVsYXlUaW1lKGlkeCAqIDAuMDEpLFxuICAgICAgICAgIGNjLm1vdmVUbygwLjUsIGl0ZW0uZWRQb3MpLFxuICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29pblBvb2wucHV0KGl0ZW0ubm9kZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDku6Xmn5DngrnkuLrlnIblv4PvvIznlJ/miJDlnIblkajkuIrnrYnliIbngrnnmoTlnZDmoIdcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHIg5Y2K5b6EXG4gICAqIEBwYXJhbSB7Y2MuVmVjMn0gcG9zIOWchuW/g+WdkOagh1xuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQg562J5YiG54K55pWw6YePXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcmFuZG9tU2NvcGU9ODBdIOetieWIhueCueeahOmaj+acuuazouWKqOiMg+WbtFxuICAgKiBAcmV0dXJucyB7Y2MuVmVjMltdfSDov5Tlm57nrYnliIbngrnlnZDmoIdcbiAgICovXG4gIGdldENpcmNsZVBvaW50cyhyOiBudW1iZXIsIHBvczogY2MuVmVjMiwgY291bnQ6IG51bWJlciwgcmFuZG9tU2NvcGU6IG51bWJlciA9IDYwKTogY2MuVmVjMltdIHtcbiAgICBsZXQgcG9pbnRzID0gW107XG4gICAgbGV0IHJhZGlhbnMgPSAoTWF0aC5QSSAvIDE4MCkgKiBNYXRoLnJvdW5kKDM2MCAvIGNvdW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGxldCB4ID0gcG9zLnggKyByICogTWF0aC5zaW4ocmFkaWFucyAqIGkpO1xuICAgICAgbGV0IHkgPSBwb3MueSArIHIgKiBNYXRoLmNvcyhyYWRpYW5zICogaSk7XG4gICAgICBwb2ludHMudW5zaGlmdChjYy52Myh4ICsgTWF0aC5yYW5kb20oKSAqIHJhbmRvbVNjb3BlLCB5ICsgTWF0aC5yYW5kb20oKSAqIHJhbmRvbVNjb3BlLCAwKSk7XG4gICAgfVxuICAgIHJldHVybiBwb2ludHM7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/Game/ShuShiCarb.Food.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1814d5TiQlDEohqTgqXx2zV', 'ShuShiCarb.Food');
// SuShiCarb/scripts/Game/ShuShiCarb.Food.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShuShiCarb_Game_1 = require("../ShuShiCarb.Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbFood = /** @class */ (function (_super) {
    __extends(ShuShiCarbFood, _super);
    function ShuShiCarbFood() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nFood = null;
        // @property(cc.Node)
        // nBagMoney: cc.Node = null;
        _this.id = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.isCheck = 0;
        return _this;
    }
    ShuShiCarbFood.prototype.onLoad = function () {
    };
    ShuShiCarbFood.prototype.start = function () {
    };
    ShuShiCarbFood.prototype.setData = function (idFood) {
        this.id = idFood;
        if (idFood === 999) {
            this.nFood.getComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[6];
        }
        else {
            this.nFood.getComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[idFood];
        }
    };
    ShuShiCarbFood.prototype.update = function (dt) {
        //    if(this.isCheck == 1) {
        //         this.node.setPosition(ShuShiCarbHook.instance.hookHead.x,ShuShiCarbHook.instance.hookHead.y);
        //    }
    };
    __decorate([
        property(cc.Node)
    ], ShuShiCarbFood.prototype, "nFood", void 0);
    ShuShiCarbFood = __decorate([
        ccclass
    ], ShuShiCarbFood);
    return ShuShiCarbFood;
}(cc.Component));
exports.default = ShuShiCarbFood;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuRm9vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixzREFBZ0Q7QUFNMUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFpQ0M7UUE5QkcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixxQkFBcUI7UUFDckIsNkJBQTZCO1FBQzdCLFFBQUUsR0FBRyxDQUFDLENBQUE7UUFDTix3QkFBd0I7UUFDeEIsYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUF5QmhCLENBQUM7SUF2QkcsK0JBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw4QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxNQUFNO1FBQ1YsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDakIsSUFBRyxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyx5QkFBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDMUY7YUFBSztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQy9GO0lBRUwsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1QsNkJBQTZCO1FBQzdCLHdHQUF3RztRQUN4RyxPQUFPO0lBQ1AsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNJO0lBSEwsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWlDbEM7SUFBRCxxQkFBQztDQWpDRCxBQWlDQyxDQWpDMkMsRUFBRSxDQUFDLFNBQVMsR0FpQ3ZEO2tCQWpDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2FtZVwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiSG9vayBmcm9tIFwiLi9TaHVTaGlDYXJiLkhvb2tcIjtcblxuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkZvb2QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkZvb2Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIG5CYWdNb25leTogY2MuTm9kZSA9IG51bGw7XG4gICAgaWQgPSAwIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGlzQ2hlY2sgPSAwO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBzZXREYXRhKGlkRm9vZCkge1xuICAgICAgICB0aGlzLmlkID0gaWRGb29kO1xuICAgICAgICBpZihpZEZvb2QgPT09IDk5OSkge1xuICAgICAgICAgICAgdGhpcy5uRm9vZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmxpc3RTcGZGb29kWzZdXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMubkZvb2QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5saXN0U3BmRm9vZFtpZEZvb2RdXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAvLyAgICBpZih0aGlzLmlzQ2hlY2sgPT0gMSkge1xuICAgIC8vICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKFNodVNoaUNhcmJIb29rLmluc3RhbmNlLmhvb2tIZWFkLngsU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UuaG9va0hlYWQueSk7XG4gICAgLy8gICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/Game/Ui_Popup/ShuShiCrab.GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44367/LVl9AqbqS+KLuBWW4', 'ShuShiCrab.GameOver');
// SuShiCarb/scripts/Game/Ui_Popup/ShuShiCrab.GameOver.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShuShiCarb_Game_1 = require("../../ShuShiCarb.Game");
var ShuShiCarb_GameManager_1 = require("../../ShuShiCarb.GameManager");
var ShuShiCarb_Global_1 = require("../../ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGameOver = /** @class */ (function (_super) {
    __extends(ShuShiCarbGameOver, _super);
    function ShuShiCarbGameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbGold = null;
        return _this;
    }
    // @property(cc.Node)
    // starWin: cc.Node[] = [];
    // @property(cc.Node)
    // starLose: cc.Node[] = [];
    // @property(cc.Node)
    // textWin: cc.Node = null;
    // @property(cc.Node)
    // textLose: cc.Node = null;
    // gameWin() {
    //     this.starWin.forEach(element => {
    //         element.active = true;
    //     });
    //     this.starLose.forEach(element => {
    //         element.active = false;
    //     });
    //     this.textWin.active = true;
    //     this.textLose.active = false;
    //     // this.stopGamePlay();
    // }
    // gameLose() {
    //     this.starWin.forEach(element => {
    //         element.active = false;
    //     });
    //     this.starLose.forEach(element => {
    //         element.active = true;
    //     });
    //     this.textWin.active = false;
    //     this.textLose.active = true;
    //     // this.stopGamePlay();
    // }
    ShuShiCarbGameOver.prototype.open = function () {
        cc.tween(this.node)
            .to(0.2, { scale: 1 })
            .start();
    };
    ShuShiCarbGameOver.prototype.onHome = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
        // let nodeGamePlay = cc.Canvas.instance.node.getChildByName("GamePlay")
        // nodeGamePlay.destroy();
        this.stopGamePlay();
    };
    ShuShiCarbGameOver.prototype.goldEnd = function () {
        this.lbGold.string = ShuShiCarb_Game_1.default.instance.gold + " ";
    };
    ShuShiCarbGameOver.prototype.stopGamePlay = function () {
        var nodeGamePlay = cc.Canvas.instance.node.getChildByName("Main");
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = true;
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('shop').getComponent(cc.Button).interactable = true;
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('setting').getComponent(cc.Button).interactable = true;
        nodeGamePlay.destroy();
    };
    ShuShiCarbGameOver.prototype.onLoad = function () {
        this.open();
        this.goldEnd();
    };
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGameOver.prototype, "lbGold", void 0);
    ShuShiCarbGameOver = __decorate([
        ccclass
    ], ShuShiCarbGameOver);
    return ShuShiCarbGameOver;
}(cc.Component));
exports.default = ShuShiCarbGameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1NodVNoaUNyYWIuR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW1EO0FBQ25ELHVFQUFpRTtBQUNqRSw2REFBNkM7QUFDdkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUFzRUM7UUFuRUcsWUFBTSxHQUFhLElBQUksQ0FBQzs7SUFtRTVCLENBQUM7SUFqRUcscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUU1QixjQUFjO0lBQ2Qsd0NBQXdDO0lBQ3hDLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLGtDQUFrQztJQUNsQyxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIsSUFBSTtJQUVKLGVBQWU7SUFDZix3Q0FBd0M7SUFDeEMsa0NBQWtDO0lBQ2xDLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixJQUFJO0lBRUosaUNBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO2FBQ25CLEtBQUssRUFBRSxDQUFBO0lBQ1osQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxJQUFHLDJCQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3BCLDJCQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0YsZ0NBQXFCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2pELHdFQUF3RTtRQUN4RSwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUU1RCxDQUFDO0lBQ0QseUNBQVksR0FBWjtRQUNJLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakUsZ0NBQXFCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNHLGdDQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN4RyxnQ0FBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0csWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFsRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDSztJQUhQLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBc0V0QztJQUFELHlCQUFDO0NBdEVELEFBc0VDLENBdEUrQyxFQUFFLENBQUMsU0FBUyxHQXNFM0Q7a0JBdEVvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uLy4uL1NodVNoaUNhcmIuR2FtZVwiO1xuaW1wb3J0IFNodVNoaUNhcmJHYW1lTWFuYWdlciBmcm9tIFwiLi4vLi4vU2h1U2hpQ2FyYi5HYW1lTWFuYWdlclwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiR2FtZU92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiR29sZDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gc3RhcldpbjogY2MuTm9kZVtdID0gW107XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gc3Rhckxvc2U6IGNjLk5vZGVbXSA9IFtdO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIHRleHRXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIHRleHRMb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIGdhbWVXaW4oKSB7XG4gICAgLy8gICAgIHRoaXMuc3Rhcldpbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIC8vICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgdGhpcy5zdGFyTG9zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIC8vICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHRoaXMudGV4dFdpbi5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICB0aGlzLnRleHRMb3NlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vICAgICAvLyB0aGlzLnN0b3BHYW1lUGxheSgpO1xuICAgIC8vIH1cblxuICAgIC8vIGdhbWVMb3NlKCkge1xuICAgIC8vICAgICB0aGlzLnN0YXJXaW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAvLyAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICB0aGlzLnN0YXJMb3NlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgLy8gICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICB0aGlzLnRleHRXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgIHRoaXMudGV4dExvc2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgLy8gdGhpcy5zdG9wR2FtZVBsYXkoKTtcbiAgICAvLyB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgIC50bygwLjIsIHtzY2FsZTogMX0pXG4gICAgICAgIC5zdGFydCgpXG4gICAgfVxuXG4gICAgb25Ib21lKCkge1xuICAgICAgICBpZihHbG9iYWwuc291bmRNYW5hZ2VyKSB7XG4gICAgICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyLnBsYXlTb3VuZENsaWNrKCk7XG4gICAgICAgICB9XG4gICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS51cGRhdGVUb3RhbEdvbGQoKTtcbiAgICAgICAgLy8gbGV0IG5vZGVHYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiR2FtZVBsYXlcIilcbiAgICAgICAgLy8gbm9kZUdhbWVQbGF5LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zdG9wR2FtZVBsYXkoKTtcbiAgICB9XG5cbiAgICBnb2xkRW5kKCkge1xuICAgICAgICB0aGlzLmxiR29sZC5zdHJpbmcgPSBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5nb2xkICsgXCIgXCI7XG4gICAgICAgIFxuICAgIH1cbiAgICBzdG9wR2FtZVBsYXkoKSB7XG4gICAgICAgIGxldCBub2RlR2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk1haW5cIilcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLm5Ib21lLmdldENoaWxkQnlOYW1lKCdwbGF5YnRuJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLm5Ib21lLmdldENoaWxkQnlOYW1lKCdzaG9wJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLm5Ib21lLmdldENoaWxkQnlOYW1lKCdzZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgbm9kZUdhbWVQbGF5LmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMub3BlbigpXG4gICAgICAgIHRoaXMuZ29sZEVuZCgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/ShuShiCarb.SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e37ca0PmppMTZq2Fx30je4G', 'ShuShiCarb.SoundManager');
// SuShiCarb/scripts/ShuShiCarb.SoundManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShuShiCarb_Global_1 = require("./ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundManager = /** @class */ (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.music_background = null;
        _this.audio_sfx = null;
        _this.audio_score = null;
        _this.sound_click = null;
        _this.sound_bomb = null;
        _this.add_score = null;
        _this.add_star = null;
        _this.game_over = null;
        _this.pass_level = null;
        _this.ball_break = null;
        return _this;
        // update (dt) {}
    }
    SoundManager.prototype.onLoad = function () {
        ShuShiCarb_Global_1.default.soundManager = this;
    };
    SoundManager.prototype.playSoundClick = function () {
        this.playSoundSFX(this.sound_click);
    };
    SoundManager.prototype.playSoundLose = function () {
        this.playSoundSFX(this.ball_break);
    };
    SoundManager.prototype.playSoundBomb = function () {
        this.playSoundSFX(this.sound_bomb);
    };
    SoundManager.prototype.playSoundAddScore = function () {
        this.playSoundScore(this.add_score);
    };
    SoundManager.prototype.playSoundAddStar = function () {
        this.playSoundScore(this.add_star);
    };
    SoundManager.prototype.playSoundPassLevel = function () {
        this.playSoundSFX(this.pass_level);
    };
    SoundManager.prototype.playSoundGameOver = function () {
        this.playSoundSFX(this.game_over);
    };
    SoundManager.prototype.playSoundSFX = function (soundSFX) {
        if (ShuShiCarb_Global_1.default.isSoundOn) {
            this.audio_sfx.clip = soundSFX;
            this.audio_sfx.play();
        }
    };
    SoundManager.prototype.playSoundScore = function (soundSFX) {
        if (ShuShiCarb_Global_1.default.isSoundOn) {
            this.audio_score.clip = soundSFX;
            this.audio_score.play();
        }
    };
    // onClickMusic() {
    //     if (Global.isMusicOn) {
    //         this.music_background.play()
    //     } else {
    //         this.music_background.stop()
    //         this.audio_sfx.stop()
    //     }
    // }
    SoundManager.prototype.updateMusicState = function () {
        if (ShuShiCarb_Global_1.default.isMusicOn)
            this.music_background.play();
        else
            this.music_background.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "music_background", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "audio_sfx", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "audio_score", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "sound_click", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "sound_bomb", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "add_score", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "add_star", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "game_over", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "pass_level", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "ball_break", void 0);
    SoundManager = __decorate([
        ccclass
    ], SoundManager);
    return SoundManager;
}(cc.Component));
exports.default = SoundManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLlNvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5REFBeUM7QUFFbkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF3RkM7UUFyRkcsc0JBQWdCLEdBQW1CLElBQUksQ0FBQTtRQUV2QyxlQUFTLEdBQW1CLElBQUksQ0FBQTtRQUVoQyxpQkFBVyxHQUFtQixJQUFJLENBQUE7UUFHbEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFBO1FBRWhDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQTtRQUU3QixlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBOztRQWlFL0IsaUJBQWlCO0lBQ3JCLENBQUM7SUEvREcsNkJBQU0sR0FBTjtRQUNJLDJCQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxRQUFRO1FBQ2pCLElBQUksMkJBQU0sQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFBO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDeEI7SUFDTCxDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLFFBQVE7UUFDbkIsSUFBSSwyQkFBTSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUE7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUMxQjtJQUNMLENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsdUNBQXVDO0lBQ3ZDLGdDQUFnQztJQUNoQyxRQUFRO0lBQ1IsSUFBSTtJQUVKLHVDQUFnQixHQUFoQjtRQUNJLElBQUksMkJBQU0sQ0FBQyxTQUFTO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFFN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFsRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzswREFDYztJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNPO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cURBQ1M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3FEQUNEO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvREFDRjtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7bURBQ0g7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2tEQUNKO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzttREFDSDtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7b0RBQ0Y7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO29EQUNGO0lBdEJkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F3RmhDO0lBQUQsbUJBQUM7Q0F4RkQsQUF3RkMsQ0F4RnlDLEVBQUUsQ0FBQyxTQUFTLEdBd0ZyRDtrQkF4Rm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXG4gICAgbXVzaWNfYmFja2dyb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGF1ZGlvX3NmeDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGF1ZGlvX3Njb3JlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kX2NsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRfYm9tYjogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGFkZF9zY29yZTogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGFkZF9zdGFyOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgZ2FtZV9vdmVyOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgcGFzc19sZXZlbDogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGJhbGxfYnJlYWs6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyID0gdGhpcztcbiAgICB9XG5cbiAgICBwbGF5U291bmRDbGljaygpIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmRTRlgodGhpcy5zb3VuZF9jbGljaylcbiAgICB9XG5cbiAgICBwbGF5U291bmRMb3NlKCkge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZFNGWCh0aGlzLmJhbGxfYnJlYWspXG4gICAgfVxuXG4gICAgcGxheVNvdW5kQm9tYigpIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmRTRlgodGhpcy5zb3VuZF9ib21iKVxuICAgIH1cblxuICAgIHBsYXlTb3VuZEFkZFNjb3JlKCkge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZFNjb3JlKHRoaXMuYWRkX3Njb3JlKVxuICAgIH1cblxuICAgIHBsYXlTb3VuZEFkZFN0YXIoKSB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kU2NvcmUodGhpcy5hZGRfc3RhcilcbiAgICB9XG5cbiAgICBwbGF5U291bmRQYXNzTGV2ZWwoKSB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kU0ZYKHRoaXMucGFzc19sZXZlbClcbiAgICB9XG5cbiAgICBwbGF5U291bmRHYW1lT3ZlcigpIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmRTRlgodGhpcy5nYW1lX292ZXIpXG4gICAgfVxuXG4gICAgcGxheVNvdW5kU0ZYKHNvdW5kU0ZYKSB7XG4gICAgICAgIGlmIChHbG9iYWwuaXNTb3VuZE9uKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvX3NmeC5jbGlwID0gc291bmRTRlhcbiAgICAgICAgICAgIHRoaXMuYXVkaW9fc2Z4LnBsYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheVNvdW5kU2NvcmUoc291bmRTRlgpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5pc1NvdW5kT24pIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9fc2NvcmUuY2xpcCA9IHNvdW5kU0ZYXG4gICAgICAgICAgICB0aGlzLmF1ZGlvX3Njb3JlLnBsYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gb25DbGlja011c2ljKCkge1xuICAgIC8vICAgICBpZiAoR2xvYmFsLmlzTXVzaWNPbikge1xuICAgIC8vICAgICAgICAgdGhpcy5tdXNpY19iYWNrZ3JvdW5kLnBsYXkoKVxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5tdXNpY19iYWNrZ3JvdW5kLnN0b3AoKVxuICAgIC8vICAgICAgICAgdGhpcy5hdWRpb19zZnguc3RvcCgpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICB1cGRhdGVNdXNpY1N0YXRlKCkge1xuICAgICAgICBpZiAoR2xvYmFsLmlzTXVzaWNPbilcbiAgICAgICAgICAgIHRoaXMubXVzaWNfYmFja2dyb3VuZC5wbGF5KCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMubXVzaWNfYmFja2dyb3VuZC5zdG9wKCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/Game/ShuShiCarb.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3894fyXWvVMl4qDb2W/ERoN', 'ShuShiCarb.Player');
// SuShiCarb/scripts/Game/ShuShiCarb.Player.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShuShiCarb_Game_1 = require("../ShuShiCarb.Game");
var ShuShiCarb_Global_1 = require("../ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbPlayer = /** @class */ (function (_super) {
    __extends(ShuShiCarbPlayer, _super);
    function ShuShiCarbPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.char = null;
        _this.listFood = [];
        _this.nchat = null;
        _this.listCharacter = [];
        _this.prgBarCountDown = null;
        _this.lbCountDown = null;
        _this.nTime = null;
        _this.numberCountDown = 0;
        _this.isCountDown = false;
        _this.isMove = false;
        _this.isAtOrderPosition = false;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbPlayer_1 = ShuShiCarbPlayer;
    // @property(cc.Node)
    // foodItem1: cc.Node = null;
    // @property(cc.Node)
    // foodItem2: cc.Node = null;
    // @property(cc.Node)
    // foodItem3: cc.Node = null;
    ShuShiCarbPlayer.prototype.onLoad = function () {
        ShuShiCarbPlayer_1.instace = this;
        ShuShiCarb_Global_1.default.timeHappy = JSON.parse(cc.sys.localStorage.getItem("timeHappy")) || ShuShiCarb_Global_1.default.timeHappy;
        console.log("Time vua duoc update ", ShuShiCarb_Global_1.default.timeHappy);
    };
    ShuShiCarbPlayer.prototype.setData = function (index) {
        this.char.skeletonData = this.listCharacter[index]; // listChar [0] = con ao vang
    };
    ShuShiCarbPlayer.prototype.startCountDown = function () {
        this.isCountDown = true;
        this.numberCountDown = ShuShiCarb_Global_1.default.timeHappy;
        this.schedule(this.updateCountDown, 1);
    };
    ShuShiCarbPlayer.prototype.updateCountDown = function () {
        if (this.numberCountDown > 0) {
            this.numberCountDown--;
            this.updateProgressBar();
            this.lbCountDown.string = this.numberCountDown + '';
        }
        else {
            this.isCountDown = false;
            ShuShiCarb_Game_1.default.instance.resetGame(false);
            console.log("Thua");
            //this.effectShow();
        }
    };
    ShuShiCarbPlayer.prototype.updateProgressBar = function () {
        if (this.prgBarCountDown) {
            this.prgBarCountDown.progress -= 1 / ShuShiCarb_Global_1.default.timeHappy;
        }
    };
    ShuShiCarbPlayer.prototype.effectShow = function () {
        var _this = this;
        this.char.animation = 'move';
        this.nchat.active = false;
        this.nTime.active = false;
        cc.tween(this.char.node)
            .to(2, { x: 0 })
            .call(function () {
            _this.char.animation = 'idle';
            _this.nchat.active = true;
            _this.nTime.active = true;
            _this.isAtOrderPosition = true;
            _this.startCountDown();
        })
            .start();
    };
    ShuShiCarbPlayer.prototype.happyEffectPlayerMoveOut = function (callbacks) {
        var _this = this;
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "happy";
        this.isAtOrderPosition = false;
        cc.tween(this.char.node)
            .to(0.8, { x: 600 })
            .call(function () {
            _this.node.destroy();
            callbacks();
        }).start();
    };
    ShuShiCarbPlayer.prototype.sadEffectPlayerMoveOut = function (callbacks) {
        var _this = this;
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "discomfort";
        this.isAtOrderPosition = false;
        cc.tween(this.char.node)
            .to(0.8, { x: 600 })
            .call(function () {
            _this.isAtOrderPosition = false;
            _this.node.destroy();
            callbacks();
        }).start();
    };
    ShuShiCarbPlayer.prototype.start = function () {
        this.effectShow();
    };
    var ShuShiCarbPlayer_1;
    ShuShiCarbPlayer.instace = null;
    __decorate([
        property(sp.Skeleton)
    ], ShuShiCarbPlayer.prototype, "char", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbPlayer.prototype, "listFood", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbPlayer.prototype, "nchat", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], ShuShiCarbPlayer.prototype, "listCharacter", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ShuShiCarbPlayer.prototype, "prgBarCountDown", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbPlayer.prototype, "lbCountDown", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbPlayer.prototype, "nTime", void 0);
    ShuShiCarbPlayer = ShuShiCarbPlayer_1 = __decorate([
        ccclass
    ], ShuShiCarbPlayer);
    return ShuShiCarbPlayer;
}(cc.Component));
exports.default = ShuShiCarbPlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUFnRDtBQUNoRCwwREFBMEM7QUFHcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFtSEM7UUEvR0csVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLG1CQUFhLEdBQXNCLEVBQUUsQ0FBQztRQUV0QyxxQkFBZSxHQUFtQixJQUFJLENBQUM7UUFFdkMsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsdUJBQWlCLEdBQUcsS0FBSyxDQUFDOztRQThGMUIsaUJBQWlCO0lBQ3JCLENBQUM7eUJBbkhvQixnQkFBZ0I7SUFzQmpDLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBRTdCLGlDQUFNLEdBQU47UUFDSSxrQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLDJCQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFD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QztJQUFELHVCQUFDO0NBbkhELEFBbUhDLENBbkg2QyxFQUFFLENBQUMsU0FBUyxHQW1IekQ7a0JBbkhvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi9TaHVTaGlDYXJiLkdhbWVcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2xvYmFsXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYlBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhY2U6IFNodVNoaUNhcmJQbGF5ZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBjaGFyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEZvb2Q6IGNjLk5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5jaGF0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxuICAgIGxpc3RDaGFyYWN0ZXI6IHNwLlNrZWxldG9uRGF0YVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIHByZ0JhckNvdW50RG93bjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkNvdW50RG93bjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5UaW1lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBudW1iZXJDb3VudERvd24gPSAwO1xuICAgIGlzQ291bnREb3duID0gZmFsc2U7XG4gICAgaXNNb3ZlID0gZmFsc2U7XG4gICAgaXNBdE9yZGVyUG9zaXRpb24gPSBmYWxzZTtcbiAgICBcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBmb29kSXRlbTE6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGZvb2RJdGVtMjogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gZm9vZEl0ZW0zOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU2h1U2hpQ2FyYlBsYXllci5pbnN0YWNlID0gdGhpcztcbiAgICAgICAgR2xvYmFsLnRpbWVIYXBweSA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGltZUhhcHB5XCIpKSB8fCBHbG9iYWwudGltZUhhcHB5O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWUgdnVhIGR1b2MgdXBkYXRlIFwiLEdsb2JhbC50aW1lSGFwcHkpO1xuICAgIH1cbiAgICBzZXREYXRhKGluZGV4KSB7XG4gICAgICAgIHRoaXMuY2hhci5za2VsZXRvbkRhdGEgPSB0aGlzLmxpc3RDaGFyYWN0ZXJbaW5kZXhdOyAvLyBsaXN0Q2hhciBbMF0gPSBjb24gYW8gdmFuZ1xuICAgIH1cblxuICAgIHN0YXJ0Q291bnREb3duKCkge1xuICAgICAgICB0aGlzLmlzQ291bnREb3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24gPSBHbG9iYWwudGltZUhhcHB5O1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ291bnREb3duLDEpO1xuICAgIH1cblxuICAgIFxuICAgIHVwZGF0ZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYodGhpcy5udW1iZXJDb3VudERvd24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlckNvdW50RG93bi0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSB0aGlzLm51bWJlckNvdW50RG93biArICcnO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5yZXNldEdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaHVhXCIpXG4gICAgICAgICAgICAvL3RoaXMuZWZmZWN0U2hvdygpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgaWYodGhpcy5wcmdCYXJDb3VudERvd24pIHtcbiAgICAgICAgICAgIHRoaXMucHJnQmFyQ291bnREb3duLnByb2dyZXNzIC09IDEvIEdsb2JhbC50aW1lSGFwcHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWZmZWN0U2hvdygpIHtcbiAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9ICdtb3ZlJztcbiAgICAgICAgdGhpcy5uY2hhdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uVGltZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXG4gICAgICAgIC50bygyLCB7eDogMH0pXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSAnaWRsZSc7XG4gICAgICAgICAgICB0aGlzLm5jaGF0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5UaW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICBoYXBweUVmZmVjdFBsYXllck1vdmVPdXQoY2FsbGJhY2tzOiBGdW5jdGlvbikge1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIixhY3RpdmUpO1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJkaXNjb21mb3J0XCIsIWFjdGl2ZSk7XG4gICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSBcImhhcHB5XCJcbiAgICAgICAgdGhpcy5pc0F0T3JkZXJQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXIubm9kZSlcbiAgICAgICAgLnRvKDAuOCx7eDogNjAwfSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcygpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIHNhZEVmZmVjdFBsYXllck1vdmVPdXQoY2FsbGJhY2tzOiBGdW5jdGlvbikge1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIixhY3RpdmUpO1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJkaXNjb21mb3J0XCIsIWFjdGl2ZSk7XG4gICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSBcImRpc2NvbWZvcnRcIlxuICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhci5ub2RlKVxuICAgICAgICAudG8oMC44LHt4OiA2MDB9KVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgY2FsbGJhY2tzKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgXG5cblxuICAgIHN0YXJ0ICgpIHsgIFxuICAgICAgICB0aGlzLmVmZmVjdFNob3coKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/Game/ShuShiCarb.Conveyor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'feab3o200JDbYSI7NRNPnpz', 'ShuShiCarb.Conveyor');
// SuShiCarb/scripts/Game/ShuShiCarb.Conveyor.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbConveyor = /** @class */ (function (_super) {
    __extends(ShuShiCarbConveyor, _super);
    function ShuShiCarbConveyor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idFood = 0;
        _this.isMove = false;
        return _this;
    }
    ShuShiCarbConveyor.prototype.update = function () {
        if (this.isMove) {
            return;
        }
        if (this.idFood == 0) {
            if (this.node.x >= 1200 || !this.node.active) {
                this.resetPos();
                this.resetSate(true);
            }
            this.node.x += 4;
        }
        else if (this.idFood == 1 || !this.node.active) {
            if (this.node.x <= -1800) {
                this.node.x = 50;
                this.resetSate(true);
            }
            this.node.x -= 3;
        }
        else if (this.idFood == 2 || !this.node.active) {
            if (this.node.x >= 1200) {
                this.resetPos();
                this.resetSate(true);
            }
            this.node.x += 3;
        }
    };
    ShuShiCarbConveyor.prototype.resetPos = function () {
        this.node.x = -700;
    };
    ShuShiCarbConveyor.prototype.resetSate = function (isActive) {
        this.node.getComponent(cc.Sprite).enabled = isActive;
        this.node.getComponent(cc.BoxCollider).enabled = isActive;
    };
    __decorate([
        property
    ], ShuShiCarbConveyor.prototype, "idFood", void 0);
    ShuShiCarbConveyor = __decorate([
        ccclass
    ], ShuShiCarbConveyor);
    return ShuShiCarbConveyor;
}(cc.Component));
exports.default = ShuShiCarbConveyor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuQ29udmV5b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFHLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUE2Q0Y7UUF6Q0UsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixZQUFNLEdBQUcsS0FBSyxDQUFDOztJQXdDbEIsQ0FBQztJQXRDSyxtQ0FBTSxHQUFOO1FBQ0EsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsT0FBTztTQUNUO1FBQ0QsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7YUFBSyxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDNUMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO2FBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzNDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FFbkI7SUFFSixDQUFDO0lBSUQscUNBQVEsR0FBUjtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsUUFBaUI7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7SUFDN0QsQ0FBQztJQXhDRDtRQURDLFFBQVE7c0RBQ1U7SUFKRSxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQTZDekM7SUFBRCx5QkFBQztDQTdDRSxBQTZDRixDQTdDa0QsRUFBRSxDQUFDLFNBQVMsR0E2QzlEO2tCQTdDdUIsa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy8gTGVhcm4gVHlwZVNjcmlwdDpcbiAgIC8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuICAgLy8gTGVhcm4gQXR0cmlidXRlOlxuICAgLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuICAgLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4gICAvLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbiAgIGltcG9ydCBTaHVTaGlDYXJiR2FtZSBmcm9tIFwiLi4vU2h1U2hpQ2FyYi5HYW1lXCI7XG4gICBpbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XG5cbiAgIGNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4gICBAY2NjbGFzc1xuICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkNvbnZleW9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgIFxuICAgXG4gICBAcHJvcGVydHlcbiAgIGlkRm9vZDogbnVtYmVyID0gMDtcbiAgIGlzTW92ZSA9IGZhbHNlO1xuICAgICAgXG4gICAgICB1cGRhdGUoKSB7XG4gICAgICBpZih0aGlzLmlzTW92ZSkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5pZEZvb2QgPT0gMCkge1xuICAgICAgICAgaWYodGhpcy5ub2RlLnggPj0gMTIwMHx8IXRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3MoKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTYXRlKHRydWUpO1xuICAgICAgICAgfVxuICAgICAgICAgdGhpcy5ub2RlLnggKz0gNDtcbiAgICAgIH1lbHNlIGlmKHRoaXMuaWRGb29kID09IDEgfHwhdGhpcy5ub2RlLmFjdGl2ZSkge1xuICAgICAgICAgaWYodGhpcy5ub2RlLnggPD0gLTE4MDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gNTA7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U2F0ZSh0cnVlKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHRoaXMubm9kZS54IC09IDM7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHRoaXMuaWRGb29kID09IDIgfHwhdGhpcy5ub2RlLmFjdGl2ZSkge1xuICAgICAgICAgaWYodGhpcy5ub2RlLnggPj0gMTIwMCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldFBvcygpO1xuICAgICAgICAgICAgdGhpcy5yZXNldFNhdGUodHJ1ZSk7XG4gICAgICAgICB9XG4gICAgICAgICB0aGlzLm5vZGUueCArPSAzO1xuICAgICAgICAgXG4gICAgICB9XG4gICBcbiAgIH1cblxuICAgICAgXG5cbiAgIHJlc2V0UG9zKCkge1xuICAgICAgdGhpcy5ub2RlLnggPSAtNzAwO1xuICAgfVxuXG4gICByZXNldFNhdGUoaXNBY3RpdmU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gaXNBY3RpdmU7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gaXNBY3RpdmU7XG4gICB9XG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/Game/ShuShiCard.CollierManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07571YrTBpHQZ4RW7KNcoYv', 'ShuShiCard.CollierManager');
// SuShiCarb/scripts/Game/ShuShiCard.CollierManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShuShiCarb_Game_1 = require("../ShuShiCarb.Game");
var ShuShiCarb_Conveyor_1 = require("./ShuShiCarb.Conveyor");
var ShuShiCarb_Food_1 = require("./ShuShiCarb.Food");
var ShuShiCarb_Hook_1 = require("./ShuShiCarb.Hook");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Collier = /** @class */ (function (_super) {
    __extends(Collier, _super);
    function Collier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collier.prototype.onCollisionEnter = function (other, self) {
        var food = this.node.getComponent(ShuShiCarb_Food_1.default);
        var id = food.id;
        console.log("id ", id);
        if (other.tag == 1) {
            var nodeNew_1 = new cc.Node();
            nodeNew_1.parent = this.node.parent;
            nodeNew_1.scale = 0.4;
            if (id === 999) {
                nodeNew_1.scale = 1;
                nodeNew_1.addComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[6];
                nodeNew_1.setParent(ShuShiCarb_Hook_1.default.instance.hookHead);
                nodeNew_1.setPosition(cc.v2(0, 25));
            }
            else {
                nodeNew_1.addComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[id];
                nodeNew_1.setParent(ShuShiCarb_Hook_1.default.instance.hookHead);
                nodeNew_1.setPosition(cc.v2(0, 25));
            }
            ShuShiCarb_Game_1.default.instance.hookObjects.push({ node: nodeNew_1, id: id });
            ShuShiCarb_Hook_1.default.instance.setHookState(2);
            food.isCheck = 1;
            ShuShiCarb_Game_1.default.instance.checkCorrect();
            this.node.getComponent(ShuShiCarb_Conveyor_1.default).resetSate(false);
            this.scheduleOnce(function () {
                // Xóa món ăn khỏi mảng hookObjects
                ShuShiCarb_Game_1.default.instance.hookObjects = ShuShiCarb_Game_1.default.instance.hookObjects.filter(function (obj) { return obj.node !== nodeNew_1; });
                nodeNew_1.destroy();
            }, 0.5);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    Collier.prototype.onLoad = function () {
        var node = cc.director.getCollisionManager();
        node.enabled = true;
    };
    Collier.prototype.start = function () {
    };
    Collier = __decorate([
        ccclass
    ], Collier);
    return Collier;
}(cc.Component));
exports.default = Collier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmQuQ29sbGllck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQWdEO0FBQ2hELDZEQUF1RDtBQUN2RCxxREFBK0M7QUFDL0MscURBQStDO0FBRXpDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEOztJQW1EQSxDQUFDO0lBakRHLGtDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBYyxDQUFDLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QixJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksU0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzNCLFNBQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEMsU0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBRyxFQUFFLEtBQUssR0FBRyxFQUFFO2dCQUNYLFNBQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixTQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNwRixTQUFPLENBQUMsU0FBUyxDQUFDLHlCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRCxTQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDckM7aUJBQUs7Z0JBQ0YsU0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLHlCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDckYsU0FBTyxDQUFDLFNBQVMsQ0FBQyx5QkFBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEQsU0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1lBSUQseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFDbEUseUJBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLHlCQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLDZCQUFrQixDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsbUNBQW1DO2dCQUNuQyx5QkFBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBTyxFQUFwQixDQUFvQixDQUFDLENBQUM7Z0JBQzlHLFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNuQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDYjtJQUVMLENBQUM7SUFJRCx3QkFBd0I7SUFFeEIsd0JBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQsdUJBQUssR0FBTDtJQUVBLENBQUM7SUFoRGdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FtRDNCO0lBQUQsY0FBQztDQW5ERCxBQW1EQyxDQW5Eb0MsRUFBRSxDQUFDLFNBQVMsR0FtRGhEO2tCQW5Eb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2FtZVwiO1xuaW1wb3J0IFNodVNoaUNhcmJDb252ZXlvciBmcm9tIFwiLi9TaHVTaGlDYXJiLkNvbnZleW9yXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkhvb2sgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Ib29rXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGxldCBmb29kID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTaHVTaGlDYXJiRm9vZCk7XG4gICAgICAgIGxldCBpZCA9IGZvb2QuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWQgXCIsIGlkKTtcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAxKSB7XG4gICAgICAgICAgICBsZXQgbm9kZU5ldyA9IG5ldyBjYy5Ob2RlKClcbiAgICAgICAgICAgIG5vZGVOZXcucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgIG5vZGVOZXcuc2NhbGUgPSAwLjQ7XG4gICAgICAgICAgICBpZihpZCA9PT0gOTk5KSB7XG4gICAgICAgICAgICAgICAgbm9kZU5ldy5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgbm9kZU5ldy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmxpc3RTcGZGb29kWzZdXG4gICAgICAgICAgICAgICAgbm9kZU5ldy5zZXRQYXJlbnQoU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UuaG9va0hlYWQpO1xuICAgICAgICAgICAgICAgIG5vZGVOZXcuc2V0UG9zaXRpb24oY2MudjIoMCwgMjUpKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlTmV3LmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UubGlzdFNwZkZvb2RbaWRdXG4gICAgICAgICAgICAgICAgbm9kZU5ldy5zZXRQYXJlbnQoU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UuaG9va0hlYWQpO1xuICAgICAgICAgICAgICAgIG5vZGVOZXcuc2V0UG9zaXRpb24oY2MudjIoMCwgMjUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgIFxuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuaG9va09iamVjdHMucHVzaCh7bm9kZTogbm9kZU5ldywgaWQ6IGlkfSk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5zZXRIb29rU3RhdGUoMik7XG4gICAgICAgICAgICBmb29kLmlzQ2hlY2sgPSAxO1xuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuY2hlY2tDb3JyZWN0KCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJDb252ZXlvcikucmVzZXRTYXRlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBYw7NhIG3Ds24gxINuIGto4buPaSBt4bqjbmcgaG9va09iamVjdHNcbiAgICAgICAgICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5ob29rT2JqZWN0cyA9IFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmhvb2tPYmplY3RzLmZpbHRlcihvYmogPT4gb2JqLm5vZGUgIT09IG5vZGVOZXcpO1xuICAgICAgICAgICAgICAgIG5vZGVOZXcuZGVzdHJveSgpXG4gICAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBsZXQgbm9kZSA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKVxuICAgICAgICBub2RlLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/Game/ShuShiCarb.Hook.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd3e4+aHHVDjZsBsncFNldv', 'ShuShiCarb.Hook');
// SuShiCarb/scripts/Game/ShuShiCarb.Hook.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShuShiCarb_Global_1 = require("../ShuShiCarb.Global");
var ShuShiCarb_Player_1 = require("./ShuShiCarb.Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbHook = /** @class */ (function (_super) {
    __extends(ShuShiCarbHook, _super);
    function ShuShiCarbHook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hookRope = null;
        _this.hookSpriteOpen = null;
        _this.hookSpriteClose = null;
        _this.hookHead = null;
        _this.hookSpeed = 30;
        _this.hookState = 0;
        _this.hookHeadBaseY = 80;
        _this.hookRopeBaseWidth = 100;
        _this.isClickable = true;
        return _this;
    }
    ShuShiCarbHook_1 = ShuShiCarbHook;
    ShuShiCarbHook.prototype.onLoad = function () {
        ShuShiCarbHook_1.instance = this;
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        ShuShiCarb_Global_1.default.speedHook = JSON.parse(cc.sys.localStorage.getItem("speedHook")) || ShuShiCarb_Global_1.default.speedHook;
        ShuShiCarb_Global_1.default.lengthHook = JSON.parse(cc.sys.localStorage.getItem("lengthHook")) || ShuShiCarb_Global_1.default.lengthHook;
        console.log("Speed ne ", ShuShiCarb_Global_1.default.speedHook);
    };
    ShuShiCarbHook.prototype.initHook = function () {
        this.hookHead.y = this.hookHeadBaseY;
        this.hookRope.width = this.hookRopeBaseWidth;
    };
    ShuShiCarbHook.prototype.start = function () {
        this.initHook();
    };
    ShuShiCarbHook.prototype.setHookState = function (hookState) {
        this.hookState = hookState;
    };
    ShuShiCarbHook.prototype.setHookSprite = function (isOpen) {
        this.hookSpriteClose.active = !isOpen;
        this.hookSpriteOpen.active = isOpen;
    };
    ShuShiCarbHook.prototype.onTouchEnd = function (event) {
        if (!this.isClickable || this.hookState !== 0 || !ShuShiCarb_Player_1.default.instace.isAtOrderPosition) {
            return;
        }
        this.hookState = 1;
        this.mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(event.getLocationX()));
        this.node.setPosition(this.mousePos);
    };
    ShuShiCarbHook.prototype.moveHookHead = function (dt) {
        this.hookHead.y += dt * ShuShiCarb_Global_1.default.speedHook;
        this.hookRope.width += dt * ShuShiCarb_Global_1.default.lengthHook;
    };
    ShuShiCarbHook.prototype.onDestroy = function () {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onTouchEnd, this);
    };
    ShuShiCarbHook.prototype.update = function (dt) {
        this.setHookSprite(true);
        switch (this.hookState) {
            case 1:
                if (this.hookHead.y) {
                    this.moveHookHead(ShuShiCarb_Global_1.default.speedHook * dt);
                    if (this.hookHead.y >= 600) {
                        this.hookState = 2;
                    }
                }
                break;
            case 2:
                if (this.hookHead.y) {
                    this.moveHookHead(-ShuShiCarb_Global_1.default.speedHook * dt);
                    this.hookHead.getComponent(cc.BoxCollider).enabled = false;
                    if (this.hookHead.y < 0) {
                        this.hookHead.y = 130;
                        this.hookRope.width = 130;
                        this.hookState = 0;
                        this.hookHead.getComponent(cc.BoxCollider).enabled = true;
                        this.disableClickTemporarily(0.2);
                    }
                }
                this.setHookSprite(false);
                break;
            case 0:
            default:
                break;
        }
    };
    ShuShiCarbHook.prototype.disableClickTemporarily = function (duration) {
        var _this = this;
        this.isClickable = false;
        this.scheduleOnce(function () {
            _this.isClickable = true;
        }, duration);
    };
    var ShuShiCarbHook_1;
    ShuShiCarbHook.instance = null;
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookRope", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookSpriteOpen", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookSpriteClose", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookHead", void 0);
    ShuShiCarbHook = ShuShiCarbHook_1 = __decorate([
        ccclass
    ], ShuShiCarbHook);
    return ShuShiCarbHook;
}(cc.Component));
exports.default = ShuShiCarbHook;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwREFBMEM7QUFFMUMseURBQW1EO0FBRTdDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBeUdDO1FBdEdHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUVkLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUFvRmhDLENBQUM7dUJBekdvQixjQUFjO0lBc0IvQiwrQkFBTSxHQUFOO1FBQ0ksZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0UsMkJBQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSwy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UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0F5R2xDO0lBQUQscUJBQUM7Q0F6R0QsQUF5R0MsQ0F6RzJDLEVBQUUsQ0FBQyxTQUFTLEdBeUd2RDtrQkF6R29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiRm9vZCBmcm9tIFwiLi9TaHVTaGlDYXJiLkZvb2RcIjtcbmltcG9ydCBTaHVTaGlDYXJiUGxheWVyIGZyb20gXCIuL1NodVNoaUNhcmIuUGxheWVyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkhvb2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJIb29rID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rUm9wZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rU3ByaXRlT3BlbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rU3ByaXRlQ2xvc2U6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va0hlYWQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIGhvb2tTcGVlZCA9IDMwO1xuICAgIGhvb2tTdGF0ZSA9IDA7XG5cbiAgICBob29rSGVhZEJhc2VZOiBudW1iZXIgPSA4MDtcbiAgICBob29rUm9wZUJhc2VXaWR0aDogbnVtYmVyID0gMTAwO1xuICAgIFxuICAgIG1vdXNlUG9zO1xuICAgIGlzQ2xpY2thYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNodVNoaUNhcmJIb29rLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICBHbG9iYWwuc3BlZWRIb29rID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGVlZEhvb2tcIikpIHx8IEdsb2JhbC5zcGVlZEhvb2s7XG4gICAgICAgIEdsb2JhbC5sZW5ndGhIb29rID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZW5ndGhIb29rXCIpKSB8fCBHbG9iYWwubGVuZ3RoSG9vaztcbiAgICAgICAgY29uc29sZS5sb2coXCJTcGVlZCBuZSBcIixHbG9iYWwuc3BlZWRIb29rKTtcbiAgICB9XG5cblxuICAgIGluaXRIb29rKCkgIHtcbiAgICAgICAgdGhpcy5ob29rSGVhZC55ICA9IHRoaXMuaG9va0hlYWRCYXNlWTtcbiAgICAgICAgdGhpcy5ob29rUm9wZS53aWR0aCA9IHRoaXMuaG9va1JvcGVCYXNlV2lkdGg7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEhvb2soKTtcbiAgICB9XG4gICAgc2V0SG9va1N0YXRlKGhvb2tTdGF0ZSkge1xuICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IGhvb2tTdGF0ZTtcbiAgICB9XG5cbiAgICBzZXRIb29rU3ByaXRlKGlzT3BlbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmhvb2tTcHJpdGVDbG9zZS5hY3RpdmUgPSAhaXNPcGVuO1xuICAgICAgICB0aGlzLmhvb2tTcHJpdGVPcGVuLmFjdGl2ZSA9IGlzT3BlbjtcbiAgICB9XG4gXG5cbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0NsaWNrYWJsZSB8fCB0aGlzLmhvb2tTdGF0ZSAhPT0gMCB8fCAhU2h1U2hpQ2FyYlBsYXllci5pbnN0YWNlLmlzQXRPcmRlclBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rU3RhdGUgPSAxO1xuICAgICAgICB0aGlzLm1vdXNlUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MihldmVudC5nZXRMb2NhdGlvblgoKSkpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5tb3VzZVBvcyk7XG4gICAgfVxuXG4gICAgbW92ZUhvb2tIZWFkKGR0KSB7XG4gICAgICAgIHRoaXMuaG9va0hlYWQueSArPSBkdCAqIEdsb2JhbC5zcGVlZEhvb2s7XG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggKz0gZHQgKiBHbG9iYWwubGVuZ3RoSG9vaztcbiAgICAgIFxuICAgIH1cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5zZXRIb29rU3ByaXRlKHRydWUpO1xuICAgICAgICBzd2l0Y2godGhpcy5ob29rU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlSG9va0hlYWQoR2xvYmFsLnNwZWVkSG9vayAqIGR0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55ID49IDYwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rU3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUhvb2tIZWFkKC1HbG9iYWwuc3BlZWRIb29rICAqIGR0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rSGVhZC5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55ICA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va0hlYWQueSA9IDEzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSAxMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tIZWFkLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVDbGlja1RlbXBvcmFyaWx5KDAuMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhvb2tTcHJpdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZUNsaWNrVGVtcG9yYXJpbHkoZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICB0aGlzLmlzQ2xpY2thYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDbGlja2FibGUgPSB0cnVlO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/ShuShiCarb.GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4f8btwtChDJ7eWDTDf8uUO', 'ShuShiCarb.GameManager');
// SuShiCarb/scripts/ShuShiCarb.GameManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShuShiCarb_ShopView_1 = require("./Game/Ui_Popup/Shop/ShuShiCarb.ShopView");
var ShuShiCarb_Game_1 = require("./ShuShiCarb.Game");
var ShuShiCarb_Global_1 = require("./ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGameManager = /** @class */ (function (_super) {
    __extends(ShuShiCarbGameManager, _super);
    function ShuShiCarbGameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nHome = null;
        _this.prfGame = null;
        _this.nPlay = null;
        _this.prfShopView = null;
        _this.lbTotalGold = null;
        _this.prfSetting = null;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbGameManager_1 = ShuShiCarbGameManager;
    // LIFE-CYCLE CALLBACKS:
    ShuShiCarbGameManager.prototype.onLoad = function () {
        ShuShiCarbGameManager_1.instance = this;
        ShuShiCarb_Global_1.default.totalGold = JSON.parse(cc.sys.localStorage.getItem("totalGold")) || 500;
        this.updateTotalGold();
        this.effectPlay();
        if (ShuShiCarb_Global_1.default.soundManager)
            ShuShiCarb_Global_1.default.soundManager.music_background.play();
    };
    ShuShiCarbGameManager.prototype.start = function () {
    };
    ShuShiCarbGameManager.prototype.onClickPlay = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        //  this.nHome.active = false;
        //  this.nGame.active = true;
        var game = cc.instantiate(this.prfGame).getComponent(ShuShiCarb_Game_1.default);
        this.node.addChild(game.node);
        //this.nHome.active = false;
        this.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = false;
        this.nHome.getChildByName('shop').getComponent(cc.Button).interactable = false;
        this.nHome.getChildByName('setting').getComponent(cc.Button).interactable = false;
    };
    ShuShiCarbGameManager.prototype.onClickShopView = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        var shopView = cc.instantiate(this.prfShopView).getComponent(ShuShiCarb_ShopView_1.default);
        this.node.addChild(shopView.node);
    };
    ShuShiCarbGameManager.prototype.updateTotalGold = function () {
        this.lbTotalGold.string = ShuShiCarb_Global_1.default.formatNumber(ShuShiCarb_Global_1.default.totalGold);
        cc.sys.localStorage.setItem('totalGold', JSON.stringify(ShuShiCarb_Global_1.default.totalGold));
        console.log("Tong tien ", ShuShiCarb_Global_1.default.totalGold);
    };
    ShuShiCarbGameManager.prototype.effectPlay = function () {
        cc.tween(this.nPlay)
            .repeatForever(cc.tween()
            .to(0.8, { scale: 0.8 })
            .to(0.8, { scale: 1 })
            .start()).start();
    };
    ShuShiCarbGameManager.prototype.onClickSettingView = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        var setting = cc.instantiate(this.prfSetting);
        this.node.addChild(setting);
    };
    ShuShiCarbGameManager.prototype.clickTest = function () {
        cc.sys.localStorage.clear();
    };
    var ShuShiCarbGameManager_1;
    ShuShiCarbGameManager.instance = null;
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameManager.prototype, "nHome", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGameManager.prototype, "prfGame", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameManager.prototype, "nPlay", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGameManager.prototype, "prfShopView", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGameManager.prototype, "lbTotalGold", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGameManager.prototype, "prfSetting", void 0);
    ShuShiCarbGameManager = ShuShiCarbGameManager_1 = __decorate([
        ccclass
    ], ShuShiCarbGameManager);
    return ShuShiCarbGameManager;
}(cc.Component));
exports.default = ShuShiCarbGameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLGdGQUEwRTtBQUMxRSxxREFBK0M7QUFDL0MseURBQXlDO0FBRW5DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBZ0ZDO1FBN0VFLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQWMsSUFBSSxDQUFDOztRQWlFNUIsaUJBQWlCO0lBQ3JCLENBQUM7OEJBaEZvQixxQkFBcUI7SUFldEMsd0JBQXdCO0lBRXpCLHNDQUFNLEdBQU47UUFDRyx1QkFBcUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLDJCQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1FBRS9FLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSwyQkFBTSxDQUFDLFlBQVk7WUFDcEIsMkJBQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVE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QUFDO3dEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhEQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OERBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDUztJQWRYLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBZ0Z6QztJQUFELDRCQUFDO0NBaEZELEFBZ0ZDLENBaEZrRCxFQUFFLENBQUMsU0FBUyxHQWdGOUQ7a0JBaEZvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5pbXBvcnQgU2h1U2hpQ2FyYlNob3BWaWV3IGZyb20gXCIuL0dhbWUvVWlfUG9wdXAvU2hvcC9TaHVTaGlDYXJiLlNob3BWaWV3XCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HYW1lXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuL1NodVNoaUNhcmIuR2xvYmFsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHsgICBcbiAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lTWFuYWdlciA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5Ib21lOiBjYy5Ob2RlID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICBwcmZHYW1lOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5QbGF5OiBjYy5Ob2RlID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICBwcmZTaG9wVmlldzogY2MuUHJlZmFiID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgXG4gICBsYlRvdGFsR29sZDogY2MuTGFiZWwgPSBudWxsO1xuICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgIHByZlNldHRpbmc6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgIG9uTG9hZCAoKSB7XG4gICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgR2xvYmFsLnRvdGFsR29sZCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxHb2xkXCIpKSB8fCA1MDA7XG4gICAgIFxuICAgICAgdGhpcy51cGRhdGVUb3RhbEdvbGQoKTtcbiAgICAgIHRoaXMuZWZmZWN0UGxheSgpO1xuICAgICAgaWYgKEdsb2JhbC5zb3VuZE1hbmFnZXIpXG4gICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyLm11c2ljX2JhY2tncm91bmQucGxheSgpO1xuICAgfVxuXG4gICBzdGFydCAoKSB7XG5cbiAgIH1cbiAgIG9uQ2xpY2tQbGF5KCkge1xuICAgICAgaWYoR2xvYmFsLnNvdW5kTWFuYWdlcikge1xuICAgICAgICAgR2xvYmFsLnNvdW5kTWFuYWdlci5wbGF5U291bmRDbGljaygpO1xuICAgICAgfVxuICAgICAgLy8gIHRoaXMubkhvbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAvLyAgdGhpcy5uR2FtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgbGV0IGdhbWUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWUpLmdldENvbXBvbmVudChTaHVTaGlDYXJiR2FtZSlcbiAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1lLm5vZGUpO1xuICAgICAgLy90aGlzLm5Ib21lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgncGxheWJ0bicpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgnc2hvcCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgnc2V0dGluZycpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgXG4gICB9XG5cbiAgIG9uQ2xpY2tTaG9wVmlldygpIHtcbiAgICAgIGlmKEdsb2JhbC5zb3VuZE1hbmFnZXIpIHtcbiAgICAgICAgIEdsb2JhbC5zb3VuZE1hbmFnZXIucGxheVNvdW5kQ2xpY2soKTtcbiAgICAgIH1cbiAgICAgIGxldCBzaG9wVmlldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmU2hvcFZpZXcpLmdldENvbXBvbmVudChTaHVTaGlDYXJiU2hvcFZpZXcpXG4gICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2hvcFZpZXcubm9kZSk7XG4gICB9XG4gICB1cGRhdGVUb3RhbEdvbGQoKSB7XG4gICAgICB0aGlzLmxiVG90YWxHb2xkLnN0cmluZyA9IEdsb2JhbC5mb3JtYXROdW1iZXIoR2xvYmFsLnRvdGFsR29sZCk7XG4gICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvdGFsR29sZCcsSlNPTi5zdHJpbmdpZnkoR2xvYmFsLnRvdGFsR29sZCkpO1xuICAgICAgY29uc29sZS5sb2coXCJUb25nIHRpZW4gXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgfVxuXG4gICBlZmZlY3RQbGF5KCkge1xuICAgICAgY2MudHdlZW4odGhpcy5uUGxheSlcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgY2MudHdlZW4oKVxuICAgICAgICAgLnRvKDAuOCx7c2NhbGU6MC44fSlcbiAgICAgICAgIC50bygwLjgse3NjYWxlOiAxfSlcbiAgICAgICAgIC5zdGFydCgpXG4gICAgICApLnN0YXJ0KCk7XG4gICB9XG5cbiAgIG9uQ2xpY2tTZXR0aW5nVmlldygpIHtcbiAgICAgIGlmKEdsb2JhbC5zb3VuZE1hbmFnZXIpIHtcbiAgICAgICAgIEdsb2JhbC5zb3VuZE1hbmFnZXIucGxheVNvdW5kQ2xpY2soKTtcbiAgICAgIH1cbiAgICAgIGxldCBzZXR0aW5nID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZTZXR0aW5nKVxuICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNldHRpbmcpO1xuICAgfVxuXG4gICBjbGlja1Rlc3QoKSB7XG4gICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/Game/Ui_Popup/ShuShiCarb.SettingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f0fd3epKRG7byTyvDHzrTW', 'ShuShiCarb.SettingView');
// SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.SettingView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShuShiCarb_Global_1 = require("../../ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sfMusic = [];
        _this.spMusic = null;
        _this.spSound = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.updateStatus();
    };
    NewClass.prototype.updateStatus = function () {
        if (ShuShiCarb_Global_1.default.isSoundOn)
            this.spSound.spriteFrame = this.sfMusic[0];
        else
            this.spSound.spriteFrame = this.sfMusic[1];
        if (ShuShiCarb_Global_1.default.isMusicOn)
            this.spMusic.spriteFrame = this.sfMusic[0];
        else
            this.spMusic.spriteFrame = this.sfMusic[1];
    };
    NewClass.prototype.onClickSound = function () {
        if (ShuShiCarb_Global_1.default.soundManager)
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        ShuShiCarb_Global_1.default.isSoundOn = !ShuShiCarb_Global_1.default.isSoundOn;
        this.updateStatus();
    };
    NewClass.prototype.onClickMusic = function () {
        if (ShuShiCarb_Global_1.default.soundManager)
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        ShuShiCarb_Global_1.default.isMusicOn = !ShuShiCarb_Global_1.default.isMusicOn;
        this.updateStatus();
        ShuShiCarb_Global_1.default.soundManager.updateMusicState();
    };
    NewClass.prototype.onClickClose = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        this.node.destroy();
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "sfMusic", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "spMusic", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "spSound", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1NodVNoaUNhcmIuU2V0dGluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkRBQTZDO0FBRXZDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0RDO1FBakRHLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRy9CLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsYUFBTyxHQUFjLElBQUksQ0FBQTs7UUEyQ3pCLGlCQUFpQjtJQUNyQixDQUFDO0lBMUNHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLDJCQUFNLENBQUMsU0FBUztZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUUzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9DLElBQUksMkJBQU0sQ0FBQyxTQUFTO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTNDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLDJCQUFNLENBQUMsWUFBWTtZQUNuQiwyQkFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV6QywyQkFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLDJCQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLElBQUksMkJBQU0sQ0FBQyxZQUFZO1lBQ25CLDJCQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXpDLDJCQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsMkJBQU0sQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLDJCQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFHLDJCQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3BCLDJCQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBN0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ007SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBUlIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9ENUI7SUFBRCxlQUFDO0NBcERELEFBb0RDLENBcERxQyxFQUFFLENBQUMsU0FBUyxHQW9EakQ7a0JBcERvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL1NodVNoaUNhcmIuR2xvYmFsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmTXVzaWM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3BNdXNpYzogY2MuU3ByaXRlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3BTb3VuZDogY2MuU3ByaXRlID0gbnVsbFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKClcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0dXMoKSB7XG4gICAgICAgIGlmIChHbG9iYWwuaXNTb3VuZE9uKVxuICAgICAgICAgICAgdGhpcy5zcFNvdW5kLnNwcml0ZUZyYW1lID0gdGhpcy5zZk11c2ljWzBdO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnNwU291bmQuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTXVzaWNbMV07XG5cbiAgICAgICAgaWYgKEdsb2JhbC5pc011c2ljT24pXG4gICAgICAgICAgICB0aGlzLnNwTXVzaWMuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTXVzaWNbMF07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc3BNdXNpYy5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1sxXTtcbiAgICB9XG5cbiAgICBvbkNsaWNrU291bmQoKSB7XG4gICAgICAgIGlmIChHbG9iYWwuc291bmRNYW5hZ2VyKVxuICAgICAgICAgICAgR2xvYmFsLnNvdW5kTWFuYWdlci5wbGF5U291bmRDbGljaygpO1xuXG4gICAgICAgIEdsb2JhbC5pc1NvdW5kT24gPSAhR2xvYmFsLmlzU291bmRPbjtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrTXVzaWMoKSB7XG4gICAgICAgIGlmIChHbG9iYWwuc291bmRNYW5hZ2VyKVxuICAgICAgICAgICAgR2xvYmFsLnNvdW5kTWFuYWdlci5wbGF5U291bmRDbGljaygpO1xuICAgICAgICBcbiAgICAgICAgR2xvYmFsLmlzTXVzaWNPbiA9ICFHbG9iYWwuaXNNdXNpY09uO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cygpXG4gICAgICAgIEdsb2JhbC5zb3VuZE1hbmFnZXIudXBkYXRlTXVzaWNTdGF0ZSgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tDbG9zZSgpIHtcbiAgICAgICAgaWYoR2xvYmFsLnNvdW5kTWFuYWdlcikge1xuICAgICAgICAgICAgR2xvYmFsLnNvdW5kTWFuYWdlci5wbGF5U291bmRDbGljaygpO1xuICAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgIFxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/ShuShiCarb.Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57e45IlTRNBoJ26llVySEfH', 'ShuShiCarb.Game');
// SuShiCarb/scripts/ShuShiCarb.Game.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShuShiCarb_Food_1 = require("./Game/ShuShiCarb.Food");
var ShuShiCarb_Player_1 = require("./Game/ShuShiCarb.Player");
var ShuShiCrab_GameOver_1 = require("./Game/Ui_Popup/ShuShiCrab.GameOver");
var ShuShiCarb_GameManager_1 = require("./ShuShiCarb.GameManager");
var ShuShiCarb_Global_1 = require("./ShuShiCarb.Global");
var ShuShiCarb_GoldFly_1 = require("./ShuShiCarb.GoldFly");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGame = /** @class */ (function (_super) {
    __extends(ShuShiCarbGame, _super);
    function ShuShiCarbGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfOrder = null;
        _this.nHome = null;
        _this.listSpfFood = [];
        _this.nPlayer = null;
        _this.conveyor_1 = null;
        _this.conveyor_2 = null;
        _this.conveyor_3 = null;
        _this.prfFood = null;
        _this.lsFoodTable = [];
        _this.lbGold = null;
        _this.prfGameOver = null;
        _this.prgTime = null;
        _this.lbCountDown = null;
        _this.nEffectGold = null;
        _this.nEffecBagMoneyFly = null;
        _this.nEndEffect = null;
        _this.nCheckFalse = null;
        _this.nCheckTrue = null;
        _this.lbBagMoneyEffect = null;
        // LIFE-CYCLE CALLBACKS:
        _this.data = [0, 1, 2, 3, 4, 5];
        _this.playOrders = [];
        _this.hookObjects = [];
        _this.indexData = 0;
        _this.countCorrect = 0;
        // numberCountdown = 7;
        _this.countdownInterval = null;
        _this.isMove = false;
        _this.player = null;
        _this.gold = 0;
        _this.duration = 60;
        _this.numberCountDown = 0;
        _this.isCountDown = false;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbGame_1 = ShuShiCarbGame;
    ShuShiCarbGame.prototype.onLoad = function () {
        ShuShiCarbGame_1.instance = this;
        var checkBagMoney = JSON.parse(cc.sys.localStorage.getItem("checkBagMoney"));
        ShuShiCarb_Global_1.default.moneyBag = JSON.parse(cc.sys.localStorage.getItem("moneyBag")) || ShuShiCarb_Global_1.default.moneyBag;
        console.log(ShuShiCarb_Global_1.default.moneyBag);
        if (checkBagMoney !== null) {
            ShuShiCarb_Global_1.default.checkBagMoney = checkBagMoney;
            console.log(ShuShiCarb_Global_1.default.checkBagMoney);
        }
        // this.renderFoodOder();
        this.randomOrderFood();
        console.log(this.playOrders);
        this.conveyor(this.conveyor_1);
        this.conveyor(this.conveyor_2);
        this.conveyor(this.conveyor_3);
        this.renderOrderFood();
        this.startCountDown();
    };
    // randomIdFood(arr,count) {
    //     let idFood = [];
    //     for(let i = 0; i < count; i++) {
    //         let randomIndex = Math.floor(Math.random() * arr.length);
    //         idFood.push(randomIndex);
    //         arr.splice(randomIndex,1);
    //     }
    //     return arr;
    // }
    ShuShiCarbGame.prototype.randomOrderFood = function () {
        this.playOrders = [];
        for (var i = 0; i < 3; i++) {
            var randomIndex = Math.floor(Math.random() * this.data.length);
            var foodId = this.data[randomIndex];
            this.playOrders.push(foodId);
        }
    };
    ShuShiCarbGame.prototype.startCountDown = function () {
        this.isCountDown = true;
        this.numberCountDown = this.duration;
        this.schedule(this.updateCountDown, 1);
    };
    ShuShiCarbGame.prototype.updateCountDown = function () {
        if (this.numberCountDown > 0) {
            this.numberCountDown--;
            this.updatePrgressTime();
            this.lbCountDown.string = "00: " + this.numberCountDown + " ";
        }
        else {
            this.isCountDown = false;
            this.lbCountDown.string = "00:00";
            this.gameOver(this.prfGameOver);
        }
    };
    ShuShiCarbGame.prototype.gameOver = function (prfGameOver) {
        var gamOver = cc.instantiate(prfGameOver).getComponent(ShuShiCrab_GameOver_1.default);
        this.node.addChild(gamOver.node);
    };
    ShuShiCarbGame.prototype.updatePrgressTime = function () {
        if (this.prgTime) {
            this.prgTime.progress -= 1 / this.duration;
        }
    };
    ShuShiCarbGame.prototype.renderOrderFood = function () {
        // if (this.player) {
        //     this.player.node.destroy(); // Destroy previous player node
        // }
        this.player = cc.instantiate(this.prfOrder).getComponent(ShuShiCarb_Player_1.default);
        for (var i = 0; i < this.player.listFood.length; i++) {
            var food = this.player.listFood[i];
            food.getComponent(cc.Sprite).spriteFrame = this.listSpfFood[this.playOrders[i]];
        }
        this.indexData++;
        this.player.setData(this.indexData);
        this.nPlayer.addChild(this.player.node);
    };
    ShuShiCarbGame.prototype.checkCorrect = function () {
        var _this = this;
        if (this.hookObjects.length === 0) {
            return;
        }
        var hookFoodId = this.hookObjects[0].id;
        var foundMatch = false;
        if (hookFoodId === 999) {
            this.gold += ShuShiCarb_Global_1.default.moneyBag;
            this.updateGold(ShuShiCarb_Global_1.default.moneyBag);
            foundMatch = true;
            this.lbBagMoneyEffect.string = "+" + ShuShiCarb_Global_1.default.moneyBag + '';
            ShuShiCarb_GoldFly_1.default.instance.playAnim(this.nEffecBagMoneyFly, this.nEndEffect, this.nEffecBagMoneyFly);
        }
        else {
            var _loop_1 = function (i) {
                if (this_1.playOrders[i] === hookFoodId) {
                    if (!this_1.player.listFood[i].getChildByName("tick").active) {
                        this_1.player.listFood[i].getChildByName("tick").active = true;
                        //this.nGoldFly.active = true;
                        this_1.scheduleOnce(function () {
                            _this.lsFoodTable[i].getComponent(cc.Sprite).spriteFrame = _this.listSpfFood[hookFoodId];
                            _this.lsFoodTable[i].active = true;
                            // this.nGoldFly.active = false;
                        }, 0.2);
                        ShuShiCarb_GoldFly_1.default.instance.playAnim(this_1.nEffectGold, this_1.nEndEffect, this_1.nEffectGold);
                        this_1.gold += 5;
                        this_1.updateGold(5);
                        foundMatch = true;
                        this_1.nCheckTrue.active = true;
                        setTimeout(function () {
                            _this.nCheckTrue.active = false;
                        }, 500);
                        this_1.countCorrect++;
                        return "break";
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.playOrders.length; i++) {
                var state_1 = _loop_1(i);
                if (state_1 === "break")
                    break;
            }
        }
        this.lbGold.string = this.gold + ' ';
        if (!foundMatch) {
            this.nCheckFalse.active = true;
            setTimeout(function () {
                _this.nCheckFalse.active = false;
            }, 500);
        }
        if (this.countCorrect >= 3) {
            this.resetGame(true);
        }
    };
    ShuShiCarbGame.prototype.updateGold = function (gold) {
        ShuShiCarb_Global_1.default.totalGold += gold;
        console.log("Tong tien ", ShuShiCarb_Global_1.default.totalGold);
        cc.sys.localStorage.setItem('totalGold', JSON.stringify(ShuShiCarb_Global_1.default.totalGold));
    };
    ShuShiCarbGame.prototype.conveyor = function (node) {
        for (var i = 0; i < node.childrenCount; i++) {
            var item = node.children[i].getComponent(ShuShiCarb_Food_1.default);
            if (ShuShiCarb_Global_1.default.checkBagMoney === true && i === 5) {
                item.setData(999);
            }
            else {
                var randomIndex = Math.floor(Math.random() * this.data.length);
                item.setData(this.data[randomIndex]);
            }
        }
    };
    ShuShiCarbGame.prototype.removeNode = function (node, id) {
        node.destroy();
        for (var i = 0; i < this.hookObjects.length; i++) {
            if (this.hookObjects[i].node == node && this.hookObjects[i].id == id) {
                this.hookObjects.splice(i, 1);
            }
        }
    };
    ShuShiCarbGame.prototype.resetFoodTable = function () {
        for (var i = 0; i < this.lsFoodTable.length; i++) {
            var item = this.lsFoodTable[i];
            item.active = false;
        }
    };
    ShuShiCarbGame.prototype.resetGame = function (isHappy) {
        var _this = this;
        if (this.indexData >= 8) {
            this.indexData = 0;
        }
        console.log("Resetting game...");
        this.countCorrect = 0;
        var resetCallback = function () {
            _this.randomOrderFood();
            _this.renderOrderFood();
            // this.conveyor(this.conveyor_1);
            // this.conveyor(this.conveyor_2); 
            // this.conveyor(this.conveyor_3);
            _this.resetFoodTable();
        };
        if (isHappy) {
            this.player.happyEffectPlayerMoveOut(resetCallback);
        }
        else {
            this.player.sadEffectPlayerMoveOut(resetCallback);
        }
    };
    ShuShiCarbGame.prototype.onclickBack = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
        this.node.destroy();
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = true;
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('shop').getComponent(cc.Button).interactable = true;
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('setting').getComponent(cc.Button).interactable = true;
    };
    ShuShiCarbGame.prototype.start = function () {
    };
    var ShuShiCarbGame_1;
    ShuShiCarbGame.instance = null;
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGame.prototype, "prfOrder", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nHome", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ShuShiCarbGame.prototype, "listSpfFood", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nPlayer", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "conveyor_1", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "conveyor_2", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "conveyor_3", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGame.prototype, "prfFood", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "lsFoodTable", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGame.prototype, "lbGold", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGame.prototype, "prfGameOver", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ShuShiCarbGame.prototype, "prgTime", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGame.prototype, "lbCountDown", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nEffectGold", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nEffecBagMoneyFly", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nEndEffect", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nCheckFalse", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nCheckTrue", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGame.prototype, "lbBagMoneyEffect", void 0);
    ShuShiCarbGame = ShuShiCarbGame_1 = __decorate([
        ccclass
    ], ShuShiCarbGame);
    return ShuShiCarbGame;
}(cc.Component));
exports.default = ShuShiCarbGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUN4RCwyRUFBcUU7QUFFckUsbUVBQTZEO0FBQzdELHlEQUF5QztBQUN6QywyREFBcUQ7QUFHL0MsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFnUkM7UUE1UUcsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUVwQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFHM0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFhLElBQUksQ0FBQTtRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1Qix1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0Isc0JBQWdCLEdBQWEsSUFBSSxDQUFD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RUFBRSxDQUFDLElBQUksQ0FBQzs2REFDZ0I7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNVO0lBRTVCO1FBREEsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1U7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0REFDZTtJQTlDakIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWdSbEM7SUFBRCxxQkFBQztDQWhSRCxBQWdSQyxDQWhSMkMsRUFBRSxDQUFDLFNBQVMsR0FnUnZEO2tCQWhSb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkNvbnZleW9yIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Db252ZXlvclwiO1xuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Gb29kXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYlBsYXllciBmcm9tIFwiLi9HYW1lL1NodVNoaUNhcmIuUGxheWVyXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVPdmVyIGZyb20gXCIuL0dhbWUvVWlfUG9wdXAvU2h1U2hpQ3JhYi5HYW1lT3ZlclwiO1xuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuL1NodVNoaUNhcmIuR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiR29sZEZseSBmcm9tIFwiLi9TaHVTaGlDYXJiLkdvbGRGbHlcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZk9yZGVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Ib21lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgbGlzdFNwZkZvb2Q6IGNjLlNwcml0ZUZyYW1lIFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udmV5b3JfMTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb252ZXlvcl8yOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnZleW9yXzM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZGb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbHNGb29kVGFibGU6IGNjLk5vZGVbXT0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gICBcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkdhbWVPdmVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBwcmdUaW1lOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuRWZmZWN0R29sZDogY2MuTm9kZSA9IG51bGw7IFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5FZmZlY0JhZ01vbmV5Rmx5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuRW5kRWZmZWN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQ2hlY2tGYWxzZTogY2MuTm9kZSA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQ2hlY2tUcnVlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJCYWdNb25leUVmZmVjdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGRhdGEgPSBbMCwxLDIsMyw0LDVdO1xuICAgIHBsYXlPcmRlcnMgPSBbXTtcbiAgICBob29rT2JqZWN0czoge25vZGU6Y2MuTm9kZSwgaWQ6IG51bWJlcn0gW10gPSBbXTtcbiAgICBpbmRleERhdGEgPSAwO1xuICAgIGNvdW50Q29ycmVjdCA9IDA7XG4gICAgLy8gbnVtYmVyQ291bnRkb3duID0gNztcbiAgICBjb3VudGRvd25JbnRlcnZhbDogYW55ID0gbnVsbDtcbiAgICBpc01vdmUgID0gZmFsc2U7XG4gICAgcGxheWVyID0gbnVsbDtcbiAgICBnb2xkID0gMDtcbiAgICBkdXJhdGlvbiA9IDYwO1xuICAgIG51bWJlckNvdW50RG93biA9IDA7XG4gICAgaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNoZWNrQmFnTW9uZXkgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoZWNrQmFnTW9uZXlcIikpO1xuICAgICAgICBHbG9iYWwubW9uZXlCYWcgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vbmV5QmFnXCIpKSB8fCBHbG9iYWwubW9uZXlCYWc7XG4gICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbC5tb25leUJhZyk7XG4gICAgICAgIGlmIChjaGVja0JhZ01vbmV5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBHbG9iYWwuY2hlY2tCYWdNb25leSA9IGNoZWNrQmFnTW9uZXk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWwuY2hlY2tCYWdNb25leSlcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnJlbmRlckZvb2RPZGVyKCk7XG4gICAgICAgIHRoaXMucmFuZG9tT3JkZXJGb29kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheU9yZGVycyk7XG4gICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8xKTtcbiAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpO1xuICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMyk7XG4gICAgICAgIHRoaXMucmVuZGVyT3JkZXJGb29kKCk7XG4gICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICB9XG5cbiAgIFxuICAgIC8vIHJhbmRvbUlkRm9vZChhcnIsY291bnQpIHtcbiAgICAvLyAgICAgbGV0IGlkRm9vZCA9IFtdO1xuICAgIC8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG4gICAgLy8gICAgICAgICBpZEZvb2QucHVzaChyYW5kb21JbmRleCk7XG4gICAgLy8gICAgICAgICBhcnIuc3BsaWNlKHJhbmRvbUluZGV4LDEpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBhcnI7XG4gICAgLy8gfVxuXG5cbiAgICByYW5kb21PcmRlckZvb2QoKSB7XG4gICAgICAgIHRoaXMucGxheU9yZGVycyA9IFtdOyBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgZm9vZElkID0gdGhpcy5kYXRhW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMucGxheU9yZGVycy5wdXNoKGZvb2RJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydENvdW50RG93bigpIHtcbiAgICAgICAgdGhpcy5pc0NvdW50RG93biA9IHRydWU7XG4gICAgICAgIHRoaXMubnVtYmVyQ291bnREb3duID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNvdW50RG93biwxKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDb3VudERvd24oKSB7XG4gICAgICAgIGlmKHRoaXMubnVtYmVyQ291bnREb3duID4gMCkge1xuICAgICAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24tLTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJncmVzc1RpbWUoKTtcbiAgICAgICAgICAgIHRoaXMubGJDb3VudERvd24uc3RyaW5nID0gXCIwMDogXCIgKyB0aGlzLm51bWJlckNvdW50RG93biArIFwiIFwiIDtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0NvdW50RG93biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSBcIjAwOjAwXCJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIodGhpcy5wcmZHYW1lT3Zlcik7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3ZlcihwcmZHYW1lT3ZlcjogY2MuUHJlZmFiKSB7XG4gICAgICAgIGxldCBnYW1PdmVyID0gY2MuaW5zdGFudGlhdGUocHJmR2FtZU92ZXIpLmdldENvbXBvbmVudChTaHVTaGlDYXJiR2FtZU92ZXIpXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1PdmVyLm5vZGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByZ3Jlc3NUaW1lKCkge1xuICAgICAgICBpZih0aGlzLnByZ1RpbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJnVGltZS5wcm9ncmVzcyAtPSAxLyB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyT3JkZXJGb29kKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyLm5vZGUuZGVzdHJveSgpOyAvLyBEZXN0cm95IHByZXZpb3VzIHBsYXllciBub2RlXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZk9yZGVyKS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYlBsYXllcik7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllci5saXN0Rm9vZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZvb2QgPSB0aGlzLnBsYXllci5saXN0Rm9vZFtpXVxuICAgICAgICAgICAgZm9vZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwZkZvb2RbdGhpcy5wbGF5T3JkZXJzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZGV4RGF0YSsrO1xuICAgICAgICB0aGlzLnBsYXllci5zZXREYXRhKHRoaXMuaW5kZXhEYXRhKTtcbiAgICAgICAgdGhpcy5uUGxheWVyLmFkZENoaWxkKHRoaXMucGxheWVyLm5vZGUpO1xuICAgIH1cblxuICAgIGNoZWNrQ29ycmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9va09iamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhvb2tGb29kSWQgPSB0aGlzLmhvb2tPYmplY3RzWzBdLmlkO1xuICAgICAgICBsZXQgZm91bmRNYXRjaCA9IGZhbHNlO1xuICAgICAgICBpZiAoaG9va0Zvb2RJZCA9PT0gOTk5KSB7XG4gICAgICAgICAgICB0aGlzLmdvbGQgKz0gR2xvYmFsLm1vbmV5QmFnO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVHb2xkKEdsb2JhbC5tb25leUJhZyk7XG4gICAgICAgICAgICBmb3VuZE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGJCYWdNb25leUVmZmVjdC5zdHJpbmcgPSBcIitcIiArIEdsb2JhbC5tb25leUJhZyArICcnO1xuICAgICAgICAgICAgU2h1U2hpQ2FyYkdvbGRGbHkuaW5zdGFuY2UucGxheUFuaW0odGhpcy5uRWZmZWNCYWdNb25leUZseSx0aGlzLm5FbmRFZmZlY3QsdGhpcy5uRWZmZWNCYWdNb25leUZseSk7XG4gICAgICAgICAgIFxuICAgICAgICAgIFxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheU9yZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXlPcmRlcnNbaV0gPT09IGhvb2tGb29kSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5uR29sZEZseS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHNGb29kVGFibGVbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZGb29kW2hvb2tGb29kSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHNGb29kVGFibGVbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5Hb2xkRmx5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNodVNoaUNhcmJHb2xkRmx5Lmluc3RhbmNlLnBsYXlBbmltKHRoaXMubkVmZmVjdEdvbGQsdGhpcy5uRW5kRWZmZWN0LHRoaXMubkVmZmVjdEdvbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvbGQgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlR29sZCg1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uQ2hlY2tUcnVlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5DaGVja1RydWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYkdvbGQuc3RyaW5nID0gdGhpcy5nb2xkICsgJyAnO1xuICAgICAgICBpZiAoIWZvdW5kTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5DaGVja0ZhbHNlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uQ2hlY2tGYWxzZS5hY3RpdmUgPSBmYWxzZSBcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmNvdW50Q29ycmVjdCA+PTMpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRHYW1lKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHVwZGF0ZUdvbGQoZ29sZDogbnVtYmVyKSB7XG4gICAgICAgIEdsb2JhbC50b3RhbEdvbGQgKz0gZ29sZDtcbiAgICAgICAgY29uc29sZS5sb2coXCJUb25nIHRpZW4gXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvdGFsR29sZCcsSlNPTi5zdHJpbmdpZnkoR2xvYmFsLnRvdGFsR29sZCkpO1xuICAgIH1cbiAgICBjb252ZXlvcihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gbm9kZS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkZvb2QpO1xuICAgICAgICAgICAgaWYoR2xvYmFsLmNoZWNrQmFnTW9uZXkgPT09IHRydWUgJiYgaSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0RGF0YSg5OTkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpdGVtLnNldERhdGEodGhpcy5kYXRhW3JhbmRvbUluZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlTm9kZShub2RlOiBjYy5Ob2RlLCBpZCkge1xuICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaG9va09iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaG9va09iamVjdHNbaV0ubm9kZSA9PSBub2RlICYmIHRoaXMuaG9va09iamVjdHNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tPYmplY3RzLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmVzZXRGb29kVGFibGUoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxzRm9vZFRhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubHNGb29kVGFibGVbaV07XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgIH1cbiAgICByZXNldEdhbWUoaXNIYXBweTogYm9vbGVhbikge1xuICAgICAgICBpZih0aGlzLmluZGV4RGF0YSA+PSA4KSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4RGF0YSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNldHRpbmcgZ2FtZS4uLlwiKTtcbiAgICAgICAgdGhpcy5jb3VudENvcnJlY3QgPSAwO1xuICAgICAgICBsZXQgcmVzZXRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9tT3JkZXJGb29kKCk7IFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJPcmRlckZvb2QoKTsgXG4gICAgICAgICAgICAvLyB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMSk7XG4gICAgICAgICAgICAvLyB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMik7IFxuICAgICAgICAgICAgLy8gdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzMpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEZvb2RUYWJsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNIYXBweSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGFwcHlFZmZlY3RQbGF5ZXJNb3ZlT3V0KHJlc2V0Q2FsbGJhY2spO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5zYWRFZmZlY3RQbGF5ZXJNb3ZlT3V0KHJlc2V0Q2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25jbGlja0JhY2soKSB7IFxuICAgICAgICBpZihHbG9iYWwuc291bmRNYW5hZ2VyKSB7XG4gICAgICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyLnBsYXlTb3VuZENsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLnVwZGF0ZVRvdGFsR29sZCgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3BsYXlidG4nKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3Nob3AnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3NldHRpbmcnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIFxuICAgIHN0YXJ0ICgpIHtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc267ASAKxLjZBm3npC1v+1', 'ShuShiCarb.ItemShop');
// SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemShop.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShuShiCarb_GameManager_1 = require("../../../ShuShiCarb.GameManager");
var ShuShiCarb_Global_1 = require("../../../ShuShiCarb.Global");
var ShuShiCarb_ShopView_1 = require("./ShuShiCarb.ShopView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbItemShop = /** @class */ (function (_super) {
    __extends(ShuShiCarbItemShop, _super);
    function ShuShiCarbItemShop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nItemShop = null;
        _this.lbPrice = null;
        _this.nBtnBuy = null;
        _this.nStateBuy = null;
        // @property(cc.Label)
        // lbLeverSpeedOld: cc.Label = null;
        // @property(cc.Label)
        // lbLeverSpeedNew: cc.Label = null;
        _this.lsSpFItemShop = [];
        _this.index = 0;
        _this.isCheck = false;
        _this._data = null;
        _this._data2 = null;
        _this._data3 = null;
        _this.itemId = 0;
        return _this;
    }
    ShuShiCarbItemShop.prototype.onLoad = function () {
        //this.checkClick();
    };
    ShuShiCarbItemShop.prototype.setData = function (id) {
        this.itemId = id;
        switch (id) {
            case 0: // hook
                this.index = ShuShiCarb_Global_1.default.hookIndex;
                this._data = ShuShiCarb_Global_1.default.dataHook[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                console.log(this._data, this.index);
                break;
            case 1: // Bag money
                this.index = ShuShiCarb_Global_1.default.bagIndex;
                this._data = ShuShiCarb_Global_1.default.dataBagMoney[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                // this.lbLeverSpeedOld.node.active = false;
                // this.lbLeverSpeedNew.node.x = 27;
                // this.lbLeverSpeedNew.node.y = 5;
                break;
            case 2: // time Happy
                this._data = ShuShiCarb_Global_1.default.dataTimeHappy[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                // this.lbLeverSpeedOld.node.active = false;
                // this.lbLeverSpeedNew.node.x = 25;
                // this.lbLeverSpeedNew.node.y = 6;
                this.index = ShuShiCarb_Global_1.default.timeIndex;
                this.nStateBuy.x = -115;
                this.nStateBuy.y = -28;
                break;
            default:
                break;
        }
        this.updatePrice(this.index, ShuShiCarb_Global_1.default.totalGold);
    };
    ShuShiCarbItemShop.prototype.updatePrice = function (index, totalGold) {
        if (index < 4) {
            this.lbPrice.string = this._data.price + ' ';
            if (totalGold >= this._data.price) {
                //this.lbLeverSpeedOld.string = "0";
                this.nBtnBuy.getComponent(cc.Button).interactable = true;
            }
            else {
                //this.lbLeverSpeedNew.string = this._data.price + ' ';
                //this.lbLeverSpeedOld.string = this._data.price + ' ';
                this.nBtnBuy.getComponent(cc.Button).interactable = false;
            }
        }
        else {
            this.lbPrice.string = "Max";
            //this.lbLeverSpeedNew.string = "Max";
            //this.lbLeverSpeedOld.string = "Max";
            this.nBtnBuy.getComponent(cc.Button).interactable = false;
        }
        this.updatePurchaseState();
    };
    // updatePrice(index, totalGold) {
    //     if (index < 4) {
    //         this.lbPrice.string = this._data.price + ' ';
    //         if (totalGold >= this._data.price) {
    //             switch (this.itemId) {
    //                 case 0:
    //                     break;
    //                 default:
    //                     break;
    //             }
    //             this.lbLeverSpeedOld.string = "0";
    //             this.nBtnBuy.getComponent(cc.Button).interactable = true;
    //         } else {
    //             this.lbLeverSpeedNew.string = this._data.price + ' ';
    //             this.lbLeverSpeedOld.string = this._data.price + ' ';
    //             this.nBtnBuy.getComponent(cc.Button).interactable = false;
    //         }
    //     } else {
    //         this.lbPrice.string = "Max";
    //         this.lbLeverSpeedNew.string = "Max";
    //         this.lbLeverSpeedOld.string = "Max";
    //         this.nBtnBuy.getComponent(cc.Button).interactable = false;
    //     }
    //     this.updatePurchaseState();
    // }
    ShuShiCarbItemShop.prototype.savePurchaseState = function () {
        var purchaseData = {
            dataHook: ShuShiCarb_Global_1.default.dataHook,
            dataBagMoney: ShuShiCarb_Global_1.default.dataBagMoney,
            dataTimeHappy: ShuShiCarb_Global_1.default.dataTimeHappy,
            activeIndexHook: ShuShiCarb_Global_1.default.hookIndex,
        };
        cc.sys.localStorage.setItem('itemShopData', JSON.stringify(purchaseData));
    };
    ShuShiCarbItemShop.prototype.updatePurchaseState = function () {
        for (var i = 0; i <= this.index; i++) {
            this.nStateBuy.children[i].active = true;
        }
    };
    ShuShiCarbItemShop.prototype.onBuy = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        if (this.index < 4) {
            this.nStateBuy.children[this.index].active = true;
            ShuShiCarb_Global_1.default.totalGold -= this._data.price;
            switch (this.itemId) {
                case 0:
                    this.index++;
                    ShuShiCarb_Global_1.default.hookIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataHook[this.index];
                    ShuShiCarb_Global_1.default.speedHook += this._data.speed;
                    ShuShiCarb_Global_1.default.lengthHook += this._data.widthHook;
                    cc.sys.localStorage.setItem("speedHook", JSON.stringify(ShuShiCarb_Global_1.default.speedHook));
                    cc.sys.localStorage.setItem("lengthHook", JSON.stringify(ShuShiCarb_Global_1.default.lengthHook));
                    cc.sys.localStorage.setItem("hookIndex", this.index);
                    break;
                case 1:
                    this.index++;
                    ShuShiCarb_Global_1.default.checkBagMoney = true;
                    ShuShiCarb_Global_1.default.bagIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataBagMoney[this.index];
                    ShuShiCarb_Global_1.default.moneyBag += this._data.gold;
                    cc.sys.localStorage.setItem("moneyBag", JSON.stringify(ShuShiCarb_Global_1.default.moneyBag));
                    cc.sys.localStorage.setItem("bagIndex", this.index);
                    cc.sys.localStorage.setItem("checkBagMoney", JSON.stringify(ShuShiCarb_Global_1.default.checkBagMoney));
                    break;
                case 2:
                    this.index++;
                    ShuShiCarb_Global_1.default.timeIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataTimeHappy[this.index];
                    cc.sys.localStorage.setItem("timeIndex", this.index);
                    ShuShiCarb_Global_1.default.timeHappy += this._data.time;
                    cc.sys.localStorage.setItem("timeHappy", JSON.stringify(ShuShiCarb_Global_1.default.timeHappy));
                    //console.log("Index ", this.index);
                    break;
            }
            this.savePurchaseState();
            this.updatePrice(this.index, ShuShiCarb_Global_1.default.totalGold);
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            ShuShiCarb_ShopView_1.default.instance.updateGold();
            ShuShiCarb_ShopView_1.default.instance.updateItemsState(ShuShiCarb_Global_1.default.totalGold);
        }
    };
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemShop.prototype, "nItemShop", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemShop.prototype, "lbPrice", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemShop.prototype, "nBtnBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemShop.prototype, "nStateBuy", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ShuShiCarbItemShop.prototype, "lsSpFItemShop", void 0);
    ShuShiCarbItemShop = __decorate([
        ccclass
    ], ShuShiCarbItemShop);
    return ShuShiCarbItemShop;
}(cc.Component));
exports.default = ShuShiCarbItemShop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5JdGVtU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwRUFBb0U7QUFDcEUsZ0VBQWdEO0FBQ2hELDZEQUF1RDtBQUdqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQW9MQztRQWpMRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLHNCQUFzQjtRQUN0QixvQ0FBb0M7UUFDcEMsc0JBQXNCO1FBQ3RCLG9DQUFvQztRQUdwQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFDckMsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBSyxHQUFHLElBQUksQ0FBQTtRQUNaLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsWUFBTSxHQUFHLENBQUMsQ0FBQzs7SUE2SmYsQ0FBQztJQTNKRyxtQ0FBTSxHQUFOO1FBQ0ksb0JBQW9CO0lBQ3hCLENBQUM7SUFFRCxvQ0FBTyxHQUFQLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFFBQVEsRUFBRSxFQUFFO1lBQ1IsS0FBSyxDQUFDLEVBQUUsT0FBTztnQkFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLDJCQUFN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QUMsMkJBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QyxnQ0FBcUIsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDakQsNkJBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3pDLDZCQUFrQixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBRWxFO0lBR0wsQ0FBQztJQWhMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNRO0lBUTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkRBQ1k7SUFqQnBCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBb0x0QztJQUFELHlCQUFDO0NBcExELEFBb0xDLENBcEwrQyxFQUFFLENBQUMsU0FBUyxHQW9MM0Q7a0JBcExvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHYW1lTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vU2h1U2hpQ2FyYi5HYW1lTWFuYWdlclwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiU2hvcFZpZXcgZnJvbSBcIi4vU2h1U2hpQ2FyYi5TaG9wVmlld1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSXRlbVNob3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkl0ZW1TaG9wOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJQcmljZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5CdG5CdXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5TdGF0ZUJ1eTogY2MuTm9kZSA9IG51bGw7XG4gICBcbiAgICAvLyBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgLy8gbGJMZXZlclNwZWVkT2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIC8vIGxiTGV2ZXJTcGVlZE5ldzogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxzU3BGSXRlbVNob3A6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBpbmRleCA9IDA7XG4gICAgaXNDaGVjayA9IGZhbHNlO1xuICAgIF9kYXRhID0gbnVsbFxuICAgIF9kYXRhMiA9IG51bGw7XG4gICAgX2RhdGEzID0gbnVsbDtcbiAgICBpdGVtSWQgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvL3RoaXMuY2hlY2tDbGljaygpO1xuICAgIH1cblxuICAgIHNldERhdGEoaWQpIHtcbiAgICAgICAgdGhpcy5pdGVtSWQgPSBpZDtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSAwOiAvLyBob29rXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IEdsb2JhbC5ob29rSW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLm5JdGVtU2hvcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubHNTcEZJdGVtU2hvcFtpZF07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0YSx0aGlzLmluZGV4KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTogLy8gQmFnIG1vbmV5XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IEdsb2JhbC5iYWdJbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0gR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLm5JdGVtU2hvcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubHNTcEZJdGVtU2hvcFtpZF07XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5sYkxldmVyU3BlZWRPbGQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5ub2RlLnggPSAyNztcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5ub2RlLnkgPSA1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOiAvLyB0aW1lIEhhcHB5XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IEdsb2JhbC5kYXRhVGltZUhhcHB5W3RoaXMuaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMubkl0ZW1TaG9wLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5sc1NwRkl0ZW1TaG9wW2lkXTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubGJMZXZlclNwZWVkTmV3Lm5vZGUueCA9IDI1O1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubGJMZXZlclNwZWVkTmV3Lm5vZGUueSA9IDY7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IEdsb2JhbC50aW1lSW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkueCA9IC0xMTU7XG4gICAgICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkueSA9IC0yODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSh0aGlzLmluZGV4LEdsb2JhbC50b3RhbEdvbGQpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByaWNlKGluZGV4LCB0b3RhbEdvbGQpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgNCkge1xuICAgICAgICAgICAgdGhpcy5sYlByaWNlLnN0cmluZyA9IHRoaXMuX2RhdGEucHJpY2UgKyAnICc7XG4gICAgICAgICAgICBpZiAodG90YWxHb2xkID49IHRoaXMuX2RhdGEucHJpY2UpIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMubGJMZXZlclNwZWVkTmV3LnN0cmluZyA9IHRoaXMuX2RhdGEucHJpY2UgKyAnICc7XG4gICAgICAgICAgICAgICAgLy90aGlzLmxiTGV2ZXJTcGVlZE9sZC5zdHJpbmcgPSB0aGlzLl9kYXRhLnByaWNlICsgJyAnO1xuICAgICAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSBcIk1heFwiO1xuICAgICAgICAgICAgLy90aGlzLmxiTGV2ZXJTcGVlZE5ldy5zdHJpbmcgPSBcIk1heFwiO1xuICAgICAgICAgICAgLy90aGlzLmxiTGV2ZXJTcGVlZE9sZC5zdHJpbmcgPSBcIk1heFwiO1xuICAgICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUHVyY2hhc2VTdGF0ZSgpO1xuICAgIH1cbiAgICAvLyB1cGRhdGVQcmljZShpbmRleCwgdG90YWxHb2xkKSB7XG4gICAgLy8gICAgIGlmIChpbmRleCA8IDQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSB0aGlzLl9kYXRhLnByaWNlICsgJyAnO1xuICAgIC8vICAgICAgICAgaWYgKHRvdGFsR29sZCA+PSB0aGlzLl9kYXRhLnByaWNlKSB7XG4gICAgLy8gICAgICAgICAgICAgc3dpdGNoICh0aGlzLml0ZW1JZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IFwiMFwiO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5zdHJpbmcgPSB0aGlzLl9kYXRhLnByaWNlICsgJyAnO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IHRoaXMuX2RhdGEucHJpY2UgKyAnICc7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5sYlByaWNlLnN0cmluZyA9IFwiTWF4XCI7XG4gICAgLy8gICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5zdHJpbmcgPSBcIk1heFwiO1xuICAgIC8vICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWRPbGQuc3RyaW5nID0gXCJNYXhcIjtcbiAgICAvLyAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLnVwZGF0ZVB1cmNoYXNlU3RhdGUoKTtcbiAgICAvLyB9XG4gICBcblxuICAgIHNhdmVQdXJjaGFzZVN0YXRlKCkge1xuICAgICAgICBsZXQgcHVyY2hhc2VEYXRhID0ge1xuICAgICAgICAgICAgZGF0YUhvb2s6IEdsb2JhbC5kYXRhSG9vayxcbiAgICAgICAgICAgIGRhdGFCYWdNb25leTogR2xvYmFsLmRhdGFCYWdNb25leSxcbiAgICAgICAgICAgIGRhdGFUaW1lSGFwcHk6IEdsb2JhbC5kYXRhVGltZUhhcHB5LFxuICAgICAgICAgICAgYWN0aXZlSW5kZXhIb29rOiBHbG9iYWwuaG9va0luZGV4LFxuICAgICAgICB9O1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1TaG9wRGF0YScsIEpTT04uc3RyaW5naWZ5KHB1cmNoYXNlRGF0YSkpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlUHVyY2hhc2VTdGF0ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5pbmRleDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CdXkoKSB7XG4gICAgICAgIGlmIChHbG9iYWwuc291bmRNYW5hZ2VyKSB7XG4gICAgICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyLnBsYXlTb3VuZENsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMuaW5kZXggPCA0KSB7XG4gICAgICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5jaGlsZHJlblt0aGlzLmluZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgR2xvYmFsLnRvdGFsR29sZCAtPSB0aGlzLl9kYXRhLnByaWNlO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5ob29rSW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBHbG9iYWwuc3BlZWRIb29rICs9IHRoaXMuX2RhdGEuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5sZW5ndGhIb29rICs9IHRoaXMuX2RhdGEud2lkdGhIb29rO1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzcGVlZEhvb2tcIixKU09OLnN0cmluZ2lmeShHbG9iYWwuc3BlZWRIb29rKSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxlbmd0aEhvb2tcIixKU09OLnN0cmluZ2lmeShHbG9iYWwubGVuZ3RoSG9vaykpO1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJob29rSW5kZXhcIiwgdGhpcy5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5jaGVja0JhZ01vbmV5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmJhZ0luZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IEdsb2JhbC5kYXRhQmFnTW9uZXlbdGhpcy5pbmRleF07XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5tb25leUJhZyArPSB0aGlzLl9kYXRhLmdvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vbmV5QmFnXCIsSlNPTi5zdHJpbmdpZnkoR2xvYmFsLm1vbmV5QmFnKSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhZ0luZGV4XCIsdGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrQmFnTW9uZXlcIiwgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmNoZWNrQmFnTW9uZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4KytcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLnRpbWVJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBHbG9iYWwuZGF0YVRpbWVIYXBweVt0aGlzLmluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGltZUluZGV4XCIsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBHbG9iYWwudGltZUhhcHB5ICs9IHRoaXMuX2RhdGEudGltZTtcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGltZUhhcHB5XCIsSlNPTi5zdHJpbmdpZnkoR2xvYmFsLnRpbWVIYXBweSkpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSW5kZXggXCIsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNhdmVQdXJjaGFzZVN0YXRlKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgsR2xvYmFsLnRvdGFsR29sZCk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlVG90YWxHb2xkKCk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiU2hvcFZpZXcuaW5zdGFuY2UudXBkYXRlR29sZCgpOyBcbiAgICAgICAgICAgIFNodVNoaUNhcmJTaG9wVmlldy5pbnN0YW5jZS51cGRhdGVJdGVtc1N0YXRlKEdsb2JhbC50b3RhbEdvbGQpO1xuICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
