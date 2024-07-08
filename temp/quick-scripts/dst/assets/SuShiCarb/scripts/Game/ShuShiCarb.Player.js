
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
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    // setItemFood(foodIDs: number[]) {
    //     for(let i = 0; i < foodIDs.length; i++) {
    //        let foodID = foodIDs[i];
    //        let foodItemNode = null;
    //        switch(i) {
    //             case 0: 
    //                 foodItemNode = this.foodItem1;
    //                 break;
    //             case 1: 
    //                 foodItemNode = this.foodItem2;
    //                 break;
    //             case 2: 
    //                 foodItemNode = this.foodItem3;
    //                 break;
    //             default:
    //                 break;
    //        } 
    //        if(foodItemNode) {
    //             foodItemNode.getComponent(cc.Sprite).spriteFrame = ShuShiCarbGame.instance.listSpfFood[foodID];
    //        }
    //     }
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBdUdDO1FBcEdHLFVBQUksR0FBZ0IsSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixtQkFBYSxHQUFzQixFQUFFLENBQUM7UUFFdEMscUJBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFlBQU0sR0FBRyxLQUFLLENBQUM7O1FBbUZmLGlCQUFpQjtJQUNyQixDQUFDO0lBbEZHLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBRzdCLGtDQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtJQUNyRixDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FB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InNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2FtZVwiO1xuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL1NodVNoaUNhcmIuRm9vZFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGNoYXI6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Rm9vZDogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbmNoYXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbkRhdGEpXG4gICAgbGlzdENoYXJhY3Rlcjogc3AuU2tlbGV0b25EYXRhW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJnQmFyQ291bnREb3duOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblRpbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIGR1cmF0aW9uID0gMTA7XG4gICAgbnVtYmVyQ291bnREb3duID0gMDtcbiAgICBpc0NvdW50RG93biA9IGZhbHNlO1xuICAgIGlzTW92ZSA9IGZhbHNlO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gZm9vZEl0ZW0xOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBmb29kSXRlbTI6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGZvb2RJdGVtMzogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIHNldERhdGEoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jaGFyLnNrZWxldG9uRGF0YSA9IHRoaXMubGlzdENoYXJhY3RlcltpbmRleF07IC8vIGxpc3RDaGFyIFswXSA9IGNvbiBhbyB2YW5nXG4gICAgfVxuXG4gICAgc3RhcnRDb3VudERvd24oKSB7XG4gICAgICAgIHRoaXMuaXNDb3VudERvd24gPSB0cnVlO1xuICAgICAgICB0aGlzLm51bWJlckNvdW50RG93biA9IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVDb3VudERvd24sMSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ291bnREb3duKCkge1xuICAgICAgICBpZih0aGlzLm51bWJlckNvdW50RG93biA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyQ291bnREb3duLS07XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICB0aGlzLmxiQ291bnREb3duLnN0cmluZyA9IHRoaXMubnVtYmVyQ291bnREb3duICsgJyc7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vdGhpcy5lZmZlY3RTaG93KCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVByb2dyZXNzQmFyKCkge1xuICAgICAgICBpZih0aGlzLnByZ0JhckNvdW50RG93bikge1xuICAgICAgICAgICAgdGhpcy5wcmdCYXJDb3VudERvd24ucHJvZ3Jlc3MgLT0gMC4xO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG4gICAgLy8gc2V0SXRlbUZvb2QoZm9vZElEczogbnVtYmVyW10pIHtcbiAgICAvLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IGZvb2RJRHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgbGV0IGZvb2RJRCA9IGZvb2RJRHNbaV07XG4gICAgLy8gICAgICAgIGxldCBmb29kSXRlbU5vZGUgPSBudWxsO1xuICAgIC8vICAgICAgICBzd2l0Y2goaSkge1xuICAgIC8vICAgICAgICAgICAgIGNhc2UgMDogXG4gICAgLy8gICAgICAgICAgICAgICAgIGZvb2RJdGVtTm9kZSA9IHRoaXMuZm9vZEl0ZW0xO1xuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgICBjYXNlIDE6IFxuICAgIC8vICAgICAgICAgICAgICAgICBmb29kSXRlbU5vZGUgPSB0aGlzLmZvb2RJdGVtMjtcbiAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAgICAgY2FzZSAyOiBcbiAgICAvLyAgICAgICAgICAgICAgICAgZm9vZEl0ZW1Ob2RlID0gdGhpcy5mb29kSXRlbTM7XG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICB9IFxuXG4gICAgLy8gICAgICAgIGlmKGZvb2RJdGVtTm9kZSkge1xuICAgIC8vICAgICAgICAgICAgIGZvb2RJdGVtTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmxpc3RTcGZGb29kW2Zvb2RJRF07XG4gICAgLy8gICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgICAgIFxuICAgIC8vIH1cbiAgICBlZmZlY3RTaG93KCkge1xuICAgICAgICB0aGlzLmNoYXIuYW5pbWF0aW9uID0gJ21vdmUnO1xuICAgICAgICB0aGlzLm5jaGF0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5UaW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXIubm9kZSlcbiAgICAgICAgLnRvKDIsIHt4OiAwfSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9ICdkaXNjb21mb3J0JztcbiAgICAgICAgICAgIHRoaXMubmNoYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMublRpbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KClcbiAgICB9XG4gICAgc3RhcnQgKCkgeyAgXG4gICAgICAgIHRoaXMuZWZmZWN0U2hvdygpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=