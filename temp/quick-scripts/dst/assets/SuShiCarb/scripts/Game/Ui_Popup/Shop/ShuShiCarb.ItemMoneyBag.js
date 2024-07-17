
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemMoneyBag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75348lwHFBBC6JT2XEAoYwZ', 'ShuShiCarb.ItemMoneyBag');
// SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemMoneyBag.ts

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
var ShuShiCarbItemMoneyBag = /** @class */ (function (_super) {
    __extends(ShuShiCarbItemMoneyBag, _super);
    function ShuShiCarbItemMoneyBag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbPrice = null;
        _this.nBtnBuy = null;
        _this.nStateBuy = null;
        _this.nCheckmask = null;
        _this.lbLeverSpeedOld = null;
        _this.lbLeverSpeedNew = null;
        _this.index = 0;
        _this.isCheck = false;
        _this._data = null;
        _this.isClick = false;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbItemMoneyBag.prototype.onLoad = function () {
        this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndexMoneyBag")) || 0;
        this.loadPurchaseState();
        this.checkClick();
        this.updatePrice(this.index);
    };
    ShuShiCarbItemMoneyBag.prototype.loadPurchaseState = function () {
        var purchaseData = JSON.parse(cc.sys.localStorage.getItem("itemMoneyBag")) || [];
        for (var i = 0; i < ShuShiCarb_Global_1.default.dataBagMoney.length; i++) {
            if (purchaseData[i]) {
                ShuShiCarb_Global_1.default.dataBagMoney[i].isBuy = purchaseData[i].isBuy;
                ShuShiCarb_Global_1.default.dataBagMoney[i].gold = purchaseData[i].gold;
                this.nStateBuy.children[i].active = purchaseData[i].isBuy;
            }
        }
    };
    ShuShiCarbItemMoneyBag.prototype.savePurchaseState = function () {
        var purchaseData = ShuShiCarb_Global_1.default.dataBagMoney.map(function (item) { return ({
            isBuy: item.isBuy,
            gold: item.gold
        }); });
        cc.sys.localStorage.setItem('itemMoneyBag', JSON.stringify(purchaseData));
        cc.sys.localStorage.setItem('activeIndexMoneyBag', JSON.stringify(ShuShiCarb_Global_1.default.activeIndex));
        cc.sys.localStorage.setItem('itemIndexMoneyBag', this.index.toString());
        cc.sys.localStorage.setItem('moneyBag', JSON.stringify(ShuShiCarb_Global_1.default.moneyBag));
        cc.sys.localStorage.setItem('checkBagMoney', JSON.stringify(ShuShiCarb_Global_1.default.checkBagMoney));
    };
    ShuShiCarbItemMoneyBag.prototype.checkClick = function () {
        if (this.index < ShuShiCarb_Global_1.default.dataBagMoney.length) {
            if (ShuShiCarb_Global_1.default.totalGold >= ShuShiCarb_Global_1.default.dataBagMoney[this.index].price) {
                this.nCheckmask.active = false;
                this.isCheck = true;
            }
            else {
                this.nCheckmask.active = true;
                this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
            }
        }
    };
    ShuShiCarbItemMoneyBag.prototype.onBuy = function () {
        if (this.isCheck && this.index < ShuShiCarb_Global_1.default.dataBagMoney.length) {
            ShuShiCarb_Global_1.default.checkBagMoney = true;
            ShuShiCarb_Global_1.default.dataBagMoney[this.index].isBuy = true;
            ShuShiCarb_Global_1.default.totalGold -= ShuShiCarb_Global_1.default.dataBagMoney[this.index].price;
            ShuShiCarb_Global_1.default.moneyBag += ShuShiCarb_Global_1.default.dataBagMoney[this.index].gold;
            this.nStateBuy.children[this.index].active = ShuShiCarb_Global_1.default.dataBagMoney[this.index].isBuy;
            ShuShiCarb_Global_1.default.activeIndexMoneyBag = this.index;
            this.savePurchaseState();
            this.index++;
            //this.savePurchaseState();
            this.checkClick();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            ShuShiCarb_ShopView_1.default.instace.updateGold();
            this.updatePrice(this.index);
        }
        console.log("onbuy");
    };
    ShuShiCarbItemMoneyBag.prototype.updatePrice = function (index) {
        if (index < ShuShiCarb_Global_1.default.dataBagMoney.length) {
            this.lbPrice.string = ShuShiCarb_Global_1.default.dataBagMoney[index].price + ' ';
            this.lbLeverSpeedNew.string = '+' + ShuShiCarb_Global_1.default.dataBagMoney[index].gold + '$';
        }
        else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
        }
    };
    ShuShiCarbItemMoneyBag.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemMoneyBag.prototype, "lbPrice", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemMoneyBag.prototype, "nBtnBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemMoneyBag.prototype, "nStateBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemMoneyBag.prototype, "nCheckmask", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemMoneyBag.prototype, "lbLeverSpeedOld", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemMoneyBag.prototype, "lbLeverSpeedNew", void 0);
    ShuShiCarbItemMoneyBag = __decorate([
        ccclass
    ], ShuShiCarbItemMoneyBag);
    return ShuShiCarbItemMoneyBag;
}(cc.Component));
exports.default = ShuShiCarbItemMoneyBag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5JdGVtTW9uZXlCYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMEVBQW9FO0FBQ3BFLGdFQUFnRDtBQUNoRCw2REFBdUQ7QUFFakQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUFpR0M7UUE3RkcsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBSyxHQUFHLElBQUksQ0FBQTtRQUNaLGFBQU8sR0FBRyxLQUFLLENBQUM7O1FBNEVoQixpQkFBaUI7SUFDckIsQ0FBQztJQTVFRyx1Q0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0RBQWlCLEdBQWpCO1FBQ0ksSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLDJCQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakIsMkJBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JELDJCQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUM3RDtTQUNKO0lBQ0wsQ0FBQztJQUVELGtEQUFpQixHQUFqQjtRQUNJLElBQU0sWUFBWSxHQUFHLDJCQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUM7WUFDbEQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNsQixDQUFDLEVBSG1ELENBR25ELENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN2RixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQywyQkFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNJLElBQUcsSUFBSSxDQUFDLEtBQUssR0FBRywyQkFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDeEMsSUFBRywyQkFBTSxDQUFDLFNBQVMsSUFBSSwyQkFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFLO2dCQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDNUQ7U0FDTDtJQUNMLENBQUM7SUFFRCxzQ0FBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsMkJBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ3pELDJCQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUM1QiwyQkFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUM3QywyQkFBTSxDQUFDLFNBQVMsSUFBSSwyQkFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzFELDJCQUFNLENBQUMsUUFBUSxJQUFJLDJCQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRywyQkFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25GLDJCQUFNLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUV4QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYiwyQkFBMkI7WUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLGdDQUFxQixDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNqRCw2QkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUFFRCw0Q0FBVyxHQUFYLFVBQVksS0FBSztRQUNiLElBQUcsS0FBSyxHQUFHLDJCQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRywyQkFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRywyQkFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQzdFO2FBQUs7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUNELHNDQUFLLEdBQUw7SUFFQSxDQUFDO0lBMUZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OERBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttRUFDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21FQUNjO0lBZmhCLHNCQUFzQjtRQUQxQyxPQUFPO09BQ2Esc0JBQXNCLENBaUcxQztJQUFELDZCQUFDO0NBakdELEFBaUdDLENBakdtRCxFQUFFLENBQUMsU0FBUyxHQWlHL0Q7a0JBakdvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdhbWVcIjtcbmltcG9ydCBTaHVTaGlDYXJiR2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL1NodVNoaUNhcmIuR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uLy4uL1NodVNoaUNhcmIuR2xvYmFsXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYlNob3BWaWV3IGZyb20gXCIuL1NodVNoaUNhcmIuU2hvcFZpZXdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSXRlbU1vbmV5QmFnIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlByaWNlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJ0bkJ1eTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0YXRlQnV5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQ2hlY2ttYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkxldmVyU3BlZWRPbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJMZXZlclNwZWVkTmV3OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBpbmRleCA9IDA7XG4gICAgaXNDaGVjayA9IGZhbHNlO1xuICAgIF9kYXRhID0gbnVsbFxuICAgIGlzQ2xpY2sgPSBmYWxzZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIml0ZW1JbmRleE1vbmV5QmFnXCIpKSB8fCAwO1xuICAgICAgICB0aGlzLmxvYWRQdXJjaGFzZVN0YXRlKClcbiAgICAgICAgdGhpcy5jaGVja0NsaWNrKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJpY2UodGhpcy5pbmRleCk7XG4gICAgfVxuXG4gICAgbG9hZFB1cmNoYXNlU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IHB1cmNoYXNlRGF0YSA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXRlbU1vbmV5QmFnXCIpKSB8fCBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHbG9iYWwuZGF0YUJhZ01vbmV5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHVyY2hhc2VEYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhdGFCYWdNb25leVtpXS5pc0J1eSA9IHB1cmNoYXNlRGF0YVtpXS5pc0J1eTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGF0YUJhZ01vbmV5W2ldLmdvbGQgPSBwdXJjaGFzZURhdGFbaV0uZ29sZDtcbiAgICAgICAgICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5jaGlsZHJlbltpXS5hY3RpdmUgPSBwdXJjaGFzZURhdGFbaV0uaXNCdXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlUHVyY2hhc2VTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgcHVyY2hhc2VEYXRhID0gR2xvYmFsLmRhdGFCYWdNb25leS5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgICAgaXNCdXk6IGl0ZW0uaXNCdXksXG4gICAgICAgICAgICBnb2xkOiBpdGVtLmdvbGRcbiAgICAgICAgfSkpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1Nb25leUJhZycsIEpTT04uc3RyaW5naWZ5KHB1cmNoYXNlRGF0YSkpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZUluZGV4TW9uZXlCYWcnLCBKU09OLnN0cmluZ2lmeShHbG9iYWwuYWN0aXZlSW5kZXgpKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtSW5kZXhNb25leUJhZycsIHRoaXMuaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9uZXlCYWcnLCBKU09OLnN0cmluZ2lmeShHbG9iYWwubW9uZXlCYWcpKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaGVja0JhZ01vbmV5JywgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmNoZWNrQmFnTW9uZXkpKTtcbiAgICB9XG5cbiAgICBjaGVja0NsaWNrKCkge1xuICAgICAgICBpZih0aGlzLmluZGV4IDwgR2xvYmFsLmRhdGFCYWdNb25leS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKEdsb2JhbC50b3RhbEdvbGQgPj0gR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XS5wcmljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICBcblxuICAgIG9uQnV5KCkge1xuICAgICAgICBpZiAodGhpcy5pc0NoZWNrICYmIHRoaXMuaW5kZXggPCBHbG9iYWwuZGF0YUJhZ01vbmV5Lmxlbmd0aCkge1xuICAgICAgICAgICAgR2xvYmFsLmNoZWNrQmFnTW9uZXkgPSB0cnVlO1xuICAgICAgICAgICAgR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XS5pc0J1eSA9IHRydWU7XG4gICAgICAgICAgICBHbG9iYWwudG90YWxHb2xkIC09IEdsb2JhbC5kYXRhQmFnTW9uZXlbdGhpcy5pbmRleF0ucHJpY2U7XG4gICAgICAgICAgICBHbG9iYWwubW9uZXlCYWcgKz0gR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XS5nb2xkO1xuICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5bdGhpcy5pbmRleF0uYWN0aXZlID0gR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XS5pc0J1eTtcbiAgICAgICAgICAgIEdsb2JhbC5hY3RpdmVJbmRleE1vbmV5QmFnID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zYXZlUHVyY2hhc2VTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgLy90aGlzLnNhdmVQdXJjaGFzZVN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQ2xpY2soKTtcbiAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS51cGRhdGVUb3RhbEdvbGQoKTtcbiAgICAgICAgICAgIFNodVNoaUNhcmJTaG9wVmlldy5pbnN0YWNlLnVwZGF0ZUdvbGQoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UodGhpcy5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJvbmJ1eVwiKVxuICAgIH1cblxuICAgIHVwZGF0ZVByaWNlKGluZGV4KSB7XG4gICAgICAgIGlmKGluZGV4IDwgR2xvYmFsLmRhdGFCYWdNb25leS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSBHbG9iYWwuZGF0YUJhZ01vbmV5W2luZGV4XS5wcmljZSArICcgJztcbiAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkTmV3LnN0cmluZyA9ICcrJyArIEdsb2JhbC5kYXRhQmFnTW9uZXlbaW5kZXhdLmdvbGQgKyAnJCc7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSBcIk1heFwiO1xuICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWROZXcuc3RyaW5nID0gXCJNYXhcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19