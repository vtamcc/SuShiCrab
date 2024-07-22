"use strict";
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