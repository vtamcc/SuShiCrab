
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/ShuShiCarb.Conveyor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'feab3o200JDbYSI7NRNPnpz', 'ShuShiCarb.Conveyor');
// SuShiCarb/scripts/ShuShiCarb.Conveyor.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbConveyor = /** @class */ (function (_super) {
    __extends(ShuShiCarbConveyor, _super);
    function ShuShiCarbConveyor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idConveyor = 0;
        return _this;
    }
    ShuShiCarbConveyor.prototype.update = function (dt) {
        if (this.idConveyor == 0 || this.idConveyor == 2) {
            if (this.node.x > 650) {
                this.node.x = -650;
            }
            this.node.x += 5;
        }
        else if (this.idConveyor == 1) {
            if (this.node.x < -650) {
                this.node.x = 650;
            }
            this.node.x -= 5;
        }
    };
    __decorate([
        property
    ], ShuShiCarbConveyor.prototype, "idConveyor", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkNvbnZleW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBc0JDO1FBbkJDLGdCQUFVLEdBQVcsQ0FBQyxDQUFDOztJQW1CekIsQ0FBQztJQWhCRSxtQ0FBTSxHQUFOLFVBQVEsRUFBRTtRQUNMLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO2FBQUssSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFFckI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7SUFHTixDQUFDO0lBbEJGO1FBREMsUUFBUTswREFDYztJQUhKLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBc0J0QztJQUFELHlCQUFDO0NBdEJELEFBc0JDLENBdEIrQyxFQUFFLENBQUMsU0FBUyxHQXNCM0Q7a0JBdEJvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL1NodVNoaUNhcmIuRm9vZFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJDb252ZXlvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgQHByb3BlcnR5XG4gIGlkQ29udmV5b3I6IG51bWJlciA9IDA7XG5cblxuICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZih0aGlzLmlkQ29udmV5b3IgPT0gMCB8fCB0aGlzLmlkQ29udmV5b3IgPT0gMikge1xuICAgICAgICAgICBpZih0aGlzLm5vZGUueCA+IDY1MCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSAtNjUwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHRoaXMubm9kZS54ICs9IDU7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaWRDb252ZXlvciA9PSAxKSB7XG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA8IC02NTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IDY1MDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IDU7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgIH1cbn1cbiJdfQ==