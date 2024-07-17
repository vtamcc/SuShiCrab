
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/ShuShiCarb.Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var ShuShiCrab_GameOver_1 = require("./Game/Ui_Popup/ShuShiCrab.GameOver");
var ShuShiCarb_GameManager_1 = require("./ShuShiCarb.GameManager");
var ShuShiCarb_Global_1 = require("./ShuShiCarb.Global");
var ShuShiCarb_GoldFly_1 = require("./ShuShiCarb.GoldFly");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGame = /** @class */ (function (_super) {
    __extends(ShuShiCarbGame, _super);
    function ShuShiCarbGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfOrder = null;
        _this.nHome = null;
        _this.listSpfFood = [];
        _this.nPlayer = null;
        _this.conveyor_1 = null;
        _this.conveyor_2 = null;
        _this.conveyor_3 = null;
        _this.prfFood = null;
        _this.lsFoodTable = [];
        _this.lbGold = null;
        _this.prfGameOver = null;
        _this.prgTime = null;
        _this.lbCountDown = null;
        _this.nEffectGold = null;
        _this.nEffecBagMoneyFly = null;
        _this.nEndEffect = null;
        _this.nCheckFalse = null;
        // LIFE-CYCLE CALLBACKS:
        _this.data = [0, 1, 2, 3, 4, 5];
        _this.playOrders = [];
        _this.hookObjects = [];
        _this.indexData = 0;
        _this.countCorrect = 0;
        // numberCountdown = 7;
        _this.countdownInterval = null;
        _this.isMove = false;
        _this.player = null;
        _this.gold = 0;
        _this.duration = 60;
        _this.numberCountDown = 0;
        _this.isCountDown = false;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbGame_1 = ShuShiCarbGame;
    ShuShiCarbGame.prototype.onLoad = function () {
        ShuShiCarbGame_1.instance = this;
        var checkBagMoney = JSON.parse(cc.sys.localStorage.getItem("checkBagMoney"));
        ShuShiCarb_Global_1.default.moneyBag = JSON.parse(cc.sys.localStorage.getItem("moneyBag")) || ShuShiCarb_Global_1.default.moneyBag;
        console.log(ShuShiCarb_Global_1.default.moneyBag);
        if (checkBagMoney !== null) {
            ShuShiCarb_Global_1.default.checkBagMoney = checkBagMoney;
            console.log(ShuShiCarb_Global_1.default.checkBagMoney);
        }
        // this.renderFoodOder();
        this.randomOrderFood();
        console.log(this.playOrders);
        this.conveyor(this.conveyor_1);
        this.conveyor(this.conveyor_2);
        this.conveyor(this.conveyor_3);
        this.renderOrderFood();
        this.startCountDown();
        console.log(ShuShiCarb_Global_1.default.checkBagMoney);
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
        this.playOrders = [];
        for (var i = 0; i < 3; i++) {
            var randomIndex = Math.floor(Math.random() * this.data.length);
            var foodId = this.data[randomIndex];
            this.playOrders.push(foodId);
        }
    };
    ShuShiCarbGame.prototype.startCountDown = function () {
        this.isCountDown = true;
        this.numberCountDown = this.duration;
        this.schedule(this.updateCountDown, 1);
    };
    ShuShiCarbGame.prototype.updateCountDown = function () {
        if (this.numberCountDown > 0) {
            this.numberCountDown--;
            this.updatePrgressTime();
            this.lbCountDown.string = "00: " + this.numberCountDown + " ";
        }
        else {
            this.isCountDown = false;
            this.lbCountDown.string = "00:00";
            this.gameOver(this.prfGameOver);
        }
    };
    ShuShiCarbGame.prototype.gameOver = function (prfGameOver) {
        var gamOver = cc.instantiate(prfGameOver).getComponent(ShuShiCrab_GameOver_1.default);
        this.node.addChild(gamOver.node);
    };
    ShuShiCarbGame.prototype.updatePrgressTime = function () {
        if (this.prgTime) {
            this.prgTime.progress -= 1 / this.duration;
        }
    };
    ShuShiCarbGame.prototype.renderOrderFood = function () {
        // if (this.player) {
        //     this.player.node.destroy(); // Destroy previous player node
        // }
        this.player = cc.instantiate(this.prfOrder).getComponent(ShuShiCarb_Player_1.default);
        for (var i = 0; i < this.player.listFood.length; i++) {
            var food = this.player.listFood[i];
            food.getComponent(cc.Sprite).spriteFrame = this.listSpfFood[this.playOrders[i]];
        }
        this.indexData++;
        this.player.setData(this.indexData);
        this.nPlayer.addChild(this.player.node);
    };
    ShuShiCarbGame.prototype.checkCorrect = function () {
        var _this = this;
        if (this.hookObjects.length === 0) {
            return;
        }
        var hookFoodId = this.hookObjects[0].id;
        var foundMatch = false;
        if (hookFoodId === 999) {
            this.gold += ShuShiCarb_Global_1.default.moneyBag;
            this.updateGold(ShuShiCarb_Global_1.default.moneyBag);
            foundMatch = true;
            ShuShiCarb_GoldFly_1.default.instance.playAnim(this.nEffecBagMoneyFly, this.nEndEffect, this.nEffecBagMoneyFly);
        }
        else {
            var _loop_1 = function (i) {
                if (this_1.playOrders[i] === hookFoodId) {
                    if (!this_1.player.listFood[i].getChildByName("tick").active) {
                        this_1.player.listFood[i].getChildByName("tick").active = true;
                        //this.nGoldFly.active = true;
                        this_1.scheduleOnce(function () {
                            _this.lsFoodTable[i].getComponent(cc.Sprite).spriteFrame = _this.listSpfFood[hookFoodId];
                            _this.lsFoodTable[i].active = true;
                            // this.nGoldFly.active = false;
                        }, 0.2);
                        ShuShiCarb_GoldFly_1.default.instance.playAnim(this_1.nEffectGold, this_1.nEndEffect, this_1.nEffectGold);
                        this_1.gold += 5;
                        this_1.updateGold(5);
                        foundMatch = true;
                        this_1.countCorrect++;
                        return "break";
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.playOrders.length; i++) {
                var state_1 = _loop_1(i);
                if (state_1 === "break")
                    break;
            }
        }
        this.lbGold.string = this.gold + ' ';
        if (!foundMatch) {
        }
        if (this.countCorrect >= 3) {
            this.resetGame(true);
        }
    };
    ShuShiCarbGame.prototype.updateGold = function (gold) {
        ShuShiCarb_Global_1.default.totalGold += gold;
        console.log("Tong tien ", ShuShiCarb_Global_1.default.totalGold);
        cc.sys.localStorage.setItem('totalGold', JSON.stringify(ShuShiCarb_Global_1.default.totalGold));
    };
    ShuShiCarbGame.prototype.conveyor = function (node) {
        for (var i = 0; i < node.childrenCount; i++) {
            var item = node.children[i].getComponent(ShuShiCarb_Food_1.default);
            if (ShuShiCarb_Global_1.default.checkBagMoney === true && i === 5) {
                item.setData(999);
            }
            else {
                var randomIndex = Math.floor(Math.random() * this.data.length);
                item.setData(this.data[randomIndex]);
            }
        }
    };
    ShuShiCarbGame.prototype.removeNode = function (node, id) {
        node.destroy();
        for (var i = 0; i < this.hookObjects.length; i++) {
            if (this.hookObjects[i].node == node && this.hookObjects[i].id == id) {
                this.hookObjects.splice(i, 1);
            }
        }
    };
    ShuShiCarbGame.prototype.resetFoodTable = function () {
        for (var i = 0; i < this.lsFoodTable.length; i++) {
            var item = this.lsFoodTable[i];
            item.active = false;
        }
    };
    ShuShiCarbGame.prototype.resetGame = function (isHappy) {
        var _this = this;
        if (this.indexData >= 8) {
            this.indexData = 0;
        }
        console.log("Resetting game...");
        this.countCorrect = 0;
        var resetCallback = function () {
            _this.randomOrderFood();
            _this.renderOrderFood();
            // this.conveyor(this.conveyor_1);
            // this.conveyor(this.conveyor_2); 
            // this.conveyor(this.conveyor_3);
            _this.resetFoodTable();
        };
        if (isHappy) {
            this.player.happyEffectPlayerMoveOut(resetCallback);
        }
        else {
            this.player.sadEffectPlayerMoveOut(resetCallback);
        }
    };
    ShuShiCarbGame.prototype.onclickBack = function () {
        ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
        this.node.destroy();
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = true;
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('shop').getComponent(cc.Button).interactable = true;
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('setting').getComponent(cc.Button).interactable = true;
    };
    ShuShiCarbGame.prototype.start = function () {
    };
    var ShuShiCarbGame_1;
    ShuShiCarbGame.instance = null;
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGame.prototype, "prfOrder", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nHome", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ShuShiCarbGame.prototype, "listSpfFood", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nPlayer", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "conveyor_1", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "conveyor_2", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "conveyor_3", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGame.prototype, "prfFood", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "lsFoodTable", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGame.prototype, "lbGold", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGame.prototype, "prfGameOver", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ShuShiCarbGame.prototype, "prgTime", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGame.prototype, "lbCountDown", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nEffectGold", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nEffecBagMoneyFly", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nEndEffect", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nCheckFalse", void 0);
    ShuShiCarbGame = ShuShiCarbGame_1 = __decorate([
        ccclass
    ], ShuShiCarbGame);
    return ShuShiCarbGame;
}(cc.Component));
exports.default = ShuShiCarbGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUN4RCwyRUFBcUU7QUFFckUsbUVBQTZEO0FBQzdELHlEQUF5QztBQUN6QywyREFBcUQ7QUFHL0MsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFtUUM7UUEvUEcsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUVwQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFHM0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFhLElBQUksQ0FBQTtRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1Qix1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsd0JBQXdCO1FBQ3hCLFVBQUksR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMs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LENBQUMsSUFBSSxDQUFDO3NEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ2dCO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDVTtJQTFDWCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBbVFsQztJQUFELHFCQUFDO0NBblFELEFBbVFDLENBblEyQyxFQUFFLENBQUMsU0FBUyxHQW1RdkQ7a0JBblFvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTaHVTaGlDYXJiQ29udmV5b3IgZnJvbSBcIi4vR2FtZS9TaHVTaGlDYXJiLkNvbnZleW9yXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vR2FtZS9TaHVTaGlDYXJiLkZvb2RcIjtcbmltcG9ydCBTaHVTaGlDYXJiUGxheWVyIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5QbGF5ZXJcIjtcbmltcG9ydCBTaHVTaGlDYXJiR2FtZU92ZXIgZnJvbSBcIi4vR2FtZS9VaV9Qb3B1cC9TaHVTaGlDcmFiLkdhbWVPdmVyXCI7XG5cbmltcG9ydCBTaHVTaGlDYXJiR2FtZU1hbmFnZXIgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HYW1lTWFuYWdlclwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuaW1wb3J0IFNodVNoaUNhcmJHb2xkRmx5IGZyb20gXCIuL1NodVNoaUNhcmIuR29sZEZseVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2h1U2hpQ2FyYkdhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmT3JkZXI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkhvbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0U3BmRm9vZDogY2MuU3ByaXRlRnJhbWUgW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuUGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb252ZXlvcl8xOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnZleW9yXzI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udmV5b3JfMzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkZvb2Q6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsc0Zvb2RUYWJsZTogY2MuTm9kZVtdPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgIFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZU92ZXI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIHByZ1RpbWU6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJDb3VudERvd246IGNjLkxhYmVsID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5FZmZlY3RHb2xkOiBjYy5Ob2RlID0gbnVsbDsgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkVmZmVjQmFnTW9uZXlGbHk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5FbmRFZmZlY3Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5DaGVja0ZhbHNlOiBjYy5Ob2RlID0gbnVsbDtcbiAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGRhdGEgPSBbMCwxLDIsMyw0LDVdO1xuICAgIHBsYXlPcmRlcnMgPSBbXTtcbiAgICBob29rT2JqZWN0czoge25vZGU6Y2MuTm9kZSwgaWQ6IG51bWJlcn0gW10gPSBbXTtcbiAgICBpbmRleERhdGEgPSAwO1xuICAgIGNvdW50Q29ycmVjdCA9IDA7XG4gICAgLy8gbnVtYmVyQ291bnRkb3duID0gNztcbiAgICBjb3VudGRvd25JbnRlcnZhbDogYW55ID0gbnVsbDtcbiAgICBpc01vdmUgID0gZmFsc2U7XG4gICAgcGxheWVyID0gbnVsbDtcbiAgICBnb2xkID0gMDtcbiAgICBkdXJhdGlvbiA9IDYwO1xuICAgIG51bWJlckNvdW50RG93biA9IDA7XG4gICAgaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNoZWNrQmFnTW9uZXkgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoZWNrQmFnTW9uZXlcIikpO1xuICAgICAgICBHbG9iYWwubW9uZXlCYWcgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vbmV5QmFnXCIpKSB8fCBHbG9iYWwubW9uZXlCYWc7XG4gICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbC5tb25leUJhZyk7XG4gICAgICAgIGlmIChjaGVja0JhZ01vbmV5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBHbG9iYWwuY2hlY2tCYWdNb25leSA9IGNoZWNrQmFnTW9uZXk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWwuY2hlY2tCYWdNb25leSlcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnJlbmRlckZvb2RPZGVyKCk7XG4gICAgICAgIHRoaXMucmFuZG9tT3JkZXJGb29kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheU9yZGVycyk7XG4gICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8xKTtcbiAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpO1xuICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMyk7XG4gICAgICAgIHRoaXMucmVuZGVyT3JkZXJGb29kKCk7XG4gICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgY29uc29sZS5sb2coR2xvYmFsLmNoZWNrQmFnTW9uZXkpO1xuICAgIH1cblxuICAgXG4gICAgLy8gcmFuZG9tSWRGb29kKGFycixjb3VudCkge1xuICAgIC8vICAgICBsZXQgaWRGb29kID0gW107XG4gICAgLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAvLyAgICAgICAgIGlkRm9vZC5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICAvLyAgICAgICAgIGFyci5zcGxpY2UocmFuZG9tSW5kZXgsMSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIGFycjtcbiAgICAvLyB9XG5cblxuICAgIHJhbmRvbU9yZGVyRm9vZCgpIHtcbiAgICAgICAgdGhpcy5wbGF5T3JkZXJzID0gW107IFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBmb29kSWQgPSB0aGlzLmRhdGFbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5wbGF5T3JkZXJzLnB1c2goZm9vZElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0Q291bnREb3duKCkge1xuICAgICAgICB0aGlzLmlzQ291bnREb3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ291bnREb3duLDEpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYodGhpcy5udW1iZXJDb3VudERvd24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlckNvdW50RG93bi0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmdyZXNzVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSBcIjAwOiBcIiArIHRoaXMubnVtYmVyQ291bnREb3duICsgXCIgXCIgO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxiQ291bnREb3duLnN0cmluZyA9IFwiMDA6MDBcIlxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlcih0aGlzLnByZkdhbWVPdmVyKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKHByZkdhbWVPdmVyOiBjYy5QcmVmYWIpIHtcbiAgICAgICAgbGV0IGdhbU92ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmZHYW1lT3ZlcikuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJHYW1lT3ZlcilcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbU92ZXIubm9kZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJncmVzc1RpbWUoKSB7XG4gICAgICAgIGlmKHRoaXMucHJnVGltZSkge1xuICAgICAgICAgICAgdGhpcy5wcmdUaW1lLnByb2dyZXNzIC09IDEvIHRoaXMuZHVyYXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJPcmRlckZvb2QoKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBsYXllcikge1xuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIubm9kZS5kZXN0cm95KCk7IC8vIERlc3Ryb3kgcHJldmlvdXMgcGxheWVyIG5vZGVcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmT3JkZXIpLmdldENvbXBvbmVudChTaHVTaGlDYXJiUGxheWVyKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyLmxpc3RGb29kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZm9vZCA9IHRoaXMucGxheWVyLmxpc3RGb29kW2ldXG4gICAgICAgICAgICBmb29kLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmRm9vZFt0aGlzLnBsYXlPcmRlcnNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXhEYXRhKys7XG4gICAgICAgIHRoaXMucGxheWVyLnNldERhdGEodGhpcy5pbmRleERhdGEpO1xuICAgICAgICB0aGlzLm5QbGF5ZXIuYWRkQ2hpbGQodGhpcy5wbGF5ZXIubm9kZSk7XG4gICAgfVxuXG4gICAgY2hlY2tDb3JyZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5ob29rT2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaG9va0Zvb2RJZCA9IHRoaXMuaG9va09iamVjdHNbMF0uaWQ7XG4gICAgICAgIGxldCBmb3VuZE1hdGNoID0gZmFsc2U7XG4gICAgICAgIGlmIChob29rRm9vZElkID09PSA5OTkpIHtcbiAgICAgICAgICAgIHRoaXMuZ29sZCArPSBHbG9iYWwubW9uZXlCYWc7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdvbGQoR2xvYmFsLm1vbmV5QmFnKTtcbiAgICAgICAgICAgIGZvdW5kTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgU2h1U2hpQ2FyYkdvbGRGbHkuaW5zdGFuY2UucGxheUFuaW0odGhpcy5uRWZmZWNCYWdNb25leUZseSx0aGlzLm5FbmRFZmZlY3QsdGhpcy5uRWZmZWNCYWdNb25leUZseSk7XG4gICAgICAgICAgIFxuICAgICAgICAgIFxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheU9yZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXlPcmRlcnNbaV0gPT09IGhvb2tGb29kSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5uR29sZEZseS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHNGb29kVGFibGVbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZGb29kW2hvb2tGb29kSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHNGb29kVGFibGVbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5Hb2xkRmx5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNodVNoaUNhcmJHb2xkRmx5Lmluc3RhbmNlLnBsYXlBbmltKHRoaXMubkVmZmVjdEdvbGQsdGhpcy5uRW5kRWZmZWN0LHRoaXMubkVmZmVjdEdvbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvbGQgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlR29sZCg1KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYkdvbGQuc3RyaW5nID0gdGhpcy5nb2xkICsgJyAnO1xuICAgICAgICBpZiAoIWZvdW5kTWF0Y2gpIHtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5jb3VudENvcnJlY3QgPj0zKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0R2FtZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICB1cGRhdGVHb2xkKGdvbGQ6IG51bWJlcikge1xuICAgICAgICBHbG9iYWwudG90YWxHb2xkICs9IGdvbGQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9uZyB0aWVuIFwiLCBHbG9iYWwudG90YWxHb2xkKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbEdvbGQnLEpTT04uc3RyaW5naWZ5KEdsb2JhbC50b3RhbEdvbGQpKTtcbiAgICB9XG4gICAgY29udmV5b3Iobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IG5vZGUuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJGb29kKTtcbiAgICAgICAgICAgIGlmKEdsb2JhbC5jaGVja0JhZ01vbmV5ID09PSB0cnVlICYmIGkgPT09IDUpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnNldERhdGEoOTk5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXREYXRhKHRoaXMuZGF0YVtyYW5kb21JbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZU5vZGUobm9kZTogY2MuTm9kZSwgaWQpIHtcbiAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmhvb2tPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLmhvb2tPYmplY3RzW2ldLm5vZGUgPT0gbm9kZSAmJiB0aGlzLmhvb2tPYmplY3RzW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rT2JqZWN0cy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJlc2V0Rm9vZFRhYmxlKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sc0Zvb2RUYWJsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmxzRm9vZFRhYmxlW2ldO1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgcmVzZXRHYW1lKGlzSGFwcHk6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYodGhpcy5pbmRleERhdGEgPj0gOCkge1xuICAgICAgICAgICAgdGhpcy5pbmRleERhdGEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzZXR0aW5nIGdhbWUuLi5cIik7XG4gICAgICAgIHRoaXMuY291bnRDb3JyZWN0ID0gMDtcbiAgICAgICAgbGV0IHJlc2V0Q2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbU9yZGVyRm9vZCgpOyBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyT3JkZXJGb29kKCk7IFxuICAgICAgICAgICAgLy8gdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzEpO1xuICAgICAgICAgICAgLy8gdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpOyBcbiAgICAgICAgICAgIC8vIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8zKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGb29kVGFibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzSGFwcHkpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhhcHB5RWZmZWN0UGxheWVyTW92ZU91dChyZXNldENhbGxiYWNrKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2FkRWZmZWN0UGxheWVyTW92ZU91dChyZXNldENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uY2xpY2tCYWNrKCkgeyBcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLnVwZGF0ZVRvdGFsR29sZCgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3BsYXlidG4nKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3Nob3AnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3NldHRpbmcnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIFxuICAgIHN0YXJ0ICgpIHtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19