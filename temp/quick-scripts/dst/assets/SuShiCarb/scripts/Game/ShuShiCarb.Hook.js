
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
    // initialLength: number = 100;  
    // maxLength: number = 750;      
    // growing: boolean = false;
    ShuShiCarbHook.prototype.onLoad = function () {
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
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
        this.hookState = 1;
        var mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(event.getLocationX()));
        console.log(mousePos);
        this.node.setPosition(mousePos);
    };
    ShuShiCarbHook.prototype.moveHookHead = function (dt) {
        this.hookHead.y += dt * 30;
        this.hookRope.width -= dt * 30;
    };
    ShuShiCarbHook.prototype.moveHookPack = function () {
        // Di chuyển các đối tượng được móc theo đầu móc
        for (var _i = 0, _a = this.hookObjects; _i < _a.length; _i++) {
            var object = _a[_i];
            object.setPosition(this.getHookHeadGlobalPos());
        }
    };
    ShuShiCarbHook.prototype.getHookHeadGlobalPos = function () {
        return this.node.convertToWorldSpaceAR(cc.v2(this.hookHead.x, this.hookHead.y - 25));
    };
    ShuShiCarbHook.prototype.onDestroy = function () {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    };
    ShuShiCarbHook.prototype.update = function (dt) {
        var _this = this;
        this.setHookSprite(true);
        switch (this.hookState) {
            case 1:
                if (this.hookHead.y) {
                    this.moveHookHead(50 * dt);
                    if (this.hookHead.y >= 600) {
                        this.hookState = 2;
                        console.log("state", this.hookState);
                    }
                }
                break;
            case 2:
                this.moveHookHead(-30 * dt);
                this.scheduleOnce(function () {
                    _this.hookState = 0;
                }, 0.8);
                this.setHookSprite(false);
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
    ShuShiCarbHook = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW1JQztRQWpJRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLGlCQUFXLEdBQWMsRUFBRSxDQUFDOztJQWlIaEMsQ0FBQztJQS9HRyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1QiwrQkFBTSxHQUFOO1FBQ0ssRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBR0QsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxL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QUFDO29CQUNkLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixLQUFLLENBQUMsQ0FBQztZQUNQO2dCQUNJLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG1EQUFtRDtJQUNuRCw2Q0FBNkM7SUFDN0MsK0VBQStFO0lBQy9FLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMscURBQXFEO0lBQ3JELHVGQUF1RjtJQUN2RixZQUFZO0lBQ1osUUFBUTtJQUNSLElBQUk7SUFFSix5Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBSztRQUNsQixvQ0FBb0M7UUFDcEMsZ0VBQWdFO1FBRWhFLG1EQUFtRDtRQUNuRCxpRUFBaUU7UUFDakUsdURBQXVEO1FBQ3ZELGdFQUFnRTtRQUVoRSw0REFBNEQ7UUFDNUQseURBQXlEO1FBQ3pELG9GQUFvRjtRQUNwRixnRUFBZ0U7UUFDaEUsUUFBUTtRQUNSLElBQUk7SUFHUixDQUFDO0lBaElEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFYUixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBbUlsQztJQUFELHFCQUFDO0NBbklELEFBbUlDLENBbkkyQyxFQUFFLENBQUMsU0FBUyxHQW1JdkQ7a0JBbklvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTaHVTaGlDYXJiRm9vZCBmcm9tIFwiLi9TaHVTaGlDYXJiLkZvb2RcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSG9vayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va1JvcGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va1Nwcml0ZU9wZW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va1Nwcml0ZUNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tIZWFkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBcbiAgICBob29rU3BlZWQgPSA0MDA7XG4gICAgaG9va1N0YXRlID0gMDtcblxuICAgIGhvb2tIZWFkQmFzZVk6IG51bWJlciA9IDgwO1xuICAgIGhvb2tSb3BlQmFzZVdpZHRoOiBudW1iZXIgPSAwO1xuICAgIGhvb2tPYmplY3RzOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIC8vIGluaXRpYWxMZW5ndGg6IG51bWJlciA9IDEwMDsgIFxuICAgIC8vIG1heExlbmd0aDogbnVtYmVyID0gNzUwOyAgICAgIFxuICAgIC8vIGdyb3dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm9uTW91c2VEb3duLCB0aGlzKTtcbiAgICB9XG5cblxuICAgIGluaXRIb29rKCkgIHtcbiAgICAgICAgdGhpcy5ob29rT2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmhvb2tIZWFkLnkgID0gdGhpcy5ob29rSGVhZEJhc2VZO1xuICAgICAgICB0aGlzLmhvb2tSb3BlLndpZHRoID0gdGhpcy5ob29rUm9wZUJhc2VXaWR0aDtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pbml0SG9vaygpO1xuICAgIH1cbiAgICBzZXRIb29rU3RhdGUoaG9va1N0YXRlKSB7XG4gICAgICAgIHRoaXMuaG9va1N0YXRlID0gaG9va1N0YXRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhvb2tTdGF0ZSBcIixob29rU3RhdGUpO1xuICAgIH1cblxuICAgIHNldEhvb2tTcHJpdGUoaXNPcGVuOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaG9va1Nwcml0ZUNsb3NlLmFjdGl2ZSA9ICFpc09wZW47XG4gICAgICAgIHRoaXMuaG9va1Nwcml0ZU9wZW4uYWN0aXZlID0gaXNPcGVuO1xuICAgIH1cbiBcblxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudE1vdXNlKSB7XG4gICAgICAgIHRoaXMuaG9va1N0YXRlID0gMTtcbiAgICAgICAgbGV0IG1vdXNlUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MihldmVudC5nZXRMb2NhdGlvblgoKSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhtb3VzZVBvcyk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihtb3VzZVBvcyk7XG4gICAgfVxuXG4gXG4gICAgbW92ZUhvb2tIZWFkKGR0KSB7XG4gICAgICAgIHRoaXMuaG9va0hlYWQueSArPSBkdCAqIDMwO1xuICAgICAgICB0aGlzLmhvb2tSb3BlLndpZHRoIC09IGR0ICogMzA7XG4gICAgfVxuXG4gICBcblxuICAgIG1vdmVIb29rUGFjaygpIHtcbiAgICAgICAgLy8gRGkgY2h1eeG7g24gY8OhYyDEkeG7kWkgdMaw4bujbmcgxJHGsOG7o2MgbcOzYyB0aGVvIMSR4bqndSBtw7NjXG4gICAgICAgIGZvciAobGV0IG9iamVjdCBvZiB0aGlzLmhvb2tPYmplY3RzKSB7XG4gICAgICAgICAgICBvYmplY3Quc2V0UG9zaXRpb24odGhpcy5nZXRIb29rSGVhZEdsb2JhbFBvcygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEhvb2tIZWFkR2xvYmFsUG9zKCk6IGNjLlZlYzIge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Mih0aGlzLmhvb2tIZWFkLngsIHRoaXMuaG9va0hlYWQueSAtIDI1KSk7XG4gICAgfVxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5zZXRIb29rU3ByaXRlKHRydWUpO1xuICAgICAgICBzd2l0Y2godGhpcy5ob29rU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlSG9va0hlYWQoNTAgKiBkdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSA+PSA2MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1N0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGVcIix0aGlzLmhvb2tTdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVIb29rSGVhZCgtMzAgKiBkdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1N0YXRlID0gMDtcbiAgICAgICAgICAgICAgICB9LDAuOClcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhvb2tTcHJpdGUoZmFsc2UpO1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgLy8gICAgIGlmICh0aGlzLmdyb3dpbmcpIHtcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLm5vZGUuaGVpZ2h0IDwgdGhpcy5tYXhMZW5ndGgpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ICs9IDIwMCAqIDAuMjtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5zaXplLmhlaWdodCArPSAyMDAgKiAwLjI7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZ3Jvd2luZyA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLmluaXRpYWxMZW5ndGg7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuc2l6ZS5oZWlnaHQgPSB0aGlzLmluaXRpYWxMZW5ndGg7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyKSB7XG4gICAgICAgIC8vIC8vIEzhuqV5IGJvdW5kaW5nIGJveCBj4bunYSB0aGFuaCBrw6lvXG4gICAgICAgIC8vIGNvbnN0IGRyYWdCYXJCb3VuZGluZ0JveCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcblxuICAgICAgICAvLyAvLyBM4bq3cCBxdWEgdOG6pXQgY+G6oyBjw6FjIG3Ds24gxINuIMSR4buDIGtp4buDbSB0cmEgdmEgY2jhuqFtXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mb29kQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBmb29kSXRlbSA9IHRoaXMuZm9vZENvbnRhaW5lci5jaGlsZHJlbltpXTtcbiAgICAgICAgLy8gICAgIGNvbnN0IGZvb2RCb3VuZGluZ0JveCA9IGZvb2RJdGVtLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xuXG4gICAgICAgIC8vICAgICBpZiAoZHJhZ0JhckJvdW5kaW5nQm94LmludGVyc2VjdHMoZm9vZEJvdW5kaW5nQm94KSkge1xuICAgICAgICAvLyAgICAgICAgIC8vIE7hur91IHZhIGNo4bqhbSwga8OpbyBtw7NuIMSDbiB24buBIHbhu4sgdHLDrSBuaOG6pXQgxJHhu4tuaFxuICAgICAgICAvLyAgICAgICAgIGZvb2RJdGVtLnNldFBvc2l0aW9uKGNjLnYyKDEwMCwgMTAwKSk7ICAvLyBWw60gZOG7pSDEkeG6t3QgduG7gSB24buLIHRyw60gKDEwMCwgMTAwKVxuICAgICAgICAvLyAgICAgICAgIGJyZWFrOyAgLy8gROG7q25nIGzhuqFpIHNhdSBraGkgdMOsbSB0aOG6pXkgdmEgY2jhuqFtIMSR4bqndSB0acOqblxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgXG4gICAgfVxufSJdfQ==