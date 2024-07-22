
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/ShuShiCarb.GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4f8btwtChDJ7eWDTDf8uUO', 'ShuShiCarb.GameManager');
// SuShiCarb/scripts/ShuShiCarb.GameManager.ts

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
var ShuShiCarb_ShopView_1 = require("./Game/Ui_Popup/Shop/ShuShiCarb.ShopView");
var ShuShiCarb_Game_1 = require("./ShuShiCarb.Game");
var ShuShiCarb_Global_1 = require("./ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGameManager = /** @class */ (function (_super) {
    __extends(ShuShiCarbGameManager, _super);
    function ShuShiCarbGameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nHome = null;
        _this.prfGame = null;
        _this.nPlay = null;
        _this.prfShopView = null;
        _this.lbTotalGold = null;
        _this.prfSetting = null;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbGameManager_1 = ShuShiCarbGameManager;
    // LIFE-CYCLE CALLBACKS:
    ShuShiCarbGameManager.prototype.onLoad = function () {
        ShuShiCarbGameManager_1.instance = this;
        ShuShiCarb_Global_1.default.totalGold = JSON.parse(cc.sys.localStorage.getItem("totalGold")) || 500;
        this.updateTotalGold();
        this.effectPlay();
        if (ShuShiCarb_Global_1.default.soundManager)
            ShuShiCarb_Global_1.default.soundManager.music_background.play();
    };
    ShuShiCarbGameManager.prototype.start = function () {
    };
    ShuShiCarbGameManager.prototype.onClickPlay = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        //  this.nHome.active = false;
        //  this.nGame.active = true;
        var game = cc.instantiate(this.prfGame).getComponent(ShuShiCarb_Game_1.default);
        this.node.addChild(game.node);
        //this.nHome.active = false;
        this.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = false;
        this.nHome.getChildByName('shop').getComponent(cc.Button).interactable = false;
        this.nHome.getChildByName('setting').getComponent(cc.Button).interactable = false;
    };
    ShuShiCarbGameManager.prototype.onClickShopView = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        var shopView = cc.instantiate(this.prfShopView).getComponent(ShuShiCarb_ShopView_1.default);
        this.node.addChild(shopView.node);
    };
    ShuShiCarbGameManager.prototype.updateTotalGold = function () {
        this.lbTotalGold.string = ShuShiCarb_Global_1.default.formatNumber(ShuShiCarb_Global_1.default.totalGold);
        cc.sys.localStorage.setItem('totalGold', JSON.stringify(ShuShiCarb_Global_1.default.totalGold));
        console.log("Tong tien ", ShuShiCarb_Global_1.default.totalGold);
    };
    ShuShiCarbGameManager.prototype.effectPlay = function () {
        cc.tween(this.nPlay)
            .repeatForever(cc.tween()
            .to(0.8, { scale: 0.8 })
            .to(0.8, { scale: 1 })
            .start()).start();
    };
    ShuShiCarbGameManager.prototype.onClickSettingView = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        var setting = cc.instantiate(this.prfSetting);
        this.node.addChild(setting);
    };
    ShuShiCarbGameManager.prototype.clickTest = function () {
        cc.sys.localStorage.clear();
    };
    var ShuShiCarbGameManager_1;
    ShuShiCarbGameManager.instance = null;
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameManager.prototype, "nHome", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGameManager.prototype, "prfGame", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameManager.prototype, "nPlay", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGameManager.prototype, "prfShopView", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGameManager.prototype, "lbTotalGold", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGameManager.prototype, "prfSetting", void 0);
    ShuShiCarbGameManager = ShuShiCarbGameManager_1 = __decorate([
        ccclass
    ], ShuShiCarbGameManager);
    return ShuShiCarbGameManager;
}(cc.Component));
exports.default = ShuShiCarbGameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLGdGQUEwRTtBQUMxRSxxREFBK0M7QUFDL0MseURBQXlDO0FBRW5DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBZ0ZDO1FBN0VFLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQWMsSUFBSSxDQUFDOztRQWlFNUIsaUJBQWlCO0lBQ3JCLENBQUM7OEJBaEZvQixxQkFBcUI7SUFldEMsd0JBQXdCO0lBRXpCLHNDQUFNLEdBQU47UUFDRyx1QkFBcUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLDJCQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1FBRS9FLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSwyQkFBTSxDQUFDLFlBQVk7WUFDcEIsMkJBQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVE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QUFDO3dEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhEQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OERBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDUztJQWRYLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBZ0Z6QztJQUFELDRCQUFDO0NBaEZELEFBZ0ZDLENBaEZrRCxFQUFFLENBQUMsU0FBUyxHQWdGOUQ7a0JBaEZvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5pbXBvcnQgU2h1U2hpQ2FyYlNob3BWaWV3IGZyb20gXCIuL0dhbWUvVWlfUG9wdXAvU2hvcC9TaHVTaGlDYXJiLlNob3BWaWV3XCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HYW1lXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuL1NodVNoaUNhcmIuR2xvYmFsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHsgICBcbiAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lTWFuYWdlciA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5Ib21lOiBjYy5Ob2RlID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICBwcmZHYW1lOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5QbGF5OiBjYy5Ob2RlID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICBwcmZTaG9wVmlldzogY2MuUHJlZmFiID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgXG4gICBsYlRvdGFsR29sZDogY2MuTGFiZWwgPSBudWxsO1xuICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgIHByZlNldHRpbmc6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgIG9uTG9hZCAoKSB7XG4gICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgR2xvYmFsLnRvdGFsR29sZCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxHb2xkXCIpKSB8fCA1MDA7XG4gICAgIFxuICAgICAgdGhpcy51cGRhdGVUb3RhbEdvbGQoKTtcbiAgICAgIHRoaXMuZWZmZWN0UGxheSgpO1xuICAgICAgaWYgKEdsb2JhbC5zb3VuZE1hbmFnZXIpXG4gICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyLm11c2ljX2JhY2tncm91bmQucGxheSgpO1xuICAgfVxuXG4gICBzdGFydCAoKSB7XG5cbiAgIH1cbiAgIG9uQ2xpY2tQbGF5KCkge1xuICAgICAgaWYoR2xvYmFsLnNvdW5kTWFuYWdlcikge1xuICAgICAgICAgR2xvYmFsLnNvdW5kTWFuYWdlci5wbGF5U291bmRDbGljaygpO1xuICAgICAgfVxuICAgICAgLy8gIHRoaXMubkhvbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAvLyAgdGhpcy5uR2FtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgbGV0IGdhbWUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWUpLmdldENvbXBvbmVudChTaHVTaGlDYXJiR2FtZSlcbiAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1lLm5vZGUpO1xuICAgICAgLy90aGlzLm5Ib21lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgncGxheWJ0bicpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgnc2hvcCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgnc2V0dGluZycpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgXG4gICB9XG5cbiAgIG9uQ2xpY2tTaG9wVmlldygpIHtcbiAgICAgIGlmKEdsb2JhbC5zb3VuZE1hbmFnZXIpIHtcbiAgICAgICAgIEdsb2JhbC5zb3VuZE1hbmFnZXIucGxheVNvdW5kQ2xpY2soKTtcbiAgICAgIH1cbiAgICAgIGxldCBzaG9wVmlldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmU2hvcFZpZXcpLmdldENvbXBvbmVudChTaHVTaGlDYXJiU2hvcFZpZXcpXG4gICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2hvcFZpZXcubm9kZSk7XG4gICB9XG4gICB1cGRhdGVUb3RhbEdvbGQoKSB7XG4gICAgICB0aGlzLmxiVG90YWxHb2xkLnN0cmluZyA9IEdsb2JhbC5mb3JtYXROdW1iZXIoR2xvYmFsLnRvdGFsR29sZCk7XG4gICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvdGFsR29sZCcsSlNPTi5zdHJpbmdpZnkoR2xvYmFsLnRvdGFsR29sZCkpO1xuICAgICAgY29uc29sZS5sb2coXCJUb25nIHRpZW4gXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgfVxuXG4gICBlZmZlY3RQbGF5KCkge1xuICAgICAgY2MudHdlZW4odGhpcy5uUGxheSlcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgY2MudHdlZW4oKVxuICAgICAgICAgLnRvKDAuOCx7c2NhbGU6MC44fSlcbiAgICAgICAgIC50bygwLjgse3NjYWxlOiAxfSlcbiAgICAgICAgIC5zdGFydCgpXG4gICAgICApLnN0YXJ0KCk7XG4gICB9XG5cbiAgIG9uQ2xpY2tTZXR0aW5nVmlldygpIHtcbiAgICAgIGlmKEdsb2JhbC5zb3VuZE1hbmFnZXIpIHtcbiAgICAgICAgIEdsb2JhbC5zb3VuZE1hbmFnZXIucGxheVNvdW5kQ2xpY2soKTtcbiAgICAgIH1cbiAgICAgIGxldCBzZXR0aW5nID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZTZXR0aW5nKVxuICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNldHRpbmcpO1xuICAgfVxuXG4gICBjbGlja1Rlc3QoKSB7XG4gICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==