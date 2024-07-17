
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
var ShuShiCarb_ItemHook_1 = require("./ShuShiCarb.ItemHook");
var ShuShiCarb_ItemMoneyBag_1 = require("./ShuShiCarb.ItemMoneyBag");
var ShuShiCarb_ItemTimeHappy_1 = require("./ShuShiCarb.ItemTimeHappy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbShopView = /** @class */ (function (_super) {
    __extends(ShuShiCarbShopView, _super);
    function ShuShiCarbShopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbGold = null;
        _this.nlistItem = null;
        _this.prfItemSpeedHook = null;
        _this.prfItemTimeHapy = null;
        _this.prfItemMoney = null;
        _this.listDataHook = [];
        return _this;
        // update (dt) {}
    }
    ShuShiCarbShopView_1 = ShuShiCarbShopView;
    ShuShiCarbShopView.prototype.onLoad = function () {
        ShuShiCarbShopView_1.instace = this;
        this.itemSpeedHook();
        this.updateGold();
        this.itemMoney();
        this.itemTimeHappy();
    };
    ShuShiCarbShopView.prototype.start = function () {
    };
    ShuShiCarbShopView.prototype.itemSpeedHook = function () {
        var item = cc.instantiate(this.prfItemSpeedHook).getComponent(ShuShiCarb_ItemHook_1.default);
        this.nlistItem.addChild(item.node);
    };
    ShuShiCarbShopView.prototype.itemMoney = function () {
        var item = cc.instantiate(this.prfItemMoney).getComponent(ShuShiCarb_ItemMoneyBag_1.default);
        this.nlistItem.addChild(item.node);
    };
    ShuShiCarbShopView.prototype.itemTimeHappy = function () {
        var item = cc.instantiate(this.prfItemTimeHapy).getComponent(ShuShiCarb_ItemTimeHappy_1.default);
        this.nlistItem.addChild(item.node);
    };
    ShuShiCarbShopView.prototype.updateGold = function () {
        this.lbGold.string = ShuShiCarb_Global_1.default.totalGold + " ";
    };
    // changeBtn(isTrue: boolean) {
    //     this.nBtnGreen.active = isTrue;
    //     this.nBtnGray.active = !isTrue;
    // }
    ShuShiCarbShopView.prototype.onClickClose = function () {
        this.node.destroy();
    };
    var ShuShiCarbShopView_1;
    ShuShiCarbShopView.instace = null;
    __decorate([
        property(cc.Label)
    ], ShuShiCarbShopView.prototype, "lbGold", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbShopView.prototype, "nlistItem", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbShopView.prototype, "prfItemSpeedHook", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbShopView.prototype, "prfItemTimeHapy", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbShopView.prototype, "prfItemMoney", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5TaG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnRUFBZ0Q7QUFDaEQsNkRBQXVEO0FBQ3ZELHFFQUErRDtBQUMvRCx1RUFBaUU7QUFJM0QsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUF1REM7UUFwREcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUMvQixrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7UUF1Q2xCLGlCQUFpQjtJQUNyQixDQUFDOzJCQXZEb0Isa0JBQWtCO0lBZ0JuQyxtQ0FBTSxHQUFOO1FBQ0ksb0JBQWtCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELGtDQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLDZCQUFrQixDQUFDLENBQUE7UUFDakYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLGlDQUFzQixDQUFDLENBQUE7UUFDakYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwwQ0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsWUFBWSxDQUFDLGtDQUF1QixDQUFDLENBQUE7UUFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCx1Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsMkJBQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ2hELENBQUM7SUFJRCwrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxJQUFJO0lBQ0oseUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7SUFwRGEsMEJBQU8sR0FBdUIsSUFBSSxDQUFDO0lBRWpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dFQUNlO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0RBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0REFDVztJQWRkLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBdUR0QztJQUFELHlCQUFDO0NBdkRELEFBdURDLENBdkQrQyxFQUFFLENBQUMsU0FBUyxHQXVEM0Q7a0JBdkRvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiSXRlbUhvb2sgZnJvbSBcIi4vU2h1U2hpQ2FyYi5JdGVtSG9va1wiO1xuaW1wb3J0IFNodVNoaUNhcmJJdGVtTW9uZXlCYWcgZnJvbSBcIi4vU2h1U2hpQ2FyYi5JdGVtTW9uZXlCYWdcIjtcbmltcG9ydCBTaHVTaGlDYXJiSXRlbVRpbWVIYXBweSBmcm9tIFwiLi9TaHVTaGlDYXJiLkl0ZW1UaW1lSGFwcHlcIjtcblxuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYlNob3BWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhY2U6IFNodVNoaUNhcmJTaG9wVmlldyA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiR29sZDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5saXN0SXRlbTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkl0ZW1TcGVlZEhvb2s6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZJdGVtVGltZUhhcHk6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkl0ZW1Nb25leTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBsaXN0RGF0YUhvb2sgPSBbXTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNodVNoaUNhcmJTaG9wVmlldy5pbnN0YWNlID0gdGhpcztcbiAgICAgICAgdGhpcy5pdGVtU3BlZWRIb29rKCk7XG4gICAgICAgIHRoaXMudXBkYXRlR29sZCgpO1xuICAgICAgICB0aGlzLml0ZW1Nb25leSgpO1xuICAgICAgICB0aGlzLml0ZW1UaW1lSGFwcHkoKTtcbiAgICB9XG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgaXRlbVNwZWVkSG9vaygpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW1TcGVlZEhvb2spLmdldENvbXBvbmVudChTaHVTaGlDYXJiSXRlbUhvb2spXG4gICAgICAgIHRoaXMubmxpc3RJdGVtLmFkZENoaWxkKGl0ZW0ubm9kZSk7XG4gICAgfVxuICAgIFxuICAgIGl0ZW1Nb25leSgpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW1Nb25leSkuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJJdGVtTW9uZXlCYWcpXG4gICAgICAgIHRoaXMubmxpc3RJdGVtLmFkZENoaWxkKGl0ZW0ubm9kZSk7XG4gICAgfVxuXG4gICAgaXRlbVRpbWVIYXBweSgpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW1UaW1lSGFweSkuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJJdGVtVGltZUhhcHB5KVxuICAgICAgICB0aGlzLm5saXN0SXRlbS5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgIH1cbiAgICB1cGRhdGVHb2xkKCkge1xuICAgICAgICB0aGlzLmxiR29sZC5zdHJpbmcgPSBHbG9iYWwudG90YWxHb2xkICsgXCIgXCI7XG4gICAgfVxuXG5cbiAgICBcbiAgICAvLyBjaGFuZ2VCdG4oaXNUcnVlOiBib29sZWFuKSB7XG4gICAgLy8gICAgIHRoaXMubkJ0bkdyZWVuLmFjdGl2ZSA9IGlzVHJ1ZTtcbiAgICAvLyAgICAgdGhpcy5uQnRuR3JheS5hY3RpdmUgPSAhaXNUcnVlO1xuICAgIC8vIH1cbiAgICBvbkNsaWNrQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=