
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
require('./assets/ShuShiCrab/scripts/Game/ShuShiCarb.Conveyor');
require('./assets/ShuShiCrab/scripts/Game/ShuShiCarb.Food');
require('./assets/ShuShiCrab/scripts/Game/ShuShiCarb.Hook');
require('./assets/ShuShiCrab/scripts/Game/ShuShiCarb.Player');
require('./assets/ShuShiCrab/scripts/Game/ShuShiCard.CollierManager');
require('./assets/ShuShiCrab/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ItemShop');
require('./assets/ShuShiCrab/scripts/Game/Ui_Popup/Shop/ShuShiCarb.ShopView');
require('./assets/ShuShiCrab/scripts/Game/Ui_Popup/ShuShiCarb.SettingView');
require('./assets/ShuShiCrab/scripts/Game/Ui_Popup/ShuShiCrab.GameOver');
require('./assets/ShuShiCrab/scripts/ShuShiCarb.Game');
require('./assets/ShuShiCrab/scripts/ShuShiCarb.GameManager');
require('./assets/ShuShiCrab/scripts/ShuShiCarb.Global');
require('./assets/ShuShiCrab/scripts/ShuShiCarb.GoldFly');
require('./assets/ShuShiCrab/scripts/ShuShiCarb.SoundManager');

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