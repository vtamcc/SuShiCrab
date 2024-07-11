
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.ShopView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e44aVyW49Ht7kWO/WUQKjk', 'ShuShiCarb.ShopView');
// SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.ShopView.ts

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
var ShuShiCarbShopView = /** @class */ (function (_super) {
    __extends(ShuShiCarbShopView, _super);
    function ShuShiCarbShopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbGold = null;
        _this.nBtnGreen = null;
        _this.nBtnGray = null;
        _this.isCheck = false;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbShopView.prototype.onLoad = function () {
        this.updateGold();
        this.checkGold();
    };
    ShuShiCarbShopView.prototype.start = function () {
    };
    ShuShiCarbShopView.prototype.checkGold = function () {
        if (ShuShiCarb_Global_1.default.totalGold >= ShuShiCarb_Global_1.default.priceSpeedHook) {
            this.changeBtn(true);
            this.isCheck = true;
        }
    };
    ShuShiCarbShopView.prototype.clickBuyHookSpeed = function () {
        this.updateGold();
        console.log(ShuShiCarb_Global_1.default.totalGold - ShuShiCarb_Global_1.default.priceSpeedHook);
    };
    ShuShiCarbShopView.prototype.updateGold = function () {
        this.lbGold.string = ShuShiCarb_Global_1.default.totalGold + ' ';
    };
    ShuShiCarbShopView.prototype.changeBtn = function (isTrue) {
        this.nBtnGreen.active = isTrue;
        this.nBtnGray.active = !isTrue;
    };
    ShuShiCarbShopView.prototype.onClickClose = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Label)
    ], ShuShiCarbShopView.prototype, "lbGold", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbShopView.prototype, "nBtnGreen", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbShopView.prototype, "nBtnGray", void 0);
    ShuShiCarbShopView = __decorate([
        ccclass
    ], ShuShiCarbShopView);
    return ShuShiCarbShopView;
}(cc.Component));
exports.default = ShuShiCarbShopView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1NodVNoaUNhcmIuU2hvcFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkRBQTZDO0FBRXZDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBMENDO1FBeENHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGFBQU8sR0FBRyxLQUFLLENBQUM7O1FBa0NoQixpQkFBaUI7SUFDckIsQ0FBQztJQWpDRyxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0Qsa0NBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQ0ksSUFBRywyQkFBTSxDQUFDLFNBQVMsSUFBSSwyQkFBTSxDQUFDLGNBQWMsRUFBRTtZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUVJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUFNLENBQUMsU0FBUyxHQUFHLDJCQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELHVDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRywyQkFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDaEQsQ0FBQztJQUdELHNDQUFTLEdBQVQsVUFBVSxNQUFlO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBQ0QseUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXRDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDTztJQU5SLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBMEN0QztJQUFELHlCQUFDO0NBMUNELEFBMENDLENBMUMrQyxFQUFFLENBQUMsU0FBUyxHQTBDM0Q7a0JBMUNvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiU2hvcFZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQnRuR3JlZW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5CdG5HcmF5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpc0NoZWNrID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlR29sZCgpO1xuICAgICAgICB0aGlzLmNoZWNrR29sZCgpO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgXG4gICAgY2hlY2tHb2xkKCkge1xuICAgICAgICBpZihHbG9iYWwudG90YWxHb2xkID49IEdsb2JhbC5wcmljZVNwZWVkSG9vaykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VCdG4odHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tCdXlIb29rU3BlZWQoKSB7XG4gICAgICBcbiAgICAgICAgdGhpcy51cGRhdGVHb2xkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbC50b3RhbEdvbGQgLSBHbG9iYWwucHJpY2VTcGVlZEhvb2spO1xuICAgIH1cbiAgICB1cGRhdGVHb2xkKCkge1xuICAgICAgICB0aGlzLmxiR29sZC5zdHJpbmcgPSBHbG9iYWwudG90YWxHb2xkICsgJyAnO1xuICAgIH1cblxuXG4gICAgY2hhbmdlQnRuKGlzVHJ1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm5CdG5HcmVlbi5hY3RpdmUgPSBpc1RydWU7XG4gICAgICAgIHRoaXMubkJ0bkdyYXkuYWN0aXZlID0gIWlzVHJ1ZTtcbiAgICB9XG4gICAgb25DbGlja0Nsb3NlKCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19