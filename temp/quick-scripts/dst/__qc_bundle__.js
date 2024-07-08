
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/SuShiCarb/scripts/Game/ShuShiCarb.Conveyor');
require('./assets/SuShiCarb/scripts/Game/ShuShiCarb.Food');
require('./assets/SuShiCarb/scripts/Game/ShuShiCarb.Hook');
require('./assets/SuShiCarb/scripts/Game/ShuShiCarb.Player');
require('./assets/SuShiCarb/scripts/Game/ShuShiCard.CollierManager');
require('./assets/SuShiCarb/scripts/ShuShiCarb.Game');

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
//------QC-SOURCE-SPLIT------

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
        this.node.addChild(this.player.node);
    };
    ShuShiCarbGame.prototype.checkCorrect = function () {
        if (this.hookObjects.length === 0) {
            console.log("hut het me roi");
            return;
        }
        var hookFoodId = this.hookObjects[0].id;
        var foundMatch = false;
        for (var i = 0; i < this.playOrders.length; i++) {
            if (this.playOrders[i] === hookFoodId) {
                if (!this.player.listFood[i].getChildByName("tick").active) {
                    this.player.listFood[i].getChildByName("tick").active = true;
                    foundMatch = true;
                    this.countCorrect++;
                    break;
                }
            }
        }
        console.log("Keo dung ne ", this.countCorrect);
        if (!foundMatch) {
            console.log("sai me may roi");
        }
        if (this.countCorrect >= 3) {
            this.resetGame();
        }
    };
    ShuShiCarbGame.prototype.conveyor = function (node) {
        for (var i = 0; i < node.childrenCount; i++) {
            var item = node.children[i].getComponent(ShuShiCarb_Food_1.default);
            item.setData(this.data[i]);
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
    ShuShiCarbGame.prototype.resetGame = function () {
        var _this = this;
        console.log("Resetting game...");
        this.countCorrect = 0;
        this.player.showEffectPlayerMoveOut(function () {
            _this.randomOrderFood();
            _this.renderOrderFood();
            _this.conveyor(_this.conveyor_1);
            _this.conveyor(_this.conveyor_2);
            _this.conveyor(_this.conveyor_3);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxTaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUdsRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQThJQztRQTFJRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUdwQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLHdCQUF3QjtRQUN4QixVQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFXLEdBQWtDLEVBQUUsQ0FBQztRQUNoRCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsdUJBQWlCLEdBQVEsSUFBSSxDQUFDO1FBQzlCLFlBQU0sR0FBSSxLQUFLLENBQUM7UUFDaEIsWUFBTSxHQUFHLElBQUksQ0FBQzs7UUE4R2QsaUJBQWlCO0lBQ3JCLENBQUM7dUJBOUlvQixjQUFjO0lBaUMvQiwrQkFBTSxHQUFOO1FBQ0ksZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRS9CLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLDBCQUEwQjtJQUM5QixDQUFDO0lBR0QsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsb0VBQW9FO0lBQ3BFLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixJQUFJO0lBQ0osd0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDSSxxQkFBcUI7UUFDckIsa0VBQWtFO1FBQ2xFLElBQUk7UUFFSixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQywyQkFBZ0IsQ0FBQyxDQUFDO1FBQzNFLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25GO1FBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLE9BQU87U0FDVjtRQUNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hDLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUM3RCxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3BCLE1BQU07aUJBQ1Q7YUFDSjtTQUNKO1FBR0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFHLElBQUksQ0FBQyxZQUFZLElBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFHRCxpQ0FBUSxHQUFSLFVBQVMsSUFBYTtRQUNuQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyx5QkFBYyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7SUFDSixDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLElBQWEsRUFBRSxFQUFFO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUNoQztTQUNKO0lBRUwsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFBQSxpQkFVQztRQVRHLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1lBQ2hDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsOEJBQUssR0FBTDtJQUNBLENBQUM7O0lBeklhLHVCQUFRLEdBQW1CLElBQUksQ0FBQztJQUU5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt1REFDVztJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNNO0lBcEJULGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E4SWxDO0lBQUQscUJBQUM7Q0E5SUQsQUE4SUMsQ0E5STJDLEVBQUUsQ0FBQyxTQUFTLEdBOEl2RDtrQkE5SW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU2h1U2hpQ2FyYkNvbnZleW9yIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Db252ZXlvclwiO1xyXG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vR2FtZS9TaHVTaGlDYXJiLkZvb2RcIjtcclxuaW1wb3J0IFNodVNoaUNhcmJQbGF5ZXIgZnJvbSBcIi4vR2FtZS9TaHVTaGlDYXJiLlBsYXllclwiO1xyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmZPcmRlcjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsaXN0U3BmRm9vZDogY2MuU3ByaXRlRnJhbWUgW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnZleW9yXzE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29udmV5b3JfMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb252ZXlvcl8zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJmRm9vZDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGRhdGEgPSBbMCwxLDIsMyw0LDVdO1xyXG4gICAgcGxheU9yZGVycyA9IFtdO1xyXG4gICAgaG9va09iamVjdHM6IHtub2RlOmNjLk5vZGUsIGlkOiBudW1iZXJ9IFtdID0gW107XHJcbiAgICBpbmRleERhdGEgPSAwO1xyXG4gICAgY291bnRDb3JyZWN0ID0gMDtcclxuICAgIG51bWJlckNvdW50ZG93biA9IDc7XHJcbiAgICBjb3VudGRvd25JbnRlcnZhbDogYW55ID0gbnVsbDtcclxuICAgIGlzTW92ZSAgPSBmYWxzZTtcclxuICAgIHBsYXllciA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICBcclxuICAgICAgICAvLyB0aGlzLnJlbmRlckZvb2RPZGVyKCk7XHJcbiAgICAgICAgdGhpcy5yYW5kb21PcmRlckZvb2QoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXlPcmRlcnMpO1xyXG4gICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8xKTtcclxuICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMik7XHJcbiAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyT3JkZXJGb29kKCk7XHJcbiAgICAgICAgLy90aGlzLnJlbmRlckZvb2QoKTsgICAgICBcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgLy8gcmFuZG9tSWRGb29kKGFycixjb3VudCkge1xyXG4gICAgLy8gICAgIGxldCBpZEZvb2QgPSBbXTtcclxuICAgIC8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcclxuICAgIC8vICAgICAgICAgaWRGb29kLnB1c2gocmFuZG9tSW5kZXgpO1xyXG4gICAgLy8gICAgICAgICBhcnIuc3BsaWNlKHJhbmRvbUluZGV4LDEpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gYXJyO1xyXG4gICAgLy8gfVxyXG4gICAgcmFuZG9tT3JkZXJGb29kKCkge1xyXG4gICAgICAgIHRoaXMucGxheU9yZGVycyA9IFtdOyBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgZm9vZElkID0gdGhpcy5kYXRhW3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5T3JkZXJzLnB1c2goZm9vZElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyT3JkZXJGb29kKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnBsYXllcikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXllci5ub2RlLmRlc3Ryb3koKTsgLy8gRGVzdHJveSBwcmV2aW91cyBwbGF5ZXIgbm9kZVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZPcmRlcikuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJQbGF5ZXIpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllci5saXN0Rm9vZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZm9vZCA9IHRoaXMucGxheWVyLmxpc3RGb29kW2ldXHJcbiAgICAgICAgICAgIGZvb2QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZGb29kW3RoaXMucGxheU9yZGVyc1tpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5kZXhEYXRhKys7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0RGF0YSh0aGlzLmluZGV4RGF0YSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMucGxheWVyLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29ycmVjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ob29rT2JqZWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJodXQgaGV0IG1lIHJvaVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaG9va0Zvb2RJZCA9IHRoaXMuaG9va09iamVjdHNbMF0uaWQ7XHJcbiAgICAgICAgbGV0IGZvdW5kTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheU9yZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5T3JkZXJzW2ldID09PSBob29rRm9vZElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyLmxpc3RGb29kW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZE1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiS2VvIGR1bmcgbmUgXCIsdGhpcy5jb3VudENvcnJlY3QpO1xyXG4gICAgICAgIGlmICghZm91bmRNYXRjaCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhaSBtZSBtYXkgcm9pXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmNvdW50Q29ycmVjdCA+PTMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBjb252ZXlvcihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBub2RlLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChTaHVTaGlDYXJiRm9vZCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0RGF0YSh0aGlzLmRhdGFbaV0pO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZU5vZGUobm9kZTogY2MuTm9kZSwgaWQpIHtcclxuICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ob29rT2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLmhvb2tPYmplY3RzW2ldLm5vZGUgPT0gbm9kZSAmJiB0aGlzLmhvb2tPYmplY3RzW2ldLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tPYmplY3RzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNldEdhbWUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNldHRpbmcgZ2FtZS4uLlwiKTtcclxuICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2hvd0VmZmVjdFBsYXllck1vdmVPdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbU9yZGVyRm9vZCgpOyBcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJPcmRlckZvb2QoKTsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8xKTtcclxuICAgICAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpOyBcclxuICAgICAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCarb.Hook.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd3e4+aHHVDjZsBsncFNldv', 'ShuShiCarb.Hook');
// SuShiCarb/scripts/Game/ShuShiCarb.Hook.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbHook = /** @class */ (function (_super) {
    __extends(ShuShiCarbHook, _super);
    function ShuShiCarbHook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hookRope = null;
        _this.hookSpriteOpen = null;
        _this.hookSpriteClose = null;
        _this.hookHead = null;
        _this.hookSpeed = 400;
        _this.hookState = 0;
        _this.hookHeadBaseY = 80;
        _this.hookRopeBaseWidth = 0;
        return _this;
    }
    ShuShiCarbHook_1 = ShuShiCarbHook;
    // initialLength: number = 100;  
    // maxLength: number = 750;      
    // growing: boolean = false;
    ShuShiCarbHook.prototype.onLoad = function () {
        ShuShiCarbHook_1.instance = this;
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        //  this.hookHeadBaseY = this.hookHeadBaseY || this.hookHead.y;
        //  this.hookRopeBaseWidth = this.hookRopeBaseWidth || this.hookRope.width;
    };
    ShuShiCarbHook.prototype.initHook = function () {
        this.hookHead.y = this.hookHeadBaseY;
        this.hookRope.width = this.hookRopeBaseWidth;
    };
    ShuShiCarbHook.prototype.start = function () {
        this.initHook();
    };
    ShuShiCarbHook.prototype.setHookState = function (hookState) {
        this.hookState = hookState;
        console.log("hookState ", hookState);
    };
    ShuShiCarbHook.prototype.setHookSprite = function (isOpen) {
        this.hookSpriteClose.active = !isOpen;
        this.hookSpriteOpen.active = isOpen;
    };
    ShuShiCarbHook.prototype.onMouseDown = function (event) {
        if (this.hookState !== 0) {
            return;
        }
        this.hookState = 1;
        this.mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(event.getLocationX()));
        console.log(this.mousePos);
        this.node.setPosition(this.mousePos);
    };
    ShuShiCarbHook.prototype.moveHookHead = function (dt) {
        this.hookHead.y += dt * 30;
        this.hookRope.width -= dt * 40;
    };
    ShuShiCarbHook.prototype.getHookHeadGlobalPos = function () {
        return this.node.convertToWorldSpaceAR(cc.v2(this.mousePos, this.hookHead.y - 25));
    };
    ShuShiCarbHook.prototype.onDestroy = function () {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    };
    ShuShiCarbHook.prototype.update = function (dt) {
        this.setHookSprite(true);
        switch (this.hookState) {
            case 1:
                if (this.hookHead.y) {
                    this.moveHookHead(50 * dt);
                    if (this.hookHead.y >= 1000) {
                        this.hookState = 2;
                    }
                }
                break;
            case 2:
                if (this.hookHead.y) {
                    this.moveHookHead(-50 * dt);
                    this.hookHead.getComponent(cc.BoxCollider).enabled = false;
                    if (this.hookHead.y < 0) {
                        this.hookHead.y = 100;
                        this.hookRope.width = 50;
                        this.hookState = 0;
                        this.hookHead.getComponent(cc.BoxCollider).enabled = true;
                    }
                }
                this.setHookSprite(false);
                break;
            case 0:
            default:
                break;
        }
    };
    // update(dt: number) {
    //     if (this.growing) {
    //         if (this.node.height < this.maxLength) {
    //             this.node.height += 200 * 0.2;
    //             this.node.getComponent(cc.BoxCollider).size.height += 200 * 0.2;
    //         } else {
    //             this.growing = false;
    //             this.node.height = this.initialLength;
    //             this.node.getComponent(cc.BoxCollider).size.height = this.initialLength;
    //         }
    //     }
    // }
    ShuShiCarbHook.prototype.onCollisionEnter = function (other) {
        // // Lấy bounding box của thanh kéo
        // const dragBarBoundingBox = this.node.getBoundingBoxToWorld();
        // // Lặp qua tất cả các món ăn để kiểm tra va chạm
        // for (let i = 0; i < this.foodContainer.children.length; i++) {
        //     const foodItem = this.foodContainer.children[i];
        //     const foodBoundingBox = foodItem.getBoundingBoxToWorld();
        //     if (dragBarBoundingBox.intersects(foodBoundingBox)) {
        //         // Nếu va chạm, kéo món ăn về vị trí nhất định
        //         foodItem.setPosition(cc.v2(100, 100));  // Ví dụ đặt về vị trí (100, 100)
        //         break;  // Dừng lại sau khi tìm thấy va chạm đầu tiên
        //     }
        // }
    };
    var ShuShiCarbHook_1;
    ShuShiCarbHook.instance = null;
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookRope", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookSpriteOpen", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookSpriteClose", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookHead", void 0);
    ShuShiCarbHook = ShuShiCarbHook_1 = __decorate([
        ccclass
    ], ShuShiCarbHook);
    return ShuShiCarbHook;
}(cc.Component));
exports.default = ShuShiCarbHook;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxTaHVTaGlDYXJiLkhvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE0SUM7UUF6SUcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUdoQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBRyxHQUFHLENBQUM7UUFDaEIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUVkLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLHVCQUFpQixHQUFXLENBQUMsQ0FBQzs7SUEwSGxDLENBQUM7dUJBNUlvQixjQUFjO0lBcUIvQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1QiwrQkFBTSxHQUFOO1FBQ0ksZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakYsK0RBQStEO1FBQy9ELDJFQUEyRTtJQUMvRSxDQUFDO0lBR0QsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFB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cUJBQUM7Q0E1SUQsQUE0SUMsQ0E1STJDLEVBQUUsQ0FBQyxTQUFTLEdBNEl2RDtrQkE1SW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJIb29rIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJIb29rID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaG9va1JvcGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaG9va1Nwcml0ZU9wZW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaG9va1Nwcml0ZUNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhvb2tIZWFkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgaG9va1NwZWVkID0gNDAwO1xyXG4gICAgaG9va1N0YXRlID0gMDtcclxuXHJcbiAgICBob29rSGVhZEJhc2VZOiBudW1iZXIgPSA4MDtcclxuICAgIGhvb2tSb3BlQmFzZVdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgXHJcbiAgICBtb3VzZVBvcztcclxuICAgIC8vIGluaXRpYWxMZW5ndGg6IG51bWJlciA9IDEwMDsgIFxyXG4gICAgLy8gbWF4TGVuZ3RoOiBudW1iZXIgPSA3NTA7ICAgICAgXHJcbiAgICAvLyBncm93aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMub25Nb3VzZURvd24sIHRoaXMpOyAgXHJcbiAgICAgICAgLy8gIHRoaXMuaG9va0hlYWRCYXNlWSA9IHRoaXMuaG9va0hlYWRCYXNlWSB8fCB0aGlzLmhvb2tIZWFkLnk7XHJcbiAgICAgICAgLy8gIHRoaXMuaG9va1JvcGVCYXNlV2lkdGggPSB0aGlzLmhvb2tSb3BlQmFzZVdpZHRoIHx8IHRoaXMuaG9va1JvcGUud2lkdGg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluaXRIb29rKCkgIHtcclxuICAgICAgICB0aGlzLmhvb2tIZWFkLnkgID0gdGhpcy5ob29rSGVhZEJhc2VZO1xyXG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSB0aGlzLmhvb2tSb3BlQmFzZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEhvb2soKTtcclxuICAgIH1cclxuICAgIHNldEhvb2tTdGF0ZShob29rU3RhdGUpIHtcclxuICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IGhvb2tTdGF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhvb2tTdGF0ZSBcIixob29rU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhvb2tTcHJpdGUoaXNPcGVuOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5ob29rU3ByaXRlQ2xvc2UuYWN0aXZlID0gIWlzT3BlbjtcclxuICAgICAgICB0aGlzLmhvb2tTcHJpdGVPcGVuLmFjdGl2ZSA9IGlzT3BlbjtcclxuICAgIH1cclxuIFxyXG5cclxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudE1vdXNlKSB7XHJcbiAgICAgICAgaWYodGhpcy5ob29rU3RhdGUgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IDE7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoZXZlbnQuZ2V0TG9jYXRpb25YKCkpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3VzZVBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubW91c2VQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVIb29rSGVhZChkdCkge1xyXG4gICAgICAgIHRoaXMuaG9va0hlYWQueSArPSBkdCAqIDMwO1xyXG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggLT0gZHQgKiA0MDtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgXHJcblxyXG4gICAgZ2V0SG9va0hlYWRHbG9iYWxQb3MoKTogY2MuVmVjMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIodGhpcy5tb3VzZVBvcywgdGhpcy5ob29rSGVhZC55IC0gMjUpKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLnNldEhvb2tTcHJpdGUodHJ1ZSk7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMuaG9va1N0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUhvb2tIZWFkKDUwICogZHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSA+PSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1N0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUhvb2tIZWFkKC01MCAgKiBkdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rSGVhZC5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkgIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tIZWFkLnkgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSA1MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rU3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tIZWFkLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SG9va1Nwcml0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5ncm93aW5nKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLm5vZGUuaGVpZ2h0IDwgdGhpcy5tYXhMZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgKz0gMjAwICogMC4yO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuc2l6ZS5oZWlnaHQgKz0gMjAwICogMC4yO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ncm93aW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5pbml0aWFsTGVuZ3RoO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuc2l6ZS5oZWlnaHQgPSB0aGlzLmluaXRpYWxMZW5ndGg7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcikge1xyXG4gICAgICAgIC8vIC8vIEzhuqV5IGJvdW5kaW5nIGJveCBj4bunYSB0aGFuaCBrw6lvXHJcbiAgICAgICAgLy8gY29uc3QgZHJhZ0JhckJvdW5kaW5nQm94ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xyXG5cclxuICAgICAgICAvLyAvLyBM4bq3cCBxdWEgdOG6pXQgY+G6oyBjw6FjIG3Ds24gxINuIMSR4buDIGtp4buDbSB0cmEgdmEgY2jhuqFtXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZvb2RDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgZm9vZEl0ZW0gPSB0aGlzLmZvb2RDb250YWluZXIuY2hpbGRyZW5baV07XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGZvb2RCb3VuZGluZ0JveCA9IGZvb2RJdGVtLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xyXG5cclxuICAgICAgICAvLyAgICAgaWYgKGRyYWdCYXJCb3VuZGluZ0JveC5pbnRlcnNlY3RzKGZvb2RCb3VuZGluZ0JveCkpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIE7hur91IHZhIGNo4bqhbSwga8OpbyBtw7NuIMSDbiB24buBIHbhu4sgdHLDrSBuaOG6pXQgxJHhu4tuaFxyXG4gICAgICAgIC8vICAgICAgICAgZm9vZEl0ZW0uc2V0UG9zaXRpb24oY2MudjIoMTAwLCAxMDApKTsgIC8vIFbDrSBk4bulIMSR4bq3dCB24buBIHbhu4sgdHLDrSAoMTAwLCAxMDApXHJcbiAgICAgICAgLy8gICAgICAgICBicmVhazsgIC8vIEThu6tuZyBs4bqhaSBzYXUga2hpIHTDrG0gdGjhuqV5IHZhIGNo4bqhbSDEkeG6p3UgdGnDqm5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCarb.Conveyor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'feab3o200JDbYSI7NRNPnpz', 'ShuShiCarb.Conveyor');
// SuShiCarb/scripts/Game/ShuShiCarb.Conveyor.ts

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
var ShuShiCarb_Food_1 = require("./ShuShiCarb.Food");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbConveyor = /** @class */ (function (_super) {
    __extends(ShuShiCarbConveyor, _super);
    function ShuShiCarbConveyor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemFood_1 = [];
        _this.idFood = 0;
        _this.isMove = false;
        return _this;
    }
    ShuShiCarbConveyor.prototype.update = function () {
        if (this.isMove) {
            return;
        }
        if (this.idFood == 0) {
            if (this.node.x >= 1200) {
                this.resetPos();
            }
            this.node.x += 4;
        }
        else if (this.idFood == 1) {
            if (this.node.x <= -1800) {
                this.node.x = 600;
            }
            this.node.x -= 3;
        }
        else if (this.idFood == 2) {
            if (this.node.x >= 1200) {
                this.resetPos();
            }
            this.node.x += 3;
        }
    };
    ShuShiCarbConveyor.prototype.resetPos = function () {
        this.node.x = -900;
    };
    __decorate([
        property(ShuShiCarb_Food_1.default)
    ], ShuShiCarbConveyor.prototype, "itemFood_1", void 0);
    __decorate([
        property
    ], ShuShiCarbConveyor.prototype, "idFood", void 0);
    ShuShiCarbConveyor = __decorate([
        ccclass
    ], ShuShiCarbConveyor);
    return ShuShiCarbConveyor;
}(cc.Component));
exports.default = ShuShiCarbConveyor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxTaHVTaGlDYXJiLkNvbnZleW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLHFEQUErQztBQUV6QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQW1DQztRQWhDQyxnQkFBVSxHQUFxQixFQUFFLENBQUM7UUFFbEMsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixZQUFNLEdBQUcsS0FBSyxDQUFDOztJQTZCakIsQ0FBQztJQTNCRSxtQ0FBTSxHQUFOO1FBQ0EsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsT0FBTztTQUNUO1FBQ0QsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2xCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO2FBQUssSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN4QixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUE7YUFDbkI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7YUFDSSxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbEI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7SUFFRixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUEvQkQ7UUFEQyxRQUFRLENBQUMseUJBQWMsQ0FBQzswREFDUztJQUVsQztRQURDLFFBQVE7c0RBQ1U7SUFMQSxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQW1DdEM7SUFBRCx5QkFBQztDQW5DRCxBQW1DQyxDQW5DK0MsRUFBRSxDQUFDLFNBQVMsR0FtQzNEO2tCQW5Db0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi9TaHVTaGlDYXJiLkdhbWVcIjtcclxuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL1NodVNoaUNhcmIuRm9vZFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiQ29udmV5b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICBAcHJvcGVydHkoU2h1U2hpQ2FyYkZvb2QpXHJcbiAgaXRlbUZvb2RfMTogU2h1U2hpQ2FyYkZvb2RbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eVxyXG4gIGlkRm9vZDogbnVtYmVyID0gMDtcclxuICBpc01vdmUgPSBmYWxzZTtcclxuICAgXHJcbiAgIHVwZGF0ZSgpIHtcclxuICAgaWYodGhpcy5pc01vdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbiAgIGlmKHRoaXMuaWRGb29kID09IDApIHtcclxuICAgICAgaWYodGhpcy5ub2RlLnggPj0gMTIwMCkge1xyXG4gICAgICAgICB0aGlzLnJlc2V0UG9zKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ub2RlLnggKz0gNDtcclxuICAgfWVsc2UgaWYodGhpcy5pZEZvb2QgPT0gMSkge1xyXG4gICAgICBpZih0aGlzLm5vZGUueCA8PSAtMTgwMCkge1xyXG4gICAgICAgICB0aGlzLm5vZGUueCA9IDYwMFxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubm9kZS54IC09IDM7XHJcbiAgIH1cclxuICAgZWxzZSBpZih0aGlzLmlkRm9vZCA9PSAyKSB7XHJcbiAgICAgIGlmKHRoaXMubm9kZS54ID49IDEyMDApIHtcclxuICAgICAgICAgdGhpcy5yZXNldFBvcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubm9kZS54ICs9IDM7XHJcbiAgIH1cclxuICBcclxuICB9XHJcblxyXG4gIHJlc2V0UG9zKCkge1xyXG4gICB0aGlzLm5vZGUueCA9IC05MDA7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCard.CollierManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07571YrTBpHQZ4RW7KNcoYv', 'ShuShiCard.CollierManager');
// SuShiCarb/scripts/Game/ShuShiCard.CollierManager.ts

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
var ShuShiCarb_Game_1 = require("../ShuShiCarb.Game");
var ShuShiCarb_Food_1 = require("./ShuShiCarb.Food");
var ShuShiCarb_Hook_1 = require("./ShuShiCarb.Hook");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Collier = /** @class */ (function (_super) {
    __extends(Collier, _super);
    function Collier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collier.prototype.onCollisionEnter = function (other, self) {
        var food = this.node.getComponent(ShuShiCarb_Food_1.default);
        var id = food.id;
        console.log(food);
        if (other.tag == 1) {
            console.log("va cham");
            console.log("idd ", id);
            // ShuShiCarbHook.instance.hookObjects.push(food.node)
            // ShuShiCarbHook.instance.hookState = 2;
            // console.log("Thu ve luoon ne ")
            var nodeNew_1 = new cc.Node();
            nodeNew_1.parent = this.node.parent;
            nodeNew_1.position = this.node.position;
            nodeNew_1.scale = 0.5;
            nodeNew_1.addComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[id];
            nodeNew_1.setParent(ShuShiCarb_Hook_1.default.instance.hookHead);
            nodeNew_1.setPosition(cc.v2(0, -25));
            ShuShiCarb_Game_1.default.instance.hookObjects.push({ node: nodeNew_1, id: id });
            console.log("obj ", ShuShiCarb_Game_1.default.instance.hookObjects);
            ShuShiCarb_Hook_1.default.instance.setHookState(2);
            this.node.active = false;
            food.isCheck = 1;
            ShuShiCarb_Game_1.default.instance.checkCorrect();
            this.scheduleOnce(function () {
                ShuShiCarb_Game_1.default.instance.removeNode(nodeNew_1, id);
            }, 0.5);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    Collier.prototype.onLoad = function () {
        var node = cc.director.getCollisionManager();
        node.enabled = true;
        node.enabledDebugDraw = true;
    };
    Collier.prototype.start = function () {
    };
    Collier = __decorate([
        ccclass
    ], Collier);
    return Collier;
}(cc.Component));
exports.default = Collier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxTaHVTaGlDYXJkLkNvbGxpZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUFnRDtBQUNoRCxxREFBK0M7QUFDL0MscURBQStDO0FBRXpDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEOztJQWlEQSxDQUFDO0lBL0NHLGtDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBYyxDQUFDLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxCLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4QixzREFBc0Q7WUFDdEQseUNBQXlDO1lBQ3pDLGtDQUFrQztZQUNsQyxJQUFJLFNBQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUMzQixTQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xDLFNBQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEMsU0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDcEIsU0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLHlCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNyRixTQUFPLENBQUMsU0FBUyxDQUFDLHlCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELFNBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLHlCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHlCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3hELHlCQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDakIseUJBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCx5QkFBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtTQUNUO0lBRUwsQ0FBQztJQUlELHdCQUF3QjtJQUV4Qix3QkFBTSxHQUFOO1FBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFFakMsQ0FBQztJQUVELHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBOUNnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBaUQzQjtJQUFELGNBQUM7Q0FqREQsQUFpREMsQ0FqRG9DLEVBQUUsQ0FBQyxTQUFTLEdBaURoRDtrQkFqRG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2FtZVwiO1xyXG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XHJcbmltcG9ydCBTaHVTaGlDYXJiSG9vayBmcm9tIFwiLi9TaHVTaGlDYXJiLkhvb2tcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGxldCBmb29kID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTaHVTaGlDYXJiRm9vZCk7XHJcbiAgICAgICAgbGV0IGlkID0gZm9vZC5pZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb29kKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAob3RoZXIudGFnID09IDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YSBjaGFtXCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWRkIFwiLCBpZCk7XHJcbiAgICAgICAgICAgIC8vIFNodVNoaUNhcmJIb29rLmluc3RhbmNlLmhvb2tPYmplY3RzLnB1c2goZm9vZC5ub2RlKVxyXG4gICAgICAgICAgICAvLyBTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5ob29rU3RhdGUgPSAyO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRodSB2ZSBsdW9vbiBuZSBcIilcclxuICAgICAgICAgICAgbGV0IG5vZGVOZXcgPSBuZXcgY2MuTm9kZSgpXHJcbiAgICAgICAgICAgIG5vZGVOZXcucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgbm9kZU5ldy5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbm9kZU5ldy5zY2FsZSA9IDAuNTtcclxuICAgICAgICAgICAgbm9kZU5ldy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmxpc3RTcGZGb29kW2lkXVxyXG4gICAgICAgICAgICBub2RlTmV3LnNldFBhcmVudChTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5ob29rSGVhZCk7XHJcbiAgICAgICAgICAgIG5vZGVOZXcuc2V0UG9zaXRpb24oY2MudjIoMCwgLTI1KSk7XHJcbiAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmhvb2tPYmplY3RzLnB1c2goe25vZGU6IG5vZGVOZXcsIGlkOiBpZH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9iaiBcIiwgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuaG9va09iamVjdHMpXHJcbiAgICAgICAgICAgIFNodVNoaUNhcmJIb29rLmluc3RhbmNlLnNldEhvb2tTdGF0ZSgyKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb29kLmlzQ2hlY2sgPSAxO1xyXG4gICAgICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5jaGVja0NvcnJlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5yZW1vdmVOb2RlKG5vZGVOZXcsIGlkKTtcclxuICAgICAgICAgICAgfSwwLjUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpXHJcbiAgICAgICAgbm9kZS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBub2RlLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCarb.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3894fyXWvVMl4qDb2W/ERoN', 'ShuShiCarb.Player');
// SuShiCarb/scripts/Game/ShuShiCarb.Player.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbPlayer = /** @class */ (function (_super) {
    __extends(ShuShiCarbPlayer, _super);
    function ShuShiCarbPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.char = null;
        _this.listFood = [];
        _this.nchat = null;
        _this.listCharacter = [];
        _this.prgBarCountDown = null;
        _this.lbCountDown = null;
        _this.nTime = null;
        _this.duration = 10;
        _this.numberCountDown = 0;
        _this.isCountDown = false;
        _this.isMove = false;
        return _this;
        // update (dt) {}
    }
    // @property(cc.Node)
    // foodItem1: cc.Node = null;
    // @property(cc.Node)
    // foodItem2: cc.Node = null;
    // @property(cc.Node)
    // foodItem3: cc.Node = null;
    ShuShiCarbPlayer.prototype.setData = function (index) {
        this.char.skeletonData = this.listCharacter[index]; // listChar [0] = con ao vang
    };
    ShuShiCarbPlayer.prototype.startCountDown = function () {
        this.isCountDown = true;
        this.numberCountDown = this.duration;
        this.schedule(this.updateCountDown, 1);
    };
    ShuShiCarbPlayer.prototype.updateCountDown = function () {
        if (this.numberCountDown > 0) {
            this.numberCountDown--;
            this.updateProgressBar();
            this.lbCountDown.string = this.numberCountDown + '';
        }
        else {
            this.isCountDown = false;
            //this.effectShow();
        }
    };
    ShuShiCarbPlayer.prototype.updateProgressBar = function () {
        if (this.prgBarCountDown) {
            this.prgBarCountDown.progress -= 0.1;
        }
    };
    ShuShiCarbPlayer.prototype.effectShow = function () {
        var _this = this;
        this.char.animation = 'move';
        this.nchat.active = false;
        this.nTime.active = false;
        cc.tween(this.char.node)
            .to(2, { x: 0 })
            .call(function () {
            _this.char.animation = 'discomfort';
            _this.nchat.active = true;
            _this.nTime.active = true;
            _this.startCountDown();
        })
            .start();
    };
    ShuShiCarbPlayer.prototype.showEffectPlayerMoveOut = function (callbacks) {
        var _this = this;
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "happy";
        cc.tween(this.char.node)
            .to(0.8, { x: 600 })
            .call(function () {
            _this.node.destroy();
            callbacks();
        }).start();
    };
    ShuShiCarbPlayer.prototype.start = function () {
        this.effectShow();
    };
    __decorate([
        property(sp.Skeleton)
    ], ShuShiCarbPlayer.prototype, "char", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbPlayer.prototype, "listFood", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbPlayer.prototype, "nchat", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], ShuShiCarbPlayer.prototype, "listCharacter", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ShuShiCarbPlayer.prototype, "prgBarCountDown", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbPlayer.prototype, "lbCountDown", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbPlayer.prototype, "nTime", void 0);
    ShuShiCarbPlayer = __decorate([
        ccclass
    ], ShuShiCarbPlayer);
    return ShuShiCarbPlayer;
}(cc.Component));
exports.default = ShuShiCarbPlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxTaHVTaGlDYXJiLlBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQTBGQztRQXZGRyxVQUFJLEdBQWdCLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBc0IsRUFBRSxDQUFDO1FBRXRDLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFNLEdBQUcsS0FBSyxDQUFDOztRQXNFZixpQkFBaUI7SUFDckIsQ0FBQztJQXJFRyxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUc3QixrQ0FBTyxHQUFQLFVBQVEsS0FBSztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7SUFDckYsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJ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U0FBUyxHQTBGekQ7a0JBMUZvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2FtZVwiO1xyXG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGNoYXI6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEZvb2Q6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuY2hhdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxyXG4gICAgbGlzdENoYXJhY3Rlcjogc3AuU2tlbGV0b25EYXRhW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHByZ0JhckNvdW50RG93bjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJDb3VudERvd246IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgblRpbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgZHVyYXRpb24gPSAxMDtcclxuICAgIG51bWJlckNvdW50RG93biA9IDA7XHJcbiAgICBpc0NvdW50RG93biA9IGZhbHNlO1xyXG4gICAgaXNNb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBmb29kSXRlbTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBmb29kSXRlbTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBmb29kSXRlbTM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBzZXREYXRhKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5jaGFyLnNrZWxldG9uRGF0YSA9IHRoaXMubGlzdENoYXJhY3RlcltpbmRleF07IC8vIGxpc3RDaGFyIFswXSA9IGNvbiBhbyB2YW5nXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRDb3VudERvd24oKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvdW50RG93biA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24gPSB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDb3VudERvd24sMSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICB1cGRhdGVDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5udW1iZXJDb3VudERvd24gPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnVtYmVyQ291bnREb3duLS07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSB0aGlzLm51bWJlckNvdW50RG93biArICcnO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvdW50RG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3RoaXMuZWZmZWN0U2hvdygpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICAgICAgaWYodGhpcy5wcmdCYXJDb3VudERvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5wcmdCYXJDb3VudERvd24ucHJvZ3Jlc3MgLT0gMC4xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVmZmVjdFNob3coKSB7XHJcbiAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9ICdtb3ZlJztcclxuICAgICAgICB0aGlzLm5jaGF0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMublRpbWUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXHJcbiAgICAgICAgLnRvKDIsIHt4OiAwfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSAnZGlzY29tZm9ydCc7XHJcbiAgICAgICAgICAgIHRoaXMubmNoYXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5uVGltZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q291bnREb3duKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dFZmZlY3RQbGF5ZXJNb3ZlT3V0KGNhbGxiYWNrczogRnVuY3Rpb24pIHtcclxuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIixhY3RpdmUpO1xyXG4gICAgICAgIC8vIHRoaXMuY2hhci5zZXRBbmltYXRpb24oMCxcImRpc2NvbWZvcnRcIiwhYWN0aXZlKTtcclxuICAgICAgICB0aGlzLmNoYXIuYW5pbWF0aW9uID0gXCJoYXBweVwiXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXHJcbiAgICAgICAgLnRvKDAuOCx7eDogNjAwfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrcygpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHsgIFxyXG4gICAgICAgIHRoaXMuZWZmZWN0U2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCarb.Food.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1814d5TiQlDEohqTgqXx2zV', 'ShuShiCarb.Food');
// SuShiCarb/scripts/Game/ShuShiCarb.Food.ts

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
var ShuShiCarb_Game_1 = require("../ShuShiCarb.Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbFood = /** @class */ (function (_super) {
    __extends(ShuShiCarbFood, _super);
    function ShuShiCarbFood() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nFood = null;
        _this.id = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.isCheck = 0;
        return _this;
    }
    ShuShiCarbFood.prototype.onLoad = function () {
    };
    ShuShiCarbFood.prototype.start = function () {
    };
    ShuShiCarbFood.prototype.setData = function (idFood) {
        this.id = idFood;
        this.nFood.getComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[idFood];
    };
    ShuShiCarbFood.prototype.update = function (dt) {
        //    if(this.isCheck == 1) {
        //         this.node.setPosition(ShuShiCarbHook.instance.hookHead.x,ShuShiCarbHook.instance.hookHead.y);
        //    }
    };
    __decorate([
        property(cc.Node)
    ], ShuShiCarbFood.prototype, "nFood", void 0);
    ShuShiCarbFood = __decorate([
        ccclass
    ], ShuShiCarbFood);
    return ShuShiCarbFood;
}(cc.Component));
exports.default = ShuShiCarbFood;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxTaHVTaGlDYXJiLkZvb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQWdEO0FBSzFDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBeUJDO1FBdEJHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsUUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNOLHdCQUF3QjtRQUN4QixhQUFPLEdBQUcsQ0FBQyxDQUFDOztJQW1CaEIsQ0FBQztJQWpCRywrQkFBTSxHQUFOO0lBQ0EsQ0FBQztJQUVELDhCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLE1BQU07UUFDVixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLHlCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLEVBQUU7UUFDVCw2QkFBNkI7UUFDN0Isd0dBQXdHO1FBQ3hHLE9BQU87SUFDUCxDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0k7SUFITCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBeUJsQztJQUFELHFCQUFDO0NBekJELEFBeUJDLENBekIyQyxFQUFFLENBQUMsU0FBUyxHQXlCdkQ7a0JBekJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi9TaHVTaGlDYXJiLkdhbWVcIjtcclxuaW1wb3J0IFNodVNoaUNhcmJIb29rIGZyb20gXCIuL1NodVNoaUNhcmIuSG9va1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJGb29kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5Gb29kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGlkID0gMCBcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgaXNDaGVjayA9IDA7XHJcbiAgICBcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKGlkRm9vZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZEZvb2RcclxuICAgICAgICB0aGlzLm5Gb29kLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UubGlzdFNwZkZvb2RbaWRGb29kXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgIC8vICAgIGlmKHRoaXMuaXNDaGVjayA9PSAxKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5ob29rSGVhZC54LFNodVNoaUNhcmJIb29rLmluc3RhbmNlLmhvb2tIZWFkLnkpO1xyXG4gICAgLy8gICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
