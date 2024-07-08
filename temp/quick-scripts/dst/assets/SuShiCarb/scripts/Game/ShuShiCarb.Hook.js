
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
                    this.hookHead.getComponent(cc.BoxCollider).enabled = false;
                    if (this.hookHead.y < 0) {
                        this.hookHead.y = 100;
                        this.hookRope.width = 50;
                        this.hookState = 0;
                        this.hookHead.getComponent(cc.BoxCollider).enabled = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQTRJQztRQXpJRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDOztJQTBIbEMsQ0FBQzt1QkE1SW9CLGNBQWM7SUFxQi9CLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsNEJBQTRCO0lBQzVCLCtCQUFNLEdBQU47UUFDSSxnQkFBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRiwrREFBK0Q7UUFDL0QsMkVBQTJFO0lBQy9FLENBQUM7SUFHRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxJQUFJLENB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QztDQTVJRCxBQTRJQyxDQTVJMkMsRUFBRSxDQUFDLFNBQVMsR0E0SXZEO2tCQTVJb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkhvb2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJIb29rID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rUm9wZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rU3ByaXRlT3BlbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rU3ByaXRlQ2xvc2U6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va0hlYWQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIGhvb2tTcGVlZCA9IDQwMDtcbiAgICBob29rU3RhdGUgPSAwO1xuXG4gICAgaG9va0hlYWRCYXNlWTogbnVtYmVyID0gODA7XG4gICAgaG9va1JvcGVCYXNlV2lkdGg6IG51bWJlciA9IDA7XG4gICAgXG4gICAgbW91c2VQb3M7XG4gICAgLy8gaW5pdGlhbExlbmd0aDogbnVtYmVyID0gMTAwOyAgXG4gICAgLy8gbWF4TGVuZ3RoOiBudW1iZXIgPSA3NTA7ICAgICAgXG4gICAgLy8gZ3Jvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm9uTW91c2VEb3duLCB0aGlzKTsgIFxuICAgICAgICAvLyAgdGhpcy5ob29rSGVhZEJhc2VZID0gdGhpcy5ob29rSGVhZEJhc2VZIHx8IHRoaXMuaG9va0hlYWQueTtcbiAgICAgICAgLy8gIHRoaXMuaG9va1JvcGVCYXNlV2lkdGggPSB0aGlzLmhvb2tSb3BlQmFzZVdpZHRoIHx8IHRoaXMuaG9va1JvcGUud2lkdGg7XG4gICAgfVxuXG5cbiAgICBpbml0SG9vaygpICB7XG4gICAgICAgIHRoaXMuaG9va0hlYWQueSAgPSB0aGlzLmhvb2tIZWFkQmFzZVk7XG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSB0aGlzLmhvb2tSb3BlQmFzZVdpZHRoO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmluaXRIb29rKCk7XG4gICAgfVxuICAgIHNldEhvb2tTdGF0ZShob29rU3RhdGUpIHtcbiAgICAgICAgdGhpcy5ob29rU3RhdGUgPSBob29rU3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaG9va1N0YXRlIFwiLGhvb2tTdGF0ZSk7XG4gICAgfVxuXG4gICAgc2V0SG9va1Nwcml0ZShpc09wZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ob29rU3ByaXRlQ2xvc2UuYWN0aXZlID0gIWlzT3BlbjtcbiAgICAgICAgdGhpcy5ob29rU3ByaXRlT3Blbi5hY3RpdmUgPSBpc09wZW47XG4gICAgfVxuIFxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50TW91c2UpIHtcbiAgICAgICAgaWYodGhpcy5ob29rU3RhdGUgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IDE7XG4gICAgICAgIHRoaXMubW91c2VQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKGV2ZW50LmdldExvY2F0aW9uWCgpKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3VzZVBvcyk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm1vdXNlUG9zKTtcbiAgICB9XG5cbiAgICBtb3ZlSG9va0hlYWQoZHQpIHtcbiAgICAgICAgdGhpcy5ob29rSGVhZC55ICs9IGR0ICogMzA7XG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggLT0gZHQgKiA0MDtcbiAgICAgIFxuICAgIH1cblxuICAgXG4gICBcblxuICAgIGdldEhvb2tIZWFkR2xvYmFsUG9zKCk6IGNjLlZlYzIge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Mih0aGlzLm1vdXNlUG9zLCB0aGlzLmhvb2tIZWFkLnkgLSAyNSkpO1xuICAgIH1cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm9uTW91c2VEb3duLCB0aGlzKTtcbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuc2V0SG9va1Nwcml0ZSh0cnVlKTtcbiAgICAgICAgc3dpdGNoKHRoaXMuaG9va1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUhvb2tIZWFkKDUwICogZHQpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkgPj0gMTAwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rU3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUhvb2tIZWFkKC01MCAgKiBkdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va0hlYWQuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSAgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tIZWFkLnkgPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tSb3BlLndpZHRoID0gNTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tIZWFkLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhvb2tTcHJpdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuZ3Jvd2luZykge1xuICAgIC8vICAgICAgICAgaWYgKHRoaXMubm9kZS5oZWlnaHQgPCB0aGlzLm1heExlbmd0aCkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgKz0gMjAwICogMC4yO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLnNpemUuaGVpZ2h0ICs9IDIwMCAqIDAuMjtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ncm93aW5nID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMuaW5pdGlhbExlbmd0aDtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5zaXplLmhlaWdodCA9IHRoaXMuaW5pdGlhbExlbmd0aDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIpIHtcbiAgICAgICAgLy8gLy8gTOG6pXkgYm91bmRpbmcgYm94IGPhu6dhIHRoYW5oIGvDqW9cbiAgICAgICAgLy8gY29uc3QgZHJhZ0JhckJvdW5kaW5nQm94ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xuXG4gICAgICAgIC8vIC8vIEzhurdwIHF1YSB04bqldCBj4bqjIGPDoWMgbcOzbiDEg24gxJHhu4Mga2nhu4NtIHRyYSB2YSBjaOG6oW1cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZvb2RDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGZvb2RJdGVtID0gdGhpcy5mb29kQ29udGFpbmVyLmNoaWxkcmVuW2ldO1xuICAgICAgICAvLyAgICAgY29uc3QgZm9vZEJvdW5kaW5nQm94ID0gZm9vZEl0ZW0uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XG5cbiAgICAgICAgLy8gICAgIGlmIChkcmFnQmFyQm91bmRpbmdCb3guaW50ZXJzZWN0cyhmb29kQm91bmRpbmdCb3gpKSB7XG4gICAgICAgIC8vICAgICAgICAgLy8gTuG6v3UgdmEgY2jhuqFtLCBrw6lvIG3Ds24gxINuIHbhu4EgduG7iyB0csOtIG5o4bqldCDEkeG7i25oXG4gICAgICAgIC8vICAgICAgICAgZm9vZEl0ZW0uc2V0UG9zaXRpb24oY2MudjIoMTAwLCAxMDApKTsgIC8vIFbDrSBk4bulIMSR4bq3dCB24buBIHbhu4sgdHLDrSAoMTAwLCAxMDApXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7ICAvLyBE4burbmcgbOG6oWkgc2F1IGtoaSB0w6xtIHRo4bqleSB2YSBjaOG6oW0gxJHhuqd1IHRpw6puXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICBcbiAgICB9XG59Il19