
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
var ShuShiCarb_Global_1 = require("../ShuShiCarb.Global");
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
        _this.numberCountDown = 0;
        _this.isCountDown = false;
        _this.isMove = false;
        _this.isAtOrderPosition = false;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbPlayer_1 = ShuShiCarbPlayer;
    // @property(cc.Node)
    // foodItem1: cc.Node = null;
    // @property(cc.Node)
    // foodItem2: cc.Node = null;
    // @property(cc.Node)
    // foodItem3: cc.Node = null;
    ShuShiCarbPlayer.prototype.onLoad = function () {
        ShuShiCarbPlayer_1.instace = this;
        var timeIndex = cc.sys.localStorage.getItem("timeIndex") || 0;
        var timeUpdate = ShuShiCarb_Global_1.default.dataTimeHappy[timeIndex].time;
        ShuShiCarb_Global_1.default.timeHappy += timeUpdate;
        console.log("Time vua duoc update ", ShuShiCarb_Global_1.default.timeHappy);
    };
    ShuShiCarbPlayer.prototype.setData = function (index) {
        this.char.skeletonData = this.listCharacter[index]; // listChar [0] = con ao vang
    };
    ShuShiCarbPlayer.prototype.startCountDown = function () {
        this.isCountDown = true;
        this.numberCountDown = ShuShiCarb_Global_1.default.timeHappy;
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
            this.prgBarCountDown.progress -= 1 / ShuShiCarb_Global_1.default.timeHappy;
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
            _this.isAtOrderPosition = true;
            _this.startCountDown();
        })
            .start();
    };
    ShuShiCarbPlayer.prototype.happyEffectPlayerMoveOut = function (callbacks) {
        var _this = this;
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "happy";
        this.isAtOrderPosition = false;
        cc.tween(this.char.node)
            .to(0.8, { x: 600 })
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
        this.isAtOrderPosition = false;
        cc.tween(this.char.node)
            .to(0.8, { x: 600 })
            .call(function () {
            _this.isAtOrderPosition = false;
            _this.node.destroy();
            callbacks();
        }).start();
    };
    ShuShiCarbPlayer.prototype.start = function () {
        this.effectShow();
    };
    var ShuShiCarbPlayer_1;
    ShuShiCarbPlayer.instace = null;
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
    ShuShiCarbPlayer = ShuShiCarbPlayer_1 = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUFnRDtBQUNoRCwwREFBMEM7QUFHcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFxSEM7UUFqSEcsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLG1CQUFhLEdBQXNCLEVBQUUsQ0FBQztRQUV0QyxxQkFBZSxHQUFtQixJQUFJLENBQUM7UUFFdkMsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsdUJBQWlCLEdBQUcsS0FBSyxDQUFDOztRQWdHMUIsaUJBQWlCO0lBQ3JCLENBQUM7eUJBckhvQixnQkFBZ0I7SUFzQmpDLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBRTdCLGlDQUFNLEdBQU47UUFDSSxrQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7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Q0FBQyxJQUFJLENBQUM7bURBQ0k7SUFoQkwsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FxSHBDO0lBQUQsdUJBQUM7Q0FySEQsQUFxSEMsQ0FySDZDLEVBQUUsQ0FBQyxTQUFTLEdBcUh6RDtrQkFySG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2FtZVwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiRm9vZCBmcm9tIFwiLi9TaHVTaGlDYXJiLkZvb2RcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFjZTogU2h1U2hpQ2FyYlBsYXllciA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGNoYXI6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Rm9vZDogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbmNoYXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbkRhdGEpXG4gICAgbGlzdENoYXJhY3Rlcjogc3AuU2tlbGV0b25EYXRhW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJnQmFyQ291bnREb3duOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblRpbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIG51bWJlckNvdW50RG93biA9IDA7XG4gICAgaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICBpc01vdmUgPSBmYWxzZTtcbiAgICBpc0F0T3JkZXJQb3NpdGlvbiA9IGZhbHNlO1xuICAgIFxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGZvb2RJdGVtMTogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gZm9vZEl0ZW0yOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBmb29kSXRlbTM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBTaHVTaGlDYXJiUGxheWVyLmluc3RhY2UgPSB0aGlzO1xuICAgICAgICBsZXQgdGltZUluZGV4ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGltZUluZGV4XCIpIHx8IDA7XG4gICAgICAgIGxldCB0aW1lVXBkYXRlID0gR2xvYmFsLmRhdGFUaW1lSGFwcHlbdGltZUluZGV4XS50aW1lO1xuICAgICAgICBHbG9iYWwudGltZUhhcHB5ICs9IHRpbWVVcGRhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGltZSB2dWEgZHVvYyB1cGRhdGUgXCIsR2xvYmFsLnRpbWVIYXBweSk7XG4gICAgfVxuICAgIHNldERhdGEoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jaGFyLnNrZWxldG9uRGF0YSA9IHRoaXMubGlzdENoYXJhY3RlcltpbmRleF07IC8vIGxpc3RDaGFyIFswXSA9IGNvbiBhbyB2YW5nXG4gICAgfVxuXG4gICAgc3RhcnRDb3VudERvd24oKSB7XG4gICAgICAgIHRoaXMuaXNDb3VudERvd24gPSB0cnVlO1xuICAgICAgICB0aGlzLm51bWJlckNvdW50RG93biA9IEdsb2JhbC50aW1lSGFwcHk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDb3VudERvd24sMSk7XG4gICAgfVxuXG4gICAgXG4gICAgdXBkYXRlQ291bnREb3duKCkge1xuICAgICAgICBpZih0aGlzLm51bWJlckNvdW50RG93biA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyQ291bnREb3duLS07XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICB0aGlzLmxiQ291bnREb3duLnN0cmluZyA9IHRoaXMubnVtYmVyQ291bnREb3duICsgJyc7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLnJlc2V0R2FtZShmYWxzZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRodWFcIilcbiAgICAgICAgICAgIC8vdGhpcy5lZmZlY3RTaG93KCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVByb2dyZXNzQmFyKCkge1xuICAgICAgICBpZih0aGlzLnByZ0JhckNvdW50RG93bikge1xuICAgICAgICAgICAgdGhpcy5wcmdCYXJDb3VudERvd24ucHJvZ3Jlc3MgLT0gMS8gR2xvYmFsLnRpbWVIYXBweTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlZmZlY3RTaG93KCkge1xuICAgICAgICB0aGlzLmNoYXIuYW5pbWF0aW9uID0gJ21vdmUnO1xuICAgICAgICB0aGlzLm5jaGF0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5UaW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXIubm9kZSlcbiAgICAgICAgLnRvKDIsIHt4OiAwfSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9ICdpZGxlJztcbiAgICAgICAgICAgIHRoaXMubmNoYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMublRpbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNBdE9yZGVyUG9zaXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGFydENvdW50RG93bigpO1xuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKVxuICAgIH1cblxuICAgIGhhcHB5RWZmZWN0UGxheWVyTW92ZU91dChjYWxsYmFja3M6IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIHRoaXMuY2hhci5zZXRBbmltYXRpb24oMCxcImhhcHB5X291dFwiLGFjdGl2ZSk7XG4gICAgICAgIC8vIHRoaXMuY2hhci5zZXRBbmltYXRpb24oMCxcImRpc2NvbWZvcnRcIiwhYWN0aXZlKTtcbiAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9IFwiaGFwcHlcIlxuICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhci5ub2RlKVxuICAgICAgICAudG8oMC44LHt4OiA2MDB9KVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgY2FsbGJhY2tzKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc2FkRWZmZWN0UGxheWVyTW92ZU91dChjYWxsYmFja3M6IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIHRoaXMuY2hhci5zZXRBbmltYXRpb24oMCxcImhhcHB5X291dFwiLGFjdGl2ZSk7XG4gICAgICAgIC8vIHRoaXMuY2hhci5zZXRBbmltYXRpb24oMCxcImRpc2NvbWZvcnRcIiwhYWN0aXZlKTtcbiAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9IFwiZGlzY29tZm9ydFwiXG4gICAgICAgIHRoaXMuaXNBdE9yZGVyUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXG4gICAgICAgIC50bygwLjgse3g6IDYwMH0pXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNBdE9yZGVyUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBjYWxsYmFja3MoKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBcblxuXG4gICAgc3RhcnQgKCkgeyAgXG4gICAgICAgIHRoaXMuZWZmZWN0U2hvdygpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=