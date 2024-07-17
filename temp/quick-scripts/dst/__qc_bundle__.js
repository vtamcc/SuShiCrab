
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
require('./assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemMoneyBag');
require('./assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ShopView');
require('./assets/SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.SettingView');
require('./assets/SuShiCarb/scripts/Game/Ui_Popup/ShuShiCrab.GameOver');
require('./assets/SuShiCarb/scripts/ShuShiCarb.Game');
require('./assets/SuShiCarb/scripts/ShuShiCarb.GameManager');
require('./assets/SuShiCarb/scripts/ShuShiCarb.Global');
require('./assets/SuShiCarb/scripts/ShuShiCarb.GoldFly');
require('./assets/SuShiCarb/scripts/ShuShiCarb.SoundManager');

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
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.SettingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f0fd3epKRG7byTyvDHzrTW', 'ShuShiCarb.SettingView');
// SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.SettingView.ts

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
var ShuShiCarb_Global_1 = require("../../ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sfMusic = [];
        _this.spMusic = null;
        _this.spSound = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.start = function () {
        this.updateStatus();
    };
    NewClass.prototype.updateStatus = function () {
        if (ShuShiCarb_Global_1.default.isSoundOn)
            this.spSound.spriteFrame = this.sfMusic[0];
        else
            this.spSound.spriteFrame = this.sfMusic[1];
        if (ShuShiCarb_Global_1.default.isMusicOn)
            this.spMusic.spriteFrame = this.sfMusic[0];
        else
            this.spMusic.spriteFrame = this.sfMusic[1];
    };
    NewClass.prototype.onClickSound = function () {
        if (ShuShiCarb_Global_1.default.soundManager)
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        ShuShiCarb_Global_1.default.isSoundOn = !ShuShiCarb_Global_1.default.isSoundOn;
        this.updateStatus();
    };
    NewClass.prototype.onClickMusic = function () {
        if (ShuShiCarb_Global_1.default.soundManager)
            ShuShiCarb_Global_1.default.soundManager.playSoundClick();
        ShuShiCarb_Global_1.default.isMusicOn = !ShuShiCarb_Global_1.default.isMusicOn;
        this.updateStatus();
        ShuShiCarb_Global_1.default.soundManager.updateMusicState();
    };
    NewClass.prototype.onClickClose = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "sfMusic", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "spMusic", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "spSound", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1NodVNoaUNhcmIuU2V0dGluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkRBQTZDO0FBRXZDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaURDO1FBOUNHLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRy9CLGFBQU8sR0FBYyxJQUFJLENBQUE7UUFFekIsYUFBTyxHQUFjLElBQUksQ0FBQTs7UUF3Q3pCLGlCQUFpQjtJQUNyQixDQUFDO0lBdkNHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLDJCQUFNLENBQUMsU0FBUztZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUUzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9DLElBQUksMkJBQU0sQ0FBQyxTQUFTO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTNDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLDJCQUFNLENBQUMsWUFBWTtZQUNuQiwyQkFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV6QywyQkFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLDJCQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLElBQUksMkJBQU0sQ0FBQyxZQUFZO1lBQ25CLDJCQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXpDLDJCQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsMkJBQU0sQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLDJCQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDTTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFSUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUQ1QjtJQUFELGVBQUM7Q0FqREQsQUFpREMsQ0FqRHFDLEVBQUUsQ0FBQyxTQUFTLEdBaURqRDtrQkFqRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZNdXNpYzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcE11c2ljOiBjYy5TcHJpdGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcFNvdW5kOiBjYy5TcHJpdGUgPSBudWxsXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoKVxuICAgIH1cblxuICAgIHVwZGF0ZVN0YXR1cygpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5pc1NvdW5kT24pXG4gICAgICAgICAgICB0aGlzLnNwU291bmQuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTXVzaWNbMF07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc3BTb3VuZC5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1sxXTtcblxuICAgICAgICBpZiAoR2xvYmFsLmlzTXVzaWNPbilcbiAgICAgICAgICAgIHRoaXMuc3BNdXNpYy5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1swXTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zcE11c2ljLnNwcml0ZUZyYW1lID0gdGhpcy5zZk11c2ljWzFdO1xuICAgIH1cblxuICAgIG9uQ2xpY2tTb3VuZCgpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5zb3VuZE1hbmFnZXIpXG4gICAgICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyLnBsYXlTb3VuZENsaWNrKCk7XG5cbiAgICAgICAgR2xvYmFsLmlzU291bmRPbiA9ICFHbG9iYWwuaXNTb3VuZE9uO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tNdXNpYygpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5zb3VuZE1hbmFnZXIpXG4gICAgICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyLnBsYXlTb3VuZENsaWNrKCk7XG4gICAgICAgIFxuICAgICAgICBHbG9iYWwuaXNNdXNpY09uID0gIUdsb2JhbC5pc011c2ljT247XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKClcbiAgICAgICAgR2xvYmFsLnNvdW5kTWFuYWdlci51cGRhdGVNdXNpY1N0YXRlKCk7XG4gICAgfVxuXG4gICAgb25DbGlja0Nsb3NlKCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgIFxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/ShuShiCarb.GoldFly.js';
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
        _this.nodeLbFly = null;
        _this.startPoint = null;
        _this.endPoint = null;
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
    ShuShiCarbGoldFly.prototype.playAnim = function () {
        var _this = this;
        var randomCount = 5;
        var stPos = this.startPoint.getPosition();
        var edPos = this.endPoint.getPosition();
        this.playCoinFlyAnim(randomCount, stPos, edPos);
        this.nodeLbFly.active = true;
        cc.tween(this.nodeLbFly)
            .to(0.8, { y: edPos.y })
            .call(function () {
            _this.nodeLbFly.y = 0;
            _this.nodeLbFly.active = false;
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
        property(cc.Node)
    ], ShuShiCarbGoldFly.prototype, "nodeLbFly", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGoldFly.prototype, "startPoint", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGoldFly.prototype, "endPoint", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdvbGRGbHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFxR0M7UUFsR0MsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDOztJQTBGL0IsQ0FBQzswQkFyR29CLGlCQUFpQjtJQWFwQyxrQ0FBTSxHQUFOO1FBQ0UsbUJBQWlCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsd0NBQVksR0FBWixVQUFhLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsU0FBaUI7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FB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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNTO0lBVFYsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FxR3JDO0lBQUQsd0JBQUM7Q0FyR0QsQUFxR0MsQ0FyRzhDLEVBQUUsQ0FBQyxTQUFTLEdBcUcxRDtrQkFyR29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHb2xkRmx5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2h1U2hpQ2FyYkdvbGRGbHkgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbm9kZUxiRmx5OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHN0YXJ0UG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZW5kUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBjb2luUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gIGNvaW5Qb29sOiBjYy5Ob2RlUG9vbCA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIFNodVNoaUNhcmJHb2xkRmx5Lmluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLmNvaW5Qb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgdGhpcy5pbml0Q29pblBvb2woKTtcbiAgfVxuXG4gIGluaXRDb2luUG9vbChjb3VudDogbnVtYmVyID0gNSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgbGV0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvaW5QcmVmYWIpO1xuICAgICAgdGhpcy5jb2luUG9vbC5wdXQoY29pbik7XG4gICAgfVxuICB9XG5cbiAgcGxheUFuaW0oKSB7XG4gICAgbGV0IHJhbmRvbUNvdW50ID0gNTtcbiAgICBsZXQgc3RQb3MgPSB0aGlzLnN0YXJ0UG9pbnQuZ2V0UG9zaXRpb24oKTtcbiAgICBsZXQgZWRQb3MgPSB0aGlzLmVuZFBvaW50LmdldFBvc2l0aW9uKCk7XG4gICAgdGhpcy5wbGF5Q29pbkZseUFuaW0ocmFuZG9tQ291bnQsIHN0UG9zLCBlZFBvcyk7XG4gICAgdGhpcy5ub2RlTGJGbHkuYWN0aXZlID0gdHJ1ZTtcbiAgICBjYy50d2Vlbih0aGlzLm5vZGVMYkZseSlcbiAgICAudG8oMC44LCB7eTplZFBvcy55fSlcbiAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIHRoaXMubm9kZUxiRmx5LnkgPSAwO1xuICAgICAgICB0aGlzLm5vZGVMYkZseS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9KVxuICAgIC5zdGFydCgpO1xuICB9XG5cbiAgcGxheUNvaW5GbHlBbmltKGNvdW50OiBudW1iZXIsIHN0UG9zOiBjYy5WZWMyLCBlZFBvczogY2MuVmVjMiwgcjogbnVtYmVyID0gMTMwKSB7XG4gICAgLy8g56Gu5L+d5b2T5YmN6IqC54K55rGg5pyJ6Laz5aSf55qE6YeR5biBXG4gICAgY29uc3QgcG9vbFNpemUgPSB0aGlzLmNvaW5Qb29sLnNpemUoKTtcbiAgICBjb25zdCByZUNyZWF0ZUNvaW5Db3VudCA9IHBvb2xTaXplID4gY291bnQgPyAwIDogY291bnQgLSBwb29sU2l6ZTtcbiAgICB0aGlzLmluaXRDb2luUG9vbChyZUNyZWF0ZUNvaW5Db3VudCk7XG5cbiAgICAvLyDnlJ/miJDlnIbvvIzlubbkuJTlr7nlnIbkuIrnmoTngrnov5vooYzmjpLluo9cbiAgICBsZXQgcG9pbnRzID0gdGhpcy5nZXRDaXJjbGVQb2ludHMociwgc3RQb3MsIGNvdW50KTtcbiAgICBsZXQgY29pbk5vZGVMaXN0ID0gcG9pbnRzLm1hcChwb3MgPT4ge1xuICAgICAgbGV0IGNvaW4gPSB0aGlzLmNvaW5Qb29sLmdldCgpO1xuICAgICAgY29pbi5zZXRQb3NpdGlvbihzdFBvcyk7XG4gICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY29pbik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlOiBjb2luLFxuICAgICAgICBzdFBvczogc3RQb3MsXG4gICAgICAgIG1kUG9zOiBwb3MsXG4gICAgICAgIGVkUG9zOiBlZFBvcyxcbiAgICAgICAgZGlzOiAocG9zIGFzIGFueSkuc3ViKGVkUG9zKS5tYWcoKVxuICAgICAgfTtcbiAgICB9KTtcbiAgICBjb2luTm9kZUxpc3QgPSBjb2luTm9kZUxpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEuZGlzIC0gYi5kaXMgPiAwKSByZXR1cm4gMTtcbiAgICAgIGlmIChhLmRpcyAtIGIuZGlzIDwgMCkgcmV0dXJuIC0xO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyDmiafooYzph5HluIHokL3ooovnmoTliqjnlLtcbiAgICBjb2luTm9kZUxpc3QuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpdGVtLm5vZGUucnVuQWN0aW9uKFxuICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICBjYy5tb3ZlVG8oMC4zLCBpdGVtLm1kUG9zKSxcbiAgICAgICAgICBjYy5kZWxheVRpbWUoaWR4ICogMC4wMSksXG4gICAgICAgICAgY2MubW92ZVRvKDAuNSwgaXRlbS5lZFBvcyksXG4gICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2luUG9vbC5wdXQoaXRlbS5ub2RlKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOS7peafkOeCueS4uuWchuW/g++8jOeUn+aIkOWchuWRqOS4iuetieWIhueCueeahOWdkOagh1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gciDljYrlvoRcbiAgICogQHBhcmFtIHtjYy5WZWMyfSBwb3Mg5ZyG5b+D5Z2Q5qCHXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCDnrYnliIbngrnmlbDph49cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtyYW5kb21TY29wZT04MF0g562J5YiG54K555qE6ZqP5py65rOi5Yqo6IyD5Zu0XG4gICAqIEByZXR1cm5zIHtjYy5WZWMyW119IOi/lOWbnuetieWIhueCueWdkOagh1xuICAgKi9cbiAgZ2V0Q2lyY2xlUG9pbnRzKHI6IG51bWJlciwgcG9zOiBjYy5WZWMyLCBjb3VudDogbnVtYmVyLCByYW5kb21TY29wZTogbnVtYmVyID0gNjApOiBjYy5WZWMyW10ge1xuICAgIGxldCBwb2ludHMgPSBbXTtcbiAgICBsZXQgcmFkaWFucyA9IChNYXRoLlBJIC8gMTgwKSAqIE1hdGgucm91bmQoMzYwIC8gY291bnQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgbGV0IHggPSBwb3MueCArIHIgKiBNYXRoLnNpbihyYWRpYW5zICogaSk7XG4gICAgICBsZXQgeSA9IHBvcy55ICsgciAqIE1hdGguY29zKHJhZGlhbnMgKiBpKTtcbiAgICAgIHBvaW50cy51bnNoaWZ0KGNjLnYzKHggKyBNYXRoLnJhbmRvbSgpICogcmFuZG9tU2NvcGUsIHkgKyBNYXRoLnJhbmRvbSgpICogcmFuZG9tU2NvcGUsIDApKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxufVxuIl19
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
        console.log("id ", id);
        if (other.tag == 1) {
            var nodeNew_1 = new cc.Node();
            nodeNew_1.parent = this.node.parent;
            nodeNew_1.scale = 0.4;
            if (id === 999) {
                nodeNew_1.scale = 1;
                nodeNew_1.addComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[6];
                nodeNew_1.setParent(ShuShiCarb_Hook_1.default.instance.hookHead);
                nodeNew_1.setPosition(cc.v2(0, -25));
            }
            else {
                nodeNew_1.addComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[id];
                nodeNew_1.setParent(ShuShiCarb_Hook_1.default.instance.hookHead);
                nodeNew_1.setPosition(cc.v2(0, -25));
            }
            ShuShiCarb_Game_1.default.instance.hookObjects.push({ node: nodeNew_1, id: id });
            ShuShiCarb_Hook_1.default.instance.setHookState(2);
            food.isCheck = 1;
            ShuShiCarb_Game_1.default.instance.checkCorrect();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmQuQ29sbGllck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQWdEO0FBQ2hELDZEQUF1RDtBQUN2RCxxREFBK0M7QUFDL0MscURBQStDO0FBRXpDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEOztJQW1EQSxDQUFDO0lBakRHLGtDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBYyxDQUFDLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QixJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksU0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzNCLFNBQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEMsU0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBRyxFQUFFLEtBQUssR0FBRyxFQUFFO2dCQUNYLFNBQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixTQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNwRixTQUFPLENBQUMsU0FBUyxDQUFDLHlCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRCxTQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN0QztpQkFBSztnQkFDRixTQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUNyRixTQUFPLENBQUMsU0FBUyxDQUFDLHlCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRCxTQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN0QztZQUlELHlCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQ2xFLHlCQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqQix5QkFBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyw2QkFBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLG1DQUFtQztnQkFDbkMseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLHlCQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQU8sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO2dCQUM5RyxTQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7SUFFTCxDQUFDO0lBSUQsd0JBQXdCO0lBRXhCLHdCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBaERnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBbUQzQjtJQUFELGNBQUM7Q0FuREQsQUFtREMsQ0FuRG9DLEVBQUUsQ0FBQyxTQUFTLEdBbURoRDtrQkFuRG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi9TaHVTaGlDYXJiLkdhbWVcIjtcbmltcG9ydCBTaHVTaGlDYXJiQ29udmV5b3IgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Db252ZXlvclwiO1xuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL1NodVNoaUNhcmIuRm9vZFwiO1xuaW1wb3J0IFNodVNoaUNhcmJIb29rIGZyb20gXCIuL1NodVNoaUNhcmIuSG9va1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBsZXQgZm9vZCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkZvb2QpO1xuICAgICAgICBsZXQgaWQgPSBmb29kLmlkO1xuICAgICAgICBjb25zb2xlLmxvZyhcImlkIFwiLCBpZCk7XG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gMSkge1xuICAgICAgICAgICAgbGV0IG5vZGVOZXcgPSBuZXcgY2MuTm9kZSgpXG4gICAgICAgICAgICBub2RlTmV3LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICBub2RlTmV3LnNjYWxlID0gMC40O1xuICAgICAgICAgICAgaWYoaWQgPT09IDk5OSkge1xuICAgICAgICAgICAgICAgIG5vZGVOZXcuc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgIG5vZGVOZXcuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5saXN0U3BmRm9vZFs2XVxuICAgICAgICAgICAgICAgIG5vZGVOZXcuc2V0UGFyZW50KFNodVNoaUNhcmJIb29rLmluc3RhbmNlLmhvb2tIZWFkKTtcbiAgICAgICAgICAgICAgICBub2RlTmV3LnNldFBvc2l0aW9uKGNjLnYyKDAsIC0yNSkpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVOZXcuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5saXN0U3BmRm9vZFtpZF1cbiAgICAgICAgICAgICAgICBub2RlTmV3LnNldFBhcmVudChTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5ob29rSGVhZCk7XG4gICAgICAgICAgICAgICAgbm9kZU5ldy5zZXRQb3NpdGlvbihjYy52MigwLCAtMjUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgIFxuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuaG9va09iamVjdHMucHVzaCh7bm9kZTogbm9kZU5ldywgaWQ6IGlkfSk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiSG9vay5pbnN0YW5jZS5zZXRIb29rU3RhdGUoMik7XG4gICAgICAgICAgICBmb29kLmlzQ2hlY2sgPSAxO1xuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuY2hlY2tDb3JyZWN0KCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJDb252ZXlvcikucmVzZXRTYXRlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBYw7NhIG3Ds24gxINuIGto4buPaSBt4bqjbmcgaG9va09iamVjdHNcbiAgICAgICAgICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5ob29rT2JqZWN0cyA9IFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmhvb2tPYmplY3RzLmZpbHRlcihvYmogPT4gb2JqLm5vZGUgIT09IG5vZGVOZXcpO1xuICAgICAgICAgICAgICAgIG5vZGVOZXcuZGVzdHJveSgpXG4gICAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBsZXQgbm9kZSA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKVxuICAgICAgICBub2RlLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
var ShuShiCarb_GoldFly_1 = require("./ShuShiCarb.GoldFly");
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
        _this.nGoldFly = null;
        _this.nCheckFalse = null;
        // LIFE-CYCLE CALLBACKS:
        _this.data = [0, 1, 2, 3, 4, 5];
        _this.playOrders = [];
        _this.hookObjects = [];
        _this.indexData = 0;
        _this.countCorrect = 0;
        // numberCountdown = 7;
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
        var checkBagMoney = JSON.parse(cc.sys.localStorage.getItem("checkBagMoney"));
        ShuShiCarb_Global_1.default.moneyBag = JSON.parse(cc.sys.localStorage.getItem("moneyBag")) || ShuShiCarb_Global_1.default.moneyBag;
        if (checkBagMoney !== null) {
            ShuShiCarb_Global_1.default.checkBagMoney = checkBagMoney;
            console.log(ShuShiCarb_Global_1.default.checkBagMoney);
        }
        // this.renderFoodOder();
        this.randomOrderFood();
        console.log(this.playOrders);
        this.conveyor(this.conveyor_1);
        this.conveyor(this.conveyor_2);
        this.conveyor(this.conveyor_3);
        this.renderOrderFood();
        this.startCountDown();
        console.log(ShuShiCarb_Global_1.default.checkBagMoney);
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
            this.gameOver(this.prfGameOver);
        }
    };
    ShuShiCarbGame.prototype.gameOver = function (prfGameOver) {
        var gamOver = cc.instantiate(prfGameOver).getComponent(ShuShiCrab_GameOver_1.default);
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
            return;
        }
        var hookFoodId = this.hookObjects[0].id;
        var foundMatch = false;
        if (hookFoodId === 999) {
            this.gold += ShuShiCarb_Global_1.default.moneyBag;
            this.updateGold(ShuShiCarb_Global_1.default.moneyBag);
            foundMatch = true;
        }
        else {
            var _loop_1 = function (i) {
                if (this_1.playOrders[i] === hookFoodId) {
                    if (!this_1.player.listFood[i].getChildByName("tick").active) {
                        this_1.player.listFood[i].getChildByName("tick").active = true;
                        this_1.nGoldFly.active = true;
                        this_1.scheduleOnce(function () {
                            _this.lsFoodTable[i].getComponent(cc.Sprite).spriteFrame = _this.listSpfFood[hookFoodId];
                            _this.lsFoodTable[i].active = true;
                            _this.nGoldFly.active = false;
                        }, 0.2);
                        ShuShiCarb_GoldFly_1.default.instance.playAnim();
                        this_1.gold += 5;
                        this_1.updateGold(5);
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
        }
        this.lbGold.string = this.gold + ' ';
        if (!foundMatch) {
        }
        if (this.countCorrect >= 3) {
            this.resetGame(true);
        }
    };
    ShuShiCarbGame.prototype.updateGold = function (gold) {
        ShuShiCarb_Global_1.default.totalGold += gold;
        console.log("Tong tien ", ShuShiCarb_Global_1.default.totalGold);
        cc.sys.localStorage.setItem('totalGold', JSON.stringify(ShuShiCarb_Global_1.default.totalGold));
    };
    ShuShiCarbGame.prototype.conveyor = function (node) {
        for (var i = 0; i < node.childrenCount; i++) {
            var item = node.children[i].getComponent(ShuShiCarb_Food_1.default);
            if (ShuShiCarb_Global_1.default.checkBagMoney === true && i === 5) {
                item.setData(999);
            }
            else {
                var randomIndex = Math.floor(Math.random() * this.data.length);
                item.setData(this.data[randomIndex]);
            }
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
        if (this.indexData >= 8) {
            this.indexData = 0;
        }
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
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('shop').getComponent(cc.Button).interactable = true;
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('setting').getComponent(cc.Button).interactable = true;
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
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nGoldFly", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbGame.prototype, "nCheckFalse", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMERBQW9EO0FBQ3BELDhEQUF3RDtBQUN4RCwyRUFBcUU7QUFFckUsbUVBQTZEO0FBQzdELHlEQUF5QztBQUN6QywyREFBcUQ7QUFHL0MsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEwUEM7UUF0UEcsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUVwQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFHM0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFhLElBQUksQ0FBQTtRQUU1QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLHdCQUF3QjtRQUN4QixVQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFV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Q0FBQzt1REFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDTTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDVTtJQXRDWCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBMFBsQztJQUFELHFCQUFDO0NBMVBELEFBMFBDLENBMVAyQyxFQUFFLENBQUMsU0FBUyxHQTBQdkQ7a0JBMVBvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTaHVTaGlDYXJiQ29udmV5b3IgZnJvbSBcIi4vR2FtZS9TaHVTaGlDYXJiLkNvbnZleW9yXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vR2FtZS9TaHVTaGlDYXJiLkZvb2RcIjtcbmltcG9ydCBTaHVTaGlDYXJiUGxheWVyIGZyb20gXCIuL0dhbWUvU2h1U2hpQ2FyYi5QbGF5ZXJcIjtcbmltcG9ydCBTaHVTaGlDYXJiR2FtZU92ZXIgZnJvbSBcIi4vR2FtZS9VaV9Qb3B1cC9TaHVTaGlDcmFiLkdhbWVPdmVyXCI7XG5cbmltcG9ydCBTaHVTaGlDYXJiR2FtZU1hbmFnZXIgZnJvbSBcIi4vU2h1U2hpQ2FyYi5HYW1lTWFuYWdlclwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuaW1wb3J0IFNodVNoaUNhcmJHb2xkRmx5IGZyb20gXCIuL1NodVNoaUNhcmIuR29sZEZseVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2h1U2hpQ2FyYkdhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmT3JkZXI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkhvbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0U3BmRm9vZDogY2MuU3ByaXRlRnJhbWUgW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuUGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb252ZXlvcl8xOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnZleW9yXzI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udmV5b3JfMzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkZvb2Q6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsc0Zvb2RUYWJsZTogY2MuTm9kZVtdPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgIFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZU92ZXI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIHByZ1RpbWU6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJDb3VudERvd246IGNjLkxhYmVsID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Hb2xkRmx5OiBjYy5Ob2RlID0gbnVsbDsgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkNoZWNrRmFsc2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGRhdGEgPSBbMCwxLDIsMyw0LDVdO1xuICAgIHBsYXlPcmRlcnMgPSBbXTtcbiAgICBob29rT2JqZWN0czoge25vZGU6Y2MuTm9kZSwgaWQ6IG51bWJlcn0gW10gPSBbXTtcbiAgICBpbmRleERhdGEgPSAwO1xuICAgIGNvdW50Q29ycmVjdCA9IDA7XG4gICAgLy8gbnVtYmVyQ291bnRkb3duID0gNztcbiAgICBjb3VudGRvd25JbnRlcnZhbDogYW55ID0gbnVsbDtcbiAgICBpc01vdmUgID0gZmFsc2U7XG4gICAgcGxheWVyID0gbnVsbDtcbiAgICBnb2xkID0gMDtcbiAgICBkdXJhdGlvbiA9IDYwO1xuICAgIG51bWJlckNvdW50RG93biA9IDA7XG4gICAgaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNoZWNrQmFnTW9uZXkgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoZWNrQmFnTW9uZXlcIikpO1xuICAgICAgICBHbG9iYWwubW9uZXlCYWcgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vbmV5QmFnXCIpKSB8fCBHbG9iYWwubW9uZXlCYWc7XG4gICAgICAgIGlmIChjaGVja0JhZ01vbmV5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBHbG9iYWwuY2hlY2tCYWdNb25leSA9IGNoZWNrQmFnTW9uZXk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWwuY2hlY2tCYWdNb25leSlcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnJlbmRlckZvb2RPZGVyKCk7XG4gICAgICAgIHRoaXMucmFuZG9tT3JkZXJGb29kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheU9yZGVycyk7XG4gICAgICAgIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8xKTtcbiAgICAgICAgdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpO1xuICAgICAgICB0aGlzLmNvbnZleW9yKHRoaXMuY29udmV5b3JfMyk7XG4gICAgICAgIHRoaXMucmVuZGVyT3JkZXJGb29kKCk7XG4gICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgY29uc29sZS5sb2coR2xvYmFsLmNoZWNrQmFnTW9uZXkpO1xuICAgIH1cblxuICAgXG4gICAgLy8gcmFuZG9tSWRGb29kKGFycixjb3VudCkge1xuICAgIC8vICAgICBsZXQgaWRGb29kID0gW107XG4gICAgLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAvLyAgICAgICAgIGlkRm9vZC5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICAvLyAgICAgICAgIGFyci5zcGxpY2UocmFuZG9tSW5kZXgsMSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIGFycjtcbiAgICAvLyB9XG5cblxuICAgIHJhbmRvbU9yZGVyRm9vZCgpIHtcbiAgICAgICAgdGhpcy5wbGF5T3JkZXJzID0gW107IFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBmb29kSWQgPSB0aGlzLmRhdGFbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5wbGF5T3JkZXJzLnB1c2goZm9vZElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0Q291bnREb3duKCkge1xuICAgICAgICB0aGlzLmlzQ291bnREb3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlQ291bnREb3duLDEpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYodGhpcy5udW1iZXJDb3VudERvd24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlckNvdW50RG93bi0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmdyZXNzVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5sYkNvdW50RG93bi5zdHJpbmcgPSBcIjAwOiBcIiArIHRoaXMubnVtYmVyQ291bnREb3duICsgXCIgXCIgO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxiQ291bnREb3duLnN0cmluZyA9IFwiMDA6MDBcIlxuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlcih0aGlzLnByZkdhbWVPdmVyKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKHByZkdhbWVPdmVyOiBjYy5QcmVmYWIpIHtcbiAgICAgICAgbGV0IGdhbU92ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmZHYW1lT3ZlcikuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJHYW1lT3ZlcilcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbU92ZXIubm9kZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJncmVzc1RpbWUoKSB7XG4gICAgICAgIGlmKHRoaXMucHJnVGltZSkge1xuICAgICAgICAgICAgdGhpcy5wcmdUaW1lLnByb2dyZXNzIC09IDEvIHRoaXMuZHVyYXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJPcmRlckZvb2QoKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBsYXllcikge1xuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIubm9kZS5kZXN0cm95KCk7IC8vIERlc3Ryb3kgcHJldmlvdXMgcGxheWVyIG5vZGVcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmT3JkZXIpLmdldENvbXBvbmVudChTaHVTaGlDYXJiUGxheWVyKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyLmxpc3RGb29kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZm9vZCA9IHRoaXMucGxheWVyLmxpc3RGb29kW2ldXG4gICAgICAgICAgICBmb29kLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmRm9vZFt0aGlzLnBsYXlPcmRlcnNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXhEYXRhKys7XG4gICAgICAgIHRoaXMucGxheWVyLnNldERhdGEodGhpcy5pbmRleERhdGEpO1xuICAgICAgICB0aGlzLm5QbGF5ZXIuYWRkQ2hpbGQodGhpcy5wbGF5ZXIubm9kZSk7XG4gICAgfVxuXG4gICAgY2hlY2tDb3JyZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5ob29rT2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaG9va0Zvb2RJZCA9IHRoaXMuaG9va09iamVjdHNbMF0uaWQ7XG4gICAgICAgIGxldCBmb3VuZE1hdGNoID0gZmFsc2U7XG4gICAgICAgIGlmIChob29rRm9vZElkID09PSA5OTkpIHtcbiAgICAgICAgICAgIHRoaXMuZ29sZCArPSBHbG9iYWwubW9uZXlCYWc7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdvbGQoR2xvYmFsLm1vbmV5QmFnKTtcbiAgICAgICAgICAgIGZvdW5kTWF0Y2ggPSB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheU9yZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXlPcmRlcnNbaV0gPT09IGhvb2tGb29kSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saXN0Rm9vZFtpXS5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubkdvbGRGbHkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxzRm9vZFRhYmxlW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmRm9vZFtob29rRm9vZElkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxzRm9vZFRhYmxlW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uR29sZEZseS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBTaHVTaGlDYXJiR29sZEZseS5pbnN0YW5jZS5wbGF5QW5pbSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvbGQgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlR29sZCg1KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYkdvbGQuc3RyaW5nID0gdGhpcy5nb2xkICsgJyAnO1xuICAgICAgICBpZiAoIWZvdW5kTWF0Y2gpIHtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5jb3VudENvcnJlY3QgPj0zKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0R2FtZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICB1cGRhdGVHb2xkKGdvbGQ6IG51bWJlcikge1xuICAgICAgICBHbG9iYWwudG90YWxHb2xkICs9IGdvbGQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9uZyB0aWVuIFwiLCBHbG9iYWwudG90YWxHb2xkKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbEdvbGQnLEpTT04uc3RyaW5naWZ5KEdsb2JhbC50b3RhbEdvbGQpKTtcbiAgICB9XG4gICAgY29udmV5b3Iobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IG5vZGUuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJGb29kKTtcbiAgICAgICAgICAgIGlmKEdsb2JhbC5jaGVja0JhZ01vbmV5ID09PSB0cnVlICYmIGkgPT09IDUpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnNldERhdGEoOTk5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXREYXRhKHRoaXMuZGF0YVtyYW5kb21JbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZU5vZGUobm9kZTogY2MuTm9kZSwgaWQpIHtcbiAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmhvb2tPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLmhvb2tPYmplY3RzW2ldLm5vZGUgPT0gbm9kZSAmJiB0aGlzLmhvb2tPYmplY3RzW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rT2JqZWN0cy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJlc2V0Rm9vZFRhYmxlKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sc0Zvb2RUYWJsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmxzRm9vZFRhYmxlW2ldO1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgcmVzZXRHYW1lKGlzSGFwcHk6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYodGhpcy5pbmRleERhdGEgPj0gOCkge1xuICAgICAgICAgICAgdGhpcy5pbmRleERhdGEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzZXR0aW5nIGdhbWUuLi5cIik7XG4gICAgICAgIHRoaXMuY291bnRDb3JyZWN0ID0gMDtcbiAgICAgICAgbGV0IHJlc2V0Q2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbU9yZGVyRm9vZCgpOyBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyT3JkZXJGb29kKCk7IFxuICAgICAgICAgICAgLy8gdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzEpO1xuICAgICAgICAgICAgLy8gdGhpcy5jb252ZXlvcih0aGlzLmNvbnZleW9yXzIpOyBcbiAgICAgICAgICAgIC8vIHRoaXMuY29udmV5b3IodGhpcy5jb252ZXlvcl8zKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGb29kVGFibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzSGFwcHkpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmhhcHB5RWZmZWN0UGxheWVyTW92ZU91dChyZXNldENhbGxiYWNrKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2FkRWZmZWN0UGxheWVyTW92ZU91dChyZXNldENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uY2xpY2tCYWNrKCkgeyBcbiAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLnVwZGF0ZVRvdGFsR29sZCgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3BsYXlidG4nKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3Nob3AnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UubkhvbWUuZ2V0Q2hpbGRCeU5hbWUoJ3NldHRpbmcnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIFxuICAgIHN0YXJ0ICgpIHtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/ShuShiCarb.SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e37ca0PmppMTZq2Fx30je4G', 'ShuShiCarb.SoundManager');
// SuShiCarb/scripts/ShuShiCarb.SoundManager.ts

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
var ShuShiCarb_Global_1 = require("./ShuShiCarb.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundManager = /** @class */ (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.music_background = null;
        _this.audio_sfx = null;
        _this.audio_score = null;
        _this.sound_click = null;
        _this.sound_bomb = null;
        _this.add_score = null;
        _this.add_star = null;
        _this.game_over = null;
        _this.pass_level = null;
        _this.ball_break = null;
        return _this;
        // update (dt) {}
    }
    SoundManager.prototype.onLoad = function () {
        ShuShiCarb_Global_1.default.soundManager = this;
    };
    SoundManager.prototype.playSoundClick = function () {
        this.playSoundSFX(this.sound_click);
    };
    SoundManager.prototype.playSoundLose = function () {
        this.playSoundSFX(this.ball_break);
    };
    SoundManager.prototype.playSoundBomb = function () {
        this.playSoundSFX(this.sound_bomb);
    };
    SoundManager.prototype.playSoundAddScore = function () {
        this.playSoundScore(this.add_score);
    };
    SoundManager.prototype.playSoundAddStar = function () {
        this.playSoundScore(this.add_star);
    };
    SoundManager.prototype.playSoundPassLevel = function () {
        this.playSoundSFX(this.pass_level);
    };
    SoundManager.prototype.playSoundGameOver = function () {
        this.playSoundSFX(this.game_over);
    };
    SoundManager.prototype.playSoundSFX = function (soundSFX) {
        if (ShuShiCarb_Global_1.default.isSoundOn) {
            this.audio_sfx.clip = soundSFX;
            this.audio_sfx.play();
        }
    };
    SoundManager.prototype.playSoundScore = function (soundSFX) {
        if (ShuShiCarb_Global_1.default.isSoundOn) {
            this.audio_score.clip = soundSFX;
            this.audio_score.play();
        }
    };
    // onClickMusic() {
    //     if (Global.isMusicOn) {
    //         this.music_background.play()
    //     } else {
    //         this.music_background.stop()
    //         this.audio_sfx.stop()
    //     }
    // }
    SoundManager.prototype.updateMusicState = function () {
        if (ShuShiCarb_Global_1.default.isMusicOn)
            this.music_background.play();
        else
            this.music_background.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "music_background", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "audio_sfx", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "audio_score", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "sound_click", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "sound_bomb", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "add_score", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "add_star", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "game_over", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "pass_level", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundManager.prototype, "ball_break", void 0);
    SoundManager = __decorate([
        ccclass
    ], SoundManager);
    return SoundManager;
}(cc.Component));
exports.default = SoundManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLlNvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5REFBeUM7QUFFbkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF3RkM7UUFyRkcsc0JBQWdCLEdBQW1CLElBQUksQ0FBQTtRQUV2QyxlQUFTLEdBQW1CLElBQUksQ0FBQTtRQUVoQyxpQkFBVyxHQUFtQixJQUFJLENBQUE7UUFHbEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFBO1FBRWhDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQTtRQUU3QixlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBOztRQWlFL0IsaUJBQWlCO0lBQ3JCLENBQUM7SUEvREcsNkJBQU0sR0FBTjtRQUNJLDJCQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxRQUFRO1FBQ2pCLElBQUksMkJBQU0sQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFBO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDeEI7SUFDTCxDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLFFBQVE7UUFDbkIsSUFBSSwyQkFBTSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUE7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUMxQjtJQUNMLENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsdUNBQXVDO0lBQ3ZDLGdDQUFnQztJQUNoQyxRQUFRO0lBQ1IsSUFBSTtJQUVKLHVDQUFnQixHQUFoQjtRQUNJLElBQUksMkJBQU0sQ0FBQyxTQUFTO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFFN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFsRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzswREFDYztJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNPO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cURBQ1M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3FEQUNEO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvREFDRjtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7bURBQ0g7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2tEQUNKO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzttREFDSDtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7b0RBQ0Y7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO29EQUNGO0lBdEJkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F3RmhDO0lBQUQsbUJBQUM7Q0F4RkQsQUF3RkMsQ0F4RnlDLEVBQUUsQ0FBQyxTQUFTLEdBd0ZyRDtrQkF4Rm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXG4gICAgbXVzaWNfYmFja2dyb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGF1ZGlvX3NmeDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGF1ZGlvX3Njb3JlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kX2NsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRfYm9tYjogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGFkZF9zY29yZTogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGFkZF9zdGFyOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgZ2FtZV9vdmVyOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgcGFzc19sZXZlbDogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGJhbGxfYnJlYWs6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyID0gdGhpcztcbiAgICB9XG5cbiAgICBwbGF5U291bmRDbGljaygpIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmRTRlgodGhpcy5zb3VuZF9jbGljaylcbiAgICB9XG5cbiAgICBwbGF5U291bmRMb3NlKCkge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZFNGWCh0aGlzLmJhbGxfYnJlYWspXG4gICAgfVxuXG4gICAgcGxheVNvdW5kQm9tYigpIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmRTRlgodGhpcy5zb3VuZF9ib21iKVxuICAgIH1cblxuICAgIHBsYXlTb3VuZEFkZFNjb3JlKCkge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZFNjb3JlKHRoaXMuYWRkX3Njb3JlKVxuICAgIH1cblxuICAgIHBsYXlTb3VuZEFkZFN0YXIoKSB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kU2NvcmUodGhpcy5hZGRfc3RhcilcbiAgICB9XG5cbiAgICBwbGF5U291bmRQYXNzTGV2ZWwoKSB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kU0ZYKHRoaXMucGFzc19sZXZlbClcbiAgICB9XG5cbiAgICBwbGF5U291bmRHYW1lT3ZlcigpIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmRTRlgodGhpcy5nYW1lX292ZXIpXG4gICAgfVxuXG4gICAgcGxheVNvdW5kU0ZYKHNvdW5kU0ZYKSB7XG4gICAgICAgIGlmIChHbG9iYWwuaXNTb3VuZE9uKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvX3NmeC5jbGlwID0gc291bmRTRlhcbiAgICAgICAgICAgIHRoaXMuYXVkaW9fc2Z4LnBsYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheVNvdW5kU2NvcmUoc291bmRTRlgpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5pc1NvdW5kT24pIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9fc2NvcmUuY2xpcCA9IHNvdW5kU0ZYXG4gICAgICAgICAgICB0aGlzLmF1ZGlvX3Njb3JlLnBsYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gb25DbGlja011c2ljKCkge1xuICAgIC8vICAgICBpZiAoR2xvYmFsLmlzTXVzaWNPbikge1xuICAgIC8vICAgICAgICAgdGhpcy5tdXNpY19iYWNrZ3JvdW5kLnBsYXkoKVxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5tdXNpY19iYWNrZ3JvdW5kLnN0b3AoKVxuICAgIC8vICAgICAgICAgdGhpcy5hdWRpb19zZnguc3RvcCgpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICB1cGRhdGVNdXNpY1N0YXRlKCkge1xuICAgICAgICBpZiAoR2xvYmFsLmlzTXVzaWNPbilcbiAgICAgICAgICAgIHRoaXMubXVzaWNfYmFja2dyb3VuZC5wbGF5KCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMubXVzaWNfYmFja2dyb3VuZC5zdG9wKCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
        _this.prfSetting = null;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbGameManager_1 = ShuShiCarbGameManager;
    // LIFE-CYCLE CALLBACKS:
    ShuShiCarbGameManager.prototype.onLoad = function () {
        ShuShiCarbGameManager_1.instance = this;
        ShuShiCarb_Global_1.default.totalGold = JSON.parse(cc.sys.localStorage.getItem("totalGold")) || 2000;
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
        this.nHome.getChildByName('shop').getComponent(cc.Button).interactable = false;
        this.nHome.getChildByName('setting').getComponent(cc.Button).interactable = false;
    };
    ShuShiCarbGameManager.prototype.onClickShopView = function () {
        var shopView = cc.instantiate(this.prfShopView).getComponent(ShuShiCarb_ShopView_1.default);
        this.node.addChild(shopView.node);
    };
    ShuShiCarbGameManager.prototype.updateTotalGold = function () {
        this.lbTotalGold.string = ShuShiCarb_Global_1.default.totalGold + " ";
        cc.sys.localStorage.setItem('totalGold', JSON.stringify(ShuShiCarb_Global_1.default.totalGold));
    };
    ShuShiCarbGameManager.prototype.onClickSettingView = function () {
        var setting = cc.instantiate(this.prfSetting);
        this.node.addChild(setting);
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
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbGameManager.prototype, "prfSetting", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLGdGQUEwRTtBQUMxRSxxREFBK0M7QUFDL0MseURBQXlDO0FBRW5DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBbURDO1FBaERFLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFjLElBQUksQ0FBQzs7UUFzQzVCLGlCQUFpQjtJQUNyQixDQUFDOzhCQW5Eb0IscUJBQXFCO0lBYXRDLHdCQUF3QjtJQUV6QixzQ0FBTSxHQUFOO1FBQ0csdUJBQXFCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QywyQkFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUVoRixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFLLEdBQUw7SUFFQyxDQUFDO0lBQ0YsMkNBQVcsR0FBWDtRQUNHLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLHlCQUFjLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBRXJGLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0csSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLDZCQUFrQixDQUFDLENBQUE7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCwrQ0FBZSxHQUFmO1FBQ0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsMkJBQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQywyQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELGtEQUFrQixHQUFsQjtRQUNHLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7O0lBaERhLDhCQUFRLEdBQTBCLElBQUksQ0FBQztJQUVyRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4REFDVTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkRBQ1M7SUFaWCxxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQW1EekM7SUFBRCw0QkFBQztDQW5ERCxBQW1EQyxDQW5Ea0QsRUFBRSxDQUFDLFNBQVMsR0FtRDlEO2tCQW5Eb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuaW1wb3J0IFNodVNoaUNhcmJTaG9wVmlldyBmcm9tIFwiLi9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5TaG9wVmlld1wiO1xuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuL1NodVNoaUNhcmIuR2FtZVwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7ICAgXG4gICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTaHVTaGlDYXJiR2FtZU1hbmFnZXIgPSBudWxsO1xuICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICBuSG9tZTogY2MuTm9kZSA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgcHJmR2FtZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgIHByZlNob3BWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgQHByb3BlcnR5KGNjLkxhYmVsKSBcbiAgIGxiVG90YWxHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgcHJmU2V0dGluZzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgb25Mb2FkICgpIHtcbiAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICBHbG9iYWwudG90YWxHb2xkID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b3RhbEdvbGRcIikpIHx8IDIwMDA7XG4gICAgIFxuICAgICAgdGhpcy51cGRhdGVUb3RhbEdvbGQoKTtcbiAgIH1cblxuICAgc3RhcnQgKCkge1xuXG4gICAgfVxuICAgb25DbGlja1BsYXkoKSB7XG4gICAgICAvLyAgdGhpcy5uSG9tZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIC8vICB0aGlzLm5HYW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICBsZXQgZ2FtZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZSkuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJHYW1lKVxuICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWUubm9kZSk7XG4gICAgICAvL3RoaXMubkhvbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLm5Ib21lLmdldENoaWxkQnlOYW1lKCdwbGF5YnRuJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLm5Ib21lLmdldENoaWxkQnlOYW1lKCdzaG9wJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLm5Ib21lLmdldENoaWxkQnlOYW1lKCdzZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICBcbiAgIH1cblxuICAgb25DbGlja1Nob3BWaWV3KCkge1xuICAgICAgbGV0IHNob3BWaWV3ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZTaG9wVmlldykuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJTaG9wVmlldylcbiAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChzaG9wVmlldy5ub2RlKTtcbiAgIH1cbiAgIHVwZGF0ZVRvdGFsR29sZCgpIHtcbiAgICAgIHRoaXMubGJUb3RhbEdvbGQuc3RyaW5nID0gR2xvYmFsLnRvdGFsR29sZCArIFwiIFwiO1xuICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbEdvbGQnLEpTT04uc3RyaW5naWZ5KEdsb2JhbC50b3RhbEdvbGQpKTtcbiAgIH1cblxuICAgb25DbGlja1NldHRpbmdWaWV3KCkge1xuICAgICAgbGV0IHNldHRpbmcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZlNldHRpbmcpXG4gICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2V0dGluZyk7XG4gICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
        // @property(cc.Node)
        // nBagMoney: cc.Node = null;
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
        if (idFood === 999) {
            this.nFood.getComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[6];
        }
        else {
            this.nFood.getComponent(cc.Sprite).spriteFrame = ShuShiCarb_Game_1.default.instance.listSpfFood[idFood];
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuRm9vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixzREFBZ0Q7QUFNMUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFpQ0M7UUE5QkcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixxQkFBcUI7UUFDckIsNkJBQTZCO1FBQzdCLFFBQUUsR0FBRyxDQUFDLENBQUE7UUFDTix3QkFBd0I7UUFDeEIsYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUF5QmhCLENBQUM7SUF2QkcsK0JBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw4QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxNQUFNO1FBQ1YsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDakIsSUFBRyxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyx5QkFBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDMUY7YUFBSztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcseUJBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQy9GO0lBRUwsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1QsNkJBQTZCO1FBQzdCLHdHQUF3RztRQUN4RyxPQUFPO0lBQ1AsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNJO0lBSEwsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWlDbEM7SUFBRCxxQkFBQztDQWpDRCxBQWlDQyxDQWpDMkMsRUFBRSxDQUFDLFNBQVMsR0FpQ3ZEO2tCQWpDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2FtZVwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vU2h1U2hpQ2FyYi5HbG9iYWxcIjtcbmltcG9ydCBTaHVTaGlDYXJiSG9vayBmcm9tIFwiLi9TaHVTaGlDYXJiLkhvb2tcIjtcblxuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1U2hpQ2FyYkZvb2QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkZvb2Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIG5CYWdNb25leTogY2MuTm9kZSA9IG51bGw7XG4gICAgaWQgPSAwIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGlzQ2hlY2sgPSAwO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBzZXREYXRhKGlkRm9vZCkge1xuICAgICAgICB0aGlzLmlkID0gaWRGb29kO1xuICAgICAgICBpZihpZEZvb2QgPT09IDk5OSkge1xuICAgICAgICAgICAgdGhpcy5uRm9vZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFNodVNoaUNhcmJHYW1lLmluc3RhbmNlLmxpc3RTcGZGb29kWzZdXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMubkZvb2QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBTaHVTaGlDYXJiR2FtZS5pbnN0YW5jZS5saXN0U3BmRm9vZFtpZEZvb2RdXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAvLyAgICBpZih0aGlzLmlzQ2hlY2sgPT0gMSkge1xuICAgIC8vICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKFNodVNoaUNhcmJIb29rLmluc3RhbmNlLmhvb2tIZWFkLngsU2h1U2hpQ2FyYkhvb2suaW5zdGFuY2UuaG9va0hlYWQueSk7XG4gICAgLy8gICAgfVxuICAgIH1cbn1cbiJdfQ==
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
    Global.soundManager = null;
    Global.totalGold = 0;
    Global.dataHook = [{ price: 150, speed: 1.5, widthHook: 3, isBuy: false },
        { price: 300, speed: 2.5, widthHook: 5, isBuy: false },
        { price: 450, speed: 3.5, widthHook: 7, isBuy: false },
        { price: 600, speed: 4.5, widthHook: 9, isBuy: false },
        { price: 750, speed: 5.5, widthHook: 11, isBuy: false }];
    Global.dataBagMoney = [{ price: 120, gold: 3, isBuy: false },
        { price: 250, gold: 5, isBuy: false },
        { price: 320, gold: 7, isBuy: false },
        { price: 450, gold: 9, isBuy: false },
        { price: 750, gold: 11, isBuy: false }
    ];
    Global.checkBagMoney = false;
    Global.speedHook = 20;
    Global.moneyBag = 20;
    Global.lengthHook = 35;
    Global.isMusicOn = true;
    Global.isSoundOn = true;
    Global.activeIndex = 0;
    Global.activeIndexMoneyBag = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLkdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBSWxGO0lBQUE7SUF5QkEsQ0FBQztJQXhCVSxtQkFBWSxHQUFpQixJQUFJLENBQUE7SUFDakMsZ0JBQVMsR0FBVyxDQUFDLENBQUM7SUFDdEIsZUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ2pFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNuRCxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbEQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ2xELEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFFbEQsbUJBQVksR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDdEQsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUNuQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDO1FBQ25DLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7UUFDbEMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztLQUN0QyxDQUFBO0lBQ00sb0JBQWEsR0FBRyxLQUFLLENBQUM7SUFDdEIsZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixlQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2QsaUJBQVUsR0FBRyxFQUFFLENBQUM7SUFDaEIsZ0JBQVMsR0FBRyxJQUFJLENBQUM7SUFDakIsZ0JBQVMsR0FBRyxJQUFJLENBQUM7SUFDakIsa0JBQVcsR0FBVyxDQUFDLENBQUM7SUFDeEIsMEJBQW1CLEdBQVcsQ0FBQyxDQUFDO0lBRzNDLGFBQUM7Q0F6QkQsQUF5QkMsSUFBQTtrQkF6Qm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi9TaHVTaGlDYXJiLlNvdW5kTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWwge1xuICAgIHN0YXRpYyBzb3VuZE1hbmFnZXI6IFNvdW5kTWFuYWdlciA9IG51bGxcbiAgICBzdGF0aWMgdG90YWxHb2xkOiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBkYXRhSG9vayA9IFt7cHJpY2U6IDE1MCxzcGVlZDogMS41LCB3aWR0aEhvb2s6IDMsaXNCdXk6IGZhbHNlfSxcbiAgICAgICAge3ByaWNlOiAzMDAsc3BlZWQ6IDIuNSwgd2lkdGhIb29rOiA1LCBpc0J1eTogZmFsc2V9LCBcbiAgICAgICAge3ByaWNlOiA0NTAsc3BlZWQ6IDMuNSwgd2lkdGhIb29rOiA3LGlzQnV5OiBmYWxzZX0sXG4gICAgICAgIHtwcmljZTogNjAwLHNwZWVkOiA0LjUsIHdpZHRoSG9vazogOSxpc0J1eTogZmFsc2V9LFxuICAgICAgICB7cHJpY2U6IDc1MCxzcGVlZDogNS41LCB3aWR0aEhvb2s6IDExLGlzQnV5OiBmYWxzZX1dO1xuXG4gICAgc3RhdGljIGRhdGFCYWdNb25leSA9IFt7cHJpY2U6IDEyMCwgZ29sZDogMywgaXNCdXk6IGZhbHNlfSxcbiAgICAgICAge3ByaWNlOiAyNTAsIGdvbGQ6IDUsIGlzQnV5OiBmYWxzZX0sXG4gICAgICAgIHtwcmljZTogMzIwLCBnb2xkOiA3LCBpc0J1eTogZmFsc2V9LFxuICAgICAgICB7cHJpY2U6IDQ1MCxnb2xkOiA5LCBpc0J1eTogZmFsc2V9LFxuICAgICAgICB7cHJpY2U6IDc1MCxnb2xkOiAxMSwgaXNCdXk6IGZhbHNlfVxuICAgIF1cbiAgICBzdGF0aWMgY2hlY2tCYWdNb25leSA9IGZhbHNlO1xuICAgIHN0YXRpYyBzcGVlZEhvb2sgPSAyMDtcbiAgICBzdGF0aWMgbW9uZXlCYWcgPSAyMDtcbiAgICBzdGF0aWMgbGVuZ3RoSG9vayA9IDM1O1xuICAgIHN0YXRpYyBpc011c2ljT24gPSB0cnVlO1xuICAgIHN0YXRpYyBpc1NvdW5kT24gPSB0cnVlO1xuICAgIHN0YXRpYyBhY3RpdmVJbmRleDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgYWN0aXZlSW5kZXhNb25leUJhZzogbnVtYmVyID0gMDtcbiAgICAvLyBzdGF0aWMgZGF0YUhvb2sgPSBbMSwyM107XG4gICAgXG59XG4iXX0=
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
var ShuShiCarb_ItemMoneyBag_1 = require("./ShuShiCarb.ItemMoneyBag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbShopView = /** @class */ (function (_super) {
    __extends(ShuShiCarbShopView, _super);
    function ShuShiCarbShopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbGold = null;
        _this.nlistItem = null;
        _this.prfItemSpeedHook = null;
        _this.prfItemMoney = null;
        _this.listDataHook = [];
        return _this;
        // update (dt) {}
    }
    ShuShiCarbShopView_1 = ShuShiCarbShopView;
    ShuShiCarbShopView.prototype.onLoad = function () {
        ShuShiCarbShopView_1.instace = this;
        this.itemSpeedHook();
        this.updateGold();
        this.itemMoney();
    };
    ShuShiCarbShopView.prototype.start = function () {
    };
    ShuShiCarbShopView.prototype.itemSpeedHook = function () {
        var item = cc.instantiate(this.prfItemSpeedHook).getComponent(ShuShiCarb_ItemHook_1.default);
        this.nlistItem.addChild(item.node);
    };
    ShuShiCarbShopView.prototype.itemMoney = function () {
        var item = cc.instantiate(this.prfItemMoney).getComponent(ShuShiCarb_ItemMoneyBag_1.default);
        this.nlistItem.addChild(item.node);
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
    ], ShuShiCarbShopView.prototype, "nlistItem", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbShopView.prototype, "prfItemSpeedHook", void 0);
    __decorate([
        property(cc.Prefab)
    ], ShuShiCarbShopView.prototype, "prfItemMoney", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5TaG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnRUFBZ0Q7QUFDaEQsNkRBQXVEO0FBQ3ZELHFFQUErRDtBQUl6RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQThDQztRQTNDRyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBS25DLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBQy9CLGtCQUFZLEdBQUcsRUFBRSxDQUFDOztRQStCbEIsaUJBQWlCO0lBQ3JCLENBQUM7MkJBOUNvQixrQkFBa0I7SUFlbkMsbUNBQU0sR0FBTjtRQUNJLG9CQUFrQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGtDQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLDZCQUFrQixDQUFDLENBQUE7UUFDakYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLGlDQUFzQixDQUFDLENBQUE7UUFDakYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCx1Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsMkJBQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ2hELENBQUM7SUFFRCwrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxJQUFJO0lBQ0oseUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7SUEzQ2EsMEJBQU8sR0FBdUIsSUFBSSxDQUFDO0lBRWpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dFQUNlO0lBS25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ1c7SUFiZCxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQThDdEM7SUFBRCx5QkFBQztDQTlDRCxBQThDQyxDQTlDK0MsRUFBRSxDQUFDLFNBQVMsR0E4QzNEO2tCQTlDb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uLy4uL1NodVNoaUNhcmIuR2xvYmFsXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkl0ZW1Ib29rIGZyb20gXCIuL1NodVNoaUNhcmIuSXRlbUhvb2tcIjtcbmltcG9ydCBTaHVTaGlDYXJiSXRlbU1vbmV5QmFnIGZyb20gXCIuL1NodVNoaUNhcmIuSXRlbU1vbmV5QmFnXCI7XG5cblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJTaG9wVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YWNlOiBTaHVTaGlDYXJiU2hvcFZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBubGlzdEl0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZJdGVtU3BlZWRIb29rOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIFxuICAgXG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkl0ZW1Nb25leTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBsaXN0RGF0YUhvb2sgPSBbXTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNodVNoaUNhcmJTaG9wVmlldy5pbnN0YWNlID0gdGhpcztcbiAgICAgICAgdGhpcy5pdGVtU3BlZWRIb29rKCk7XG4gICAgICAgIHRoaXMudXBkYXRlR29sZCgpO1xuICAgICAgICB0aGlzLml0ZW1Nb25leSgpO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBpdGVtU3BlZWRIb29rKCkge1xuICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmSXRlbVNwZWVkSG9vaykuZ2V0Q29tcG9uZW50KFNodVNoaUNhcmJJdGVtSG9vaylcbiAgICAgICAgdGhpcy5ubGlzdEl0ZW0uYWRkQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICB9XG4gICAgXG4gICAgaXRlbU1vbmV5KCkge1xuICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmSXRlbU1vbmV5KS5nZXRDb21wb25lbnQoU2h1U2hpQ2FyYkl0ZW1Nb25leUJhZylcbiAgICAgICAgdGhpcy5ubGlzdEl0ZW0uYWRkQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICB9XG4gICAgdXBkYXRlR29sZCgpIHtcbiAgICAgICAgdGhpcy5sYkdvbGQuc3RyaW5nID0gR2xvYmFsLnRvdGFsR29sZCArIFwiIFwiO1xuICAgIH1cblxuICAgIC8vIGNoYW5nZUJ0bihpc1RydWU6IGJvb2xlYW4pIHtcbiAgICAvLyAgICAgdGhpcy5uQnRuR3JlZW4uYWN0aXZlID0gaXNUcnVlO1xuICAgIC8vICAgICB0aGlzLm5CdG5HcmF5LmFjdGl2ZSA9ICFpc1RydWU7XG4gICAgLy8gfVxuICAgIG9uQ2xpY2tDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemMoneyBag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75348lwHFBBC6JT2XEAoYwZ', 'ShuShiCarb.ItemMoneyBag');
// SuShiCarb/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemMoneyBag.ts

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
var ShuShiCarbItemMoneyBag = /** @class */ (function (_super) {
    __extends(ShuShiCarbItemMoneyBag, _super);
    function ShuShiCarbItemMoneyBag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbPrice = null;
        _this.nBtnBuy = null;
        _this.nStateBuy = null;
        _this.nCheckmask = null;
        _this.lbLeverSpeedOld = null;
        _this.lbLeverSpeedNew = null;
        _this.index = 0;
        _this.isCheck = false;
        _this._data = null;
        _this.isClick = false;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbItemMoneyBag.prototype.onLoad = function () {
        this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndexMoneyBag")) || 0;
        this.loadPurchaseState();
        this.checkClick();
        this.updatePrice(this.index);
    };
    ShuShiCarbItemMoneyBag.prototype.loadPurchaseState = function () {
        var purchaseData = JSON.parse(cc.sys.localStorage.getItem("itemMoneyBag")) || [];
        for (var i = 0; i < ShuShiCarb_Global_1.default.dataBagMoney.length; i++) {
            if (purchaseData[i]) {
                ShuShiCarb_Global_1.default.dataBagMoney[i].isBuy = purchaseData[i].isBuy;
                ShuShiCarb_Global_1.default.dataBagMoney[i].gold = purchaseData[i].gold;
                this.nStateBuy.children[i].active = purchaseData[i].isBuy;
            }
        }
    };
    ShuShiCarbItemMoneyBag.prototype.savePurchaseState = function () {
        var purchaseData = ShuShiCarb_Global_1.default.dataBagMoney.map(function (item) { return ({
            isBuy: item.isBuy,
            gold: item.gold
        }); });
        cc.sys.localStorage.setItem('itemMoneyBag', JSON.stringify(purchaseData));
        cc.sys.localStorage.setItem('activeIndexMoneyBag', JSON.stringify(ShuShiCarb_Global_1.default.activeIndex));
        cc.sys.localStorage.setItem('itemIndexMoneyBag', this.index.toString());
        cc.sys.localStorage.setItem('moneyBag', JSON.stringify(ShuShiCarb_Global_1.default.moneyBag));
        cc.sys.localStorage.setItem('checkBagMoney', JSON.stringify(ShuShiCarb_Global_1.default.checkBagMoney));
    };
    ShuShiCarbItemMoneyBag.prototype.checkClick = function () {
        if (this.index < ShuShiCarb_Global_1.default.dataBagMoney.length) {
            if (ShuShiCarb_Global_1.default.totalGold >= ShuShiCarb_Global_1.default.dataBagMoney[this.index].price) {
                this.nCheckmask.active = false;
                this.isCheck = true;
            }
            else {
                this.nCheckmask.active = true;
                this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
            }
        }
    };
    ShuShiCarbItemMoneyBag.prototype.onBuy = function () {
        if (this.isCheck && this.index < ShuShiCarb_Global_1.default.dataBagMoney.length) {
            ShuShiCarb_Global_1.default.checkBagMoney = true;
            ShuShiCarb_Global_1.default.dataBagMoney[this.index].isBuy = true;
            ShuShiCarb_Global_1.default.totalGold -= ShuShiCarb_Global_1.default.dataBagMoney[this.index].price;
            ShuShiCarb_Global_1.default.moneyBag += ShuShiCarb_Global_1.default.dataBagMoney[this.index].gold;
            this.nStateBuy.children[this.index].active = ShuShiCarb_Global_1.default.dataBagMoney[this.index].isBuy;
            ShuShiCarb_Global_1.default.activeIndexMoneyBag = this.index;
            this.savePurchaseState();
            this.index++;
            //this.savePurchaseState();
            this.checkClick();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            ShuShiCarb_ShopView_1.default.instace.updateGold();
            this.updatePrice(this.index);
        }
        console.log("onbuy");
    };
    ShuShiCarbItemMoneyBag.prototype.updatePrice = function (index) {
        if (index < ShuShiCarb_Global_1.default.dataBagMoney.length) {
            this.lbPrice.string = ShuShiCarb_Global_1.default.dataBagMoney[index].price + ' ';
            this.lbLeverSpeedNew.string = '+' + ShuShiCarb_Global_1.default.dataBagMoney[index].gold + '$';
        }
        else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
        }
    };
    ShuShiCarbItemMoneyBag.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemMoneyBag.prototype, "lbPrice", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemMoneyBag.prototype, "nBtnBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemMoneyBag.prototype, "nStateBuy", void 0);
    __decorate([
        property(cc.Node)
    ], ShuShiCarbItemMoneyBag.prototype, "nCheckmask", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemMoneyBag.prototype, "lbLeverSpeedOld", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemMoneyBag.prototype, "lbLeverSpeedNew", void 0);
    ShuShiCarbItemMoneyBag = __decorate([
        ccclass
    ], ShuShiCarbItemMoneyBag);
    return ShuShiCarbItemMoneyBag;
}(cc.Component));
exports.default = ShuShiCarbItemMoneyBag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5JdGVtTW9uZXlCYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsMEVBQW9FO0FBQ3BFLGdFQUFnRDtBQUNoRCw2REFBdUQ7QUFFakQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUFpR0M7UUE3RkcsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBSyxHQUFHLElBQUksQ0FBQTtRQUNaLGFBQU8sR0FBRyxLQUFLLENBQUM7O1FBNEVoQixpQkFBaUI7SUFDckIsQ0FBQztJQTVFRyx1Q0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxL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QUFLLEdBQUcsR0FBRyxDQUFDO1lBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRywyQkFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQzdFO2FBQUs7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUNELHNDQUFLLEdBQUw7SUFFQSxDQUFDO0lBMUZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OERBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttRUFDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21FQUNjO0lBZmhCLHNCQUFzQjtRQUQxQyxPQUFPO09BQ2Esc0JBQXNCLENBaUcxQztJQUFELDZCQUFDO0NBakdELEFBaUdDLENBakdtRCxFQUFFLENBQUMsU0FBUyxHQWlHL0Q7a0JBakdvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdhbWVcIjtcbmltcG9ydCBTaHVTaGlDYXJiR2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL1NodVNoaUNhcmIuR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uLy4uL1NodVNoaUNhcmIuR2xvYmFsXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYlNob3BWaWV3IGZyb20gXCIuL1NodVNoaUNhcmIuU2hvcFZpZXdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSXRlbU1vbmV5QmFnIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlByaWNlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJ0bkJ1eTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0YXRlQnV5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQ2hlY2ttYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkxldmVyU3BlZWRPbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJMZXZlclNwZWVkTmV3OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBpbmRleCA9IDA7XG4gICAgaXNDaGVjayA9IGZhbHNlO1xuICAgIF9kYXRhID0gbnVsbFxuICAgIGlzQ2xpY2sgPSBmYWxzZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIml0ZW1JbmRleE1vbmV5QmFnXCIpKSB8fCAwO1xuICAgICAgICB0aGlzLmxvYWRQdXJjaGFzZVN0YXRlKClcbiAgICAgICAgdGhpcy5jaGVja0NsaWNrKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJpY2UodGhpcy5pbmRleCk7XG4gICAgfVxuXG4gICAgbG9hZFB1cmNoYXNlU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IHB1cmNoYXNlRGF0YSA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXRlbU1vbmV5QmFnXCIpKSB8fCBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHbG9iYWwuZGF0YUJhZ01vbmV5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHVyY2hhc2VEYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhdGFCYWdNb25leVtpXS5pc0J1eSA9IHB1cmNoYXNlRGF0YVtpXS5pc0J1eTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGF0YUJhZ01vbmV5W2ldLmdvbGQgPSBwdXJjaGFzZURhdGFbaV0uZ29sZDtcbiAgICAgICAgICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5jaGlsZHJlbltpXS5hY3RpdmUgPSBwdXJjaGFzZURhdGFbaV0uaXNCdXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlUHVyY2hhc2VTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgcHVyY2hhc2VEYXRhID0gR2xvYmFsLmRhdGFCYWdNb25leS5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgICAgaXNCdXk6IGl0ZW0uaXNCdXksXG4gICAgICAgICAgICBnb2xkOiBpdGVtLmdvbGRcbiAgICAgICAgfSkpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1Nb25leUJhZycsIEpTT04uc3RyaW5naWZ5KHB1cmNoYXNlRGF0YSkpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZUluZGV4TW9uZXlCYWcnLCBKU09OLnN0cmluZ2lmeShHbG9iYWwuYWN0aXZlSW5kZXgpKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtSW5kZXhNb25leUJhZycsIHRoaXMuaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9uZXlCYWcnLCBKU09OLnN0cmluZ2lmeShHbG9iYWwubW9uZXlCYWcpKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaGVja0JhZ01vbmV5JywgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmNoZWNrQmFnTW9uZXkpKTtcbiAgICB9XG5cbiAgICBjaGVja0NsaWNrKCkge1xuICAgICAgICBpZih0aGlzLmluZGV4IDwgR2xvYmFsLmRhdGFCYWdNb25leS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKEdsb2JhbC50b3RhbEdvbGQgPj0gR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XS5wcmljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubkNoZWNrbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICBcblxuICAgIG9uQnV5KCkge1xuICAgICAgICBpZiAodGhpcy5pc0NoZWNrICYmIHRoaXMuaW5kZXggPCBHbG9iYWwuZGF0YUJhZ01vbmV5Lmxlbmd0aCkge1xuICAgICAgICAgICAgR2xvYmFsLmNoZWNrQmFnTW9uZXkgPSB0cnVlO1xuICAgICAgICAgICAgR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XS5pc0J1eSA9IHRydWU7XG4gICAgICAgICAgICBHbG9iYWwudG90YWxHb2xkIC09IEdsb2JhbC5kYXRhQmFnTW9uZXlbdGhpcy5pbmRleF0ucHJpY2U7XG4gICAgICAgICAgICBHbG9iYWwubW9uZXlCYWcgKz0gR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XS5nb2xkO1xuICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5bdGhpcy5pbmRleF0uYWN0aXZlID0gR2xvYmFsLmRhdGFCYWdNb25leVt0aGlzLmluZGV4XS5pc0J1eTtcbiAgICAgICAgICAgIEdsb2JhbC5hY3RpdmVJbmRleE1vbmV5QmFnID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zYXZlUHVyY2hhc2VTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgLy90aGlzLnNhdmVQdXJjaGFzZVN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQ2xpY2soKTtcbiAgICAgICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS51cGRhdGVUb3RhbEdvbGQoKTtcbiAgICAgICAgICAgIFNodVNoaUNhcmJTaG9wVmlldy5pbnN0YWNlLnVwZGF0ZUdvbGQoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UodGhpcy5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJvbmJ1eVwiKVxuICAgIH1cblxuICAgIHVwZGF0ZVByaWNlKGluZGV4KSB7XG4gICAgICAgIGlmKGluZGV4IDwgR2xvYmFsLmRhdGFCYWdNb25leS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSBHbG9iYWwuZGF0YUJhZ01vbmV5W2luZGV4XS5wcmljZSArICcgJztcbiAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkTmV3LnN0cmluZyA9ICcrJyArIEdsb2JhbC5kYXRhQmFnTW9uZXlbaW5kZXhdLmdvbGQgKyAnJCc7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSBcIk1heFwiO1xuICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWROZXcuc3RyaW5nID0gXCJNYXhcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
        _this.isAtOrderPosition = false;
        return _this;
        // update (dt) {}
    }
    ShuShiCarbPlayer_1 = ShuShiCarbPlayer;
    // @property(cc.Node)
    // foodItem1: cc.Node = null;
    // @property(cc.Node)
    // foodItem2: cc.Node = null;
    // @property(cc.Node)
    // foodItem3: cc.Node = null;
    ShuShiCarbPlayer.prototype.onLoad = function () {
        ShuShiCarbPlayer_1.instace = this;
    };
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
            _this.isAtOrderPosition = true;
            _this.startCountDown();
        })
            .start();
    };
    ShuShiCarbPlayer.prototype.happyEffectPlayerMoveOut = function (callbacks) {
        var _this = this;
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "happy";
        this.isAtOrderPosition = false;
        cc.tween(this.char.node)
            .to(0.8, { x: 600 })
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
        this.isAtOrderPosition = false;
        cc.tween(this.char.node)
            .to(0.8, { x: 600 })
            .call(function () {
            _this.isAtOrderPosition = false;
            _this.node.destroy();
            callbacks();
        }).start();
    };
    ShuShiCarbPlayer.prototype.start = function () {
        this.effectShow();
    };
    var ShuShiCarbPlayer_1;
    ShuShiCarbPlayer.instace = null;
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
    ShuShiCarbPlayer = ShuShiCarbPlayer_1 = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUFnRDtBQUcxQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQWtIQztRQTlHRyxVQUFJLEdBQWdCLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBc0IsRUFBRSxDQUFDO1FBRXRDLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsdUJBQWlCLEdBQUcsS0FBSyxDQUFDOztRQTRGMUIsaUJBQWlCO0lBQ3JCLENBQUM7eUJBbEhvQixnQkFBZ0I7SUF1QmpDLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBRTdCLGlDQUFNLEdBQU47UUFDSSxrQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFDRCxrQ0FBTyxHQUFQLFVBQVEsS0FBSztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7SUFDckYsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFHRCwwQ0FBZSxHQUFmO1FBQ0ksSUFBRyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7U0FDdkQ7YUFBSztZQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLHlCQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25CLG9CQUFvQjtTQUV2QjtJQUNMLENBQUM7SUFFRCw0Q0FBaUIsR0FBakI7UUFDSSxJQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUNELHFDQUFVLEdBQVY7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDdkIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUNiLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUM3QixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDOUIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBQ1osQ0FBQztJQUVELG1EQUF3QixHQUF4QixVQUF5QixTQUFtQjtRQUE1QyxpQkFXQztRQVZHLGdEQUFnRDtRQUNoRCxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN2QixFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDO2FBQ2hCLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsU0FBUyxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsaURBQXNCLEdBQXRCLFVBQXVCLFNBQW1CO1FBQTFDLGlCQVlDO1FBWEcsZ0RBQWdEO1FBQ2hELGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUE7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3ZCLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUM7YUFDaEIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELGdDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7SUE3R2Esd0JBQU8sR0FBcUIsSUFBSSxDQUFDO0lBRS9DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0RBQ0c7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7MkRBQ1k7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2REFDYztJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0k7SUFoQkwsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FrSHBDO0lBQUQsdUJBQUM7Q0FsSEQsQUFrSEMsQ0FsSDZDLEVBQUUsQ0FBQyxTQUFTLEdBa0h6RDtrQkFsSG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWUgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2FtZVwiO1xuaW1wb3J0IFNodVNoaUNhcmJGb29kIGZyb20gXCIuL1NodVNoaUNhcmIuRm9vZFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YWNlOiBTaHVTaGlDYXJiUGxheWVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgY2hhcjogc3AuU2tlbGV0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RGb29kOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuY2hhdDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uRGF0YSlcbiAgICBsaXN0Q2hhcmFjdGVyOiBzcC5Ta2VsZXRvbkRhdGFbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBwcmdCYXJDb3VudERvd246IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJDb3VudERvd246IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuVGltZTogY2MuTm9kZSA9IG51bGw7XG4gICAgZHVyYXRpb24gPSAxMDtcbiAgICBudW1iZXJDb3VudERvd24gPSAwO1xuICAgIGlzQ291bnREb3duID0gZmFsc2U7XG4gICAgaXNNb3ZlID0gZmFsc2U7XG4gICAgaXNBdE9yZGVyUG9zaXRpb24gPSBmYWxzZTtcbiAgICBcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBmb29kSXRlbTE6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGZvb2RJdGVtMjogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gZm9vZEl0ZW0zOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU2h1U2hpQ2FyYlBsYXllci5pbnN0YWNlID0gdGhpcztcbiAgICB9XG4gICAgc2V0RGF0YShpbmRleCkge1xuICAgICAgICB0aGlzLmNoYXIuc2tlbGV0b25EYXRhID0gdGhpcy5saXN0Q2hhcmFjdGVyW2luZGV4XTsgLy8gbGlzdENoYXIgWzBdID0gY29uIGFvIHZhbmdcbiAgICB9XG5cbiAgICBzdGFydENvdW50RG93bigpIHtcbiAgICAgICAgdGhpcy5pc0NvdW50RG93biA9IHRydWU7XG4gICAgICAgIHRoaXMubnVtYmVyQ291bnREb3duID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUNvdW50RG93biwxKTtcbiAgICB9XG5cbiAgICBcbiAgICB1cGRhdGVDb3VudERvd24oKSB7XG4gICAgICAgIGlmKHRoaXMubnVtYmVyQ291bnREb3duID4gMCkge1xuICAgICAgICAgICAgdGhpcy5udW1iZXJDb3VudERvd24tLTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgICAgIHRoaXMubGJDb3VudERvd24uc3RyaW5nID0gdGhpcy5udW1iZXJDb3VudERvd24gKyAnJztcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0NvdW50RG93biA9IGZhbHNlO1xuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UucmVzZXRHYW1lKGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGh1YVwiKVxuICAgICAgICAgICAgLy90aGlzLmVmZmVjdFNob3coKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIGlmKHRoaXMucHJnQmFyQ291bnREb3duKSB7XG4gICAgICAgICAgICB0aGlzLnByZ0JhckNvdW50RG93bi5wcm9ncmVzcyAtPSAwLjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWZmZWN0U2hvdygpIHtcbiAgICAgICAgdGhpcy5jaGFyLmFuaW1hdGlvbiA9ICdtb3ZlJztcbiAgICAgICAgdGhpcy5uY2hhdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uVGltZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5jaGFyLm5vZGUpXG4gICAgICAgIC50bygyLCB7eDogMH0pXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSAnaWRsZSc7XG4gICAgICAgICAgICB0aGlzLm5jaGF0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5UaW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb3VudERvd24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICBoYXBweUVmZmVjdFBsYXllck1vdmVPdXQoY2FsbGJhY2tzOiBGdW5jdGlvbikge1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIixhY3RpdmUpO1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJkaXNjb21mb3J0XCIsIWFjdGl2ZSk7XG4gICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSBcImhhcHB5XCJcbiAgICAgICAgdGhpcy5pc0F0T3JkZXJQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmNoYXIubm9kZSlcbiAgICAgICAgLnRvKDAuOCx7eDogNjAwfSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcygpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIHNhZEVmZmVjdFBsYXllck1vdmVPdXQoY2FsbGJhY2tzOiBGdW5jdGlvbikge1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIixhY3RpdmUpO1xuICAgICAgICAvLyB0aGlzLmNoYXIuc2V0QW5pbWF0aW9uKDAsXCJkaXNjb21mb3J0XCIsIWFjdGl2ZSk7XG4gICAgICAgIHRoaXMuY2hhci5hbmltYXRpb24gPSBcImRpc2NvbWZvcnRcIlxuICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY2hhci5ub2RlKVxuICAgICAgICAudG8oMC44LHt4OiA2MDB9KVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQXRPcmRlclBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgY2FsbGJhY2tzKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgXG5cblxuICAgIHN0YXJ0ICgpIHsgIFxuICAgICAgICB0aGlzLmVmZmVjdFNob3coKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1NodVNoaUNhcmIuSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwREFBMEM7QUFFMUMseURBQW1EO0FBRTdDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBd0dDO1FBckdHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUVkLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLHVCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUdoQyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUFtRmhDLENBQUM7dUJBeEdvQixjQUFjO0lBc0IvQiwrQkFBTSxHQUFOO1FBQ0ksZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0UsMkJBQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSwy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LENBQUMsU0FBUyxHQXdHdkQ7a0JBeEdvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL1NodVNoaUNhcmIuR2xvYmFsXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYkZvb2QgZnJvbSBcIi4vU2h1U2hpQ2FyYi5Gb29kXCI7XG5pbXBvcnQgU2h1U2hpQ2FyYlBsYXllciBmcm9tIFwiLi9TaHVTaGlDYXJiLlBsYXllclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodVNoaUNhcmJIb29rIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTaHVTaGlDYXJiSG9vayA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va1JvcGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va1Nwcml0ZU9wZW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaG9va1Nwcml0ZUNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhvb2tIZWFkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBcbiAgICBob29rU3BlZWQgPSAzMDtcbiAgICBob29rU3RhdGUgPSAwO1xuXG4gICAgaG9va0hlYWRCYXNlWTogbnVtYmVyID0gODA7XG4gICAgaG9va1JvcGVCYXNlV2lkdGg6IG51bWJlciA9IDEwMDtcbiAgICBcbiAgICBtb3VzZVBvcztcbiAgICBpc0NsaWNrYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICBTaHVTaGlDYXJiSG9vay5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTsgIFxuICAgICAgICBHbG9iYWwuc3BlZWRIb29rID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGVlZEhvb2tcIikpIHx8IEdsb2JhbC5zcGVlZEhvb2s7XG4gICAgICAgIEdsb2JhbC5sZW5ndGhIb29rID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZW5ndGhIb29rXCIpKSB8fCBHbG9iYWwubGVuZ3RoSG9vaztcbiAgICB9XG5cblxuICAgIGluaXRIb29rKCkgIHtcbiAgICAgICAgdGhpcy5ob29rSGVhZC55ICA9IHRoaXMuaG9va0hlYWRCYXNlWTtcbiAgICAgICAgdGhpcy5ob29rUm9wZS53aWR0aCA9IHRoaXMuaG9va1JvcGVCYXNlV2lkdGg7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEhvb2soKTtcbiAgICB9XG4gICAgc2V0SG9va1N0YXRlKGhvb2tTdGF0ZSkge1xuICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IGhvb2tTdGF0ZTtcbiAgICB9XG5cbiAgICBzZXRIb29rU3ByaXRlKGlzT3BlbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmhvb2tTcHJpdGVDbG9zZS5hY3RpdmUgPSAhaXNPcGVuO1xuICAgICAgICB0aGlzLmhvb2tTcHJpdGVPcGVuLmFjdGl2ZSA9IGlzT3BlbjtcbiAgICB9XG4gXG5cbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0NsaWNrYWJsZSB8fCB0aGlzLmhvb2tTdGF0ZSAhPT0gMCB8fCAhU2h1U2hpQ2FyYlBsYXllci5pbnN0YWNlLmlzQXRPcmRlclBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rU3RhdGUgPSAxO1xuICAgICAgICB0aGlzLm1vdXNlUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MihldmVudC5nZXRMb2NhdGlvblgoKSkpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5tb3VzZVBvcyk7XG4gICAgfVxuXG4gICAgbW92ZUhvb2tIZWFkKGR0KSB7XG4gICAgICAgIHRoaXMuaG9va0hlYWQueSArPSBkdCAqIEdsb2JhbC5zcGVlZEhvb2s7XG4gICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggKz0gZHQgKiBHbG9iYWwubGVuZ3RoSG9vaztcbiAgICAgIFxuICAgIH1cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5zZXRIb29rU3ByaXRlKHRydWUpO1xuICAgICAgICBzd2l0Y2godGhpcy5ob29rU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZih0aGlzLmhvb2tIZWFkLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlSG9va0hlYWQoR2xvYmFsLnNwZWVkSG9vayAqIGR0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55ID49IDYwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rU3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUhvb2tIZWFkKC1HbG9iYWwuc3BlZWRIb29rICAqIGR0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rSGVhZC5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ob29rSGVhZC55ICA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va0hlYWQueSA9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va1JvcGUud2lkdGggPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tTdGF0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tIZWFkLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVDbGlja1RlbXBvcmFyaWx5KDAuMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhvb2tTcHJpdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZUNsaWNrVGVtcG9yYXJpbHkoZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICB0aGlzLmlzQ2xpY2thYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDbGlja2FibGUgPSB0cnVlO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgfVxufSJdfQ==
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
        _this.lbLeverSpeedOld = null;
        _this.lbLeverSpeedNew = null;
        _this.index = 0;
        _this.isCheck = false;
        _this._data = null;
        return _this;
        // update (dt) {}
    }
    // data;
    ShuShiCarbItemHook.prototype.setData = function (data) {
        this._data = data;
        this.nStateBuy.active = data.isBuy;
        console.log("data ", data);
    };
    // LIFE-CYCLE CALLBACKS:
    ShuShiCarbItemHook.prototype.onLoad = function () {
        this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndex")) || 0;
        this.loadPurchaseState();
        this.checkClick();
        this.updatePrice(this.index);
    };
    ShuShiCarbItemHook.prototype.loadPurchaseState = function () {
        var purchaseData = JSON.parse(cc.sys.localStorage.getItem("purchaseData")) || [];
        for (var i = 0; i < ShuShiCarb_Global_1.default.dataHook.length; i++) {
            if (purchaseData[i]) {
                ShuShiCarb_Global_1.default.dataHook[i].isBuy = purchaseData[i].isBuy;
                ShuShiCarb_Global_1.default.dataHook[i].speed = purchaseData[i].speed;
                this.nStateBuy.children[i].active = purchaseData[i].isBuy;
            }
        }
    };
    ShuShiCarbItemHook.prototype.savePurchaseState = function () {
        var purchaseData = ShuShiCarb_Global_1.default.dataHook.map(function (item) { return ({
            isBuy: item.isBuy,
            speed: item.speed
        }); });
        cc.sys.localStorage.setItem('purchaseData', JSON.stringify(purchaseData));
        cc.sys.localStorage.setItem('activeIndex', JSON.stringify(ShuShiCarb_Global_1.default.activeIndex));
        cc.sys.localStorage.setItem('itemIndex', this.index.toString());
        cc.sys.localStorage.setItem('speedHook', JSON.stringify(ShuShiCarb_Global_1.default.speedHook));
        cc.sys.localStorage.setItem('lengthHook', JSON.stringify(ShuShiCarb_Global_1.default.lengthHook));
    };
    ShuShiCarbItemHook.prototype.checkClick = function () {
        if (this.index < ShuShiCarb_Global_1.default.dataHook.length) {
            if (ShuShiCarb_Global_1.default.totalGold >= ShuShiCarb_Global_1.default.dataHook[this.index].price) {
                this.nCheckmask.active = false;
                this.isCheck = true;
            }
            else {
                this.nCheckmask.active = true;
                this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
            }
        }
    };
    ShuShiCarbItemHook.prototype.onClickBuy = function () {
        if (this.isCheck && this.index < ShuShiCarb_Global_1.default.dataHook.length) {
            ShuShiCarb_Global_1.default.dataHook[this.index].isBuy = true;
            ShuShiCarb_Global_1.default.totalGold -= ShuShiCarb_Global_1.default.dataHook[this.index].price;
            ShuShiCarb_Global_1.default.speedHook += ShuShiCarb_Global_1.default.dataHook[this.index].speed;
            ShuShiCarb_Global_1.default.lengthHook += ShuShiCarb_Global_1.default.dataHook[this.index].widthHook;
            this.nStateBuy.children[this.index].active = ShuShiCarb_Global_1.default.dataHook[this.index].isBuy;
            ShuShiCarb_Global_1.default.activeIndex = this.index;
            this.savePurchaseState();
            this.index++;
            this.savePurchaseState();
            console.log(this.index);
            this.checkClick();
            ShuShiCarb_ShopView_1.default.instace.updateGold();
            ShuShiCarb_GameManager_1.default.instance.updateTotalGold();
            this.updatePrice(this.index);
            console.log("data Hoook ", ShuShiCarb_Global_1.default.dataHook);
        }
        else {
            this.nCheckmask.active = true;
            this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        }
    };
    ShuShiCarbItemHook.prototype.updatePrice = function (index) {
        if (index < ShuShiCarb_Global_1.default.dataHook.length) {
            this.lbPrice.string = ShuShiCarb_Global_1.default.dataHook[index].price + ' ';
            this.lbLeverSpeedNew.string = ShuShiCarb_Global_1.default.dataHook[index].speed + 1 + ' ';
            this.lbLeverSpeedOld.string = ShuShiCarb_Global_1.default.dataHook[index].speed + ' ' + ' -> ';
        }
        else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
            this.lbLeverSpeedOld.string = "Max";
        }
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
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemHook.prototype, "lbLeverSpeedOld", void 0);
    __decorate([
        property(cc.Label)
    ], ShuShiCarbItemHook.prototype, "lbLeverSpeedNew", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1Nob3AvU2h1U2hpQ2FyYi5JdGVtSG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwRUFBb0U7QUFDcEUsZ0VBQWdEO0FBQ2hELDZEQUF1RDtBQUdqRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQW1IQztRQWhIRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixxQkFBZSxHQUFhLElBQUksQ0FBQztRQUVqQyxxQkFBZSxHQUFhLElBQUksQ0FBQztRQUVqQyxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFLLEdBQUcsSUFBSSxDQUFBOztRQWdHWixpQkFBaUI7SUFDckIsQ0FBQztJQWhHRyxRQUFRO0lBRVIsb0NBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCx3QkFBd0I7SUFHeEIsbUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxF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QUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytEQUNjO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0RBQ2M7SUFkaEIsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FtSHRDO0lBQUQseUJBQUM7Q0FuSEQsQUFtSEMsQ0FuSCtDLEVBQUUsQ0FBQyxTQUFTLEdBbUgzRDtrQkFuSG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdhbWVNYW5hZ2VyXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi8uLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuaW1wb3J0IFNodVNoaUNhcmJTaG9wVmlldyBmcm9tIFwiLi9TaHVTaGlDYXJiLlNob3BWaWV3XCI7XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiSXRlbUhvb2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiUHJpY2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQnRuQnV5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuU3RhdGVCdXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5DaGVja21hc2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTGV2ZXJTcGVlZE9sZDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkxldmVyU3BlZWROZXc6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIGluZGV4ID0gMDtcbiAgICBpc0NoZWNrID0gZmFsc2U7XG4gICAgX2RhdGEgPSBudWxsXG4gICAgLy8gZGF0YTtcbiBcbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMublN0YXRlQnV5LmFjdGl2ZSA9IGRhdGEuaXNCdXk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBcIiwgZGF0YSk7XG4gICAgfVxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXRlbUluZGV4XCIpKSB8fCAwO1xuICAgICAgICB0aGlzLmxvYWRQdXJjaGFzZVN0YXRlKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDbGljaygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKHRoaXMuaW5kZXgpO1xuICAgIH1cblxuICAgIGxvYWRQdXJjaGFzZVN0YXRlKCkge1xuICAgICAgICBjb25zdCBwdXJjaGFzZURhdGEgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB1cmNoYXNlRGF0YVwiKSkgfHwgW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2xvYmFsLmRhdGFIb29rLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHVyY2hhc2VEYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhdGFIb29rW2ldLmlzQnV5ID0gcHVyY2hhc2VEYXRhW2ldLmlzQnV5O1xuICAgICAgICAgICAgICAgIEdsb2JhbC5kYXRhSG9va1tpXS5zcGVlZCA9IHB1cmNoYXNlRGF0YVtpXS5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm5TdGF0ZUJ1eS5jaGlsZHJlbltpXS5hY3RpdmUgPSBwdXJjaGFzZURhdGFbaV0uaXNCdXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlUHVyY2hhc2VTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgcHVyY2hhc2VEYXRhID0gR2xvYmFsLmRhdGFIb29rLm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgICBpc0J1eTogaXRlbS5pc0J1eSxcbiAgICAgICAgICAgIHNwZWVkOiBpdGVtLnNwZWVkXG4gICAgICAgIH0pKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwdXJjaGFzZURhdGEnLCBKU09OLnN0cmluZ2lmeShwdXJjaGFzZURhdGEpKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVJbmRleCcsIEpTT04uc3RyaW5naWZ5KEdsb2JhbC5hY3RpdmVJbmRleCkpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1JbmRleCcsIHRoaXMuaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3BlZWRIb29rJywgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLnNwZWVkSG9vaykpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xlbmd0aEhvb2snLCBKU09OLnN0cmluZ2lmeShHbG9iYWwubGVuZ3RoSG9vaykpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBjaGVja0NsaWNrKCkge1xuICAgICAgICBpZih0aGlzLmluZGV4IDwgR2xvYmFsLmRhdGFIb29rLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYoR2xvYmFsLnRvdGFsR29sZCA+PSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0ucHJpY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5DaGVja21hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NoZWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgdGhpcy5uQ2hlY2ttYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIHRoaXMubkJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuICAgIG9uQ2xpY2tCdXkoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNDaGVjayAmJiB0aGlzLmluZGV4IDwgR2xvYmFsLmRhdGFIb29rLmxlbmd0aCkge1xuICAgICAgICAgICAgR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLmlzQnV5ID0gdHJ1ZTtcbiAgICAgICAgICAgIEdsb2JhbC50b3RhbEdvbGQgLT0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLnByaWNlO1xuICAgICAgICAgICAgR2xvYmFsLnNwZWVkSG9vayArPSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0uc3BlZWQ7XG4gICAgICAgICAgICBHbG9iYWwubGVuZ3RoSG9vayArPSBHbG9iYWwuZGF0YUhvb2tbdGhpcy5pbmRleF0ud2lkdGhIb29rO1xuICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5uU3RhdGVCdXkuY2hpbGRyZW5bdGhpcy5pbmRleF0uYWN0aXZlID0gR2xvYmFsLmRhdGFIb29rW3RoaXMuaW5kZXhdLmlzQnV5O1xuICAgICAgICAgICAgR2xvYmFsLmFjdGl2ZUluZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVB1cmNoYXNlU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIHRoaXMuc2F2ZVB1cmNoYXNlU3RhdGUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0NsaWNrKCk7XG4gICAgICAgICAgICBTaHVTaGlDYXJiU2hvcFZpZXcuaW5zdGFjZS51cGRhdGVHb2xkKCk7ICAgIFxuICAgICAgICAgICAgU2h1U2hpQ2FyYkdhbWVNYW5hZ2VyLmluc3RhbmNlLnVwZGF0ZVRvdGFsR29sZCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZSh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBIb29vayBcIixHbG9iYWwuZGF0YUhvb2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uQ2hlY2ttYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5CdG5CdXkuZ2V0Q29tcG9uZW50KGNjLlRvZ2dsZSkuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGVQcmljZShpbmRleCkge1xuICAgICAgICBpZihpbmRleCA8IEdsb2JhbC5kYXRhSG9vay5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSBHbG9iYWwuZGF0YUhvb2tbaW5kZXhdLnByaWNlICsgJyAnOyBcbiAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkTmV3LnN0cmluZyA9IEdsb2JhbC5kYXRhSG9va1tpbmRleF0uc3BlZWQgKyAxICsgJyAnO1xuICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWRPbGQuc3RyaW5nID0gR2xvYmFsLmRhdGFIb29rW2luZGV4XS5zcGVlZCArICcgJyArICAnIC0+ICc7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGJQcmljZS5zdHJpbmcgPSBcIk1heFwiO1xuICAgICAgICAgICAgdGhpcy5sYkxldmVyU3BlZWROZXcuc3RyaW5nID0gXCJNYXhcIjtcbiAgICAgICAgICAgIHRoaXMubGJMZXZlclNwZWVkT2xkLnN0cmluZyA9IFwiTWF4XCI7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
var ShuShiCarb_Game_1 = require("../../ShuShiCarb.Game");
var ShuShiCarb_GameManager_1 = require("../../ShuShiCarb.GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShuShiCarbGameOver = /** @class */ (function (_super) {
    __extends(ShuShiCarbGameOver, _super);
    function ShuShiCarbGameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbGold = null;
        return _this;
    }
    // @property(cc.Node)
    // starWin: cc.Node[] = [];
    // @property(cc.Node)
    // starLose: cc.Node[] = [];
    // @property(cc.Node)
    // textWin: cc.Node = null;
    // @property(cc.Node)
    // textLose: cc.Node = null;
    // gameWin() {
    //     this.starWin.forEach(element => {
    //         element.active = true;
    //     });
    //     this.starLose.forEach(element => {
    //         element.active = false;
    //     });
    //     this.textWin.active = true;
    //     this.textLose.active = false;
    //     // this.stopGamePlay();
    // }
    // gameLose() {
    //     this.starWin.forEach(element => {
    //         element.active = false;
    //     });
    //     this.starLose.forEach(element => {
    //         element.active = true;
    //     });
    //     this.textWin.active = false;
    //     this.textLose.active = true;
    //     // this.stopGamePlay();
    // }
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
    ShuShiCarbGameOver.prototype.goldEnd = function () {
        this.lbGold.string = ShuShiCarb_Game_1.default.instance.gold + " ";
    };
    ShuShiCarbGameOver.prototype.stopGamePlay = function () {
        var nodeGamePlay = cc.Canvas.instance.node.getChildByName("Main");
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = true;
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('shop').getComponent(cc.Button).interactable = true;
        ShuShiCarb_GameManager_1.default.instance.nHome.getChildByName('setting').getComponent(cc.Button).interactable = true;
        nodeGamePlay.destroy();
    };
    ShuShiCarbGameOver.prototype.onLoad = function () {
        this.open();
        this.goldEnd();
    };
    __decorate([
        property(cc.Label)
    ], ShuShiCarbGameOver.prototype, "lbGold", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1NodVNoaUNyYWIuR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW1EO0FBQ25ELHVFQUFpRTtBQUMzRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQW1FQztRQWhFRyxZQUFNLEdBQWEsSUFBSSxDQUFDOztJQWdFNUIsQ0FBQztJQTlERyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBRTVCLGNBQWM7SUFDZCx3Q0FBd0M7SUFDeEMsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsa0NBQWtDO0lBQ2xDLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5QixJQUFJO0lBRUosZUFBZTtJQUNmLHdDQUF3QztJQUN4QyxrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLElBQUk7SUFFSixpQ0FBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7YUFDbkIsS0FBSyxFQUFFLENBQUE7SUFDWixDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLGdDQUFxQixDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNqRCx3RUFBd0U7UUFDeEUsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsb0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLHlCQUFjLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFFNUQsQ0FBQztJQUNELHlDQUFZLEdBQVo7UUFDSSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2pFLGdDQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMzRyxnQ0FBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDeEcsZ0NBQXFCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNHLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNYLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBL0REO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0s7SUFIUCxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQW1FdEM7SUFBRCx5QkFBQztDQW5FRCxBQW1FQyxDQW5FK0MsRUFBRSxDQUFDLFNBQVMsR0FtRTNEO2tCQW5Fb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNodVNoaUNhcmJHYW1lIGZyb20gXCIuLi8uLi9TaHVTaGlDYXJiLkdhbWVcIjtcbmltcG9ydCBTaHVTaGlDYXJiR2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uL1NodVNoaUNhcmIuR2FtZU1hbmFnZXJcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVTaGlDYXJiR2FtZU92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiR29sZDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gc3RhcldpbjogY2MuTm9kZVtdID0gW107XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gc3Rhckxvc2U6IGNjLk5vZGVbXSA9IFtdO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIHRleHRXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIHRleHRMb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIGdhbWVXaW4oKSB7XG4gICAgLy8gICAgIHRoaXMuc3Rhcldpbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIC8vICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgdGhpcy5zdGFyTG9zZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIC8vICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHRoaXMudGV4dFdpbi5hY3RpdmUgPSB0cnVlO1xuICAgIC8vICAgICB0aGlzLnRleHRMb3NlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vICAgICAvLyB0aGlzLnN0b3BHYW1lUGxheSgpO1xuICAgIC8vIH1cblxuICAgIC8vIGdhbWVMb3NlKCkge1xuICAgIC8vICAgICB0aGlzLnN0YXJXaW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAvLyAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICB0aGlzLnN0YXJMb3NlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgLy8gICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICB0aGlzLnRleHRXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgIHRoaXMudGV4dExvc2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyAgICAgLy8gdGhpcy5zdG9wR2FtZVBsYXkoKTtcbiAgICAvLyB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgIC50bygwLjIsIHtzY2FsZTogMX0pXG4gICAgICAgIC5zdGFydCgpXG4gICAgfVxuXG4gICAgb25Ib21lKCkge1xuICAgICAgICBTaHVTaGlDYXJiR2FtZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlVG90YWxHb2xkKCk7XG4gICAgICAgIC8vIGxldCBub2RlR2FtZVBsYXkgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVQbGF5XCIpXG4gICAgICAgIC8vIG5vZGVHYW1lUGxheS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc3RvcEdhbWVQbGF5KCk7XG4gICAgfVxuXG4gICAgZ29sZEVuZCgpIHtcbiAgICAgICAgdGhpcy5sYkdvbGQuc3RyaW5nID0gU2h1U2hpQ2FyYkdhbWUuaW5zdGFuY2UuZ29sZCArIFwiIFwiO1xuICAgICAgICBcbiAgICB9XG4gICAgc3RvcEdhbWVQbGF5KCkge1xuICAgICAgICBsZXQgbm9kZUdhbWVQbGF5ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJNYWluXCIpXG4gICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgncGxheWJ0bicpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgnc2hvcCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIFNodVNoaUNhcmJHYW1lTWFuYWdlci5pbnN0YW5jZS5uSG9tZS5nZXRDaGlsZEJ5TmFtZSgnc2V0dGluZycpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIG5vZGVHYW1lUGxheS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm9wZW4oKVxuICAgICAgICB0aGlzLmdvbGRFbmQoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
