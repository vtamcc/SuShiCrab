
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemMoneyBag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75348lwHFBBC6JT2XEAoYwZ', 'ShuShiCarb.ItemMoneyBag');
// SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemMoneyBag.ts

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
var ShuShiCarbItemMoneyBag = /** @class */ (function (_super) {
    __extends(ShuShiCarbItemMoneyBag, _super);
    function ShuShiCarbItemMoneyBag() {
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
    ShuShiCarbItemMoneyBag.prototype.onLoad = function () {
        this.loadPurchaseState();
        this.checkClick();
    };
    ShuShiCarbItemMoneyBag.prototype.loadPurchaseState = function () {
        var purchaseData = JSON.parse(cc.sys.localStorage.getItem("itemMoneyBag")) || [];
        for (var i = 0; i < ShuShiCarb_Global_1.default.dataBagMoney.length; i++) {
            if (purchaseData[i]) {
                ShuShiCarb_Global_1.default.dataBagMoney[i].isBuy = purchaseData[i].isBuy;
                ShuShiCarb_Global_1.default.dataBagMoney[i].gold = purchaseData[i].gold;
                this.nStateBuy.children[i].active = purchaseData[i].isBuy;
            }
        }
    };
    ShuShiCarbItemMoneyBag.prototype.savePurchaseState = function () {
        var purchaseData = ShuShiCarb_Global_1.default.dataBagMoney.map(function (item) { return ({
            isBuy: item.isBuy,
            gold: item.gold
        }); });
        cc.sys.localStorage.setItem('itemMoneyBag', JSON.stringify(purchaseData));
        cc.sys.localStorage.setItem('activeIndexMoneyBag', JSON.stringify(ShuShiCarb_Global_1.default.activeIndex));
        cc.sys.localStorage.setItem('itemIndexMoneyBag', this.index.toString());
        cc.sys.localStorage.setItem('moneyBag', JSON.stringify(ShuShiCarb_Global_1.default.moneyBag));
    };
    ShuShiCarbItemMoneyBag.prototype.checkClick = function () {
        if (this.index < ShuShiCarb_Global_1.default.dataBagMoney.length) {
            if (ShuShiCarb_Global_1.default.totalGold >= ShuShiCarb_Global_1.default.dataBagMoney[this.index].price) {
                this.nCheckmask.active = false;
                this.isCheck = true;
            }
            else {
                this.nCheckmask.active = true;
                this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
            }
        }
    };
    ShuShiCarbItemMoneyBag.prototype.onBuy = function () {
        if (this.isCheck && this.index < ShuShiCarb_Global_1.default.dataBagMoney.length) {
            ShuShiCarb_Global_1.default.checkBagMoney = true;
            ShuShiCarb_Global_1.default.dataBagMoney[this.index].isBuy = true;
            ShuShiCarb_Global_1.default.totalGold -= ShuShiCarb_Global_1.default.dataBagMoney[this.index].price;
            this.nStateBuy.children[this.index].active = ShuShiCarb_Global_1.default.dataBagMoney[this.index].isBuy;
            ShuShiCarb_Global_1.default.activeIndexMoneyBag = this.index;
            this.savePurchaseState();
            this.index++;
            this.savePurchaseState();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            ShuShiCarb_ShopView_1.default.instace.updateGold();
            this.updatePrice(this.index);
        }
        console.log("onbuy");
    };
    ShuShiCarbItemMoneyBag.prototype.updatePrice = function (index) {
        if (index < ShuShiCarb_Global_1.default.dataBagMoney.length) {
            this.lbPrice.string = ShuShiCarb_Global_1.default.dataBagMoney[index].price + ' ';
            this.lbLeverSpeedOld.string = "0";
            this.lbLeverSpeedNew.string = ShuShiCarb_Global_1.default.dataBagMoney[index].gold + ' ';
        }
        else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
            this.lbLeverSpeedOld.string = "Max";
        }
    };
    ShuShiCarbItemMoneyBag.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemMoneyBag.prototype, "lbPrice", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemMoneyBag.prototype, "nBtnBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemMoneyBag.prototype, "nStateBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemMoneyBag.prototype, "nCheckmask", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemMoneyBag.prototype, "lbLeverSpeedOld", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemMoneyBag.prototype, "lbLeverSpeedNew", void 0);
    ShuShiCarbItemMoneyBag = __decorate([
        ccclass
    ], ShuShiCarbItemMoneyBag);
    return ShuShiCarbItemMoneyBag;
}(cc.Component));
exports.default = ShuShiCarbItemMoneyBag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxVaV9Qb3B1cFxcU2hvcFxcU2h1U2hpQ2FyYi5JdGVtTW9uZXlCYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMEVBQW9FO0FBQ3BFLGdFQUFnRDtBQUNoRCw2REFBdUQ7QUFFakQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUE4RkM7UUExRkcsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBSyxHQUFHLElBQUksQ0FBQTs7UUEwRVosaUJBQWlCO0lBQ3JCLENBQUM7SUExRUcsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsa0RBQWlCLEdBQWpCO1FBQ0ksSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUs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QUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2REFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bUVBQ2M7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttRUFDYztJQWZoQixzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQThGMUM7SUFBRCw2QkFBQztDQTlGRCxBQThGQyxDQTlGbUQsRUFBRSxDQUFDLFNBQVMsR0E4Ri9EO2tCQTlGb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdhbWVcIjtcclxuaW1wb3J0IFNodVNoaUNhcmJHYW1lTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vU2h1U2hpQ2FyYi5HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xyXG5pbXBvcnQgU2h1U2hpQ2FyYlNob3BWaWV3IGZyb20gXCIuL1NodVNoaUNhcmIuU2hvcFZpZXdcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkl0ZW1Nb25leUJhZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlByaWNlOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5CdG5CdXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuU3RhdGVCdXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuQ2hlY2ttYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkxldmVyU3BlZWRPbGQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTGV2ZXJTcGVlZE5ldzogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGluZGV4ID0gMDtcclxuICAgIGlzQ2hlY2sgPSBmYWxzZTtcclxuICAgIF9kYXRhID0gbnVsbFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZFB1cmNoYXNlU3RhdGUoKVxyXG4gICAgICAgIHRoaXMuY2hlY2tDbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQdXJjaGFzZVN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHB1cmNoYXNlRGF0YSA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXRlbU1vbmV5QmFnXCIpKSB8fCBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdsb2JhbC5kYXRhQmFnTW9uZXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHB1cmNoYXNlRGF0YVtpXSkge1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhdGFCYWdNb25leVtpXS5pc0J1eSA9IHB1cmNoYXNlRGF0YVtpXS5pc0J1eTtcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYXRhQmFnTW9uZXlbaV0uZ29sZCA9IHB1cmNoYXNlRGF0YVtpXS5nb2xkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5baV0uYWN0aXZlID0gcHVyY2hhc2VEYXRhW2ldLmlzQnV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVQdXJjaGFzZVN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHB1cmNoYXNlRGF0YSA9IEdsb2JhbC5kYXRhQmFnTW9uZXkubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICAgICAgaXNCdXk6IGl0ZW0uaXNCdXksXHJcbiAgICAgICAgICAgIGdvbGQ6IGl0ZW0uZ29sZFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1Nb25leUJhZycsIEpTT04uc3RyaW5naWZ5KHB1cmNoYXNlRGF0YSkpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlSW5kZXhNb25leUJhZycsIEpTT04uc3RyaW5naWZ5KEdsb2JhbC5hY3RpdmVJbmRleCkpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbUluZGV4TW9uZXlCYWcnLCB0aGlzLmluZGV4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9uZXlCYWcnLCBKU09OLnN0cmluZ2lmeShHbG9iYWwubW9uZXlCYWcpKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NsaWNrKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaW5kZXggPCBHbG9iYWwuZGF0YUJhZ01vbmV5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZihHbG9iYWwudG90YWxHb2xkID49IEdsb2JhbC5kYXRhQmFnTW9uZXlbdGhpcy5pbmRleF0ucHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gIFxyXG5cclxuICAgIG9uQnV5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2hlY2sgJiYgdGhpcy5pbmRleCA8IEdsb2JhbC5kYXRhQmFnTW9uZXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbC5jaGVja0JhZ01vbmV5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XS5pc0J1eSA9IHRydWU7XHJcbiAgICAgICAgICAgIEdsb2JhbC50b3RhbEdvbGQgLT0gR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XS5wcmljZTtcclxuICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5bdGhpcy5pbmRleF0uYWN0aXZlID0gR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XS5pc0J1eTtcclxuICAgICAgICAgICAgR2xvYmFsLmFjdGl2ZUluZGV4TW9uZXlCYWcgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVQdXJjaGFzZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5zYXZlUHVyY2hhc2VTdGF0ZSgpO1xyXG4gICAgICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlVG90YWxHb2xkKCk7XHJcbiAgICAgICAgICAgIFNodVNoaUNhcmJTaG9wVmlldy5pbnN0YWNlLnVwZGF0ZUdvbGQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UodGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25idXlcIilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcmljZShpbmRleCkge1xyXG4gICAgICAgIGlmKGluZGV4IDwgR2xvYmFsLmRhdGFCYWdNb25leS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5sYlByaWNlLnN0cmluZyA9IEdsb2JhbC5kYXRhQmFnTW9uZXlbaW5kZXhdLnByaWNlICsgJyAnO1xyXG4gICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWROZXcuc3RyaW5nID0gR2xvYmFsLmRhdGFCYWdNb25leVtpbmRleF0uZ29sZCArICcgJztcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSBcIk1heFwiO1xyXG4gICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5zdHJpbmcgPSBcIk1heFwiO1xyXG4gICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5zdHJpbmcgPSBcIk1heFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=