
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
            activeIndexHook: ShuShiCarb_Global_1.default.hookIndex,
        };
        var hookIndex = parseInt(cc.sys.localStorage.getItem("hookIndex")) || 0;
        ShuShiCarb_Global_1.default.hookIndex = hookIndex;
        var bagIndex = parseInt(cc.sys.localStorage.getItem("bagIndex")) || 0;
        ShuShiCarb_Global_1.default.bagIndex = bagIndex;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5TaG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnRUFBZ0Q7QUFDaEQsNkRBQXVEO0FBSWpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBK0RDO1FBNURHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7UUFvRGxCLGlCQUFpQjtJQUNyQixDQUFDOzJCQS9Eb0Isa0JBQWtCO0lBV25DLG1DQUFNLEdBQU47UUFDSSxvQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRW5DLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUk7WUFDMUUsUUFBUSxFQUFFLDJCQUFNLENBQUMsUUFBUTtZQUN6QixZQUFZLEVBQUUsMkJBQU0sQ0FBQyxZQUFZO1lBQ2pDLGFBQWEsRUFBRSwyQkFBTSxDQUFDLGFBQWE7WUFDbkMsZUFBZSxFQUFFLDJCQUFNLENBQUMsU0FBUztTQUNwQyxDQUFDO1FBRUYsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSwyQkFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDN0IsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSwyQkFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDM0IsMkJBQU0sQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUN4QywyQkFBTSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQ2hELDJCQUFNLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsa0NBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx1Q0FBVSxHQUFWO0lBRUEsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRywyQkFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDaEQsQ0FBQztJQUdELHFDQUFRLEdBQVI7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyw2QkFBa0IsQ0FBQyxDQUFBO1lBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUNELCtCQUErQjtJQUMvQixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLElBQUk7SUFDSix5Q0FBWSxHQUFaO1FBQ0ksSUFBSSwyQkFBTSxDQUFDLFlBQVksRUFBRTtZQUNyQiwyQkFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7SUE1RGEsMkJBQVEsR0FBdUIsSUFBSSxDQUFDO0lBRWxEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNNO0lBUlQsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0ErRHRDO0lBQUQseUJBQUM7Q0EvREQsQUErREMsQ0EvRCtDLEVBQUUsQ0FBQyxTQUFTLEdBK0QzRDtrQkEvRG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuaW1wb3J0IFNodVNoaUNhcmJJdGVtU2hvcCBmcm9tIFwiLi9TaHVTaGlDYXJiLkl0ZW1TaG9wXCI7XG5cblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYlNob3BWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTaHVTaGlDYXJiU2hvcFZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBubGlzdEl0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIHRlc3QgPSAwO1xuICAgIGxpc3REYXRhSG9vayA9IFtdO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU2h1U2hpQ2FyYlNob3BWaWV3Lmluc3RhbmNlID0gdGhpcztcblxuICAgICAgICBsZXQgcHVyY2hhc2VEYXRhID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpdGVtU2hvcERhdGFcIikpIHx8IHtcbiAgICAgICAgICAgIGRhdGFIb29rOiBHbG9iYWwuZGF0YUhvb2ssXG4gICAgICAgICAgICBkYXRhQmFnTW9uZXk6IEdsb2JhbC5kYXRhQmFnTW9uZXksXG4gICAgICAgICAgICBkYXRhVGltZUhhcHB5OiBHbG9iYWwuZGF0YVRpbWVIYXBweSxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4SG9vazogR2xvYmFsLmhvb2tJbmRleCxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaG9va0luZGV4ID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaG9va0luZGV4XCIpKSB8fCAwO1xuICAgICAgICBHbG9iYWwuaG9va0luZGV4ID0gaG9va0luZGV4O1xuICAgICAgICBsZXQgYmFnSW5kZXggPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiYWdJbmRleFwiKSkgfHwgMDtcbiAgICAgICAgR2xvYmFsLmJhZ0luZGV4ID0gYmFnSW5kZXg7XG4gICAgICAgIEdsb2JhbC5kYXRhSG9vayA9IHB1cmNoYXNlRGF0YS5kYXRhSG9vaztcbiAgICAgICAgR2xvYmFsLmRhdGFCYWdNb25leSA9IHB1cmNoYXNlRGF0YS5kYXRhQmFnTW9uZXk7XG4gICAgICAgIEdsb2JhbC5kYXRhVGltZUhhcHB5ID0gcHVyY2hhc2VEYXRhLmRhdGFUaW1lSGFwcHk7XG4gICAgICAgIHRoaXMudXBkYXRlR29sZCgpO1xuICAgICAgICB0aGlzLml0ZW1TaG9wKCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVTaG9wKCkge1xuICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZUdvbGQoKSB7XG4gICAgICAgIHRoaXMubGJHb2xkLnN0cmluZyA9IEdsb2JhbC50b3RhbEdvbGQgKyBcIiBcIjtcbiAgICB9XG5cblxuICAgIGl0ZW1TaG9wKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkl0ZW0pLmdldENvbXBvbmVudChTaHVTaGlDYXJiSXRlbVNob3ApXG4gICAgICAgICAgICBpdGVtLnNldERhdGEoaSk7XG4gICAgICAgICAgICB0aGlzLm5saXN0SXRlbS5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNoYW5nZUJ0bihpc1RydWU6IGJvb2xlYW4pIHtcbiAgICAvLyAgICAgdGhpcy5uQnRuR3JlZW4uYWN0aXZlID0gaXNUcnVlO1xuICAgIC8vICAgICB0aGlzLm5CdG5HcmF5LmFjdGl2ZSA9ICFpc1RydWU7XG4gICAgLy8gfVxuICAgIG9uQ2xpY2tDbG9zZSgpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5zb3VuZE1hbmFnZXIpIHtcbiAgICAgICAgICAgIEdsb2JhbC5zb3VuZE1hbmFnZXIucGxheVNvdW5kQ2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19