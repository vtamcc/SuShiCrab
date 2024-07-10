
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
        node.enabledDebugDraw = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmQuQ29sbGllck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQWdEO0FBQ2hELDZEQUF1RDtBQUN2RCxxREFBK0M7QUFDL0MscURBQStDO0FBRXpDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEOztJQW1EQSxDQUFDO0lBakRHLGtDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBYyxDQUFDLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDaEIsc0RBQXNEO1lBQ3RELHlDQUF5QztZQUN6QyxrQ0FBa0M7WUFDbEMsSUFBSSxTQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDM0IsU0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxTQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNwQixTQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3JGLFNBQU8sQ0FBQyxTQUFTLENBQUMseUJBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsU0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDeEQseUJBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLHlCQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLDJCQUEyQjtZQUMzQix1REFBdUQ7WUFFdkQsU0FBUztZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLDZCQUFrQixDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsbUNBQW1DO2dCQUNuQyx5QkFBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBTyxFQUFwQixDQUFvQixDQUFDLENBQUM7Z0JBQzlHLFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNuQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDYjtJQUVMLENBQUM7SUFJRCx3QkFBd0I7SUFFeEIsd0JBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBRWpDLENBQUM7SUFFRCx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWhEZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQW1EM0I7SUFBRCxjQUFDO0NBbkRELEFBbURDLENBbkRvQyxFQUFFLENBQUMsU0FBUyxHQW1EaEQ7a0JBbkRvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTaHVTaGlDYXJiR2FtZSBmcm9tIFwiLi4vU2h1U2hpQ2FyYi5HYW1lXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkNvbnZleW9yIGZyb20gXCIuL1NodVNoaUNhcmIuQ29udmV5b3JcIjtcbmltcG9ydCBTaHVTaGlDYXJiRm9vZCBmcm9tIFwiLi9TaHVTaGlDYXJiLkZvb2RcIjtcbmltcG9ydCBTaHVTaGlDYXJiSG9vayBmcm9tIFwiLi9TaHVTaGlDYXJiLkhvb2tcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgbGV0IGZvb2QgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJGb29kKTtcbiAgICAgICAgbGV0IGlkID0gZm9vZC5pZDtcbiAgICAgICAgY29uc29sZS5sb2coZm9vZCk7XG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gMSkge1xuICAgICAgICAgICAgLy8gU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UuaG9va09iamVjdHMucHVzaChmb29kLm5vZGUpXG4gICAgICAgICAgICAvLyBTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5ob29rU3RhdGUgPSAyO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUaHUgdmUgbHVvb24gbmUgXCIpXG4gICAgICAgICAgICBsZXQgbm9kZU5ldyA9IG5ldyBjYy5Ob2RlKClcbiAgICAgICAgICAgIG5vZGVOZXcucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgIG5vZGVOZXcuc2NhbGUgPSAwLjU7XG4gICAgICAgICAgICBub2RlTmV3LmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UubGlzdFNwZkZvb2RbaWRdXG4gICAgICAgICAgICBub2RlTmV3LnNldFBhcmVudChTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5ob29rSGVhZCk7XG4gICAgICAgICAgICBub2RlTmV3LnNldFBvc2l0aW9uKGNjLnYyKDAsIC0yNSkpO1xuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuaG9va09iamVjdHMucHVzaCh7bm9kZTogbm9kZU5ldywgaWQ6IGlkfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9iaiBcIiwgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuaG9va09iamVjdHMpXG4gICAgICAgICAgICBTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5zZXRIb29rU3RhdGUoMik7XG4gICAgICAgICAgICBmb29kLmlzQ2hlY2sgPSAxO1xuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuY2hlY2tDb3JyZWN0KCk7XG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+IHtcbiAgICAgICAgICAgIC8vICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5yZW1vdmVOb2RlKG5vZGVOZXcsIGlkKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIH0sMC41KVxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChTaHVTaGlDYXJiQ29udmV5b3IpLnJlc2V0U2F0ZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gWMOzYSBtw7NuIMSDbiBraOG7j2kgbeG6o25nIGhvb2tPYmplY3RzXG4gICAgICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuaG9va09iamVjdHMgPSBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5ob29rT2JqZWN0cy5maWx0ZXIob2JqID0+IG9iai5ub2RlICE9PSBub2RlTmV3KTtcbiAgICAgICAgICAgICAgICBub2RlTmV3LmRlc3Ryb3koKVxuICAgICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKClcbiAgICAgICAgbm9kZS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgbm9kZS5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcbiAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19