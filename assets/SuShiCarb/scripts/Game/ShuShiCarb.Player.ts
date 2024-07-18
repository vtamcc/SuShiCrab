// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbGame from "../ShuShiCarb.Game";
import Global from "../ShuShiCarb.Global";
import ShuShiCarbFood from "./ShuShiCarb.Food";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbPlayer extends cc.Component {

    public static instace: ShuShiCarbPlayer = null;
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
    numberCountDown = 0;
    isCountDown = false;
    isMove = false;
    isAtOrderPosition = false;
    
    // @property(cc.Node)
    // foodItem1: cc.Node = null;
    // @property(cc.Node)
    // foodItem2: cc.Node = null;
    // @property(cc.Node)
    // foodItem3: cc.Node = null;

    onLoad() {
        ShuShiCarbPlayer.instace = this;
        Global.timeHappy = JSON.parse(cc.sys.localStorage.getItem("timeHappy")) || Global.timeHappy;
        console.log("Time vua duoc update ",Global.timeHappy);
    }
    setData(index) {
        this.char.skeletonData = this.listCharacter[index]; // listChar [0] = con ao vang
    }

    startCountDown() {
        this.isCountDown = true;
        this.numberCountDown = Global.timeHappy;
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
            this.prgBarCountDown.progress -= 1/ Global.timeHappy;
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
            this.isAtOrderPosition = true;
            this.startCountDown();
        })
        .start()
    }

    happyEffectPlayerMoveOut(callbacks: Function) {
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "happy"
        this.isAtOrderPosition = false;
        cc.tween(this.char.node)
        .to(0.8,{x: 600})
        .call(() => {
            this.node.destroy();
            callbacks();
        }).start();
    }

    sadEffectPlayerMoveOut(callbacks: Function) {
        // this.char.setAnimation(0,"happy_out",active);
        // this.char.setAnimation(0,"discomfort",!active);
        this.char.animation = "discomfort"
        this.isAtOrderPosition = false;
        cc.tween(this.char.node)
        .to(0.8,{x: 600})
        .call(() => {
            this.isAtOrderPosition = false;
            this.node.destroy();
            callbacks();
        }).start();
    }

    


    start () {  
        this.effectShow();
    }

    // update (dt) {}
}
