
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
require('./assets/SuShiCarb/scripts/Game/ShuShiCarb.Conveyor');
require('./assets/SuShiCarb/scripts/Game/ShuShiCarb.Food');
require('./assets/SuShiCarb/scripts/Game/ShuShiCarb.Hook');
require('./assets/SuShiCarb/scripts/Game/ShuShiCarb.Player');
require('./assets/SuShiCarb/scripts/Game/ShuShiCard.CollierManager');
require('./assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemHook');
require('./assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ShopView');
require('./assets/SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.SettingView');
require('./assets/SuShiCarb/scripts/Game/Ui_Popup/ShuShiCrab.GameOver');
require('./assets/SuShiCarb/scripts/ShuShiCarb.Game');
require('./assets/SuShiCarb/scripts/ShuShiCarb.GameManager');
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
        this.hookHead.y += dt * ShuShiCarb_Global_1.default.speedHook;
        this.hookRope.width += dt * 40;
    };
    ShuShiCarbHook.prototype.onDestroy = function () {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwREFBMEM7QUFHcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFrR0M7UUEvRkcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUdoQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsdUJBQWlCLEdBQVcsR0FBRyxDQUFDOztJQWdGcEMsQ0FBQzt1QkFsR29CLGNBQWM7SUFzQi9CLCtCQUFNLEdBQU47UUFDSSxnQkFBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBR0QsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2pELENB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cUJBQzdEO2lCQUNKO2dCQUVELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLE1BQU07WUFDVixLQUFLLENBQUMsQ0FBQztZQUNIO2dCQUNJLE1BQU07U0FDakI7SUFDTCxDQUFDOztJQS9GYSx1QkFBUSxHQUFtQixJQUFJLENBQUM7SUFFOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQVpSLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FrR2xDO0lBQUQscUJBQUM7Q0FsR0QsQUFrR0MsQ0FsRzJDLEVBQUUsQ0FBQyxTQUFTLEdBa0d2RDtrQkFsR29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiRm9vZCBmcm9tIFwiLi9TaHVTaGlDYXJiLkZvb2RcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSG9vayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2h1U2hpQ2FyYkhvb2sgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tSb3BlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tTcHJpdGVPcGVuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tTcHJpdGVDbG9zZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rSGVhZDogY2MuTm9kZSA9IG51bGw7XG4gICAgXG4gICAgaG9va1NwZWVkID0gMzA7XG4gICAgaG9va1N0YXRlID0gMDtcblxuICAgIGhvb2tIZWFkQmFzZVk6IG51bWJlciA9IDgwO1xuICAgIGhvb2tSb3BlQmFzZVdpZHRoOiBudW1iZXIgPSAxMDA7XG4gICAgXG4gICAgbW91c2VQb3M7XG4gICBcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNodVNoaUNhcmJIb29rLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7ICBcbiAgICB9XG5cblxuICAgIGluaXRIb29rKCkgIHtcbiAgICAgICAgdGhpcy5ob29rSGVhZC55ICA9IHRoaXMuaG9va0hlYWRCYXNlWTtcbiAgICAgICAgdGhpcy5ob29rUm9wZS53aWR0aCA9IHRoaXMuaG9va1JvcGVCYXNlV2lkdGg7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEhvb2soKTtcbiAgICB9XG4gICAgc2V0SG9va1N0YXRlKGhvb2tTdGF0ZSkge1xuICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IGhvb2tTdGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJob29rU3RhdGUgXCIsaG9va1N0YXRlKTtcbiAgICB9XG5cbiAgICBzZXRIb29rU3ByaXRlKGlzT3BlbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmhvb2tTcHJpdGVDbG9zZS5hY3RpdmUgPSAhaXNPcGVuO1xuICAgICAgICB0aGlzLmhvb2tTcHJpdGVPcGVuLmFjdGl2ZSA9IGlzT3BlbjtcbiAgICB9XG4gXG5cbiAgICBvbk1vdXNlRG93bihldmVudDogY2MuRXZlbnQuRXZlbnRNb3VzZSkge1xuICAgICAgICBpZih0aGlzLmhvb2tTdGF0ZSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9va1N0YXRlID0gMTtcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoZXZlbnQuZ2V0TG9jYXRpb25YKCkpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vdXNlUG9zKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubW91c2VQb3MpO1xuICAgIH1cblxuICAgIG1vdmVIb29rSGVhZChkdCkge1xuICAgICAgICB0aGlzLmhvb2tIZWFkLnkgKz0gZHQgKiBHbG9iYWwuc3BlZWRIb29rO1xuICAgICAgICB0aGlzLmhvb2tSb3BlLndpZHRoICs9IGR0ICogNDA7XG4gICAgICBcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLnNldEhvb2tTcHJpdGUodHJ1ZSk7XG4gICAgICAgIHN3aXRjaCh0aGlzLmhvb2tTdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVIb29rSGVhZChHbG9iYWwuc3BlZWRIb29rICogZHQpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkgPj0gNjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlSG9va0hlYWQoLUdsb2JhbC5zcGVlZEhvb2sgICogZHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tIZWFkLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkgIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rSGVhZC55ID0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rUm9wZS53aWR0aCA9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1N0YXRlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va0hlYWQuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SG9va1Nwcml0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/ShuShiCarb.Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57e45IlTRNBoJ26llVySEfH', 'ShuShiCarb.Game');
// SuShiCarb/scripts/ShuShiCarb.Game.ts

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
var ShuShiCarb_Food_1 = require("./Game/ShuShiCarb.Food");
var ShuShiCarb_Player_1 = require("./Game/ShuShiCarb.Player");
var ShuShiCrab_GameOver_1 = require("./Game/Ui_Popup/ShuShiCrab.GameOver");
var ShuShiCarb_GameManager_1 = require("./ShuShiCarb.GameManager");
var ShuShiCarb_Global_1 = require("./ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGame = /** @class */ (function (_super) {
    __extends(ShuShiCarbGame, _super);
    function ShuShiCarbGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfOrder = null;
        _this.nHome = null;
        _this.listSpfFood = [];
        _this.nPlayer = null;
        _this.conveyor_1 = null;
        _this.conveyor_2 = null;
        _this.conveyor_3 = null;
        _this.prfFood = null;
        _this.lsFoodTable = [];
        _this.lbGold = null;
        _this.prfGameOver = null;
        _this.prgTime = null;
        _this.lbCountDown = null;
        // LIFE-CYCLE CALLBACKS:
        _this.data = [0, 1, 2, 3, 4, 5];
        _this.playOrders = [];
        _this.hookObjects = [];
        _this.indexData = 0;
        _this.countCorrect = 0;
        _this.numberCountdown = 7;
        _this.countdownInterval = null;
        _this.isMove = false;
        _this.player = null;
        _this.gold = 0;
        _this.duration = 60;
        _this.numberCountDown = 0;
        _this.isCountDown = false;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbGame_1 = ShuShiCarbGame;
    ShuShiCarbGame.prototype.onLoad = function () {
        ShuShiCarbGame_1.instance = this;
        // this.renderFoodOder();
        this.randomOrderFood();
        console.log(this.playOrders);
        this.conveyor(this.conveyor_1);
        this.conveyor(this.conveyor_2);
        this.conveyor(this.conveyor_3);
        this.renderOrderFood();
        this.startCountDown();
        //this.renderFood();      
    };
    // randomIdFood(arr,count) {
    //     let idFood = [];
    //     for(let i = 0; i < count; i++) {
    //         let randomIndex = Math.floor(Math.random() * arr.length);
    //         idFood.push(randomIndex);
    //         arr.splice(randomIndex,1);
    //     }
    //     return arr;
    // }
    ShuShiCarbGame.prototype.randomOrderFood = function () {
        this.playOrders = [];
        for (var i = 0; i < 3; i++) {
            var randomIndex = Math.floor(Math.random() * this.data.length);
            var foodId = this.data[randomIndex];
            this.playOrders.push(foodId);
        }
    };
    ShuShiCarbGame.prototype.startCountDown = function () {
        this.isCountDown = true;
        this.numberCountDown = this.duration;
        this.schedule(this.updateCountDown, 1);
    };
    ShuShiCarbGame.prototype.updateCountDown = function () {
        if (this.numberCountDown > 0) {
            this.numberCountDown--;
            this.updatePrgressTime();
            this.lbCountDown.string = "00: " + this.numberCountDown + " ";
        }
        else {
            this.isCountDown = false;
            this.lbCountDown.string = "00:00";
            this.gameOver(this.prfGameOver, false);
        }
    };
    ShuShiCarbGame.prototype.gameOver = function (prfGameOver, isWin) {
        var gamOver = cc.instantiate(prfGameOver).getComponent(ShuShiCrab_GameOver_1.default);
        if (isWin) {
            gamOver.gameWin();
        }
        else {
            gamOver.gameLose();
        }
        this.node.addChild(gamOver.node);
    };
    ShuShiCarbGame.prototype.updatePrgressTime = function () {
        if (this.prgTime) {
            this.prgTime.progress -= 1 / this.duration;
        }
    };
    ShuShiCarbGame.prototype.renderOrderFood = function () {
        // if (this.player) {
        //     this.player.node.destroy(); // Destroy previous player node
        // }
        this.player = cc.instantiate(this.prfOrder).getComponent(ShuShiCarb_Player_1.default);
        for (var i = 0; i < this.player.listFood.length; i++) {
            var food = this.player.listFood[i];
            food.getComponent(cc.Sprite).spriteFrame = this.listSpfFood[this.playOrders[i]];
        }
        this.indexData++;
        this.player.setData(this.indexData);
        this.nPlayer.addChild(this.player.node);
    };
    ShuShiCarbGame.prototype.checkCorrect = function () {
        var _this = this;
        if (this.hookObjects.length === 0) {
            console.log("hut het me roi");
            return;
        }
        var hookFoodId = this.hookObjects[0].id;
        var foundMatch = false;
        var _loop_1 = function (i) {
            if (this_1.playOrders[i] === hookFoodId) {
                if (!this_1.player.listFood[i].getChildByName("tick").active) {
                    this_1.player.listFood[i].getChildByName("tick").active = true;
                    this_1.scheduleOnce(function () {
                        _this.lsFoodTable[i].getComponent(cc.Sprite).spriteFrame = _this.listSpfFood[hookFoodId];
                        _this.lsFoodTable[i].active = true;
                    }, 0.2);
                    this_1.gold += 5;
                    this_1.updateGold();
                    foundMatch = true;
                    this_1.countCorrect++;
                    return "break";
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.playOrders.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        this.lbGold.string = this.gold + ' ';
        console.log("Keo dung ne ", this.countCorrect);
        if (!foundMatch) {
            console.log("sai me may roi");
        }
        if (this.countCorrect >= 3) {
            this.resetGame(true);
        }
    };
    ShuShiCarbGame.prototype.updateGold = function () {
        ShuShiCarb_Global_1.default.totalGold += this.gold;
        cc.sys.localStorage.setItem('totalGold', JSON.stringify(ShuShiCarb_Global_1.default.totalGold));
    };
    ShuShiCarbGame.prototype.conveyor = function (node) {
        for (var i = 0; i < node.childrenCount; i++) {
            var item = node.children[i].getComponent(ShuShiCarb_Food_1.default);
            var randomIndex = Math.floor(Math.random() * this.data.length);
            item.setData(this.data[randomIndex]);
        }
    };
    ShuShiCarbGame.prototype.removeNode = function (node, id) {
        node.destroy();
        for (var i = 0; i < this.hookObjects.length; i++) {
            if (this.hookObjects[i].node == node && this.hookObjects[i].id == id) {
                this.hookObjects.splice(i, 1);
            }
        }
    };
    ShuShiCarbGame.prototype.resetFoodTable = function () {
        for (var i = 0; i < this.lsFoodTable.length; i++) {
            var item = this.lsFoodTable[i];
            item.active = false;
        }
    };
    ShuShiCarbGame.prototype.resetGame = function (isHappy) {
        var _this = this;
        console.log("Resetting game...");
        this.countCorrect = 0;
        var resetCallback = function () {
            _this.randomOrderFood();
            _this.renderOrderFood();
            // this.conveyor(this.conveyor_1);
            // this.conveyor(this.conveyor_2); 
            // this.conveyor(this.conveyor_3);
            _this.resetFoodTable();
        };
        if (isHappy) {
            this.player.happyEffectPlayerMoveOut(resetCallback);
        }
        else {
            this.player.sadEffectPlayerMoveOut(resetCallback);
        }
    };
    ShuShiCarbGame.prototype.onclickBack = function () {
        ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
        this.node.destroy();
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = true;
    };
    ShuShiCarbGame.prototype.start = function () {
    };
    var ShuShiCarbGame_1;
    ShuShiCarbGame.instance = null;
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGame.prototype, "prfOrder", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nHome", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ShuShiCarbGame.prototype, "listSpfFood", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nPlayer", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "conveyor_1", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "conveyor_2", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "conveyor_3", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGame.prototype, "prfFood", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "lsFoodTable", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGame.prototype, "lbGold", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGame.prototype, "prfGameOver", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ShuShiCarbGame.prototype, "prgTime", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGame.prototype, "lbCountDown", void 0);
    ShuShiCarbGame = ShuShiCarbGame_1 = __decorate([
        ccclass
    ], ShuShiCarbGame);
    return ShuShiCarbGame;
}(cc.Component));
exports.default = ShuShiCarbGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUN4RCwyRUFBcUU7QUFFckUsbUVBQTZEO0FBQzdELHlEQUF5QztBQUduQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWdPQztRQTVORyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsaUJBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRXBDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUczQixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQWEsSUFBSSxDQUFBO1FBQzVCLHdCQUF3QjtRQUN4QixVQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFXLEdBQWtDLEVBQUUsQ0FBQztRQUNoRCxlQUFTLEdBQUcsQ0FBQyxD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VTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1M7SUFsQ1gsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWdPbEM7SUFBRCxxQkFBQztDQWhPRCxBQWdPQyxDQWhPMkMsRUFBRSxDQUFDLFNBQVMsR0FnT3ZEO2tCQWhPb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkNvbnZleW9yIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Db252ZXlvclwiO1xuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5Gb29kXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYlBsYXllciBmcm9tIFwiLi9HYW1lL1NodVNoaUNhcmIuUGxheWVyXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVPdmVyIGZyb20gXCIuL0dhbWUvVWlfUG9wdXAvU2h1U2hpQ3JhYi5HYW1lT3ZlclwiO1xuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuL1NodVNoaUNhcmIuR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZk9yZGVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Ib21lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgbGlzdFNwZkZvb2Q6IGNjLlNwcml0ZUZyYW1lIFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udmV5b3JfMTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb252ZXlvcl8yOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnZleW9yXzM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZGb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbHNGb29kVGFibGU6IGNjLk5vZGVbXT0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkdhbWVPdmVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBwcmdUaW1lOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGxcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBkYXRhID0gWzAsMSwyLDMsNCw1XTtcbiAgICBwbGF5T3JkZXJzID0gW107XG4gICAgaG9va09iamVjdHM6IHtub2RlOmNjLk5vZGUsIGlkOiBudW1iZXJ9IFtdID0gW107XG4gICAgaW5kZXhEYXRhID0gMDtcbiAgICBjb3VudENvcnJlY3QgPSAwO1xuICAgIG51bWJlckNvdW50ZG93biA9IDc7XG4gICAgY291bnRkb3duSW50ZXJ2YWw6IGFueSA9IG51bGw7XG4gICAgaXNNb3ZlICA9IGZhbHNlO1xuICAgIHBsYXllciA9IG51bGw7XG4gICAgZ29sZCA9IDA7XG4gICAgZHVyYXRpb24gPSA2MDtcbiAgICBudW1iZXJDb3VudERvd24gPSAwO1xuICAgIGlzQ291bnREb3duID0gZmFsc2U7XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgIFxuICAgICAgICAvLyB0aGlzLnJlbmRlckZvb2RPZGVyKCk7XG4gICAgICAgIHRoaXMucmFuZG9tT3JkZXJGb29kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheU9yZGVycyk7XG4gICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8xKTtcbiAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpO1xuICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMyk7XG4gICAgICAgIHRoaXMucmVuZGVyT3JkZXJGb29kKCk7XG4gICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgLy90aGlzLnJlbmRlckZvb2QoKTsgICAgICBcbiAgICB9XG5cbiAgIFxuICAgIC8vIHJhbmRvbUlkRm9vZChhcnIsY291bnQpIHtcbiAgICAvLyAgICAgbGV0IGlkRm9vZCA9IFtdO1xuICAgIC8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG4gICAgLy8gICAgICAgICBpZEZvb2QucHVzaChyYW5kb21JbmRleCk7XG4gICAgLy8gICAgICAgICBhcnIuc3BsaWNlKHJhbmRvbUluZGV4LDEpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBhcnI7XG4gICAgLy8gfVxuICAgIHJhbmRvbU9yZGVyRm9vZCgpIHtcbiAgICAgICAgdGhpcy5wbGF5T3JkZXJzID0gW107IFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBmb29kSWQgPSB0aGlzLmRhdGFbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5wbGF5T3JkZXJzLnB1c2goZm9vZElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0Q291bnREb3duKCkge1xuICAgICAgICB0aGlzLmlzQ291bnREb3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ291bnREb3duLDEpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYodGhpcy5udW1iZXJDb3VudERvd24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlckNvdW50RG93bi0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmdyZXNzVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSBcIjAwOiBcIiArIHRoaXMubnVtYmVyQ291bnREb3duICsgXCIgXCIgO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxiQ291bnREb3duLnN0cmluZyA9IFwiMDA6MDBcIlxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlcih0aGlzLnByZkdhbWVPdmVyLGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKHByZkdhbWVPdmVyOiBjYy5QcmVmYWIsIGlzV2luOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBnYW1PdmVyID0gY2MuaW5zdGFudGlhdGUocHJmR2FtZU92ZXIpLmdldENvbXBvbmVudChTaHVTaGlDYXJiR2FtZU92ZXIpXG4gICAgICAgIGlmKGlzV2luKSB7XG4gICAgICAgICAgICBnYW1PdmVyLmdhbWVXaW4oKVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBnYW1PdmVyLmdhbWVMb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbU92ZXIubm9kZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJncmVzc1RpbWUoKSB7XG4gICAgICAgIGlmKHRoaXMucHJnVGltZSkge1xuICAgICAgICAgICAgdGhpcy5wcmdUaW1lLnByb2dyZXNzIC09IDEgLyB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlck9yZGVyRm9vZCgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnBsYXllci5ub2RlLmRlc3Ryb3koKTsgLy8gRGVzdHJveSBwcmV2aW91cyBwbGF5ZXIgbm9kZVxuICAgICAgICAvLyB9XG4gICAgICAgXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZPcmRlcikuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJQbGF5ZXIpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXIubGlzdEZvb2QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmb29kID0gdGhpcy5wbGF5ZXIubGlzdEZvb2RbaV1cbiAgICAgICAgICAgIGZvb2QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZGb29kW3RoaXMucGxheU9yZGVyc1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleERhdGErKztcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0RGF0YSh0aGlzLmluZGV4RGF0YSk7XG4gICAgICAgIHRoaXMublBsYXllci5hZGRDaGlsZCh0aGlzLnBsYXllci5ub2RlKTtcbiAgICB9XG5cbiAgICBjaGVja0NvcnJlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmhvb2tPYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJodXQgaGV0IG1lIHJvaVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaG9va0Zvb2RJZCA9IHRoaXMuaG9va09iamVjdHNbMF0uaWQ7XG4gICAgICAgIGxldCBmb3VuZE1hdGNoID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5T3JkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5T3JkZXJzW2ldID09PSBob29rRm9vZElkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpc3RGb29kW2ldLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxzRm9vZFRhYmxlW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmRm9vZFtob29rRm9vZElkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubHNGb29kVGFibGVbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LDAuMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29sZCArPSA1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUdvbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRDb3JyZWN0Kys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGJHb2xkLnN0cmluZyA9IHRoaXMuZ29sZCArICcgJztcbiAgICAgICAgY29uc29sZS5sb2coXCJLZW8gZHVuZyBuZSBcIix0aGlzLmNvdW50Q29ycmVjdCk7XG4gICAgICAgIGlmICghZm91bmRNYXRjaCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYWkgbWUgbWF5IHJvaVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5jb3VudENvcnJlY3QgPj0zKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0R2FtZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICB1cGRhdGVHb2xkKCkge1xuICAgICAgICBHbG9iYWwudG90YWxHb2xkICs9IHRoaXMuZ29sZDtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbEdvbGQnLEpTT04uc3RyaW5naWZ5KEdsb2JhbC50b3RhbEdvbGQpKTtcbiAgICB9XG4gICAgY29udmV5b3Iobm9kZTogY2MuTm9kZSkge1xuICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBub2RlLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChTaHVTaGlDYXJiRm9vZCk7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0RGF0YSh0aGlzLmRhdGFbcmFuZG9tSW5kZXhdKTtcbiAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlTm9kZShub2RlOiBjYy5Ob2RlLCBpZCkge1xuICAgICAgICBub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaG9va09iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaG9va09iamVjdHNbaV0ubm9kZSA9PSBub2RlICYmIHRoaXMuaG9va09iamVjdHNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tPYmplY3RzLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmVzZXRGb29kVGFibGUoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxzRm9vZFRhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubHNGb29kVGFibGVbaV07XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgIH1cbiAgICByZXNldEdhbWUoaXNIYXBweTogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc2V0dGluZyBnYW1lLi4uXCIpO1xuICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCA9IDA7XG4gICAgICAgIGxldCByZXNldENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21PcmRlckZvb2QoKTsgXG4gICAgICAgICAgICB0aGlzLnJlbmRlck9yZGVyRm9vZCgpOyBcbiAgICAgICAgICAgIC8vIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8xKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8yKTsgXG4gICAgICAgICAgICAvLyB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMyk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Rm9vZFRhYmxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc0hhcHB5KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5oYXBweUVmZmVjdFBsYXllck1vdmVPdXQocmVzZXRDYWxsYmFjayk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNhZEVmZmVjdFBsYXllck1vdmVPdXQocmVzZXRDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbmNsaWNrQmFjaygpIHsgXG4gICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS51cGRhdGVUb3RhbEdvbGQoKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICBcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLm5Ib21lLmdldENoaWxkQnlOYW1lKCdwbGF5YnRuJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RhcnQgKCkge1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/ShuShiCarb.GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4f8btwtChDJ7eWDTDf8uUO', 'ShuShiCarb.GameManager');
// SuShiCarb/scripts/ShuShiCarb.GameManager.ts

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
var ShuShiCarb_ShopView_1 = require("./Game/Ui_Popup/Shop/ShuShiCarb.ShopView");
var ShuShiCarb_Game_1 = require("./ShuShiCarb.Game");
var ShuShiCarb_Global_1 = require("./ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGameManager = /** @class */ (function (_super) {
    __extends(ShuShiCarbGameManager, _super);
    function ShuShiCarbGameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nHome = null;
        _this.prfGame = null;
        _this.prfShopView = null;
        _this.lbTotalGold = null;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbGameManager_1 = ShuShiCarbGameManager;
    // LIFE-CYCLE CALLBACKS:
    ShuShiCarbGameManager.prototype.onLoad = function () {
        ShuShiCarbGameManager_1.instance = this;
        ShuShiCarb_Global_1.default.totalGold = JSON.parse(cc.sys.localStorage.getItem("totalGold")) || 2000;
        ShuShiCarb_Global_1.default.speedHook = JSON.parse(cc.sys.localStorage.getItem("speed")) || 20;
        this.updateTotalGold();
    };
    ShuShiCarbGameManager.prototype.start = function () {
    };
    ShuShiCarbGameManager.prototype.onClickPlay = function () {
        //  this.nHome.active = false;
        //  this.nGame.active = true;
        var game = cc.instantiate(this.prfGame).getComponent(ShuShiCarb_Game_1.default);
        this.node.addChild(game.node);
        //this.nHome.active = false;
        this.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = false;
    };
    ShuShiCarbGameManager.prototype.onClickShopView = function () {
        var shopView = cc.instantiate(this.prfShopView).getComponent(ShuShiCarb_ShopView_1.default);
        this.node.addChild(shopView.node);
    };
    ShuShiCarbGameManager.prototype.updateTotalGold = function () {
        this.lbTotalGold.string = ShuShiCarb_Global_1.default.totalGold + " ";
    };
    var ShuShiCarbGameManager_1;
    ShuShiCarbGameManager.instance = null;
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameManager.prototype, "nHome", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGameManager.prototype, "prfGame", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGameManager.prototype, "prfShopView", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGameManager.prototype, "lbTotalGold", void 0);
    ShuShiCarbGameManager = ShuShiCarbGameManager_1 = __decorate([
        ccclass
    ], ShuShiCarbGameManager);
    return ShuShiCarbGameManager;
}(cc.Component));
exports.default = ShuShiCarbGameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLGdGQUEwRTtBQUMxRSxxREFBK0M7QUFDL0MseURBQXlDO0FBRW5DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBeUNDO1FBdENFLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFhLElBQUksQ0FBQzs7UUE4QjVCLGlCQUFpQjtJQUNyQixDQUFDOzhCQXpDb0IscUJBQXFCO0lBV3RDLHdCQUF3QjtJQUV6QixzQ0FBTSxHQUFOO1FBQ0csdUJBQXFCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QywyQkFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNoRiwyQkFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFLLEdBQUw7SUFFQyxDQUFDO0lBQ0YsMkNBQVcsR0FBWDtRQUNHLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLHlCQUFjLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUVyRixDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUNHLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyw2QkFBa0IsQ0FBQyxDQUFBO1FBQ2hGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsK0NBQWUsR0FBZjtRQUNHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLDJCQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNwRCxDQUFDOztJQXRDYSw4QkFBUSxHQUEwQixJQUFJLENBQUM7SUFFckQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4REFDVTtJQVZYLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBeUN6QztJQUFELDRCQUFDO0NBekNELEFBeUNDLENBekNrRCxFQUFFLENBQUMsU0FBUyxHQXlDOUQ7a0JBekNvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5pbXBvcnQgU2h1U2hpQ2FyYlNob3BWaWV3IGZyb20gXCIuL0dhbWUvVWlfUG9wdXAvU2hvcC9TaHVTaGlDYXJiLlNob3BWaWV3XCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HYW1lXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuL1NodVNoaUNhcmIuR2xvYmFsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHsgICBcbiAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJHYW1lTWFuYWdlciA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5Ib21lOiBjYy5Ob2RlID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICBwcmZHYW1lOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgcHJmU2hvcFZpZXc6IGNjLlByZWZhYiA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTGFiZWwpIFxuICAgbGJUb3RhbEdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgb25Mb2FkICgpIHtcbiAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICBHbG9iYWwudG90YWxHb2xkID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b3RhbEdvbGRcIikpIHx8IDIwMDA7XG4gICAgICBHbG9iYWwuc3BlZWRIb29rID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGVlZFwiKSkgfHwgMjA7XG4gICAgICB0aGlzLnVwZGF0ZVRvdGFsR29sZCgpO1xuICAgfVxuXG4gICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICBvbkNsaWNrUGxheSgpIHtcbiAgICAgIC8vICB0aGlzLm5Ib21lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgLy8gIHRoaXMubkdhbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGxldCBnYW1lID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lKS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkdhbWUpXG4gICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZS5ub2RlKTtcbiAgICAgIC8vdGhpcy5uSG9tZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3BsYXlidG4nKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgIFxuICAgfVxuXG4gICBvbkNsaWNrU2hvcFZpZXcoKSB7XG4gICAgICBsZXQgc2hvcFZpZXcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZlNob3BWaWV3KS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYlNob3BWaWV3KVxuICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNob3BWaWV3Lm5vZGUpO1xuICAgfVxuICAgdXBkYXRlVG90YWxHb2xkKCkge1xuICAgICAgdGhpcy5sYlRvdGFsR29sZC5zdHJpbmcgPSBHbG9iYWwudG90YWxHb2xkICsgXCIgXCI7IFxuICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
cc._RF.push(module, '36872qNW/5Exbg45GQJNBd+', 'ShuShiCarb.Global');
// SuShiCarb/scripts/ShuShiCarb.Global.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.totalGold = 0;
    Global.dataHook = [{ price: 150, speed: 10 }, { price: 300, speed: 15 }, { price: 450, speed: 20 }, { price: 600, speed: 25 }, { price: 750, speed: 30 }];
    Global.speedHook = 20;
    return Global;
}());
exports.default = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBR2xGO0lBQUE7SUFNQSxDQUFDO0lBTFUsZ0JBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsZUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDakksZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFHMUIsYUFBQztDQU5ELEFBTUMsSUFBQTtrQkFOb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbCB7XG4gICAgc3RhdGljIHRvdGFsR29sZDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgZGF0YUhvb2sgPSBbe3ByaWNlOiAxNTAsc3BlZWQ6IDEwfSx7cHJpY2U6IDMwMCxzcGVlZDogMTV9LCB7cHJpY2U6IDQ1MCxzcGVlZDogMjB9LHtwcmljZTogNjAwLHNwZWVkOiAyNX0se3ByaWNlOiA3NTAsc3BlZWQ6IDMwfV07XG4gICAgc3RhdGljIHNwZWVkSG9vayA9IDIwO1xuICAgIC8vIHN0YXRpYyBkYXRhSG9vayA9IFsxLDIzXTtcbiAgICBcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.SettingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '484713ZCZ9FspQaj6ncJKs9', 'ShuShiCarb.SettingView');
// SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.SettingView.ts

// const {ccclass, property} = cc._decorator;
// @ccclass
// export default class GPFSettingView extends GPFBasePopup {
//     @property(cc.SpriteFrame)
//     sfMusic: cc.SpriteFrame[] = [];
//     @property(cc.Sprite)
//     spMusic: cc.Sprite = null
//     @property(cc.Sprite)
//     spSound: cc.Sprite = null
//     updateStatus() {
//         if (GPFGlobal.isMusicOn) {
//             this.spMusic.spriteFrame = this.sfMusic[0];
//         } else {
//             this.spMusic.spriteFrame = this.sfMusic[1];
//         }
//         if (GPFGlobal.isSoundOn) {
//             this.spSound.spriteFrame = this.sfMusic[0]
//         } else {
//             this.spSound.spriteFrame = this.sfMusic[1]
//         }
//     }
//     onClickMusic() {
//         GPFGlobal.isMusicOn = !GPFGlobal.isMusicOn;
//         this.updateStatus()
//         GPFGlobal.soundManager.updateMusicState()
//     }
//     onClickSound() {
//         GPFGlobal.isSoundOn = !GPFGlobal.isSoundOn;
//         this.updateStatus();
//         console.log(GPFGlobal.isSoundOn)
//     }
//     // LIFE-CYCLE CALLBACKS:
//     // onLoad () {}
//     start () {
//         this.updateStatus()
//     }
//     // update (dt) {}
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1NodVNoaUNhcmIuU2V0dGluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkNBQTZDO0FBRTdDLFdBQVc7QUFDWCw2REFBNkQ7QUFFN0QsZ0NBQWdDO0FBQ2hDLHNDQUFzQztBQUV0QywyQkFBMkI7QUFDM0IsZ0NBQWdDO0FBQ2hDLDJCQUEyQjtBQUMzQixnQ0FBZ0M7QUFHaEMsdUJBQXVCO0FBQ3ZCLHFDQUFxQztBQUNyQywwREFBMEQ7QUFDMUQsbUJBQW1CO0FBQ25CLDBEQUEwRDtBQUMxRCxZQUFZO0FBRVoscUNBQXFDO0FBQ3JDLHlEQUF5RDtBQUN6RCxtQkFBbUI7QUFDbkIseURBQXlEO0FBQ3pELFlBQVk7QUFDWixRQUFRO0FBRVIsdUJBQXVCO0FBQ3ZCLHNEQUFzRDtBQUN0RCw4QkFBOEI7QUFDOUIsb0RBQW9EO0FBQ3BELFFBQVE7QUFFUix1QkFBdUI7QUFDdkIsc0RBQXNEO0FBQ3RELCtCQUErQjtBQUMvQiwyQ0FBMkM7QUFDM0MsUUFBUTtBQUNSLCtCQUErQjtBQUUvQixzQkFBc0I7QUFFdEIsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5QixRQUFRO0FBRVIsd0JBQXdCO0FBQ3hCLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBHUEZTZXR0aW5nVmlldyBleHRlbmRzIEdQRkJhc2VQb3B1cCB7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4vLyAgICAgc2ZNdXNpYzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbi8vICAgICBzcE11c2ljOiBjYy5TcHJpdGUgPSBudWxsXG4vLyAgICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbi8vICAgICBzcFNvdW5kOiBjYy5TcHJpdGUgPSBudWxsXG5cblxuLy8gICAgIHVwZGF0ZVN0YXR1cygpIHtcbi8vICAgICAgICAgaWYgKEdQRkdsb2JhbC5pc011c2ljT24pIHtcbi8vICAgICAgICAgICAgIHRoaXMuc3BNdXNpYy5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1swXTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHRoaXMuc3BNdXNpYy5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1sxXTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGlmIChHUEZHbG9iYWwuaXNTb3VuZE9uKSB7XG4vLyAgICAgICAgICAgICB0aGlzLnNwU291bmQuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTXVzaWNbMF1cbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHRoaXMuc3BTb3VuZC5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1sxXVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgb25DbGlja011c2ljKCkge1xuLy8gICAgICAgICBHUEZHbG9iYWwuaXNNdXNpY09uID0gIUdQRkdsb2JhbC5pc011c2ljT247XG4vLyAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKClcbi8vICAgICAgICAgR1BGR2xvYmFsLnNvdW5kTWFuYWdlci51cGRhdGVNdXNpY1N0YXRlKClcbi8vICAgICB9XG5cbi8vICAgICBvbkNsaWNrU291bmQoKSB7XG4vLyAgICAgICAgIEdQRkdsb2JhbC5pc1NvdW5kT24gPSAhR1BGR2xvYmFsLmlzU291bmRPbjtcbi8vICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coR1BGR2xvYmFsLmlzU291bmRPbilcbi8vICAgICB9XG4vLyAgICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbi8vICAgICAvLyBvbkxvYWQgKCkge31cblxuLy8gICAgIHN0YXJ0ICgpIHtcbi8vICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoKVxuLy8gICAgIH1cblxuLy8gICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4vLyB9XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCard.CollierManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07571YrTBpHQZ4RW7KNcoYv', 'ShuShiCard.CollierManager');
// SuShiCarb/scripts/Game/ShuShiCard.CollierManager.ts

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
var ShuShiCarb_Game_1 = require("../ShuShiCarb.Game");
var ShuShiCarb_Conveyor_1 = require("./ShuShiCarb.Conveyor");
var ShuShiCarb_Food_1 = require("./ShuShiCarb.Food");
var ShuShiCarb_Hook_1 = require("./ShuShiCarb.Hook");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Collier = /** @class */ (function (_super) {
    __extends(Collier, _super);
    function Collier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collier.prototype.onCollisionEnter = function (other, self) {
        var food = this.node.getComponent(ShuShiCarb_Food_1.default);
        var id = food.id;
        console.log(food);
        if (other.tag == 1) {
            // ShuShiCarbHook.instance.hookObjects.push(food.node)
            // ShuShiCarbHook.instance.hookState = 2;
            // console.log("Thu ve luoon ne ")
            var nodeNew_1 = new cc.Node();
            nodeNew_1.parent = this.node.parent;
            nodeNew_1.scale = 0.5;
            nodeNew_1.addComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[id];
            nodeNew_1.setParent(ShuShiCarb_Hook_1.default.instance.hookHead);
            nodeNew_1.setPosition(cc.v2(0, -25));
            ShuShiCarb_Game_1.default.instance.hookObjects.push({ node: nodeNew_1, id: id });
            console.log("obj ", ShuShiCarb_Game_1.default.instance.hookObjects);
            ShuShiCarb_Hook_1.default.instance.setHookState(2);
            food.isCheck = 1;
            ShuShiCarb_Game_1.default.instance.checkCorrect();
            // this.scheduleOnce(()=> {
            //     ShuShiCarbGame.instance.removeNode(nodeNew, id);
            // },0.5)
            this.node.getComponent(ShuShiCarb_Conveyor_1.default).resetSate(false);
            this.scheduleOnce(function () {
                // Xóa món ăn khỏi mảng hookObjects
                ShuShiCarb_Game_1.default.instance.hookObjects = ShuShiCarb_Game_1.default.instance.hookObjects.filter(function (obj) { return obj.node !== nodeNew_1; });
                nodeNew_1.destroy();
            }, 0.5);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    Collier.prototype.onLoad = function () {
        var node = cc.director.getCollisionManager();
        node.enabled = true;
    };
    Collier.prototype.start = function () {
    };
    Collier = __decorate([
        ccclass
    ], Collier);
    return Collier;
}(cc.Component));
exports.default = Collier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmQuQ29sbGllck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQWdEO0FBQ2hELDZEQUF1RDtBQUN2RCxxREFBK0M7QUFDL0MscURBQStDO0FBRXpDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEOztJQWlEQSxDQUFDO0lBL0NHLGtDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBYyxDQUFDLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDaEIsc0RBQXNEO1lBQ3RELHlDQUF5QztZQUN6QyxrQ0FBa0M7WUFDbEMsSUFBSSxTQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDM0IsU0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxTQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNwQixTQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3JGLFNBQU8sQ0FBQyxTQUFTLENBQUMseUJBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsU0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDeEQseUJBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLHlCQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLDJCQUEyQjtZQUMzQix1REFBdUQ7WUFFdkQsU0FBUztZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLDZCQUFrQixDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsbUNBQW1DO2dCQUNuQyx5QkFBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBTyxFQUFwQixDQUFvQixDQUFDLENBQUM7Z0JBQzlHLFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNuQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDYjtJQUVMLENBQUM7SUFJRCx3QkFBd0I7SUFFeEIsd0JBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQsdUJBQUssR0FBTDtJQUVBLENBQUM7SUE5Q2dCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FpRDNCO0lBQUQsY0FBQztDQWpERCxBQWlEQyxDQWpEb0MsRUFBRSxDQUFDLFNBQVMsR0FpRGhEO2tCQWpEb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2FtZVwiO1xuaW1wb3J0IFNodVNoaUNhcmJDb252ZXlvciBmcm9tIFwiLi9TaHVTaGlDYXJiLkNvbnZleW9yXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkhvb2sgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Ib29rXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGxldCBmb29kID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTaHVTaGlDYXJiRm9vZCk7XG4gICAgICAgIGxldCBpZCA9IGZvb2QuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvb2QpO1xuICAgICAgICBpZiAob3RoZXIudGFnID09IDEpIHtcbiAgICAgICAgICAgIC8vIFNodVNoaUNhcmJIb29rLmluc3RhbmNlLmhvb2tPYmplY3RzLnB1c2goZm9vZC5ub2RlKVxuICAgICAgICAgICAgLy8gU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UuaG9va1N0YXRlID0gMjtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVGh1IHZlIGx1b29uIG5lIFwiKVxuICAgICAgICAgICAgbGV0IG5vZGVOZXcgPSBuZXcgY2MuTm9kZSgpXG4gICAgICAgICAgICBub2RlTmV3LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICBub2RlTmV3LnNjYWxlID0gMC41O1xuICAgICAgICAgICAgbm9kZU5ldy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmxpc3RTcGZGb29kW2lkXVxuICAgICAgICAgICAgbm9kZU5ldy5zZXRQYXJlbnQoU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UuaG9va0hlYWQpO1xuICAgICAgICAgICAgbm9kZU5ldy5zZXRQb3NpdGlvbihjYy52MigwLCAtMjUpKTtcbiAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmhvb2tPYmplY3RzLnB1c2goe25vZGU6IG5vZGVOZXcsIGlkOiBpZH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvYmogXCIsIFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmhvb2tPYmplY3RzKVxuICAgICAgICAgICAgU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2Uuc2V0SG9va1N0YXRlKDIpO1xuICAgICAgICAgICAgZm9vZC5pc0NoZWNrID0gMTtcbiAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmNoZWNrQ29ycmVjdCgpO1xuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PiB7XG4gICAgICAgICAgICAvLyAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UucmVtb3ZlTm9kZShub2RlTmV3LCBpZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB9LDAuNSlcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkNvbnZleW9yKS5yZXNldFNhdGUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFjDs2EgbcOzbiDEg24ga2jhu49pIG3huqNuZyBob29rT2JqZWN0c1xuICAgICAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmhvb2tPYmplY3RzID0gU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuaG9va09iamVjdHMuZmlsdGVyKG9iaiA9PiBvYmoubm9kZSAhPT0gbm9kZU5ldyk7XG4gICAgICAgICAgICAgICAgbm9kZU5ldy5kZXN0cm95KClcbiAgICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGxldCBub2RlID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpXG4gICAgICAgIG5vZGUuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCarb.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3894fyXWvVMl4qDb2W/ERoN', 'ShuShiCarb.Player');
// SuShiCarb/scripts/Game/ShuShiCarb.Player.ts

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
var ShuShiCarb_Game_1 = require("../ShuShiCarb.Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbPlayer = /** @class */ (function (_super) {
    __extends(ShuShiCarbPlayer, _super);
    function ShuShiCarbPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.char = null;
        _this.listFood = [];
        _this.nchat = null;
        _this.listCharacter = [];
        _this.prgBarCountDown = null;
        _this.lbCountDown = null;
        _this.nTime = null;
        _this.duration = 10;
        _this.numberCountDown = 0;
        _this.isCountDown = false;
        _this.isMove = false;
        return _this;
        // update (dt) {}
    }
    // @property(cc.Node)
    // foodItem1: cc.Node = null;
    // @property(cc.Node)
    // foodItem2: cc.Node = null;
    // @property(cc.Node)
    // foodItem3: cc.Node = null;
    ShuShiCarbPlayer.prototype.setData = function (index) {
        this.char.skeletonData = this.listCharacter[index]; // listChar [0] = con ao vang
    };
    ShuShiCarbPlayer.prototype.startCountDown = function () {
        this.isCountDown = true;
        this.numberCountDown = this.duration;
        this.schedule(this.updateCountDown, 1);
    };
    ShuShiCarbPlayer.prototype.updateCountDown = function () {
        if (this.numberCountDown > 0) {
            this.numberCountDown--;
            this.updateProgressBar();
            this.lbCountDown.string = this.numberCountDown + '';
        }
        else {
            this.isCountDown = false;
            ShuShiCarb_Game_1.default.instance.resetGame(false);
            console.log("Thua");
            //this.effectShow();
        }
    };
    ShuShiCarbPlayer.prototype.updateProgressBar = function () {
        if (this.prgBarCountDown) {
            this.prgBarCountDown.progress -= 0.1;
        }
    };
    ShuShiCarbPlayer.prototype.effectShow = function () {
        var _this = this;
        this.char.animation = 'move';
        this.nchat.active = false;
        this.nTime.active = false;
        cc.tween(this.char.node)
            .to(2, { x: 0 })
            .call(function () {
            _this.char.animation = 'idle';
            _this.nchat.active = true;
            _this.nTime.active = true;
            _this.startCountDown();
        })
            .start();
    };
    ShuShiCarbPlayer.prototype.happyEffectPlayerMoveOut = function (callbacks) {
        var _this = this;
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "happy";
        cc.tween(this.char.node)
            .to(1.5, { x: 600 })
            .call(function () {
            _this.node.destroy();
            callbacks();
        }).start();
    };
    ShuShiCarbPlayer.prototype.sadEffectPlayerMoveOut = function (callbacks) {
        var _this = this;
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "discomfort";
        cc.tween(this.char.node)
            .to(1.5, { x: 600 })
            .call(function () {
            _this.node.destroy();
            callbacks();
        }).start();
    };
    ShuShiCarbPlayer.prototype.start = function () {
        this.effectShow();
    };
    __decorate([
        property(sp.Skeleton)
    ], ShuShiCarbPlayer.prototype, "char", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbPlayer.prototype, "listFood", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbPlayer.prototype, "nchat", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], ShuShiCarbPlayer.prototype, "listCharacter", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ShuShiCarbPlayer.prototype, "prgBarCountDown", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbPlayer.prototype, "lbCountDown", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbPlayer.prototype, "nTime", void 0);
    ShuShiCarbPlayer = __decorate([
        ccclass
    ], ShuShiCarbPlayer);
    return ShuShiCarbPlayer;
}(cc.Component));
exports.default = ShuShiCarbPlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUFnRDtBQUcxQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQTJHQztRQXhHRyxVQUFJLEdBQWdCLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBc0IsRUFBRSxDQUFDO1FBRXRDLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFNLEdBQUcsS0FBSyxDQUFDOztRQXVGZixpQkFBaUI7SUFDckIsQ0FBQztJQXJGRyxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUc3QixrQ0FBTyxHQUFQLFVBQVEsS0FBSztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7SUFDckYsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztR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Q0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFyR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztrREFDRztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQzsyREFDWTtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZEQUNjO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSTtJQWZMLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBMkdwQztJQUFELHVCQUFDO0NBM0dELEFBMkdDLENBM0c2QyxFQUFFLENBQUMsU0FBUyxHQTJHekQ7a0JBM0dvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi9TaHVTaGlDYXJiLkdhbWVcIjtcbmltcG9ydCBTaHVTaGlDYXJiRm9vZCBmcm9tIFwiLi9TaHVTaGlDYXJiLkZvb2RcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBjaGFyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEZvb2Q6IGNjLk5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5jaGF0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxuICAgIGxpc3RDaGFyYWN0ZXI6IHNwLlNrZWxldG9uRGF0YVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIHByZ0JhckNvdW50RG93bjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkNvdW50RG93bjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5UaW1lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBkdXJhdGlvbiA9IDEwO1xuICAgIG51bWJlckNvdW50RG93biA9IDA7XG4gICAgaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICBpc01vdmUgPSBmYWxzZTtcblxuICAgIFxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGZvb2RJdGVtMTogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gZm9vZEl0ZW0yOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBmb29kSXRlbTM6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBzZXREYXRhKGluZGV4KSB7XG4gICAgICAgIHRoaXMuY2hhci5za2VsZXRvbkRhdGEgPSB0aGlzLmxpc3RDaGFyYWN0ZXJbaW5kZXhdOyAvLyBsaXN0Q2hhciBbMF0gPSBjb24gYW8gdmFuZ1xuICAgIH1cblxuICAgIHN0YXJ0Q291bnREb3duKCkge1xuICAgICAgICB0aGlzLmlzQ291bnREb3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ291bnREb3duLDEpO1xuICAgIH1cblxuICAgIFxuICAgIHVwZGF0ZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYodGhpcy5udW1iZXJDb3VudERvd24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlckNvdW50RG93bi0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSB0aGlzLm51bWJlckNvdW50RG93biArICcnO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5yZXNldEdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaHVhXCIpXG4gICAgICAgICAgICAvL3RoaXMuZWZmZWN0U2hvdygpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgaWYodGhpcy5wcmdCYXJDb3VudERvd24pIHtcbiAgICAgICAgICAgIHRoaXMucHJnQmFyQ291bnREb3duLnByb2dyZXNzIC09IDAuMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlZmZlY3RTaG93KCkge1xuICAgICAgICB0aGlzLmNoYXIuYW5pbWF0aW9uID0gJ21vdmUnO1xuICAgICAgICB0aGlzLm5jaGF0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5UaW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXIubm9kZSlcbiAgICAgICAgLnRvKDIsIHt4OiAwfSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9ICdpZGxlJztcbiAgICAgICAgICAgIHRoaXMubmNoYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMublRpbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICBoYXBweUVmZmVjdFBsYXllck1vdmVPdXQoY2FsbGJhY2tzOiBGdW5jdGlvbikge1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIixhY3RpdmUpO1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJkaXNjb21mb3J0XCIsIWFjdGl2ZSk7XG4gICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSBcImhhcHB5XCJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXG4gICAgICAgIC50bygxLjUse3g6IDYwMH0pXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBjYWxsYmFja3MoKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzYWRFZmZlY3RQbGF5ZXJNb3ZlT3V0KGNhbGxiYWNrczogRnVuY3Rpb24pIHtcbiAgICAgICAgLy8gdGhpcy5jaGFyLnNldEFuaW1hdGlvbigwLFwiaGFwcHlfb3V0XCIsYWN0aXZlKTtcbiAgICAgICAgLy8gdGhpcy5jaGFyLnNldEFuaW1hdGlvbigwLFwiZGlzY29tZm9ydFwiLCFhY3RpdmUpO1xuICAgICAgICB0aGlzLmNoYXIuYW5pbWF0aW9uID0gXCJkaXNjb21mb3J0XCJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXG4gICAgICAgIC50bygxLjUse3g6IDYwMH0pXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBjYWxsYmFja3MoKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBcblxuXG4gICAgc3RhcnQgKCkgeyAgXG4gICAgICAgIHRoaXMuZWZmZWN0U2hvdygpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCarb.Food.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1814d5TiQlDEohqTgqXx2zV', 'ShuShiCarb.Food');
// SuShiCarb/scripts/Game/ShuShiCarb.Food.ts

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
var ShuShiCarb_Game_1 = require("../ShuShiCarb.Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbFood = /** @class */ (function (_super) {
    __extends(ShuShiCarbFood, _super);
    function ShuShiCarbFood() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nFood = null;
        _this.id = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.isCheck = 0;
        return _this;
    }
    ShuShiCarbFood.prototype.onLoad = function () {
    };
    ShuShiCarbFood.prototype.start = function () {
    };
    ShuShiCarbFood.prototype.setData = function (idFood) {
        this.id = idFood;
        this.nFood.getComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[idFood];
    };
    ShuShiCarbFood.prototype.update = function (dt) {
        //    if(this.isCheck == 1) {
        //         this.node.setPosition(ShuShiCarbHook.instance.hookHead.x,ShuShiCarbHook.instance.hookHead.y);
        //    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuRm9vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixzREFBZ0Q7QUFLMUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEwQkM7UUF2QkcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixRQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ04sd0JBQXdCO1FBQ3hCLGFBQU8sR0FBRyxDQUFDLENBQUM7O0lBb0JoQixDQUFDO0lBbEJHLCtCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxnQ0FBTyxHQUFQLFVBQVEsTUFBTTtRQUNWLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNULDZCQUE2QjtRQUM3Qix3R0FBd0c7UUFDeEcsT0FBTztJQUNQLENBQUM7SUF0QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSTtJQUhMLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EwQmxDO0lBQUQscUJBQUM7Q0ExQkQsQUEwQkMsQ0ExQjJDLEVBQUUsQ0FBQyxTQUFTLEdBMEJ2RDtrQkExQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi9TaHVTaGlDYXJiLkdhbWVcIjtcbmltcG9ydCBTaHVTaGlDYXJiSG9vayBmcm9tIFwiLi9TaHVTaGlDYXJiLkhvb2tcIjtcblxuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkZvb2QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkZvb2Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIGlkID0gMCBcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBpc0NoZWNrID0gMDtcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgc2V0RGF0YShpZEZvb2QpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkRm9vZFxuICAgICAgICB0aGlzLm5Gb29kLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UubGlzdFNwZkZvb2RbaWRGb29kXTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAvLyAgICBpZih0aGlzLmlzQ2hlY2sgPT0gMSkge1xuICAgIC8vICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKFNodVNoaUNhcmJIb29rLmluc3RhbmNlLmhvb2tIZWFkLngsU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UuaG9va0hlYWQueSk7XG4gICAgLy8gICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/ShuShiCarb.Conveyor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbConveyor = /** @class */ (function (_super) {
    __extends(ShuShiCarbConveyor, _super);
    function ShuShiCarbConveyor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idFood = 0;
        _this.isMove = false;
        return _this;
    }
    ShuShiCarbConveyor.prototype.update = function () {
        if (this.isMove) {
            return;
        }
        if (this.idFood == 0) {
            if (this.node.x >= 1200 || !this.node.active) {
                this.resetPos();
                this.resetSate(true);
            }
            this.node.x += 4;
        }
        else if (this.idFood == 1 || !this.node.active) {
            if (this.node.x <= -1800) {
                this.node.x = 50;
                this.resetSate(true);
            }
            this.node.x -= 3;
        }
        else if (this.idFood == 2 || !this.node.active) {
            if (this.node.x >= 1200) {
                this.resetPos();
                this.resetSate(true);
            }
            this.node.x += 3;
        }
    };
    ShuShiCarbConveyor.prototype.resetPos = function () {
        this.node.x = -700;
    };
    ShuShiCarbConveyor.prototype.resetSate = function (isActive) {
        this.node.getComponent(cc.Sprite).enabled = isActive;
        this.node.getComponent(cc.BoxCollider).enabled = isActive;
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuQ29udmV5b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFHLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUE2Q0Y7UUF6Q0UsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixZQUFNLEdBQUcsS0FBSyxDQUFDOztJQXdDbEIsQ0FBQztJQXRDSyxtQ0FBTSxHQUFOO1FBQ0EsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsT0FBTztTQUNUO1FBQ0QsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7YUFBSyxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDNUMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO2FBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzNDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FFbkI7SUFFSixDQUFDO0lBSUQscUNBQVEsR0FBUjtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsUUFBaUI7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7SUFDN0QsQ0FBQztJQXhDRDtRQURDLFFBQVE7c0RBQ1U7SUFKRSxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQTZDekM7SUFBRCx5QkFBQztDQTdDRSxBQTZDRixDQTdDa0QsRUFBRSxDQUFDLFNBQVMsR0E2QzlEO2tCQTdDdUIsa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy8gTGVhcm4gVHlwZVNjcmlwdDpcbiAgIC8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuICAgLy8gTGVhcm4gQXR0cmlidXRlOlxuICAgLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuICAgLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4gICAvLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbiAgIGltcG9ydCBTaHVTaGlDYXJiR2FtZSBmcm9tIFwiLi4vU2h1U2hpQ2FyYi5HYW1lXCI7XG4gICBpbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XG5cbiAgIGNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4gICBAY2NjbGFzc1xuICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkNvbnZleW9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgIFxuICAgXG4gICBAcHJvcGVydHlcbiAgIGlkRm9vZDogbnVtYmVyID0gMDtcbiAgIGlzTW92ZSA9IGZhbHNlO1xuICAgICAgXG4gICAgICB1cGRhdGUoKSB7XG4gICAgICBpZih0aGlzLmlzTW92ZSkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5pZEZvb2QgPT0gMCkge1xuICAgICAgICAgaWYodGhpcy5ub2RlLnggPj0gMTIwMHx8IXRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3MoKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTYXRlKHRydWUpO1xuICAgICAgICAgfVxuICAgICAgICAgdGhpcy5ub2RlLnggKz0gNDtcbiAgICAgIH1lbHNlIGlmKHRoaXMuaWRGb29kID09IDEgfHwhdGhpcy5ub2RlLmFjdGl2ZSkge1xuICAgICAgICAgaWYodGhpcy5ub2RlLnggPD0gLTE4MDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gNTA7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U2F0ZSh0cnVlKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHRoaXMubm9kZS54IC09IDM7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHRoaXMuaWRGb29kID09IDIgfHwhdGhpcy5ub2RlLmFjdGl2ZSkge1xuICAgICAgICAgaWYodGhpcy5ub2RlLnggPj0gMTIwMCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldFBvcygpO1xuICAgICAgICAgICAgdGhpcy5yZXNldFNhdGUodHJ1ZSk7XG4gICAgICAgICB9XG4gICAgICAgICB0aGlzLm5vZGUueCArPSAzO1xuICAgICAgICAgXG4gICAgICB9XG4gICBcbiAgIH1cblxuICAgICAgXG5cbiAgIHJlc2V0UG9zKCkge1xuICAgICAgdGhpcy5ub2RlLnggPSAtNzAwO1xuICAgfVxuXG4gICByZXNldFNhdGUoaXNBY3RpdmU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gaXNBY3RpdmU7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gaXNBY3RpdmU7XG4gICB9XG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/ShuShiCrab.GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44367/LVl9AqbqS+KLuBWW4', 'ShuShiCrab.GameOver');
// SuShiCarb/scripts/Game/Ui_Popup/ShuShiCrab.GameOver.ts

"use strict";
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
var ShuShiCarb_GameManager_1 = require("../../ShuShiCarb.GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGameOver = /** @class */ (function (_super) {
    __extends(ShuShiCarbGameOver, _super);
    function ShuShiCarbGameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.starWin = [];
        _this.starLose = [];
        _this.textWin = null;
        _this.textLose = null;
        return _this;
    }
    ShuShiCarbGameOver.prototype.gameWin = function () {
        this.starWin.forEach(function (element) {
            element.active = true;
        });
        this.starLose.forEach(function (element) {
            element.active = false;
        });
        this.textWin.active = true;
        this.textLose.active = false;
        // this.stopGamePlay();
    };
    ShuShiCarbGameOver.prototype.gameLose = function () {
        this.starWin.forEach(function (element) {
            element.active = false;
        });
        this.starLose.forEach(function (element) {
            element.active = true;
        });
        this.textWin.active = false;
        this.textLose.active = true;
        // this.stopGamePlay();
    };
    ShuShiCarbGameOver.prototype.open = function () {
        cc.tween(this.node)
            .to(0.2, { scale: 1 })
            .start();
    };
    ShuShiCarbGameOver.prototype.onHome = function () {
        ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
        // let nodeGamePlay = cc.Canvas.instance.node.getChildByName("GamePlay")
        // nodeGamePlay.destroy();
        this.stopGamePlay();
    };
    ShuShiCarbGameOver.prototype.stopGamePlay = function () {
        var nodeGamePlay = cc.Canvas.instance.node.getChildByName("Main");
        nodeGamePlay.destroy();
    };
    ShuShiCarbGameOver.prototype.onLoad = function () {
        this.open();
    };
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameOver.prototype, "starWin", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameOver.prototype, "starLose", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameOver.prototype, "textWin", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGameOver.prototype, "textLose", void 0);
    ShuShiCarbGameOver = __decorate([
        ccclass
    ], ShuShiCarbGameOver);
    return ShuShiCarbGameOver;
}(cc.Component));
exports.default = ShuShiCarbGameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1NodVNoaUNyYWIuR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWlFO0FBQzNELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBd0RDO1FBckRHLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFFeEIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBK0M3QixDQUFDO0lBN0NHLG9DQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDeEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDekIsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLHVCQUF1QjtJQUMzQixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN4QixPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN6QixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUIsdUJBQXVCO0lBQzNCLENBQUM7SUFFRCxpQ0FBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7YUFDbkIsS0FBSyxFQUFFLENBQUE7SUFDWixDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLGdDQUFxQixDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNqRCx3RUFBd0U7UUFDeEUsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQseUNBQVksR0FBWjtRQUNJLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakUsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQXBERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNPO0lBVFIsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0F3RHRDO0lBQUQseUJBQUM7Q0F4REQsQUF3REMsQ0F4RCtDLEVBQUUsQ0FBQyxTQUFTLEdBd0QzRDtrQkF4RG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaHVTaGlDYXJiR2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uL1NodVNoaUNhcmIuR2FtZU1hbmFnZXJcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiR2FtZU92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3RhcldpbjogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3Rhckxvc2U6IGNjLk5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRleHRXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRleHRMb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGdhbWVXaW4oKSB7XG4gICAgICAgIHRoaXMuc3Rhcldpbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFyTG9zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGV4dFdpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnRleHRMb3NlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnN0b3BHYW1lUGxheSgpO1xuICAgIH1cblxuICAgIGdhbWVMb3NlKCkge1xuICAgICAgICB0aGlzLnN0YXJXaW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJMb3NlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRleHRXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGV4dExvc2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5zdG9wR2FtZVBsYXkoKTtcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgIC50bygwLjIsIHtzY2FsZTogMX0pXG4gICAgICAgIC5zdGFydCgpXG4gICAgfVxuXG4gICAgb25Ib21lKCkge1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlVG90YWxHb2xkKCk7XG4gICAgICAgIC8vIGxldCBub2RlR2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVQbGF5XCIpXG4gICAgICAgIC8vIG5vZGVHYW1lUGxheS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc3RvcEdhbWVQbGF5KCk7XG4gICAgfVxuXG4gICAgc3RvcEdhbWVQbGF5KCkge1xuICAgICAgICBsZXQgbm9kZUdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJNYWluXCIpXG4gICAgICAgIG5vZGVHYW1lUGxheS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm9wZW4oKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ShopView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e44aVyW49Ht7kWO/WUQKjk', 'ShuShiCarb.ShopView');
// SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ShopView.ts

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
var ShuShiCarb_Global_1 = require("../../../ShuShiCarb.Global");
var ShuShiCarb_ItemHook_1 = require("./ShuShiCarb.ItemHook");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbShopView = /** @class */ (function (_super) {
    __extends(ShuShiCarbShopView, _super);
    function ShuShiCarbShopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbGold = null;
        _this.nItemSpeedHook = null;
        _this.prfItemSpeedHook = null;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbShopView_1 = ShuShiCarbShopView;
    ShuShiCarbShopView.prototype.onLoad = function () {
        ShuShiCarbShopView_1.instace = this;
        this.itemSpeedHook();
        this.updateGold();
    };
    ShuShiCarbShopView.prototype.start = function () {
    };
    ShuShiCarbShopView.prototype.itemSpeedHook = function () {
        var item = cc.instantiate(this.prfItemSpeedHook).getComponent(ShuShiCarb_ItemHook_1.default);
        this.nItemSpeedHook.addChild(item.node);
    };
    ShuShiCarbShopView.prototype.updateGold = function () {
        this.lbGold.string = ShuShiCarb_Global_1.default.totalGold + " ";
    };
    // changeBtn(isTrue: boolean) {
    //     this.nBtnGreen.active = isTrue;
    //     this.nBtnGray.active = !isTrue;
    // }
    ShuShiCarbShopView.prototype.onClickClose = function () {
        this.node.destroy();
    };
    var ShuShiCarbShopView_1;
    ShuShiCarbShopView.instace = null;
    __decorate([
        property(cc.Label)
    ], ShuShiCarbShopView.prototype, "lbGold", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbShopView.prototype, "nItemSpeedHook", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbShopView.prototype, "prfItemSpeedHook", void 0);
    ShuShiCarbShopView = ShuShiCarbShopView_1 = __decorate([
        ccclass
    ], ShuShiCarbShopView);
    return ShuShiCarbShopView;
}(cc.Component));
exports.default = ShuShiCarbShopView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5TaG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnRUFBZ0Q7QUFDaEQsNkRBQXVEO0FBSWpELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBc0NDO1FBbkNHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0Isc0JBQWdCLEdBQWMsSUFBSSxDQUFDOztRQTZCbkMsaUJBQWlCO0lBQ3JCLENBQUM7MkJBdENvQixrQkFBa0I7SUFVbkMsbUNBQU0sR0FBTjtRQUNJLG9CQUFrQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0Qsa0NBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwwQ0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsNkJBQWtCLENBQUMsQ0FBQTtRQUNqRixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFNUMsQ0FBQztJQUdELHVDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRywyQkFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDaEQsQ0FBQztJQUVELCtCQUErQjtJQUMvQixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLElBQUk7SUFDSix5Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOztJQW5DYSwwQkFBTyxHQUF1QixJQUFJLENBQUM7SUFFakQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhEQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ2U7SUFSbEIsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FzQ3RDO0lBQUQseUJBQUM7Q0F0Q0QsQUFzQ0MsQ0F0QytDLEVBQUUsQ0FBQyxTQUFTLEdBc0MzRDtrQkF0Q29CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuaW1wb3J0IFNodVNoaUNhcmJJdGVtSG9vayBmcm9tIFwiLi9TaHVTaGlDYXJiLkl0ZW1Ib29rXCI7XG5cblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJTaG9wVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YWNlOiBTaHVTaGlDYXJiU2hvcFZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuSXRlbVNwZWVkSG9vazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkl0ZW1TcGVlZEhvb2s6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNodVNoaUNhcmJTaG9wVmlldy5pbnN0YWNlID0gdGhpcztcbiAgICAgICAgdGhpcy5pdGVtU3BlZWRIb29rKCk7XG4gICAgICAgIHRoaXMudXBkYXRlR29sZCgpO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBpdGVtU3BlZWRIb29rKCkge1xuICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmSXRlbVNwZWVkSG9vaykuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJJdGVtSG9vaylcbiAgICAgICAgdGhpcy5uSXRlbVNwZWVkSG9vay5hZGRDaGlsZChpdGVtLm5vZGUpO1xuXG4gICAgfVxuICAgIFxuXG4gICAgdXBkYXRlR29sZCgpIHtcbiAgICAgICAgdGhpcy5sYkdvbGQuc3RyaW5nID0gR2xvYmFsLnRvdGFsR29sZCArIFwiIFwiO1xuICAgIH1cblxuICAgIC8vIGNoYW5nZUJ0bihpc1RydWU6IGJvb2xlYW4pIHtcbiAgICAvLyAgICAgdGhpcy5uQnRuR3JlZW4uYWN0aXZlID0gaXNUcnVlO1xuICAgIC8vICAgICB0aGlzLm5CdG5HcmF5LmFjdGl2ZSA9ICFpc1RydWU7XG4gICAgLy8gfVxuICAgIG9uQ2xpY2tDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemHook.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc267ASAKxLjZBm3npC1v+1', 'ShuShiCarb.ItemHook');
// SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemHook.ts

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
var ShuShiCarb_GameManager_1 = require("../../../ShuShiCarb.GameManager");
var ShuShiCarb_Global_1 = require("../../../ShuShiCarb.Global");
var ShuShiCarb_ShopView_1 = require("./ShuShiCarb.ShopView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbItemHook = /** @class */ (function (_super) {
    __extends(ShuShiCarbItemHook, _super);
    function ShuShiCarbItemHook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbPrice = null;
        _this.nBtnBuy = null;
        _this.nStateBuy = null;
        _this.nCheckmask = null;
        _this.index = 0;
        _this.isCheck = false;
        return _this;
        // update (dt) {}
    }
    // data;
    // setData() {
    //     Global.dataHook = this.data;
    //     console.log(this.data);
    // }
    // LIFE-CYCLE CALLBACKS:
    ShuShiCarbItemHook.prototype.onLoad = function () {
        //this.setData();
        //this.checkClick(this.index);
        console.log(ShuShiCarb_Global_1.default.dataHook[this.index].price);
        this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndex")) || 0;
        // Global.dataHook[this.index] = JSON.parse(cc.sys.localStorage.getItem("price")) || 150;
        // this.updatePrice(this.index);
        this.checkClick();
        this.updatePrice(this.index);
    };
    ShuShiCarbItemHook.prototype.checkClick = function () {
        if (ShuShiCarb_Global_1.default.totalGold >= ShuShiCarb_Global_1.default.dataHook[this.index].price) {
            this.nCheckmask.active = false;
            this.isCheck = true;
        }
        else {
            this.nCheckmask.active = true;
            this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        }
    };
    ShuShiCarbItemHook.prototype.onClickBuy = function () {
        if (this.isCheck) {
            ShuShiCarb_Global_1.default.totalGold -= ShuShiCarb_Global_1.default.dataHook[this.index].price;
            ShuShiCarb_Global_1.default.speedHook += ShuShiCarb_Global_1.default.dataHook[this.index].speed;
            this.nStateBuy.children[this.index].active = true;
            cc.sys.localStorage.setItem('itemIndex', this.index.toString());
            // cc.sys.localStorage.setItem('price', Global.dataHook[this.index].price.toString);
            this.index++;
            console.log(this.index);
            this.checkClick();
            ShuShiCarb_ShopView_1.default.instace.updateGold();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            this.updatePrice(this.index);
        }
    };
    ShuShiCarbItemHook.prototype.updatePrice = function (index) {
        this.lbPrice.string = ShuShiCarb_Global_1.default.dataHook[index].price + ' ';
    };
    ShuShiCarbItemHook.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemHook.prototype, "lbPrice", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemHook.prototype, "nBtnBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemHook.prototype, "nStateBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemHook.prototype, "nCheckmask", void 0);
    ShuShiCarbItemHook = __decorate([
        ccclass
    ], ShuShiCarbItemHook);
    return ShuShiCarbItemHook;
}(cc.Component));
exports.default = ShuShiCarbItemHook;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5JdGVtSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwRUFBb0U7QUFDcEUsZ0VBQWdEO0FBQ2hELDZEQUF1RDtBQUdqRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQXVFQztRQXBFRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBTyxHQUFHLEtBQUssQ0FBQzs7UUF5RGhCLGlCQUFpQjtJQUNyQixDQUFDO0lBekRHLFFBQVE7SUFDUixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixJQUFJO0lBRUosd0JBQXdCO0lBR3hCLG1DQUFNLEdBQU47UUFDSSxpQkFBaUI7UUFDakIsOEJBQThCO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkUseUZBQXlGO1FBQ3pGLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdELHVDQUFVLEdBQVY7UUFDRyxJQUFHLDJCQUFNLENBQUMsU0FBUyxJQUFJLDJCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQUs7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDN0Q7SUFDTCxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUNJLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLDJCQUFNLENBQUMsU0FBUyxJQUFJLDJCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEQsMkJBQU0sQ0FBQyxTQUFTLElBQUksMkJBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMvRCxvRkFBb0Y7WUFDcEYsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRWIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLDZCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QyxnQ0FBcUIsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7SUFFTCxDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRywyQkFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQzdELENBQUM7SUFDRCxrQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQWpFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNTO0lBWFYsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0F1RXRDO0lBQUQseUJBQUM7Q0F2RUQsQUF1RUMsQ0F2RStDLEVBQUUsQ0FBQyxTQUFTLEdBdUUzRDtrQkF2RW9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuaW1wb3J0IFNodVNoaUNhcmJTaG9wVmlldyBmcm9tIFwiLi9TaHVTaGlDYXJiLlNob3BWaWV3XCI7XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSXRlbUhvb2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiUHJpY2U6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5CdG5CdXk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0YXRlQnV5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQ2hlY2ttYXNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpbmRleCA9IDA7XG4gICAgaXNDaGVjayA9IGZhbHNlO1xuICAgIC8vIGRhdGE7XG4gICAgLy8gc2V0RGF0YSgpIHtcbiAgICAvLyAgICAgR2xvYmFsLmRhdGFIb29rID0gdGhpcy5kYXRhO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgIC8vIH1cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy90aGlzLnNldERhdGEoKTtcbiAgICAgICAgLy90aGlzLmNoZWNrQ2xpY2sodGhpcy5pbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5wcmljZSk7XG4gICAgICAgIHRoaXMuaW5kZXggPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIml0ZW1JbmRleFwiKSkgfHwgMDtcbiAgICAgICAgLy8gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmljZVwiKSkgfHwgMTUwO1xuICAgICAgICAvLyB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgpO1xuICAgICAgICB0aGlzLmNoZWNrQ2xpY2soKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZSh0aGlzLmluZGV4KTtcbiAgICB9XG5cblxuICAgIGNoZWNrQ2xpY2soKSB7XG4gICAgICAgaWYoR2xvYmFsLnRvdGFsR29sZCA+PSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0ucHJpY2UpIHtcbiAgICAgICAgICAgdGhpcy5uQ2hlY2ttYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICB0aGlzLmlzQ2hlY2sgPSB0cnVlO1xuICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uQnRuQnV5LmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja0J1eSgpIHtcbiAgICAgICAgaWYodGhpcy5pc0NoZWNrKSB7XG4gICAgICAgICAgICBHbG9iYWwudG90YWxHb2xkIC09IEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5wcmljZTtcbiAgICAgICAgICAgIEdsb2JhbC5zcGVlZEhvb2sgKz0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5bdGhpcy5pbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbUluZGV4Jyx0aGlzLmluZGV4LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmljZScsIEdsb2JhbC5kYXRhSG9va1t0aGlzLmluZGV4XS5wcmljZS50b1N0cmluZyk7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0NsaWNrKCk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiU2hvcFZpZXcuaW5zdGFjZS51cGRhdGVHb2xkKCk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlVG90YWxHb2xkKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlUHJpY2UoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5sYlByaWNlLnN0cmluZyA9IEdsb2JhbC5kYXRhSG9va1tpbmRleF0ucHJpY2UgKyAnICc7IFxuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------
