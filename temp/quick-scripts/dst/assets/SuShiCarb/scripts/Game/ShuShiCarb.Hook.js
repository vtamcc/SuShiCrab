
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxTaHVTaGlDYXJiLkhvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE0SUM7UUF6SUcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUdoQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBRyxHQUFHLENBQUM7UUFDaEIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUVkLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLHVCQUFpQixHQUFXLENBQUMsQ0FBQzs7SUEwSGxDLENBQUM7dUJBNUlvQixjQUFjO0lBcUIvQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1QiwrQkFBTSxHQUFOO1FBQ0ksZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakYsK0RBQStEO1FBQy9ELDJFQUEyRTtJQUMvRSxDQUFDO0lBR0QsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFB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cUJBQUM7Q0E1SUQsQUE0SUMsQ0E1STJDLEVBQUUsQ0FBQyxTQUFTLEdBNEl2RDtrQkE1SW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJIb29rIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFNodVNoaUNhcmJIb29rID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaG9va1JvcGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaG9va1Nwcml0ZU9wZW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaG9va1Nwcml0ZUNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhvb2tIZWFkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgaG9va1NwZWVkID0gNDAwO1xyXG4gICAgaG9va1N0YXRlID0gMDtcclxuXHJcbiAgICBob29rSGVhZEJhc2VZOiBudW1iZXIgPSA4MDtcclxuICAgIGhvb2tSb3BlQmFzZVdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgXHJcbiAgICBtb3VzZVBvcztcclxuICAgIC8vIGluaXRpYWxMZW5ndGg6IG51bWJlciA9IDEwMDsgIFxyXG4gICAgLy8gbWF4TGVuZ3RoOiBudW1iZXIgPSA3NTA7ICAgICAgXHJcbiAgICAvLyBncm93aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMub25Nb3VzZURvd24sIHRoaXMpOyAgXHJcbiAgICAgICAgLy8gIHRoaXMuaG9va0hlYWRCYXNlWSA9IHRoaXMuaG9va0hlYWRCYXNlWSB8fCB0aGlzLmhvb2tIZWFkLnk7XHJcbiAgICAgICAgLy8gIHRoaXMuaG9va1JvcGVCYXNlV2lkdGggPSB0aGlzLmhvb2tSb3BlQmFzZVdpZHRoIHx8IHRoaXMuaG9va1JvcGUud2lkdGg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluaXRIb29rKCkgIHtcclxuICAgICAgICB0aGlzLmhvb2tIZWFkLnkgID0gdGhpcy5ob29rSGVhZEJhc2VZO1xyXG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSB0aGlzLmhvb2tSb3BlQmFzZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEhvb2soKTtcclxuICAgIH1cclxuICAgIHNldEhvb2tTdGF0ZShob29rU3RhdGUpIHtcclxuICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IGhvb2tTdGF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhvb2tTdGF0ZSBcIixob29rU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhvb2tTcHJpdGUoaXNPcGVuOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5ob29rU3ByaXRlQ2xvc2UuYWN0aXZlID0gIWlzT3BlbjtcclxuICAgICAgICB0aGlzLmhvb2tTcHJpdGVPcGVuLmFjdGl2ZSA9IGlzT3BlbjtcclxuICAgIH1cclxuIFxyXG5cclxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudE1vdXNlKSB7XHJcbiAgICAgICAgaWYodGhpcy5ob29rU3RhdGUgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IDE7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoZXZlbnQuZ2V0TG9jYXRpb25YKCkpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb3VzZVBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubW91c2VQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVIb29rSGVhZChkdCkge1xyXG4gICAgICAgIHRoaXMuaG9va0hlYWQueSArPSBkdCAqIDMwO1xyXG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggLT0gZHQgKiA0MDtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgXHJcblxyXG4gICAgZ2V0SG9va0hlYWRHbG9iYWxQb3MoKTogY2MuVmVjMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIodGhpcy5tb3VzZVBvcywgdGhpcy5ob29rSGVhZC55IC0gMjUpKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLnNldEhvb2tTcHJpdGUodHJ1ZSk7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMuaG9va1N0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUhvb2tIZWFkKDUwICogZHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSA+PSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1N0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9va0hlYWQueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUhvb2tIZWFkKC01MCAgKiBkdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rSGVhZC5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkgIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tIZWFkLnkgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSA1MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rU3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tIZWFkLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SG9va1Nwcml0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5ncm93aW5nKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLm5vZGUuaGVpZ2h0IDwgdGhpcy5tYXhMZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgKz0gMjAwICogMC4yO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuc2l6ZS5oZWlnaHQgKz0gMjAwICogMC4yO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ncm93aW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5pbml0aWFsTGVuZ3RoO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuc2l6ZS5oZWlnaHQgPSB0aGlzLmluaXRpYWxMZW5ndGg7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcikge1xyXG4gICAgICAgIC8vIC8vIEzhuqV5IGJvdW5kaW5nIGJveCBj4bunYSB0aGFuaCBrw6lvXHJcbiAgICAgICAgLy8gY29uc3QgZHJhZ0JhckJvdW5kaW5nQm94ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xyXG5cclxuICAgICAgICAvLyAvLyBM4bq3cCBxdWEgdOG6pXQgY+G6oyBjw6FjIG3Ds24gxINuIMSR4buDIGtp4buDbSB0cmEgdmEgY2jhuqFtXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZvb2RDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgZm9vZEl0ZW0gPSB0aGlzLmZvb2RDb250YWluZXIuY2hpbGRyZW5baV07XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGZvb2RCb3VuZGluZ0JveCA9IGZvb2RJdGVtLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xyXG5cclxuICAgICAgICAvLyAgICAgaWYgKGRyYWdCYXJCb3VuZGluZ0JveC5pbnRlcnNlY3RzKGZvb2RCb3VuZGluZ0JveCkpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIE7hur91IHZhIGNo4bqhbSwga8OpbyBtw7NuIMSDbiB24buBIHbhu4sgdHLDrSBuaOG6pXQgxJHhu4tuaFxyXG4gICAgICAgIC8vICAgICAgICAgZm9vZEl0ZW0uc2V0UG9zaXRpb24oY2MudjIoMTAwLCAxMDApKTsgIC8vIFbDrSBk4bulIMSR4bq3dCB24buBIHbhu4sgdHLDrSAoMTAwLCAxMDApXHJcbiAgICAgICAgLy8gICAgICAgICBicmVhazsgIC8vIEThu6tuZyBs4bqhaSBzYXUga2hpIHTDrG0gdGjhuqV5IHZhIGNo4bqhbSDEkeG6p3UgdGnDqm5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcbn0iXX0=