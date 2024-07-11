

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
