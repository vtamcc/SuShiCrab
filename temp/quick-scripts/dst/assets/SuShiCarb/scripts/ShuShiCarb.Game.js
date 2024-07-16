
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
        _this.nGoldFly = null;
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
        // this.renderFoodOder();
        this.randomOrderFood();
        console.log(this.playOrders);
        this.conveyor(this.conveyor_1);
        this.conveyor(this.conveyor_2);
        this.conveyor(this.conveyor_3);
        this.renderOrderFood();
        this.startCountDown();
        console.log(ShuShiCarb_Global_1.default.checkBagMoney);
        //this.schedule(this.addRandomMoneyBag, 5)
        //this.renderFood();      
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
        var _loop_1 = function (i) {
            if (this_1.playOrders[i] === hookFoodId) {
                if (!this_1.player.listFood[i].getChildByName("tick").active) {
                    this_1.player.listFood[i].getChildByName("tick").active = true;
                    this_1.nGoldFly.active = true;
                    this_1.scheduleOnce(function () {
                        _this.lsFoodTable[i].getComponent(cc.Sprite).spriteFrame = _this.listSpfFood[hookFoodId];
                        _this.lsFoodTable[i].active = true;
                        _this.nGoldFly.active = false;
                    }, 0.2);
                    ShuShiCarb_GoldFly_1.default.instance.playAnim();
                    this_1.gold += 5;
                    this_1.updateGold();
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
        this.lbGold.string = this.gold + ' ';
        if (!foundMatch) {
        }
        if (this.countCorrect >= 3) {
            this.resetGame(true);
        }
    };
    ShuShiCarbGame.prototype.updateGold = function () {
        ShuShiCarb_Global_1.default.totalGold += 5;
        console.log("Tong tien ", ShuShiCarb_Global_1.default.totalGold);
        cc.sys.localStorage.setItem('totalGold', JSON.stringify(ShuShiCarb_Global_1.default.totalGold));
    };
    ShuShiCarbGame.prototype.conveyor = function (node) {
        for (var i = 0; i < node.childrenCount; i++) {
            var item = node.children[i].getComponent(ShuShiCarb_Food_1.default);
            if (ShuShiCarb_Global_1.default.checkBagMoney == true && i === 5) {
                item.setData(999);
                console.log("khong chay vao day a ");
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
    ], ShuShiCarbGame.prototype, "nGoldFly", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUN4RCwyRUFBcUU7QUFFckUsbUVBQTZEO0FBQzdELHlEQUF5QztBQUN6QywyREFBcUQ7QUFHL0MsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFtUEM7UUEvT0csY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUVwQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFHM0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFhLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLHdCQUF3QjtRQUN4QixVQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFV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QUFJLENBQUM7SUFFOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1c7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1U7SUF0Q1gsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW1QbEM7SUFBRCxxQkFBQztDQW5QRCxBQW1QQyxDQW5QMkMsRUFBRSxDQUFDLFNBQVMsR0FtUHZEO2tCQW5Qb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkNvbnZleW9yIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Db252ZXlvclwiO1xuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Gb29kXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYlBsYXllciBmcm9tIFwiLi9HYW1lL1NodVNoaUNhcmIuUGxheWVyXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVPdmVyIGZyb20gXCIuL0dhbWUvVWlfUG9wdXAvU2h1U2hpQ3JhYi5HYW1lT3ZlclwiO1xuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuL1NodVNoaUNhcmIuR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiR29sZEZseSBmcm9tIFwiLi9TaHVTaGlDYXJiLkdvbGRGbHlcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZk9yZGVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Ib21lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgbGlzdFNwZkZvb2Q6IGNjLlNwcml0ZUZyYW1lIFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udmV5b3JfMTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb252ZXlvcl8yOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnZleW9yXzM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZGb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbHNGb29kVGFibGU6IGNjLk5vZGVbXT0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gICBcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkdhbWVPdmVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBwcmdUaW1lOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuR29sZEZseTogY2MuTm9kZSA9IG51bGw7IFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5DaGVja0ZhbHNlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBkYXRhID0gWzAsMSwyLDMsNCw1XTtcbiAgICBwbGF5T3JkZXJzID0gW107XG4gICAgaG9va09iamVjdHM6IHtub2RlOmNjLk5vZGUsIGlkOiBudW1iZXJ9IFtdID0gW107XG4gICAgaW5kZXhEYXRhID0gMDtcbiAgICBjb3VudENvcnJlY3QgPSAwO1xuICAgIC8vIG51bWJlckNvdW50ZG93biA9IDc7XG4gICAgY291bnRkb3duSW50ZXJ2YWw6IGFueSA9IG51bGw7XG4gICAgaXNNb3ZlICA9IGZhbHNlO1xuICAgIHBsYXllciA9IG51bGw7XG4gICAgZ29sZCA9IDA7XG4gICAgZHVyYXRpb24gPSA2MDtcbiAgICBudW1iZXJDb3VudERvd24gPSAwO1xuICAgIGlzQ291bnREb3duID0gZmFsc2U7XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgIFxuICAgICAgICAvLyB0aGlzLnJlbmRlckZvb2RPZGVyKCk7XG4gICAgICAgIHRoaXMucmFuZG9tT3JkZXJGb29kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheU9yZGVycyk7XG4gICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8xKTtcbiAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpO1xuICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJPcmRlckZvb2QoKTtcbiAgICAgICAgdGhpcy5zdGFydENvdW50RG93bigpO1xuICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWwuY2hlY2tCYWdNb25leSk7XG4gICAgICAgIC8vdGhpcy5zY2hlZHVsZSh0aGlzLmFkZFJhbmRvbU1vbmV5QmFnLCA1KVxuICAgICAgICAvL3RoaXMucmVuZGVyRm9vZCgpOyAgICAgIFxuICAgIH1cblxuICAgXG4gICAgLy8gcmFuZG9tSWRGb29kKGFycixjb3VudCkge1xuICAgIC8vICAgICBsZXQgaWRGb29kID0gW107XG4gICAgLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAvLyAgICAgICAgIGlkRm9vZC5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICAvLyAgICAgICAgIGFyci5zcGxpY2UocmFuZG9tSW5kZXgsMSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIGFycjtcbiAgICAvLyB9XG5cblxuICAgIHJhbmRvbU9yZGVyRm9vZCgpIHtcbiAgICAgICAgdGhpcy5wbGF5T3JkZXJzID0gW107IFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBmb29kSWQgPSB0aGlzLmRhdGFbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5wbGF5T3JkZXJzLnB1c2goZm9vZElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0Q291bnREb3duKCkge1xuICAgICAgICB0aGlzLmlzQ291bnREb3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ291bnREb3duLDEpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYodGhpcy5udW1iZXJDb3VudERvd24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlckNvdW50RG93bi0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmdyZXNzVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSBcIjAwOiBcIiArIHRoaXMubnVtYmVyQ291bnREb3duICsgXCIgXCIgO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxiQ291bnREb3duLnN0cmluZyA9IFwiMDA6MDBcIlxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlcih0aGlzLnByZkdhbWVPdmVyKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKHByZkdhbWVPdmVyOiBjYy5QcmVmYWIpIHtcbiAgICAgICAgbGV0IGdhbU92ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmZHYW1lT3ZlcikuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJHYW1lT3ZlcilcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbU92ZXIubm9kZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJncmVzc1RpbWUoKSB7XG4gICAgICAgIGlmKHRoaXMucHJnVGltZSkge1xuICAgICAgICAgICAgdGhpcy5wcmdUaW1lLnByb2dyZXNzIC09IDEvIHRoaXMuZHVyYXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJPcmRlckZvb2QoKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBsYXllcikge1xuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIubm9kZS5kZXN0cm95KCk7IC8vIERlc3Ryb3kgcHJldmlvdXMgcGxheWVyIG5vZGVcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmT3JkZXIpLmdldENvbXBvbmVudChTaHVTaGlDYXJiUGxheWVyKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyLmxpc3RGb29kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZm9vZCA9IHRoaXMucGxheWVyLmxpc3RGb29kW2ldXG4gICAgICAgICAgICBmb29kLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmRm9vZFt0aGlzLnBsYXlPcmRlcnNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXhEYXRhKys7XG4gICAgICAgIHRoaXMucGxheWVyLnNldERhdGEodGhpcy5pbmRleERhdGEpO1xuICAgICAgICB0aGlzLm5QbGF5ZXIuYWRkQ2hpbGQodGhpcy5wbGF5ZXIubm9kZSk7XG4gICAgfVxuXG4gICAgY2hlY2tDb3JyZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5ob29rT2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaG9va0Zvb2RJZCA9IHRoaXMuaG9va09iamVjdHNbMF0uaWQ7XG4gICAgICAgIGxldCBmb3VuZE1hdGNoID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5T3JkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5T3JkZXJzW2ldID09PSBob29rRm9vZElkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpc3RGb29kW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5Hb2xkRmx5LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHNGb29kVGFibGVbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZGb29kW2hvb2tGb29kSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sc0Zvb2RUYWJsZVtpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uR29sZEZseS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSwwLjIpO1xuICAgICAgICAgICAgICAgICAgICBTaHVTaGlDYXJiR29sZEZseS5pbnN0YW5jZS5wbGF5QW5pbSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvbGQgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlR29sZCgpO1xuICAgICAgICAgICAgICAgICAgICBmb3VuZE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudENvcnJlY3QrKztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxiR29sZC5zdHJpbmcgPSB0aGlzLmdvbGQgKyAnICc7XG4gICAgICAgIGlmICghZm91bmRNYXRjaCkge1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmNvdW50Q29ycmVjdCA+PTMpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRHYW1lKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHVwZGF0ZUdvbGQoKSB7XG4gICAgICAgIEdsb2JhbC50b3RhbEdvbGQgKz0gNTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUb25nIHRpZW4gXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvdGFsR29sZCcsSlNPTi5zdHJpbmdpZnkoR2xvYmFsLnRvdGFsR29sZCkpO1xuICAgIH1cbiAgICBjb252ZXlvcihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gbm9kZS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkZvb2QpO1xuICAgICAgICAgICAgaWYoR2xvYmFsLmNoZWNrQmFnTW9uZXkgPT0gdHJ1ZSAmJiBpID09PSA1KSB7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXREYXRhKDk5OSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJraG9uZyBjaGF5IHZhbyBkYXkgYSBcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXREYXRhKHRoaXMuZGF0YVtyYW5kb21JbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZU5vZGUobm9kZTogY2MuTm9kZSwgaWQpIHtcbiAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmhvb2tPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLmhvb2tPYmplY3RzW2ldLm5vZGUgPT0gbm9kZSAmJiB0aGlzLmhvb2tPYmplY3RzW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rT2JqZWN0cy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJlc2V0Rm9vZFRhYmxlKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sc0Zvb2RUYWJsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmxzRm9vZFRhYmxlW2ldO1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgcmVzZXRHYW1lKGlzSGFwcHk6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYodGhpcy5pbmRleERhdGEgPj0gOCkge1xuICAgICAgICAgICAgdGhpcy5pbmRleERhdGEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzZXR0aW5nIGdhbWUuLi5cIik7XG4gICAgICAgIHRoaXMuY291bnRDb3JyZWN0ID0gMDtcbiAgICAgICAgbGV0IHJlc2V0Q2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbU9yZGVyRm9vZCgpOyBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyT3JkZXJGb29kKCk7IFxuICAgICAgICAgICAgLy8gdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzEpO1xuICAgICAgICAgICAgLy8gdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpOyBcbiAgICAgICAgICAgIC8vIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8zKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGb29kVGFibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzSGFwcHkpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhhcHB5RWZmZWN0UGxheWVyTW92ZU91dChyZXNldENhbGxiYWNrKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2FkRWZmZWN0UGxheWVyTW92ZU91dChyZXNldENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uY2xpY2tCYWNrKCkgeyBcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLnVwZGF0ZVRvdGFsR29sZCgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3BsYXlidG4nKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3Nob3AnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3NldHRpbmcnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIFxuICAgIHN0YXJ0ICgpIHtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19