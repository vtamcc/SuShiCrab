
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
        ShuShiCarb_Global_1.default.timeHappy = JSON.parse(cc.sys.localStorage.getItem("timeHappy")) || ShuShiCarb_Global_1.default.timeHappy;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUFnRDtBQUNoRCwwREFBMEM7QUFHcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFtSEM7UUEvR0csVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLG1CQUFhLEdBQXNCLEVBQUUsQ0FBQztRQUV0QyxxQkFBZSxHQUFtQixJQUFJLENBQUM7UUFFdkMsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsdUJBQWlCLEdBQUcsS0FBSyxDQUFDOztRQThGMUIsaUJBQWlCO0lBQ3JCLENBQUM7eUJBbkhvQixnQkFBZ0I7SUFzQmpDLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBRTdCLGlDQUFNLEdBQU47UUFDSSxrQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLDJCQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFD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QztJQUFELHVCQUFDO0NBbkhELEFBbUhDLENBbkg2QyxFQUFFLENBQUMsU0FBUyxHQW1IekQ7a0JBbkhvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi9TaHVTaGlDYXJiLkdhbWVcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2xvYmFsXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYlBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhY2U6IFNodVNoaUNhcmJQbGF5ZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBjaGFyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEZvb2Q6IGNjLk5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5jaGF0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxuICAgIGxpc3RDaGFyYWN0ZXI6IHNwLlNrZWxldG9uRGF0YVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIHByZ0JhckNvdW50RG93bjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkNvdW50RG93bjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5UaW1lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBudW1iZXJDb3VudERvd24gPSAwO1xuICAgIGlzQ291bnREb3duID0gZmFsc2U7XG4gICAgaXNNb3ZlID0gZmFsc2U7XG4gICAgaXNBdE9yZGVyUG9zaXRpb24gPSBmYWxzZTtcbiAgICBcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBmb29kSXRlbTE6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGZvb2RJdGVtMjogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gZm9vZEl0ZW0zOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU2h1U2hpQ2FyYlBsYXllci5pbnN0YWNlID0gdGhpcztcbiAgICAgICAgR2xvYmFsLnRpbWVIYXBweSA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGltZUhhcHB5XCIpKSB8fCBHbG9iYWwudGltZUhhcHB5O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWUgdnVhIGR1b2MgdXBkYXRlIFwiLEdsb2JhbC50aW1lSGFwcHkpO1xuICAgIH1cbiAgICBzZXREYXRhKGluZGV4KSB7XG4gICAgICAgIHRoaXMuY2hhci5za2VsZXRvbkRhdGEgPSB0aGlzLmxpc3RDaGFyYWN0ZXJbaW5kZXhdOyAvLyBsaXN0Q2hhciBbMF0gPSBjb24gYW8gdmFuZ1xuICAgIH1cblxuICAgIHN0YXJ0Q291bnREb3duKCkge1xuICAgICAgICB0aGlzLmlzQ291bnREb3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24gPSBHbG9iYWwudGltZUhhcHB5O1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ291bnREb3duLDEpO1xuICAgIH1cblxuICAgIFxuICAgIHVwZGF0ZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYodGhpcy5udW1iZXJDb3VudERvd24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlckNvdW50RG93bi0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSB0aGlzLm51bWJlckNvdW50RG93biArICcnO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5yZXNldEdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaHVhXCIpXG4gICAgICAgICAgICAvL3RoaXMuZWZmZWN0U2hvdygpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgaWYodGhpcy5wcmdCYXJDb3VudERvd24pIHtcbiAgICAgICAgICAgIHRoaXMucHJnQmFyQ291bnREb3duLnByb2dyZXNzIC09IDEvIEdsb2JhbC50aW1lSGFwcHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWZmZWN0U2hvdygpIHtcbiAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9ICdtb3ZlJztcbiAgICAgICAgdGhpcy5uY2hhdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uVGltZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXG4gICAgICAgIC50bygyLCB7eDogMH0pXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSAnaWRsZSc7XG4gICAgICAgICAgICB0aGlzLm5jaGF0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5UaW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICBoYXBweUVmZmVjdFBsYXllck1vdmVPdXQoY2FsbGJhY2tzOiBGdW5jdGlvbikge1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIixhY3RpdmUpO1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJkaXNjb21mb3J0XCIsIWFjdGl2ZSk7XG4gICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSBcImhhcHB5XCJcbiAgICAgICAgdGhpcy5pc0F0T3JkZXJQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXIubm9kZSlcbiAgICAgICAgLnRvKDAuOCx7eDogNjAwfSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcygpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIHNhZEVmZmVjdFBsYXllck1vdmVPdXQoY2FsbGJhY2tzOiBGdW5jdGlvbikge1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIixhY3RpdmUpO1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJkaXNjb21mb3J0XCIsIWFjdGl2ZSk7XG4gICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSBcImRpc2NvbWZvcnRcIlxuICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhci5ub2RlKVxuICAgICAgICAudG8oMC44LHt4OiA2MDB9KVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgY2FsbGJhY2tzKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgXG5cblxuICAgIHN0YXJ0ICgpIHsgIFxuICAgICAgICB0aGlzLmVmZmVjdFNob3coKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19