
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
        // @property(cc.Label)
        // lbLeverSpeedOld: cc.Label = null;
        // @property(cc.Label)
        // lbLeverSpeedNew: cc.Label = null;
        _this.lsSpFItemShop = [];
        _this.index = 0;
        _this.isCheck = false;
        _this._data = null;
        _this._data2 = null;
        _this._data3 = null;
        _this.itemId = 0;
        return _this;
    }
    ShuShiCarbItemShop.prototype.onLoad = function () {
        //this.checkClick();
    };
    ShuShiCarbItemShop.prototype.setData = function (id) {
        this.itemId = id;
        switch (id) {
            case 0: // hook
                this.index = ShuShiCarb_Global_1.default.hookIndex;
                this._data = ShuShiCarb_Global_1.default.dataHook[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                console.log(this._data, this.index);
                break;
            case 1: // Bag money
                this.index = ShuShiCarb_Global_1.default.bagIndex;
                this._data = ShuShiCarb_Global_1.default.dataBagMoney[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                // this.lbLeverSpeedOld.node.active = false;
                // this.lbLeverSpeedNew.node.x = 27;
                // this.lbLeverSpeedNew.node.y = 5;
                break;
            case 2: // time Happy
                this._data = ShuShiCarb_Global_1.default.dataTimeHappy[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                // this.lbLeverSpeedOld.node.active = false;
                // this.lbLeverSpeedNew.node.x = 25;
                // this.lbLeverSpeedNew.node.y = 6;
                this.index = ShuShiCarb_Global_1.default.timeIndex;
                this.nStateBuy.x = -115;
                this.nStateBuy.y = -28;
                break;
            default:
                break;
        }
        this.updatePrice(this.index, ShuShiCarb_Global_1.default.totalGold);
    };
    ShuShiCarbItemShop.prototype.updatePrice = function (index, totalGold) {
        if (index < 4) {
            this.lbPrice.string = this._data.price + ' ';
            if (totalGold >= this._data.price) {
                //this.lbLeverSpeedOld.string = "0";
                this.nBtnBuy.getComponent(cc.Button).interactable = true;
            }
            else {
                //this.lbLeverSpeedNew.string = this._data.price + ' ';
                //this.lbLeverSpeedOld.string = this._data.price + ' ';
                this.nBtnBuy.getComponent(cc.Button).interactable = false;
            }
        }
        else {
            this.lbPrice.string = "Max";
            //this.lbLeverSpeedNew.string = "Max";
            //this.lbLeverSpeedOld.string = "Max";
            this.nBtnBuy.getComponent(cc.Button).interactable = false;
        }
        this.updatePurchaseState();
    };
    // updatePrice(index, totalGold) {
    //     if (index < 4) {
    //         this.lbPrice.string = this._data.price + ' ';
    //         if (totalGold >= this._data.price) {
    //             switch (this.itemId) {
    //                 case 0:
    //                     break;
    //                 default:
    //                     break;
    //             }
    //             this.lbLeverSpeedOld.string = "0";
    //             this.nBtnBuy.getComponent(cc.Button).interactable = true;
    //         } else {
    //             this.lbLeverSpeedNew.string = this._data.price + ' ';
    //             this.lbLeverSpeedOld.string = this._data.price + ' ';
    //             this.nBtnBuy.getComponent(cc.Button).interactable = false;
    //         }
    //     } else {
    //         this.lbPrice.string = "Max";
    //         this.lbLeverSpeedNew.string = "Max";
    //         this.lbLeverSpeedOld.string = "Max";
    //         this.nBtnBuy.getComponent(cc.Button).interactable = false;
    //     }
    //     this.updatePurchaseState();
    // }
    ShuShiCarbItemShop.prototype.savePurchaseState = function () {
        var purchaseData = {
            dataHook: ShuShiCarb_Global_1.default.dataHook,
            dataBagMoney: ShuShiCarb_Global_1.default.dataBagMoney,
            dataTimeHappy: ShuShiCarb_Global_1.default.dataTimeHappy,
            activeIndexHook: ShuShiCarb_Global_1.default.hookIndex,
        };
        cc.sys.localStorage.setItem('itemShopData', JSON.stringify(purchaseData));
    };
    ShuShiCarbItemShop.prototype.updatePurchaseState = function () {
        for (var i = 0; i <= this.index; i++) {
            this.nStateBuy.children[i].active = true;
        }
    };
    ShuShiCarbItemShop.prototype.onBuy = function () {
        if (ShuShiCarb_Global_1.default.soundManager) {
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        }
        if (this.index < 4) {
            this.nStateBuy.children[this.index].active = true;
            ShuShiCarb_Global_1.default.totalGold -= this._data.price;
            switch (this.itemId) {
                case 0:
                    this.index++;
                    ShuShiCarb_Global_1.default.hookIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataHook[this.index];
                    ShuShiCarb_Global_1.default.speedHook += this._data.speed;
                    ShuShiCarb_Global_1.default.lengthHook += this._data.widthHook;
                    cc.sys.localStorage.setItem("speedHook", JSON.stringify(ShuShiCarb_Global_1.default.speedHook));
                    cc.sys.localStorage.setItem("lengthHook", JSON.stringify(ShuShiCarb_Global_1.default.lengthHook));
                    cc.sys.localStorage.setItem("hookIndex", this.index);
                    break;
                case 1:
                    this.index++;
                    ShuShiCarb_Global_1.default.checkBagMoney = true;
                    ShuShiCarb_Global_1.default.bagIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataBagMoney[this.index];
                    ShuShiCarb_Global_1.default.moneyBag += this._data.gold;
                    cc.sys.localStorage.setItem("moneyBag", JSON.stringify(ShuShiCarb_Global_1.default.moneyBag));
                    cc.sys.localStorage.setItem("bagIndex", this.index);
                    cc.sys.localStorage.setItem("checkBagMoney", JSON.stringify(ShuShiCarb_Global_1.default.checkBagMoney));
                    break;
                case 2:
                    this.index++;
                    ShuShiCarb_Global_1.default.timeIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataTimeHappy[this.index];
                    cc.sys.localStorage.setItem("timeIndex", this.index);
                    ShuShiCarb_Global_1.default.timeHappy += this._data.time;
                    cc.sys.localStorage.setItem("timeHappy", JSON.stringify(ShuShiCarb_Global_1.default.timeHappy));
                    //console.log("Index ", this.index);
                    break;
            }
            this.savePurchaseState();
            this.updatePrice(this.index, ShuShiCarb_Global_1.default.totalGold);
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            ShuShiCarb_ShopView_1.default.instance.updateGold();
            ShuShiCarb_ShopView_1.default.instance.updateItemsState(ShuShiCarb_Global_1.default.totalGold);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxVaV9Qb3B1cFxcU2hvcFxcU2h1U2hpQ2FyYi5JdGVtU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwRUFBb0U7QUFDcEUsZ0VBQWdEO0FBQ2hELDZEQUF1RDtBQUdqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQW9MQztRQWpMRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLHNCQUFzQjtRQUN0QixvQ0FBb0M7UUFDcEMsc0JBQXNCO1FBQ3RCLG9DQUFvQztRQUdwQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFDckMsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBSyxHQUFHLElBQUksQ0FBQTtRQUNaLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsWUFBTSxHQUFHLENBQUMsQ0FBQzs7SUE2SmYsQ0FBQztJQTNKRyxtQ0FBTSxHQUFOO1FBQ0ksb0JBQW9CO0lBQ3hCLENBQUM7SUFFRCxvQ0FBTyxHQUFQLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFFBQVEsRUFBRSxFQUFFO1lBQ1IsS0FBSyxDQUFDLEVBQUUsT0FBTztnQkFDWCxJQUFJLENBQUMsS0FBSyxHQUFH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QUFLLEVBQUMsMkJBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QyxnQ0FBcUIsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDakQsNkJBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3pDLDZCQUFrQixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBRWxFO0lBR0wsQ0FBQztJQWhMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNRO0lBUTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkRBQ1k7SUFqQnBCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBb0x0QztJQUFELHlCQUFDO0NBcExELEFBb0xDLENBcEwrQyxFQUFFLENBQUMsU0FBUyxHQW9MM0Q7a0JBcExvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uLy4uL1NodVNoaUNhcmIuR2xvYmFsXCI7XHJcbmltcG9ydCBTaHVTaGlDYXJiU2hvcFZpZXcgZnJvbSBcIi4vU2h1U2hpQ2FyYi5TaG9wVmlld1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSXRlbVNob3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkl0ZW1TaG9wOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiUHJpY2U6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkJ0bkJ1eTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5TdGF0ZUJ1eTogY2MuTm9kZSA9IG51bGw7XHJcbiAgIFxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgLy8gbGJMZXZlclNwZWVkT2xkOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICAvLyBsYkxldmVyU3BlZWROZXc6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsc1NwRkl0ZW1TaG9wOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBpbmRleCA9IDA7XHJcbiAgICBpc0NoZWNrID0gZmFsc2U7XHJcbiAgICBfZGF0YSA9IG51bGxcclxuICAgIF9kYXRhMiA9IG51bGw7XHJcbiAgICBfZGF0YTMgPSBudWxsO1xyXG4gICAgaXRlbUlkID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy90aGlzLmNoZWNrQ2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKGlkKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtSWQgPSBpZDtcclxuICAgICAgICBzd2l0Y2ggKGlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy8gaG9va1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IEdsb2JhbC5ob29rSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uSXRlbVNob3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxzU3BGSXRlbVNob3BbaWRdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0YSx0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IC8vIEJhZyBtb25leVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IEdsb2JhbC5iYWdJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBHbG9iYWwuZGF0YUJhZ01vbmV5W3RoaXMuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uSXRlbVNob3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxzU3BGSXRlbVNob3BbaWRdO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5sYkxldmVyU3BlZWRPbGQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubGJMZXZlclNwZWVkTmV3Lm5vZGUueCA9IDI3O1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5sYkxldmVyU3BlZWROZXcubm9kZS55ID0gNTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8vIHRpbWUgSGFwcHlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBHbG9iYWwuZGF0YVRpbWVIYXBweVt0aGlzLmluZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMubkl0ZW1TaG9wLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5sc1NwRkl0ZW1TaG9wW2lkXTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubGJMZXZlclNwZWVkT2xkLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5ub2RlLnggPSAyNTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubGJMZXZlclNwZWVkTmV3Lm5vZGUueSA9IDY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gR2xvYmFsLnRpbWVJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMublN0YXRlQnV5LnggPSAtMTE1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkueSA9IC0yODtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlUHJpY2UodGhpcy5pbmRleCxHbG9iYWwudG90YWxHb2xkKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcmljZShpbmRleCwgdG90YWxHb2xkKSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgNCkge1xyXG4gICAgICAgICAgICB0aGlzLmxiUHJpY2Uuc3RyaW5nID0gdGhpcy5fZGF0YS5wcmljZSArICcgJztcclxuICAgICAgICAgICAgaWYgKHRvdGFsR29sZCA+PSB0aGlzLl9kYXRhLnByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubGJMZXZlclNwZWVkTmV3LnN0cmluZyA9IHRoaXMuX2RhdGEucHJpY2UgKyAnICc7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IHRoaXMuX2RhdGEucHJpY2UgKyAnICc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5CdG5CdXkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxiUHJpY2Uuc3RyaW5nID0gXCJNYXhcIjtcclxuICAgICAgICAgICAgLy90aGlzLmxiTGV2ZXJTcGVlZE5ldy5zdHJpbmcgPSBcIk1heFwiO1xyXG4gICAgICAgICAgICAvL3RoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IFwiTWF4XCI7XHJcbiAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVQdXJjaGFzZVN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGVQcmljZShpbmRleCwgdG90YWxHb2xkKSB7XHJcbiAgICAvLyAgICAgaWYgKGluZGV4IDwgNCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxiUHJpY2Uuc3RyaW5nID0gdGhpcy5fZGF0YS5wcmljZSArICcgJztcclxuICAgIC8vICAgICAgICAgaWYgKHRvdGFsR29sZCA+PSB0aGlzLl9kYXRhLnByaWNlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuaXRlbUlkKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IFwiMFwiO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5zdHJpbmcgPSB0aGlzLl9kYXRhLnByaWNlICsgJyAnO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWRPbGQuc3RyaW5nID0gdGhpcy5fZGF0YS5wcmljZSArICcgJztcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSBcIk1heFwiO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5zdHJpbmcgPSBcIk1heFwiO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5zdHJpbmcgPSBcIk1heFwiO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm5CdG5CdXkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMudXBkYXRlUHVyY2hhc2VTdGF0ZSgpO1xyXG4gICAgLy8gfVxyXG4gICBcclxuXHJcbiAgICBzYXZlUHVyY2hhc2VTdGF0ZSgpIHtcclxuICAgICAgICBsZXQgcHVyY2hhc2VEYXRhID0ge1xyXG4gICAgICAgICAgICBkYXRhSG9vazogR2xvYmFsLmRhdGFIb29rLFxyXG4gICAgICAgICAgICBkYXRhQmFnTW9uZXk6IEdsb2JhbC5kYXRhQmFnTW9uZXksXHJcbiAgICAgICAgICAgIGRhdGFUaW1lSGFwcHk6IEdsb2JhbC5kYXRhVGltZUhhcHB5LFxyXG4gICAgICAgICAgICBhY3RpdmVJbmRleEhvb2s6IEdsb2JhbC5ob29rSW5kZXgsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1TaG9wRGF0YScsIEpTT04uc3RyaW5naWZ5KHB1cmNoYXNlRGF0YSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVB1cmNoYXNlU3RhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5pbmRleDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMublN0YXRlQnV5LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQnV5KCkge1xyXG4gICAgICAgIGlmIChHbG9iYWwuc291bmRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbC5zb3VuZE1hbmFnZXIucGxheVNvdW5kQ2xpY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5pbmRleCA8IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5bdGhpcy5pbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgR2xvYmFsLnRvdGFsR29sZCAtPSB0aGlzLl9kYXRhLnByaWNlO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLml0ZW1JZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICBHbG9iYWwuaG9va0luZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5zcGVlZEhvb2sgKz0gdGhpcy5fZGF0YS5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBHbG9iYWwubGVuZ3RoSG9vayArPSB0aGlzLl9kYXRhLndpZHRoSG9vaztcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzcGVlZEhvb2tcIixKU09OLnN0cmluZ2lmeShHbG9iYWwuc3BlZWRIb29rKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGVuZ3RoSG9va1wiLEpTT04uc3RyaW5naWZ5KEdsb2JhbC5sZW5ndGhIb29rKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaG9va0luZGV4XCIsIHRoaXMuaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5jaGVja0JhZ01vbmV5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBHbG9iYWwuYmFnSW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBHbG9iYWwuZGF0YUJhZ01vbmV5W3RoaXMuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5tb25leUJhZyArPSB0aGlzLl9kYXRhLmdvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibW9uZXlCYWdcIixKU09OLnN0cmluZ2lmeShHbG9iYWwubW9uZXlCYWcpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYWdJbmRleFwiLHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrQmFnTW9uZXlcIiwgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmNoZWNrQmFnTW9uZXkpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4KytcclxuICAgICAgICAgICAgICAgICAgICBHbG9iYWwudGltZUluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0gR2xvYmFsLmRhdGFUaW1lSGFwcHlbdGhpcy5pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGltZUluZGV4XCIsIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC50aW1lSGFwcHkgKz0gdGhpcy5fZGF0YS50aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRpbWVIYXBweVwiLEpTT04uc3RyaW5naWZ5KEdsb2JhbC50aW1lSGFwcHkpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSW5kZXggXCIsIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVB1cmNoYXNlU3RhdGUoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgsR2xvYmFsLnRvdGFsR29sZCk7XHJcbiAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS51cGRhdGVUb3RhbEdvbGQoKTtcclxuICAgICAgICAgICAgU2h1U2hpQ2FyYlNob3BWaWV3Lmluc3RhbmNlLnVwZGF0ZUdvbGQoKTsgXHJcbiAgICAgICAgICAgIFNodVNoaUNhcmJTaG9wVmlldy5pbnN0YW5jZS51cGRhdGVJdGVtc1N0YXRlKEdsb2JhbC50b3RhbEdvbGQpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19