
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU3VTaGlDYXJiXFxzY3JpcHRzXFxHYW1lXFxVaV9Qb3B1cFxcU2h1U2hpQ2FyYi5TZXR0aW5nVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2Q0FBNkM7QUFFN0MsV0FBVztBQUNYLDZEQUE2RDtBQUU3RCxnQ0FBZ0M7QUFDaEMsc0NBQXNDO0FBRXRDLDJCQUEyQjtBQUMzQixnQ0FBZ0M7QUFDaEMsMkJBQTJCO0FBQzNCLGdDQUFnQztBQUdoQyx1QkFBdUI7QUFDdkIscUNBQXFDO0FBQ3JDLDBEQUEwRDtBQUMxRCxtQkFBbUI7QUFDbkIsMERBQTBEO0FBQzFELFlBQVk7QUFFWixxQ0FBcUM7QUFDckMseURBQXlEO0FBQ3pELG1CQUFtQjtBQUNuQix5REFBeUQ7QUFDekQsWUFBWTtBQUNaLFFBQVE7QUFFUix1QkFBdUI7QUFDdkIsc0RBQXNEO0FBQ3RELDhCQUE4QjtBQUM5QixvREFBb0Q7QUFDcEQsUUFBUTtBQUVSLHVCQUF1QjtBQUN2QixzREFBc0Q7QUFDdEQsK0JBQStCO0FBQy9CLDJDQUEyQztBQUMzQyxRQUFRO0FBQ1IsK0JBQStCO0FBRS9CLHNCQUFzQjtBQUV0QixpQkFBaUI7QUFDakIsOEJBQThCO0FBQzlCLFFBQVE7QUFFUix3QkFBd0I7QUFDeEIsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLy8gY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vLyBAY2NjbGFzc1xyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBHUEZTZXR0aW5nVmlldyBleHRlbmRzIEdQRkJhc2VQb3B1cCB7XHJcblxyXG4vLyAgICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4vLyAgICAgc2ZNdXNpYzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuLy8gICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbi8vICAgICBzcE11c2ljOiBjYy5TcHJpdGUgPSBudWxsXHJcbi8vICAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4vLyAgICAgc3BTb3VuZDogY2MuU3ByaXRlID0gbnVsbFxyXG5cclxuXHJcbi8vICAgICB1cGRhdGVTdGF0dXMoKSB7XHJcbi8vICAgICAgICAgaWYgKEdQRkdsb2JhbC5pc011c2ljT24pIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5zcE11c2ljLnNwcml0ZUZyYW1lID0gdGhpcy5zZk11c2ljWzBdO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuc3BNdXNpYy5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1sxXTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlmIChHUEZHbG9iYWwuaXNTb3VuZE9uKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuc3BTb3VuZC5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1swXVxyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuc3BTb3VuZC5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZNdXNpY1sxXVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBvbkNsaWNrTXVzaWMoKSB7XHJcbi8vICAgICAgICAgR1BGR2xvYmFsLmlzTXVzaWNPbiA9ICFHUEZHbG9iYWwuaXNNdXNpY09uO1xyXG4vLyAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKClcclxuLy8gICAgICAgICBHUEZHbG9iYWwuc291bmRNYW5hZ2VyLnVwZGF0ZU11c2ljU3RhdGUoKVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIG9uQ2xpY2tTb3VuZCgpIHtcclxuLy8gICAgICAgICBHUEZHbG9iYWwuaXNTb3VuZE9uID0gIUdQRkdsb2JhbC5pc1NvdW5kT247XHJcbi8vICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhHUEZHbG9iYWwuaXNTb3VuZE9uKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4vLyAgICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4vLyAgICAgc3RhcnQgKCkge1xyXG4vLyAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKClcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG4vLyB9XHJcbiJdfQ==