
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
        _this.conveyor_1 = null;
        _this.conveyor_2 = null;
        _this.conveyor_3 = null;
        _this.prfFood = null;
        // LIFE-CYCLE CALLBACKS:
        _this.data = [0, 1, 2, 3, 4, 5];
        _this.playOrders = [];
        _this.arrResult = [];
        _this.indexData = 0;
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
        //this.renderFood();
        this.conveyor(this.conveyor_1);
        this.conveyor(this.conveyor_2);
        this.conveyor(this.conveyor_3);
        console.log("asdasdasd", this.arrResult);
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
    ShuShiCarbGame.prototype.conveyor = function (node) {
        for (var i = 0; i < node.childrenCount; i++) {
            var item = node.children[i].getComponent(ShuShiCarb_Food_1.default);
            item.setData(this.data[i]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUdsRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXNGQztRQWxGRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUdwQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLHdCQUF3QjtRQUN4QixVQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsdUJBQWlCLEdBQVEsSUFBSSxDQUFDO1FBQzlCLFlBQU0sR0FBSSxLQUFLLENBQUM7O1FBdURoQixpQkFBaUI7SUFDckIsQ0FBQzt1QkF0Rm9CLGNBQWM7SUErQi9CLCtCQUFNLEdBQU47UUFDSSxnQkFBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFL0IseUJBQXlCO1FBQ3pCLElBQUks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LENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNNO0lBcEJULGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FzRmxDO0lBQUQscUJBQUM7Q0F0RkQsQUFzRkMsQ0F0RjJDLEVBQUUsQ0FBQyxTQUFTLEdBc0Z2RDtrQkF0Rm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJDb252ZXlvciBmcm9tIFwiLi9HYW1lL1NodVNoaUNhcmIuQ29udmV5b3JcIjtcbmltcG9ydCBTaHVTaGlDYXJiRm9vZCBmcm9tIFwiLi9HYW1lL1NodVNoaUNhcmIuRm9vZFwiO1xuaW1wb3J0IFNodVNoaUNhcmJQbGF5ZXIgZnJvbSBcIi4vR2FtZS9TaHVTaGlDYXJiLlBsYXllclwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2h1U2hpQ2FyYkdhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmT3JkZXI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZGb29kOiBjYy5TcHJpdGVGcmFtZSBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udmV5b3JfMTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb252ZXlvcl8yOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnZleW9yXzM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZGb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgZGF0YSA9IFswLDEsMiwzLDQsNV07XG4gICAgcGxheU9yZGVycyA9IFtdO1xuICAgIGFyclJlc3VsdCA9IFtdO1xuICAgIGluZGV4RGF0YSA9IDA7XG5cbiAgICBudW1iZXJDb3VudGRvd24gPSA3O1xuICAgIGNvdW50ZG93bkludGVydmFsOiBhbnkgPSBudWxsO1xuICAgIGlzTW92ZSAgPSBmYWxzZTtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgXG4gICAgICAgIC8vIHRoaXMucmVuZGVyRm9vZE9kZXIoKTtcbiAgICAgICAgdGhpcy5yYW5kb21PcmRlckZvb2QoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5T3JkZXJzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJPcmRlckZvb2QoKTtcbiAgICAgICAgLy90aGlzLnJlbmRlckZvb2QoKTtcbiAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzEpO1xuICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMik7XG4gICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8zKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImFzZGFzZGFzZFwiLHRoaXMuYXJyUmVzdWx0KTtcbiAgICB9XG5cbiAgICAvLyByYW5kb21JZEZvb2QoYXJyLGNvdW50KSB7XG4gICAgLy8gICAgIGxldCBpZEZvb2QgPSBbXTtcbiAgICAvLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAvLyAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpO1xuICAgIC8vICAgICAgICAgaWRGb29kLnB1c2gocmFuZG9tSW5kZXgpO1xuICAgIC8vICAgICAgICAgYXJyLnNwbGljZShyYW5kb21JbmRleCwxKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gYXJyO1xuICAgIC8vIH1cbiAgICByYW5kb21PcmRlckZvb2QoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGZvb2RJZCA9IHRoaXMuZGF0YVtyYW5kb21JbmRleF07XG4gICAgICAgICAgICB0aGlzLnBsYXlPcmRlcnMucHVzaChmb29kSWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyT3JkZXJGb29kKCkge1xuICAgICAgICB0aGlzLmluZGV4RGF0YSsrXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXlPcmRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcmZQbGF5T3JkZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZk9yZGVyKS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYlBsYXllcilcblxuICAgICAgICAgICAgcHJmUGxheU9yZGVyLnNldERhdGEodGhpcy5wbGF5T3JkZXJzWzBdLHRoaXMucGxheU9yZGVyc1sxXSx0aGlzLnBsYXlPcmRlcnNbMl0sdGhpcy5pbmRleERhdGEpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHByZlBsYXlPcmRlci5ub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgXG5cbiAgICBjb252ZXlvcihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IG5vZGUuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJGb29kKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0RGF0YSh0aGlzLmRhdGFbaV0pO1xuICAgICAgIH1cbiAgICB9IFxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==