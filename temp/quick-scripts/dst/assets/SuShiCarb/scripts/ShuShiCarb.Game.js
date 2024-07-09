
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
        _this.lbCountDown = null;
        _this.listSpfFood = [];
        _this.nPlayer = null;
        _this.conveyor_1 = null;
        _this.conveyor_2 = null;
        _this.conveyor_3 = null;
        _this.prfFood = null;
        _this.lsFoodTable = [];
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
            _this.conveyor(_this.conveyor_1);
            _this.conveyor(_this.conveyor_2);
            _this.conveyor(_this.conveyor_3);
            _this.resetFoodTable();
        };
        if (isHappy) {
            this.player.happyEffectPlayerMoveOut(resetCallback);
        }
        else {
            this.player.sadEffectPlayerMoveOut(resetCallback);
        }
    };
    ShuShiCarbGame.prototype.start = function () {
    };
    var ShuShiCarbGame_1;
    ShuShiCarbGame.instance = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUdsRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW9LQztRQWhLRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGlCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUVwQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0Isd0JBQXdCO1FBQ3hCLFVBQUksR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsZ0JBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsaUJBQVcsR0FBa0MsRUFBRSxDQUFDO1FBQ2hELGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQix1QkFBaUIsR0FBUSxJQUFJLENBQUM7UUFDOUIsWUFBTSxHQUFJLEtBQUssQ0FBQztRQUNoQixZQUFNLEdBQUcsSUFBSSxDQUFDOztRQWdJZCxp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QUFDO21EQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1M7SUF6QlYsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW9LbEM7SUFBRCxxQkFBQztDQXBLRCxBQW9LQyxDQXBLMkMsRUFBRSxDQUFDLFNBQVMsR0FvS3ZEO2tCQXBLb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkNvbnZleW9yIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Db252ZXlvclwiO1xuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Gb29kXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYlBsYXllciBmcm9tIFwiLi9HYW1lL1NodVNoaUNhcmIuUGxheWVyXCI7XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTaHVTaGlDYXJiR2FtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZPcmRlcjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJDb3VudERvd246IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG5cbiAgICBsaXN0U3BmRm9vZDogY2MuU3ByaXRlRnJhbWUgW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuUGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb252ZXlvcl8xOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnZleW9yXzI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udmV5b3JfMzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkZvb2Q6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsc0Zvb2RUYWJsZTogY2MuTm9kZVtdPSBbXTtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBkYXRhID0gWzAsMSwyLDMsNCw1XTtcbiAgICBwbGF5T3JkZXJzID0gW107XG4gICAgaG9va09iamVjdHM6IHtub2RlOmNjLk5vZGUsIGlkOiBudW1iZXJ9IFtdID0gW107XG4gICAgaW5kZXhEYXRhID0gMDtcbiAgICBjb3VudENvcnJlY3QgPSAwO1xuICAgIG51bWJlckNvdW50ZG93biA9IDc7XG4gICAgY291bnRkb3duSW50ZXJ2YWw6IGFueSA9IG51bGw7XG4gICAgaXNNb3ZlICA9IGZhbHNlO1xuICAgIHBsYXllciA9IG51bGw7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgXG4gICAgICAgIC8vIHRoaXMucmVuZGVyRm9vZE9kZXIoKTtcbiAgICAgICAgdGhpcy5yYW5kb21PcmRlckZvb2QoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5T3JkZXJzKTtcbiAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzEpO1xuICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMik7XG4gICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJPcmRlckZvb2QoKTtcbiAgICAgICAgLy90aGlzLnJlbmRlckZvb2QoKTsgICAgICBcbiAgICB9XG5cbiAgIFxuICAgIC8vIHJhbmRvbUlkRm9vZChhcnIsY291bnQpIHtcbiAgICAvLyAgICAgbGV0IGlkRm9vZCA9IFtdO1xuICAgIC8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG4gICAgLy8gICAgICAgICBpZEZvb2QucHVzaChyYW5kb21JbmRleCk7XG4gICAgLy8gICAgICAgICBhcnIuc3BsaWNlKHJhbmRvbUluZGV4LDEpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBhcnI7XG4gICAgLy8gfVxuICAgIHJhbmRvbU9yZGVyRm9vZCgpIHtcbiAgICAgICAgdGhpcy5wbGF5T3JkZXJzID0gW107IFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBmb29kSWQgPSB0aGlzLmRhdGFbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5wbGF5T3JkZXJzLnB1c2goZm9vZElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlck9yZGVyRm9vZCgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnBsYXllci5ub2RlLmRlc3Ryb3koKTsgLy8gRGVzdHJveSBwcmV2aW91cyBwbGF5ZXIgbm9kZVxuICAgICAgICAvLyB9XG4gICAgICAgXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZPcmRlcikuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJQbGF5ZXIpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXIubGlzdEZvb2QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmb29kID0gdGhpcy5wbGF5ZXIubGlzdEZvb2RbaV1cbiAgICAgICAgICAgIGZvb2QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZGb29kW3RoaXMucGxheU9yZGVyc1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleERhdGErKztcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0RGF0YSh0aGlzLmluZGV4RGF0YSk7XG4gICAgICAgIHRoaXMublBsYXllci5hZGRDaGlsZCh0aGlzLnBsYXllci5ub2RlKTtcbiAgICB9XG5cbiAgICBjaGVja0NvcnJlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmhvb2tPYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJodXQgaGV0IG1lIHJvaVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaG9va0Zvb2RJZCA9IHRoaXMuaG9va09iamVjdHNbMF0uaWQ7XG4gICAgICAgIGxldCBmb3VuZE1hdGNoID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5T3JkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5T3JkZXJzW2ldID09PSBob29rRm9vZElkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpc3RGb29kW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxzRm9vZFRhYmxlW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmRm9vZFtob29rRm9vZElkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHNGb29kVGFibGVbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSwwLjIpO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3VuZE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudENvcnJlY3QrKztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJLZW8gZHVuZyBuZSBcIix0aGlzLmNvdW50Q29ycmVjdCk7XG4gICAgICAgIGlmICghZm91bmRNYXRjaCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYWkgbWUgbWF5IHJvaVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5jb3VudENvcnJlY3QgPj0zKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0R2FtZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIGNvbnZleW9yKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gbm9kZS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkZvb2QpO1xuICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICBpdGVtLnNldERhdGEodGhpcy5kYXRhW3JhbmRvbUluZGV4XSk7XG4gICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZU5vZGUobm9kZTogY2MuTm9kZSwgaWQpIHtcbiAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmhvb2tPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLmhvb2tPYmplY3RzW2ldLm5vZGUgPT0gbm9kZSAmJiB0aGlzLmhvb2tPYmplY3RzW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rT2JqZWN0cy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJlc2V0Rm9vZFRhYmxlKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sc0Zvb2RUYWJsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmxzRm9vZFRhYmxlW2ldO1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgcmVzZXRHYW1lKGlzSGFwcHk6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNldHRpbmcgZ2FtZS4uLlwiKTtcbiAgICAgICAgdGhpcy5jb3VudENvcnJlY3QgPSAwO1xuICAgICAgICBsZXQgcmVzZXRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9tT3JkZXJGb29kKCk7IFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJPcmRlckZvb2QoKTsgXG4gICAgICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMSk7XG4gICAgICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMik7IFxuICAgICAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzMpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEZvb2RUYWJsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNIYXBweSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGFwcHlFZmZlY3RQbGF5ZXJNb3ZlT3V0KHJlc2V0Q2FsbGJhY2spO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5zYWRFZmZlY3RQbGF5ZXJNb3ZlT3V0KHJlc2V0Q2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19