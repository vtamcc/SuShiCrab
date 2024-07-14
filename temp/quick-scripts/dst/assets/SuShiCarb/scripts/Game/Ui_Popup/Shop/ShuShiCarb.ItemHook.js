
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
    };
    ShuShiCarbItemHook.prototype.checkClick = function () {
        if (ShuShiCarb_Global_1.default.totalGold >= ShuShiCarb_Global_1.default.dataHook[this.index].price) {
            this.nCheckmask.active = false;
            this.isCheck = true;
        }
        else {
            this.nCheckmask.active = true;
            this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        }
    };
    ShuShiCarbItemHook.prototype.onClickBuy = function () {
        if (this.isCheck) {
            ShuShiCarb_Global_1.default.dataHook[this.index].isBuy = true;
            ShuShiCarb_Global_1.default.totalGold -= ShuShiCarb_Global_1.default.dataHook[this.index].price;
            ShuShiCarb_Global_1.default.speedHook += ShuShiCarb_Global_1.default.dataHook[this.index].speed;
            this.nStateBuy.children[this.index].active = ShuShiCarb_Global_1.default.dataHook[this.index].isBuy;
            this.savePurchaseState();
            cc.sys.localStorage.setItem('itemIndex', this.index.toString());
            // cc.sys.localStorage.setItem('price', Global.dataHook[this.index].price.toString);
            this.index++;
            console.log(this.index);
            this.checkClick();
            ShuShiCarb_ShopView_1.default.instace.updateGold();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            this.updatePrice(this.index);
            console.log("data Hoook ", ShuShiCarb_Global_1.default.dataHook);
        }
    };
    ShuShiCarbItemHook.prototype.updatePrice = function (index) {
        this.lbPrice.string = ShuShiCarb_Global_1.default.dataHook[index].price + ' ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxVaV9Qb3B1cFxcU2hvcFxcU2h1U2hpQ2FyYi5JdGVtSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwRUFBb0U7QUFDcEUsZ0VBQWdEO0FBQ2hELDZEQUF1RDtBQUdqRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQStGQztRQTVGRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFLLEdBQUcsSUFBSSxDQUFBOztRQWdGWixpQkFBaUI7SUFDckIsQ0FBQztJQWhGRyxRQUFRO0lBRVIsb0NBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCx3QkFBd0I7SUFHeEIsbUNBQU0sR0FBTjtRQUNJLGlCQUFpQjtRQUNqQiw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RSx5RkFBeUY7UUFDekYsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0ksSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLDJCQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakIsMkJBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2pELDJCQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUM3RDtTQUNKO0lBQ0wsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNJLElBQU0sWUFBWSxHQUFHLDJCQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUM7WUFDOUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNwQixDQUFDLEVBSCtDLENBRy9DLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCx1Q0FBVSxHQUFWO1FBQ0csSUFBRywyQkFBTSxDQUFDLFNBQVMsSUFBSSwyQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFLO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzdEO0lBQ0wsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDSSxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYiwyQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN6QywyQkFBTSxDQUFDLFNBQVMsSUFBSSwyQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RELDJCQUFNLENBQUMsU0FBUyxJQUFJLDJCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBSywyQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQy9ELG9GQUFvRjtZQUNwRixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsNkJBQWtCLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3hDLGdDQUFxQixDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQywyQkFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO0lBRUwsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsMkJBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0lBQ0Qsa0NBQUssR0FBTDtJQUVBLENBQUM7SUF6RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDTTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDUztJQVhWLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBK0Z0QztJQUFELHlCQUFDO0NBL0ZELEFBK0ZDLENBL0YrQyxFQUFFLENBQUMsU0FBUyxHQStGM0Q7a0JBL0ZvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uLy4uL1NodVNoaUNhcmIuR2xvYmFsXCI7XHJcbmltcG9ydCBTaHVTaGlDYXJiU2hvcFZpZXcgZnJvbSBcIi4vU2h1U2hpQ2FyYi5TaG9wVmlld1wiO1xyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkl0ZW1Ib29rIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlByaWNlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuQnRuQnV5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5TdGF0ZUJ1eTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5DaGVja21hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgaW5kZXggPSAwO1xyXG4gICAgaXNDaGVjayA9IGZhbHNlO1xyXG4gICAgX2RhdGEgPSBudWxsXHJcbiAgICAvLyBkYXRhO1xyXG4gXHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5hY3RpdmUgPSBkYXRhLmlzQnV5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBcIiwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy90aGlzLnNldERhdGEoKTtcclxuICAgICAgICAvL3RoaXMuY2hlY2tDbGljayh0aGlzLmluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0ucHJpY2UpO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIml0ZW1JbmRleFwiKSkgfHwgMDtcclxuICAgICAgICAvLyBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0gPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaWNlXCIpKSB8fCAxNTA7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVQcmljZSh0aGlzLmluZGV4KTtcclxuICAgICAgICB0aGlzLmxvYWRQdXJjaGFzZVN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0NsaWNrKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSh0aGlzLmluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHVyY2hhc2VTdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBwdXJjaGFzZURhdGEgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB1cmNoYXNlRGF0YVwiKSkgfHwgW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHbG9iYWwuZGF0YUhvb2subGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHB1cmNoYXNlRGF0YVtpXSkge1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhdGFIb29rW2ldLmlzQnV5ID0gcHVyY2hhc2VEYXRhW2ldLmlzQnV5O1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhdGFIb29rW2ldLnNwZWVkID0gcHVyY2hhc2VEYXRhW2ldLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5baV0uYWN0aXZlID0gcHVyY2hhc2VEYXRhW2ldLmlzQnV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVQdXJjaGFzZVN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHB1cmNoYXNlRGF0YSA9IEdsb2JhbC5kYXRhSG9vay5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICAgICAgICBpc0J1eTogaXRlbS5pc0J1eSxcclxuICAgICAgICAgICAgc3BlZWQ6IGl0ZW0uc3BlZWRcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwdXJjaGFzZURhdGEnLCBKU09OLnN0cmluZ2lmeShwdXJjaGFzZURhdGEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tDbGljaygpIHtcclxuICAgICAgIGlmKEdsb2JhbC50b3RhbEdvbGQgPj0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLnByaWNlKSB7XHJcbiAgICAgICAgICAgdGhpcy5uQ2hlY2ttYXNrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgIHRoaXMuaXNDaGVjayA9IHRydWU7XHJcbiAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5CdG5CdXkuZ2V0Q29tcG9uZW50KGNjLlRvZ2dsZSkuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tCdXkoKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0NoZWNrKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5pc0J1eSA9IHRydWU7XHJcbiAgICAgICAgICAgIEdsb2JhbC50b3RhbEdvbGQgLT0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLnByaWNlO1xyXG4gICAgICAgICAgICBHbG9iYWwuc3BlZWRIb29rICs9IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5zcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5bdGhpcy5pbmRleF0uYWN0aXZlID0gICBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0uaXNCdXk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVB1cmNoYXNlU3RhdGUoKTtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtSW5kZXgnLHRoaXMuaW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJpY2UnLCBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0ucHJpY2UudG9TdHJpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0NsaWNrKCk7XHJcbiAgICAgICAgICAgIFNodVNoaUNhcmJTaG9wVmlldy5pbnN0YWNlLnVwZGF0ZUdvbGQoKTtcclxuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLnVwZGF0ZVRvdGFsR29sZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgSG9vb2sgXCIsR2xvYmFsLmRhdGFIb29rKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcmljZShpbmRleCkge1xyXG4gICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSBHbG9iYWwuZGF0YUhvb2tbaW5kZXhdLnByaWNlICsgJyAnOyBcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=