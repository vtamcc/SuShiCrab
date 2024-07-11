
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