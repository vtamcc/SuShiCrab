
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
            console.log("va cham");
            console.log("idd ", id);
            // ShuShiCarbHook.instance.hookObjects.push(food.node)
            // ShuShiCarbHook.instance.hookState = 2;
            // console.log("Thu ve luoon ne ")
            var nodeNew = new cc.Node();
            nodeNew.parent = this.node.parent;
            nodeNew.position = this.node.position;
            nodeNew.scale = 0.5;
            nodeNew.addComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[id];
            nodeNew.setParent(ShuShiCarb_Hook_1.default.instance.hookHead);
            nodeNew.setPosition(cc.v2(0, -25));
            ShuShiCarb_Game_1.default.instance.hookObjects.push({ node: nodeNew, id: id });
            console.log("obj ", ShuShiCarb_Game_1.default.instance.hookObjects);
            ShuShiCarb_Hook_1.default.instance.setHookState(2);
            this.node.active = false;
            food.isCheck = 1;
            ShuShiCarb_Game_1.default.instance.checkCorrect();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmQuQ29sbGllck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQWdEO0FBQ2hELHFEQUErQztBQUMvQyxxREFBK0M7QUFFekMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUMsMkJBQVk7SUFBakQ7O0lBOENBLENBQUM7SUE1Q0csa0NBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUFjLENBQUMsQ0FBQztRQUNsRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLHNEQUFzRDtZQUN0RCx5Q0FBeUM7WUFDekMsa0NBQWtDO1lBQ2xDLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzNCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNwQixPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3JGLE9BQU8sQ0FBQyxTQUFTLENBQUMseUJBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDeEQseUJBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqQix5QkFBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMxQztJQUVMLENBQUM7SUFJRCx3QkFBd0I7SUFFeEIsd0JBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBRWpDLENBQUM7SUFFRCx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQTNDZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQThDM0I7SUFBRCxjQUFDO0NBOUNELEFBOENDLENBOUNvQyxFQUFFLENBQUMsU0FBUyxHQThDaEQ7a0JBOUNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTaHVTaGlDYXJiR2FtZSBmcm9tIFwiLi4vU2h1U2hpQ2FyYi5HYW1lXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkhvb2sgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Ib29rXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGxldCBmb29kID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTaHVTaGlDYXJiRm9vZCk7XG4gICAgICAgIGxldCBpZCA9IGZvb2QuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvb2QpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhIGNoYW1cIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWRkIFwiLCBpZCk7XG4gICAgICAgICAgICAvLyBTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5ob29rT2JqZWN0cy5wdXNoKGZvb2Qubm9kZSlcbiAgICAgICAgICAgIC8vIFNodVNoaUNhcmJIb29rLmluc3RhbmNlLmhvb2tTdGF0ZSA9IDI7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRodSB2ZSBsdW9vbiBuZSBcIilcbiAgICAgICAgICAgIGxldCBub2RlTmV3ID0gbmV3IGNjLk5vZGUoKVxuICAgICAgICAgICAgbm9kZU5ldy5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgICAgICAgbm9kZU5ldy5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICAgIG5vZGVOZXcuc2NhbGUgPSAwLjU7XG4gICAgICAgICAgICBub2RlTmV3LmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UubGlzdFNwZkZvb2RbaWRdXG4gICAgICAgICAgICBub2RlTmV3LnNldFBhcmVudChTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5ob29rSGVhZCk7XG4gICAgICAgICAgICBub2RlTmV3LnNldFBvc2l0aW9uKGNjLnYyKDAsIC0yNSkpO1xuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuaG9va09iamVjdHMucHVzaCh7bm9kZTogbm9kZU5ldywgaWQ6IGlkfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9iaiBcIiwgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuaG9va09iamVjdHMpXG4gICAgICAgICAgICBTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5zZXRIb29rU3RhdGUoMik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBmb29kLmlzQ2hlY2sgPSAxO1xuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuY2hlY2tDb3JyZWN0KCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBsZXQgbm9kZSA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKVxuICAgICAgICBub2RlLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBub2RlLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgIFxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=