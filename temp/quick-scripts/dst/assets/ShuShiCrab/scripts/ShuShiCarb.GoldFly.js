
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShuShiCrab/scripts/ShuShiCarb.GoldFly.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2cbe1ypNFMMKbHC8zXu7Db', 'ShuShiCarb.GoldFly');
// SuShiCarb/scripts/ShuShiCarb.GoldFly.ts

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
var ShuShiCarbGoldFly = /** @class */ (function (_super) {
    __extends(ShuShiCarbGoldFly, _super);
    function ShuShiCarbGoldFly() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coinPrefab = null;
        _this.coinPool = null;
        return _this;
    }
    ShuShiCarbGoldFly_1 = ShuShiCarbGoldFly;
    ShuShiCarbGoldFly.prototype.onLoad = function () {
        ShuShiCarbGoldFly_1.instance = this;
        this.coinPool = new cc.NodePool();
        this.initCoinPool();
    };
    ShuShiCarbGoldFly.prototype.initCoinPool = function (count) {
        if (count === void 0) { count = 5; }
        for (var i = 0; i < count; i++) {
            var coin = cc.instantiate(this.coinPrefab);
            this.coinPool.put(coin);
        }
    };
    ShuShiCarbGoldFly.prototype.playAnim = function (startPos, endPos, nodeEffect) {
        var randomCount = 5;
        var stPos = startPos.getPosition();
        var edPos = endPos.getPosition();
        this.playCoinFlyAnim(randomCount, stPos, edPos);
        nodeEffect.active = true;
        cc.tween(nodeEffect)
            .to(1.2, { y: edPos.y })
            .call(function () {
            nodeEffect.y = 0;
            nodeEffect.active = false;
        })
            .start();
    };
    ShuShiCarbGoldFly.prototype.playCoinFlyAnim = function (count, stPos, edPos, r) {
        var _this = this;
        if (r === void 0) { r = 130; }
        // 确保当前节点池有足够的金币
        var poolSize = this.coinPool.size();
        var reCreateCoinCount = poolSize > count ? 0 : count - poolSize;
        this.initCoinPool(reCreateCoinCount);
        // 生成圆，并且对圆上的点进行排序
        var points = this.getCirclePoints(r, stPos, count);
        var coinNodeList = points.map(function (pos) {
            var coin = _this.coinPool.get();
            coin.setPosition(stPos);
            _this.node.addChild(coin);
            return {
                node: coin,
                stPos: stPos,
                mdPos: pos,
                edPos: edPos,
                dis: pos.sub(edPos).mag()
            };
        });
        coinNodeList = coinNodeList.sort(function (a, b) {
            if (a.dis - b.dis > 0)
                return 1;
            if (a.dis - b.dis < 0)
                return -1;
            return 0;
        });
        // 执行金币落袋的动画
        coinNodeList.forEach(function (item, idx) {
            item.node.runAction(cc.sequence(cc.moveTo(0.3, item.mdPos), cc.delayTime(idx * 0.01), cc.moveTo(0.5, item.edPos), cc.callFunc(function () {
                _this.coinPool.put(item.node);
            })));
        });
    };
    /**
     * 以某点为圆心，生成圆周上等分点的坐标
     *
     * @param {number} r 半径
     * @param {cc.Vec2} pos 圆心坐标
     * @param {number} count 等分点数量
     * @param {number} [randomScope=80] 等分点的随机波动范围
     * @returns {cc.Vec2[]} 返回等分点坐标
     */
    ShuShiCarbGoldFly.prototype.getCirclePoints = function (r, pos, count, randomScope) {
        if (randomScope === void 0) { randomScope = 60; }
        var points = [];
        var radians = (Math.PI / 180) * Math.round(360 / count);
        for (var i = 0; i < count; i++) {
            var x = pos.x + r * Math.sin(radians * i);
            var y = pos.y + r * Math.cos(radians * i);
            points.unshift(cc.v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
        }
        return points;
    };
    var ShuShiCarbGoldFly_1;
    ShuShiCarbGoldFly.instance = null;
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGoldFly.prototype, "coinPrefab", void 0);
    ShuShiCarbGoldFly = ShuShiCarbGoldFly_1 = __decorate([
        ccclass
    ], ShuShiCarbGoldFly);
    return ShuShiCarbGoldFly;
}(cc.Component));
exports.default = ShuShiCarbGoldFly;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdvbGRGbHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFnR0M7UUE1RkMsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFnQixJQUFJLENBQUM7O0lBMEYvQixDQUFDOzBCQWhHb0IsaUJBQWlCO0lBUXBDLGtDQUFNLEdBQU47UUFDRSxtQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxTQUFpQjtRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxRQUFpQixFQUFFLE1BQWUsRUFBRSxVQUFtQjtRQUM5RCxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxLQUFLLEdB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LEdBZ0cxRDtrQkFoR29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHb2xkRmx5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2h1U2hpQ2FyYkdvbGRGbHkgPSBudWxsO1xuIFxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBjb2luUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gIGNvaW5Qb29sOiBjYy5Ob2RlUG9vbCA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIFNodVNoaUNhcmJHb2xkRmx5Lmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLmNvaW5Qb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgdGhpcy5pbml0Q29pblBvb2woKTtcbiAgfVxuXG4gIGluaXRDb2luUG9vbChjb3VudDogbnVtYmVyID0gNSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgbGV0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvaW5QcmVmYWIpO1xuICAgICAgdGhpcy5jb2luUG9vbC5wdXQoY29pbik7XG4gICAgfVxuICB9XG5cbiAgcGxheUFuaW0oc3RhcnRQb3M6IGNjLk5vZGUsIGVuZFBvczogY2MuTm9kZSwgbm9kZUVmZmVjdDogY2MuTm9kZSkge1xuICAgIGxldCByYW5kb21Db3VudCA9IDU7XG4gICAgbGV0IHN0UG9zID0gc3RhcnRQb3MuZ2V0UG9zaXRpb24oKTtcbiAgICBsZXQgZWRQb3MgPSBlbmRQb3MuZ2V0UG9zaXRpb24oKTtcbiAgICB0aGlzLnBsYXlDb2luRmx5QW5pbShyYW5kb21Db3VudCwgc3RQb3MsIGVkUG9zKTtcbiAgICBub2RlRWZmZWN0LmFjdGl2ZSA9IHRydWU7XG4gICAgY2MudHdlZW4obm9kZUVmZmVjdClcbiAgICAudG8oMS4yLCB7eTplZFBvcy55fSlcbiAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIG5vZGVFZmZlY3QueSA9IDA7XG4gICAgICAgIG5vZGVFZmZlY3QuYWN0aXZlID0gZmFsc2U7XG4gICAgfSlcbiAgICAuc3RhcnQoKTtcbiAgfVxuXG4gIHBsYXlDb2luRmx5QW5pbShjb3VudDogbnVtYmVyLCBzdFBvczogY2MuVmVjMiwgZWRQb3M6IGNjLlZlYzIsIHI6IG51bWJlciA9IDEzMCkge1xuICAgIC8vIOehruS/neW9k+WJjeiKgueCueaxoOaciei2s+Wkn+eahOmHkeW4gVxuICAgIGNvbnN0IHBvb2xTaXplID0gdGhpcy5jb2luUG9vbC5zaXplKCk7XG4gICAgY29uc3QgcmVDcmVhdGVDb2luQ291bnQgPSBwb29sU2l6ZSA+IGNvdW50ID8gMCA6IGNvdW50IC0gcG9vbFNpemU7XG4gICAgdGhpcy5pbml0Q29pblBvb2wocmVDcmVhdGVDb2luQ291bnQpO1xuXG4gICAgLy8g55Sf5oiQ5ZyG77yM5bm25LiU5a+55ZyG5LiK55qE54K56L+b6KGM5o6S5bqPXG4gICAgbGV0IHBvaW50cyA9IHRoaXMuZ2V0Q2lyY2xlUG9pbnRzKHIsIHN0UG9zLCBjb3VudCk7XG4gICAgbGV0IGNvaW5Ob2RlTGlzdCA9IHBvaW50cy5tYXAocG9zID0+IHtcbiAgICAgIGxldCBjb2luID0gdGhpcy5jb2luUG9vbC5nZXQoKTtcbiAgICAgIGNvaW4uc2V0UG9zaXRpb24oc3RQb3MpO1xuICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNvaW4pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogY29pbixcbiAgICAgICAgc3RQb3M6IHN0UG9zLFxuICAgICAgICBtZFBvczogcG9zLFxuICAgICAgICBlZFBvczogZWRQb3MsXG4gICAgICAgIGRpczogKHBvcyBhcyBhbnkpLnN1YihlZFBvcykubWFnKClcbiAgICAgIH07XG4gICAgfSk7XG4gICAgY29pbk5vZGVMaXN0ID0gY29pbk5vZGVMaXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLmRpcyAtIGIuZGlzID4gMCkgcmV0dXJuIDE7XG4gICAgICBpZiAoYS5kaXMgLSBiLmRpcyA8IDApIHJldHVybiAtMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8g5omn6KGM6YeR5biB6JC96KKL55qE5Yqo55S7XG4gICAgY29pbk5vZGVMaXN0LmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaXRlbS5ub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgY2MubW92ZVRvKDAuMywgaXRlbS5tZFBvcyksXG4gICAgICAgICAgY2MuZGVsYXlUaW1lKGlkeCAqIDAuMDEpLFxuICAgICAgICAgIGNjLm1vdmVUbygwLjUsIGl0ZW0uZWRQb3MpLFxuICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29pblBvb2wucHV0KGl0ZW0ubm9kZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDku6Xmn5DngrnkuLrlnIblv4PvvIznlJ/miJDlnIblkajkuIrnrYnliIbngrnnmoTlnZDmoIdcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHIg5Y2K5b6EXG4gICAqIEBwYXJhbSB7Y2MuVmVjMn0gcG9zIOWchuW/g+WdkOagh1xuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQg562J5YiG54K55pWw6YePXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcmFuZG9tU2NvcGU9ODBdIOetieWIhueCueeahOmaj+acuuazouWKqOiMg+WbtFxuICAgKiBAcmV0dXJucyB7Y2MuVmVjMltdfSDov5Tlm57nrYnliIbngrnlnZDmoIdcbiAgICovXG4gIGdldENpcmNsZVBvaW50cyhyOiBudW1iZXIsIHBvczogY2MuVmVjMiwgY291bnQ6IG51bWJlciwgcmFuZG9tU2NvcGU6IG51bWJlciA9IDYwKTogY2MuVmVjMltdIHtcbiAgICBsZXQgcG9pbnRzID0gW107XG4gICAgbGV0IHJhZGlhbnMgPSAoTWF0aC5QSSAvIDE4MCkgKiBNYXRoLnJvdW5kKDM2MCAvIGNvdW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGxldCB4ID0gcG9zLnggKyByICogTWF0aC5zaW4ocmFkaWFucyAqIGkpO1xuICAgICAgbGV0IHkgPSBwb3MueSArIHIgKiBNYXRoLmNvcyhyYWRpYW5zICogaSk7XG4gICAgICBwb2ludHMudW5zaGlmdChjYy52Myh4ICsgTWF0aC5yYW5kb20oKSAqIHJhbmRvbVNjb3BlLCB5ICsgTWF0aC5yYW5kb20oKSAqIHJhbmRvbVNjb3BlLCAwKSk7XG4gICAgfVxuICAgIHJldHVybiBwb2ludHM7XG4gIH1cbn1cbiJdfQ==