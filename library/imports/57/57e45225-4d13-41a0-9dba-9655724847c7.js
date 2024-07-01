"use strict";
cc._RF.push(module, '57e45IlTRNBoJ26llVySEfH', 'ShuShiCarb.Global');
// SuShiCarb/scripts/ShuShiCarb.Global.ts

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
var ShuShiCarb_Conveyor_1 = require("./ShuShiCarb.Conveyor");
var ShuShiCarb_Food_1 = require("./ShuShiCarb.Food");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGolal = /** @class */ (function (_super) {
    __extends(ShuShiCarbGolal, _super);
    function ShuShiCarbGolal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nFood1 = null;
        _this.nFood2 = null;
        _this.nFood3 = null;
        _this.listConveyor = [];
        _this.listSpfFood = [];
        // LIFE-CYCLE CALLBACKS:
        _this.data = [0, 1, 2, 3, 4, 5];
        return _this;
        // update (dt) {}
    }
    ShuShiCarbGolal_1 = ShuShiCarbGolal;
    ShuShiCarbGolal.prototype.onLoad = function () {
        ShuShiCarbGolal_1.instance = this;
        var randomElements = this.randomIdFood(this.data, 3);
        console.log(randomElements);
        this.conveyor();
    };
    ShuShiCarbGolal.prototype.randomIdFood = function (arr, count) {
        var idFood = [];
        for (var i = 0; i < count; i++) {
            var randomIndex = Math.floor(Math.random() * arr.length);
            idFood.push(randomIndex);
            arr.splice(randomIndex, 1);
        }
        return arr;
    };
    ShuShiCarbGolal.prototype.conveyor = function () {
        var randomFood = this.randomIdFood(this.data, 2);
        for (var i = 0; i < this.listConveyor.length; i++) {
            var dt = this.listConveyor[i].getComponent(ShuShiCarb_Conveyor_1.default);
            console.log("Node ", dt);
            var item = dt.itemFood[i].getComponent(ShuShiCarb_Food_1.default);
        }
    };
    ShuShiCarbGolal.prototype.start = function () {
    };
    var ShuShiCarbGolal_1;
    ShuShiCarbGolal.instance = null;
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGolal.prototype, "nFood1", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGolal.prototype, "nFood2", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGolal.prototype, "nFood3", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGolal.prototype, "listConveyor", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ShuShiCarbGolal.prototype, "listSpfFood", void 0);
    ShuShiCarbGolal = ShuShiCarbGolal_1 = __decorate([
        ccclass
    ], ShuShiCarbGolal);
    return ShuShiCarbGolal;
}(cc.Component));
exports.default = ShuShiCarbGolal;

cc._RF.pop();