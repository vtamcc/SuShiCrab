
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCarb.Drag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuRHJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWtEQztRQWpERyxtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUM1QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBK0M3QixDQUFDO0lBOUNHLHFCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCx3QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFZLEtBQTBCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxxQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNuRTtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUMzRTtTQUNKO0lBQ0wsQ0FBQztJQUVELCtCQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLG9DQUFvQztRQUNwQyxnRUFBZ0U7UUFFaEUsbURBQW1EO1FBQ25ELGlFQUFpRTtRQUNqRSx1REFBdUQ7UUFDdkQsZ0VBQWdFO1FBRWhFLDREQUE0RDtRQUM1RCx5REFBeUQ7UUFDekQsb0ZBQW9GO1FBQ3BGLGdFQUFnRTtRQUNoRSxRQUFRO1FBQ1IsSUFBSTtJQUdSLENBQUM7SUFqRGdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FrRHhCO0lBQUQsV0FBQztDQWxERCxBQWtEQyxDQWxEaUMsRUFBRSxDQUFDLFNBQVMsR0FrRDdDO2tCQWxEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgaW5pdGlhbExlbmd0aDogbnVtYmVyID0gMTAwOyAgXG4gICAgbWF4TGVuZ3RoOiBudW1iZXIgPSA3NTA7ICAgICAgXG4gICAgZ3Jvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50TW91c2UpIHtcbiAgICAgICAgdGhpcy5ncm93aW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IG1vdXNlUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MihldmVudC5nZXRMb2NhdGlvblgoKSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhtb3VzZVBvcyk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihtb3VzZVBvcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3Jvd2luZykge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5oZWlnaHQgPCB0aGlzLm1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgKz0gMjAwICogMC4yO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLnNpemUuaGVpZ2h0ICs9IDIwMCAqIDAuMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm93aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMuaW5pdGlhbExlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5zaXplLmhlaWdodCA9IHRoaXMuaW5pdGlhbExlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIpIHtcbiAgICAgICAgLy8gLy8gTOG6pXkgYm91bmRpbmcgYm94IGPhu6dhIHRoYW5oIGvDqW9cbiAgICAgICAgLy8gY29uc3QgZHJhZ0JhckJvdW5kaW5nQm94ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xuXG4gICAgICAgIC8vIC8vIEzhurdwIHF1YSB04bqldCBj4bqjIGPDoWMgbcOzbiDEg24gxJHhu4Mga2nhu4NtIHRyYSB2YSBjaOG6oW1cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZvb2RDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGZvb2RJdGVtID0gdGhpcy5mb29kQ29udGFpbmVyLmNoaWxkcmVuW2ldO1xuICAgICAgICAvLyAgICAgY29uc3QgZm9vZEJvdW5kaW5nQm94ID0gZm9vZEl0ZW0uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XG5cbiAgICAgICAgLy8gICAgIGlmIChkcmFnQmFyQm91bmRpbmdCb3guaW50ZXJzZWN0cyhmb29kQm91bmRpbmdCb3gpKSB7XG4gICAgICAgIC8vICAgICAgICAgLy8gTuG6v3UgdmEgY2jhuqFtLCBrw6lvIG3Ds24gxINuIHbhu4EgduG7iyB0csOtIG5o4bqldCDEkeG7i25oXG4gICAgICAgIC8vICAgICAgICAgZm9vZEl0ZW0uc2V0UG9zaXRpb24oY2MudjIoMTAwLCAxMDApKTsgIC8vIFbDrSBk4bulIMSR4bq3dCB24buBIHbhu4sgdHLDrSAoMTAwLCAxMDApXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7ICAvLyBE4burbmcgbOG6oWkgc2F1IGtoaSB0w6xtIHRo4bqleSB2YSBjaOG6oW0gxJHhuqd1IHRpw6puXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICBcbiAgICB9XG59Il19