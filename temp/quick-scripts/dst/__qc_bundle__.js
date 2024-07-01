
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/SuShiCarb/scripts/ShuShiCarb.Conveyor');
require('./assets/SuShiCarb/scripts/ShuShiCarb.Food');
require('./assets/SuShiCarb/scripts/ShuShiCarb.Global');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/ShuShiCarb.Food.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1814d5TiQlDEohqTgqXx2zV', 'ShuShiCarb.Food');
// SuShiCarb/scripts/ShuShiCarb.Food.ts

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
var ShuShiCarb_Global_1 = require("./ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbFood = /** @class */ (function (_super) {
    __extends(ShuShiCarbFood, _super);
    function ShuShiCarbFood() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nFood = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ShuShiCarbFood.prototype.start = function () {
    };
    ShuShiCarbFood.prototype.setData = function (idFood) {
        this.nFood.getComponent(cc.Sprite).spriteFrame = ShuShiCarb_Global_1.default.instance.listSpfFood[idFood];
    };
    __decorate([
        property(cc.Node)
    ], ShuShiCarbFood.prototype, "nFood", void 0);
    ShuShiCarbFood = __decorate([
        ccclass
    ], ShuShiCarbFood);
    return ShuShiCarbFood;
}(cc.Component));
exports.default = ShuShiCarbFood;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkZvb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFZLElBQUksQ0FBQzs7UUFhdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFaRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDhCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLE1BQU07UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLDJCQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBWkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSTtJQUhMLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FpQmxDO0lBQUQscUJBQUM7Q0FqQkQsQUFpQkMsQ0FqQjJDLEVBQUUsQ0FBQyxTQUFTLEdBaUJ2RDtrQkFqQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHb2xhbCBmcm9tIFwiLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJGb29kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Gb29kOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBzZXREYXRhKGlkRm9vZCkge1xuICAgICAgICB0aGlzLm5Gb29kLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gU2h1U2hpQ2FyYkdvbGFsLmluc3RhbmNlLmxpc3RTcGZGb29kW2lkRm9vZF07XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
