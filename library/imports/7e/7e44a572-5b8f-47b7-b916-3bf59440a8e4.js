"use strict";
cc._RF.push(module, '7e44aVyW49Ht7kWO/WUQKjk', 'ShuShiCarb.ShopView');
// SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.ShopView.ts

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
var ShuShiCarbShopView = /** @class */ (function (_super) {
    __extends(ShuShiCarbShopView, _super);
    function ShuShiCarbShopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbGold = null;
        _this.nBtnGreen = null;
        _this.nBtnGray = null;
        _this.isCheck = false;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbShopView.prototype.onLoad = function () {
        this.updateGold();
        this.checkGold();
    };
    ShuShiCarbShopView.prototype.start = function () {
    };
    ShuShiCarbShopView.prototype.checkGold = function () {
        if (ShuShiCarb_Global_1.default.totalGold >= ShuShiCarb_Global_1.default.priceSpeedHook) {
            this.changeBtn(true);
            this.isCheck = true;
        }
    };
    ShuShiCarbShopView.prototype.clickBuyHookSpeed = function () {
        this.updateGold();
        console.log(ShuShiCarb_Global_1.default.totalGold - ShuShiCarb_Global_1.default.priceSpeedHook);
    };
    ShuShiCarbShopView.prototype.updateGold = function () {
        this.lbGold.string = ShuShiCarb_Global_1.default.totalGold + ' ';
    };
    ShuShiCarbShopView.prototype.changeBtn = function (isTrue) {
        this.nBtnGreen.active = isTrue;
        this.nBtnGray.active = !isTrue;
    };
    ShuShiCarbShopView.prototype.onClickClose = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Label)
    ], ShuShiCarbShopView.prototype, "lbGold", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbShopView.prototype, "nBtnGreen", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbShopView.prototype, "nBtnGray", void 0);
    ShuShiCarbShopView = __decorate([
        ccclass
    ], ShuShiCarbShopView);
    return ShuShiCarbShopView;
}(cc.Component));
exports.default = ShuShiCarbShopView;

cc._RF.pop();