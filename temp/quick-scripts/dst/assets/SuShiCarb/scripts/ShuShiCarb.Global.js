
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/ShuShiCarb.Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57e45IlTRNBoJ26llVySEfH', 'ShuShiCarb.Global');
// SuShiCarb/scripts/ShuShiCarb.Global.ts

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
var ShuShiCarb_Conveyor_1 = require("./ShuShiCarb.Conveyor");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGolal = /** @class */ (function (_super) {
    __extends(ShuShiCarbGolal, _super);
    function ShuShiCarbGolal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nFood1 = null;
        _this.nFood2 = null;
        _this.nFood3 = null;
        _this.listConveyor = [];
        _this.listSpfFood = [];
        // LIFE-CYCLE CALLBACKS:
        _this.data = [0, 1, 2, 3, 4, 5];
        return _this;
        // update (dt) {}
    }
    ShuShiCarbGolal_1 = ShuShiCarbGolal;
    ShuShiCarbGolal.prototype.onLoad = function () {
        ShuShiCarbGolal_1.instance = this;
        var randomElements = this.randomIdFood(this.data, 3);
        console.log(randomElements);
        this.conveyor();
    };
    ShuShiCarbGolal.prototype.randomIdFood = function (arr, count) {
        var idFood = [];
        for (var i = 0; i < count; i++) {
            var randomIndex = Math.floor(Math.random() * arr.length);
            idFood.push(randomIndex);
            arr.splice(randomIndex, 1);
        }
        return arr;
    };
    ShuShiCarbGolal.prototype.conveyor = function () {
        for (var i = 0; i < this.listConveyor.length; i++) {
            console.log("Node ", this.listConveyor[i]);
            var dt = this.listConveyor[i].getComponent(ShuShiCarb_Conveyor_1.default);
        }
    };
    ShuShiCarbGolal.prototype.start = function () {
    };
    var ShuShiCarbGolal_1;
    ShuShiCarbGolal.instance = null;
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGolal.prototype, "nFood1", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGolal.prototype, "nFood2", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGolal.prototype, "nFood3", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGolal.prototype, "listConveyor", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ShuShiCarbGolal.prototype, "listSpfFood", void 0);
    ShuShiCarbGolal = ShuShiCarbGolal_1 = __decorate([
        ccclass
    ], ShuShiCarbGolal);
    return ShuShiCarbGolal;
}(cc.Component));
exports.default = ShuShiCarbGolal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2REFBdUQ7QUFFakQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUE0Q0M7UUF4Q0csWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFHN0IsaUJBQVcsR0FBc0IsRUFBRSxDQUFDO1FBQ3BDLHdCQUF3QjtRQUN4QixVQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDOztRQTRCckIsaUJBQWlCO0lBQ3JCLENBQUM7d0JBNUNvQixlQUFlO0lBZ0JoQyxnQ0FBTSxHQUFOO1FBQ0ksaUJBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLEdBQUcsRUFBQyxLQUFLO1FBQ2xCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsNkJBQWtCLENBQUMsQ0FBQTtTQUNqRTtJQUNMLENBQUM7SUFDRCwrQkFBSyxHQUFMO0lBRUEsQ0FBQzs7SUF2Q2Esd0JBQVEsR0FBb0IsSUFBSSxDQUFDO0lBRS9DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3REFDVztJQWJuQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNENuQztJQUFELHNCQUFDO0NBNUNELEFBNENDLENBNUM0QyxFQUFFLENBQUMsU0FBUyxHQTRDeEQ7a0JBNUNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTaHVTaGlDYXJiQ29udmV5b3IgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Db252ZXlvclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHb2xhbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTaHVTaGlDYXJiR29sYWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Gb29kMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkZvb2QyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuRm9vZDM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RDb252ZXlvcjogY2MuTm9kZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgbGlzdFNwZkZvb2Q6IGNjLlNwcml0ZUZyYW1lIFtdID0gW107XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgZGF0YSA9IFswLDEsMiwzLDQsNV07XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgU2h1U2hpQ2FyYkdvbGFsLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgbGV0IHJhbmRvbUVsZW1lbnRzID0gdGhpcy5yYW5kb21JZEZvb2QodGhpcy5kYXRhLCAzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmFuZG9tRWxlbWVudHMpO1xuICAgICAgICB0aGlzLmNvbnZleW9yKCk7XG4gICAgfVxuXG4gICAgcmFuZG9tSWRGb29kKGFycixjb3VudCkge1xuICAgICAgICBsZXQgaWRGb29kID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAgICAgICAgIGlkRm9vZC5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICAgICAgICAgIGFyci5zcGxpY2UocmFuZG9tSW5kZXgsMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBjb252ZXlvcigpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdENvbnZleW9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vZGUgXCIsIHRoaXMubGlzdENvbnZleW9yW2ldKTtcbiAgICAgICAgICAgIGxldCBkdCA9IHRoaXMubGlzdENvbnZleW9yW2ldLmdldENvbXBvbmVudChTaHVTaGlDYXJiQ29udmV5b3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==