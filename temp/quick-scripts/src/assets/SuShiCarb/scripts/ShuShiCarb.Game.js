"use strict";
cc._RF.push(module, '57e45IlTRNBoJ26llVySEfH', 'ShuShiCarb.Game');
// SuShiCarb/scripts/ShuShiCarb.Game.ts

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
var ShuShiCarb_Food_1 = require("./Game/ShuShiCarb.Food");
var ShuShiCarb_Player_1 = require("./Game/ShuShiCarb.Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGame = /** @class */ (function (_super) {
    __extends(ShuShiCarbGame, _super);
    function ShuShiCarbGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nFood1 = null;
        _this.nFood2 = null;
        _this.nFood3 = null;
        _this.listConveyor = [];
        _this.prfOrder = null;
        _this.lbCountDown = null;
        _this.listSpfFood = [];
        _this.conveyor_1 = null;
        _this.prfFood = null;
        // LIFE-CYCLE CALLBACKS:
        _this.data = [0, 1, 2, 3, 4, 5];
        _this.playOrders = [];
        _this.indexData = -1;
        _this.numberCountdown = 7;
        _this.countdownInterval = null;
        _this.isMove = false;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbGame_1 = ShuShiCarbGame;
    ShuShiCarbGame.prototype.onLoad = function () {
        ShuShiCarbGame_1.instance = this;
        // this.renderFoodOder();
        this.randomOrderFood();
        console.log(this.playOrders);
        this.renderOrderFood();
        this.renderFood();
        //this.conveyor();
    };
    // randomIdFood(arr,count) {
    //     let idFood = [];
    //     for(let i = 0; i < count; i++) {
    //         let randomIndex = Math.floor(Math.random() * arr.length);
    //         idFood.push(randomIndex);
    //         arr.splice(randomIndex,1);
    //     }
    //     return arr;
    // }
    ShuShiCarbGame.prototype.randomOrderFood = function () {
        for (var i = 0; i < 3; i++) {
            var randomIndex = Math.floor(Math.random() * this.data.length);
            var foodId = this.data[randomIndex];
            this.playOrders.push(foodId);
        }
    };
    ShuShiCarbGame.prototype.renderOrderFood = function () {
        this.indexData++;
        for (var i = 0; i < this.playOrders.length; i++) {
            var prfPlayOrder = cc.instantiate(this.prfOrder).getComponent(ShuShiCarb_Player_1.default);
            prfPlayOrder.setData(this.playOrders[0], this.playOrders[1], this.playOrders[2], this.indexData);
            this.node.addChild(prfPlayOrder.node);
        }
    };
    ShuShiCarbGame.prototype.renderFood = function () {
        var itemFood = cc.instantiate(this.prfFood).getComponent(ShuShiCarb_Food_1.default);
        itemFood.setData(1);
        this.conveyor_1.addChild(itemFood.node);
    };
    // startCountDown() {
    //     this.updateCountDown();
    //     this.countdownInterval = setInterval(() => {
    //         this.numberCountdown--;
    //         this.updateCountDown();
    //         if (this.numberCountdown <= 0) {
    //             this.stopCountDown();
    //             this.onCountDownEndGame();
    //         }
    //     }, 1000)
    // }
    // stopCountDown() {
    //     if (this.countdownInterval) {
    //         clearInterval(this.countdownInterval);
    //         this.countdownInterval = null;
    //     }
    // }
    // onCountDownEndGame() {
    //     console.log("You Lost")
    // }
    // updateCountDown() {
    //     this.lbCountDown.string = this.numberCountdown + " ";
    // }
    // renderFoodOder() {
    //     console.log(this.idOderFood);
    //     for(let i = 0; i < 3; i++) {
    //         let pOrder = cc.instantiate(this.prfOrder).getComponent(ShuShiCarbPlayer)
    //         pOrder.setData(this.idOderFood[i],1);
    //         this.node.addChild(pOrder.node)
    //     }
    // }
    // conveyor() {
    //    for(let i = 0; i < this.listConveyor.length; i++) {
    //         let dt = this.listConveyor[i];
    //         let item = dt.getComponent(ShuShiCarbConveyor).listNodeConveyor_1;
    //         for(let j = 0; j < item.length; j++) {
    //             let food = item[j];
    //             food.getComponent(cc.Sprite).spriteFrame = this.listSpfFood[this.playOrders[j]];
    //         }
    //    }
    // }
    ShuShiCarbGame.prototype.start = function () {
    };
    var ShuShiCarbGame_1;
    ShuShiCarbGame.instance = null;
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nFood1", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nFood2", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nFood3", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "listConveyor", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGame.prototype, "prfOrder", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGame.prototype, "lbCountDown", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ShuShiCarbGame.prototype, "listSpfFood", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "conveyor_1", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGame.prototype, "prfFood", void 0);
    ShuShiCarbGame = ShuShiCarbGame_1 = __decorate([
        ccclass
    ], ShuShiCarbGame);
    return ShuShiCarbGame;
}(cc.Component));
exports.default = ShuShiCarbGame;

cc._RF.pop();