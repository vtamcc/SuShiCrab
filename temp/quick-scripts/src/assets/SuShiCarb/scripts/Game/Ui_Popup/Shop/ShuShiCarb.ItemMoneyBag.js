"use strict";
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