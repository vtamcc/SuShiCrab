
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUdsRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQThIQztRQTFIRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixrQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUU3QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUdwQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLHdCQUF3QjtRQUN4QixVQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGVBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVmLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLHVCQUFpQixHQUFRLElBQUksQ0FBQztRQUM5QixZQUFNLEdBQUksS0FBSyxDQUFDOztRQThGaEIsaUJBQWlCO0lBQ3JCLENBQUM7dUJBOUhvQixjQUFjO0lBZ0MvQiwrQkFBTSxHQUFOO1FBQ0ksZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFB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TDtJQUVBLENBQUM7O0lBekhhLHVCQUFRLEdBQW1CLElBQUksQ0FBQztJQUU5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDVTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNXO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDTTtJQXJCVCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBOEhsQztJQUFELHFCQUFDO0NBOUhELEFBOEhDLENBOUgyQyxFQUFFLENBQUMsU0FBUyxHQThIdkQ7a0JBOUhvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTaHVTaGlDYXJiQ29udmV5b3IgZnJvbSBcIi4vR2FtZS9TaHVTaGlDYXJiLkNvbnZleW9yXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vR2FtZS9TaHVTaGlDYXJiLkZvb2RcIjtcbmltcG9ydCBTaHVTaGlDYXJiUGxheWVyIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5QbGF5ZXJcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuRm9vZDE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Gb29kMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkZvb2QzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Q29udmV5b3I6IGNjLk5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmT3JkZXI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZGb29kOiBjYy5TcHJpdGVGcmFtZSBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udmV5b3JfMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZGb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgZGF0YSA9IFswLDEsMiwzLDQsNV07XG4gICAgcGxheU9yZGVycyA9IFtdO1xuXG4gICAgaW5kZXhEYXRhID0gLTE7XG5cbiAgICBudW1iZXJDb3VudGRvd24gPSA3O1xuICAgIGNvdW50ZG93bkludGVydmFsOiBhbnkgPSBudWxsO1xuICAgIGlzTW92ZSAgPSBmYWxzZTtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgXG4gICAgICAgIC8vIHRoaXMucmVuZGVyRm9vZE9kZXIoKTtcbiAgICAgICAgdGhpcy5yYW5kb21PcmRlckZvb2QoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5T3JkZXJzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJPcmRlckZvb2QoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGb29kKCk7XG4gICAgICAgIC8vdGhpcy5jb252ZXlvcigpO1xuXG4gICAgfVxuXG4gICAgLy8gcmFuZG9tSWRGb29kKGFycixjb3VudCkge1xuICAgIC8vICAgICBsZXQgaWRGb29kID0gW107XG4gICAgLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAvLyAgICAgICAgIGlkRm9vZC5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICAvLyAgICAgICAgIGFyci5zcGxpY2UocmFuZG9tSW5kZXgsMSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIGFycjtcbiAgICAvLyB9XG4gICAgcmFuZG9tT3JkZXJGb29kKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBmb29kSWQgPSB0aGlzLmRhdGFbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5wbGF5T3JkZXJzLnB1c2goZm9vZElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlck9yZGVyRm9vZCgpIHtcbiAgICAgICAgdGhpcy5pbmRleERhdGErK1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5T3JkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJmUGxheU9yZGVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZPcmRlcikuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJQbGF5ZXIpXG5cbiAgICAgICAgICAgIHByZlBsYXlPcmRlci5zZXREYXRhKHRoaXMucGxheU9yZGVyc1swXSx0aGlzLnBsYXlPcmRlcnNbMV0sdGhpcy5wbGF5T3JkZXJzWzJdLHRoaXMuaW5kZXhEYXRhKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwcmZQbGF5T3JkZXIubm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJGb29kKCkge1xuICAgICAgICBsZXQgaXRlbUZvb2QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkZvb2QpLmdldENvbXBvbmVudChTaHVTaGlDYXJiRm9vZClcbiAgICAgICAgaXRlbUZvb2Quc2V0RGF0YSgxKTtcbiAgICAgICAgdGhpcy5jb252ZXlvcl8xLmFkZENoaWxkKGl0ZW1Gb29kLm5vZGUpO1xuICAgIH1cbiAgICAvLyBzdGFydENvdW50RG93bigpIHtcbiAgICAvLyAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcbiAgICAvLyAgICAgdGhpcy5jb3VudGRvd25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMubnVtYmVyQ291bnRkb3duLS07XG4gICAgLy8gICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xuICAgIC8vICAgICAgICAgaWYgKHRoaXMubnVtYmVyQ291bnRkb3duIDw9IDApIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0b3BDb3VudERvd24oKTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm9uQ291bnREb3duRW5kR2FtZSgpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9LCAxMDAwKVxuICAgIC8vIH1cblxuICAgIC8vIHN0b3BDb3VudERvd24oKSB7XG4gICAgLy8gICAgIGlmICh0aGlzLmNvdW50ZG93bkludGVydmFsKSB7XG4gICAgLy8gICAgICAgICBjbGVhckludGVydmFsKHRoaXMuY291bnRkb3duSW50ZXJ2YWwpO1xuICAgIC8vICAgICAgICAgdGhpcy5jb3VudGRvd25JbnRlcnZhbCA9IG51bGw7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBvbkNvdW50RG93bkVuZEdhbWUoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiWW91IExvc3RcIilcbiAgICAvLyB9XG4gICAgLy8gdXBkYXRlQ291bnREb3duKCkge1xuICAgIC8vICAgICB0aGlzLmxiQ291bnREb3duLnN0cmluZyA9IHRoaXMubnVtYmVyQ291bnRkb3duICsgXCIgXCI7XG4gICAgLy8gfVxuICAgIC8vIHJlbmRlckZvb2RPZGVyKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmlkT2RlckZvb2QpO1xuICAgIC8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgcE9yZGVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZPcmRlcikuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJQbGF5ZXIpXG4gICAgLy8gICAgICAgICBwT3JkZXIuc2V0RGF0YSh0aGlzLmlkT2RlckZvb2RbaV0sMSk7XG4gICAgLy8gICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocE9yZGVyLm5vZGUpXG4gICAgLy8gICAgIH1cbiAgICAgICAgXG4gICAgLy8gfVxuXG4gICAgLy8gY29udmV5b3IoKSB7XG4gICAgLy8gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENvbnZleW9yLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgZHQgPSB0aGlzLmxpc3RDb252ZXlvcltpXTtcbiAgICAvLyAgICAgICAgIGxldCBpdGVtID0gZHQuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJDb252ZXlvcikubGlzdE5vZGVDb252ZXlvcl8xO1xuICAgIC8vICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGl0ZW0ubGVuZ3RoOyBqKyspIHtcbiAgICAvLyAgICAgICAgICAgICBsZXQgZm9vZCA9IGl0ZW1bal07XG4gICAgLy8gICAgICAgICAgICAgZm9vZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwZkZvb2RbdGhpcy5wbGF5T3JkZXJzW2pdXTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICB9XG4gICAgLy8gfVxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==