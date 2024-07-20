window.__require = function t(e, o, n) {
function a(r, c) {
if (!o[r]) {
if (!e[r]) {
var s = r.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = s;
}
var p = o[r] = {
exports: {}
};
e[r][0].call(p.exports, function(t) {
return a(e[r][1][t] || t);
}, p, p.exports, t, e, o, n);
}
return o[r].exports;
}
for (var i = "function" == typeof __require && __require, r = 0; r < n.length; r++) a(n[r]);
return a;
}({
"ShuShiCarb.Conveyor": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "feab3o200JDbYSI7NRNPnpz", "ShuShiCarb.Conveyor");
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, s = r.property, l = function(t) {
a(e, t);
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
i([ s ], e.prototype, "idFood", void 0);
return i([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"ShuShiCarb.Food": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1814d5TiQlDEohqTgqXx2zV", "ShuShiCarb.Food");
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../ShuShiCarb.Game"), c = cc._decorator, s = c.ccclass, l = c.property, p = function(t) {
a(e, t);
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
this.nFood.getComponent(cc.Sprite).spriteFrame = 999 === t ? r.default.instance.listSpfFood[6] : r.default.instance.listSpfFood[t];
};
e.prototype.update = function() {};
i([ l(cc.Node) ], e.prototype, "nFood", void 0);
return i([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../ShuShiCarb.Game": "ShuShiCarb.Game"
} ],
"ShuShiCarb.GameManager": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b4f8btwtChDJ7eWDTDf8uUO", "ShuShiCarb.GameManager");
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Game/Ui_Popup/Shop/ShuShiCarb.ShopView"), c = t("./ShuShiCarb.Game"), s = t("./ShuShiCarb.Global"), l = cc._decorator, p = l.ccclass, u = l.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nHome = null;
e.prfGame = null;
e.nPlay = null;
e.prfShopView = null;
e.lbTotalGold = null;
e.prfSetting = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
s.default.totalGold = JSON.parse(cc.sys.localStorage.getItem("totalGold")) || 500;
this.updateTotalGold();
this.effectPlay();
};
e.prototype.start = function() {};
e.prototype.onClickPlay = function() {
s.default.soundManager && s.default.soundManager.playSoundClick();
var t = cc.instantiate(this.prfGame).getComponent(c.default);
this.node.addChild(t.node);
this.nHome.getChildByName("playbtn").getComponent(cc.Button).interactable = !1;
this.nHome.getChildByName("shop").getComponent(cc.Button).interactable = !1;
this.nHome.getChildByName("setting").getComponent(cc.Button).interactable = !1;
};
e.prototype.onClickShopView = function() {
s.default.soundManager && s.default.soundManager.playSoundClick();
var t = cc.instantiate(this.prfShopView).getComponent(r.default);
this.node.addChild(t.node);
};
e.prototype.updateTotalGold = function() {
this.lbTotalGold.string = s.default.formatNumber(s.default.totalGold);
cc.sys.localStorage.setItem("totalGold", JSON.stringify(s.default.totalGold));
console.log("Tong tien ", s.default.totalGold);
};
e.prototype.effectPlay = function() {
cc.tween(this.nPlay).repeatForever(cc.tween().to(.8, {
scale: .8
}).to(.8, {
scale: 1
}).start()).start();
};
e.prototype.onClickSettingView = function() {
s.default.soundManager && s.default.soundManager.playSoundClick();
var t = cc.instantiate(this.prfSetting);
this.node.addChild(t);
};
e.prototype.clickTest = function() {
cc.sys.localStorage.clear();
};
var o;
e.instance = null;
i([ u(cc.Node) ], e.prototype, "nHome", void 0);
i([ u(cc.Prefab) ], e.prototype, "prfGame", void 0);
i([ u(cc.Node) ], e.prototype, "nPlay", void 0);
i([ u(cc.Prefab) ], e.prototype, "prfShopView", void 0);
i([ u(cc.Label) ], e.prototype, "lbTotalGold", void 0);
i([ u(cc.Prefab) ], e.prototype, "prfSetting", void 0);
return o = i([ p ], e);
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
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Game/ShuShiCarb.Food"), c = t("./Game/ShuShiCarb.Player"), s = t("./Game/Ui_Popup/ShuShiCrab.GameOver"), l = t("./ShuShiCarb.GameManager"), p = t("./ShuShiCarb.Global"), u = t("./ShuShiCarb.GoldFly"), d = cc._decorator, h = d.ccclass, f = d.property, y = function(t) {
a(e, t);
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
e.nEffectGold = null;
e.nEffecBagMoneyFly = null;
e.nEndEffect = null;
e.nCheckFalse = null;
e.nCheckTrue = null;
e.lbBagMoneyEffect = null;
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
var t = JSON.parse(cc.sys.localStorage.getItem("checkBagMoney"));
p.default.moneyBag = JSON.parse(cc.sys.localStorage.getItem("moneyBag")) || p.default.moneyBag;
console.log(p.default.moneyBag);
if (null !== t) {
p.default.checkBagMoney = t;
console.log(p.default.checkBagMoney);
}
this.randomOrderFood();
console.log(this.playOrders);
this.conveyor(this.conveyor_1);
this.conveyor(this.conveyor_2);
this.conveyor(this.conveyor_3);
this.renderOrderFood();
this.startCountDown();
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
var e = this.hookObjects[0].id, o = !1;
if (999 === e) {
this.gold += p.default.moneyBag;
this.updateGold(p.default.moneyBag);
o = !0;
this.lbBagMoneyEffect.string = "+" + p.default.moneyBag;
u.default.instance.playAnim(this.nEffecBagMoneyFly, this.nEndEffect, this.nEffecBagMoneyFly);
} else for (var n = function(n) {
if (a.playOrders[n] === e && !a.player.listFood[n].getChildByName("tick").active) {
a.player.listFood[n].getChildByName("tick").active = !0;
a.scheduleOnce(function() {
t.lsFoodTable[n].getComponent(cc.Sprite).spriteFrame = t.listSpfFood[e];
t.lsFoodTable[n].active = !0;
}, .2);
u.default.instance.playAnim(a.nEffectGold, a.nEndEffect, a.nEffectGold);
a.gold += 5;
a.updateGold(5);
o = !0;
a.nCheckTrue.active = !0;
setTimeout(function() {
t.nCheckTrue.active = !1;
}, 500);
a.countCorrect++;
return "break";
}
}, a = this, i = 0; i < this.playOrders.length && "break" !== n(i); i++) ;
this.lbGold.string = this.gold + " ";
if (!o) {
this.nCheckFalse.active = !0;
setTimeout(function() {
t.nCheckFalse.active = !1;
}, 500);
}
this.countCorrect >= 3 && this.resetGame(!0);
}
};
e.prototype.updateGold = function(t) {
p.default.totalGold += t;
console.log("Tong tien ", p.default.totalGold);
cc.sys.localStorage.setItem("totalGold", JSON.stringify(p.default.totalGold));
};
e.prototype.conveyor = function(t) {
for (var e = 0; e < t.childrenCount; e++) {
var o = t.children[e].getComponent(r.default);
if (!0 === p.default.checkBagMoney && 5 === e) o.setData(999); else {
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
p.default.soundManager && p.default.soundManager.playSoundClick();
l.default.instance.updateTotalGold();
this.node.destroy();
l.default.instance.nHome.getChildByName("playbtn").getComponent(cc.Button).interactable = !0;
l.default.instance.nHome.getChildByName("shop").getComponent(cc.Button).interactable = !0;
l.default.instance.nHome.getChildByName("setting").getComponent(cc.Button).interactable = !0;
};
e.prototype.start = function() {};
var o;
e.instance = null;
i([ f(cc.Prefab) ], e.prototype, "prfOrder", void 0);
i([ f(cc.Node) ], e.prototype, "nHome", void 0);
i([ f(cc.SpriteFrame) ], e.prototype, "listSpfFood", void 0);
i([ f(cc.Node) ], e.prototype, "nPlayer", void 0);
i([ f(cc.Node) ], e.prototype, "conveyor_1", void 0);
i([ f(cc.Node) ], e.prototype, "conveyor_2", void 0);
i([ f(cc.Node) ], e.prototype, "conveyor_3", void 0);
i([ f(cc.Prefab) ], e.prototype, "prfFood", void 0);
i([ f(cc.Node) ], e.prototype, "lsFoodTable", void 0);
i([ f(cc.Label) ], e.prototype, "lbGold", void 0);
i([ f(cc.Prefab) ], e.prototype, "prfGameOver", void 0);
i([ f(cc.ProgressBar) ], e.prototype, "prgTime", void 0);
i([ f(cc.Label) ], e.prototype, "lbCountDown", void 0);
i([ f(cc.Node) ], e.prototype, "nEffectGold", void 0);
i([ f(cc.Node) ], e.prototype, "nEffecBagMoneyFly", void 0);
i([ f(cc.Node) ], e.prototype, "nEndEffect", void 0);
i([ f(cc.Node) ], e.prototype, "nCheckFalse", void 0);
i([ f(cc.Node) ], e.prototype, "nCheckTrue", void 0);
i([ f(cc.Label) ], e.prototype, "lbBagMoneyEffect", void 0);
return o = i([ h ], e);
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
t.formatNumber = function(t, e) {
void 0 === e && (e = 0);
return 0 == t ? "0" : 0 != e ? t.toFixed(e).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") : t.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
t.soundManager = null;
t.totalGold = 0;
t.dataHook = [ {
price: 150,
speed: 1.5,
widthHook: 3
}, {
price: 300,
speed: 1.5,
widthHook: 4
}, {
price: 450,
speed: 1.5,
widthHook: 4
}, {
price: 600,
speed: 1.5,
widthHook: 4
}, {
price: 750,
speed: 2.5,
widthHook: 6
} ];
t.dataBagMoney = [ {
price: 120,
gold: 1
}, {
price: 250,
gold: 2
}, {
price: 320,
gold: 2
}, {
price: 450,
gold: 2
}, {
price: 750,
gold: 4
} ];
t.dataTimeHappy = [ {
price: 120,
time: 2
}, {
price: 250,
time: 2
}, {
price: 320,
time: 2
}, {
price: 450,
time: 2
}, {
price: 750,
time: 4
} ];
t.timeHappy = 10;
t.checkBagMoney = !1;
t.speedHook = 20;
t.moneyBag = 10;
t.lengthHook = 40;
t.isMusicOn = !0;
t.isSoundOn = !0;
t.hookIndex = 0;
t.bagIndex = 0;
t.timeIndex = 0;
t.timeHappyUpdated = !1;
return t;
}();
o.default = n;
cc._RF.pop();
}, {} ],
"ShuShiCarb.GoldFly": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c2cbe1ypNFMMKbHC8zXu7Db", "ShuShiCarb.GoldFly");
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, s = r.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
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
e.prototype.playAnim = function(t, e, o) {
var n = t.getPosition(), a = e.getPosition();
this.playCoinFlyAnim(5, n, a);
o.active = !0;
cc.tween(o).to(1.2, {
y: a.y
}).call(function() {
o.y = 0;
o.active = !1;
}).start();
};
e.prototype.playCoinFlyAnim = function(t, e, o, n) {
var a = this;
void 0 === n && (n = 130);
var i = this.coinPool.size(), r = i > t ? 0 : t - i;
this.initCoinPool(r);
var c = this.getCirclePoints(n, e, t).map(function(t) {
var n = a.coinPool.get();
n.setPosition(e);
a.node.addChild(n);
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
a.coinPool.put(t.node);
})));
});
};
e.prototype.getCirclePoints = function(t, e, o, n) {
void 0 === n && (n = 60);
for (var a = [], i = Math.PI / 180 * Math.round(360 / o), r = 0; r < o; r++) {
var c = e.x + t * Math.sin(i * r), s = e.y + t * Math.cos(i * r);
a.unshift(cc.v3(c + Math.random() * n, s + Math.random() * n, 0));
}
return a;
};
var o;
e.instance = null;
i([ s(cc.Prefab) ], e.prototype, "coinPrefab", void 0);
return o = i([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"ShuShiCarb.Hook": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bd3e4+aHHVDjZsBsncFNldv", "ShuShiCarb.Hook");
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../ShuShiCarb.Global"), c = t("./ShuShiCarb.Player"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(t) {
a(e, t);
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
r.default.speedHook = JSON.parse(cc.sys.localStorage.getItem("speedHook")) || r.default.speedHook;
r.default.lengthHook = JSON.parse(cc.sys.localStorage.getItem("lengthHook")) || r.default.lengthHook;
console.log("Speed ne ", r.default.speedHook);
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
this.hookHead.y += t * r.default.speedHook;
this.hookRope.width += t * r.default.lengthHook;
};
e.prototype.onDestroy = function() {
cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onTouchEnd, this);
};
e.prototype.update = function(t) {
this.setHookSprite(!0);
switch (this.hookState) {
case 1:
if (this.hookHead.y) {
this.moveHookHead(r.default.speedHook * t);
this.hookHead.y >= 600 && (this.hookState = 2);
}
break;

case 2:
if (this.hookHead.y) {
this.moveHookHead(-r.default.speedHook * t);
this.hookHead.getComponent(cc.BoxCollider).enabled = !1;
if (this.hookHead.y < 0) {
this.hookHead.y = 130;
this.hookRope.width = 130;
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
i([ p(cc.Node) ], e.prototype, "hookRope", void 0);
i([ p(cc.Node) ], e.prototype, "hookSpriteOpen", void 0);
i([ p(cc.Node) ], e.prototype, "hookSpriteClose", void 0);
i([ p(cc.Node) ], e.prototype, "hookHead", void 0);
return o = i([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../ShuShiCarb.Global": "ShuShiCarb.Global",
"./ShuShiCarb.Player": "ShuShiCarb.Player"
} ],
"ShuShiCarb.ItemShop": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "dc267ASAKxLjZBm3npC1v+1", "ShuShiCarb.ItemShop");
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../ShuShiCarb.GameManager"), c = t("../../../ShuShiCarb.Global"), s = t("./ShuShiCarb.ShopView"), l = cc._decorator, p = l.ccclass, u = l.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nItemShop = null;
e.lbPrice = null;
e.nBtnBuy = null;
e.nStateBuy = null;
e.lsSpFItemShop = [];
e.index = 0;
e.isCheck = !1;
e._data = null;
e._data2 = null;
e._data3 = null;
e.itemId = 0;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.setData = function(t) {
this.itemId = t;
switch (t) {
case 0:
this.index = c.default.hookIndex;
this._data = c.default.dataHook[this.index];
this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[t];
console.log(this._data, this.index);
break;

case 1:
this.index = c.default.bagIndex;
this._data = c.default.dataBagMoney[this.index];
this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[t];
break;

case 2:
this._data = c.default.dataTimeHappy[this.index];
this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[t];
this.index = c.default.timeIndex;
this.nStateBuy.x = -115;
this.nStateBuy.y = -28;
}
this.updatePrice(this.index, c.default.totalGold);
};
e.prototype.updatePrice = function(t, e) {
if (t < 4) {
this.lbPrice.string = this._data.price + " ";
e >= this._data.price ? this.nBtnBuy.getComponent(cc.Button).interactable = !0 : this.nBtnBuy.getComponent(cc.Button).interactable = !1;
} else {
this.lbPrice.string = "Max";
this.nBtnBuy.getComponent(cc.Button).interactable = !1;
}
this.updatePurchaseState();
};
e.prototype.savePurchaseState = function() {
var t = {
dataHook: c.default.dataHook,
dataBagMoney: c.default.dataBagMoney,
dataTimeHappy: c.default.dataTimeHappy,
activeIndexHook: c.default.hookIndex
};
cc.sys.localStorage.setItem("itemShopData", JSON.stringify(t));
};
e.prototype.updatePurchaseState = function() {
for (var t = 0; t <= this.index; t++) this.nStateBuy.children[t].active = !0;
};
e.prototype.onBuy = function() {
c.default.soundManager && c.default.soundManager.playSoundClick();
if (this.index < 4) {
this.nStateBuy.children[this.index].active = !0;
c.default.totalGold -= this._data.price;
switch (this.itemId) {
case 0:
this.index++;
c.default.hookIndex = this.index;
this._data = c.default.dataHook[this.index];
c.default.speedHook += this._data.speed;
c.default.lengthHook += this._data.widthHook;
cc.sys.localStorage.setItem("speedHook", JSON.stringify(c.default.speedHook));
cc.sys.localStorage.setItem("lengthHook", JSON.stringify(c.default.lengthHook));
cc.sys.localStorage.setItem("hookIndex", this.index);
break;

case 1:
this.index++;
c.default.checkBagMoney = !0;
c.default.bagIndex = this.index;
this._data = c.default.dataBagMoney[this.index];
c.default.moneyBag += this._data.gold;
cc.sys.localStorage.setItem("moneyBag", JSON.stringify(c.default.moneyBag));
cc.sys.localStorage.setItem("bagIndex", this.index);
cc.sys.localStorage.setItem("checkBagMoney", JSON.stringify(c.default.checkBagMoney));
break;

case 2:
this.index++;
c.default.timeIndex = this.index;
this._data = c.default.dataTimeHappy[this.index];
cc.sys.localStorage.setItem("timeIndex", this.index);
c.default.timeHappy += this._data.time;
cc.sys.localStorage.setItem("timeHappy", JSON.stringify(c.default.timeHappy));
}
this.savePurchaseState();
this.updatePrice(this.index, c.default.totalGold);
r.default.instance.updateTotalGold();
s.default.instance.updateGold();
s.default.instance.updateItemsState(c.default.totalGold);
}
};
i([ u(cc.Node) ], e.prototype, "nItemShop", void 0);
i([ u(cc.Label) ], e.prototype, "lbPrice", void 0);
i([ u(cc.Node) ], e.prototype, "nBtnBuy", void 0);
i([ u(cc.Node) ], e.prototype, "nStateBuy", void 0);
i([ u(cc.SpriteFrame) ], e.prototype, "lsSpFItemShop", void 0);
return i([ p ], e);
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
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../ShuShiCarb.Game"), c = t("../ShuShiCarb.Global"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.char = null;
e.listFood = [];
e.nchat = null;
e.listCharacter = [];
e.prgBarCountDown = null;
e.lbCountDown = null;
e.nTime = null;
e.numberCountDown = 0;
e.isCountDown = !1;
e.isMove = !1;
e.isAtOrderPosition = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instace = this;
c.default.timeHappy = JSON.parse(cc.sys.localStorage.getItem("timeHappy")) || c.default.timeHappy;
console.log("Time vua duoc update ", c.default.timeHappy);
};
e.prototype.setData = function(t) {
this.char.skeletonData = this.listCharacter[t];
};
e.prototype.startCountDown = function() {
this.isCountDown = !0;
this.numberCountDown = c.default.timeHappy;
this.schedule(this.updateCountDown, 1);
};
e.prototype.updateCountDown = function() {
if (this.numberCountDown > 0) {
this.numberCountDown--;
this.updateProgressBar();
this.lbCountDown.string = this.numberCountDown + "";
} else {
this.isCountDown = !1;
r.default.instance.resetGame(!1);
console.log("Thua");
}
};
e.prototype.updateProgressBar = function() {
this.prgBarCountDown && (this.prgBarCountDown.progress -= 1 / c.default.timeHappy);
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
i([ p(sp.Skeleton) ], e.prototype, "char", void 0);
i([ p(cc.Node) ], e.prototype, "listFood", void 0);
i([ p(cc.Node) ], e.prototype, "nchat", void 0);
i([ p(sp.SkeletonData) ], e.prototype, "listCharacter", void 0);
i([ p(cc.ProgressBar) ], e.prototype, "prgBarCountDown", void 0);
i([ p(cc.Label) ], e.prototype, "lbCountDown", void 0);
i([ p(cc.Node) ], e.prototype, "nTime", void 0);
return o = i([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../ShuShiCarb.Game": "ShuShiCarb.Game",
"../ShuShiCarb.Global": "ShuShiCarb.Global"
} ],
"ShuShiCarb.SettingView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2f0fd3epKRG7byTyvDHzrTW", "ShuShiCarb.SettingView");
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../ShuShiCarb.Global"), c = cc._decorator, s = c.ccclass, l = c.property, p = function(t) {
a(e, t);
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
r.default.isSoundOn ? this.spSound.spriteFrame = this.sfMusic[0] : this.spSound.spriteFrame = this.sfMusic[1];
r.default.isMusicOn ? this.spMusic.spriteFrame = this.sfMusic[0] : this.spMusic.spriteFrame = this.sfMusic[1];
};
e.prototype.onClickSound = function() {
r.default.soundManager && r.default.soundManager.playSoundClick();
r.default.isSoundOn = !r.default.isSoundOn;
this.updateStatus();
};
e.prototype.onClickMusic = function() {
r.default.soundManager && r.default.soundManager.playSoundClick();
r.default.isMusicOn = !r.default.isMusicOn;
this.updateStatus();
r.default.soundManager.updateMusicState();
};
e.prototype.onClickClose = function() {
r.default.soundManager && r.default.soundManager.playSoundClick();
this.node.destroy();
};
i([ l(cc.SpriteFrame) ], e.prototype, "sfMusic", void 0);
i([ l(cc.Sprite) ], e.prototype, "spMusic", void 0);
i([ l(cc.Sprite) ], e.prototype, "spSound", void 0);
return i([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../ShuShiCarb.Global": "ShuShiCarb.Global"
} ],
"ShuShiCarb.ShopView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7e44aVyW49Ht7kWO/WUQKjk", "ShuShiCarb.ShopView");
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../ShuShiCarb.Global"), c = t("./ShuShiCarb.ItemShop"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbGold = null;
e.nlistItem = null;
e.prfItem = null;
e.test = 0;
e.listDataHook = [];
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
var t = JSON.parse(cc.sys.localStorage.getItem("itemShopData")) || {
dataHook: r.default.dataHook,
dataBagMoney: r.default.dataBagMoney,
dataTimeHappy: r.default.dataTimeHappy
}, e = parseInt(cc.sys.localStorage.getItem("hookIndex")) || 0;
r.default.hookIndex = e;
var n = parseInt(cc.sys.localStorage.getItem("bagIndex")) || 0;
r.default.bagIndex = n;
var a = parseInt(cc.sys.localStorage.getItem("timeIndex")) || 0;
r.default.timeIndex = a;
r.default.dataHook = t.dataHook;
r.default.dataBagMoney = t.dataBagMoney;
r.default.dataTimeHappy = t.dataTimeHappy;
this.updateGold();
this.itemShop();
};
e.prototype.start = function() {};
e.prototype.updateShop = function() {};
e.prototype.updateGold = function() {
this.lbGold.string = r.default.totalGold + " ";
};
e.prototype.updateItemsState = function(t) {
for (var e = this.nlistItem.children, o = 0; o < e.length; o++) {
var n = e[o].getComponent(c.default);
n.updatePrice(n.index, t);
}
};
e.prototype.itemShop = function() {
for (var t = 0; t < 3; t++) {
var e = cc.instantiate(this.prfItem).getComponent(c.default);
e.setData(t);
this.nlistItem.addChild(e.node);
}
};
e.prototype.onClickClose = function() {
r.default.soundManager && r.default.soundManager.playSoundClick();
this.node.destroy();
};
var o;
e.instance = null;
i([ p(cc.Label) ], e.prototype, "lbGold", void 0);
i([ p(cc.Node) ], e.prototype, "nlistItem", void 0);
i([ p(cc.Prefab) ], e.prototype, "prfItem", void 0);
return o = i([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../ShuShiCarb.Global": "ShuShiCarb.Global",
"./ShuShiCarb.ItemShop": "ShuShiCarb.ItemShop"
} ],
"ShuShiCarb.SoundManager": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e37ca0PmppMTZq2Fx30je4G", "ShuShiCarb.SoundManager");
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./ShuShiCarb.Global"), c = cc._decorator, s = c.ccclass, l = c.property, p = function(t) {
a(e, t);
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
r.default.soundManager = this;
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
if (r.default.isSoundOn) {
this.audio_sfx.clip = t;
this.audio_sfx.play();
}
};
e.prototype.playSoundScore = function(t) {
if (r.default.isSoundOn) {
this.audio_score.clip = t;
this.audio_score.play();
}
};
e.prototype.updateMusicState = function() {
r.default.isMusicOn ? this.music_background.play() : this.music_background.stop();
};
i([ l(cc.AudioSource) ], e.prototype, "music_background", void 0);
i([ l(cc.AudioSource) ], e.prototype, "audio_sfx", void 0);
i([ l(cc.AudioSource) ], e.prototype, "audio_score", void 0);
i([ l({
type: cc.AudioClip
}) ], e.prototype, "sound_click", void 0);
i([ l({
type: cc.AudioClip
}) ], e.prototype, "sound_bomb", void 0);
i([ l({
type: cc.AudioClip
}) ], e.prototype, "add_score", void 0);
i([ l({
type: cc.AudioClip
}) ], e.prototype, "add_star", void 0);
i([ l({
type: cc.AudioClip
}) ], e.prototype, "game_over", void 0);
i([ l({
type: cc.AudioClip
}) ], e.prototype, "pass_level", void 0);
i([ l({
type: cc.AudioClip
}) ], e.prototype, "ball_break", void 0);
return i([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./ShuShiCarb.Global": "ShuShiCarb.Global"
} ],
"ShuShiCard.CollierManager": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "07571YrTBpHQZ4RW7KNcoYv", "ShuShiCard.CollierManager");
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../ShuShiCarb.Game"), c = t("./ShuShiCarb.Conveyor"), s = t("./ShuShiCarb.Food"), l = t("./ShuShiCarb.Hook"), p = cc._decorator, u = p.ccclass, d = (p.property, 
function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCollisionEnter = function(t) {
var e = this.node.getComponent(s.default), o = e.id;
console.log("id ", o);
if (1 == t.tag) {
var n = new cc.Node();
n.parent = this.node.parent;
n.scale = .4;
if (999 === o) {
n.scale = 1;
n.addComponent(cc.Sprite).spriteFrame = r.default.instance.listSpfFood[6];
n.setParent(l.default.instance.hookHead);
n.setPosition(cc.v2(0, 25));
} else {
n.addComponent(cc.Sprite).spriteFrame = r.default.instance.listSpfFood[o];
n.setParent(l.default.instance.hookHead);
n.setPosition(cc.v2(0, 25));
}
r.default.instance.hookObjects.push({
node: n,
id: o
});
l.default.instance.setHookState(2);
e.isCheck = 1;
r.default.instance.checkCorrect();
this.node.getComponent(c.default).resetSate(!1);
this.scheduleOnce(function() {
r.default.instance.hookObjects = r.default.instance.hookObjects.filter(function(t) {
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
return i([ u ], e);
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
var n, a = this && this.__extends || (n = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../ShuShiCarb.Game"), c = t("../../ShuShiCarb.GameManager"), s = t("../../ShuShiCarb.Global"), l = cc._decorator, p = l.ccclass, u = l.property, d = function(t) {
a(e, t);
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
s.default.soundManager && s.default.soundManager.playSoundClick();
c.default.instance.updateTotalGold();
this.stopGamePlay();
};
e.prototype.goldEnd = function() {
this.lbGold.string = r.default.instance.gold + " ";
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
i([ u(cc.Label) ], e.prototype, "lbGold", void 0);
return i([ p ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../ShuShiCarb.Game": "ShuShiCarb.Game",
"../../ShuShiCarb.GameManager": "ShuShiCarb.GameManager",
"../../ShuShiCarb.Global": "ShuShiCarb.Global"
} ]
}, {}, [ "ShuShiCarb.Conveyor", "ShuShiCarb.Food", "ShuShiCarb.Hook", "ShuShiCarb.Player", "ShuShiCard.CollierManager", "ShuShiCarb.ItemShop", "ShuShiCarb.ShopView", "ShuShiCarb.SettingView", "ShuShiCrab.GameOver", "ShuShiCarb.Game", "ShuShiCarb.GameManager", "ShuShiCarb.Global", "ShuShiCarb.GoldFly", "ShuShiCarb.SoundManager" ]);