
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
var ShuShiCarb_Global_1 = require("../ShuShiCarb.Global");
var ShuShiCarb_Player_1 = require("./ShuShiCarb.Player");
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
        _this.hookRopeBaseWidth = 100;
        _this.isClickable = true;
        return _this;
    }
    ShuShiCarbHook_1 = ShuShiCarbHook;
    ShuShiCarbHook.prototype.onLoad = function () {
        ShuShiCarbHook_1.instance = this;
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        ShuShiCarb_Global_1.default.speedHook = JSON.parse(cc.sys.localStorage.getItem("speedHook")) || ShuShiCarb_Global_1.default.speedHook;
        ShuShiCarb_Global_1.default.lengthHook = JSON.parse(cc.sys.localStorage.getItem("lengthHook")) || ShuShiCarb_Global_1.default.lengthHook;
        console.log("speed ", ShuShiCarb_Global_1.default.speedHook);
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
    ShuShiCarbHook.prototype.onTouchEnd = function (event) {
        if (!this.isClickable || this.hookState !== 0 || !ShuShiCarb_Player_1.default.instace.isAtOrderPosition) {
            return;
        }
        this.hookState = 1;
        this.mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(event.getLocationX()));
        console.log(this.mousePos);
        this.node.setPosition(this.mousePos);
    };
    ShuShiCarbHook.prototype.moveHookHead = function (dt) {
        this.hookHead.y += dt * ShuShiCarb_Global_1.default.speedHook;
        this.hookRope.width += dt * ShuShiCarb_Global_1.default.lengthHook;
    };
    ShuShiCarbHook.prototype.onDestroy = function () {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onTouchEnd, this);
    };
    ShuShiCarbHook.prototype.update = function (dt) {
        this.setHookSprite(true);
        switch (this.hookState) {
            case 1:
                if (this.hookHead.y) {
                    this.moveHookHead(ShuShiCarb_Global_1.default.speedHook * dt);
                    if (this.hookHead.y >= 600) {
                        this.hookState = 2;
                    }
                }
                break;
            case 2:
                if (this.hookHead.y) {
                    this.moveHookHead(-ShuShiCarb_Global_1.default.speedHook * dt);
                    this.hookHead.getComponent(cc.BoxCollider).enabled = false;
                    if (this.hookHead.y < 0) {
                        this.hookHead.y = 100;
                        this.hookRope.width = 100;
                        this.hookState = 0;
                        this.hookHead.getComponent(cc.BoxCollider).enabled = true;
                        this.disableClickTemporarily(0.2);
                    }
                }
                this.setHookSprite(false);
                break;
            case 0:
            default:
                break;
        }
    };
    ShuShiCarbHook.prototype.disableClickTemporarily = function (duration) {
        var _this = this;
        this.isClickable = false;
        this.scheduleOnce(function () {
            _this.isClickable = true;
        }, duration);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwREFBMEM7QUFFMUMseURBQW1EO0FBRTdDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBNEdDO1FBekdHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUVkLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUF1RmhDLENBQUM7dUJBNUdvQixjQUFjO0lBc0IvQiwrQkFBTSxHQUFOO1FBQ0ksZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0UsMkJBQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSwy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Ry9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQVpSLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E0R2xDO0lBQUQscUJBQUM7Q0E1R0QsQUE0R0MsQ0E1RzJDLEVBQUUsQ0FBQyxTQUFTLEdBNEd2RDtrQkE1R29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiRm9vZCBmcm9tIFwiLi9TaHVTaGlDYXJiLkZvb2RcIjtcbmltcG9ydCBTaHVTaGlDYXJiUGxheWVyIGZyb20gXCIuL1NodVNoaUNhcmIuUGxheWVyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkhvb2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJIb29rID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rUm9wZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rU3ByaXRlT3BlbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rU3ByaXRlQ2xvc2U6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va0hlYWQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIGhvb2tTcGVlZCA9IDMwO1xuICAgIGhvb2tTdGF0ZSA9IDA7XG5cbiAgICBob29rSGVhZEJhc2VZOiBudW1iZXIgPSA4MDtcbiAgICBob29rUm9wZUJhc2VXaWR0aDogbnVtYmVyID0gMTAwO1xuICAgIFxuICAgIG1vdXNlUG9zO1xuICAgIGlzQ2xpY2thYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNodVNoaUNhcmJIb29rLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpOyAgXG4gICAgICAgIEdsb2JhbC5zcGVlZEhvb2sgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNwZWVkSG9va1wiKSkgfHwgR2xvYmFsLnNwZWVkSG9vaztcbiAgICAgICAgR2xvYmFsLmxlbmd0aEhvb2sgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxlbmd0aEhvb2tcIikpIHx8IEdsb2JhbC5sZW5ndGhIb29rO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNwZWVkIFwiLCBHbG9iYWwuc3BlZWRIb29rKTtcbiAgICB9XG5cblxuICAgIGluaXRIb29rKCkgIHtcbiAgICAgICAgdGhpcy5ob29rSGVhZC55ICA9IHRoaXMuaG9va0hlYWRCYXNlWTtcbiAgICAgICAgdGhpcy5ob29rUm9wZS53aWR0aCA9IHRoaXMuaG9va1JvcGVCYXNlV2lkdGg7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEhvb2soKTtcbiAgICB9XG4gICAgc2V0SG9va1N0YXRlKGhvb2tTdGF0ZSkge1xuICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IGhvb2tTdGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJob29rU3RhdGUgXCIsaG9va1N0YXRlKTtcbiAgICB9XG5cbiAgICBzZXRIb29rU3ByaXRlKGlzT3BlbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmhvb2tTcHJpdGVDbG9zZS5hY3RpdmUgPSAhaXNPcGVuO1xuICAgICAgICB0aGlzLmhvb2tTcHJpdGVPcGVuLmFjdGl2ZSA9IGlzT3BlbjtcbiAgICB9XG4gXG5cbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0NsaWNrYWJsZSB8fCB0aGlzLmhvb2tTdGF0ZSAhPT0gMCB8fCAhU2h1U2hpQ2FyYlBsYXllci5pbnN0YWNlLmlzQXRPcmRlclBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rU3RhdGUgPSAxO1xuICAgICAgICB0aGlzLm1vdXNlUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MihldmVudC5nZXRMb2NhdGlvblgoKSkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW91c2VQb3MpOyBcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubW91c2VQb3MpO1xuICAgIH1cblxuICAgIG1vdmVIb29rSGVhZChkdCkge1xuICAgICAgICB0aGlzLmhvb2tIZWFkLnkgKz0gZHQgKiBHbG9iYWwuc3BlZWRIb29rO1xuICAgICAgICB0aGlzLmhvb2tSb3BlLndpZHRoICs9IGR0ICogR2xvYmFsLmxlbmd0aEhvb2s7XG4gICAgICBcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuc2V0SG9va1Nwcml0ZSh0cnVlKTtcbiAgICAgICAgc3dpdGNoKHRoaXMuaG9va1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUhvb2tIZWFkKEdsb2JhbC5zcGVlZEhvb2sgKiBkdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSA+PSA2MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1N0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVIb29rSGVhZCgtR2xvYmFsLnNwZWVkSG9vayAgKiBkdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va0hlYWQuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSAgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tIZWFkLnkgPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tSb3BlLndpZHRoID0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rU3RhdGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rSGVhZC5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQ2xpY2tUZW1wb3JhcmlseSgwLjIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRIb29rU3ByaXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVDbGlja1RlbXBvcmFyaWx5KGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pc0NsaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH1cbn0iXX0=