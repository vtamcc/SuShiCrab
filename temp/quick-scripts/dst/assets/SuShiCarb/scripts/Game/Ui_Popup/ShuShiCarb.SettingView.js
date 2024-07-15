
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.SettingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f0fd3epKRG7byTyvDHzrTW', 'ShuShiCarb.SettingView');
// SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.SettingView.ts

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
var ShuShiCarb_Global_1 = require("../../ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sfMusic = [];
        _this.spMusic = null;
        _this.spSound = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.updateStatus();
    };
    NewClass.prototype.updateStatus = function () {
        if (ShuShiCarb_Global_1.default.isSoundOn)
            this.spSound.spriteFrame = this.sfMusic[0];
        else
            this.spSound.spriteFrame = this.sfMusic[1];
        if (ShuShiCarb_Global_1.default.isMusicOn)
            this.spMusic.spriteFrame = this.sfMusic[0];
        else
            this.spMusic.spriteFrame = this.sfMusic[1];
    };
    NewClass.prototype.onClickSound = function () {
        if (ShuShiCarb_Global_1.default.soundManager)
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        ShuShiCarb_Global_1.default.isSoundOn = !ShuShiCarb_Global_1.default.isSoundOn;
        this.updateStatus();
    };
    NewClass.prototype.onClickMusic = function () {
        if (ShuShiCarb_Global_1.default.soundManager)
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        ShuShiCarb_Global_1.default.isMusicOn = !ShuShiCarb_Global_1.default.isMusicOn;
        this.updateStatus();
        ShuShiCarb_Global_1.default.soundManager.updateMusicState();
    };
    NewClass.prototype.onClickClose = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "sfMusic", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "spMusic", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "spSound", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1NodVNoaUNhcmIuU2V0dGluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkRBQTZDO0FBRXZDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaURDO1FBOUNHLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRy9CLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsYUFBTyxHQUFjLElBQUksQ0FBQTs7UUF3Q3pCLGlCQUFpQjtJQUNyQixDQUFDO0lBdkNHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLDJCQUFNLENBQUMsU0FBUztZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUUzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9DLElBQUksMkJBQU0sQ0FBQyxTQUFTO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTNDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLDJCQUFNLENBQUMsWUFBWTtZQUNuQiwyQkFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV6QywyQkFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLDJCQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLElBQUksMkJBQU0sQ0FBQyxZQUFZO1lBQ25CLDJCQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXpDLDJCQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsMkJBQU0sQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLDJCQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDTTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFSUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUQ1QjtJQUFELGVBQUM7Q0FqREQsQUFpREMsQ0FqRHFDLEVBQUUsQ0FBQyxTQUFTLEdBaURqRDtrQkFqRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZNdXNpYzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcE11c2ljOiBjYy5TcHJpdGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcFNvdW5kOiBjYy5TcHJpdGUgPSBudWxsXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoKVxuICAgIH1cblxuICAgIHVwZGF0ZVN0YXR1cygpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5pc1NvdW5kT24pXG4gICAgICAgICAgICB0aGlzLnNwU291bmQuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTXVzaWNbMF07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc3BTb3VuZC5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1sxXTtcblxuICAgICAgICBpZiAoR2xvYmFsLmlzTXVzaWNPbilcbiAgICAgICAgICAgIHRoaXMuc3BNdXNpYy5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1swXTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zcE11c2ljLnNwcml0ZUZyYW1lID0gdGhpcy5zZk11c2ljWzFdO1xuICAgIH1cblxuICAgIG9uQ2xpY2tTb3VuZCgpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5zb3VuZE1hbmFnZXIpXG4gICAgICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyLnBsYXlTb3VuZENsaWNrKCk7XG5cbiAgICAgICAgR2xvYmFsLmlzU291bmRPbiA9ICFHbG9iYWwuaXNTb3VuZE9uO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tNdXNpYygpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5zb3VuZE1hbmFnZXIpXG4gICAgICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyLnBsYXlTb3VuZENsaWNrKCk7XG4gICAgICAgIFxuICAgICAgICBHbG9iYWwuaXNNdXNpY09uID0gIUdsb2JhbC5pc011c2ljT247XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKClcbiAgICAgICAgR2xvYmFsLnNvdW5kTWFuYWdlci51cGRhdGVNdXNpY1N0YXRlKCk7XG4gICAgfVxuXG4gICAgb25DbGlja0Nsb3NlKCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgIFxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==