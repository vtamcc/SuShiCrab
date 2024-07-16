"use strict";
cc._RF.push(module, 'dc267ASAKxLjZBm3npC1v+1', 'ShuShiCarb.ItemHook');
// SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemHook.ts

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
var ShuShiCarbItemHook = /** @class */ (function (_super) {
    __extends(ShuShiCarbItemHook, _super);
    function ShuShiCarbItemHook() {
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
        return _this;
        // update (dt) {}
    }
    // data;
    ShuShiCarbItemHook.prototype.setData = function (data) {
        this._data = data;
        this.nStateBuy.active = data.isBuy;
        console.log("data ", data);
    };
    // LIFE-CYCLE CALLBACKS:
    ShuShiCarbItemHook.prototype.onLoad = function () {
        //this.setData();
        //this.checkClick(this.index);
        console.log(ShuShiCarb_Global_1.default.dataHook[this.index].price);
        this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndex")) || 0;
        // Global.dataHook[this.index] = JSON.parse(cc.sys.localStorage.getItem("price")) || 150;
        // this.updatePrice(this.index);
        this.loadPurchaseState();
        this.checkClick();
        this.updatePrice(this.index);
    };
    ShuShiCarbItemHook.prototype.loadPurchaseState = function () {
        var purchaseData = JSON.parse(cc.sys.localStorage.getItem("purchaseData")) || [];
        for (var i = 0; i < ShuShiCarb_Global_1.default.dataHook.length; i++) {
            if (purchaseData[i]) {
                ShuShiCarb_Global_1.default.dataHook[i].isBuy = purchaseData[i].isBuy;
                ShuShiCarb_Global_1.default.dataHook[i].speed = purchaseData[i].speed;
                this.nStateBuy.children[i].active = purchaseData[i].isBuy;
            }
        }
    };
    ShuShiCarbItemHook.prototype.savePurchaseState = function () {
        var purchaseData = ShuShiCarb_Global_1.default.dataHook.map(function (item) { return ({
            isBuy: item.isBuy,
            speed: item.speed
        }); });
        cc.sys.localStorage.setItem('purchaseData', JSON.stringify(purchaseData));
        cc.sys.localStorage.setItem('activeIndex', JSON.stringify(ShuShiCarb_Global_1.default.activeIndex));
        cc.sys.localStorage.setItem('itemIndex', this.index.toString());
        cc.sys.localStorage.setItem('speedHook', JSON.stringify(ShuShiCarb_Global_1.default.speedHook));
        cc.sys.localStorage.setItem('lengthHook', JSON.stringify(ShuShiCarb_Global_1.default.lengthHook));
    };
    ShuShiCarbItemHook.prototype.checkClick = function () {
        if (this.index < ShuShiCarb_Global_1.default.dataHook.length) {
            if (ShuShiCarb_Global_1.default.totalGold >= ShuShiCarb_Global_1.default.dataHook[this.index].price) {
                this.nCheckmask.active = false;
                this.isCheck = true;
            }
            else {
                this.nCheckmask.active = true;
                this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
            }
        }
    };
    ShuShiCarbItemHook.prototype.onClickBuy = function () {
        if (this.isCheck && this.index < ShuShiCarb_Global_1.default.dataHook.length) {
            ShuShiCarb_Global_1.default.dataHook[this.index].isBuy = true;
            ShuShiCarb_Global_1.default.totalGold -= ShuShiCarb_Global_1.default.dataHook[this.index].price;
            ShuShiCarb_Global_1.default.speedHook += ShuShiCarb_Global_1.default.dataHook[this.index].speed;
            ShuShiCarb_Global_1.default.lengthHook += ShuShiCarb_Global_1.default.dataHook[this.index].widthHook;
            this.nStateBuy.children[this.index].active = ShuShiCarb_Global_1.default.dataHook[this.index].isBuy;
            ShuShiCarb_Global_1.default.activeIndex = this.index;
            this.savePurchaseState();
            // cc.sys.localStorage.setItem('itemIndex',this.index.toString());
            // cc.sys.localStorage.setItem('price', Global.dataHook[this.index].price.toString);
            this.index++;
            this.savePurchaseState();
            console.log(this.index);
            this.checkClick();
            ShuShiCarb_ShopView_1.default.instace.updateGold();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            this.updatePrice(this.index);
            console.log("data Hoook ", ShuShiCarb_Global_1.default.dataHook);
        }
        else {
            this.nCheckmask.active = true;
            this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        }
    };
    ShuShiCarbItemHook.prototype.updatePrice = function (index) {
        if (index < ShuShiCarb_Global_1.default.dataHook.length) {
            this.lbPrice.string = ShuShiCarb_Global_1.default.dataHook[index].price + ' ';
            this.lbLeverSpeedNew.string = ShuShiCarb_Global_1.default.dataHook[index].speed + 1 + ' ';
            this.lbLeverSpeedOld.string = ShuShiCarb_Global_1.default.dataHook[index].speed + ' ' + ' -> ';
        }
        else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
            this.lbLeverSpeedOld.string = "Max";
        }
    };
    ShuShiCarbItemHook.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemHook.prototype, "lbPrice", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemHook.prototype, "nBtnBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemHook.prototype, "nStateBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemHook.prototype, "nCheckmask", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemHook.prototype, "lbLeverSpeedOld", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemHook.prototype, "lbLeverSpeedNew", void 0);
    ShuShiCarbItemHook = __decorate([
        ccclass
    ], ShuShiCarbItemHook);
    return ShuShiCarbItemHook;
}(cc.Component));
exports.default = ShuShiCarbItemHook;

cc._RF.pop();