
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCarb.Hook.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd3e4+aHHVDjZsBsncFNldv', 'ShuShiCarb.Hook');
// SuShiCarb/scripts/Game/ShuShiCarb.Hook.ts

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
var ShuShiCarbHook = /** @class */ (function (_super) {
    __extends(ShuShiCarbHook, _super);
    function ShuShiCarbHook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hookRope = null;
        _this.hookSpriteOpen = null;
        _this.hookSpriteClose = null;
        _this.hookHead = null;
        _this.hookSpeed = 400;
        _this.hookState = 0;
        _this.hookHeadBaseY = 80;
        _this.hookRopeBaseWidth = 0;
        _this.hookObjects = [];
        return _this;
    }
    ShuShiCarbHook_1 = ShuShiCarbHook;
    // initialLength: number = 100;  
    // maxLength: number = 750;      
    // growing: boolean = false;
    ShuShiCarbHook.prototype.onLoad = function () {
        ShuShiCarbHook_1.instance = this;
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        //  this.hookHeadBaseY = this.hookHeadBaseY || this.hookHead.y;
        //  this.hookRopeBaseWidth = this.hookRopeBaseWidth || this.hookRope.width;
    };
    ShuShiCarbHook.prototype.initHook = function () {
        this.hookObjects = [];
        this.hookHead.y = this.hookHeadBaseY;
        this.hookRope.width = this.hookRopeBaseWidth;
    };
    ShuShiCarbHook.prototype.start = function () {
        this.initHook();
    };
    ShuShiCarbHook.prototype.setHookState = function (hookState) {
        this.hookState = hookState;
        console.log("hookState ", hookState);
    };
    ShuShiCarbHook.prototype.setHookSprite = function (isOpen) {
        this.hookSpriteClose.active = !isOpen;
        this.hookSpriteOpen.active = isOpen;
    };
    ShuShiCarbHook.prototype.onMouseDown = function (event) {
        if (this.hookState !== 0) {
            return;
        }
        this.hookState = 1;
        this.mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(event.getLocationX()));
        console.log(this.mousePos);
        this.node.setPosition(this.mousePos);
    };
    ShuShiCarbHook.prototype.moveHookHead = function (dt) {
        this.hookHead.y += dt * 30;
        this.hookRope.width -= dt * 40;
    };
    ShuShiCarbHook.prototype.moveHookPack = function () {
        // Di chuyển các đối tượng được móc theo đầu móc
        for (var _i = 0, _a = this.hookObjects; _i < _a.length; _i++) {
            var object = _a[_i];
            object.setPosition(this.getHookHeadGlobalPos());
        }
    };
    ShuShiCarbHook.prototype.getHookHeadGlobalPos = function () {
        return this.node.convertToWorldSpaceAR(cc.v2(this.mousePos, this.hookHead.y - 25));
    };
    ShuShiCarbHook.prototype.onDestroy = function () {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    };
    ShuShiCarbHook.prototype.update = function (dt) {
        this.setHookSprite(true);
        switch (this.hookState) {
            case 1:
                if (this.hookHead.y) {
                    this.moveHookHead(50 * dt);
                    if (this.hookHead.y >= 1000) {
                        this.hookState = 2;
                    }
                }
                break;
            case 2:
                if (this.hookHead.y) {
                    this.moveHookHead(-50 * dt);
                    if (this.hookHead.y < 0) {
                        this.hookHead.y = 100;
                        this.hookRope.width = 50;
                        this.hookState = 0;
                    }
                }
                this.setHookSprite(false);
                break;
            case 0:
            default:
                break;
        }
    };
    // update(dt: number) {
    //     if (this.growing) {
    //         if (this.node.height < this.maxLength) {
    //             this.node.height += 200 * 0.2;
    //             this.node.getComponent(cc.BoxCollider).size.height += 200 * 0.2;
    //         } else {
    //             this.growing = false;
    //             this.node.height = this.initialLength;
    //             this.node.getComponent(cc.BoxCollider).size.height = this.initialLength;
    //         }
    //     }
    // }
    ShuShiCarbHook.prototype.onCollisionEnter = function (other) {
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
    var ShuShiCarbHook_1;
    ShuShiCarbHook.instance = null;
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookRope", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookSpriteOpen", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookSpriteClose", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbHook.prototype, "hookHead", void 0);
    ShuShiCarbHook = ShuShiCarbHook_1 = __decorate([
        ccclass
    ], ShuShiCarbHook);
    return ShuShiCarbHook;
}(cc.Component));
exports.default = ShuShiCarbHook;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWdKQztRQTdJRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLGlCQUFXLEdBQWMsRUFBRSxDQUFDOztJQTZIaEMsQ0FBQzt1QkFoSm9CLGNBQWM7SUFxQi9CLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsNEJBQTRCO0lBQzVCLCtCQUFNLEdBQU47UUFDSSxnQkFBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRiwrREFBK0Q7UUFDL0QsMkVBQTJFO0lBQy9FLENBQUM7SUFHRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDakQsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELHFDQUFZLEdBQVosVUFBYSxTQUFTO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsTUFBZTtRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDeEMsQ0FBQztJQUdELG9DQUFXLEdBQVgsVUFBWSxLQUEwQjtRQUNsQyxJQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLEVBQUU7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFbkMsQ0FBQztJQUdELHFDQUFZLEdBQVo7UUFDSSxnREFBZ0Q7UUFDaEQsS0FBbUIsVUFBZ0IsRUFBaEIsS0FBQSxJQUFJLENBQUMsV0FBVyxFQUFoQixjQUFnQixFQUFoQixJQUFnQixFQUFFO1lBQWhDLElBQUksTUFBTSxTQUFBO1lBQ1gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztJQUVELDZDQUFvQixHQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBQ0Qsa0NBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUNELCtCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixRQUFPLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsS0FBSyxDQUFDO2dCQUNGLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUMzQixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTt3QkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7cUJBRXRCO2lCQUNKO2dCQUNELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtvQkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFFLENBQUMsQ0FBQztvQkFDN0IsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBSSxDQUFDLEVBQUU7d0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztxQkFDdEI7aUJBQ0o7Z0JBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsTUFBTTtZQUNWLEtBQUssQ0FBQyxDQUFDO1lBQ0g7Z0JBQ0ksTUFBTTtTQUNqQjtJQUNMLENBQUM7SUFFRCx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG1EQUFtRDtJQUNuRCw2Q0FBNkM7SUFDN0MsK0VBQStFO0lBQy9FLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMscURBQXFEO0lBQ3JELHVGQUF1RjtJQUN2RixZQUFZO0lBQ1osUUFBUTtJQUNSLElBQUk7SUFFSix5Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBSztRQUNsQixvQ0FBb0M7UUFDcEMsZ0VBQWdFO1FBRWhFLG1EQUFtRDtRQUNuRCxpRUFBaUU7UUFDakUsdURBQXVEO1FBQ3ZELGdFQUFnRTtRQUVoRSw0REFBNEQ7UUFDNUQseURBQXlEO1FBQ3pELG9GQUFvRjtRQUNwRixnRUFBZ0U7UUFDaEUsUUFBUTtRQUNSLElBQUk7SUFHUixDQUFDOztJQTlJYSx1QkFBUSxHQUFtQixJQUFJLENBQUM7SUFFOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQVpSLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FnSmxDO0lBQUQscUJBQUM7Q0FoSkQsQUFnSkMsQ0FoSjJDLEVBQUUsQ0FBQyxTQUFTLEdBZ0p2RDtrQkFoSm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL1NodVNoaUNhcmIuRm9vZFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJIb29rIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTaHVTaGlDYXJiSG9vayA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va1JvcGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va1Nwcml0ZU9wZW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va1Nwcml0ZUNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tIZWFkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBcbiAgICBob29rU3BlZWQgPSA0MDA7XG4gICAgaG9va1N0YXRlID0gMDtcblxuICAgIGhvb2tIZWFkQmFzZVk6IG51bWJlciA9IDgwO1xuICAgIGhvb2tSb3BlQmFzZVdpZHRoOiBudW1iZXIgPSAwO1xuICAgIGhvb2tPYmplY3RzOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBtb3VzZVBvc1xuICAgIC8vIGluaXRpYWxMZW5ndGg6IG51bWJlciA9IDEwMDsgIFxuICAgIC8vIG1heExlbmd0aDogbnVtYmVyID0gNzUwOyAgICAgIFxuICAgIC8vIGdyb3dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNodVNoaUNhcmJIb29rLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7ICBcbiAgICAgICAgLy8gIHRoaXMuaG9va0hlYWRCYXNlWSA9IHRoaXMuaG9va0hlYWRCYXNlWSB8fCB0aGlzLmhvb2tIZWFkLnk7XG4gICAgICAgIC8vICB0aGlzLmhvb2tSb3BlQmFzZVdpZHRoID0gdGhpcy5ob29rUm9wZUJhc2VXaWR0aCB8fCB0aGlzLmhvb2tSb3BlLndpZHRoO1xuICAgIH1cblxuXG4gICAgaW5pdEhvb2soKSAge1xuICAgICAgICB0aGlzLmhvb2tPYmplY3RzID0gW107XG4gICAgICAgIHRoaXMuaG9va0hlYWQueSAgPSB0aGlzLmhvb2tIZWFkQmFzZVk7XG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSB0aGlzLmhvb2tSb3BlQmFzZVdpZHRoO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmluaXRIb29rKCk7XG4gICAgfVxuICAgIHNldEhvb2tTdGF0ZShob29rU3RhdGUpIHtcbiAgICAgICAgdGhpcy5ob29rU3RhdGUgPSBob29rU3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaG9va1N0YXRlIFwiLGhvb2tTdGF0ZSk7XG4gICAgfVxuXG4gICAgc2V0SG9va1Nwcml0ZShpc09wZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ob29rU3ByaXRlQ2xvc2UuYWN0aXZlID0gIWlzT3BlbjtcbiAgICAgICAgdGhpcy5ob29rU3ByaXRlT3Blbi5hY3RpdmUgPSBpc09wZW47XG4gICAgfVxuIFxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50TW91c2UpIHtcbiAgICAgICAgaWYodGhpcy5ob29rU3RhdGUgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IDE7XG4gICAgICAgIHRoaXMubW91c2VQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKGV2ZW50LmdldExvY2F0aW9uWCgpKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3VzZVBvcyk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm1vdXNlUG9zKTtcbiAgICB9XG5cbiAgICBtb3ZlSG9va0hlYWQoZHQpIHtcbiAgICAgICAgdGhpcy5ob29rSGVhZC55ICs9IGR0ICogMzA7XG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggLT0gZHQgKiA0MDtcbiAgICAgIFxuICAgIH1cblxuICAgXG4gICAgbW92ZUhvb2tQYWNrKCkge1xuICAgICAgICAvLyBEaSBjaHV54buDbiBjw6FjIMSR4buRaSB0xrDhu6NuZyDEkcaw4bujYyBtw7NjIHRoZW8gxJHhuqd1IG3Ds2NcbiAgICAgICAgZm9yIChsZXQgb2JqZWN0IG9mIHRoaXMuaG9va09iamVjdHMpIHtcbiAgICAgICAgICAgIG9iamVjdC5zZXRQb3NpdGlvbih0aGlzLmdldEhvb2tIZWFkR2xvYmFsUG9zKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SG9va0hlYWRHbG9iYWxQb3MoKTogY2MuVmVjMiB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHRoaXMubW91c2VQb3MsIHRoaXMuaG9va0hlYWQueSAtIDI1KSk7XG4gICAgfVxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5zZXRIb29rU3ByaXRlKHRydWUpO1xuICAgICAgICBzd2l0Y2godGhpcy5ob29rU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlSG9va0hlYWQoNTAgKiBkdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSA+PSAxMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlSG9va0hlYWQoLTUwICAqIGR0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55ICA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va0hlYWQueSA9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSA1MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1N0YXRlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SG9va1Nwcml0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIC8vICAgICBpZiAodGhpcy5ncm93aW5nKSB7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5ub2RlLmhlaWdodCA8IHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub2RlLmhlaWdodCArPSAyMDAgKiAwLjI7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuc2l6ZS5oZWlnaHQgKz0gMjAwICogMC4yO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmdyb3dpbmcgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5pbml0aWFsTGVuZ3RoO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLnNpemUuaGVpZ2h0ID0gdGhpcy5pbml0aWFsTGVuZ3RoO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcikge1xuICAgICAgICAvLyAvLyBM4bqleSBib3VuZGluZyBib3ggY+G7p2EgdGhhbmgga8Opb1xuICAgICAgICAvLyBjb25zdCBkcmFnQmFyQm91bmRpbmdCb3ggPSB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XG5cbiAgICAgICAgLy8gLy8gTOG6t3AgcXVhIHThuqV0IGPhuqMgY8OhYyBtw7NuIMSDbiDEkeG7gyBraeG7g20gdHJhIHZhIGNo4bqhbVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZm9vZENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgY29uc3QgZm9vZEl0ZW0gPSB0aGlzLmZvb2RDb250YWluZXIuY2hpbGRyZW5baV07XG4gICAgICAgIC8vICAgICBjb25zdCBmb29kQm91bmRpbmdCb3ggPSBmb29kSXRlbS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcblxuICAgICAgICAvLyAgICAgaWYgKGRyYWdCYXJCb3VuZGluZ0JveC5pbnRlcnNlY3RzKGZvb2RCb3VuZGluZ0JveCkpIHtcbiAgICAgICAgLy8gICAgICAgICAvLyBO4bq/dSB2YSBjaOG6oW0sIGvDqW8gbcOzbiDEg24gduG7gSB24buLIHRyw60gbmjhuqV0IMSR4buLbmhcbiAgICAgICAgLy8gICAgICAgICBmb29kSXRlbS5zZXRQb3NpdGlvbihjYy52MigxMDAsIDEwMCkpOyAgLy8gVsOtIGThu6UgxJHhurd0IHbhu4EgduG7iyB0csOtICgxMDAsIDEwMClcbiAgICAgICAgLy8gICAgICAgICBicmVhazsgIC8vIEThu6tuZyBs4bqhaSBzYXUga2hpIHTDrG0gdGjhuqV5IHZhIGNo4bqhbSDEkeG6p3UgdGnDqm5cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgIFxuICAgIH1cbn0iXX0=