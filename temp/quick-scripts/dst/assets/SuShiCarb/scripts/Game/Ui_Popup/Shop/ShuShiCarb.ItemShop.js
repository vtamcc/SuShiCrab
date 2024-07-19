
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
                this.lbLeverSpeedOld.node.active = false;
                break;
            case 2: // time Happy
                this._data = ShuShiCarb_Global_1.default.dataTimeHappy[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                this.lbLeverSpeedOld.node.active = false;
                this.index = ShuShiCarb_Global_1.default.timeIndex;
                break;
            default:
                break;
        }
        this.updatePrice(this.index);
    };
    ShuShiCarbItemShop.prototype.updatePrice = function (index) {
        if (index < 4) {
            this.lbPrice.string = this._data.price + ' ';
            this.lbLeverSpeedOld.string = "0";
            //this.lbLeverSpeedNew.string = this._data[index].gold ? this._data[index].gold + ' ' : this._data[index].time + ' ';
            this.nBtnBuy.getComponent(cc.Button).interactable = true;
            console.log("Vao If ");
        }
        else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
            this.lbLeverSpeedOld.string = "Max";
            this.nBtnBuy.getComponent(cc.Button).interactable = false;
            console.log("vao Else");
        }
        this.updatePurchaseState();
    };
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
    ShuShiCarbItemShop.prototype.checkBuy = function () {
        return ShuShiCarb_Global_1.default.totalGold >= this._data.price;
    };
    ShuShiCarbItemShop.prototype.onBuy = function () {
        if (this.index < 4) {
            this.nStateBuy.children[this.index].active = true;
            ShuShiCarb_Global_1.default.totalGold -= this._data.price;
            switch (this.itemId) {
                case 0:
                    this.index++;
                    ShuShiCarb_Global_1.default.hookIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataHook[this.index];
                    cc.sys.localStorage.setItem("hookIndex", this.index);
                    break;
                case 1:
                    this.index++;
                    ShuShiCarb_Global_1.default.checkBagMoney = true;
                    ShuShiCarb_Global_1.default.bagIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataBagMoney[this.index];
                    cc.sys.localStorage.setItem("bagIndex", this.index);
                    cc.sys.localStorage.setItem("checkBagMoney", JSON.stringify(ShuShiCarb_Global_1.default.checkBagMoney));
                    break;
                case 2:
                    this.index++;
                    ShuShiCarb_Global_1.default.timeIndex = this.index;
                    this._data = ShuShiCarb_Global_1.default.dataTimeHappy[this.index];
                    cc.sys.localStorage.setItem("timeIndex", this.index);
                    //console.log("Index ", this.index);
                    break;
            }
            this.updatePrice(this.index);
            this.savePurchaseState();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            ShuShiCarb_ShopView_1.default.instance.updateGold();
            //this.checkClick(); // Gọi lại checkClick để cập nhật trạng thái nút sau khi mua
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5JdGVtU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwRUFBb0U7QUFDcEUsZ0VBQWdEO0FBQ2hELDZEQUF1RDtBQUdqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQXdPQztRQXJPRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBRWpDLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBR2pDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUNyQyxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ1osWUFBTSxHQUFHLENBQUMsQ0FBQzs7UUFnSFgsd0JBQXdCO1FBR3hCLGNBQWM7UUFDZCw4RUFBOEU7UUFDOUUsZ0NBQWdDO1FBQ2hDLHlCQUF5QjtRQUN6QixvQ0FBb0M7UUFDcEMsSUFBSTtRQUVKLHdCQUF3QjtRQUN4QiwwRkFBMEY7UUFDMUYseURBQXlEO1FBQ3pELGlDQUFpQztRQUNqQyxnRUFBZ0U7UUFDaEUsZ0VBQWdFO1FBQ2hFLHlFQUF5RTtRQUN6RSxZQUFZO1FBQ1osUUFBUTtRQUNSLElBQUk7UUFFSix3QkFBd0I7UUFDeEIsMERBQTBEO1FBQzFE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QUFDLFVBQVUsRUFBRSxDQUFDO1lBRXpDLGlGQUFpRjtTQUNwRjtJQUNMLENBQUM7SUFqSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytEQUNjO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0RBQ2M7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2REFDWTtJQWpCcEIsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0F3T3RDO0lBQUQseUJBQUM7Q0F4T0QsQUF3T0MsQ0F4TytDLEVBQUUsQ0FBQyxTQUFTLEdBd08zRDtrQkF4T29CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuaW1wb3J0IFNodVNoaUNhcmJTaG9wVmlldyBmcm9tIFwiLi9TaHVTaGlDYXJiLlNob3BWaWV3XCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJJdGVtU2hvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuSXRlbVNob3A6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlByaWNlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJ0bkJ1eTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0YXRlQnV5OiBjYy5Ob2RlID0gbnVsbDtcbiAgIFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkxldmVyU3BlZWRPbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJMZXZlclNwZWVkTmV3OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgbHNTcEZJdGVtU2hvcDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIGluZGV4ID0gMDtcbiAgICBpc0NoZWNrID0gZmFsc2U7XG4gICAgX2RhdGEgPSBudWxsXG4gICAgaXRlbUlkID0gMDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy90aGlzLmNoZWNrQ2xpY2soKTtcbiAgICB9XG5cbiAgICBzZXREYXRhKGlkKSB7XG4gICAgICAgIHRoaXMuaXRlbUlkID0gaWQ7XG4gICAgICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgICAgIGNhc2UgMDogLy8gaG9va1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBHbG9iYWwuaG9va0luZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5uSXRlbVNob3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxzU3BGSXRlbVNob3BbaWRdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGEsdGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6IC8vIEJhZyBtb25leVxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBHbG9iYWwuYmFnSW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IEdsb2JhbC5kYXRhQmFnTW9uZXlbdGhpcy5pbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5uSXRlbVNob3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxzU3BGSXRlbVNob3BbaWRdO1xuICAgICAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkT2xkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IC8vIHRpbWUgSGFwcHlcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0gR2xvYmFsLmRhdGFUaW1lSGFwcHlbdGhpcy5pbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5uSXRlbVNob3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxzU3BGSXRlbVNob3BbaWRdO1xuICAgICAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkT2xkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IEdsb2JhbC50aW1lSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSh0aGlzLmluZGV4KTtcblxuICAgIH1cblxuICAgIHVwZGF0ZVByaWNlKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDQpIHtcbiAgICAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSB0aGlzLl9kYXRhLnByaWNlICsgJyAnO1xuICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWRPbGQuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAvL3RoaXMubGJMZXZlclNwZWVkTmV3LnN0cmluZyA9IHRoaXMuX2RhdGFbaW5kZXhdLmdvbGQgPyB0aGlzLl9kYXRhW2luZGV4XS5nb2xkICsgJyAnIDogdGhpcy5fZGF0YVtpbmRleF0udGltZSArICcgJztcbiAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJWYW8gSWYgXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxiUHJpY2Uuc3RyaW5nID0gXCJNYXhcIjtcbiAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkTmV3LnN0cmluZyA9IFwiTWF4XCI7XG4gICAgICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5zdHJpbmcgPSBcIk1heFwiO1xuICAgICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YW8gRWxzZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlUHVyY2hhc2VTdGF0ZSgpO1xuICAgIH1cblxuICAgIHNhdmVQdXJjaGFzZVN0YXRlKCkge1xuICAgICAgICBsZXQgcHVyY2hhc2VEYXRhID0ge1xuICAgICAgICAgICAgZGF0YUhvb2s6IEdsb2JhbC5kYXRhSG9vayxcbiAgICAgICAgICAgIGRhdGFCYWdNb25leTogR2xvYmFsLmRhdGFCYWdNb25leSxcbiAgICAgICAgICAgIGRhdGFUaW1lSGFwcHk6IEdsb2JhbC5kYXRhVGltZUhhcHB5LFxuICAgICAgICAgICAgYWN0aXZlSW5kZXhIb29rOiBHbG9iYWwuaG9va0luZGV4LFxuICAgICAgICB9O1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1TaG9wRGF0YScsIEpTT04uc3RyaW5naWZ5KHB1cmNoYXNlRGF0YSkpO1xuICAgICAgICBcbiAgICBcblxuICAgIH1cblxuICAgIHVwZGF0ZVB1cmNoYXNlU3RhdGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuaW5kZXg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQnV5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gR2xvYmFsLnRvdGFsR29sZCA+PSB0aGlzLl9kYXRhLnByaWNlO1xuICAgIH1cblxuICAgIG9uQnV5KCkge1xuICAgICAgICBpZiAoIHRoaXMuaW5kZXggPCA0KSB7XG4gICAgICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5jaGlsZHJlblt0aGlzLmluZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgR2xvYmFsLnRvdGFsR29sZCAtPSB0aGlzLl9kYXRhLnByaWNlO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5ob29rSW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJob29rSW5kZXhcIiwgdGhpcy5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5jaGVja0JhZ01vbmV5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmJhZ0luZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IEdsb2JhbC5kYXRhQmFnTW9uZXlbdGhpcy5pbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhZ0luZGV4XCIsdGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrQmFnTW9uZXlcIiwgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmNoZWNrQmFnTW9uZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4KytcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLnRpbWVJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBHbG9iYWwuZGF0YVRpbWVIYXBweVt0aGlzLmluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGltZUluZGV4XCIsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSW5kZXggXCIsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UodGhpcy5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVQdXJjaGFzZVN0YXRlKCk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlVG90YWxHb2xkKCk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiU2hvcFZpZXcuaW5zdGFuY2UudXBkYXRlR29sZCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL3RoaXMuY2hlY2tDbGljaygpOyAvLyBH4buNaSBs4bqhaSBjaGVja0NsaWNrIMSR4buDIGPhuq1wIG5o4bqtdCB0cuG6oW5nIHRow6FpIG7DunQgc2F1IGtoaSBtdWFcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuXG4gICAgLy8gb25Mb2FkICgpIHtcbiAgICAvLyAgICAgdGhpcy5pbmRleCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXRlbUluZGV4XCIpKSB8fCAwO1xuICAgIC8vICAgICB0aGlzLmxvYWRQdXJjaGFzZVN0YXRlKCk7XG4gICAgLy8gICAgIHRoaXMuY2hlY2tDbGljaygpO1xuICAgIC8vICAgICB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgpO1xuICAgIC8vIH1cblxuICAgIC8vIGxvYWRQdXJjaGFzZVN0YXRlKCkge1xuICAgIC8vICAgICBjb25zdCBwdXJjaGFzZURhdGEgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB1cmNoYXNlRGF0YVwiKSkgfHwgW107XG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2xvYmFsLmRhdGFIb29rLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBpZiAocHVyY2hhc2VEYXRhW2ldKSB7XG4gICAgLy8gICAgICAgICAgICAgR2xvYmFsLmRhdGFIb29rW2ldLmlzQnV5ID0gcHVyY2hhc2VEYXRhW2ldLmlzQnV5O1xuICAgIC8vICAgICAgICAgICAgIEdsb2JhbC5kYXRhSG9va1tpXS5zcGVlZCA9IHB1cmNoYXNlRGF0YVtpXS5zcGVlZDtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5jaGlsZHJlbltpXS5hY3RpdmUgPSBwdXJjaGFzZURhdGFbaV0uaXNCdXk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBzYXZlUHVyY2hhc2VTdGF0ZSgpIHtcbiAgICAvLyAgICAgY29uc3QgcHVyY2hhc2VEYXRhID0gR2xvYmFsLmRhdGFIb29rLm1hcChpdGVtID0+ICh7XG4gICAgLy8gICAgICAgICBpc0J1eTogaXRlbS5pc0J1eSxcbiAgICAvLyAgICAgICAgIHNwZWVkOiBpdGVtLnNwZWVkXG4gICAgLy8gICAgIH0pKTtcbiAgICAvLyAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwdXJjaGFzZURhdGEnLCBKU09OLnN0cmluZ2lmeShwdXJjaGFzZURhdGEpKTtcbiAgICAvLyAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVJbmRleCcsIEpTT04uc3RyaW5naWZ5KEdsb2JhbC5hY3RpdmVJbmRleCkpO1xuICAgIC8vICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1JbmRleCcsIHRoaXMuaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgLy8gICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3BlZWRIb29rJywgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLnNwZWVkSG9vaykpO1xuICAgIC8vICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xlbmd0aEhvb2snLCBKU09OLnN0cmluZ2lmeShHbG9iYWwubGVuZ3RoSG9vaykpO1xuICAgIC8vIH1cblxuXG4gICAgLy8gY2hlY2tDbGljaygpIHtcbiAgICAvLyAgICAgLy8gaWYodGhpcy5pbmRleCA8IEdsb2JhbC5kYXRhSG9vay5sZW5ndGgpIHtcbiAgICAvLyAgICAgLy8gICAgIGlmKEdsb2JhbC50b3RhbEdvbGQgPj0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLnByaWNlKSB7XG4gICAgLy8gICAgIC8vICAgICAgICAgdGhpcy5uQ2hlY2ttYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vICAgICAvLyAgICAgICAgIHRoaXMuaXNDaGVjayA9IHRydWU7XG4gICAgLy8gICAgIC8vICAgICB9ZWxzZSB7XG4gICAgLy8gICAgIC8vICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICAvLyAgICAgICAgICB0aGlzLmlzQ2hlY2sgPSBmYWxzZTtcbiAgICAvLyAgICAgLy8gICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAvLyAgICAgIH1cbiAgICAvLyAgICAgLy8gfVxuICAgIC8vICAgICBpZih0aGlzLmluZGV4IDwgR2xvYmFsLmRhdGFIb29rLmxlbmd0aCAmJiBHbG9iYWwudG90YWxHb2xkID49IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5wcmljZSkgeyBcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5DaGVja21hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0NoZWNrID0gdHJ1ZTsgXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLm5DaGVja21hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNDaGVjayA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuaW5kZXgpO1xuXG4gICAgLy8gfVxuXG4gICAgLy8gb25DbGlja0J1eSgpIHtcbiAgICAvLyAgICAgaWYodGhpcy5pc0NoZWNrICYmIHRoaXMuaW5kZXggPCBHbG9iYWwuZGF0YUhvb2subGVuZ3RoKSB7XG4gICAgLy8gICAgICAgICBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0uaXNCdXkgPSB0cnVlO1xuICAgIC8vICAgICAgICAgR2xvYmFsLnRvdGFsR29sZCAtPSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0ucHJpY2U7XG4gICAgLy8gICAgICAgICBHbG9iYWwuc3BlZWRIb29rICs9IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5zcGVlZDtcbiAgICAvLyAgICAgICAgIEdsb2JhbC5sZW5ndGhIb29rICs9IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS53aWR0aEhvb2s7XG5cbiAgICAvLyAgICAgICAgIHRoaXMublN0YXRlQnV5LmNoaWxkcmVuW3RoaXMuaW5kZXhdLmFjdGl2ZSA9IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5pc0J1eTtcbiAgICAvLyAgICAgICAgIEdsb2JhbC5hY3RpdmVJbmRleCA9IHRoaXMuaW5kZXg7XG5cbiAgICAvLyAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAvLyAgICAgICAgIHRoaXMuY2hlY2tDbGljaygpO1xuICAgIC8vICAgICAgICAgdGhpcy5zYXZlUHVyY2hhc2VTdGF0ZSgpO1xuICAgIC8vICAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLnVwZGF0ZVRvdGFsR29sZCgpO1xuICAgIC8vICAgICAgICAgU2h1U2hpQ2FyYlNob3BWaWV3Lmluc3RhY2UudXBkYXRlR29sZCgpO1xuICAgIC8vICAgICAgICAgdGhpcy51cGRhdGVQcmljZSh0aGlzLmluZGV4KTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBIb29vayBcIixHbG9iYWwuZGF0YUhvb2spO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5uQ2hlY2ttYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgICAgICB0aGlzLm5CdG5CdXkuZ2V0Q29tcG9uZW50KGNjLlRvZ2dsZSkuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH1cblxuICAgIC8vIHVwZGF0ZVByaWNlKGluZGV4KSB7XG4gICAgLy8gICAgIGlmKGluZGV4IDwgR2xvYmFsLmRhdGFIb29rLmxlbmd0aCkge1xuICAgIC8vICAgICAgICAgdGhpcy5sYlByaWNlLnN0cmluZyA9IEdsb2JhbC5kYXRhSG9va1tpbmRleF0ucHJpY2UgKyAnICc7IFxuICAgIC8vICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWROZXcuc3RyaW5nID0gR2xvYmFsLmRhdGFIb29rW2luZGV4XS5zcGVlZCArIDEgKyAnICc7XG4gICAgLy8gICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE9sZC5zdHJpbmcgPSBHbG9iYWwuZGF0YUhvb2tbaW5kZXhdLnNwZWVkICsgJyAnICsgICcgLT4gJztcbiAgICAvLyAgICAgfWVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5sYlByaWNlLnN0cmluZyA9IFwiTWF4XCI7XG4gICAgLy8gICAgICAgICB0aGlzLmxiTGV2ZXJTcGVlZE5ldy5zdHJpbmcgPSBcIk1heFwiO1xuICAgIC8vICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWRPbGQuc3RyaW5nID0gXCJNYXhcIjtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuICAgIC8vIHN0YXJ0ICgpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=