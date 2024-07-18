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
        _this.nCheckmask = null;
        _this.lbLeverSpeedOld = null;
        _this.lbLeverSpeedNew = null;
        _this.lsSpFItemShop = [];
        _this.index = 0;
        _this.isCheck = false;
        _this._data = null;
        _this.itemId = 0;
        return _this;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {
        //     this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndex")) || 0;
        //     this.loadPurchaseState();
        //     this.checkClick();
        //     this.updatePrice(this.index);
        // }
        // loadPurchaseState() {
        //     const purchaseData = JSON.parse(cc.sys.localStorage.getItem("purchaseData")) || [];
        //     for (let i = 0; i < Global.dataHook.length; i++) {
        //         if (purchaseData[i]) {
        //             Global.dataHook[i].isBuy = purchaseData[i].isBuy;
        //             Global.dataHook[i].speed = purchaseData[i].speed;
        //             this.nStateBuy.children[i].active = purchaseData[i].isBuy;
        //         }
        //     }
        // }
        // savePurchaseState() {
        //     const purchaseData = Global.dataHook.map(item => ({
        //         isBuy: item.isBuy,
        //         speed: item.speed
        //     }));
        //     cc.sys.localStorage.setItem('purchaseData', JSON.stringify(purchaseData));
        //     cc.sys.localStorage.setItem('activeIndex', JSON.stringify(Global.activeIndex));
        //     cc.sys.localStorage.setItem('itemIndex', this.index.toString());
        //     cc.sys.localStorage.setItem('speedHook', JSON.stringify(Global.speedHook));
        //     cc.sys.localStorage.setItem('lengthHook', JSON.stringify(Global.lengthHook));
        // }
        // checkClick() {
        //     // if(this.index < Global.dataHook.length) {
        //     //     if(Global.totalGold >= Global.dataHook[this.index].price) {
        //     //         this.nCheckmask.active = false;
        //     //         this.isCheck = true;
        //     //     }else {
        //     //          this.nCheckmask.active = true;
        //     //          this.isCheck = false;
        //     //          this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        //     //      }
        //     // }
        //     if(this.index < Global.dataHook.length && Global.totalGold >= Global.dataHook[this.index].price) { 
        //             this.nCheckmask.active = false;
        //             this.isCheck = true; 
        //     }
        //     else {
        //         this.nCheckmask.active = true;
        //         this.isCheck = false;
        //         this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        //     }
        //     console.log(this.index);
        // }
        // onClickBuy() {
        //     if(this.isCheck && this.index < Global.dataHook.length) {
        //         Global.dataHook[this.index].isBuy = true;
        //         Global.totalGold -= Global.dataHook[this.index].price;
        //         Global.speedHook += Global.dataHook[this.index].speed;
        //         Global.lengthHook += Global.dataHook[this.index].widthHook;
        //         this.nStateBuy.children[this.index].active = Global.dataHook[this.index].isBuy;
        //         Global.activeIndex = this.index;
        //         this.index++;
        //         this.checkClick();
        //         this.savePurchaseState();
        //         ShuShiCarbGameManager.instance.updateTotalGold();
        //         ShuShiCarbShopView.instace.updateGold();
        //         this.updatePrice(this.index);
        //         console.log("data Hoook ",Global.dataHook);
        //     } else {
        //         this.nCheckmask.active = true;
        //         this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        //     }
        // }
        // updatePrice(index) {
        //     if(index < Global.dataHook.length) {
        //         this.lbPrice.string = Global.dataHook[index].price + ' '; 
        //         this.lbLeverSpeedNew.string = Global.dataHook[index].speed + 1 + ' ';
        //         this.lbLeverSpeedOld.string = Global.dataHook[index].speed + ' ' +  ' -> ';
        //     }else {
        //         this.lbPrice.string = "Max";
        //         this.lbLeverSpeedNew.string = "Max";
        //         this.lbLeverSpeedOld.string = "Max";
        //     }
        // }
        // start () {
        // }
        // update (dt) {}
    }
    ShuShiCarbItemShop.prototype.onLoad = function () {
        this.loadPurchaseState();
        this.checkClick();
    };
    ShuShiCarbItemShop.prototype.setData = function (id) {
        this.itemId = id;
        switch (id) {
            case 0: // hook
                this._data = ShuShiCarb_Global_1.default.dataHook;
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                break;
            case 1: // Bag money
                this._data = ShuShiCarb_Global_1.default.dataBagMoney;
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                this.lbLeverSpeedOld.node.active = false;
                break;
            case 2: // time Happy
                this._data = ShuShiCarb_Global_1.default.dataTimeHappy;
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                this.lbLeverSpeedOld.node.active = false;
                break;
            default:
                break;
        }
        this.updatePrice(this.index);
    };
    ShuShiCarbItemShop.prototype.updatePrice = function (index) {
        if (index < this._data.length) {
            this.lbPrice.string = this._data[index].price + ' ';
            this.lbLeverSpeedOld.string = "0";
            this.lbLeverSpeedNew.string = this._data[index].gold ? this._data[index].gold + ' ' : this._data[index].time + ' ';
        }
        else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
            this.lbLeverSpeedOld.string = "Max";
        }
    };
    ShuShiCarbItemShop.prototype.loadPurchaseState = function () {
        var purchaseData = JSON.parse(cc.sys.localStorage.getItem("itemShopData")) || {
            dataHook: ShuShiCarb_Global_1.default.dataHook,
            dataBagMoney: ShuShiCarb_Global_1.default.dataBagMoney,
            dataTimeHappy: ShuShiCarb_Global_1.default.dataTimeHappy
        };
        ShuShiCarb_Global_1.default.dataHook = purchaseData.dataHook;
        ShuShiCarb_Global_1.default.dataBagMoney = purchaseData.dataBagMoney;
        ShuShiCarb_Global_1.default.dataTimeHappy = purchaseData.dataTimeHappy;
        // Kiểm tra trạng thái mua của item hiện tại
        this.index = 0;
        while (this.index < this._data.length && this._data[this.index].isBuy) {
            this.nStateBuy.children[this.index].active = true;
            this.index++;
        }
        this.checkClick();
    };
    ShuShiCarbItemShop.prototype.savePurchaseState = function () {
        var purchaseData = {
            dataHook: ShuShiCarb_Global_1.default.dataHook,
            dataBagMoney: ShuShiCarb_Global_1.default.dataBagMoney,
            dataTimeHappy: ShuShiCarb_Global_1.default.dataTimeHappy,
        };
        cc.sys.localStorage.setItem('itemShopData', JSON.stringify(purchaseData));
    };
    ShuShiCarbItemShop.prototype.checkClick = function () {
        if (this.index < this._data.length) {
            if (ShuShiCarb_Global_1.default.totalGold >= this._data[this.index].price) {
                this.nCheckmask.active = false;
                this.isCheck = true;
                this.nBtnBuy.getComponent(cc.Button).interactable = true; // Nút "Mua" sáng lên
            }
            else {
                this.nCheckmask.active = true;
                this.isCheck = false;
                this.nBtnBuy.getComponent(cc.Button).interactable = false; // Nút "Mua" bị tắt
            }
        }
    };
    ShuShiCarbItemShop.prototype.checkBuy = function () {
        return ShuShiCarb_Global_1.default.totalGold >= this._data[this.index].price;
    };
    ShuShiCarbItemShop.prototype.onBuy = function () {
        if (this.checkBuy() && this.index < this._data.length) {
            this._data[this.index].isBuy = true;
            ShuShiCarb_Global_1.default.totalGold -= this._data[this.index].price;
            this.nStateBuy.children[this.index].active = this._data[this.index].isBuy;
            switch (this.itemId) {
                case 0:
                    ShuShiCarb_Global_1.default.activeIndex = this.index;
                    ShuShiCarb_Global_1.default.speedHook += this._data[this.index].speed;
                    break;
                case 1:
                    ShuShiCarb_Global_1.default.activeIndexMoneyBag = this.index;
                    ShuShiCarb_Global_1.default.moneyBag += this._data[this.index].gold;
                    break;
                case 2:
                    ShuShiCarb_Global_1.default.activeIndexTimeHappy = this.index;
                    ShuShiCarb_Global_1.default.timeHappy += this._data[this.index].time;
                    break;
            }
            this.savePurchaseState();
            this.index++;
            this.savePurchaseState();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            ShuShiCarb_ShopView_1.default.instance.updateGold();
            this.updatePrice(this.index);
            this.checkClick(); // Gọi lại checkClick để cập nhật trạng thái nút sau khi mua
        }
        console.log("onbuy");
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
        property(cc.Node)
    ], ShuShiCarbItemShop.prototype, "nCheckmask", void 0);
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