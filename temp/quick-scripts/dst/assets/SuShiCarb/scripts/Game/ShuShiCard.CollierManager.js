
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxTaHVTaGlDYXJkLkNvbGxpZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUFnRDtBQUNoRCw2REFBdUQ7QUFDdkQscURBQStDO0FBQy9DLHFEQUErQztBQUV6QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDs7SUFpREEsQ0FBQztJQS9DRyxrQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMseUJBQWMsQ0FBQyxDQUFDO1FBQ2xELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2hCLHNEQUFzRDtZQUN0RCx5Q0FBeUM7WUFDekMsa0NBQWtDO1lBQ2xDLElBQUksU0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzNCLFNBQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEMsU0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDcEIsU0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLHlCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNyRixTQUFPLENBQUMsU0FBUyxDQUFDLHlCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELFNBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLHlCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHlCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3hELHlCQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqQix5QkFBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QywyQkFBMkI7WUFDM0IsdURBQXVEO1lBRXZELFNBQVM7WUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyw2QkFBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLG1DQUFtQztnQkFDbkMseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLHlCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQU8sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO2dCQUM5RyxTQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7SUFFTCxDQUFDO0lBSUQsd0JBQXdCO0lBRXhCLHdCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBOUNnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBaUQzQjtJQUFELGNBQUM7Q0FqREQsQUFpREMsQ0FqRG9DLEVBQUUsQ0FBQyxTQUFTLEdBaURoRDtrQkFqRG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2FtZVwiO1xyXG5pbXBvcnQgU2h1U2hpQ2FyYkNvbnZleW9yIGZyb20gXCIuL1NodVNoaUNhcmIuQ29udmV5b3JcIjtcclxuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL1NodVNoaUNhcmIuRm9vZFwiO1xyXG5pbXBvcnQgU2h1U2hpQ2FyYkhvb2sgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Ib29rXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBsZXQgZm9vZCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkZvb2QpO1xyXG4gICAgICAgIGxldCBpZCA9IGZvb2QuaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9vZCk7XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIFNodVNoaUNhcmJIb29rLmluc3RhbmNlLmhvb2tPYmplY3RzLnB1c2goZm9vZC5ub2RlKVxyXG4gICAgICAgICAgICAvLyBTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5ob29rU3RhdGUgPSAyO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRodSB2ZSBsdW9vbiBuZSBcIilcclxuICAgICAgICAgICAgbGV0IG5vZGVOZXcgPSBuZXcgY2MuTm9kZSgpXHJcbiAgICAgICAgICAgIG5vZGVOZXcucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgbm9kZU5ldy5zY2FsZSA9IDAuNTtcclxuICAgICAgICAgICAgbm9kZU5ldy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmxpc3RTcGZGb29kW2lkXVxyXG4gICAgICAgICAgICBub2RlTmV3LnNldFBhcmVudChTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5ob29rSGVhZCk7XHJcbiAgICAgICAgICAgIG5vZGVOZXcuc2V0UG9zaXRpb24oY2MudjIoMCwgLTI1KSk7XHJcbiAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmhvb2tPYmplY3RzLnB1c2goe25vZGU6IG5vZGVOZXcsIGlkOiBpZH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9iaiBcIiwgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuaG9va09iamVjdHMpXHJcbiAgICAgICAgICAgIFNodVNoaUNhcmJIb29rLmluc3RhbmNlLnNldEhvb2tTdGF0ZSgyKTtcclxuICAgICAgICAgICAgZm9vZC5pc0NoZWNrID0gMTtcclxuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuY2hlY2tDb3JyZWN0KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UucmVtb3ZlTm9kZShub2RlTmV3LCBpZCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gfSwwLjUpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkNvbnZleW9yKS5yZXNldFNhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBYw7NhIG3Ds24gxINuIGto4buPaSBt4bqjbmcgaG9va09iamVjdHNcclxuICAgICAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmhvb2tPYmplY3RzID0gU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuaG9va09iamVjdHMuZmlsdGVyKG9iaiA9PiBvYmoubm9kZSAhPT0gbm9kZU5ldyk7XHJcbiAgICAgICAgICAgICAgICBub2RlTmV3LmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpXHJcbiAgICAgICAgbm9kZS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19