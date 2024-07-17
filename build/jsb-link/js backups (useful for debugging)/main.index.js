window.__require = function t(e, o, n) {
function i(a, c) {
if (!o[a]) {
if (!e[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var u = o[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return i(e[a][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
"ShuShiCarb.Conveyor": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "feab3o200JDbYSI7NRNPnpz", "ShuShiCarb.Conveyor");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.idFood = 0;
e.isMove = !1;
return e;
}
e.prototype.update = function() {
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
e.prototype.resetPos = function() {
this.node.x = -700;
};
e.prototype.resetSate = function(t) {
this.node.getComponent(cc.Sprite).enabled = t;
this.node.getComponent(cc.BoxCollider).enabled = t;
};
r([ s ], e.prototype, "idFood", void 0);
return r([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"ShuShiCarb.Food": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1814d5TiQlDEohqTgqXx2zV", "ShuShiCarb.Food");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../ShuShiCarb.Game"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nFood = null;
e.id = 0;
e.isCheck = 0;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.setData = function(t) {
this.id = t;
this.nFood.getComponent(cc.Sprite).spriteFrame = 999 === t ? a.default.instance.listSpfFood[6] : a.default.instance.listSpfFood[t];
};
e.prototype.update = function() {};
r([ l(cc.Node) ], e.prototype, "nFood", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../ShuShiCarb.Game": "ShuShiCarb.Game"
} ],
"ShuShiCarb.GameManager": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b4f8btwtChDJ7eWDTDf8uUO", "ShuShiCarb.GameManager");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./Game/Ui_Popup/Shop/ShuShiCarb.ShopView"), c = t("./ShuShiCarb.Game"), s = t("./ShuShiCarb.Global"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nHome = null;
e.prfGame = null;
e.prfShopView = null;
e.lbTotalGold = null;
e.prfSetting = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
s.default.totalGold = JSON.parse(cc.sys.localStorage.getItem("totalGold")) || 0;
this.updateTotalGold();
};
e.prototype.start = function() {};
e.prototype.onClickPlay = function() {
var t = cc.instantiate(this.prfGame).getComponent(c.default);
this.node.addChild(t.node);
this.nHome.getChildByName("playbtn").getComponent(cc.Button).interactable = !1;
this.nHome.getChildByName("shop").getComponent(cc.Button).interactable = !1;
this.nHome.getChildByName("setting").getComponent(cc.Button).interactable = !1;
};
e.prototype.onClickShopView = function() {
var t = cc.instantiate(this.prfShopView).getComponent(a.default);
this.node.addChild(t.node);
};
e.prototype.updateTotalGold = function() {
this.lbTotalGold.string = s.default.totalGold + " ";
cc.sys.localStorage.setItem("totalGold", JSON.stringify(s.default.totalGold));
};
e.prototype.onClickSettingView = function() {
var t = cc.instantiate(this.prfSetting);
this.node.addChild(t);
};
var o;
e.instance = null;
r([ p(cc.Node) ], e.prototype, "nHome", void 0);
r([ p(cc.Prefab) ], e.prototype, "prfGame", void 0);
r([ p(cc.Prefab) ], e.prototype, "prfShopView", void 0);
r([ p(cc.Label) ], e.prototype, "lbTotalGold", void 0);
r([ p(cc.Prefab) ], e.prototype, "prfSetting", void 0);
return o = r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./Game/Ui_Popup/Shop/ShuShiCarb.ShopView": "ShuShiCarb.ShopView",
"./ShuShiCarb.Game": "ShuShiCarb.Game",
"./ShuShiCarb.Global": "ShuShiCarb.Global"
} ],
"ShuShiCarb.Game": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "57e45IlTRNBoJ26llVySEfH", "ShuShiCarb.Game");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./Game/ShuShiCarb.Food"), c = t("./Game/ShuShiCarb.Player"), s = t("./Game/Ui_Popup/ShuShiCrab.GameOver"), l = t("./ShuShiCarb.GameManager"), u = t("./ShuShiCarb.Global"), p = t("./ShuShiCarb.GoldFly"), d = cc._decorator, h = d.ccclass, f = d.property, y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfOrder = null;
e.nHome = null;
e.listSpfFood = [];
e.nPlayer = null;
e.conveyor_1 = null;
e.conveyor_2 = null;
e.conveyor_3 = null;
e.prfFood = null;
e.lsFoodTable = [];
e.lbGold = null;
e.prfGameOver = null;
e.prgTime = null;
e.lbCountDown = null;
e.nGoldFly = null;
e.nCheckFalse = null;
e.data = [ 0, 1, 2, 3, 4, 5 ];
e.playOrders = [];
e.hookObjects = [];
e.indexData = 0;
e.countCorrect = 0;
e.countdownInterval = null;
e.isMove = !1;
e.player = null;
e.gold = 0;
e.duration = 60;
e.numberCountDown = 0;
e.isCountDown = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.randomOrderFood();
console.log(this.playOrders);
this.conveyor(this.conveyor_1);
this.conveyor(this.conveyor_2);
this.conveyor(this.conveyor_3);
this.renderOrderFood();
this.startCountDown();
var t = JSON.parse(cc.sys.localStorage.getItem("checkBagMoney"));
null !== t && (u.default.checkBagMoney = t);
u.default.moneyBag = JSON.parse(cc.sys.localStorage.getItem("moneyBag")) || u.default.moneyBag;
console.log(u.default.checkBagMoney);
console.log("Tien tui qua ", u.default.moneyBag);
};
e.prototype.randomOrderFood = function() {
this.playOrders = [];
for (var t = 0; t < 3; t++) {
var e = Math.floor(Math.random() * this.data.length), o = this.data[e];
this.playOrders.push(o);
}
};
e.prototype.startCountDown = function() {
this.isCountDown = !0;
this.numberCountDown = this.duration;
this.schedule(this.updateCountDown, 1);
};
e.prototype.updateCountDown = function() {
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
e.prototype.gameOver = function(t) {
var e = cc.instantiate(t).getComponent(s.default);
this.node.addChild(e.node);
};
e.prototype.updatePrgressTime = function() {
this.prgTime && (this.prgTime.progress -= 1 / this.duration);
};
e.prototype.renderOrderFood = function() {
this.player = cc.instantiate(this.prfOrder).getComponent(c.default);
for (var t = 0; t < this.player.listFood.length; t++) this.player.listFood[t].getComponent(cc.Sprite).spriteFrame = this.listSpfFood[this.playOrders[t]];
this.indexData++;
this.player.setData(this.indexData);
this.nPlayer.addChild(this.player.node);
};
e.prototype.checkCorrect = function() {
var t = this;
if (0 !== this.hookObjects.length) {
var e = this.hookObjects[0].id;
if (999 === e) {
this.gold += u.default.moneyBag;
this.updateGold(u.default.moneyBag);
} else for (var o = function(o) {
if (n.playOrders[o] === e && !n.player.listFood[o].getChildByName("tick").active) {
n.player.listFood[o].getChildByName("tick").active = !0;
n.nGoldFly.active = !0;
n.scheduleOnce(function() {
t.lsFoodTable[o].getComponent(cc.Sprite).spriteFrame = t.listSpfFood[e];
t.lsFoodTable[o].active = !0;
t.nGoldFly.active = !1;
}, .2);
p.default.instance.playAnim();
n.gold += 5;
n.updateGold(5);
n.countCorrect++;
return "break";
}
}, n = this, i = 0; i < this.playOrders.length && "break" !== o(i); i++) ;
this.lbGold.string = this.gold + " ";
this.countCorrect >= 3 && this.resetGame(!0);
}
};
e.prototype.updateGold = function(t) {
u.default.totalGold += t;
console.log("Tong tien ", u.default.totalGold);
cc.sys.localStorage.setItem("totalGold", JSON.stringify(u.default.totalGold));
};
e.prototype.conveyor = function(t) {
for (var e = 0; e < t.childrenCount; e++) {
var o = t.children[e].getComponent(a.default);
if (1 == u.default.checkBagMoney && 5 === e) o.setData(999); else {
var n = Math.floor(Math.random() * this.data.length);
o.setData(this.data[n]);
}
}
};
e.prototype.removeNode = function(t, e) {
t.destroy();
for (var o = 0; o < this.hookObjects.length; o++) this.hookObjects[o].node == t && this.hookObjects[o].id == e && this.hookObjects.splice(o, 1);
};
e.prototype.resetFoodTable = function() {
for (var t = 0; t < this.lsFoodTable.length; t++) this.lsFoodTable[t].active = !1;
};
e.prototype.resetGame = function(t) {
var e = this;
this.indexData >= 8 && (this.indexData = 0);
console.log("Resetting game...");
this.countCorrect = 0;
var o = function() {
e.randomOrderFood();
e.renderOrderFood();
e.resetFoodTable();
};
t ? this.player.happyEffectPlayerMoveOut(o) : this.player.sadEffectPlayerMoveOut(o);
};
e.prototype.onclickBack = function() {
l.default.instance.updateTotalGold();
this.node.destroy();
l.default.instance.nHome.getChildByName("playbtn").getComponent(cc.Button).interactable = !0;
l.default.instance.nHome.getChildByName("shop").getComponent(cc.Button).interactable = !0;
l.default.instance.nHome.getChildByName("setting").getComponent(cc.Button).interactable = !0;
};
e.prototype.start = function() {};
var o;
e.instance = null;
r([ f(cc.Prefab) ], e.prototype, "prfOrder", void 0);
r([ f(cc.Node) ], e.prototype, "nHome", void 0);
r([ f(cc.SpriteFrame) ], e.prototype, "listSpfFood", void 0);
r([ f(cc.Node) ], e.prototype, "nPlayer", void 0);
r([ f(cc.Node) ], e.prototype, "conveyor_1", void 0);
r([ f(cc.Node) ], e.prototype, "conveyor_2", void 0);
r([ f(cc.Node) ], e.prototype, "conveyor_3", void 0);
r([ f(cc.Prefab) ], e.prototype, "prfFood", void 0);
r([ f(cc.Node) ], e.prototype, "lsFoodTable", void 0);
r([ f(cc.Label) ], e.prototype, "lbGold", void 0);
r([ f(cc.Prefab) ], e.prototype, "prfGameOver", void 0);
r([ f(cc.ProgressBar) ], e.prototype, "prgTime", void 0);
r([ f(cc.Label) ], e.prototype, "lbCountDown", void 0);
r([ f(cc.Node) ], e.prototype, "nGoldFly", void 0);
r([ f(cc.Node) ], e.prototype, "nCheckFalse", void 0);
return o = r([ h ], e);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"./Game/ShuShiCarb.Food": "ShuShiCarb.Food",
"./Game/ShuShiCarb.Player": "ShuShiCarb.Player",
"./Game/Ui_Popup/ShuShiCrab.GameOver": "ShuShiCrab.GameOver",
"./ShuShiCarb.GameManager": "ShuShiCarb.GameManager",
"./ShuShiCarb.Global": "ShuShiCarb.Global",
"./ShuShiCarb.GoldFly": "ShuShiCarb.GoldFly"
} ],
"ShuShiCarb.Global": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "36872qNW/5Exbg45GQJNBd+", "ShuShiCarb.Global");
Object.defineProperty(o, "__esModule", {
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
t.dataBagMoney = [ {
price: 120,
gold: 3,
isBuy: !1
}, {
price: 250,
gold: 5,
isBuy: !1
}, {
price: 320,
gold: 7,
isBuy: !1
}, {
price: 450,
gold: 9,
isBuy: !1
}, {
price: 750,
gold: 11,
isBuy: !1
} ];
t.checkBagMoney = !1;
t.speedHook = 20;
t.moneyBag = 20;
t.lengthHook = 35;
t.isMusicOn = !0;
t.isSoundOn = !0;
t.activeIndex = 0;
t.activeIndexMoneyBag = 0;
return t;
}();
o.default = n;
cc._RF.pop();
}, {} ],
"ShuShiCarb.GoldFly": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c2cbe1ypNFMMKbHC8zXu7Db", "ShuShiCarb.GoldFly");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeLbFly = null;
e.startPoint = null;
e.endPoint = null;
e.coinPrefab = null;
e.coinPool = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.coinPool = new cc.NodePool();
this.initCoinPool();
};
e.prototype.initCoinPool = function(t) {
void 0 === t && (t = 5);
for (var e = 0; e < t; e++) {
var o = cc.instantiate(this.coinPrefab);
this.coinPool.put(o);
}
};
e.prototype.playAnim = function() {
var t = this, e = this.startPoint.getPosition(), o = this.endPoint.getPosition();
this.playCoinFlyAnim(5, e, o);
this.nodeLbFly.active = !0;
cc.tween(this.nodeLbFly).to(.8, {
y: o.y
}).call(function() {
t.nodeLbFly.y = 0;
t.nodeLbFly.active = !1;
}).start();
};
e.prototype.playCoinFlyAnim = function(t, e, o, n) {
var i = this;
void 0 === n && (n = 130);
var r = this.coinPool.size(), a = r > t ? 0 : t - r;
this.initCoinPool(a);
var c = this.getCirclePoints(n, e, t).map(function(t) {
var n = i.coinPool.get();
n.setPosition(e);
i.node.addChild(n);
return {
node: n,
stPos: e,
mdPos: t,
edPos: o,
dis: t.sub(o).mag()
};
});
(c = c.sort(function(t, e) {
return t.dis - e.dis > 0 ? 1 : t.dis - e.dis < 0 ? -1 : 0;
})).forEach(function(t, e) {
t.node.runAction(cc.sequence(cc.moveTo(.3, t.mdPos), cc.delayTime(.01 * e), cc.moveTo(.5, t.edPos), cc.callFunc(function() {
i.coinPool.put(t.node);
})));
});
};
e.prototype.getCirclePoints = function(t, e, o, n) {
void 0 === n && (n = 60);
for (var i = [], r = Math.PI / 180 * Math.round(360 / o), a = 0; a < o; a++) {
var c = e.x + t * Math.sin(r * a), s = e.y + t * Math.cos(r * a);
i.unshift(cc.v3(c + Math.random() * n, s + Math.random() * n, 0));
}
return i;
};
var o;
e.instance = null;
r([ s(cc.Node) ], e.prototype, "nodeLbFly", void 0);
r([ s(cc.Node) ], e.prototype, "startPoint", void 0);
r([ s(cc.Node) ], e.prototype, "endPoint", void 0);
r([ s(cc.Prefab) ], e.prototype, "coinPrefab", void 0);
return o = r([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"ShuShiCarb.Hook": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bd3e4+aHHVDjZsBsncFNldv", "ShuShiCarb.Hook");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../ShuShiCarb.Global"), c = t("./ShuShiCarb.Player"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.hookRope = null;
e.hookSpriteOpen = null;
e.hookSpriteClose = null;
e.hookHead = null;
e.hookSpeed = 30;
e.hookState = 0;
e.hookHeadBaseY = 80;
e.hookRopeBaseWidth = 100;
e.isClickable = !0;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
a.default.speedHook = JSON.parse(cc.sys.localStorage.getItem("speedHook")) || a.default.speedHook;
a.default.lengthHook = JSON.parse(cc.sys.localStorage.getItem("lengthHook")) || a.default.lengthHook;
};
e.prototype.initHook = function() {
this.hookHead.y = this.hookHeadBaseY;
this.hookRope.width = this.hookRopeBaseWidth;
};
e.prototype.start = function() {
this.initHook();
};
e.prototype.setHookState = function(t) {
this.hookState = t;
};
e.prototype.setHookSprite = function(t) {
this.hookSpriteClose.active = !t;
this.hookSpriteOpen.active = t;
};
e.prototype.onTouchEnd = function(t) {
if (this.isClickable && 0 === this.hookState && c.default.instace.isAtOrderPosition) {
this.hookState = 1;
this.mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(t.getLocationX()));
this.node.setPosition(this.mousePos);
}
};
e.prototype.moveHookHead = function(t) {
this.hookHead.y += t * a.default.speedHook;
this.hookRope.width += t * a.default.lengthHook;
};
e.prototype.onDestroy = function() {
cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onTouchEnd, this);
};
e.prototype.update = function(t) {
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
e.prototype.disableClickTemporarily = function(t) {
var e = this;
this.isClickable = !1;
this.scheduleOnce(function() {
e.isClickable = !0;
}, t);
};
var o;
e.instance = null;
r([ u(cc.Node) ], e.prototype, "hookRope", void 0);
r([ u(cc.Node) ], e.prototype, "hookSpriteOpen", void 0);
r([ u(cc.Node) ], e.prototype, "hookSpriteClose", void 0);
r([ u(cc.Node) ], e.prototype, "hookHead", void 0);
return o = r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../ShuShiCarb.Global": "ShuShiCarb.Global",
"./ShuShiCarb.Player": "ShuShiCarb.Player"
} ],
"ShuShiCarb.ItemHook": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "dc267ASAKxLjZBm3npC1v+1", "ShuShiCarb.ItemHook");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../ShuShiCarb.GameManager"), c = t("../../../ShuShiCarb.Global"), s = t("./ShuShiCarb.ShopView"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbPrice = null;
e.nBtnBuy = null;
e.nStateBuy = null;
e.nCheckmask = null;
e.lbLeverSpeedOld = null;
e.lbLeverSpeedNew = null;
e.index = 0;
e.isCheck = !1;
e._data = null;
return e;
}
e.prototype.setData = function(t) {
this._data = t;
this.nStateBuy.active = t.isBuy;
console.log("data ", t);
};
e.prototype.onLoad = function() {
this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndex")) || 0;
this.loadPurchaseState();
this.checkClick();
this.updatePrice(this.index);
};
e.prototype.loadPurchaseState = function() {
for (var t = JSON.parse(cc.sys.localStorage.getItem("purchaseData")) || [], e = 0; e < c.default.dataHook.length; e++) if (t[e]) {
c.default.dataHook[e].isBuy = t[e].isBuy;
c.default.dataHook[e].speed = t[e].speed;
this.nStateBuy.children[e].active = t[e].isBuy;
}
};
e.prototype.savePurchaseState = function() {
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
e.prototype.checkClick = function() {
if (this.index < c.default.dataHook.length) if (c.default.totalGold >= c.default.dataHook[this.index].price) {
this.nCheckmask.active = !1;
this.isCheck = !0;
} else {
this.nCheckmask.active = !0;
this.nBtnBuy.getComponent(cc.Toggle).interactable = !1;
}
};
e.prototype.onClickBuy = function() {
if (this.isCheck && this.index < c.default.dataHook.length) {
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
} else {
this.nCheckmask.active = !0;
this.nBtnBuy.getComponent(cc.Toggle).interactable = !1;
}
};
e.prototype.updatePrice = function(t) {
if (t < c.default.dataHook.length) {
this.lbPrice.string = c.default.dataHook[t].price + " ";
this.lbLeverSpeedNew.string = c.default.dataHook[t].speed + 1 + " ";
this.lbLeverSpeedOld.string = c.default.dataHook[t].speed + "  -> ";
} else {
this.lbPrice.string = "Max";
this.lbLeverSpeedNew.string = "Max";
this.lbLeverSpeedOld.string = "Max";
}
};
e.prototype.start = function() {};
r([ p(cc.Label) ], e.prototype, "lbPrice", void 0);
r([ p(cc.Node) ], e.prototype, "nBtnBuy", void 0);
r([ p(cc.Node) ], e.prototype, "nStateBuy", void 0);
r([ p(cc.Node) ], e.prototype, "nCheckmask", void 0);
r([ p(cc.Label) ], e.prototype, "lbLeverSpeedOld", void 0);
r([ p(cc.Label) ], e.prototype, "lbLeverSpeedNew", void 0);
return r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../ShuShiCarb.GameManager": "ShuShiCarb.GameManager",
"../../../ShuShiCarb.Global": "ShuShiCarb.Global",
"./ShuShiCarb.ShopView": "ShuShiCarb.ShopView"
} ],
"ShuShiCarb.ItemMoneyBag": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "75348lwHFBBC6JT2XEAoYwZ", "ShuShiCarb.ItemMoneyBag");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../ShuShiCarb.GameManager"), c = t("../../../ShuShiCarb.Global"), s = t("./ShuShiCarb.ShopView"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbPrice = null;
e.nBtnBuy = null;
e.nStateBuy = null;
e.nCheckmask = null;
e.lbLeverSpeedOld = null;
e.lbLeverSpeedNew = null;
e.index = 0;
e.isCheck = !1;
e._data = null;
e.isClick = !1;
return e;
}
e.prototype.onLoad = function() {
this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndexMoneyBag")) || 0;
this.loadPurchaseState();
this.checkClick();
this.updatePrice(this.index);
};
e.prototype.loadPurchaseState = function() {
for (var t = JSON.parse(cc.sys.localStorage.getItem("itemMoneyBag")) || [], e = 0; e < c.default.dataBagMoney.length; e++) if (t[e]) {
c.default.dataBagMoney[e].isBuy = t[e].isBuy;
c.default.dataBagMoney[e].gold = t[e].gold;
this.nStateBuy.children[e].active = t[e].isBuy;
}
};
e.prototype.savePurchaseState = function() {
var t = c.default.dataBagMoney.map(function(t) {
return {
isBuy: t.isBuy,
gold: t.gold
};
});
cc.sys.localStorage.setItem("itemMoneyBag", JSON.stringify(t));
cc.sys.localStorage.setItem("activeIndexMoneyBag", JSON.stringify(c.default.activeIndex));
cc.sys.localStorage.setItem("itemIndexMoneyBag", this.index.toString());
cc.sys.localStorage.setItem("moneyBag", JSON.stringify(c.default.moneyBag));
cc.sys.localStorage.setItem("checkBagMoney", JSON.stringify(c.default.checkBagMoney));
};
e.prototype.checkClick = function() {
if (this.index < c.default.dataBagMoney.length) if (c.default.totalGold >= c.default.dataBagMoney[this.index].price) {
this.nCheckmask.active = !1;
this.isCheck = !0;
} else {
this.nCheckmask.active = !0;
this.nBtnBuy.getComponent(cc.Toggle).interactable = !1;
}
};
e.prototype.onBuy = function() {
if (this.isCheck && this.index < c.default.dataBagMoney.length) {
c.default.checkBagMoney = !0;
c.default.dataBagMoney[this.index].isBuy = !0;
c.default.totalGold -= c.default.dataBagMoney[this.index].price;
c.default.moneyBag += c.default.dataBagMoney[this.index].gold;
this.nStateBuy.children[this.index].active = c.default.dataBagMoney[this.index].isBuy;
c.default.activeIndexMoneyBag = this.index;
this.savePurchaseState();
this.index++;
this.savePurchaseState();
this.checkClick();
a.default.instance.updateTotalGold();
s.default.instace.updateGold();
this.updatePrice(this.index);
}
console.log("onbuy");
};
e.prototype.updatePrice = function(t) {
if (t < c.default.dataBagMoney.length) {
this.lbPrice.string = c.default.dataBagMoney[t].price + " ";
this.lbLeverSpeedNew.string = "+" + c.default.dataBagMoney[t].gold + "$";
} else {
this.lbPrice.string = "Max";
this.lbLeverSpeedNew.string = "Max";
}
};
e.prototype.start = function() {};
r([ p(cc.Label) ], e.prototype, "lbPrice", void 0);
r([ p(cc.Node) ], e.prototype, "nBtnBuy", void 0);
r([ p(cc.Node) ], e.prototype, "nStateBuy", void 0);
r([ p(cc.Node) ], e.prototype, "nCheckmask", void 0);
r([ p(cc.Label) ], e.prototype, "lbLeverSpeedOld", void 0);
r([ p(cc.Label) ], e.prototype, "lbLeverSpeedNew", void 0);
return r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../ShuShiCarb.GameManager": "ShuShiCarb.GameManager",
"../../../ShuShiCarb.Global": "ShuShiCarb.Global",
"./ShuShiCarb.ShopView": "ShuShiCarb.ShopView"
} ],
"ShuShiCarb.Player": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3894fyXWvVMl4qDb2W/ERoN", "ShuShiCarb.Player");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../ShuShiCarb.Game"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.char = null;
e.listFood = [];
e.nchat = null;
e.listCharacter = [];
e.prgBarCountDown = null;
e.lbCountDown = null;
e.nTime = null;
e.duration = 10;
e.numberCountDown = 0;
e.isCountDown = !1;
e.isMove = !1;
e.isAtOrderPosition = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instace = this;
};
e.prototype.setData = function(t) {
this.char.skeletonData = this.listCharacter[t];
};
e.prototype.startCountDown = function() {
this.isCountDown = !0;
this.numberCountDown = this.duration;
this.schedule(this.updateCountDown, 1);
};
e.prototype.updateCountDown = function() {
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
e.prototype.updateProgressBar = function() {
this.prgBarCountDown && (this.prgBarCountDown.progress -= .1);
};
e.prototype.effectShow = function() {
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
e.prototype.happyEffectPlayerMoveOut = function(t) {
var e = this;
this.char.animation = "happy";
this.isAtOrderPosition = !1;
cc.tween(this.char.node).to(.8, {
x: 600
}).call(function() {
e.node.destroy();
t();
}).start();
};
e.prototype.sadEffectPlayerMoveOut = function(t) {
var e = this;
this.char.animation = "discomfort";
this.isAtOrderPosition = !1;
cc.tween(this.char.node).to(.8, {
x: 600
}).call(function() {
e.isAtOrderPosition = !1;
e.node.destroy();
t();
}).start();
};
e.prototype.start = function() {
this.effectShow();
};
var o;
e.instace = null;
r([ l(sp.Skeleton) ], e.prototype, "char", void 0);
r([ l(cc.Node) ], e.prototype, "listFood", void 0);
r([ l(cc.Node) ], e.prototype, "nchat", void 0);
r([ l(sp.SkeletonData) ], e.prototype, "listCharacter", void 0);
r([ l(cc.ProgressBar) ], e.prototype, "prgBarCountDown", void 0);
r([ l(cc.Label) ], e.prototype, "lbCountDown", void 0);
r([ l(cc.Node) ], e.prototype, "nTime", void 0);
return o = r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../ShuShiCarb.Game": "ShuShiCarb.Game"
} ],
"ShuShiCarb.SettingView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2f0fd3epKRG7byTyvDHzrTW", "ShuShiCarb.SettingView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../ShuShiCarb.Global"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sfMusic = [];
e.spMusic = null;
e.spSound = null;
return e;
}
e.prototype.start = function() {
this.updateStatus();
};
e.prototype.updateStatus = function() {
a.default.isSoundOn ? this.spSound.spriteFrame = this.sfMusic[0] : this.spSound.spriteFrame = this.sfMusic[1];
a.default.isMusicOn ? this.spMusic.spriteFrame = this.sfMusic[0] : this.spMusic.spriteFrame = this.sfMusic[1];
};
e.prototype.onClickSound = function() {
a.default.soundManager && a.default.soundManager.playSoundClick();
a.default.isSoundOn = !a.default.isSoundOn;
this.updateStatus();
};
e.prototype.onClickMusic = function() {
a.default.soundManager && a.default.soundManager.playSoundClick();
a.default.isMusicOn = !a.default.isMusicOn;
this.updateStatus();
a.default.soundManager.updateMusicState();
};
e.prototype.onClickClose = function() {
this.node.destroy();
};
r([ l(cc.SpriteFrame) ], e.prototype, "sfMusic", void 0);
r([ l(cc.Sprite) ], e.prototype, "spMusic", void 0);
r([ l(cc.Sprite) ], e.prototype, "spSound", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../ShuShiCarb.Global": "ShuShiCarb.Global"
} ],
"ShuShiCarb.ShopView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7e44aVyW49Ht7kWO/WUQKjk", "ShuShiCarb.ShopView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../ShuShiCarb.Global"), c = t("./ShuShiCarb.ItemHook"), s = t("./ShuShiCarb.ItemMoneyBag"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbGold = null;
e.nlistItem = null;
e.prfItemSpeedHook = null;
e.prfItemMoney = null;
e.listDataHook = [];
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instace = this;
this.itemSpeedHook();
this.updateGold();
this.itemMoney();
};
e.prototype.start = function() {};
e.prototype.itemSpeedHook = function() {
var t = cc.instantiate(this.prfItemSpeedHook).getComponent(c.default);
this.nlistItem.addChild(t.node);
};
e.prototype.itemMoney = function() {
var t = cc.instantiate(this.prfItemMoney).getComponent(s.default);
this.nlistItem.addChild(t.node);
};
e.prototype.updateGold = function() {
this.lbGold.string = a.default.totalGold + " ";
};
e.prototype.onClickClose = function() {
this.node.destroy();
};
var o;
e.instace = null;
r([ p(cc.Label) ], e.prototype, "lbGold", void 0);
r([ p(cc.Node) ], e.prototype, "nlistItem", void 0);
r([ p(cc.Prefab) ], e.prototype, "prfItemSpeedHook", void 0);
r([ p(cc.Prefab) ], e.prototype, "prfItemMoney", void 0);
return o = r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../ShuShiCarb.Global": "ShuShiCarb.Global",
"./ShuShiCarb.ItemHook": "ShuShiCarb.ItemHook",
"./ShuShiCarb.ItemMoneyBag": "ShuShiCarb.ItemMoneyBag"
} ],
"ShuShiCarb.SoundManager": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e37ca0PmppMTZq2Fx30je4G", "ShuShiCarb.SoundManager");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./ShuShiCarb.Global"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.music_background = null;
e.audio_sfx = null;
e.audio_score = null;
e.sound_click = null;
e.sound_bomb = null;
e.add_score = null;
e.add_star = null;
e.game_over = null;
e.pass_level = null;
e.ball_break = null;
return e;
}
e.prototype.onLoad = function() {
a.default.soundManager = this;
};
e.prototype.playSoundClick = function() {
this.playSoundSFX(this.sound_click);
};
e.prototype.playSoundLose = function() {
this.playSoundSFX(this.ball_break);
};
e.prototype.playSoundBomb = function() {
this.playSoundSFX(this.sound_bomb);
};
e.prototype.playSoundAddScore = function() {
this.playSoundScore(this.add_score);
};
e.prototype.playSoundAddStar = function() {
this.playSoundScore(this.add_star);
};
e.prototype.playSoundPassLevel = function() {
this.playSoundSFX(this.pass_level);
};
e.prototype.playSoundGameOver = function() {
this.playSoundSFX(this.game_over);
};
e.prototype.playSoundSFX = function(t) {
if (a.default.isSoundOn) {
this.audio_sfx.clip = t;
this.audio_sfx.play();
}
};
e.prototype.playSoundScore = function(t) {
if (a.default.isSoundOn) {
this.audio_score.clip = t;
this.audio_score.play();
}
};
e.prototype.updateMusicState = function() {
a.default.isMusicOn ? this.music_background.play() : this.music_background.stop();
};
r([ l(cc.AudioSource) ], e.prototype, "music_background", void 0);
r([ l(cc.AudioSource) ], e.prototype, "audio_sfx", void 0);
r([ l(cc.AudioSource) ], e.prototype, "audio_score", void 0);
r([ l({
type: cc.AudioClip
}) ], e.prototype, "sound_click", void 0);
r([ l({
type: cc.AudioClip
}) ], e.prototype, "sound_bomb", void 0);
r([ l({
type: cc.AudioClip
}) ], e.prototype, "add_score", void 0);
r([ l({
type: cc.AudioClip
}) ], e.prototype, "add_star", void 0);
r([ l({
type: cc.AudioClip
}) ], e.prototype, "game_over", void 0);
r([ l({
type: cc.AudioClip
}) ], e.prototype, "pass_level", void 0);
r([ l({
type: cc.AudioClip
}) ], e.prototype, "ball_break", void 0);
return r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./ShuShiCarb.Global": "ShuShiCarb.Global"
} ],
"ShuShiCard.CollierManager": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "07571YrTBpHQZ4RW7KNcoYv", "ShuShiCard.CollierManager");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../ShuShiCarb.Game"), c = t("./ShuShiCarb.Conveyor"), s = t("./ShuShiCarb.Food"), l = t("./ShuShiCarb.Hook"), u = cc._decorator, p = u.ccclass, d = (u.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCollisionEnter = function(t) {
var e = this.node.getComponent(s.default), o = e.id;
if (1 == t.tag) {
var n = new cc.Node();
n.parent = this.node.parent;
n.scale = .5;
n.addComponent(cc.Sprite).spriteFrame = a.default.instance.listSpfFood[o];
n.setParent(l.default.instance.hookHead);
n.setPosition(cc.v2(0, -25));
a.default.instance.hookObjects.push({
node: n,
id: o
});
l.default.instance.setHookState(2);
e.isCheck = 1;
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
e.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
};
e.prototype.start = function() {};
return r([ p ], e);
}(cc.Component));
o.default = d;
cc._RF.pop();
}, {
"../ShuShiCarb.Game": "ShuShiCarb.Game",
"./ShuShiCarb.Conveyor": "ShuShiCarb.Conveyor",
"./ShuShiCarb.Food": "ShuShiCarb.Food",
"./ShuShiCarb.Hook": "ShuShiCarb.Hook"
} ],
"ShuShiCrab.GameOver": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "44367/LVl9AqbqS+KLuBWW4", "ShuShiCrab.GameOver");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../ShuShiCarb.Game"), c = t("../../ShuShiCarb.GameManager"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbGold = null;
return e;
}
e.prototype.open = function() {
cc.tween(this.node).to(.2, {
scale: 1
}).start();
};
e.prototype.onHome = function() {
c.default.instance.updateTotalGold();
this.stopGamePlay();
};
e.prototype.goldEnd = function() {
this.lbGold.string = a.default.instance.gold + " ";
};
e.prototype.stopGamePlay = function() {
var t = cc.Canvas.instance.node.getChildByName("Main");
c.default.instance.nHome.getChildByName("playbtn").getComponent(cc.Button).interactable = !0;
c.default.instance.nHome.getChildByName("shop").getComponent(cc.Button).interactable = !0;
c.default.instance.nHome.getChildByName("setting").getComponent(cc.Button).interactable = !0;
t.destroy();
};
e.prototype.onLoad = function() {
this.open();
this.goldEnd();
};
r([ u(cc.Label) ], e.prototype, "lbGold", void 0);
return r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../ShuShiCarb.Game": "ShuShiCarb.Game",
"../../ShuShiCarb.GameManager": "ShuShiCarb.GameManager"
} ]
}, {}, [ "ShuShiCarb.Conveyor", "ShuShiCarb.Food", "ShuShiCarb.Hook", "ShuShiCarb.Player", "ShuShiCard.CollierManager", "ShuShiCarb.ItemHook", "ShuShiCarb.ItemMoneyBag", "ShuShiCarb.ShopView", "ShuShiCarb.SettingView", "ShuShiCrab.GameOver", "ShuShiCarb.Game", "ShuShiCarb.GameManager", "ShuShiCarb.Global", "ShuShiCarb.GoldFly", "ShuShiCarb.SoundManager" ]);