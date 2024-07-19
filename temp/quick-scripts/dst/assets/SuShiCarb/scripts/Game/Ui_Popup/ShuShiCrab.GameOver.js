
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/ShuShiCrab.GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44367/LVl9AqbqS+KLuBWW4', 'ShuShiCrab.GameOver');
// SuShiCarb/scripts/Game/Ui_Popup/ShuShiCrab.GameOver.ts

"use strict";
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
var ShuShiCarb_Game_1 = require("../../ShuShiCarb.Game");
var ShuShiCarb_GameManager_1 = require("../../ShuShiCarb.GameManager");
var ShuShiCarb_Global_1 = require("../../ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGameOver = /** @class */ (function (_super) {
    __extends(ShuShiCarbGameOver, _super);
    function ShuShiCarbGameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbGold = null;
        return _this;
    }
    // @property(cc.Node)
    // starWin: cc.Node[] = [];
    // @property(cc.Node)
    // starLose: cc.Node[] = [];
    // @property(cc.Node)
    // textWin: cc.Node = null;
    // @property(cc.Node)
    // textLose: cc.Node = null;
    // gameWin() {
    //     this.starWin.forEach(element => {
    //         element.active = true;
    //     });
    //     this.starLose.forEach(element => {
    //         element.active = false;
    //     });
    //     this.textWin.active = true;
    //     this.textLose.active = false;
    //     // this.stopGamePlay();
    // }
    // gameLose() {
    //     this.starWin.forEach(element => {
    //         element.active = false;
    //     });
    //     this.starLose.forEach(element => {
    //         element.active = true;
    //     });
    //     this.textWin.active = false;
    //     this.textLose.active = true;
    //     // this.stopGamePlay();
    // }
    ShuShiCarbGameOver.prototype.open = function () {
        cc.tween(this.node)
            .to(0.2, { scale: 1 })
            .start();
    };
    ShuShiCarbGameOver.prototype.onHome = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
        // let nodeGamePlay = cc.Canvas.instance.node.getChildByName("GamePlay")
        // nodeGamePlay.destroy();
        this.stopGamePlay();
    };
    ShuShiCarbGameOver.prototype.goldEnd = function () {
        this.lbGold.string = ShuShiCarb_Game_1.default.instance.gold + " ";
    };
    ShuShiCarbGameOver.prototype.stopGamePlay = function () {
        var nodeGamePlay = cc.Canvas.instance.node.getChildByName("Main");
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = true;
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('shop').getComponent(cc.Button).interactable = true;
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('setting').getComponent(cc.Button).interactable = true;
        nodeGamePlay.destroy();
    };
    ShuShiCarbGameOver.prototype.onLoad = function () {
        this.open();
        this.goldEnd();
    };
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGameOver.prototype, "lbGold", void 0);
    ShuShiCarbGameOver = __decorate([
        ccclass
    ], ShuShiCarbGameOver);
    return ShuShiCarbGameOver;
}(cc.Component));
exports.default = ShuShiCarbGameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxVaV9Qb3B1cFxcU2h1U2hpQ3JhYi5HYW1lT3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBbUQ7QUFDbkQsdUVBQWlFO0FBQ2pFLDZEQUE2QztBQUN2QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQXNFQztRQW5FRyxZQUFNLEdBQWEsSUFBSSxDQUFDOztJQW1FNUIsQ0FBQztJQWpFRyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBRTVCLGNBQWM7SUFDZCx3Q0FBd0M7SUFDeEMsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsa0NBQWtDO0lBQ2xDLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5QixJQUFJO0lBRUosZUFBZTtJQUNmLHdDQUF3QztJQUN4QyxrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLElBQUk7SUFFSixpQ0FBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7YUFDbkIsS0FBSyxFQUFFLENBQUE7SUFDWixDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLElBQUcsMkJBQU0sQ0FBQyxZQUFZLEVBQUU7WUFDcEIsMkJBQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkM7UUFDRixnQ0FBcUIsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDakQsd0VBQXdFO1FBQ3hFLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELG9DQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyx5QkFBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBRTVELENBQUM7SUFDRCx5Q0FBWSxHQUFaO1FBQ0ksSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqRSxnQ0FBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0csZ0NBQXFCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3hHLGdDQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMzRyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDWCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQWxFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNLO0lBSFAsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FzRXRDO0lBQUQseUJBQUM7Q0F0RUQsQUFzRUMsQ0F0RStDLEVBQUUsQ0FBQyxTQUFTLEdBc0UzRDtrQkF0RW9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaHVTaGlDYXJiR2FtZSBmcm9tIFwiLi4vLi4vU2h1U2hpQ2FyYi5HYW1lXCI7XHJcbmltcG9ydCBTaHVTaGlDYXJiR2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uL1NodVNoaUNhcmIuR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHYW1lT3ZlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBzdGFyV2luOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gc3Rhckxvc2U6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyB0ZXh0V2luOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gdGV4dExvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIGdhbWVXaW4oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFyV2luLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICB0aGlzLnN0YXJMb3NlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgdGhpcy50ZXh0V2luLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy50ZXh0TG9zZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICAvLyB0aGlzLnN0b3BHYW1lUGxheSgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdhbWVMb3NlKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3Rhcldpbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHRoaXMuc3Rhckxvc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIC8vICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHRoaXMudGV4dFdpbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLnRleHRMb3NlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5zdG9wR2FtZVBsYXkoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAudG8oMC4yLCB7c2NhbGU6IDF9KVxyXG4gICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgb25Ib21lKCkge1xyXG4gICAgICAgIGlmKEdsb2JhbC5zb3VuZE1hbmFnZXIpIHtcclxuICAgICAgICAgICAgR2xvYmFsLnNvdW5kTWFuYWdlci5wbGF5U291bmRDbGljaygpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLnVwZGF0ZVRvdGFsR29sZCgpO1xyXG4gICAgICAgIC8vIGxldCBub2RlR2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVQbGF5XCIpXHJcbiAgICAgICAgLy8gbm9kZUdhbWVQbGF5LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnN0b3BHYW1lUGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvbGRFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5sYkdvbGQuc3RyaW5nID0gU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuZ29sZCArIFwiIFwiO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc3RvcEdhbWVQbGF5KCkge1xyXG4gICAgICAgIGxldCBub2RlR2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk1haW5cIilcclxuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3BsYXlidG4nKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgnc2hvcCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLm5Ib21lLmdldENoaWxkQnlOYW1lKCdzZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICBub2RlR2FtZVBsYXkuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm9wZW4oKVxyXG4gICAgICAgIHRoaXMuZ29sZEVuZCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==