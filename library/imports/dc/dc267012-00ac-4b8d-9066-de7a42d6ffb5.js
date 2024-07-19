"use strict";
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