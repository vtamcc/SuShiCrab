
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
var ShuShiCarb_Game_1 = require("../ShuShiCarb.Game");
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
            ShuShiCarb_Game_1.default.instance.resetGame(false);
            console.log("Thua");
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
            _this.char.animation = 'idle';
            _this.nchat.active = true;
            _this.nTime.active = true;
            _this.startCountDown();
        })
            .start();
    };
    ShuShiCarbPlayer.prototype.happyEffectPlayerMoveOut = function (callbacks) {
        var _this = this;
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "happy";
        cc.tween(this.char.node)
            .to(1.5, { x: 600 })
            .call(function () {
            _this.node.destroy();
            callbacks();
        }).start();
    };
    ShuShiCarbPlayer.prototype.sadEffectPlayerMoveOut = function (callbacks) {
        var _this = this;
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "discomfort";
        cc.tween(this.char.node)
            .to(1.5, { x: 600 })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUFnRDtBQUcxQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQTJHQztRQXhHRyxVQUFJLEdBQWdCLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBc0IsRUFBRSxDQUFDO1FBRXRDLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFNLEdBQUcsS0FBSyxDQUFDOztRQXVGZixpQkFBaUI7SUFDckIsQ0FBQztJQXJGRyxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUc3QixrQ0FBTyxHQUFQLFVBQVEsS0FBSztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7SUFDckYsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztR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Q0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFyR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztrREFDRztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQzsyREFDWTtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZEQUNjO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSTtJQWZMLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBMkdwQztJQUFELHVCQUFDO0NBM0dELEFBMkdDLENBM0c2QyxFQUFFLENBQUMsU0FBUyxHQTJHekQ7a0JBM0dvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi9TaHVTaGlDYXJiLkdhbWVcIjtcbmltcG9ydCBTaHVTaGlDYXJiRm9vZCBmcm9tIFwiLi9TaHVTaGlDYXJiLkZvb2RcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBjaGFyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEZvb2Q6IGNjLk5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5jaGF0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxuICAgIGxpc3RDaGFyYWN0ZXI6IHNwLlNrZWxldG9uRGF0YVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIHByZ0JhckNvdW50RG93bjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkNvdW50RG93bjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5UaW1lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBkdXJhdGlvbiA9IDEwO1xuICAgIG51bWJlckNvdW50RG93biA9IDA7XG4gICAgaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICBpc01vdmUgPSBmYWxzZTtcblxuICAgIFxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGZvb2RJdGVtMTogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gZm9vZEl0ZW0yOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBmb29kSXRlbTM6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBzZXREYXRhKGluZGV4KSB7XG4gICAgICAgIHRoaXMuY2hhci5za2VsZXRvbkRhdGEgPSB0aGlzLmxpc3RDaGFyYWN0ZXJbaW5kZXhdOyAvLyBsaXN0Q2hhciBbMF0gPSBjb24gYW8gdmFuZ1xuICAgIH1cblxuICAgIHN0YXJ0Q291bnREb3duKCkge1xuICAgICAgICB0aGlzLmlzQ291bnREb3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ291bnREb3duLDEpO1xuICAgIH1cblxuICAgIFxuICAgIHVwZGF0ZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYodGhpcy5udW1iZXJDb3VudERvd24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlckNvdW50RG93bi0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSB0aGlzLm51bWJlckNvdW50RG93biArICcnO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5yZXNldEdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaHVhXCIpXG4gICAgICAgICAgICAvL3RoaXMuZWZmZWN0U2hvdygpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgaWYodGhpcy5wcmdCYXJDb3VudERvd24pIHtcbiAgICAgICAgICAgIHRoaXMucHJnQmFyQ291bnREb3duLnByb2dyZXNzIC09IDAuMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlZmZlY3RTaG93KCkge1xuICAgICAgICB0aGlzLmNoYXIuYW5pbWF0aW9uID0gJ21vdmUnO1xuICAgICAgICB0aGlzLm5jaGF0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5UaW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXIubm9kZSlcbiAgICAgICAgLnRvKDIsIHt4OiAwfSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9ICdpZGxlJztcbiAgICAgICAgICAgIHRoaXMubmNoYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMublRpbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICBoYXBweUVmZmVjdFBsYXllck1vdmVPdXQoY2FsbGJhY2tzOiBGdW5jdGlvbikge1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIixhY3RpdmUpO1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJkaXNjb21mb3J0XCIsIWFjdGl2ZSk7XG4gICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSBcImhhcHB5XCJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXG4gICAgICAgIC50bygxLjUse3g6IDYwMH0pXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBjYWxsYmFja3MoKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzYWRFZmZlY3RQbGF5ZXJNb3ZlT3V0KGNhbGxiYWNrczogRnVuY3Rpb24pIHtcbiAgICAgICAgLy8gdGhpcy5jaGFyLnNldEFuaW1hdGlvbigwLFwiaGFwcHlfb3V0XCIsYWN0aXZlKTtcbiAgICAgICAgLy8gdGhpcy5jaGFyLnNldEFuaW1hdGlvbigwLFwiZGlzY29tZm9ydFwiLCFhY3RpdmUpO1xuICAgICAgICB0aGlzLmNoYXIuYW5pbWF0aW9uID0gXCJkaXNjb21mb3J0XCJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXG4gICAgICAgIC50bygxLjUse3g6IDYwMH0pXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBjYWxsYmFja3MoKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBcblxuXG4gICAgc3RhcnQgKCkgeyAgXG4gICAgICAgIHRoaXMuZWZmZWN0U2hvdygpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=