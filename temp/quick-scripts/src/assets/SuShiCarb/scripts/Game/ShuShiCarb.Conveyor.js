"use strict";
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