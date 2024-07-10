// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbGame from "../ShuShiCarb.Game";
import ShuShiCarbFood from "./ShuShiCarb.Food";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbPlayer extends cc.Component {

    @property(sp.Skeleton)
    char: sp.Skeleton = null;
    @property(cc.Node)
    listFood: cc.Node[] = [];
    @property(cc.Node)
    nchat: cc.Node = null;
    @property(sp.SkeletonData)
    listCharacter: sp.SkeletonData[] = [];
    @property(cc.ProgressBar)
    prgBarCountDown: cc.ProgressBar = null;
    @property(cc.Label)
    lbCountDown: cc.Label = null;
    @property(cc.Node)
    nTime: cc.Node = null;
    duration = 10;
    numberCountDown = 0;
    isCountDown = false;
    isMove = false;

    
    // @property(cc.Node)
    // foodItem1: cc.Node = null;
    // @property(cc.Node)
    // foodItem2: cc.Node = null;
    // @property(cc.Node)
    // foodItem3: cc.Node = null;


    setData(index) {
        this.char.skeletonData = this.listCharacter[index]; // listChar [0] = con ao vang
    }

    startCountDown() {
        this.isCountDown = true;
        this.numberCountDown = this.duration;
        this.schedule(this.updateCountDown,1);
    }

    
    updateCountDown() {
        if(this.numberCountDown > 0) {
            this.numberCountDown--;
            this.updateProgressBar();
            this.lbCountDown.string = this.numberCountDown + '';
        }else {
            this.isCountDown = false;
            ShuShiCarbGame.instance.resetGame(false);
            console.log("Thua")
            //this.effectShow();

        }
    }

    updateProgressBar() {
        if(this.prgBarCountDown) {
            this.prgBarCountDown.progress -= 0.1;
        }
    }
    effectShow() {
        this.char.animation = 'move';
        this.nchat.active = false;
        this.nTime.active = false;
        cc.tween(this.char.node)
        .to(2, {x: 0})
        .call(() => {
            this.char.animation = 'idle';
            this.nchat.active = true;
            this.nTime.active = true;
            this.startCountDown();
        })
        .start()
    }

    happyEffectPlayerMoveOut(callbacks: Function) {
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "happy"
        cc.tween(this.char.node)
        .to(1.5,{x: 600})
        .call(() => {
            this.node.destroy();
            callbacks();
        }).start();
    }

    sadEffectPlayerMoveOut(callbacks: Function) {
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "discomfort"
        cc.tween(this.char.node)
        .to(1.5,{x: 600})
        .call(() => {
            this.node.destroy();
            callbacks();
        }).start();
    }

    


    start () {  
        this.effectShow();
    }

    // update (dt) {}
}
