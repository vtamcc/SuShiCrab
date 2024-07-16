
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/ShuShiCarb.GameManager.js';
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
        ShuShiCarb_Global_1.default.totalGold = JSON.parse(cc.sys.localStorage.getItem("totalGold")) || 2000;
        this.updateTotalGold();
    };
    ShuShiCarbGameManager.prototype.start = function () {
    };
    ShuShiCarbGameManager.prototype.onClickPlay = function () {
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
        var shopView = cc.instantiate(this.prfShopView).getComponent(ShuShiCarb_ShopView_1.default);
        this.node.addChild(shopView.node);
    };
    ShuShiCarbGameManager.prototype.updateTotalGold = function () {
        this.lbTotalGold.string = ShuShiCarb_Global_1.default.totalGold + " ";
    };
    ShuShiCarbGameManager.prototype.onClickSettingView = function () {
        var setting = cc.instantiate(this.prfSetting);
        this.node.addChild(setting);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLGdGQUEwRTtBQUMxRSxxREFBK0M7QUFDL0MseURBQXlDO0FBRW5DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBa0RDO1FBL0NFLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFjLElBQUksQ0FBQzs7UUFxQzVCLGlCQUFpQjtJQUNyQixDQUFDOzhCQWxEb0IscUJBQXFCO0lBYXRDLHdCQUF3QjtJQUV6QixzQ0FBTSxHQUFOO1FBQ0csdUJBQXFCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QywyQkFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUVoRixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFLLEdBQUw7SUFFQyxDQUFDO0lBQ0YsMkNBQVcsR0FBWDtRQUNHLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLHlCQUFjLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBRXJGLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0csSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLDZCQUFrQixDQUFDLENBQUE7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCwrQ0FBZSxHQUFmO1FBQ0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsMkJBQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3BELENBQUM7SUFFRCxrREFBa0IsR0FBbEI7UUFDRyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOztJQS9DYSw4QkFBUSxHQUEwQixJQUFJLENBQUM7SUFFckQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4REFDVTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUNTO0lBWlgscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0FrRHpDO0lBQUQsNEJBQUM7Q0FsREQsQUFrREMsQ0FsRGtELEVBQUUsQ0FBQyxTQUFTLEdBa0Q5RDtrQkFsRG9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmltcG9ydCBTaHVTaGlDYXJiU2hvcFZpZXcgZnJvbSBcIi4vR2FtZS9VaV9Qb3B1cC9TaG9wL1NodVNoaUNhcmIuU2hvcFZpZXdcIjtcbmltcG9ydCBTaHVTaGlDYXJiR2FtZSBmcm9tIFwiLi9TaHVTaGlDYXJiLkdhbWVcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQgeyAgIFxuICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgbkhvbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgIHByZkdhbWU6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICBwcmZTaG9wVmlldzogY2MuUHJlZmFiID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgXG4gICBsYlRvdGFsR29sZDogY2MuTGFiZWwgPSBudWxsO1xuICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgIHByZlNldHRpbmc6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgIG9uTG9hZCAoKSB7XG4gICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgR2xvYmFsLnRvdGFsR29sZCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxHb2xkXCIpKSB8fCAyMDAwO1xuICAgICBcbiAgICAgIHRoaXMudXBkYXRlVG90YWxHb2xkKCk7XG4gICB9XG5cbiAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgIG9uQ2xpY2tQbGF5KCkge1xuICAgICAgLy8gIHRoaXMubkhvbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAvLyAgdGhpcy5uR2FtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgbGV0IGdhbWUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWUpLmdldENvbXBvbmVudChTaHVTaGlDYXJiR2FtZSlcbiAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1lLm5vZGUpO1xuICAgICAgLy90aGlzLm5Ib21lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgncGxheWJ0bicpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgnc2hvcCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgnc2V0dGluZycpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgXG4gICB9XG5cbiAgIG9uQ2xpY2tTaG9wVmlldygpIHtcbiAgICAgIGxldCBzaG9wVmlldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmU2hvcFZpZXcpLmdldENvbXBvbmVudChTaHVTaGlDYXJiU2hvcFZpZXcpXG4gICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2hvcFZpZXcubm9kZSk7XG4gICB9XG4gICB1cGRhdGVUb3RhbEdvbGQoKSB7XG4gICAgICB0aGlzLmxiVG90YWxHb2xkLnN0cmluZyA9IEdsb2JhbC50b3RhbEdvbGQgKyBcIiBcIjsgXG4gICB9XG5cbiAgIG9uQ2xpY2tTZXR0aW5nVmlldygpIHtcbiAgICAgIGxldCBzZXR0aW5nID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZTZXR0aW5nKVxuICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNldHRpbmcpO1xuICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=