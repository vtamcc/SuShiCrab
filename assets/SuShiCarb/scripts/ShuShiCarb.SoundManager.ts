// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "./ShuShiCarb.Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SoundManager extends cc.Component {

    @property(cc.AudioSource)
    music_background: cc.AudioSource = null
    @property(cc.AudioSource)
    audio_sfx: cc.AudioSource = null
    @property(cc.AudioSource)
    audio_score: cc.AudioSource = null

    @property({ type: cc.AudioClip })
    sound_click: cc.AudioClip = null
    @property({ type: cc.AudioClip })
    sound_bomb: cc.AudioClip = null
    @property({ type: cc.AudioClip })
    add_score: cc.AudioClip = null
    @property({ type: cc.AudioClip })
    add_star: cc.AudioClip = null
    @property({ type: cc.AudioClip })
    game_over: cc.AudioClip = null
    @property({ type: cc.AudioClip })
    pass_level: cc.AudioClip = null
    @property({ type: cc.AudioClip })
    ball_break: cc.AudioClip = null


    onLoad() {
        Global.soundManager = this;
    }

    playSoundClick() {
        this.playSoundSFX(this.sound_click)
    }

    playSoundLose() {
        this.playSoundSFX(this.ball_break)
    }

    playSoundBomb() {
        this.playSoundSFX(this.sound_bomb)
    }

    playSoundAddScore() {
        this.playSoundScore(this.add_score)
    }

    playSoundAddStar() {
        this.playSoundScore(this.add_star)
    }

    playSoundPassLevel() {
        this.playSoundSFX(this.pass_level)
    }

    playSoundGameOver() {
        this.playSoundSFX(this.game_over)
    }

    playSoundSFX(soundSFX) {
        if (Global.isSoundOn) {
            this.audio_sfx.clip = soundSFX
            this.audio_sfx.play()
        }
    }

    playSoundScore(soundSFX) {
        if (Global.isSoundOn) {
            this.audio_score.clip = soundSFX
            this.audio_score.play()
        }
    }

    // onClickMusic() {
    //     if (Global.isMusicOn) {
    //         this.music_background.play()
    //     } else {
    //         this.music_background.stop()
    //         this.audio_sfx.stop()
    //     }
    // }

    updateMusicState() {
        if (Global.isMusicOn)
            this.music_background.play();
        else
            this.music_background.stop();
    }

    // update (dt) {}
}
