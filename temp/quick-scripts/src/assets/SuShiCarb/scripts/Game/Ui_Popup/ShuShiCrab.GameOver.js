"use strict";
cc._RF.push(module, '44367/LVl9AqbqS+KLuBWW4', 'ShuShiCrab.GameOver');
// SuShiCarb/scripts/Game/Ui_Popup/ShuShiCrab.GameOver.ts

"use strict";
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
var ShuShiCarb_GameManager_1 = require("../../ShuShiCarb.GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGameOver = /** @class */ (function (_super) {
    __extends(ShuShiCarbGameOver, _super);
    function ShuShiCarbGameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.starWin = [];
        _this.starLose = [];
        _this.textWin = null;
        _this.textLose = null;
        return _this;
    }
    ShuShiCarbGameOver.prototype.gameWin = function () {
        this.starWin.forEach(function (element) {
            element.active = true;
        });
        this.starLose.forEach(function (element) {
            element.active = false;
        });
        this.textWin.active = true;
        this.textLose.active = false;
        // this.stopGamePlay();
    };
    ShuShiCarbGameOver.prototype.gameLose = function () {
        this.starWin.forEach(function (element) {
            element.active = false;
        });
        this.starLose.forEach(function (element) {
            element.active = true;
        });
        this.textWin.active = false;
        this.textLose.active = true;
        // this.stopGamePlay();
    };
    ShuShiCarbGameOver.prototype.open = function () {
        cc.tween(this.node)
            .to(0.2, { scale: 1 })
            .start();
    };
    ShuShiCarbGameOver.prototype.onHome = function () {
        ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
        // let nodeGamePlay = cc.Canvas.instance.node.getChildByName("GamePlay")
        // nodeGamePlay.destroy();
        this.stopGamePlay();
    };
    ShuShiCarbGameOver.prototype.stopGamePlay = function () {
        var nodeGamePlay = cc.Canvas.instance.node.getChildByName("Main");
        nodeGamePlay.destroy();
    };
    ShuShiCarbGameOver.prototype.onLoad = function () {
        this.open();
    };
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameOver.prototype, "starWin", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameOver.prototype, "starLose", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameOver.prototype, "textWin", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameOver.prototype, "textLose", void 0);
    ShuShiCarbGameOver = __decorate([
        ccclass
    ], ShuShiCarbGameOver);
    return ShuShiCarbGameOver;
}(cc.Component));
exports.default = ShuShiCarbGameOver;

cc._RF.pop();