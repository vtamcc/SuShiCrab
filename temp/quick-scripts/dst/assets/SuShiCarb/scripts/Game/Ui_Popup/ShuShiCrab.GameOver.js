
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1NodVNoaUNyYWIuR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW1EO0FBQ25ELHVFQUFpRTtBQUNqRSw2REFBNkM7QUFDdkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUFzRUM7UUFuRUcsWUFBTSxHQUFhLElBQUksQ0FBQzs7SUFtRTVCLENBQUM7SUFqRUcscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUU1QixjQUFjO0lBQ2Qsd0NBQXdDO0lBQ3hDLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLGtDQUFrQztJQUNsQyxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIsSUFBSTtJQUVKLGVBQWU7SUFDZix3Q0FBd0M7SUFDeEMsa0NBQWtDO0lBQ2xDLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixJQUFJO0lBRUosaUNBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO2FBQ25CLEtBQUssRUFBRSxDQUFBO0lBQ1osQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxJQUFHLDJCQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3BCLDJCQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0YsZ0NBQXFCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2pELHdFQUF3RTtRQUN4RSwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUU1RCxDQUFDO0lBQ0QseUNBQVksR0FBWjtRQUNJLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakUsZ0NBQXFCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNHLGdDQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN4RyxnQ0FBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0csWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFsRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDSztJQUhQLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBc0V0QztJQUFELHlCQUFDO0NBdEVELEFBc0VDLENBdEUrQyxFQUFFLENBQUMsU0FBUyxHQXNFM0Q7a0JBdEVvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uLy4uL1NodVNoaUNhcmIuR2FtZVwiO1xuaW1wb3J0IFNodVNoaUNhcmJHYW1lTWFuYWdlciBmcm9tIFwiLi4vLi4vU2h1U2hpQ2FyYi5HYW1lTWFuYWdlclwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiR2FtZU92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiR29sZDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gc3RhcldpbjogY2MuTm9kZVtdID0gW107XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gc3Rhckxvc2U6IGNjLk5vZGVbXSA9IFtdO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIHRleHRXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIHRleHRMb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIGdhbWVXaW4oKSB7XG4gICAgLy8gICAgIHRoaXMuc3Rhcldpbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIC8vICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgdGhpcy5zdGFyTG9zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIC8vICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHRoaXMudGV4dFdpbi5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICB0aGlzLnRleHRMb3NlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vICAgICAvLyB0aGlzLnN0b3BHYW1lUGxheSgpO1xuICAgIC8vIH1cblxuICAgIC8vIGdhbWVMb3NlKCkge1xuICAgIC8vICAgICB0aGlzLnN0YXJXaW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAvLyAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICB0aGlzLnN0YXJMb3NlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgLy8gICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICB0aGlzLnRleHRXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgIHRoaXMudGV4dExvc2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgLy8gdGhpcy5zdG9wR2FtZVBsYXkoKTtcbiAgICAvLyB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgIC50bygwLjIsIHtzY2FsZTogMX0pXG4gICAgICAgIC5zdGFydCgpXG4gICAgfVxuXG4gICAgb25Ib21lKCkge1xuICAgICAgICBpZihHbG9iYWwuc291bmRNYW5hZ2VyKSB7XG4gICAgICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyLnBsYXlTb3VuZENsaWNrKCk7XG4gICAgICAgICB9XG4gICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS51cGRhdGVUb3RhbEdvbGQoKTtcbiAgICAgICAgLy8gbGV0IG5vZGVHYW1lUGxheSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiR2FtZVBsYXlcIilcbiAgICAgICAgLy8gbm9kZUdhbWVQbGF5LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zdG9wR2FtZVBsYXkoKTtcbiAgICB9XG5cbiAgICBnb2xkRW5kKCkge1xuICAgICAgICB0aGlzLmxiR29sZC5zdHJpbmcgPSBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5nb2xkICsgXCIgXCI7XG4gICAgICAgIFxuICAgIH1cbiAgICBzdG9wR2FtZVBsYXkoKSB7XG4gICAgICAgIGxldCBub2RlR2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk1haW5cIilcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLm5Ib21lLmdldENoaWxkQnlOYW1lKCdwbGF5YnRuJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLm5Ib21lLmdldENoaWxkQnlOYW1lKCdzaG9wJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLm5Ib21lLmdldENoaWxkQnlOYW1lKCdzZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgbm9kZUdhbWVQbGF5LmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMub3BlbigpXG4gICAgICAgIHRoaXMuZ29sZEVuZCgpO1xuICAgIH1cbn1cbiJdfQ==