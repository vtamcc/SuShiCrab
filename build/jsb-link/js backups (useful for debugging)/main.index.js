window.__require = function t(o, e, n) {
function r(a, c) {
if (!e[a]) {
if (!o[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!o[s]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var u = e[a] = {
exports: {}
};
o[a][0].call(u.exports, function(t) {
return r(o[a][1][t] || t);
}, u, u.exports, t, o, e, n);
}
return e[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
return r;
}({
"ShuShiCarb.Conveyor": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "feab3o200JDbYSI7NRNPnpz", "ShuShiCarb.Conveyor");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.idFood = 0;
o.isMove = !1;
return o;
}
o.prototype.update = function() {
if (!this.isMove) if (0 == this.idFood) {
if (this.node.x >= 1200 || !this.node.active) {
this.resetPos();
this.resetSate(!0);
}
this.node.x += 4;
} else if (1 != this.idFood && this.node.active) {
if (2 == this.idFood || !this.node.active) {
if (this.node.x >= 1200) {
this.resetPos();
this.resetSate(!0);
}
this.node.x += 3;
}
} else {
if (this.node.x <= -1800) {
this.node.x = 50;
this.resetSate(!0);
}
this.node.x -= 3;
}
};
o.prototype.resetPos = function() {
this.node.x = -700;
};
o.prototype.resetSate = function(t) {
this.node.getComponent(cc.Sprite).enabled = t;
this.node.getComponent(cc.BoxCollider).enabled = t;
};
i([ s ], o.prototype, "idFood", void 0);
return i([ c ], o);
}(cc.Component);
e.default = p;
cc._RF.pop();
}, {} ],
"ShuShiCarb.Food": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "1814d5TiQlDEohqTgqXx2zV", "ShuShiCarb.Food");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = t("../ShuShiCarb.Game"), c = cc._decorator, s = c.ccclass, p = c.property, u = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.nFood = null;
o.id = 0;
o.isCheck = 0;
return o;
}
o.prototype.onLoad = function() {};
o.prototype.start = function() {};
o.prototype.setData = function(t) {
this.id = t;
this.nFood.getComponent(cc.Sprite).spriteFrame = a.default.instance.listSpfFood[t];
};
o.prototype.update = function() {};
i([ p(cc.Node) ], o.prototype, "nFood", void 0);
return i([ s ], o);
}(cc.Component);
e.default = u;
cc._RF.pop();
}, {
"../ShuShiCarb.Game": "ShuShiCarb.Game"
} ],
"ShuShiCarb.GameManager": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b4f8btwtChDJ7eWDTDf8uUO", "ShuShiCarb.GameManager");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = t("./Game/Ui_Popup/Shop/ShuShiCarb.ShopView"), c = t("./ShuShiCarb.Game"), s = t("./ShuShiCarb.Global"), p = cc._decorator, u = p.ccclass, l = p.property, h = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.nHome = null;
o.prfGame = null;
o.prfShopView = null;
o.lbTotalGold = null;
o.prfSetting = null;
return o;
}
e = o;
o.prototype.onLoad = function() {
e.instance = this;
s.default.totalGold = JSON.parse(cc.sys.localStorage.getItem("totalGold")) || 2e3;
this.updateTotalGold();
};
o.prototype.start = function() {};
o.prototype.onClickPlay = function() {
var t = cc.instantiate(this.prfGame).getComponent(c.default);
this.node.addChild(t.node);
this.nHome.getChildByName("playbtn").getComponent(cc.Button).interactable = !1;
};
o.prototype.onClickShopView = function() {
var t = cc.instantiate(this.prfShopView).getComponent(a.default);
this.node.addChild(t.node);
};
o.prototype.updateTotalGold = function() {
this.lbTotalGold.string = s.default.totalGold + " ";
};
o.prototype.onClickSettingView = function() {
var t = cc.instantiate(this.prfSetting);
this.node.addChild(t);
};
var e;
o.instance = null;
i([ l(cc.Node) ], o.prototype, "nHome", void 0);
i([ l(cc.Prefab) ], o.prototype, "prfGame", void 0);
i([ l(cc.Prefab) ], o.prototype, "prfShopView", void 0);
i([ l(cc.Label) ], o.prototype, "lbTotalGold", void 0);
i([ l(cc.Prefab) ], o.prototype, "prfSetting", void 0);
return e = i([ u ], o);
}(cc.Component);
e.default = h;
cc._RF.pop();
}, {
"./Game/Ui_Popup/Shop/ShuShiCarb.ShopView": "ShuShiCarb.ShopView",
"./ShuShiCarb.Game": "ShuShiCarb.Game",
"./ShuShiCarb.Global": "ShuShiCarb.Global"
} ],
"ShuShiCarb.Game": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "57e45IlTRNBoJ26llVySEfH", "ShuShiCarb.Game");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = t("./Game/ShuShiCarb.Food"), c = t("./Game/ShuShiCarb.Player"), s = t("./Game/Ui_Popup/ShuShiCrab.GameOver"), p = t("./ShuShiCarb.GameManager"), u = t("./ShuShiCarb.Global"), l = t("./ShuShiCarb.GoldFly"), h = cc._decorator, d = h.ccclass, f = h.property, y = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.prfOrder = null;
o.nHome = null;
o.listSpfFood = [];
o.nPlayer = null;
o.conveyor_1 = null;
o.conveyor_2 = null;
o.conveyor_3 = null;
o.prfFood = null;
o.lsFoodTable = [];
o.lbGold = null;
o.prfGameOver = null;
o.prgTime = null;
o.lbCountDown = null;
o.nGoldFly = null;
o.data = [ 0, 1, 2, 3, 4, 5 ];
o.playOrders = [];
o.hookObjects = [];
o.indexData = 0;
o.countCorrect = 0;
o.numberCountdown = 7;
o.countdownInterval = null;
o.isMove = !1;
o.player = null;
o.gold = 0;
o.duration = 60;
o.numberCountDown = 0;
o.isCountDown = !1;
return o;
}
e = o;
o.prototype.onLoad = function() {
e.instance = this;
this.randomOrderFood();
console.log(this.playOrders);
this.conveyor(this.conveyor_1);
this.conveyor(this.conveyor_2);
this.conveyor(this.conveyor_3);
this.renderOrderFood();
this.startCountDown();
};
o.prototype.randomOrderFood = function() {
this.playOrders = [];
for (var t = 0; t < 3; t++) {
var o = Math.floor(Math.random() * this.data.length), e = this.data[o];
this.playOrders.push(e);
}
};
o.prototype.startCountDown = function() {
this.isCountDown = !0;
this.numberCountDown = this.duration;
this.schedule(this.updateCountDown, 1);
};
o.prototype.updateCountDown = function() {
if (this.numberCountDown > 0) {
this.numberCountDown--;
this.updatePrgressTime();
this.lbCountDown.string = "00: " + this.numberCountDown + " ";
} else {
this.isCountDown = !1;
this.lbCountDown.string = "00:00";
this.gameOver(this.prfGameOver);
}
};
o.prototype.gameOver = function(t) {
var o = cc.instantiate(t).getComponent(s.default);
this.node.addChild(o.node);
};
o.prototype.updatePrgressTime = function() {
this.prgTime && (this.prgTime.progress -= 1 / this.duration);
};
o.prototype.renderOrderFood = function() {
this.player = cc.instantiate(this.prfOrder).getComponent(c.default);
for (var t = 0; t < this.player.listFood.length; t++) this.player.listFood[t].getComponent(cc.Sprite).spriteFrame = this.listSpfFood[this.playOrders[t]];
this.indexData++;
this.player.setData(this.indexData);
this.nPlayer.addChild(this.player.node);
};
o.prototype.checkCorrect = function() {
var t = this;
if (0 !== this.hookObjects.length) {
for (var o = this.hookObjects[0].id, e = !1, n = function(n) {
if (r.playOrders[n] === o && !r.player.listFood[n].getChildByName("tick").active) {
r.player.listFood[n].getChildByName("tick").active = !0;
r.nGoldFly.active = !0;
r.scheduleOnce(function() {
t.lsFoodTable[n].getComponent(cc.Sprite).spriteFrame = t.listSpfFood[o];
t.lsFoodTable[n].active = !0;
t.nGoldFly.active = !1;
}, .2);
r.gold += 5;
l.default.instance.playAnim();
r.updateGold();
e = !0;
r.countCorrect++;
return "break";
}
}, r = this, i = 0; i < this.playOrders.length && "break" !== n(i); i++) ;
this.lbGold.string = this.gold + " ";
console.log("Keo dung ne ", this.countCorrect);
e || console.log("sai me may roi");
this.countCorrect >= 3 && this.resetGame(!0);
} else console.log("hut het me roi");
};
o.prototype.updateGold = function() {
u.default.totalGold += this.gold;
cc.sys.localStorage.setItem("totalGold", JSON.stringify(u.default.totalGold));
};
o.prototype.conveyor = function(t) {
for (var o = 0; o < t.childrenCount; o++) {
var e = t.children[o].getComponent(a.default), n = Math.floor(Math.random() * this.data.length);
e.setData(this.data[n]);
}
};
o.prototype.removeNode = function(t, o) {
t.destroy();
for (var e = 0; e < this.hookObjects.length; e++) this.hookObjects[e].node == t && this.hookObjects[e].id == o && this.hookObjects.splice(e, 1);
};
o.prototype.resetFoodTable = function() {
for (var t = 0; t < this.lsFoodTable.length; t++) this.lsFoodTable[t].active = !1;
};
o.prototype.resetGame = function(t) {
var o = this;
this.indexData >= 8 && (this.indexData = 0);
console.log("Resetting game...");
this.countCorrect = 0;
var e = function() {
o.randomOrderFood();
o.renderOrderFood();
o.resetFoodTable();
};
t ? this.player.happyEffectPlayerMoveOut(e) : this.player.sadEffectPlayerMoveOut(e);
};
o.prototype.onclickBack = function() {
p.default.instance.updateTotalGold();
this.node.destroy();
p.default.instance.nHome.getChildByName("playbtn").getComponent(cc.Button).interactable = !0;
};
o.prototype.start = function() {};
var e;
o.instance = null;
i([ f(cc.Prefab) ], o.prototype, "prfOrder", void 0);
i([ f(cc.Node) ], o.prototype, "nHome", void 0);
i([ f(cc.SpriteFrame) ], o.prototype, "listSpfFood", void 0);
i([ f(cc.Node) ], o.prototype, "nPlayer", void 0);
i([ f(cc.Node) ], o.prototype, "conveyor_1", void 0);
i([ f(cc.Node) ], o.prototype, "conveyor_2", void 0);
i([ f(cc.Node) ], o.prototype, "conveyor_3", void 0);
i([ f(cc.Prefab) ], o.prototype, "prfFood", void 0);
i([ f(cc.Node) ], o.prototype, "lsFoodTable", void 0);
i([ f(cc.Label) ], o.prototype, "lbGold", void 0);
i([ f(cc.Prefab) ], o.prototype, "prfGameOver", void 0);
i([ f(cc.ProgressBar) ], o.prototype, "prgTime", void 0);
i([ f(cc.Label) ], o.prototype, "lbCountDown", void 0);
i([ f(cc.Node) ], o.prototype, "nGoldFly", void 0);
return e = i([ d ], o);
}(cc.Component);
e.default = y;
cc._RF.pop();
}, {
"./Game/ShuShiCarb.Food": "ShuShiCarb.Food",
"./Game/ShuShiCarb.Player": "ShuShiCarb.Player",
"./Game/Ui_Popup/ShuShiCrab.GameOver": "ShuShiCrab.GameOver",
"./ShuShiCarb.GameManager": "ShuShiCarb.GameManager",
"./ShuShiCarb.Global": "ShuShiCarb.Global",
"./ShuShiCarb.GoldFly": "ShuShiCarb.GoldFly"
} ],
"ShuShiCarb.Global": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "36872qNW/5Exbg45GQJNBd+", "ShuShiCarb.Global");
Object.defineProperty(e, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.soundManager = null;
t.totalGold = 0;
t.dataHook = [ {
price: 150,
speed: 1.5,
widthHook: 3,
isBuy: !1
}, {
price: 300,
speed: 2.5,
widthHook: 5,
isBuy: !1
}, {
price: 450,
speed: 3.5,
widthHook: 7,
isBuy: !1
}, {
price: 600,
speed: 4.5,
widthHook: 9,
isBuy: !1
}, {
price: 750,
speed: 5.5,
widthHook: 11,
isBuy: !1
} ];
t.speedHook = 20;
t.lengthHook = 35;
t.isMusicOn = !0;
t.isSoundOn = !0;
t.activeIndex = 0;
return t;
}();
e.default = n;
cc._RF.pop();
}, {} ],
"ShuShiCarb.GoldFly": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "c2cbe1ypNFMMKbHC8zXu7Db", "ShuShiCarb.GoldFly");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.startPoint = null;
o.endPoint = null;
o.coinPrefab = null;
o.coinPool = null;
return o;
}
e = o;
o.prototype.onLoad = function() {
e.instance = this;
this.coinPool = new cc.NodePool();
this.initCoinPool();
};
o.prototype.initCoinPool = function(t) {
void 0 === t && (t = 5);
for (var o = 0; o < t; o++) {
var e = cc.instantiate(this.coinPrefab);
this.coinPool.put(e);
}
};
o.prototype.playAnim = function() {
var t = this.startPoint.getPosition(), o = this.endPoint.getPosition();
this.playCoinFlyAnim(5, t, o);
};
o.prototype.playCoinFlyAnim = function(t, o, e, n) {
var r = this;
void 0 === n && (n = 130);
var i = this.coinPool.size(), a = i > t ? 0 : t - i;
this.initCoinPool(a);
var c = this.getCirclePoints(n, o, t).map(function(t) {
var n = r.coinPool.get();
n.setPosition(o);
r.node.addChild(n);
return {
node: n,
stPos: o,
mdPos: t,
edPos: e,
dis: t.sub(e).mag()
};
});
(c = c.sort(function(t, o) {
return t.dis - o.dis > 0 ? 1 : t.dis - o.dis < 0 ? -1 : 0;
})).forEach(function(t, o) {
t.node.runAction(cc.sequence(cc.moveTo(.3, t.mdPos), cc.delayTime(.01 * o), cc.moveTo(.5, t.edPos), cc.callFunc(function() {
r.coinPool.put(t.node);
})));
});
};
o.prototype.getCirclePoints = function(t, o, e, n) {
void 0 === n && (n = 60);
for (var r = [], i = Math.PI / 180 * Math.round(360 / e), a = 0; a < e; a++) {
var c = o.x + t * Math.sin(i * a), s = o.y + t * Math.cos(i * a);
r.unshift(cc.v3(c + Math.random() * n, s + Math.random() * n, 0));
}
return r;
};
var e;
o.instance = null;
i([ s(cc.Node) ], o.prototype, "startPoint", void 0);
i([ s(cc.Node) ], o.prototype, "endPoint", void 0);
i([ s(cc.Prefab) ], o.prototype, "coinPrefab", void 0);
return e = i([ c ], o);
}(cc.Component);
e.default = p;
cc._RF.pop();
}, {} ],
"ShuShiCarb.Hook": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "bd3e4+aHHVDjZsBsncFNldv", "ShuShiCarb.Hook");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = t("../ShuShiCarb.Global"), c = t("./ShuShiCarb.Player"), s = cc._decorator, p = s.ccclass, u = s.property, l = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.hookRope = null;
o.hookSpriteOpen = null;
o.hookSpriteClose = null;
o.hookHead = null;
o.hookSpeed = 30;
o.hookState = 0;
o.hookHeadBaseY = 80;
o.hookRopeBaseWidth = 100;
o.isClickable = !0;
return o;
}
e = o;
o.prototype.onLoad = function() {
e.instance = this;
cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
a.default.speedHook = JSON.parse(cc.sys.localStorage.getItem("speedHook")) || a.default.speedHook;
a.default.lengthHook = JSON.parse(cc.sys.localStorage.getItem("lengthHook")) || a.default.lengthHook;
console.log("speed ", a.default.speedHook);
};
o.prototype.initHook = function() {
this.hookHead.y = this.hookHeadBaseY;
this.hookRope.width = this.hookRopeBaseWidth;
};
o.prototype.start = function() {
this.initHook();
};
o.prototype.setHookState = function(t) {
this.hookState = t;
console.log("hookState ", t);
};
o.prototype.setHookSprite = function(t) {
this.hookSpriteClose.active = !t;
this.hookSpriteOpen.active = t;
};
o.prototype.onTouchEnd = function(t) {
if (this.isClickable && 0 === this.hookState && c.default.instace.isAtOrderPosition) {
this.hookState = 1;
this.mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(t.getLocationX()));
console.log(this.mousePos);
this.node.setPosition(this.mousePos);
}
};
o.prototype.moveHookHead = function(t) {
this.hookHead.y += t * a.default.speedHook;
this.hookRope.width += t * a.default.lengthHook;
};
o.prototype.onDestroy = function() {
cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onTouchEnd, this);
};
o.prototype.update = function(t) {
this.setHookSprite(!0);
switch (this.hookState) {
case 1:
if (this.hookHead.y) {
this.moveHookHead(a.default.speedHook * t);
this.hookHead.y >= 600 && (this.hookState = 2);
}
break;

case 2:
if (this.hookHead.y) {
this.moveHookHead(-a.default.speedHook * t);
this.hookHead.getComponent(cc.BoxCollider).enabled = !1;
if (this.hookHead.y < 0) {
this.hookHead.y = 100;
this.hookRope.width = 100;
this.hookState = 0;
this.hookHead.getComponent(cc.BoxCollider).enabled = !0;
this.disableClickTemporarily(.2);
}
}
this.setHookSprite(!1);
}
};
o.prototype.disableClickTemporarily = function(t) {
var o = this;
this.isClickable = !1;
this.scheduleOnce(function() {
o.isClickable = !0;
}, t);
};
var e;
o.instance = null;
i([ u(cc.Node) ], o.prototype, "hookRope", void 0);
i([ u(cc.Node) ], o.prototype, "hookSpriteOpen", void 0);
i([ u(cc.Node) ], o.prototype, "hookSpriteClose", void 0);
i([ u(cc.Node) ], o.prototype, "hookHead", void 0);
return e = i([ p ], o);
}(cc.Component);
e.default = l;
cc._RF.pop();
}, {
"../ShuShiCarb.Global": "ShuShiCarb.Global",
"./ShuShiCarb.Player": "ShuShiCarb.Player"
} ],
"ShuShiCarb.ItemHook": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "dc267ASAKxLjZBm3npC1v+1", "ShuShiCarb.ItemHook");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = t("../../../ShuShiCarb.GameManager"), c = t("../../../ShuShiCarb.Global"), s = t("./ShuShiCarb.ShopView"), p = cc._decorator, u = p.ccclass, l = p.property, h = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.lbPrice = null;
o.nBtnBuy = null;
o.nStateBuy = null;
o.nCheckmask = null;
o.lbLeverSpeedOld = null;
o.lbLeverSpeedNew = null;
o.index = 0;
o.isCheck = !1;
o._data = null;
return o;
}
o.prototype.setData = function(t) {
this._data = t;
this.nStateBuy.active = t.isBuy;
console.log("data ", t);
};
o.prototype.onLoad = function() {
console.log(c.default.dataHook[this.index].price);
this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndex")) || 0;
this.loadPurchaseState();
this.checkClick();
this.updatePrice(this.index);
};
o.prototype.loadPurchaseState = function() {
for (var t = JSON.parse(cc.sys.localStorage.getItem("purchaseData")) || [], o = 0; o < c.default.dataHook.length; o++) if (t[o]) {
c.default.dataHook[o].isBuy = t[o].isBuy;
c.default.dataHook[o].speed = t[o].speed;
this.nStateBuy.children[o].active = t[o].isBuy;
}
};
o.prototype.savePurchaseState = function() {
var t = c.default.dataHook.map(function(t) {
return {
isBuy: t.isBuy,
speed: t.speed
};
});
cc.sys.localStorage.setItem("purchaseData", JSON.stringify(t));
cc.sys.localStorage.setItem("activeIndex", JSON.stringify(c.default.activeIndex));
cc.sys.localStorage.setItem("itemIndex", this.index.toString());
cc.sys.localStorage.setItem("speedHook", JSON.stringify(c.default.speedHook));
cc.sys.localStorage.setItem("lengthHook", JSON.stringify(c.default.lengthHook));
};
o.prototype.checkClick = function() {
if (c.default.totalGold >= c.default.dataHook[this.index].price) {
this.nCheckmask.active = !1;
this.isCheck = !0;
} else {
this.nCheckmask.active = !0;
this.nBtnBuy.getComponent(cc.Toggle).interactable = !1;
}
};
o.prototype.onClickBuy = function() {
if (this.isCheck && this.index < c.default.lengthHook) {
c.default.dataHook[this.index].isBuy = !0;
c.default.totalGold -= c.default.dataHook[this.index].price;
c.default.speedHook += c.default.dataHook[this.index].speed;
c.default.lengthHook += c.default.dataHook[this.index].widthHook;
this.nStateBuy.children[this.index].active = c.default.dataHook[this.index].isBuy;
c.default.activeIndex = this.index;
this.savePurchaseState();
this.index++;
this.savePurchaseState();
console.log(this.index);
this.checkClick();
s.default.instace.updateGold();
a.default.instance.updateTotalGold();
this.updatePrice(this.index);
console.log("data Hoook ", c.default.dataHook);
}
};
o.prototype.updatePrice = function(t) {
this.lbPrice.string = c.default.dataHook[t].price + " ";
this.lbLeverSpeedNew.string = c.default.dataHook[t].speed + 1 + " ";
this.lbLeverSpeedOld.string = c.default.dataHook[t].speed + "  -> ";
};
o.prototype.start = function() {};
i([ l(cc.Label) ], o.prototype, "lbPrice", void 0);
i([ l(cc.Node) ], o.prototype, "nBtnBuy", void 0);
i([ l(cc.Node) ], o.prototype, "nStateBuy", void 0);
i([ l(cc.Node) ], o.prototype, "nCheckmask", void 0);
i([ l(cc.Label) ], o.prototype, "lbLeverSpeedOld", void 0);
i([ l(cc.Label) ], o.prototype, "lbLeverSpeedNew", void 0);
return i([ u ], o);
}(cc.Component);
e.default = h;
cc._RF.pop();
}, {
"../../../ShuShiCarb.GameManager": "ShuShiCarb.GameManager",
"../../../ShuShiCarb.Global": "ShuShiCarb.Global",
"./ShuShiCarb.ShopView": "ShuShiCarb.ShopView"
} ],
"ShuShiCarb.Player": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "3894fyXWvVMl4qDb2W/ERoN", "ShuShiCarb.Player");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = t("../ShuShiCarb.Game"), c = cc._decorator, s = c.ccclass, p = c.property, u = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.char = null;
o.listFood = [];
o.nchat = null;
o.listCharacter = [];
o.prgBarCountDown = null;
o.lbCountDown = null;
o.nTime = null;
o.duration = 10;
o.numberCountDown = 0;
o.isCountDown = !1;
o.isMove = !1;
o.isAtOrderPosition = !1;
return o;
}
e = o;
o.prototype.onLoad = function() {
e.instace = this;
};
o.prototype.setData = function(t) {
this.char.skeletonData = this.listCharacter[t];
};
o.prototype.startCountDown = function() {
this.isCountDown = !0;
this.numberCountDown = this.duration;
this.schedule(this.updateCountDown, 1);
};
o.prototype.updateCountDown = function() {
if (this.numberCountDown > 0) {
this.numberCountDown--;
this.updateProgressBar();
this.lbCountDown.string = this.numberCountDown + "";
} else {
this.isCountDown = !1;
a.default.instance.resetGame(!1);
console.log("Thua");
}
};
o.prototype.updateProgressBar = function() {
this.prgBarCountDown && (this.prgBarCountDown.progress -= .1);
};
o.prototype.effectShow = function() {
var t = this;
this.char.animation = "move";
this.nchat.active = !1;
this.nTime.active = !1;
cc.tween(this.char.node).to(2, {
x: 0
}).call(function() {
t.char.animation = "idle";
t.nchat.active = !0;
t.nTime.active = !0;
t.isAtOrderPosition = !0;
t.startCountDown();
}).start();
};
o.prototype.happyEffectPlayerMoveOut = function(t) {
var o = this;
this.char.animation = "happy";
cc.tween(this.char.node).to(1.5, {
x: 600
}).call(function() {
o.node.destroy();
t();
}).start();
};
o.prototype.sadEffectPlayerMoveOut = function(t) {
var o = this;
this.char.animation = "discomfort";
cc.tween(this.char.node).to(1.5, {
x: 600
}).call(function() {
o.node.destroy();
t();
}).start();
};
o.prototype.start = function() {
this.effectShow();
};
var e;
o.instace = null;
i([ p(sp.Skeleton) ], o.prototype, "char", void 0);
i([ p(cc.Node) ], o.prototype, "listFood", void 0);
i([ p(cc.Node) ], o.prototype, "nchat", void 0);
i([ p(sp.SkeletonData) ], o.prototype, "listCharacter", void 0);
i([ p(cc.ProgressBar) ], o.prototype, "prgBarCountDown", void 0);
i([ p(cc.Label) ], o.prototype, "lbCountDown", void 0);
i([ p(cc.Node) ], o.prototype, "nTime", void 0);
return e = i([ s ], o);
}(cc.Component);
e.default = u;
cc._RF.pop();
}, {
"../ShuShiCarb.Game": "ShuShiCarb.Game"
} ],
"ShuShiCarb.SettingView": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "2f0fd3epKRG7byTyvDHzrTW", "ShuShiCarb.SettingView");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = t("../../ShuShiCarb.Global"), c = cc._decorator, s = c.ccclass, p = c.property, u = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.sfMusic = [];
o.spMusic = null;
o.spSound = null;
return o;
}
o.prototype.start = function() {
this.updateStatus();
};
o.prototype.updateStatus = function() {
a.default.isSoundOn ? this.spSound.spriteFrame = this.sfMusic[0] : this.spSound.spriteFrame = this.sfMusic[1];
a.default.isMusicOn ? this.spMusic.spriteFrame = this.sfMusic[0] : this.spMusic.spriteFrame = this.sfMusic[1];
};
o.prototype.onClickSound = function() {
a.default.soundManager && a.default.soundManager.playSoundClick();
a.default.isSoundOn = !a.default.isSoundOn;
this.updateStatus();
};
o.prototype.onClickMusic = function() {
a.default.soundManager && a.default.soundManager.playSoundClick();
a.default.isMusicOn = !a.default.isMusicOn;
this.updateStatus();
a.default.soundManager.updateMusicState();
};
o.prototype.onClickClose = function() {
this.node.destroy();
};
i([ p(cc.SpriteFrame) ], o.prototype, "sfMusic", void 0);
i([ p(cc.Sprite) ], o.prototype, "spMusic", void 0);
i([ p(cc.Sprite) ], o.prototype, "spSound", void 0);
return i([ s ], o);
}(cc.Component);
e.default = u;
cc._RF.pop();
}, {
"../../ShuShiCarb.Global": "ShuShiCarb.Global"
} ],
"ShuShiCarb.ShopView": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "7e44aVyW49Ht7kWO/WUQKjk", "ShuShiCarb.ShopView");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = t("../../../ShuShiCarb.Global"), c = t("./ShuShiCarb.ItemHook"), s = cc._decorator, p = s.ccclass, u = s.property, l = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.lbGold = null;
o.nItemSpeedHook = null;
o.prfItemSpeedHook = null;
o.listDataHook = [];
return o;
}
e = o;
o.prototype.onLoad = function() {
e.instace = this;
this.itemSpeedHook();
this.updateGold();
};
o.prototype.start = function() {};
o.prototype.itemSpeedHook = function() {
var t = cc.instantiate(this.prfItemSpeedHook).getComponent(c.default);
this.nItemSpeedHook.addChild(t.node);
};
o.prototype.updateGold = function() {
this.lbGold.string = a.default.totalGold + " ";
};
o.prototype.onClickClose = function() {
this.node.destroy();
};
var e;
o.instace = null;
i([ u(cc.Label) ], o.prototype, "lbGold", void 0);
i([ u(cc.Node) ], o.prototype, "nItemSpeedHook", void 0);
i([ u(cc.Prefab) ], o.prototype, "prfItemSpeedHook", void 0);
return e = i([ p ], o);
}(cc.Component);
e.default = l;
cc._RF.pop();
}, {
"../../../ShuShiCarb.Global": "ShuShiCarb.Global",
"./ShuShiCarb.ItemHook": "ShuShiCarb.ItemHook"
} ],
"ShuShiCarb.SoundManager": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "e37ca0PmppMTZq2Fx30je4G", "ShuShiCarb.SoundManager");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = t("./ShuShiCarb.Global"), c = cc._decorator, s = c.ccclass, p = c.property, u = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.music_background = null;
o.audio_sfx = null;
o.audio_score = null;
o.sound_click = null;
o.sound_bomb = null;
o.add_score = null;
o.add_star = null;
o.game_over = null;
o.pass_level = null;
o.ball_break = null;
return o;
}
o.prototype.onLoad = function() {
a.default.soundManager = this;
};
o.prototype.playSoundClick = function() {
this.playSoundSFX(this.sound_click);
};
o.prototype.playSoundLose = function() {
this.playSoundSFX(this.ball_break);
};
o.prototype.playSoundBomb = function() {
this.playSoundSFX(this.sound_bomb);
};
o.prototype.playSoundAddScore = function() {
this.playSoundScore(this.add_score);
};
o.prototype.playSoundAddStar = function() {
this.playSoundScore(this.add_star);
};
o.prototype.playSoundPassLevel = function() {
this.playSoundSFX(this.pass_level);
};
o.prototype.playSoundGameOver = function() {
this.playSoundSFX(this.game_over);
};
o.prototype.playSoundSFX = function(t) {
if (a.default.isSoundOn) {
this.audio_sfx.clip = t;
this.audio_sfx.play();
}
};
o.prototype.playSoundScore = function(t) {
if (a.default.isSoundOn) {
this.audio_score.clip = t;
this.audio_score.play();
}
};
o.prototype.updateMusicState = function() {
a.default.isMusicOn ? this.music_background.play() : this.music_background.stop();
};
i([ p(cc.AudioSource) ], o.prototype, "music_background", void 0);
i([ p(cc.AudioSource) ], o.prototype, "audio_sfx", void 0);
i([ p(cc.AudioSource) ], o.prototype, "audio_score", void 0);
i([ p({
type: cc.AudioClip
}) ], o.prototype, "sound_click", void 0);
i([ p({
type: cc.AudioClip
}) ], o.prototype, "sound_bomb", void 0);
i([ p({
type: cc.AudioClip
}) ], o.prototype, "add_score", void 0);
i([ p({
type: cc.AudioClip
}) ], o.prototype, "add_star", void 0);
i([ p({
type: cc.AudioClip
}) ], o.prototype, "game_over", void 0);
i([ p({
type: cc.AudioClip
}) ], o.prototype, "pass_level", void 0);
i([ p({
type: cc.AudioClip
}) ], o.prototype, "ball_break", void 0);
return i([ s ], o);
}(cc.Component);
e.default = u;
cc._RF.pop();
}, {
"./ShuShiCarb.Global": "ShuShiCarb.Global"
} ],
"ShuShiCard.CollierManager": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "07571YrTBpHQZ4RW7KNcoYv", "ShuShiCard.CollierManager");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = t("../ShuShiCarb.Game"), c = t("./ShuShiCarb.Conveyor"), s = t("./ShuShiCarb.Food"), p = t("./ShuShiCarb.Hook"), u = cc._decorator, l = u.ccclass, h = (u.property, 
function(t) {
r(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
o.prototype.onCollisionEnter = function(t) {
var o = this.node.getComponent(s.default), e = o.id;
console.log(o);
if (1 == t.tag) {
var n = new cc.Node();
n.parent = this.node.parent;
n.scale = .5;
n.addComponent(cc.Sprite).spriteFrame = a.default.instance.listSpfFood[e];
n.setParent(p.default.instance.hookHead);
n.setPosition(cc.v2(0, -25));
a.default.instance.hookObjects.push({
node: n,
id: e
});
console.log("obj ", a.default.instance.hookObjects);
p.default.instance.setHookState(2);
o.isCheck = 1;
a.default.instance.checkCorrect();
this.node.getComponent(c.default).resetSate(!1);
this.scheduleOnce(function() {
a.default.instance.hookObjects = a.default.instance.hookObjects.filter(function(t) {
return t.node !== n;
});
n.destroy();
}, .5);
}
};
o.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
};
o.prototype.start = function() {};
return i([ l ], o);
}(cc.Component));
e.default = h;
cc._RF.pop();
}, {
"../ShuShiCarb.Game": "ShuShiCarb.Game",
"./ShuShiCarb.Conveyor": "ShuShiCarb.Conveyor",
"./ShuShiCarb.Food": "ShuShiCarb.Food",
"./ShuShiCarb.Hook": "ShuShiCarb.Hook"
} ],
"ShuShiCrab.GameOver": [ function(t, o, e) {
"use strict";
cc._RF.push(o, "44367/LVl9AqbqS+KLuBWW4", "ShuShiCrab.GameOver");
var n, r = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, n) {
var r, i = arguments.length, a = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, n); else for (var c = t.length - 1; c >= 0; c--) (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, e, a) : r(o, e)) || a);
return i > 3 && a && Object.defineProperty(o, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var a = t("../../ShuShiCarb.Game"), c = t("../../ShuShiCarb.GameManager"), s = cc._decorator, p = s.ccclass, u = s.property, l = function(t) {
r(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.lbGold = null;
return o;
}
o.prototype.open = function() {
cc.tween(this.node).to(.2, {
scale: 1
}).start();
};
o.prototype.onHome = function() {
c.default.instance.updateTotalGold();
this.stopGamePlay();
};
o.prototype.goldEnd = function() {
this.lbGold.string = a.default.instance.gold + " ";
};
o.prototype.stopGamePlay = function() {
var t = cc.Canvas.instance.node.getChildByName("Main");
c.default.instance.nHome.getChildByName("playbtn").getComponent(cc.Button).interactable = !0;
t.destroy();
};
o.prototype.onLoad = function() {
this.open();
this.goldEnd();
};
i([ u(cc.Label) ], o.prototype, "lbGold", void 0);
return i([ p ], o);
}(cc.Component);
e.default = l;
cc._RF.pop();
}, {
"../../ShuShiCarb.Game": "ShuShiCarb.Game",
"../../ShuShiCarb.GameManager": "ShuShiCarb.GameManager"
} ]
}, {}, [ "ShuShiCarb.Conveyor", "ShuShiCarb.Food", "ShuShiCarb.Hook", "ShuShiCarb.Player", "ShuShiCard.CollierManager", "ShuShiCarb.ItemHook", "ShuShiCarb.ShopView", "ShuShiCarb.SettingView", "ShuShiCrab.GameOver", "ShuShiCarb.Game", "ShuShiCarb.GameManager", "ShuShiCarb.Global", "ShuShiCarb.GoldFly", "ShuShiCarb.SoundManager" ]);