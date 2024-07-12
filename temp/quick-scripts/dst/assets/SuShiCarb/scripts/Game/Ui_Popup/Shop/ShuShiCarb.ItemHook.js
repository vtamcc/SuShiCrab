
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
        return _this;
        // update (dt) {}
    }
    // data;
    // setData() {
    //     Global.dataHook = this.data;
    //     console.log(this.data);
    // }
    // LIFE-CYCLE CALLBACKS:
    ShuShiCarbItemHook.prototype.onLoad = function () {
        //this.setData();
        //this.checkClick(this.index);
        console.log(ShuShiCarb_Global_1.default.dataHook[this.index].price);
        this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndex")) || 0;
        // Global.dataHook[this.index] = JSON.parse(cc.sys.localStorage.getItem("price")) || 150;
        // this.updatePrice(this.index);
        this.checkClick();
        this.updatePrice(this.index);
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
            ShuShiCarb_Global_1.default.totalGold -= ShuShiCarb_Global_1.default.dataHook[this.index].price;
            ShuShiCarb_Global_1.default.speedHook += ShuShiCarb_Global_1.default.dataHook[this.index].speed;
            this.nStateBuy.children[this.index].active = true;
            cc.sys.localStorage.setItem('itemIndex', this.index.toString());
            // cc.sys.localStorage.setItem('price', Global.dataHook[this.index].price.toString);
            this.index++;
            console.log(this.index);
            this.checkClick();
            ShuShiCarb_ShopView_1.default.instace.updateGold();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            this.updatePrice(this.index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5JdGVtSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwRUFBb0U7QUFDcEUsZ0VBQWdEO0FBQ2hELDZEQUF1RDtBQUdqRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQXVFQztRQXBFRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBTyxHQUFHLEtBQUssQ0FBQzs7UUF5RGhCLGlCQUFpQjtJQUNyQixDQUFDO0lBekRHLFFBQVE7SUFDUixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixJQUFJO0lBRUosd0JBQXdCO0lBR3hCLG1DQUFNLEdBQU47UUFDSSxpQkFBaUI7UUFDakIsOEJBQThCO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkUseUZBQXlGO1FBQ3pGLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdELHVDQUFVLEdBQVY7UUFDRyxJQUFHLDJCQUFNLENBQUMsU0FBUyxJQUFJLDJCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQUs7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDN0Q7SUFDTCxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUNJLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLDJCQUFNLENBQUMsU0FBUyxJQUFJLDJCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEQsMkJBQU0sQ0FBQyxTQUFTLElBQUksMkJBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMvRCxvRkFBb0Y7WUFDcEYsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRWIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLDZCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QyxnQ0FBcUIsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7SUFFTCxDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRywyQkFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQzdELENBQUM7SUFDRCxrQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQWpFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNTO0lBWFYsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0F1RXRDO0lBQUQseUJBQUM7Q0F2RUQsQUF1RUMsQ0F2RStDLEVBQUUsQ0FBQyxTQUFTLEdBdUUzRDtrQkF2RW9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuaW1wb3J0IFNodVNoaUNhcmJTaG9wVmlldyBmcm9tIFwiLi9TaHVTaGlDYXJiLlNob3BWaWV3XCI7XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSXRlbUhvb2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiUHJpY2U6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5CdG5CdXk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0YXRlQnV5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQ2hlY2ttYXNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpbmRleCA9IDA7XG4gICAgaXNDaGVjayA9IGZhbHNlO1xuICAgIC8vIGRhdGE7XG4gICAgLy8gc2V0RGF0YSgpIHtcbiAgICAvLyAgICAgR2xvYmFsLmRhdGFIb29rID0gdGhpcy5kYXRhO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgIC8vIH1cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy90aGlzLnNldERhdGEoKTtcbiAgICAgICAgLy90aGlzLmNoZWNrQ2xpY2sodGhpcy5pbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5wcmljZSk7XG4gICAgICAgIHRoaXMuaW5kZXggPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIml0ZW1JbmRleFwiKSkgfHwgMDtcbiAgICAgICAgLy8gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmljZVwiKSkgfHwgMTUwO1xuICAgICAgICAvLyB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgpO1xuICAgICAgICB0aGlzLmNoZWNrQ2xpY2soKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSh0aGlzLmluZGV4KTtcbiAgICB9XG5cblxuICAgIGNoZWNrQ2xpY2soKSB7XG4gICAgICAgaWYoR2xvYmFsLnRvdGFsR29sZCA+PSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0ucHJpY2UpIHtcbiAgICAgICAgICAgdGhpcy5uQ2hlY2ttYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICB0aGlzLmlzQ2hlY2sgPSB0cnVlO1xuICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja0J1eSgpIHtcbiAgICAgICAgaWYodGhpcy5pc0NoZWNrKSB7XG4gICAgICAgICAgICBHbG9iYWwudG90YWxHb2xkIC09IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5wcmljZTtcbiAgICAgICAgICAgIEdsb2JhbC5zcGVlZEhvb2sgKz0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5bdGhpcy5pbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbUluZGV4Jyx0aGlzLmluZGV4LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmljZScsIEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5wcmljZS50b1N0cmluZyk7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0NsaWNrKCk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiU2hvcFZpZXcuaW5zdGFjZS51cGRhdGVHb2xkKCk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlVG90YWxHb2xkKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlUHJpY2UoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5sYlByaWNlLnN0cmluZyA9IEdsb2JhbC5kYXRhSG9va1tpbmRleF0ucHJpY2UgKyAnICc7IFxuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19