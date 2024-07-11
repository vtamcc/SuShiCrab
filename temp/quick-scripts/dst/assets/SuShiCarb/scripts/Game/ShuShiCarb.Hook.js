
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
        _this.hookSpeed = 30;
        _this.hookState = 0;
        _this.hookHeadBaseY = 80;
        _this.hookRopeBaseWidth = 0;
        return _this;
    }
    ShuShiCarbHook_1 = ShuShiCarbHook;
    ShuShiCarbHook.prototype.onLoad = function () {
        ShuShiCarbHook_1.instance = this;
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
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
    ShuShiCarbHook.prototype.onDestroy = function () {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    };
    ShuShiCarbHook.prototype.update = function (dt) {
        this.setHookSprite(true);
        switch (this.hookState) {
            case 1:
                if (this.hookHead.y) {
                    this.moveHookHead(this.hookSpeed * dt);
                    if (this.hookHead.y >= 600) {
                        this.hookState = 2;
                    }
                }
                break;
            case 2:
                if (this.hookHead.y) {
                    this.moveHookHead(-this.hookSpeed * dt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWtHQztRQS9GRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFFZCxtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQix1QkFBaUIsR0FBVyxDQUFDLENBQUM7O0lBZ0ZsQyxDQUFDO3VCQWxHb0IsY0FBYztJQXNCL0IsK0JBQU0sR0FBTjtRQUNJLGdCQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFHRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDakQsQ0FBQztJQUVELDhCQUFL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QUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1lBQ1YsS0FBSyxDQUFDLENBQUM7WUFDSDtnQkFDSSxNQUFNO1NBQ2pCO0lBQ0wsQ0FBQzs7SUEvRmEsdUJBQVEsR0FBbUIsSUFBSSxDQUFDO0lBRTlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFaUixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBa0dsQztJQUFELHFCQUFDO0NBbEdELEFBa0dDLENBbEcyQyxFQUFFLENBQUMsU0FBUyxHQWtHdkQ7a0JBbEdvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTaHVTaGlDYXJiRm9vZCBmcm9tIFwiLi9TaHVTaGlDYXJiLkZvb2RcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSG9vayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2h1U2hpQ2FyYkhvb2sgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tSb3BlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tTcHJpdGVPcGVuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tTcHJpdGVDbG9zZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rSGVhZDogY2MuTm9kZSA9IG51bGw7XG4gICAgXG4gICAgaG9va1NwZWVkID0gMzA7XG4gICAgaG9va1N0YXRlID0gMDtcblxuICAgIGhvb2tIZWFkQmFzZVk6IG51bWJlciA9IDgwO1xuICAgIGhvb2tSb3BlQmFzZVdpZHRoOiBudW1iZXIgPSAwO1xuICAgIFxuICAgIG1vdXNlUG9zO1xuICAgXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBTaHVTaGlDYXJiSG9vay5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMub25Nb3VzZURvd24sIHRoaXMpOyAgXG4gICAgfVxuXG5cbiAgICBpbml0SG9vaygpICB7XG4gICAgICAgIHRoaXMuaG9va0hlYWQueSAgPSB0aGlzLmhvb2tIZWFkQmFzZVk7XG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSB0aGlzLmhvb2tSb3BlQmFzZVdpZHRoO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmluaXRIb29rKCk7XG4gICAgfVxuICAgIHNldEhvb2tTdGF0ZShob29rU3RhdGUpIHtcbiAgICAgICAgdGhpcy5ob29rU3RhdGUgPSBob29rU3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaG9va1N0YXRlIFwiLGhvb2tTdGF0ZSk7XG4gICAgfVxuXG4gICAgc2V0SG9va1Nwcml0ZShpc09wZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ob29rU3ByaXRlQ2xvc2UuYWN0aXZlID0gIWlzT3BlbjtcbiAgICAgICAgdGhpcy5ob29rU3ByaXRlT3Blbi5hY3RpdmUgPSBpc09wZW47XG4gICAgfVxuIFxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50TW91c2UpIHtcbiAgICAgICAgaWYodGhpcy5ob29rU3RhdGUgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IDE7XG4gICAgICAgIHRoaXMubW91c2VQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKGV2ZW50LmdldExvY2F0aW9uWCgpKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3VzZVBvcyk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm1vdXNlUG9zKTtcbiAgICB9XG5cbiAgICBtb3ZlSG9va0hlYWQoZHQpIHtcbiAgICAgICAgdGhpcy5ob29rSGVhZC55ICs9IGR0ICogMzA7XG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggLT0gZHQgKiA0MDtcbiAgICAgIFxuICAgIH1cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm9uTW91c2VEb3duLCB0aGlzKTtcbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuc2V0SG9va1Nwcml0ZSh0cnVlKTtcbiAgICAgICAgc3dpdGNoKHRoaXMuaG9va1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUhvb2tIZWFkKHRoaXMuaG9va1NwZWVkICogZHQpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkgPj0gNjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlSG9va0hlYWQoLXRoaXMuaG9va1NwZWVkICAqIGR0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rSGVhZC5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55ICA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va0hlYWQueSA9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSA1MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1N0YXRlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va0hlYWQuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SG9va1Nwcml0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=