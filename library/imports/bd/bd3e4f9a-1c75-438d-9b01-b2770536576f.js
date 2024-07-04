"use strict";
cc._RF.push(module, 'bd3e4+aHHVDjZsBsncFNldv', 'ShuShiCarb.Drag');
// SuShiCarb/scripts/Game/ShuShiCarb.Drag.ts

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
var Drag = /** @class */ (function (_super) {
    __extends(Drag, _super);
    function Drag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialLength = 100;
        _this.maxLength = 750;
        _this.growing = false;
        return _this;
    }
    Drag.prototype.onLoad = function () {
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    };
    Drag.prototype.onDestroy = function () {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    };
    Drag.prototype.onMouseDown = function (event) {
        this.growing = true;
        var mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(event.getLocationX()));
        console.log(mousePos);
        this.node.setPosition(mousePos);
    };
    Drag.prototype.update = function (dt) {
        if (this.growing) {
            if (this.node.height < this.maxLength) {
                this.node.height += 200 * 0.2;
                this.node.getComponent(cc.BoxCollider).size.height += 200 * 0.2;
            }
            else {
                this.growing = false;
                this.node.height = this.initialLength;
                this.node.getComponent(cc.BoxCollider).size.height = this.initialLength;
            }
        }
    };
    Drag.prototype.onCollisionEnter = function (other) {
        // // Lấy bounding box của thanh kéo
        // const dragBarBoundingBox = this.node.getBoundingBoxToWorld();
        // // Lặp qua tất cả các món ăn để kiểm tra va chạm
        // for (let i = 0; i < this.foodContainer.children.length; i++) {
        //     const foodItem = this.foodContainer.children[i];
        //     const foodBoundingBox = foodItem.getBoundingBoxToWorld();
        //     if (dragBarBoundingBox.intersects(foodBoundingBox)) {
        //         // Nếu va chạm, kéo món ăn về vị trí nhất định
        //         foodItem.setPosition(cc.v2(100, 100));  // Ví dụ đặt về vị trí (100, 100)
        //         break;  // Dừng lại sau khi tìm thấy va chạm đầu tiên
        //     }
        // }
    };
    Drag = __decorate([
        ccclass
    ], Drag);
    return Drag;
}(cc.Component));
exports.default = Drag;

cc._RF.pop();