
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCarb.Conveyor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'feab3o200JDbYSI7NRNPnpz', 'ShuShiCarb.Conveyor');
// SuShiCarb/scripts/Game/ShuShiCarb.Conveyor.ts

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
var ShuShiCarb_Food_1 = require("./ShuShiCarb.Food");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbConveyor = /** @class */ (function (_super) {
    __extends(ShuShiCarbConveyor, _super);
    function ShuShiCarbConveyor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemFood_1 = [];
        _this.idFood = 0;
        _this.isMove = false;
        return _this;
    }
    ShuShiCarbConveyor.prototype.update = function () {
        if (this.isMove) {
            return;
        }
        if (this.idFood == 0) {
            if (this.node.x >= 1200) {
                this.resetPos();
            }
            this.node.x += 4;
        }
        else if (this.idFood == 1) {
            if (this.node.x <= -1200) {
                this.node.x = 600;
            }
            this.node.x -= 3;
        }
        else if (this.idFood == 2) {
            if (this.node.x >= 1200) {
                this.resetPos();
            }
            this.node.x += 3;
        }
    };
    ShuShiCarbConveyor.prototype.resetPos = function () {
        this.node.x = -900;
    };
    __decorate([
        property(ShuShiCarb_Food_1.default)
    ], ShuShiCarbConveyor.prototype, "itemFood_1", void 0);
    __decorate([
        property
    ], ShuShiCarbConveyor.prototype, "idFood", void 0);
    ShuShiCarbConveyor = __decorate([
        ccclass
    ], ShuShiCarbConveyor);
    return ShuShiCarbConveyor;
}(cc.Component));
exports.default = ShuShiCarbConveyor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuQ29udmV5b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYscURBQStDO0FBRXpDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBbUNDO1FBaENDLGdCQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUVsQyxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBNkJqQixDQUFDO0lBM0JFLG1DQUFNLEdBQU47UUFDQSxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixPQUFPO1NBQ1Q7UUFDRCxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbEI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7YUFBSyxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3hCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQTthQUNuQjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjthQUNJLElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNsQjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtJQUVGLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyx5QkFBYyxDQUFDOzBEQUNTO0lBRWxDO1FBREMsUUFBUTtzREFDVTtJQUxBLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBbUN0QztJQUFELHlCQUFDO0NBbkNELEFBbUNDLENBbkMrQyxFQUFFLENBQUMsU0FBUyxHQW1DM0Q7a0JBbkNvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi9TaHVTaGlDYXJiLkdhbWVcIjtcbmltcG9ydCBTaHVTaGlDYXJiRm9vZCBmcm9tIFwiLi9TaHVTaGlDYXJiLkZvb2RcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiQ29udmV5b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gIEBwcm9wZXJ0eShTaHVTaGlDYXJiRm9vZClcbiAgaXRlbUZvb2RfMTogU2h1U2hpQ2FyYkZvb2RbXSA9IFtdO1xuICBAcHJvcGVydHlcbiAgaWRGb29kOiBudW1iZXIgPSAwO1xuICBpc01vdmUgPSBmYWxzZTtcbiAgIFxuICAgdXBkYXRlKCkge1xuICAgaWYodGhpcy5pc01vdmUpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIGlmKHRoaXMuaWRGb29kID09IDApIHtcbiAgICAgIGlmKHRoaXMubm9kZS54ID49IDEyMDApIHtcbiAgICAgICAgIHRoaXMucmVzZXRQb3MoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubm9kZS54ICs9IDQ7XG4gICB9ZWxzZSBpZih0aGlzLmlkRm9vZCA9PSAxKSB7XG4gICAgICBpZih0aGlzLm5vZGUueCA8PSAtMTIwMCkge1xuICAgICAgICAgdGhpcy5ub2RlLnggPSA2MDBcbiAgICAgIH1cbiAgICAgIHRoaXMubm9kZS54IC09IDM7XG4gICB9XG4gICBlbHNlIGlmKHRoaXMuaWRGb29kID09IDIpIHtcbiAgICAgIGlmKHRoaXMubm9kZS54ID49IDEyMDApIHtcbiAgICAgICAgIHRoaXMucmVzZXRQb3MoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubm9kZS54ICs9IDM7XG4gICB9XG4gIFxuICB9XG5cbiAgcmVzZXRQb3MoKSB7XG4gICB0aGlzLm5vZGUueCA9IC05MDA7XG4gIH1cbn1cbiJdfQ==