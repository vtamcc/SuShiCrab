
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemShop.js';
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
        _this.lbLeverSpeedOld = null;
        _this.lbLeverSpeedNew = null;
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
                this.lbLeverSpeedOld.node.active = false;
                this.lbLeverSpeedNew.node.x = 27;
                this.lbLeverSpeedNew.node.y = 5;
                break;
            case 2: // time Happy
                this._data = ShuShiCarb_Global_1.default.dataTimeHappy[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                this.lbLeverSpeedOld.node.active = false;
                this.lbLeverSpeedNew.node.x = 25;
                this.lbLeverSpeedNew.node.y = 6;
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
                this.lbLeverSpeedOld.string = "0";
                this.nBtnBuy.getComponent(cc.Button).interactable = true;
            }
            else {
                this.lbLeverSpeedNew.string = this._data.price + ' ';
                this.lbLeverSpeedOld.string = this._data.price + ' ';
                this.nBtnBuy.getComponent(cc.Button).interactable = false;
            }
        }
        else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
            this.lbLeverSpeedOld.string = "Max";
            this.nBtnBuy.getComponent(cc.Button).interactable = false;
        }
        this.updatePurchaseState();
    };
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
        if (this.index < 4) {
            this.nStateBuy.children[this.index].active = true;
            ShuShiCarb_Global_1.default.totalGold -= this._data.price;
            switch (this.itemId) {
                case 0:
                    this.index++;
                    ShuShiCarb_Global_1.default.hookIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataHook[this.index];
                    cc.sys.localStorage.setItem("hookIndex", this.index);
                    break;
                case 1:
                    this.index++;
                    ShuShiCarb_Global_1.default.checkBagMoney = true;
                    ShuShiCarb_Global_1.default.bagIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataBagMoney[this.index];
                    cc.sys.localStorage.setItem("bagIndex", this.index);
                    cc.sys.localStorage.setItem("checkBagMoney", JSON.stringify(ShuShiCarb_Global_1.default.checkBagMoney));
                    break;
                case 2:
                    this.index++;
                    ShuShiCarb_Global_1.default.timeIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataTimeHappy[this.index];
                    cc.sys.localStorage.setItem("timeIndex", this.index);
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
        property(cc.Label)
    ], ShuShiCarbItemShop.prototype, "lbLeverSpeedOld", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemShop.prototype, "lbLeverSpeedNew", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxVaV9Qb3B1cFxcU2hvcFxcU2h1U2hpQ2FyYi5JdGVtU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwRUFBb0U7QUFDcEUsZ0VBQWdEO0FBQ2hELDZEQUF1RDtBQUdqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQTZJQztRQTFJRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBRWpDLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBR2pDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUNyQyxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ1osWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxZQUFNLEdBQUcsQ0FBQyxDQUFDOztJQXNIZixDQUFDO0lBcEhHLG1DQUFNLEdBQU47UUFDSSxvQkFBb0I7SUFDeEIsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsUUFBUSxFQUFFLEVBQUU7WUFDUixLQUFLLENBQUMsRUFBRSxPQUFPO2dCQUNYLElBQUksQ0FBQyxLQUFLLEdB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Nkl0QztJQUFELHlCQUFDO0NBN0lELEFBNklDLENBN0krQyxFQUFFLENBQUMsU0FBUyxHQTZJM0Q7a0JBN0lvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uLy4uL1NodVNoaUNhcmIuR2xvYmFsXCI7XHJcbmltcG9ydCBTaHVTaGlDYXJiU2hvcFZpZXcgZnJvbSBcIi4vU2h1U2hpQ2FyYi5TaG9wVmlld1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSXRlbVNob3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkl0ZW1TaG9wOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiUHJpY2U6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkJ0bkJ1eTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5TdGF0ZUJ1eTogY2MuTm9kZSA9IG51bGw7XHJcbiAgIFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJMZXZlclNwZWVkT2xkOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkxldmVyU3BlZWROZXc6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsc1NwRkl0ZW1TaG9wOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBpbmRleCA9IDA7XHJcbiAgICBpc0NoZWNrID0gZmFsc2U7XHJcbiAgICBfZGF0YSA9IG51bGxcclxuICAgIF9kYXRhMiA9IG51bGw7XHJcbiAgICBfZGF0YTMgPSBudWxsO1xyXG4gICAgaXRlbUlkID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy90aGlzLmNoZWNrQ2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKGlkKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtSWQgPSBpZDtcclxuICAgICAgICBzd2l0Y2ggKGlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy8gaG9va1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IEdsb2JhbC5ob29rSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uSXRlbVNob3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxzU3BGSXRlbVNob3BbaWRdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0YSx0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IC8vIEJhZyBtb25leVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IEdsb2JhbC5iYWdJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBHbG9iYWwuZGF0YUJhZ01vbmV5W3RoaXMuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uSXRlbVNob3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxzU3BGSXRlbVNob3BbaWRdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWRPbGQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkTmV3Lm5vZGUueCA9IDI3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWROZXcubm9kZS55ID0gNTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8vIHRpbWUgSGFwcHlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBHbG9iYWwuZGF0YVRpbWVIYXBweVt0aGlzLmluZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMubkl0ZW1TaG9wLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5sc1NwRkl0ZW1TaG9wW2lkXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkT2xkLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5ub2RlLnggPSAyNTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkTmV3Lm5vZGUueSA9IDY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gR2xvYmFsLnRpbWVJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMublN0YXRlQnV5LnggPSAtMTE1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkueSA9IC0yODtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlUHJpY2UodGhpcy5pbmRleCxHbG9iYWwudG90YWxHb2xkKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcmljZShpbmRleCwgdG90YWxHb2xkKSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgNCkge1xyXG4gICAgICAgICAgICB0aGlzLmxiUHJpY2Uuc3RyaW5nID0gdGhpcy5fZGF0YS5wcmljZSArICcgJztcclxuICAgICAgICAgICAgaWYgKHRvdGFsR29sZCA+PSB0aGlzLl9kYXRhLnByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWROZXcuc3RyaW5nID0gdGhpcy5fZGF0YS5wcmljZSArICcgJztcclxuICAgICAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IHRoaXMuX2RhdGEucHJpY2UgKyAnICc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5CdG5CdXkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxiUHJpY2Uuc3RyaW5nID0gXCJNYXhcIjtcclxuICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWROZXcuc3RyaW5nID0gXCJNYXhcIjtcclxuICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWRPbGQuc3RyaW5nID0gXCJNYXhcIjtcclxuICAgICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVB1cmNoYXNlU3RhdGUoKTtcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgc2F2ZVB1cmNoYXNlU3RhdGUoKSB7XHJcbiAgICAgICAgbGV0IHB1cmNoYXNlRGF0YSA9IHtcclxuICAgICAgICAgICAgZGF0YUhvb2s6IEdsb2JhbC5kYXRhSG9vayxcclxuICAgICAgICAgICAgZGF0YUJhZ01vbmV5OiBHbG9iYWwuZGF0YUJhZ01vbmV5LFxyXG4gICAgICAgICAgICBkYXRhVGltZUhhcHB5OiBHbG9iYWwuZGF0YVRpbWVIYXBweSxcclxuICAgICAgICAgICAgYWN0aXZlSW5kZXhIb29rOiBHbG9iYWwuaG9va0luZGV4LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtU2hvcERhdGEnLCBKU09OLnN0cmluZ2lmeShwdXJjaGFzZURhdGEpKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQdXJjaGFzZVN0YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuaW5kZXg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ1eSgpIHtcclxuICAgICAgICBpZiAoIHRoaXMuaW5kZXggPCA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMublN0YXRlQnV5LmNoaWxkcmVuW3RoaXMuaW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIEdsb2JhbC50b3RhbEdvbGQgLT0gdGhpcy5fZGF0YS5wcmljZTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5pdGVtSWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmhvb2tJbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJob29rSW5kZXhcIiwgdGhpcy5pbmRleClcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmNoZWNrQmFnTW9uZXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5iYWdJbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IEdsb2JhbC5kYXRhQmFnTW9uZXlbdGhpcy5pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFnSW5kZXhcIix0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGVja0JhZ01vbmV5XCIsIEpTT04uc3RyaW5naWZ5KEdsb2JhbC5jaGVja0JhZ01vbmV5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrXHJcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLnRpbWVJbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IEdsb2JhbC5kYXRhVGltZUhhcHB5W3RoaXMuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRpbWVJbmRleFwiLCB0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSW5kZXggXCIsIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVB1cmNoYXNlU3RhdGUoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgsR2xvYmFsLnRvdGFsR29sZCk7XHJcbiAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS51cGRhdGVUb3RhbEdvbGQoKTtcclxuICAgICAgICAgICAgU2h1U2hpQ2FyYlNob3BWaWV3Lmluc3RhbmNlLnVwZGF0ZUdvbGQoKTsgXHJcbiAgICAgICAgICAgIFNodVNoaUNhcmJTaG9wVmlldy5pbnN0YW5jZS51cGRhdGVJdGVtc1N0YXRlKEdsb2JhbC50b3RhbEdvbGQpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19