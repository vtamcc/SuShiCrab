"use strict";
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