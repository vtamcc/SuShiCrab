
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
        }
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
        this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUdsRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStNQztRQTNNRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsaUJBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRXBDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQU0zQixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFhLElBQUksQ0FBQTtRQUM1Qix3QkFBd0I7UUFDeEIsVUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixpQkFBVyxHQUFrQyxFQUFFLENBQUM7UUFDaEQsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLHVCQUFpQixHQUFRLElBQUksQ0FBQztRQUM5QixZ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M0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDYjtJQUdOO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDUztJQWhDWCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBK01sQztJQUFELHFCQUFDO0NBL01ELEFBK01DLENBL00yQyxFQUFFLENBQUMsU0FBUyxHQStNdkQ7a0JBL01vQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTaHVTaGlDYXJiQ29udmV5b3IgZnJvbSBcIi4vR2FtZS9TaHVTaGlDYXJiLkNvbnZleW9yXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vR2FtZS9TaHVTaGlDYXJiLkZvb2RcIjtcbmltcG9ydCBTaHVTaGlDYXJiUGxheWVyIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5QbGF5ZXJcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZk9yZGVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Ib21lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgbGlzdFNwZkZvb2Q6IGNjLlNwcml0ZUZyYW1lIFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udmV5b3JfMTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb252ZXlvcl8yOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnZleW9yXzM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZGb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbHNGb29kVGFibGU6IGNjLk5vZGVbXT0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJHb2xkXG5cbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJnVGltZTogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkNvdW50RG93bjogY2MuTGFiZWwgPSBudWxsXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgZGF0YSA9IFswLDEsMiwzLDQsNV07XG4gICAgcGxheU9yZGVycyA9IFtdO1xuICAgIGhvb2tPYmplY3RzOiB7bm9kZTpjYy5Ob2RlLCBpZDogbnVtYmVyfSBbXSA9IFtdO1xuICAgIGluZGV4RGF0YSA9IDA7XG4gICAgY291bnRDb3JyZWN0ID0gMDtcbiAgICBudW1iZXJDb3VudGRvd24gPSA3O1xuICAgIGNvdW50ZG93bkludGVydmFsOiBhbnkgPSBudWxsO1xuICAgIGlzTW92ZSAgPSBmYWxzZTtcbiAgICBwbGF5ZXIgPSBudWxsO1xuICAgIGdvbGQgPSAwO1xuXG4gICAgZHVyYXRpb24gPSA2MDtcbiAgICBudW1iZXJDb3VudERvd24gPSAwO1xuICAgIGlzQ291bnREb3duID0gZmFsc2U7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgXG4gICAgICAgIC8vIHRoaXMucmVuZGVyRm9vZE9kZXIoKTtcbiAgICAgICAgdGhpcy5yYW5kb21PcmRlckZvb2QoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5T3JkZXJzKTtcbiAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzEpO1xuICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMik7XG4gICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJPcmRlckZvb2QoKTtcbiAgICAgICAgdGhpcy5zdGFydENvdW50RG93bigpO1xuICAgICAgICAvL3RoaXMucmVuZGVyRm9vZCgpOyAgICAgIFxuICAgIH1cblxuICAgXG4gICAgLy8gcmFuZG9tSWRGb29kKGFycixjb3VudCkge1xuICAgIC8vICAgICBsZXQgaWRGb29kID0gW107XG4gICAgLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAvLyAgICAgICAgIGlkRm9vZC5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICAvLyAgICAgICAgIGFyci5zcGxpY2UocmFuZG9tSW5kZXgsMSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIGFycjtcbiAgICAvLyB9XG4gICAgcmFuZG9tT3JkZXJGb29kKCkge1xuICAgICAgICB0aGlzLnBsYXlPcmRlcnMgPSBbXTsgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGZvb2RJZCA9IHRoaXMuZGF0YVtyYW5kb21JbmRleF07XG4gICAgICAgICAgICB0aGlzLnBsYXlPcmRlcnMucHVzaChmb29kSWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRDb3VudERvd24oKSB7XG4gICAgICAgIHRoaXMuaXNDb3VudERvd24gPSB0cnVlO1xuICAgICAgICB0aGlzLm51bWJlckNvdW50RG93biA9IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDb3VudERvd24sMSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ291bnREb3duKCkge1xuICAgICAgICBpZih0aGlzLm51bWJlckNvdW50RG93biA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyQ291bnREb3duLS07XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByZ3Jlc3NUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLmxiQ291bnREb3duLnN0cmluZyA9IFwiMDA6IFwiICsgdGhpcy5udW1iZXJDb3VudERvd24gKyBcIiBcIiA7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGJDb3VudERvd24uc3RyaW5nID0gXCIwMDowMFwiXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHVwZGF0ZVByZ3Jlc3NUaW1lKCkge1xuICAgICAgICBpZih0aGlzLnByZ1RpbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJnVGltZS5wcm9ncmVzcyAtPSAxIC8gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJPcmRlckZvb2QoKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBsYXllcikge1xuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIubm9kZS5kZXN0cm95KCk7IC8vIERlc3Ryb3kgcHJldmlvdXMgcGxheWVyIG5vZGVcbiAgICAgICAgLy8gfVxuICAgICAgIFxuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmT3JkZXIpLmdldENvbXBvbmVudChTaHVTaGlDYXJiUGxheWVyKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyLmxpc3RGb29kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZm9vZCA9IHRoaXMucGxheWVyLmxpc3RGb29kW2ldXG4gICAgICAgICAgICBmb29kLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmRm9vZFt0aGlzLnBsYXlPcmRlcnNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXhEYXRhKys7XG4gICAgICAgIHRoaXMucGxheWVyLnNldERhdGEodGhpcy5pbmRleERhdGEpO1xuICAgICAgICB0aGlzLm5QbGF5ZXIuYWRkQ2hpbGQodGhpcy5wbGF5ZXIubm9kZSk7XG4gICAgfVxuXG4gICAgY2hlY2tDb3JyZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5ob29rT2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaHV0IGhldCBtZSByb2lcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhvb2tGb29kSWQgPSB0aGlzLmhvb2tPYmplY3RzWzBdLmlkO1xuICAgICAgICBsZXQgZm91bmRNYXRjaCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheU9yZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheU9yZGVyc1tpXSA9PT0gaG9va0Zvb2RJZCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXIubGlzdEZvb2RbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sc0Zvb2RUYWJsZVtpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwZkZvb2RbaG9va0Zvb2RJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxzRm9vZFRhYmxlW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSwwLjIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvbGQgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRDb3JyZWN0Kys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGJHb2xkLnN0cmluZyA9IHRoaXMuZ29sZCArICcgJztcbiAgICAgICAgY29uc29sZS5sb2coXCJLZW8gZHVuZyBuZSBcIix0aGlzLmNvdW50Q29ycmVjdCk7XG4gICAgICAgIGlmICghZm91bmRNYXRjaCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYWkgbWUgbWF5IHJvaVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5jb3VudENvcnJlY3QgPj0zKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0R2FtZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBcbiAgICBjb252ZXlvcihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IG5vZGUuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJGb29kKTtcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgaXRlbS5zZXREYXRhKHRoaXMuZGF0YVtyYW5kb21JbmRleF0pO1xuICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVOb2RlKG5vZGU6IGNjLk5vZGUsIGlkKSB7XG4gICAgICAgIG5vZGUuZGVzdHJveSgpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ob29rT2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy5ob29rT2JqZWN0c1tpXS5ub2RlID09IG5vZGUgJiYgdGhpcy5ob29rT2JqZWN0c1tpXS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaG9va09iamVjdHMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXNldEZvb2RUYWJsZSgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubHNGb29kVGFibGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5sc0Zvb2RUYWJsZVtpXTtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gXG4gICAgfVxuICAgIHJlc2V0R2FtZShpc0hhcHB5OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzZXR0aW5nIGdhbWUuLi5cIik7XG4gICAgICAgIHRoaXMuY291bnRDb3JyZWN0ID0gMDtcbiAgICAgICAgbGV0IHJlc2V0Q2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbU9yZGVyRm9vZCgpOyBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyT3JkZXJGb29kKCk7IFxuICAgICAgICAgICAgLy8gdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzEpO1xuICAgICAgICAgICAgLy8gdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpOyBcbiAgICAgICAgICAgIC8vIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8zKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGb29kVGFibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzSGFwcHkpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhhcHB5RWZmZWN0UGxheWVyTW92ZU91dChyZXNldENhbGxiYWNrKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2FkRWZmZWN0UGxheWVyTW92ZU91dChyZXNldENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uY2xpY2tCYWNrKCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==