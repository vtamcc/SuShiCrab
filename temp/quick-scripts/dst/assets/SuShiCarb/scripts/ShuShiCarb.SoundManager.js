
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SuShiCarb/scripts/ShuShiCarb.SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TdVNoaUNhcmIvc2NyaXB0cy9TaHVTaGlDYXJiLlNvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5REFBeUM7QUFFbkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF3RkM7UUFyRkcsc0JBQWdCLEdBQW1CLElBQUksQ0FBQTtRQUV2QyxlQUFTLEdBQW1CLElBQUksQ0FBQTtRQUVoQyxpQkFBVyxHQUFtQixJQUFJLENBQUE7UUFHbEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFBO1FBRWhDLGdCQUFVLEdBQWlCLElBQUksQ0FBQTtRQUUvQixlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixjQUFRLEdBQWlCLElBQUksQ0FBQTtRQUU3QixlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUU5QixnQkFBVSxHQUFpQixJQUFJLENBQUE7UUFFL0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFBOztRQWlFL0IsaUJBQWlCO0lBQ3JCLENBQUM7SUEvREcsNkJBQU0sR0FBTjtRQUNJLDJCQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxRQUFRO1FBQ2pCLElBQUksMkJBQU0sQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFBO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDeEI7SUFDTCxDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLFFBQVE7UUFDbkIsSUFBSSwyQkFBTSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUE7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUMxQjtJQUNMLENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsdUNBQXVDO0lBQ3ZDLGdDQUFnQztJQUNoQyxRQUFRO0lBQ1IsSUFBSTtJQUVKLHVDQUFnQixHQUFoQjtRQUNJLElBQUksMkJBQU0sQ0FBQyxTQUFTO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFFN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFsRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzswREFDYztJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNPO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cURBQ1M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3FEQUNEO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvREFDRjtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7bURBQ0g7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2tEQUNKO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzttREFDSDtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7b0RBQ0Y7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO29EQUNGO0lBdEJkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F3RmhDO0lBQUQsbUJBQUM7Q0F4RkQsQUF3RkMsQ0F4RnlDLEVBQUUsQ0FBQyxTQUFTLEdBd0ZyRDtrQkF4Rm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi9TaHVTaGlDYXJiLkdsb2JhbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXG4gICAgbXVzaWNfYmFja2dyb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGF1ZGlvX3NmeDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGF1ZGlvX3Njb3JlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kX2NsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRfYm9tYjogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGFkZF9zY29yZTogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGFkZF9zdGFyOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgZ2FtZV9vdmVyOiBjYy5BdWRpb0NsaXAgPSBudWxsXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgcGFzc19sZXZlbDogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGJhbGxfYnJlYWs6IGNjLkF1ZGlvQ2xpcCA9IG51bGxcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHbG9iYWwuc291bmRNYW5hZ2VyID0gdGhpcztcbiAgICB9XG5cbiAgICBwbGF5U291bmRDbGljaygpIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmRTRlgodGhpcy5zb3VuZF9jbGljaylcbiAgICB9XG5cbiAgICBwbGF5U291bmRMb3NlKCkge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZFNGWCh0aGlzLmJhbGxfYnJlYWspXG4gICAgfVxuXG4gICAgcGxheVNvdW5kQm9tYigpIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmRTRlgodGhpcy5zb3VuZF9ib21iKVxuICAgIH1cblxuICAgIHBsYXlTb3VuZEFkZFNjb3JlKCkge1xuICAgICAgICB0aGlzLnBsYXlTb3VuZFNjb3JlKHRoaXMuYWRkX3Njb3JlKVxuICAgIH1cblxuICAgIHBsYXlTb3VuZEFkZFN0YXIoKSB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kU2NvcmUodGhpcy5hZGRfc3RhcilcbiAgICB9XG5cbiAgICBwbGF5U291bmRQYXNzTGV2ZWwoKSB7XG4gICAgICAgIHRoaXMucGxheVNvdW5kU0ZYKHRoaXMucGFzc19sZXZlbClcbiAgICB9XG5cbiAgICBwbGF5U291bmRHYW1lT3ZlcigpIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmRTRlgodGhpcy5nYW1lX292ZXIpXG4gICAgfVxuXG4gICAgcGxheVNvdW5kU0ZYKHNvdW5kU0ZYKSB7XG4gICAgICAgIGlmIChHbG9iYWwuaXNTb3VuZE9uKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvX3NmeC5jbGlwID0gc291bmRTRlhcbiAgICAgICAgICAgIHRoaXMuYXVkaW9fc2Z4LnBsYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheVNvdW5kU2NvcmUoc291bmRTRlgpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5pc1NvdW5kT24pIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9fc2NvcmUuY2xpcCA9IHNvdW5kU0ZYXG4gICAgICAgICAgICB0aGlzLmF1ZGlvX3Njb3JlLnBsYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gb25DbGlja011c2ljKCkge1xuICAgIC8vICAgICBpZiAoR2xvYmFsLmlzTXVzaWNPbikge1xuICAgIC8vICAgICAgICAgdGhpcy5tdXNpY19iYWNrZ3JvdW5kLnBsYXkoKVxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5tdXNpY19iYWNrZ3JvdW5kLnN0b3AoKVxuICAgIC8vICAgICAgICAgdGhpcy5hdWRpb19zZnguc3RvcCgpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICB1cGRhdGVNdXNpY1N0YXRlKCkge1xuICAgICAgICBpZiAoR2xvYmFsLmlzTXVzaWNPbilcbiAgICAgICAgICAgIHRoaXMubXVzaWNfYmFja2dyb3VuZC5wbGF5KCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMubXVzaWNfYmFja2dyb3VuZC5zdG9wKCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==