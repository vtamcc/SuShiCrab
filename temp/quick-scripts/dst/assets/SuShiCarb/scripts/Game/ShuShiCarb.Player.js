
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxTaHVTaGlDYXJiLlBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixzREFBZ0Q7QUFDaEQsMERBQTBDO0FBR3BDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBcUhDO1FBakhHLFVBQUksR0FBZ0IsSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixtQkFBYSxHQUFzQixFQUFFLENBQUM7UUFFdEMscUJBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUNmLHVCQUFpQixHQUFHLEtBQUssQ0FBQzs7UUFnRzFCLGlCQUFpQjtJQUNyQixDQUFDO3lCQXJIb0IsZ0JBQWdCO0lBc0JqQyxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUU3QixpQ0FBTSxHQUFOO1FBQ0ksa0JBQWdCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxD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QUFFLENBQUMsSUFBSSxDQUFDO21EQUNJO0lBaEJMLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBcUhwQztJQUFELHVCQUFDO0NBckhELEFBcUhDLENBckg2QyxFQUFFLENBQUMsU0FBUyxHQXFIekQ7a0JBckhvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2FtZVwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xyXG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFjZTogU2h1U2hpQ2FyYlBsYXllciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBjaGFyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RGb29kOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmNoYXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uRGF0YSlcclxuICAgIGxpc3RDaGFyYWN0ZXI6IHNwLlNrZWxldG9uRGF0YVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcmdCYXJDb3VudERvd246IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5UaW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIG51bWJlckNvdW50RG93biA9IDA7XHJcbiAgICBpc0NvdW50RG93biA9IGZhbHNlO1xyXG4gICAgaXNNb3ZlID0gZmFsc2U7XHJcbiAgICBpc0F0T3JkZXJQb3NpdGlvbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGZvb2RJdGVtMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGZvb2RJdGVtMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGZvb2RJdGVtMzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIFNodVNoaUNhcmJQbGF5ZXIuaW5zdGFjZSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHRpbWVJbmRleCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRpbWVJbmRleFwiKSB8fCAwO1xyXG4gICAgICAgIGxldCB0aW1lVXBkYXRlID0gR2xvYmFsLmRhdGFUaW1lSGFwcHlbdGltZUluZGV4XS50aW1lO1xyXG4gICAgICAgIEdsb2JhbC50aW1lSGFwcHkgKz0gdGltZVVwZGF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWUgdnVhIGR1b2MgdXBkYXRlIFwiLEdsb2JhbC50aW1lSGFwcHkpO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShpbmRleCkge1xyXG4gICAgICAgIHRoaXMuY2hhci5za2VsZXRvbkRhdGEgPSB0aGlzLmxpc3RDaGFyYWN0ZXJbaW5kZXhdOyAvLyBsaXN0Q2hhciBbMF0gPSBjb24gYW8gdmFuZ1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0Q291bnREb3duKCkge1xyXG4gICAgICAgIHRoaXMuaXNDb3VudERvd24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubnVtYmVyQ291bnREb3duID0gR2xvYmFsLnRpbWVIYXBweTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ291bnREb3duLDEpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgdXBkYXRlQ291bnREb3duKCkge1xyXG4gICAgICAgIGlmKHRoaXMubnVtYmVyQ291bnREb3duID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm51bWJlckNvdW50RG93bi0tO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGJDb3VudERvd24uc3RyaW5nID0gdGhpcy5udW1iZXJDb3VudERvd24gKyAnJztcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudERvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UucmVzZXRHYW1lKGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaHVhXCIpXHJcbiAgICAgICAgICAgIC8vdGhpcy5lZmZlY3RTaG93KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBpZih0aGlzLnByZ0JhckNvdW50RG93bikge1xyXG4gICAgICAgICAgICB0aGlzLnByZ0JhckNvdW50RG93bi5wcm9ncmVzcyAtPSAxLyBHbG9iYWwudGltZUhhcHB5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVmZmVjdFNob3coKSB7XHJcbiAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9ICdtb3ZlJztcclxuICAgICAgICB0aGlzLm5jaGF0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMublRpbWUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXHJcbiAgICAgICAgLnRvKDIsIHt4OiAwfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSAnaWRsZSc7XHJcbiAgICAgICAgICAgIHRoaXMubmNoYXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5uVGltZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydENvdW50RG93bigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICBoYXBweUVmZmVjdFBsYXllck1vdmVPdXQoY2FsbGJhY2tzOiBGdW5jdGlvbikge1xyXG4gICAgICAgIC8vIHRoaXMuY2hhci5zZXRBbmltYXRpb24oMCxcImhhcHB5X291dFwiLGFjdGl2ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5jaGFyLnNldEFuaW1hdGlvbigwLFwiZGlzY29tZm9ydFwiLCFhY3RpdmUpO1xyXG4gICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSBcImhhcHB5XCJcclxuICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXHJcbiAgICAgICAgLnRvKDAuOCx7eDogNjAwfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrcygpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2FkRWZmZWN0UGxheWVyTW92ZU91dChjYWxsYmFja3M6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jaGFyLnNldEFuaW1hdGlvbigwLFwiaGFwcHlfb3V0XCIsYWN0aXZlKTtcclxuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJkaXNjb21mb3J0XCIsIWFjdGl2ZSk7XHJcbiAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9IFwiZGlzY29tZm9ydFwiXHJcbiAgICAgICAgdGhpcy5pc0F0T3JkZXJQb3NpdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhci5ub2RlKVxyXG4gICAgICAgIC50bygwLjgse3g6IDYwMH0pXHJcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrcygpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHsgIFxyXG4gICAgICAgIHRoaXMuZWZmZWN0U2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19