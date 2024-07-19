
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ShopView.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxVaV9Qb3B1cFxcU2hvcFxcU2h1U2hpQ2FyYi5TaG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnRUFBZ0Q7QUFDaEQsNkRBQXVEO0FBSWpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBdUVDO1FBcEVHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7UUE0RGxCLGlCQUFpQjtJQUNyQixDQUFDOzJCQXZFb0Isa0JBQWtCO0lBV25DLG1DQUFNLEdBQU47UUFDSSxvQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRW5DLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUk7WUFDMUUsUUFBUSxFQUFFLDJCQUFNLENBQUMsUUFBUTtZQUN6QixZQUFZLEVBQUUsMkJBQU0sQ0FBQyxZQUFZO1lBQ2pDLGFBQWEsRUFBRSwyQkFBTSxDQUFDLGFBQWE7U0FDdEMsQ0FBQztRQUVGLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7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Ii8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uLy4uL1NodVNoaUNhcmIuR2xvYmFsXCI7XHJcbmltcG9ydCBTaHVTaGlDYXJiSXRlbVNob3AgZnJvbSBcIi4vU2h1U2hpQ2FyYi5JdGVtU2hvcFwiO1xyXG5cclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYlNob3BWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJTaG9wVmlldyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmxpc3RJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJmSXRlbTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIHRlc3QgPSAwO1xyXG4gICAgbGlzdERhdGFIb29rID0gW107XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgU2h1U2hpQ2FyYlNob3BWaWV3Lmluc3RhbmNlID0gdGhpcztcclxuXHJcbiAgICAgICAgbGV0IHB1cmNoYXNlRGF0YSA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXRlbVNob3BEYXRhXCIpKSB8fCB7XHJcbiAgICAgICAgICAgIGRhdGFIb29rOiBHbG9iYWwuZGF0YUhvb2ssXHJcbiAgICAgICAgICAgIGRhdGFCYWdNb25leTogR2xvYmFsLmRhdGFCYWdNb25leSxcclxuICAgICAgICAgICAgZGF0YVRpbWVIYXBweTogR2xvYmFsLmRhdGFUaW1lSGFwcHksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGhvb2tJbmRleCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvb2tJbmRleFwiKSkgfHwgMDtcclxuICAgICAgICBHbG9iYWwuaG9va0luZGV4ID0gaG9va0luZGV4O1xyXG4gICAgICAgIGxldCBiYWdJbmRleCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhZ0luZGV4XCIpKSB8fCAwO1xyXG4gICAgICAgIEdsb2JhbC5iYWdJbmRleCA9IGJhZ0luZGV4O1xyXG4gICAgICAgIGxldCB0aW1lSW5kZXggPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aW1lSW5kZXhcIikpIHx8IDA7XHJcbiAgICAgICAgR2xvYmFsLnRpbWVJbmRleCA9IHRpbWVJbmRleDtcclxuICAgICAgICBHbG9iYWwuZGF0YUhvb2sgPSBwdXJjaGFzZURhdGEuZGF0YUhvb2s7XHJcbiAgICAgICAgR2xvYmFsLmRhdGFCYWdNb25leSA9IHB1cmNoYXNlRGF0YS5kYXRhQmFnTW9uZXk7XHJcbiAgICAgICAgR2xvYmFsLmRhdGFUaW1lSGFwcHkgPSBwdXJjaGFzZURhdGEuZGF0YVRpbWVIYXBweTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUdvbGQoKTtcclxuICAgICAgICB0aGlzLml0ZW1TaG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNob3AoKSB7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVHb2xkKCkge1xyXG4gICAgICAgIHRoaXMubGJHb2xkLnN0cmluZyA9IEdsb2JhbC50b3RhbEdvbGQgKyBcIiBcIjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtc1N0YXRlKHRvdGFsR29sZCkge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMubmxpc3RJdGVtLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBpdGVtc1tpXS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkl0ZW1TaG9wKTtcclxuICAgICAgICAgICAgaXRlbS51cGRhdGVQcmljZShpdGVtLmluZGV4LCB0b3RhbEdvbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpdGVtU2hvcCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmSXRlbSkuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJJdGVtU2hvcClcclxuICAgICAgICAgICAgaXRlbS5zZXREYXRhKGkpO1xyXG4gICAgICAgICAgICB0aGlzLm5saXN0SXRlbS5hZGRDaGlsZChpdGVtLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNoYW5nZUJ0bihpc1RydWU6IGJvb2xlYW4pIHtcclxuICAgIC8vICAgICB0aGlzLm5CdG5HcmVlbi5hY3RpdmUgPSBpc1RydWU7XHJcbiAgICAvLyAgICAgdGhpcy5uQnRuR3JheS5hY3RpdmUgPSAhaXNUcnVlO1xyXG4gICAgLy8gfVxyXG4gICAgb25DbGlja0Nsb3NlKCkge1xyXG4gICAgICAgIGlmIChHbG9iYWwuc291bmRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbC5zb3VuZE1hbmFnZXIucGxheVNvdW5kQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19