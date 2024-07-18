
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
        ShuShiCarb_Global_1.default.totalGold = JSON.parse(cc.sys.localStorage.getItem("totalGold")) || 100000;
        this.updateTotalGold();
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
        this.lbTotalGold.string = ShuShiCarb_Global_1.default.totalGold + " ";
        cc.sys.localStorage.setItem('totalGold', JSON.stringify(ShuShiCarb_Global_1.default.totalGold));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLGdGQUEwRTtBQUMxRSxxREFBK0M7QUFDL0MseURBQXlDO0FBRW5DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBZ0VDO1FBN0RFLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFjLElBQUksQ0FBQzs7UUFtRDVCLGlCQUFpQjtJQUNyQixDQUFDOzhCQWhFb0IscUJBQXFCO0lBYXRDLHdCQUF3QjtJQUV6QixzQ0FBTSxHQUFOO1FBQ0csdUJBQXFCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QywyQkFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUVsRixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFLLEdBQUw7SUFFQyxDQUFDO0lBQ0YsMkNBQVcsR0FBWDtRQUNHLElBQUcsMkJBQU0sQ0FBQyxZQUFZLEVBQUU7WUFDckIsMkJBQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkM7UUFDRCw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyx5QkFBYyxDQUFDLENBQUE7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDbEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQy9FLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUVyRixDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUNHLElBQUcsMkJBQU0sQ0FBQyxZQUFZLEVBQUU7WUFDckIsMkJBQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkM7UUFDRCxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsNkJBQWtCLENBQUMsQ0FBQTtRQUNoRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELCtDQUFlLEdBQWY7UUFDRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRywyQkFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDakQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsa0RBQWtCLEdBQWxCO1FBQ0csSUFBRywyQkFBTSxDQUFDLFlBQVksRUFBRTtZQUNyQiwyQkFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QztRQUNELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0csRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7SUE3RGEsOEJBQVEsR0FBMEIsSUFBSSxDQUFDO0lBRXJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhEQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OERBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDUztJQVpYLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBZ0V6QztJQUFELDRCQUFDO0NBaEVELEFBZ0VDLENBaEVrRCxFQUFFLENBQUMsU0FBUyxHQWdFOUQ7a0JBaEVvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5pbXBvcnQgU2h1U2hpQ2FyYlNob3BWaWV3IGZyb20gXCIuL0dhbWUvVWlfUG9wdXAvU2hvcC9TaHVTaGlDYXJiLlNob3BWaWV3XCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HYW1lXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuL1NodVNoaUNhcmIuR2xvYmFsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHsgICBcbiAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lTWFuYWdlciA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5Ib21lOiBjYy5Ob2RlID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICBwcmZHYW1lOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgcHJmU2hvcFZpZXc6IGNjLlByZWZhYiA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTGFiZWwpIFxuICAgbGJUb3RhbEdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICBwcmZTZXR0aW5nOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICBvbkxvYWQgKCkge1xuICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcbiAgICAgIEdsb2JhbC50b3RhbEdvbGQgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsR29sZFwiKSkgfHwgMTAwMDAwO1xuICAgICBcbiAgICAgIHRoaXMudXBkYXRlVG90YWxHb2xkKCk7XG4gICB9XG5cbiAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgIG9uQ2xpY2tQbGF5KCkge1xuICAgICAgaWYoR2xvYmFsLnNvdW5kTWFuYWdlcikge1xuICAgICAgICAgR2xvYmFsLnNvdW5kTWFuYWdlci5wbGF5U291bmRDbGljaygpO1xuICAgICAgfVxuICAgICAgLy8gIHRoaXMubkhvbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAvLyAgdGhpcy5uR2FtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgbGV0IGdhbWUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWUpLmdldENvbXBvbmVudChTaHVTaGlDYXJiR2FtZSlcbiAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1lLm5vZGUpO1xuICAgICAgLy90aGlzLm5Ib21lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgncGxheWJ0bicpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgnc2hvcCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgnc2V0dGluZycpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgXG4gICB9XG5cbiAgIG9uQ2xpY2tTaG9wVmlldygpIHtcbiAgICAgIGlmKEdsb2JhbC5zb3VuZE1hbmFnZXIpIHtcbiAgICAgICAgIEdsb2JhbC5zb3VuZE1hbmFnZXIucGxheVNvdW5kQ2xpY2soKTtcbiAgICAgIH1cbiAgICAgIGxldCBzaG9wVmlldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmU2hvcFZpZXcpLmdldENvbXBvbmVudChTaHVTaGlDYXJiU2hvcFZpZXcpXG4gICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2hvcFZpZXcubm9kZSk7XG4gICB9XG4gICB1cGRhdGVUb3RhbEdvbGQoKSB7XG4gICAgICB0aGlzLmxiVG90YWxHb2xkLnN0cmluZyA9IEdsb2JhbC50b3RhbEdvbGQgKyBcIiBcIjtcbiAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWxHb2xkJyxKU09OLnN0cmluZ2lmeShHbG9iYWwudG90YWxHb2xkKSk7XG4gICB9XG5cbiAgIG9uQ2xpY2tTZXR0aW5nVmlldygpIHtcbiAgICAgIGlmKEdsb2JhbC5zb3VuZE1hbmFnZXIpIHtcbiAgICAgICAgIEdsb2JhbC5zb3VuZE1hbmFnZXIucGxheVNvdW5kQ2xpY2soKTtcbiAgICAgIH1cbiAgICAgIGxldCBzZXR0aW5nID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZTZXR0aW5nKVxuICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNldHRpbmcpO1xuICAgfVxuXG4gICBjbGlja1Rlc3QoKSB7XG4gICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==