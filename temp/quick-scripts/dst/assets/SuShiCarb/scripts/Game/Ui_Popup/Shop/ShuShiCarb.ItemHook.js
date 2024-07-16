
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemHook.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc267ASAKxLjZBm3npC1v+1', 'ShuShiCarb.ItemHook');
// SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemHook.ts

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
var ShuShiCarb_GameManager_1 = require("../../../ShuShiCarb.GameManager");
var ShuShiCarb_Global_1 = require("../../../ShuShiCarb.Global");
var ShuShiCarb_ShopView_1 = require("./ShuShiCarb.ShopView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbItemHook = /** @class */ (function (_super) {
    __extends(ShuShiCarbItemHook, _super);
    function ShuShiCarbItemHook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbPrice = null;
        _this.nBtnBuy = null;
        _this.nStateBuy = null;
        _this.nCheckmask = null;
        _this.lbLeverSpeedOld = null;
        _this.lbLeverSpeedNew = null;
        _this.index = 0;
        _this.isCheck = false;
        _this._data = null;
        return _this;
        // update (dt) {}
    }
    // data;
    ShuShiCarbItemHook.prototype.setData = function (data) {
        this._data = data;
        this.nStateBuy.active = data.isBuy;
        console.log("data ", data);
    };
    // LIFE-CYCLE CALLBACKS:
    ShuShiCarbItemHook.prototype.onLoad = function () {
        //this.setData();
        //this.checkClick(this.index);
        console.log(ShuShiCarb_Global_1.default.dataHook[this.index].price);
        this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndex")) || 0;
        // Global.dataHook[this.index] = JSON.parse(cc.sys.localStorage.getItem("price")) || 150;
        // this.updatePrice(this.index);
        this.loadPurchaseState();
        this.checkClick();
        this.updatePrice(this.index);
    };
    ShuShiCarbItemHook.prototype.loadPurchaseState = function () {
        var purchaseData = JSON.parse(cc.sys.localStorage.getItem("purchaseData")) || [];
        for (var i = 0; i < ShuShiCarb_Global_1.default.dataHook.length; i++) {
            if (purchaseData[i]) {
                ShuShiCarb_Global_1.default.dataHook[i].isBuy = purchaseData[i].isBuy;
                ShuShiCarb_Global_1.default.dataHook[i].speed = purchaseData[i].speed;
                this.nStateBuy.children[i].active = purchaseData[i].isBuy;
            }
        }
    };
    ShuShiCarbItemHook.prototype.savePurchaseState = function () {
        var purchaseData = ShuShiCarb_Global_1.default.dataHook.map(function (item) { return ({
            isBuy: item.isBuy,
            speed: item.speed
        }); });
        cc.sys.localStorage.setItem('purchaseData', JSON.stringify(purchaseData));
        cc.sys.localStorage.setItem('activeIndex', JSON.stringify(ShuShiCarb_Global_1.default.activeIndex));
        cc.sys.localStorage.setItem('itemIndex', this.index.toString());
        cc.sys.localStorage.setItem('speedHook', JSON.stringify(ShuShiCarb_Global_1.default.speedHook));
        cc.sys.localStorage.setItem('lengthHook', JSON.stringify(ShuShiCarb_Global_1.default.lengthHook));
    };
    ShuShiCarbItemHook.prototype.checkClick = function () {
        if (this.index < ShuShiCarb_Global_1.default.dataHook.length) {
            if (ShuShiCarb_Global_1.default.totalGold >= ShuShiCarb_Global_1.default.dataHook[this.index].price) {
                this.nCheckmask.active = false;
                this.isCheck = true;
            }
            else {
                this.nCheckmask.active = true;
                this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
            }
        }
    };
    ShuShiCarbItemHook.prototype.onClickBuy = function () {
        if (this.isCheck && this.index < ShuShiCarb_Global_1.default.dataHook.length) {
            ShuShiCarb_Global_1.default.dataHook[this.index].isBuy = true;
            ShuShiCarb_Global_1.default.totalGold -= ShuShiCarb_Global_1.default.dataHook[this.index].price;
            ShuShiCarb_Global_1.default.speedHook += ShuShiCarb_Global_1.default.dataHook[this.index].speed;
            ShuShiCarb_Global_1.default.lengthHook += ShuShiCarb_Global_1.default.dataHook[this.index].widthHook;
            this.nStateBuy.children[this.index].active = ShuShiCarb_Global_1.default.dataHook[this.index].isBuy;
            ShuShiCarb_Global_1.default.activeIndex = this.index;
            this.savePurchaseState();
            // cc.sys.localStorage.setItem('itemIndex',this.index.toString());
            // cc.sys.localStorage.setItem('price', Global.dataHook[this.index].price.toString);
            this.index++;
            this.savePurchaseState();
            console.log(this.index);
            this.checkClick();
            ShuShiCarb_ShopView_1.default.instace.updateGold();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            this.updatePrice(this.index);
            console.log("data Hoook ", ShuShiCarb_Global_1.default.dataHook);
        }
        else {
            this.nCheckmask.active = true;
            this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        }
    };
    ShuShiCarbItemHook.prototype.updatePrice = function (index) {
        if (index < ShuShiCarb_Global_1.default.dataHook.length) {
            this.lbPrice.string = ShuShiCarb_Global_1.default.dataHook[index].price + ' ';
            this.lbLeverSpeedNew.string = ShuShiCarb_Global_1.default.dataHook[index].speed + 1 + ' ';
            this.lbLeverSpeedOld.string = ShuShiCarb_Global_1.default.dataHook[index].speed + ' ' + ' -> ';
        }
        else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
            this.lbLeverSpeedOld.string = "Max";
        }
    };
    ShuShiCarbItemHook.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemHook.prototype, "lbPrice", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemHook.prototype, "nBtnBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemHook.prototype, "nStateBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemHook.prototype, "nCheckmask", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemHook.prototype, "lbLeverSpeedOld", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemHook.prototype, "lbLeverSpeedNew", void 0);
    ShuShiCarbItemHook = __decorate([
        ccclass
    ], ShuShiCarbItemHook);
    return ShuShiCarbItemHook;
}(cc.Component));
exports.default = ShuShiCarbItemHook;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5JdGVtSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwRUFBb0U7QUFDcEUsZ0VBQWdEO0FBQ2hELDZEQUF1RDtBQUdqRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQTBIQztRQXZIRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixxQkFBZSxHQUFhLElBQUksQ0FBQztRQUVqQyxxQkFBZSxHQUFhLElBQUksQ0FBQztRQUVqQyxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFLLEdBQUcsSUFBSSxDQUFBOztRQXVHWixpQkFBaUI7SUFDckIsQ0FBQztJQXZHRyxRQUFRO0lBRVIsb0NBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCx3QkFBd0I7SUFHeEIsbUNBQU0sR0FBTjtRQUNJLGlCQUFpQjtRQUNqQiw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLEdBQUcs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QUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkM7SUFFTCxDQUFDO0lBQ0Qsa0NBQUssR0FBTDtJQUVBLENBQUM7SUFwSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytEQUNjO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0RBQ2M7SUFkaEIsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0EwSHRDO0lBQUQseUJBQUM7Q0ExSEQsQUEwSEMsQ0ExSCtDLEVBQUUsQ0FBQyxTQUFTLEdBMEgzRDtrQkExSG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuaW1wb3J0IFNodVNoaUNhcmJTaG9wVmlldyBmcm9tIFwiLi9TaHVTaGlDYXJiLlNob3BWaWV3XCI7XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSXRlbUhvb2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiUHJpY2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQnRuQnV5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuU3RhdGVCdXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5DaGVja21hc2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTGV2ZXJTcGVlZE9sZDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkxldmVyU3BlZWROZXc6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIGluZGV4ID0gMDtcbiAgICBpc0NoZWNrID0gZmFsc2U7XG4gICAgX2RhdGEgPSBudWxsXG4gICAgLy8gZGF0YTtcbiBcbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMublN0YXRlQnV5LmFjdGl2ZSA9IGRhdGEuaXNCdXk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBcIiwgZGF0YSk7XG4gICAgfVxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy90aGlzLnNldERhdGEoKTtcbiAgICAgICAgLy90aGlzLmNoZWNrQ2xpY2sodGhpcy5pbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5wcmljZSk7XG4gICAgICAgIHRoaXMuaW5kZXggPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIml0ZW1JbmRleFwiKSkgfHwgMDtcbiAgICAgICAgLy8gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmljZVwiKSkgfHwgMTUwO1xuICAgICAgICAvLyB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgpO1xuICAgICAgICB0aGlzLmxvYWRQdXJjaGFzZVN0YXRlKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDbGljaygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgpO1xuICAgIH1cblxuICAgIGxvYWRQdXJjaGFzZVN0YXRlKCkge1xuICAgICAgICBjb25zdCBwdXJjaGFzZURhdGEgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB1cmNoYXNlRGF0YVwiKSkgfHwgW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2xvYmFsLmRhdGFIb29rLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHVyY2hhc2VEYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhdGFIb29rW2ldLmlzQnV5ID0gcHVyY2hhc2VEYXRhW2ldLmlzQnV5O1xuICAgICAgICAgICAgICAgIEdsb2JhbC5kYXRhSG9va1tpXS5zcGVlZCA9IHB1cmNoYXNlRGF0YVtpXS5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5jaGlsZHJlbltpXS5hY3RpdmUgPSBwdXJjaGFzZURhdGFbaV0uaXNCdXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlUHVyY2hhc2VTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgcHVyY2hhc2VEYXRhID0gR2xvYmFsLmRhdGFIb29rLm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgICBpc0J1eTogaXRlbS5pc0J1eSxcbiAgICAgICAgICAgIHNwZWVkOiBpdGVtLnNwZWVkXG4gICAgICAgIH0pKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwdXJjaGFzZURhdGEnLCBKU09OLnN0cmluZ2lmeShwdXJjaGFzZURhdGEpKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVJbmRleCcsIEpTT04uc3RyaW5naWZ5KEdsb2JhbC5hY3RpdmVJbmRleCkpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1JbmRleCcsIHRoaXMuaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3BlZWRIb29rJywgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLnNwZWVkSG9vaykpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xlbmd0aEhvb2snLCBKU09OLnN0cmluZ2lmeShHbG9iYWwubGVuZ3RoSG9vaykpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBjaGVja0NsaWNrKCkge1xuICAgICAgICBpZih0aGlzLmluZGV4IDwgR2xvYmFsLmRhdGFIb29rLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYoR2xvYmFsLnRvdGFsR29sZCA+PSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0ucHJpY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5DaGVja21hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NoZWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgdGhpcy5uQ2hlY2ttYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuICAgIG9uQ2xpY2tCdXkoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNDaGVjayAmJiB0aGlzLmluZGV4IDwgR2xvYmFsLmRhdGFIb29rLmxlbmd0aCkge1xuICAgICAgICAgICAgR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLmlzQnV5ID0gdHJ1ZTtcbiAgICAgICAgICAgIEdsb2JhbC50b3RhbEdvbGQgLT0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLnByaWNlO1xuICAgICAgICAgICAgR2xvYmFsLnNwZWVkSG9vayArPSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0uc3BlZWQ7XG4gICAgICAgICAgICBHbG9iYWwubGVuZ3RoSG9vayArPSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0ud2lkdGhIb29rO1xuICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5bdGhpcy5pbmRleF0uYWN0aXZlID0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLmlzQnV5O1xuICAgICAgICAgICAgR2xvYmFsLmFjdGl2ZUluZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVB1cmNoYXNlU3RhdGUoKTtcbiAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbUluZGV4Jyx0aGlzLmluZGV4LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmljZScsIEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5wcmljZS50b1N0cmluZyk7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB0aGlzLnNhdmVQdXJjaGFzZVN0YXRlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDbGljaygpO1xuICAgICAgICAgICAgU2h1U2hpQ2FyYlNob3BWaWV3Lmluc3RhY2UudXBkYXRlR29sZCgpOyAgICBcbiAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS51cGRhdGVUb3RhbEdvbGQoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UodGhpcy5pbmRleCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgSG9vb2sgXCIsR2xvYmFsLmRhdGFIb29rKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlUHJpY2UoaW5kZXgpIHtcbiAgICAgICAgaWYoaW5kZXggPCBHbG9iYWwuZGF0YUhvb2subGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmxiUHJpY2Uuc3RyaW5nID0gR2xvYmFsLmRhdGFIb29rW2luZGV4XS5wcmljZSArICcgJzsgXG4gICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5zdHJpbmcgPSBHbG9iYWwuZGF0YUhvb2tbaW5kZXhdLnNwZWVkICsgMSArICcgJztcbiAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IEdsb2JhbC5kYXRhSG9va1tpbmRleF0uc3BlZWQgKyAnICcgKyAgJyAtPiAnO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxiUHJpY2Uuc3RyaW5nID0gXCJNYXhcIjtcbiAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkTmV3LnN0cmluZyA9IFwiTWF4XCI7XG4gICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5zdHJpbmcgPSBcIk1heFwiO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=