
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc267ASAKxLjZBm3npC1v+1', 'ShuShiCarb.ItemShop');
// SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemShop.ts

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
var ShuShiCarbItemShop = /** @class */ (function (_super) {
    __extends(ShuShiCarbItemShop, _super);
    function ShuShiCarbItemShop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nItemShop = null;
        _this.lbPrice = null;
        _this.nBtnBuy = null;
        _this.nStateBuy = null;
        _this.nCheckmask = null;
        _this.lbLeverSpeedOld = null;
        _this.lbLeverSpeedNew = null;
        _this.lsSpFItemShop = [];
        _this.index = 0;
        _this.isCheck = false;
        _this._data = null;
        _this.itemId = 0;
        return _this;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {
        //     this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndex")) || 0;
        //     this.loadPurchaseState();
        //     this.checkClick();
        //     this.updatePrice(this.index);
        // }
        // loadPurchaseState() {
        //     const purchaseData = JSON.parse(cc.sys.localStorage.getItem("purchaseData")) || [];
        //     for (let i = 0; i < Global.dataHook.length; i++) {
        //         if (purchaseData[i]) {
        //             Global.dataHook[i].isBuy = purchaseData[i].isBuy;
        //             Global.dataHook[i].speed = purchaseData[i].speed;
        //             this.nStateBuy.children[i].active = purchaseData[i].isBuy;
        //         }
        //     }
        // }
        // savePurchaseState() {
        //     const purchaseData = Global.dataHook.map(item => ({
        //         isBuy: item.isBuy,
        //         speed: item.speed
        //     }));
        //     cc.sys.localStorage.setItem('purchaseData', JSON.stringify(purchaseData));
        //     cc.sys.localStorage.setItem('activeIndex', JSON.stringify(Global.activeIndex));
        //     cc.sys.localStorage.setItem('itemIndex', this.index.toString());
        //     cc.sys.localStorage.setItem('speedHook', JSON.stringify(Global.speedHook));
        //     cc.sys.localStorage.setItem('lengthHook', JSON.stringify(Global.lengthHook));
        // }
        // checkClick() {
        //     // if(this.index < Global.dataHook.length) {
        //     //     if(Global.totalGold >= Global.dataHook[this.index].price) {
        //     //         this.nCheckmask.active = false;
        //     //         this.isCheck = true;
        //     //     }else {
        //     //          this.nCheckmask.active = true;
        //     //          this.isCheck = false;
        //     //          this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        //     //      }
        //     // }
        //     if(this.index < Global.dataHook.length && Global.totalGold >= Global.dataHook[this.index].price) { 
        //             this.nCheckmask.active = false;
        //             this.isCheck = true; 
        //     }
        //     else {
        //         this.nCheckmask.active = true;
        //         this.isCheck = false;
        //         this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        //     }
        //     console.log(this.index);
        // }
        // onClickBuy() {
        //     if(this.isCheck && this.index < Global.dataHook.length) {
        //         Global.dataHook[this.index].isBuy = true;
        //         Global.totalGold -= Global.dataHook[this.index].price;
        //         Global.speedHook += Global.dataHook[this.index].speed;
        //         Global.lengthHook += Global.dataHook[this.index].widthHook;
        //         this.nStateBuy.children[this.index].active = Global.dataHook[this.index].isBuy;
        //         Global.activeIndex = this.index;
        //         this.index++;
        //         this.checkClick();
        //         this.savePurchaseState();
        //         ShuShiCarbGameManager.instance.updateTotalGold();
        //         ShuShiCarbShopView.instace.updateGold();
        //         this.updatePrice(this.index);
        //         console.log("data Hoook ",Global.dataHook);
        //     } else {
        //         this.nCheckmask.active = true;
        //         this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        //     }
        // }
        // updatePrice(index) {
        //     if(index < Global.dataHook.length) {
        //         this.lbPrice.string = Global.dataHook[index].price + ' '; 
        //         this.lbLeverSpeedNew.string = Global.dataHook[index].speed + 1 + ' ';
        //         this.lbLeverSpeedOld.string = Global.dataHook[index].speed + ' ' +  ' -> ';
        //     }else {
        //         this.lbPrice.string = "Max";
        //         this.lbLeverSpeedNew.string = "Max";
        //         this.lbLeverSpeedOld.string = "Max";
        //     }
        // }
        // start () {
        // }
        // update (dt) {}
    }
    ShuShiCarbItemShop.prototype.onLoad = function () {
        this.loadPurchaseState();
        this.checkClick();
    };
    ShuShiCarbItemShop.prototype.setData = function (id) {
        this.itemId = id;
        switch (id) {
            case 0: // hook
                this._data = ShuShiCarb_Global_1.default.dataHook;
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                break;
            case 1: // Bag money
                this._data = ShuShiCarb_Global_1.default.dataBagMoney;
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                this.lbLeverSpeedOld.node.active = false;
                break;
            case 2: // time Happy
                this._data = ShuShiCarb_Global_1.default.dataTimeHappy;
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                this.lbLeverSpeedOld.node.active = false;
                break;
            default:
                break;
        }
        this.updatePrice(this.index);
    };
    ShuShiCarbItemShop.prototype.updatePrice = function (index) {
        if (index < this._data.length) {
            this.lbPrice.string = this._data[index].price + ' ';
            this.lbLeverSpeedOld.string = "0";
            this.lbLeverSpeedNew.string = this._data[index].gold ? this._data[index].gold + ' ' : this._data[index].time + ' ';
        }
        else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
            this.lbLeverSpeedOld.string = "Max";
        }
    };
    ShuShiCarbItemShop.prototype.loadPurchaseState = function () {
        var purchaseData = JSON.parse(cc.sys.localStorage.getItem("itemShopData")) || {
            dataHook: ShuShiCarb_Global_1.default.dataHook,
            dataBagMoney: ShuShiCarb_Global_1.default.dataBagMoney,
            dataTimeHappy: ShuShiCarb_Global_1.default.dataTimeHappy
        };
        ShuShiCarb_Global_1.default.dataHook = purchaseData.dataHook;
        ShuShiCarb_Global_1.default.dataBagMoney = purchaseData.dataBagMoney;
        ShuShiCarb_Global_1.default.dataTimeHappy = purchaseData.dataTimeHappy;
        // Kiểm tra trạng thái mua của item hiện tại
        this.index = 0;
        while (this.index < this._data.length && this._data[this.index].isBuy) {
            this.nStateBuy.children[this.index].active = true;
            this.index++;
        }
        this.checkClick();
    };
    ShuShiCarbItemShop.prototype.savePurchaseState = function () {
        var purchaseData = {
            dataHook: ShuShiCarb_Global_1.default.dataHook,
            dataBagMoney: ShuShiCarb_Global_1.default.dataBagMoney,
            dataTimeHappy: ShuShiCarb_Global_1.default.dataTimeHappy,
        };
        cc.sys.localStorage.setItem('itemShopData', JSON.stringify(purchaseData));
    };
    ShuShiCarbItemShop.prototype.checkClick = function () {
        if (this.index < this._data.length) {
            if (ShuShiCarb_Global_1.default.totalGold >= this._data[this.index].price) {
                this.nCheckmask.active = false;
                this.isCheck = true;
                this.nBtnBuy.getComponent(cc.Button).interactable = true; // Nút "Mua" sáng lên
            }
            else {
                this.nCheckmask.active = true;
                this.isCheck = false;
                this.nBtnBuy.getComponent(cc.Button).interactable = false; // Nút "Mua" bị tắt
            }
        }
    };
    ShuShiCarbItemShop.prototype.checkBuy = function () {
        return ShuShiCarb_Global_1.default.totalGold >= this._data[this.index].price;
    };
    ShuShiCarbItemShop.prototype.onBuy = function () {
        if (this.checkBuy() && this.index < this._data.length) {
            this._data[this.index].isBuy = true;
            ShuShiCarb_Global_1.default.totalGold -= this._data[this.index].price;
            this.nStateBuy.children[this.index].active = this._data[this.index].isBuy;
            switch (this.itemId) {
                case 0:
                    ShuShiCarb_Global_1.default.activeIndex = this.index;
                    ShuShiCarb_Global_1.default.speedHook += this._data[this.index].speed;
                    break;
                case 1:
                    ShuShiCarb_Global_1.default.activeIndexMoneyBag = this.index;
                    ShuShiCarb_Global_1.default.moneyBag += this._data[this.index].gold;
                    break;
                case 2:
                    ShuShiCarb_Global_1.default.activeIndexTimeHappy = this.index;
                    ShuShiCarb_Global_1.default.timeHappy += this._data[this.index].time;
                    break;
            }
            this.savePurchaseState();
            this.index++;
            this.savePurchaseState();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            ShuShiCarb_ShopView_1.default.instance.updateGold();
            this.updatePrice(this.index);
            this.checkClick(); // Gọi lại checkClick để cập nhật trạng thái nút sau khi mua
        }
        console.log("onbuy");
    };
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemShop.prototype, "nItemShop", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemShop.prototype, "lbPrice", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemShop.prototype, "nBtnBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemShop.prototype, "nStateBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemShop.prototype, "nCheckmask", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemShop.prototype, "lbLeverSpeedOld", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemShop.prototype, "lbLeverSpeedNew", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ShuShiCarbItemShop.prototype, "lsSpFItemShop", void 0);
    ShuShiCarbItemShop = __decorate([
        ccclass
    ], ShuShiCarbItemShop);
    return ShuShiCarbItemShop;
}(cc.Component));
exports.default = ShuShiCarbItemShop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5JdGVtU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwRUFBb0U7QUFDcEUsZ0VBQWdEO0FBQ2hELDZEQUF1RDtBQUdqRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQWtQQztRQS9PRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBRWpDLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBR2pDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUNyQyxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ1osWUFBTSxHQUFHLENBQUMsQ0FBQzs7UUF3SFgsd0JBQXdCO1FBR3hCLGNBQWM7UUFDZCw4RUFBOEU7UUFDOUUsZ0NBQWdDO1FBQ2hDLHlCQUF5QjtRQUN6QixvQ0FBb0M7UUFDcEMsSUFBSTtRQUVKLHdCQUF3QjtRQUN4QiwwRkFBMEY7UUFDMUYseURBQXlEO1FBQ3pELGlDQUFpQztRQUNqQyxnRUFBZ0U7UUFDaEUsZ0VBQWdFO1FBQ2hFLHlFQUF5RTtRQUN6RSxZQUFZO1FBQ1osUUFBUTtRQUNSLElBQUk7UUFFSix3QkFBd0I7UUFDeEIsMERBQTBEO1FBQzFELDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsV0FBVztRQUNYLGlGQUFpRjtRQUNqRixzRkFBc0Y7UUFDdEYsdUVBQXVFO1FBQ3ZFLGtGQUFrRjtRQUNsRixvRkFBb0Y7UUFDcEYsSUFBSTtRQUdKLGlCQUFpQjtRQUNqQixtREFBbUQ7UUFDbkQseUVBQXlFO1FBQ3pFLGlEQUFpRDtRQUNqRCxzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLGlEQUFpRDtRQUNqRCx3Q0FBd0M7UUFDeEMsNkVBQTZFO1FBQzdFLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsMEdBQTBHO1FBQzFHLDhDQUE4QztRQUM5QyxvQ0FBb0M7UUFDcEMsUUFBUTtRQUNSLGFBQWE7UUFDYix5Q0FBeUM7UUFDekMsZ0NBQWdDO1FBQ2hDLHFFQUFxRTtRQUNyRSxRQUFRO1FBQ1IsK0JBQStCO1FBRS9CLElBQUk7UUFFSixpQkFBaUI7UUFDakIsZ0VBQWdFO1FBQ2hFLG9EQUFvRDtRQUNwRCxpRUFBaUU7UUFDakUsaUVBQWlFO1FBQ2pFLHNFQUFzRTtRQUV0RSwwRkFBMEY7UUFDMUYsMkNBQTJDO1FBRTNDLHdCQUF3QjtRQUN4Qiw2QkFBNkI7UUFDN0Isb0NBQW9DO1FBQ3BDLDREQUE0RDtRQUM1RCxtREFBbUQ7UUFDbkQsd0NBQXdDO1FBQ3hDLHNEQUFzRDtRQUN0RCxlQUFlO1FBQ2YseUNBQXlDO1FBQ3pDLHFFQUFxRTtRQUNyRSxRQUFRO1FBRVIsSUFBSTtRQUVKLHVCQUF1QjtRQUN2QiwyQ0FBMkM7UUFDM0MscUVBQXFFO1FBQ3JFLGdGQUFnRjtRQUNoRixzRkFBc0Y7UUFDdEYsY0FBYztRQUNkLHVDQUF1QztRQUN2QywrQ0FBK0M7UUFDL0MsK0NBQStDO1FBQy9DLFFBQVE7UUFFUixJQUFJO1FBQ0osYUFBYTtRQUViLElBQUk7UUFFSixpQkFBaUI7SUFDckIsQ0FBQztJQXpORyxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxvQ0FBTyxHQUFQLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFFBQVEsRUFBRSxFQUFFO1lBQ1IsS0FBSyxDQUFDLEVBQUUsT0FBTztnQkFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLDJCQUFNLENBQUMsUUFBUSxDQUFDO2dCQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVFLE1BQU07WUFDVixLQUFLLENBQUMsRUFBRSxZQUFZO2dCQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLDJCQUFNLENBQUMsWUFBWSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3pDLE1BQU07WUFDVixLQUFLLENBQUMsRUFBRSxhQUFhO2dCQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLDJCQUFNLENBQUMsYUFBYSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3pDLE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUN0SDthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0ksSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSTtZQUM1RSxRQUFRLEVBQUUsMkJBQU0sQ0FBQyxRQUFRO1lBQ3pCLFlBQVksRUFBRSwyQkFBTSxDQUFDLFlBQVk7WUFDakMsYUFBYSxFQUFFLDJCQUFNLENBQUMsYUFBYTtTQUN0QyxDQUFDO1FBRUYsMkJBQU0sQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUN4QywyQkFBTSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQ2hELDJCQUFNLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFFbEQsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNJLElBQU0sWUFBWSxHQUFHO1lBQ2pCLFFBQVEsRUFBRSwyQkFBTSxDQUFDLFFBQVE7WUFDekIsWUFBWSxFQUFFLDJCQUFNLENBQUMsWUFBWTtZQUNqQyxhQUFhLEVBQUUsMkJBQU0sQ0FBQyxhQUFhO1NBQ3RDLENBQUM7UUFDRixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLDJCQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBRSxxQkFBcUI7YUFDbkY7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxtQkFBbUI7YUFDakY7U0FDSjtJQUNMLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksT0FBTywyQkFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUVELGtDQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDcEMsMkJBQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRTFFLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsS0FBSyxDQUFDO29CQUNGLDJCQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQ2hDLDJCQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDakQsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsMkJBQU0sQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUN4QywyQkFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLDJCQUFNLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDekMsMkJBQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNoRCxNQUFNO2FBQ2I7WUFFRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixnQ0FBcUIsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDakQsNkJBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLDREQUE0RDtTQUNsRjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQTNJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrREFDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytEQUNjO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkRBQ1k7SUFuQnBCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBa1B0QztJQUFELHlCQUFDO0NBbFBELEFBa1BDLENBbFArQyxFQUFFLENBQUMsU0FBUyxHQWtQM0Q7a0JBbFBvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHYW1lTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vU2h1U2hpQ2FyYi5HYW1lTWFuYWdlclwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiU2hvcFZpZXcgZnJvbSBcIi4vU2h1U2hpQ2FyYi5TaG9wVmlld1wiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkl0ZW1TaG9wIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5JdGVtU2hvcDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiUHJpY2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQnRuQnV5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuU3RhdGVCdXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5DaGVja21hc2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTGV2ZXJTcGVlZE9sZDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkxldmVyU3BlZWROZXc6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsc1NwRkl0ZW1TaG9wOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgaW5kZXggPSAwO1xuICAgIGlzQ2hlY2sgPSBmYWxzZTtcbiAgICBfZGF0YSA9IG51bGxcbiAgICBpdGVtSWQgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRQdXJjaGFzZVN0YXRlKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDbGljaygpO1xuICAgIH1cblxuICAgIHNldERhdGEoaWQpIHtcbiAgICAgICAgdGhpcy5pdGVtSWQgPSBpZDtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSAwOiAvLyBob29rXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IEdsb2JhbC5kYXRhSG9vaztcbiAgICAgICAgICAgICAgICB0aGlzLm5JdGVtU2hvcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubHNTcEZJdGVtU2hvcFtpZF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6IC8vIEJhZyBtb25leVxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBHbG9iYWwuZGF0YUJhZ01vbmV5O1xuICAgICAgICAgICAgICAgIHRoaXMubkl0ZW1TaG9wLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5sc1NwRkl0ZW1TaG9wW2lkXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOiAvLyB0aW1lIEhhcHB5XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IEdsb2JhbC5kYXRhVGltZUhhcHB5O1xuICAgICAgICAgICAgICAgIHRoaXMubkl0ZW1TaG9wLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5sc1NwRkl0ZW1TaG9wW2lkXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByaWNlKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmxiUHJpY2Uuc3RyaW5nID0gdGhpcy5fZGF0YVtpbmRleF0ucHJpY2UgKyAnICc7XG4gICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkTmV3LnN0cmluZyA9IHRoaXMuX2RhdGFbaW5kZXhdLmdvbGQgPyB0aGlzLl9kYXRhW2luZGV4XS5nb2xkICsgJyAnIDogdGhpcy5fZGF0YVtpbmRleF0udGltZSArICcgJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSBcIk1heFwiO1xuICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWROZXcuc3RyaW5nID0gXCJNYXhcIjtcbiAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IFwiTWF4XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkUHVyY2hhc2VTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgcHVyY2hhc2VEYXRhID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpdGVtU2hvcERhdGFcIikpIHx8IHtcbiAgICAgICAgICAgIGRhdGFIb29rOiBHbG9iYWwuZGF0YUhvb2ssXG4gICAgICAgICAgICBkYXRhQmFnTW9uZXk6IEdsb2JhbC5kYXRhQmFnTW9uZXksXG4gICAgICAgICAgICBkYXRhVGltZUhhcHB5OiBHbG9iYWwuZGF0YVRpbWVIYXBweVxuICAgICAgICB9O1xuXG4gICAgICAgIEdsb2JhbC5kYXRhSG9vayA9IHB1cmNoYXNlRGF0YS5kYXRhSG9vaztcbiAgICAgICAgR2xvYmFsLmRhdGFCYWdNb25leSA9IHB1cmNoYXNlRGF0YS5kYXRhQmFnTW9uZXk7XG4gICAgICAgIEdsb2JhbC5kYXRhVGltZUhhcHB5ID0gcHVyY2hhc2VEYXRhLmRhdGFUaW1lSGFwcHk7XG5cbiAgICAgICAgLy8gS2nhu4NtIHRyYSB0cuG6oW5nIHRow6FpIG11YSBj4bunYSBpdGVtIGhp4buHbiB04bqhaVxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLl9kYXRhLmxlbmd0aCAmJiB0aGlzLl9kYXRhW3RoaXMuaW5kZXhdLmlzQnV5KSB7XG4gICAgICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5jaGlsZHJlblt0aGlzLmluZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tDbGljaygpO1xuICAgIH1cblxuICAgIHNhdmVQdXJjaGFzZVN0YXRlKCkge1xuICAgICAgICBjb25zdCBwdXJjaGFzZURhdGEgPSB7XG4gICAgICAgICAgICBkYXRhSG9vazogR2xvYmFsLmRhdGFIb29rLFxuICAgICAgICAgICAgZGF0YUJhZ01vbmV5OiBHbG9iYWwuZGF0YUJhZ01vbmV5LFxuICAgICAgICAgICAgZGF0YVRpbWVIYXBweTogR2xvYmFsLmRhdGFUaW1lSGFwcHksXG4gICAgICAgIH07XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbVNob3BEYXRhJywgSlNPTi5zdHJpbmdpZnkocHVyY2hhc2VEYXRhKSk7XG4gICAgfVxuXG4gICAgY2hlY2tDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKEdsb2JhbC50b3RhbEdvbGQgPj0gdGhpcy5fZGF0YVt0aGlzLmluZGV4XS5wcmljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlOyAgLy8gTsO6dCBcIk11YVwiIHPDoW5nIGzDqm5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uQ2hlY2ttYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlOyAvLyBOw7p0IFwiTXVhXCIgYuG7iyB04bqvdFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCdXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBHbG9iYWwudG90YWxHb2xkID49IHRoaXMuX2RhdGFbdGhpcy5pbmRleF0ucHJpY2U7XG4gICAgfVxuXG4gICAgb25CdXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrQnV5KCkgJiYgdGhpcy5pbmRleCA8IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRhW3RoaXMuaW5kZXhdLmlzQnV5ID0gdHJ1ZTtcbiAgICAgICAgICAgIEdsb2JhbC50b3RhbEdvbGQgLT0gdGhpcy5fZGF0YVt0aGlzLmluZGV4XS5wcmljZTtcbiAgICAgICAgICAgIHRoaXMublN0YXRlQnV5LmNoaWxkcmVuW3RoaXMuaW5kZXhdLmFjdGl2ZSA9IHRoaXMuX2RhdGFbdGhpcy5pbmRleF0uaXNCdXk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5pdGVtSWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5hY3RpdmVJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5zcGVlZEhvb2sgKz0gdGhpcy5fZGF0YVt0aGlzLmluZGV4XS5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBHbG9iYWwuYWN0aXZlSW5kZXhNb25leUJhZyA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5tb25leUJhZyArPSB0aGlzLl9kYXRhW3RoaXMuaW5kZXhdLmdvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmFjdGl2ZUluZGV4VGltZUhhcHB5ID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLnRpbWVIYXBweSArPSB0aGlzLl9kYXRhW3RoaXMuaW5kZXhdLnRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNhdmVQdXJjaGFzZVN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB0aGlzLnNhdmVQdXJjaGFzZVN0YXRlKCk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlVG90YWxHb2xkKCk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiU2hvcFZpZXcuaW5zdGFuY2UudXBkYXRlR29sZCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZSh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDbGljaygpOyAvLyBH4buNaSBs4bqhaSBjaGVja0NsaWNrIMSR4buDIGPhuq1wIG5o4bqtdCB0cuG6oW5nIHRow6FpIG7DunQgc2F1IGtoaSBtdWFcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uYnV5XCIpO1xuICAgIH1cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIFxuICAgIC8vIG9uTG9hZCAoKSB7XG4gICAgLy8gICAgIHRoaXMuaW5kZXggPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIml0ZW1JbmRleFwiKSkgfHwgMDtcbiAgICAvLyAgICAgdGhpcy5sb2FkUHVyY2hhc2VTdGF0ZSgpO1xuICAgIC8vICAgICB0aGlzLmNoZWNrQ2xpY2soKTtcbiAgICAvLyAgICAgdGhpcy51cGRhdGVQcmljZSh0aGlzLmluZGV4KTtcbiAgICAvLyB9XG5cbiAgICAvLyBsb2FkUHVyY2hhc2VTdGF0ZSgpIHtcbiAgICAvLyAgICAgY29uc3QgcHVyY2hhc2VEYXRhID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwdXJjaGFzZURhdGFcIikpIHx8IFtdO1xuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdsb2JhbC5kYXRhSG9vay5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgaWYgKHB1cmNoYXNlRGF0YVtpXSkge1xuICAgIC8vICAgICAgICAgICAgIEdsb2JhbC5kYXRhSG9va1tpXS5pc0J1eSA9IHB1cmNoYXNlRGF0YVtpXS5pc0J1eTtcbiAgICAvLyAgICAgICAgICAgICBHbG9iYWwuZGF0YUhvb2tbaV0uc3BlZWQgPSBwdXJjaGFzZURhdGFbaV0uc3BlZWQ7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5baV0uYWN0aXZlID0gcHVyY2hhc2VEYXRhW2ldLmlzQnV5O1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gc2F2ZVB1cmNoYXNlU3RhdGUoKSB7XG4gICAgLy8gICAgIGNvbnN0IHB1cmNoYXNlRGF0YSA9IEdsb2JhbC5kYXRhSG9vay5tYXAoaXRlbSA9PiAoe1xuICAgIC8vICAgICAgICAgaXNCdXk6IGl0ZW0uaXNCdXksXG4gICAgLy8gICAgICAgICBzcGVlZDogaXRlbS5zcGVlZFxuICAgIC8vICAgICB9KSk7XG4gICAgLy8gICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHVyY2hhc2VEYXRhJywgSlNPTi5zdHJpbmdpZnkocHVyY2hhc2VEYXRhKSk7XG4gICAgLy8gICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlSW5kZXgnLCBKU09OLnN0cmluZ2lmeShHbG9iYWwuYWN0aXZlSW5kZXgpKTtcbiAgICAvLyAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtSW5kZXgnLCB0aGlzLmluZGV4LnRvU3RyaW5nKCkpO1xuICAgIC8vICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NwZWVkSG9vaycsIEpTT04uc3RyaW5naWZ5KEdsb2JhbC5zcGVlZEhvb2spKTtcbiAgICAvLyAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsZW5ndGhIb29rJywgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmxlbmd0aEhvb2spKTtcbiAgICAvLyB9XG4gICAgXG4gICAgXG4gICAgLy8gY2hlY2tDbGljaygpIHtcbiAgICAvLyAgICAgLy8gaWYodGhpcy5pbmRleCA8IEdsb2JhbC5kYXRhSG9vay5sZW5ndGgpIHtcbiAgICAvLyAgICAgLy8gICAgIGlmKEdsb2JhbC50b3RhbEdvbGQgPj0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLnByaWNlKSB7XG4gICAgLy8gICAgIC8vICAgICAgICAgdGhpcy5uQ2hlY2ttYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vICAgICAvLyAgICAgICAgIHRoaXMuaXNDaGVjayA9IHRydWU7XG4gICAgLy8gICAgIC8vICAgICB9ZWxzZSB7XG4gICAgLy8gICAgIC8vICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICAvLyAgICAgICAgICB0aGlzLmlzQ2hlY2sgPSBmYWxzZTtcbiAgICAvLyAgICAgLy8gICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAvLyAgICAgIH1cbiAgICAvLyAgICAgLy8gfVxuICAgIC8vICAgICBpZih0aGlzLmluZGV4IDwgR2xvYmFsLmRhdGFIb29rLmxlbmd0aCAmJiBHbG9iYWwudG90YWxHb2xkID49IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5wcmljZSkgeyBcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5DaGVja21hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0NoZWNrID0gdHJ1ZTsgXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLm5DaGVja21hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNDaGVjayA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuaW5kZXgpO1xuICAgICAgXG4gICAgLy8gfVxuXG4gICAgLy8gb25DbGlja0J1eSgpIHtcbiAgICAvLyAgICAgaWYodGhpcy5pc0NoZWNrICYmIHRoaXMuaW5kZXggPCBHbG9iYWwuZGF0YUhvb2subGVuZ3RoKSB7XG4gICAgLy8gICAgICAgICBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0uaXNCdXkgPSB0cnVlO1xuICAgIC8vICAgICAgICAgR2xvYmFsLnRvdGFsR29sZCAtPSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0ucHJpY2U7XG4gICAgLy8gICAgICAgICBHbG9iYWwuc3BlZWRIb29rICs9IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5zcGVlZDtcbiAgICAvLyAgICAgICAgIEdsb2JhbC5sZW5ndGhIb29rICs9IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS53aWR0aEhvb2s7XG4gICAgICAgICAgXG4gICAgLy8gICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5jaGlsZHJlblt0aGlzLmluZGV4XS5hY3RpdmUgPSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0uaXNCdXk7XG4gICAgLy8gICAgICAgICBHbG9iYWwuYWN0aXZlSW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgLy8gICAgICAgICB0aGlzLmNoZWNrQ2xpY2soKTtcbiAgICAvLyAgICAgICAgIHRoaXMuc2F2ZVB1cmNoYXNlU3RhdGUoKTtcbiAgICAvLyAgICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS51cGRhdGVUb3RhbEdvbGQoKTtcbiAgICAvLyAgICAgICAgIFNodVNoaUNhcmJTaG9wVmlldy5pbnN0YWNlLnVwZGF0ZUdvbGQoKTtcbiAgICAvLyAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UodGhpcy5pbmRleCk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgSG9vb2sgXCIsR2xvYmFsLmRhdGFIb29rKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICB9XG4gICAgICAgXG4gICAgLy8gfVxuXG4gICAgLy8gdXBkYXRlUHJpY2UoaW5kZXgpIHtcbiAgICAvLyAgICAgaWYoaW5kZXggPCBHbG9iYWwuZGF0YUhvb2subGVuZ3RoKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmxiUHJpY2Uuc3RyaW5nID0gR2xvYmFsLmRhdGFIb29rW2luZGV4XS5wcmljZSArICcgJzsgXG4gICAgLy8gICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5zdHJpbmcgPSBHbG9iYWwuZGF0YUhvb2tbaW5kZXhdLnNwZWVkICsgMSArICcgJztcbiAgICAvLyAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IEdsb2JhbC5kYXRhSG9va1tpbmRleF0uc3BlZWQgKyAnICcgKyAgJyAtPiAnO1xuICAgIC8vICAgICB9ZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLmxiUHJpY2Uuc3RyaW5nID0gXCJNYXhcIjtcbiAgICAvLyAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkTmV3LnN0cmluZyA9IFwiTWF4XCI7XG4gICAgLy8gICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5zdHJpbmcgPSBcIk1heFwiO1xuICAgIC8vICAgICB9XG4gICAgICAgXG4gICAgLy8gfVxuICAgIC8vIHN0YXJ0ICgpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=