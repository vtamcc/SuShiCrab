
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
        // LIFE-CYCLE CALLBACKS:
        _this.data = [0, 1, 2, 3, 4, 5];
        _this.playOrders = [];
        _this.hookObjects = [];
        _this.indexData = 0;
        _this.countCorrect = 0;
        _this.numberCountdown = 7;
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
            this.gameOver(this.prfGameOver, false);
        }
    };
    ShuShiCarbGame.prototype.gameOver = function (prfGameOver, isWin) {
        var gamOver = cc.instantiate(prfGameOver).getComponent(ShuShiCrab_GameOver_1.default);
        if (isWin) {
            gamOver.gameWin();
        }
        else {
            gamOver.gameLose();
        }
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
            console.log("hut het me roi");
            return;
        }
        var hookFoodId = this.hookObjects[0].id;
        var foundMatch = false;
        var _loop_1 = function (i) {
            if (this_1.playOrders[i] === hookFoodId) {
                if (!this_1.player.listFood[i].getChildByName("tick").active) {
                    this_1.player.listFood[i].getChildByName("tick").active = true;
                    this_1.scheduleOnce(function () {
                        _this.lsFoodTable[i].getComponent(cc.Sprite).spriteFrame = _this.listSpfFood[hookFoodId];
                        _this.lsFoodTable[i].active = true;
                    }, 0.2);
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
        console.log("Keo dung ne ", this.countCorrect);
        if (!foundMatch) {
            console.log("sai me may roi");
        }
        if (this.countCorrect >= 3) {
            this.resetGame(true);
        }
    };
    ShuShiCarbGame.prototype.updateGold = function () {
        ShuShiCarb_Global_1.default.totalGold += this.gold;
        cc.sys.localStorage.setItem('totalGold', JSON.stringify(ShuShiCarb_Global_1.default.totalGold));
    };
    ShuShiCarbGame.prototype.conveyor = function (node) {
        for (var i = 0; i < node.childrenCount; i++) {
            var item = node.children[i].getComponent(ShuShiCarb_Food_1.default);
            var randomIndex = Math.floor(Math.random() * this.data.length);
            item.setData(this.data[randomIndex]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUN4RCwyRUFBcUU7QUFFckUsbUVBQTZEO0FBQzdELHlEQUF5QztBQUduQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWdPQztRQTVORyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsaUJBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRXBDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUczQixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQWEsSUFBSSxDQUFBO1FBQzVCLHdCQUF3QjtRQUN4QixVQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFXLEdBQWtDLEVBQUUsQ0FBQztRQUNoRCxlQUFTLEdBQUcsQ0FBQyxD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VTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1M7SUFsQ1gsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWdPbEM7SUFBRCxxQkFBQztDQWhPRCxBQWdPQyxDQWhPMkMsRUFBRSxDQUFDLFNBQVMsR0FnT3ZEO2tCQWhPb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkNvbnZleW9yIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Db252ZXlvclwiO1xuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Gb29kXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYlBsYXllciBmcm9tIFwiLi9HYW1lL1NodVNoaUNhcmIuUGxheWVyXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVPdmVyIGZyb20gXCIuL0dhbWUvVWlfUG9wdXAvU2h1U2hpQ3JhYi5HYW1lT3ZlclwiO1xuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuL1NodVNoaUNhcmIuR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZk9yZGVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Ib21lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgbGlzdFNwZkZvb2Q6IGNjLlNwcml0ZUZyYW1lIFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udmV5b3JfMTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb252ZXlvcl8yOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnZleW9yXzM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZGb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbHNGb29kVGFibGU6IGNjLk5vZGVbXT0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkdhbWVPdmVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBwcmdUaW1lOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGxcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBkYXRhID0gWzAsMSwyLDMsNCw1XTtcbiAgICBwbGF5T3JkZXJzID0gW107XG4gICAgaG9va09iamVjdHM6IHtub2RlOmNjLk5vZGUsIGlkOiBudW1iZXJ9IFtdID0gW107XG4gICAgaW5kZXhEYXRhID0gMDtcbiAgICBjb3VudENvcnJlY3QgPSAwO1xuICAgIG51bWJlckNvdW50ZG93biA9IDc7XG4gICAgY291bnRkb3duSW50ZXJ2YWw6IGFueSA9IG51bGw7XG4gICAgaXNNb3ZlICA9IGZhbHNlO1xuICAgIHBsYXllciA9IG51bGw7XG4gICAgZ29sZCA9IDA7XG4gICAgZHVyYXRpb24gPSA2MDtcbiAgICBudW1iZXJDb3VudERvd24gPSAwO1xuICAgIGlzQ291bnREb3duID0gZmFsc2U7XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgIFxuICAgICAgICAvLyB0aGlzLnJlbmRlckZvb2RPZGVyKCk7XG4gICAgICAgIHRoaXMucmFuZG9tT3JkZXJGb29kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheU9yZGVycyk7XG4gICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8xKTtcbiAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpO1xuICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMyk7XG4gICAgICAgIHRoaXMucmVuZGVyT3JkZXJGb29kKCk7XG4gICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgLy90aGlzLnJlbmRlckZvb2QoKTsgICAgICBcbiAgICB9XG5cbiAgIFxuICAgIC8vIHJhbmRvbUlkRm9vZChhcnIsY291bnQpIHtcbiAgICAvLyAgICAgbGV0IGlkRm9vZCA9IFtdO1xuICAgIC8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG4gICAgLy8gICAgICAgICBpZEZvb2QucHVzaChyYW5kb21JbmRleCk7XG4gICAgLy8gICAgICAgICBhcnIuc3BsaWNlKHJhbmRvbUluZGV4LDEpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBhcnI7XG4gICAgLy8gfVxuICAgIHJhbmRvbU9yZGVyRm9vZCgpIHtcbiAgICAgICAgdGhpcy5wbGF5T3JkZXJzID0gW107IFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBmb29kSWQgPSB0aGlzLmRhdGFbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5wbGF5T3JkZXJzLnB1c2goZm9vZElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0Q291bnREb3duKCkge1xuICAgICAgICB0aGlzLmlzQ291bnREb3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ291bnREb3duLDEpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYodGhpcy5udW1iZXJDb3VudERvd24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlckNvdW50RG93bi0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmdyZXNzVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSBcIjAwOiBcIiArIHRoaXMubnVtYmVyQ291bnREb3duICsgXCIgXCIgO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxiQ291bnREb3duLnN0cmluZyA9IFwiMDA6MDBcIlxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlcih0aGlzLnByZkdhbWVPdmVyLGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKHByZkdhbWVPdmVyOiBjYy5QcmVmYWIsIGlzV2luOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBnYW1PdmVyID0gY2MuaW5zdGFudGlhdGUocHJmR2FtZU92ZXIpLmdldENvbXBvbmVudChTaHVTaGlDYXJiR2FtZU92ZXIpXG4gICAgICAgIGlmKGlzV2luKSB7XG4gICAgICAgICAgICBnYW1PdmVyLmdhbWVXaW4oKVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBnYW1PdmVyLmdhbWVMb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbU92ZXIubm9kZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJncmVzc1RpbWUoKSB7XG4gICAgICAgIGlmKHRoaXMucHJnVGltZSkge1xuICAgICAgICAgICAgdGhpcy5wcmdUaW1lLnByb2dyZXNzIC09IDEgLyB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlck9yZGVyRm9vZCgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnBsYXllci5ub2RlLmRlc3Ryb3koKTsgLy8gRGVzdHJveSBwcmV2aW91cyBwbGF5ZXIgbm9kZVxuICAgICAgICAvLyB9XG4gICAgICAgXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZPcmRlcikuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJQbGF5ZXIpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXIubGlzdEZvb2QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmb29kID0gdGhpcy5wbGF5ZXIubGlzdEZvb2RbaV1cbiAgICAgICAgICAgIGZvb2QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZGb29kW3RoaXMucGxheU9yZGVyc1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleERhdGErKztcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0RGF0YSh0aGlzLmluZGV4RGF0YSk7XG4gICAgICAgIHRoaXMublBsYXllci5hZGRDaGlsZCh0aGlzLnBsYXllci5ub2RlKTtcbiAgICB9XG5cbiAgICBjaGVja0NvcnJlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmhvb2tPYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJodXQgaGV0IG1lIHJvaVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaG9va0Zvb2RJZCA9IHRoaXMuaG9va09iamVjdHNbMF0uaWQ7XG4gICAgICAgIGxldCBmb3VuZE1hdGNoID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5T3JkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5T3JkZXJzW2ldID09PSBob29rRm9vZElkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpc3RGb29kW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxzRm9vZFRhYmxlW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmRm9vZFtob29rRm9vZElkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHNGb29kVGFibGVbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LDAuMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29sZCArPSA1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUdvbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRDb3JyZWN0Kys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGJHb2xkLnN0cmluZyA9IHRoaXMuZ29sZCArICcgJztcbiAgICAgICAgY29uc29sZS5sb2coXCJLZW8gZHVuZyBuZSBcIix0aGlzLmNvdW50Q29ycmVjdCk7XG4gICAgICAgIGlmICghZm91bmRNYXRjaCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYWkgbWUgbWF5IHJvaVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5jb3VudENvcnJlY3QgPj0zKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0R2FtZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICB1cGRhdGVHb2xkKCkge1xuICAgICAgICBHbG9iYWwudG90YWxHb2xkICs9IHRoaXMuZ29sZDtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbEdvbGQnLEpTT04uc3RyaW5naWZ5KEdsb2JhbC50b3RhbEdvbGQpKTtcbiAgICB9XG4gICAgY29udmV5b3Iobm9kZTogY2MuTm9kZSkge1xuICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBub2RlLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChTaHVTaGlDYXJiRm9vZCk7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0RGF0YSh0aGlzLmRhdGFbcmFuZG9tSW5kZXhdKTtcbiAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlTm9kZShub2RlOiBjYy5Ob2RlLCBpZCkge1xuICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaG9va09iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaG9va09iamVjdHNbaV0ubm9kZSA9PSBub2RlICYmIHRoaXMuaG9va09iamVjdHNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tPYmplY3RzLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmVzZXRGb29kVGFibGUoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxzRm9vZFRhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubHNGb29kVGFibGVbaV07XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgIH1cbiAgICByZXNldEdhbWUoaXNIYXBweTogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc2V0dGluZyBnYW1lLi4uXCIpO1xuICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCA9IDA7XG4gICAgICAgIGxldCByZXNldENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21PcmRlckZvb2QoKTsgXG4gICAgICAgICAgICB0aGlzLnJlbmRlck9yZGVyRm9vZCgpOyBcbiAgICAgICAgICAgIC8vIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8xKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8yKTsgXG4gICAgICAgICAgICAvLyB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMyk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Rm9vZFRhYmxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc0hhcHB5KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5oYXBweUVmZmVjdFBsYXllck1vdmVPdXQocmVzZXRDYWxsYmFjayk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNhZEVmZmVjdFBsYXllck1vdmVPdXQocmVzZXRDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbmNsaWNrQmFjaygpIHsgXG4gICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS51cGRhdGVUb3RhbEdvbGQoKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICBcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLm5Ib21lLmdldENoaWxkQnlOYW1lKCdwbGF5YnRuJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RhcnQgKCkge1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=