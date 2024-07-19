
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
        var hookIndex = parseInt(cc.sys.localStorage.getItem("hookIndex")) || 0;
        var speed = ShuShiCarb_Global_1.default.dataHook[hookIndex].speed;
        var widtHook = ShuShiCarb_Global_1.default.dataHook[hookIndex].widthHook;
        ShuShiCarb_Global_1.default.lengthHook += widtHook;
        console.log("speed ", speed);
        ShuShiCarb_Global_1.default.speedHook += speed;
        console.log("Speed ne ", ShuShiCarb_Global_1.default.speedHook);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwREFBMEM7QUFFMUMseURBQW1EO0FBRTdDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBNkdDO1FBMUdHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUVkLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUF3RmhDLENBQUM7dUJBN0dvQixjQUFjO0lBc0IvQiwrQkFBTSxHQUFOO1FBQ0ksZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0UsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLEtBQUssR0FBRywyQkFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxRQUFRLEdBQUcsMkJBQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BELDJCQUFNLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QiwyQkFBTSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsMkJBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBR0QsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2pELENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxxQ0FBWSxHQUFaLFVBQWEsU0FBUztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE1BQWU7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3hDLENBQUM7SUFHRCxtQ0FBVSxHQUFWLFVBQVcsS0FBMEI7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksQ0FBQywyQkFBZ0IsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDMUYsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsRUFBRTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRywyQkFBTSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLEdBQUcsMkJBQU0sQ0FBQyxVQUFVLENBQUM7SUFFbEQsQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFDRCwrQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsUUFBTyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLEtBQUssQ0FBQztnQkFDRixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO29CQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLDJCQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7cUJBRXRCO2lCQUNKO2dCQUNELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtvQkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLDJCQUFNLENBQUMsU0FBUyxHQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDM0QsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBSSxDQUFDLEVBQUU7d0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO3dCQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQzFELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDckM7aUJBQ0o7Z0JBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsTUFBTTtZQUNWLEtBQUssQ0FBQyxDQUFDO1lBQ0g7Z0JBQ0ksTUFBTTtTQUNqQjtJQUNMLENBQUM7SUFFRCxnREFBdUIsR0FBdkIsVUFBd0IsUUFBZ0I7UUFBeEMsaUJBS0M7UUFKRyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7O0lBM0dhLHVCQUFRLEdBQW1CLElBQUksQ0FBQztJQUU5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBWlIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTZHbEM7SUFBRCxxQkFBQztDQTdHRCxBQTZHQyxDQTdHMkMsRUFBRSxDQUFDLFNBQVMsR0E2R3ZEO2tCQTdHb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL1NodVNoaUNhcmIuRm9vZFwiO1xuaW1wb3J0IFNodVNoaUNhcmJQbGF5ZXIgZnJvbSBcIi4vU2h1U2hpQ2FyYi5QbGF5ZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSG9vayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2h1U2hpQ2FyYkhvb2sgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tSb3BlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tTcHJpdGVPcGVuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tTcHJpdGVDbG9zZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBob29rSGVhZDogY2MuTm9kZSA9IG51bGw7XG4gICAgXG4gICAgaG9va1NwZWVkID0gMzA7XG4gICAgaG9va1N0YXRlID0gMDtcblxuICAgIGhvb2tIZWFkQmFzZVk6IG51bWJlciA9IDgwO1xuICAgIGhvb2tSb3BlQmFzZVdpZHRoOiBudW1iZXIgPSAxMDA7XG4gICAgXG4gICAgbW91c2VQb3M7XG4gICAgaXNDbGlja2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIGxldCBob29rSW5kZXggPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob29rSW5kZXhcIikpIHx8IDA7XG4gICAgICAgIGxldCBzcGVlZCA9IEdsb2JhbC5kYXRhSG9va1tob29rSW5kZXhdLnNwZWVkO1xuICAgICAgICBsZXQgd2lkdEhvb2sgPSBHbG9iYWwuZGF0YUhvb2tbaG9va0luZGV4XS53aWR0aEhvb2s7XG4gICAgICAgIEdsb2JhbC5sZW5ndGhIb29rICs9IHdpZHRIb29rO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNwZWVkIFwiLCBzcGVlZCk7XG4gICAgICAgIEdsb2JhbC5zcGVlZEhvb2sgKz0gc3BlZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3BlZWQgbmUgXCIsR2xvYmFsLnNwZWVkSG9vayk7XG4gICAgfVxuXG5cbiAgICBpbml0SG9vaygpICB7XG4gICAgICAgIHRoaXMuaG9va0hlYWQueSAgPSB0aGlzLmhvb2tIZWFkQmFzZVk7XG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSB0aGlzLmhvb2tSb3BlQmFzZVdpZHRoO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmluaXRIb29rKCk7XG4gICAgfVxuICAgIHNldEhvb2tTdGF0ZShob29rU3RhdGUpIHtcbiAgICAgICAgdGhpcy5ob29rU3RhdGUgPSBob29rU3RhdGU7XG4gICAgfVxuXG4gICAgc2V0SG9va1Nwcml0ZShpc09wZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ob29rU3ByaXRlQ2xvc2UuYWN0aXZlID0gIWlzT3BlbjtcbiAgICAgICAgdGhpcy5ob29rU3ByaXRlT3Blbi5hY3RpdmUgPSBpc09wZW47XG4gICAgfVxuIFxuXG4gICAgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDbGlja2FibGUgfHwgdGhpcy5ob29rU3RhdGUgIT09IDAgfHwgIVNodVNoaUNhcmJQbGF5ZXIuaW5zdGFjZS5pc0F0T3JkZXJQb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9va1N0YXRlID0gMTtcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoZXZlbnQuZ2V0TG9jYXRpb25YKCkpKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubW91c2VQb3MpO1xuICAgIH1cblxuICAgIG1vdmVIb29rSGVhZChkdCkge1xuICAgICAgICB0aGlzLmhvb2tIZWFkLnkgKz0gZHQgKiBHbG9iYWwuc3BlZWRIb29rO1xuICAgICAgICB0aGlzLmhvb2tSb3BlLndpZHRoICs9IGR0ICogR2xvYmFsLmxlbmd0aEhvb2s7XG4gICAgICBcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuc2V0SG9va1Nwcml0ZSh0cnVlKTtcbiAgICAgICAgc3dpdGNoKHRoaXMuaG9va1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUhvb2tIZWFkKEdsb2JhbC5zcGVlZEhvb2sgKiBkdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSA+PSA2MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1N0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVIb29rSGVhZCgtR2xvYmFsLnNwZWVkSG9vayAgKiBkdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va0hlYWQuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSAgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tIZWFkLnkgPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tSb3BlLndpZHRoID0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rU3RhdGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rSGVhZC5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQ2xpY2tUZW1wb3JhcmlseSgwLjIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRIb29rU3ByaXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVDbGlja1RlbXBvcmFyaWx5KGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pc0NsaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH1cbn0iXX0=