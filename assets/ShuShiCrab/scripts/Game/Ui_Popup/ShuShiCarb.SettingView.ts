// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../../ShuShiCarb.Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteFrame)
    sfMusic: cc.SpriteFrame[] = [];

    @property(cc.Sprite)
    spMusic: cc.Sprite = null
    @property(cc.Sprite)
    spSound: cc.Sprite = null

    start() {
        this.updateStatus()
    }

    updateStatus() {
        if (Global.isSoundOn)
            this.spSound.spriteFrame = this.sfMusic[0];
        else
            this.spSound.spriteFrame = this.sfMusic[1];

        if (Global.isMusicOn)
            this.spMusic.spriteFrame = this.sfMusic[0];
        else
            this.spMusic.spriteFrame = this.sfMusic[1];
    }

    onClickSound() {
        if (Global.soundManager)
            Global.soundManager.playSoundClick();

        Global.isSoundOn = !Global.isSoundOn;
        this.updateStatus();
    }

    onClickMusic() {
        if (Global.soundManager)
            Global.soundManager.playSoundClick();
        
        Global.isMusicOn = !Global.isMusicOn;
        this.updateStatus()
        Global.soundManager.updateMusicState();
    }

    onClickClose() {
        if(Global.soundManager) {
            Global.soundManager.playSoundClick();
         }
        this.node.destroy();
    }
   

    // update (dt) {}
}
