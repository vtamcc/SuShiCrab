
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
        _this.nCheckTrue = null;
        _this.lbBagMoneyEffect = null;
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
            this.lbBagMoneyEffect.string = "+" + ShuShiCarb_Global_1.default.moneyBag + '';
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
                        this_1.nCheckTrue.active = true;
                        setTimeout(function () {
                            _this.nCheckTrue.active = false;
                        }, 500);
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
            this.nCheckFalse.active = true;
            setTimeout(function () {
                _this.nCheckFalse.active = false;
            }, 500);
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
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
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
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nCheckTrue", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGame.prototype, "lbBagMoneyEffect", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUN4RCwyRUFBcUU7QUFFckUsbUVBQTZEO0FBQzdELHlEQUF5QztBQUN6QywyREFBcUQ7QUFHL0MsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFnUkM7UUE1UUcsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUVwQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFHM0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFhLElBQUksQ0FBQTtRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1Qix1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0Isc0JBQWdCLEdBQWEsSUFBSSxDQUFD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RUFBRSxDQUFDLElBQUksQ0FBQzs2REFDZ0I7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNVO0lBRTVCO1FBREEsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1U7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0REFDZTtJQTlDakIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWdSbEM7SUFBRCxxQkFBQztDQWhSRCxBQWdSQyxDQWhSMkMsRUFBRSxDQUFDLFNBQVMsR0FnUnZEO2tCQWhSb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkNvbnZleW9yIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Db252ZXlvclwiO1xuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Gb29kXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYlBsYXllciBmcm9tIFwiLi9HYW1lL1NodVNoaUNhcmIuUGxheWVyXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVPdmVyIGZyb20gXCIuL0dhbWUvVWlfUG9wdXAvU2h1U2hpQ3JhYi5HYW1lT3ZlclwiO1xuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuL1NodVNoaUNhcmIuR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiR29sZEZseSBmcm9tIFwiLi9TaHVTaGlDYXJiLkdvbGRGbHlcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZk9yZGVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Ib21lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgbGlzdFNwZkZvb2Q6IGNjLlNwcml0ZUZyYW1lIFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udmV5b3JfMTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb252ZXlvcl8yOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnZleW9yXzM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZGb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbHNGb29kVGFibGU6IGNjLk5vZGVbXT0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gICBcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkdhbWVPdmVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBwcmdUaW1lOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuRWZmZWN0R29sZDogY2MuTm9kZSA9IG51bGw7IFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5FZmZlY0JhZ01vbmV5Rmx5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuRW5kRWZmZWN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQ2hlY2tGYWxzZTogY2MuTm9kZSA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQ2hlY2tUcnVlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJCYWdNb25leUVmZmVjdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGRhdGEgPSBbMCwxLDIsMyw0LDVdO1xuICAgIHBsYXlPcmRlcnMgPSBbXTtcbiAgICBob29rT2JqZWN0czoge25vZGU6Y2MuTm9kZSwgaWQ6IG51bWJlcn0gW10gPSBbXTtcbiAgICBpbmRleERhdGEgPSAwO1xuICAgIGNvdW50Q29ycmVjdCA9IDA7XG4gICAgLy8gbnVtYmVyQ291bnRkb3duID0gNztcbiAgICBjb3VudGRvd25JbnRlcnZhbDogYW55ID0gbnVsbDtcbiAgICBpc01vdmUgID0gZmFsc2U7XG4gICAgcGxheWVyID0gbnVsbDtcbiAgICBnb2xkID0gMDtcbiAgICBkdXJhdGlvbiA9IDYwO1xuICAgIG51bWJlckNvdW50RG93biA9IDA7XG4gICAgaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNoZWNrQmFnTW9uZXkgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoZWNrQmFnTW9uZXlcIikpO1xuICAgICAgICBHbG9iYWwubW9uZXlCYWcgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vbmV5QmFnXCIpKSB8fCBHbG9iYWwubW9uZXlCYWc7XG4gICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbC5tb25leUJhZyk7XG4gICAgICAgIGlmIChjaGVja0JhZ01vbmV5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBHbG9iYWwuY2hlY2tCYWdNb25leSA9IGNoZWNrQmFnTW9uZXk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWwuY2hlY2tCYWdNb25leSlcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnJlbmRlckZvb2RPZGVyKCk7XG4gICAgICAgIHRoaXMucmFuZG9tT3JkZXJGb29kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheU9yZGVycyk7XG4gICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8xKTtcbiAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpO1xuICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMyk7XG4gICAgICAgIHRoaXMucmVuZGVyT3JkZXJGb29kKCk7XG4gICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICB9XG5cbiAgIFxuICAgIC8vIHJhbmRvbUlkRm9vZChhcnIsY291bnQpIHtcbiAgICAvLyAgICAgbGV0IGlkRm9vZCA9IFtdO1xuICAgIC8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG4gICAgLy8gICAgICAgICBpZEZvb2QucHVzaChyYW5kb21JbmRleCk7XG4gICAgLy8gICAgICAgICBhcnIuc3BsaWNlKHJhbmRvbUluZGV4LDEpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBhcnI7XG4gICAgLy8gfVxuXG5cbiAgICByYW5kb21PcmRlckZvb2QoKSB7XG4gICAgICAgIHRoaXMucGxheU9yZGVycyA9IFtdOyBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgZm9vZElkID0gdGhpcy5kYXRhW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMucGxheU9yZGVycy5wdXNoKGZvb2RJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydENvdW50RG93bigpIHtcbiAgICAgICAgdGhpcy5pc0NvdW50RG93biA9IHRydWU7XG4gICAgICAgIHRoaXMubnVtYmVyQ291bnREb3duID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNvdW50RG93biwxKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDb3VudERvd24oKSB7XG4gICAgICAgIGlmKHRoaXMubnVtYmVyQ291bnREb3duID4gMCkge1xuICAgICAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24tLTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJncmVzc1RpbWUoKTtcbiAgICAgICAgICAgIHRoaXMubGJDb3VudERvd24uc3RyaW5nID0gXCIwMDogXCIgKyB0aGlzLm51bWJlckNvdW50RG93biArIFwiIFwiIDtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0NvdW50RG93biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSBcIjAwOjAwXCJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIodGhpcy5wcmZHYW1lT3Zlcik7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3ZlcihwcmZHYW1lT3ZlcjogY2MuUHJlZmFiKSB7XG4gICAgICAgIGxldCBnYW1PdmVyID0gY2MuaW5zdGFudGlhdGUocHJmR2FtZU92ZXIpLmdldENvbXBvbmVudChTaHVTaGlDYXJiR2FtZU92ZXIpXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1PdmVyLm5vZGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByZ3Jlc3NUaW1lKCkge1xuICAgICAgICBpZih0aGlzLnByZ1RpbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJnVGltZS5wcm9ncmVzcyAtPSAxLyB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyT3JkZXJGb29kKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyLm5vZGUuZGVzdHJveSgpOyAvLyBEZXN0cm95IHByZXZpb3VzIHBsYXllciBub2RlXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZk9yZGVyKS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYlBsYXllcik7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllci5saXN0Rm9vZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZvb2QgPSB0aGlzLnBsYXllci5saXN0Rm9vZFtpXVxuICAgICAgICAgICAgZm9vZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwZkZvb2RbdGhpcy5wbGF5T3JkZXJzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZGV4RGF0YSsrO1xuICAgICAgICB0aGlzLnBsYXllci5zZXREYXRhKHRoaXMuaW5kZXhEYXRhKTtcbiAgICAgICAgdGhpcy5uUGxheWVyLmFkZENoaWxkKHRoaXMucGxheWVyLm5vZGUpO1xuICAgIH1cblxuICAgIGNoZWNrQ29ycmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9va09iamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhvb2tGb29kSWQgPSB0aGlzLmhvb2tPYmplY3RzWzBdLmlkO1xuICAgICAgICBsZXQgZm91bmRNYXRjaCA9IGZhbHNlO1xuICAgICAgICBpZiAoaG9va0Zvb2RJZCA9PT0gOTk5KSB7XG4gICAgICAgICAgICB0aGlzLmdvbGQgKz0gR2xvYmFsLm1vbmV5QmFnO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVHb2xkKEdsb2JhbC5tb25leUJhZyk7XG4gICAgICAgICAgICBmb3VuZE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGJCYWdNb25leUVmZmVjdC5zdHJpbmcgPSBcIitcIiArIEdsb2JhbC5tb25leUJhZyArICcnO1xuICAgICAgICAgICAgU2h1U2hpQ2FyYkdvbGRGbHkuaW5zdGFuY2UucGxheUFuaW0odGhpcy5uRWZmZWNCYWdNb25leUZseSx0aGlzLm5FbmRFZmZlY3QsdGhpcy5uRWZmZWNCYWdNb25leUZseSk7XG4gICAgICAgICAgIFxuICAgICAgICAgIFxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheU9yZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXlPcmRlcnNbaV0gPT09IGhvb2tGb29kSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5uR29sZEZseS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHNGb29kVGFibGVbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZGb29kW2hvb2tGb29kSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHNGb29kVGFibGVbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5Hb2xkRmx5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNodVNoaUNhcmJHb2xkRmx5Lmluc3RhbmNlLnBsYXlBbmltKHRoaXMubkVmZmVjdEdvbGQsdGhpcy5uRW5kRWZmZWN0LHRoaXMubkVmZmVjdEdvbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvbGQgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlR29sZCg1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uQ2hlY2tUcnVlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5DaGVja1RydWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYkdvbGQuc3RyaW5nID0gdGhpcy5nb2xkICsgJyAnO1xuICAgICAgICBpZiAoIWZvdW5kTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5DaGVja0ZhbHNlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uQ2hlY2tGYWxzZS5hY3RpdmUgPSBmYWxzZSBcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmNvdW50Q29ycmVjdCA+PTMpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRHYW1lKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHVwZGF0ZUdvbGQoZ29sZDogbnVtYmVyKSB7XG4gICAgICAgIEdsb2JhbC50b3RhbEdvbGQgKz0gZ29sZDtcbiAgICAgICAgY29uc29sZS5sb2coXCJUb25nIHRpZW4gXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvdGFsR29sZCcsSlNPTi5zdHJpbmdpZnkoR2xvYmFsLnRvdGFsR29sZCkpO1xuICAgIH1cbiAgICBjb252ZXlvcihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gbm9kZS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkZvb2QpO1xuICAgICAgICAgICAgaWYoR2xvYmFsLmNoZWNrQmFnTW9uZXkgPT09IHRydWUgJiYgaSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0RGF0YSg5OTkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpdGVtLnNldERhdGEodGhpcy5kYXRhW3JhbmRvbUluZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlTm9kZShub2RlOiBjYy5Ob2RlLCBpZCkge1xuICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaG9va09iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaG9va09iamVjdHNbaV0ubm9kZSA9PSBub2RlICYmIHRoaXMuaG9va09iamVjdHNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tPYmplY3RzLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmVzZXRGb29kVGFibGUoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxzRm9vZFRhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubHNGb29kVGFibGVbaV07XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgIH1cbiAgICByZXNldEdhbWUoaXNIYXBweTogYm9vbGVhbikge1xuICAgICAgICBpZih0aGlzLmluZGV4RGF0YSA+PSA4KSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4RGF0YSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNldHRpbmcgZ2FtZS4uLlwiKTtcbiAgICAgICAgdGhpcy5jb3VudENvcnJlY3QgPSAwO1xuICAgICAgICBsZXQgcmVzZXRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9tT3JkZXJGb29kKCk7IFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJPcmRlckZvb2QoKTsgXG4gICAgICAgICAgICAvLyB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMSk7XG4gICAgICAgICAgICAvLyB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMik7IFxuICAgICAgICAgICAgLy8gdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzMpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEZvb2RUYWJsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNIYXBweSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGFwcHlFZmZlY3RQbGF5ZXJNb3ZlT3V0KHJlc2V0Q2FsbGJhY2spO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5zYWRFZmZlY3RQbGF5ZXJNb3ZlT3V0KHJlc2V0Q2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25jbGlja0JhY2soKSB7IFxuICAgICAgICBpZihHbG9iYWwuc291bmRNYW5hZ2VyKSB7XG4gICAgICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyLnBsYXlTb3VuZENsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLnVwZGF0ZVRvdGFsR29sZCgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3BsYXlidG4nKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3Nob3AnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3NldHRpbmcnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIFxuICAgIHN0YXJ0ICgpIHtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19