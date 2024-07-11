
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
cc._RF.push(module, '484713ZCZ9FspQaj6ncJKs9', 'ShuShiCarb.SettingView');
// SuShiCarb/scripts/Game/Ui_Popup/ShuShiCarb.SettingView.ts

// const {ccclass, property} = cc._decorator;
// @ccclass
// export default class GPFSettingView extends GPFBasePopup {
//     @property(cc.SpriteFrame)
//     sfMusic: cc.SpriteFrame[] = [];
//     @property(cc.Sprite)
//     spMusic: cc.Sprite = null
//     @property(cc.Sprite)
//     spSound: cc.Sprite = null
//     updateStatus() {
//         if (GPFGlobal.isMusicOn) {
//             this.spMusic.spriteFrame = this.sfMusic[0];
//         } else {
//             this.spMusic.spriteFrame = this.sfMusic[1];
//         }
//         if (GPFGlobal.isSoundOn) {
//             this.spSound.spriteFrame = this.sfMusic[0]
//         } else {
//             this.spSound.spriteFrame = this.sfMusic[1]
//         }
//     }
//     onClickMusic() {
//         GPFGlobal.isMusicOn = !GPFGlobal.isMusicOn;
//         this.updateStatus()
//         GPFGlobal.soundManager.updateMusicState()
//     }
//     onClickSound() {
//         GPFGlobal.isSoundOn = !GPFGlobal.isSoundOn;
//         this.updateStatus();
//         console.log(GPFGlobal.isSoundOn)
//     }
//     // LIFE-CYCLE CALLBACKS:
//     // onLoad () {}
//     start () {
//         this.updateStatus()
//     }
//     // update (dt) {}
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9HYW1lL1VpX1BvcHVwL1NodVNoaUNhcmIuU2V0dGluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkNBQTZDO0FBRTdDLFdBQVc7QUFDWCw2REFBNkQ7QUFFN0QsZ0NBQWdDO0FBQ2hDLHNDQUFzQztBQUV0QywyQkFBMkI7QUFDM0IsZ0NBQWdDO0FBQ2hDLDJCQUEyQjtBQUMzQixnQ0FBZ0M7QUFHaEMsdUJBQXVCO0FBQ3ZCLHFDQUFxQztBQUNyQywwREFBMEQ7QUFDMUQsbUJBQW1CO0FBQ25CLDBEQUEwRDtBQUMxRCxZQUFZO0FBRVoscUNBQXFDO0FBQ3JDLHlEQUF5RDtBQUN6RCxtQkFBbUI7QUFDbkIseURBQXlEO0FBQ3pELFlBQVk7QUFDWixRQUFRO0FBRVIsdUJBQXVCO0FBQ3ZCLHNEQUFzRDtBQUN0RCw4QkFBOEI7QUFDOUIsb0RBQW9EO0FBQ3BELFFBQVE7QUFFUix1QkFBdUI7QUFDdkIsc0RBQXNEO0FBQ3RELCtCQUErQjtBQUMvQiwyQ0FBMkM7QUFDM0MsUUFBUTtBQUNSLCtCQUErQjtBQUUvQixzQkFBc0I7QUFFdEIsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5QixRQUFRO0FBRVIsd0JBQXdCO0FBQ3hCLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBHUEZTZXR0aW5nVmlldyBleHRlbmRzIEdQRkJhc2VQb3B1cCB7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4vLyAgICAgc2ZNdXNpYzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbi8vICAgICBzcE11c2ljOiBjYy5TcHJpdGUgPSBudWxsXG4vLyAgICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbi8vICAgICBzcFNvdW5kOiBjYy5TcHJpdGUgPSBudWxsXG5cblxuLy8gICAgIHVwZGF0ZVN0YXR1cygpIHtcbi8vICAgICAgICAgaWYgKEdQRkdsb2JhbC5pc011c2ljT24pIHtcbi8vICAgICAgICAgICAgIHRoaXMuc3BNdXNpYy5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1swXTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHRoaXMuc3BNdXNpYy5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1sxXTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGlmIChHUEZHbG9iYWwuaXNTb3VuZE9uKSB7XG4vLyAgICAgICAgICAgICB0aGlzLnNwU291bmQuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTXVzaWNbMF1cbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHRoaXMuc3BTb3VuZC5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1sxXVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgb25DbGlja011c2ljKCkge1xuLy8gICAgICAgICBHUEZHbG9iYWwuaXNNdXNpY09uID0gIUdQRkdsb2JhbC5pc011c2ljT247XG4vLyAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKClcbi8vICAgICAgICAgR1BGR2xvYmFsLnNvdW5kTWFuYWdlci51cGRhdGVNdXNpY1N0YXRlKClcbi8vICAgICB9XG5cbi8vICAgICBvbkNsaWNrU291bmQoKSB7XG4vLyAgICAgICAgIEdQRkdsb2JhbC5pc1NvdW5kT24gPSAhR1BGR2xvYmFsLmlzU291bmRPbjtcbi8vICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coR1BGR2xvYmFsLmlzU291bmRPbilcbi8vICAgICB9XG4vLyAgICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbi8vICAgICAvLyBvbkxvYWQgKCkge31cblxuLy8gICAgIHN0YXJ0ICgpIHtcbi8vICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoKVxuLy8gICAgIH1cblxuLy8gICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4vLyB9XG4iXX0=