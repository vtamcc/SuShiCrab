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


    setData(food_1,food_2,food_3, index) {
        this.char.skeletonData = this.listCharacter[index];
        this.listFood[0].getComponent(cc.Sprite).spriteFrame = ShuShiCarbGame.instance.listSpfFood[food_1];
        this.listFood[1].getComponent(cc.Sprite).spriteFrame = ShuShiCarbGame.instance.listSpfFood[food_2];
        this.listFood[2].getComponent(cc.Sprite).spriteFrame = ShuShiCarbGame.instance.listSpfFood[food_3];

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
            //this.effectShow();

        }
    }

    updateProgressBar() {
        if(this.prgBarCountDown) {
            this.prgBarCountDown.progress -= 0.1;  
            console.log(this.prgBarCountDown.progress);
        }
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    // setItemFood(foodIDs: number[]) {
    //     for(let i = 0; i < foodIDs.length; i++) {
    //        let foodID = foodIDs[i];
    //        let foodItemNode = null;
    //        switch(i) {
    //             case 0: 
    //                 foodItemNode = this.foodItem1;
    //                 break;
    //             case 1: 
    //                 foodItemNode = this.foodItem2;
    //                 break;
    //             case 2: 
    //                 foodItemNode = this.foodItem3;
    //                 break;
    //             default:
    //                 break;
    //        } 

    //        if(foodItemNode) {
    //             foodItemNode.getComponent(cc.Sprite).spriteFrame = ShuShiCarbGame.instance.listSpfFood[foodID];
    //        }
    //     }

        
    // }
    effectShow() {
        this.char.animation = 'move';
        this.nchat.active = false;
        cc.tween(this.char.node)
        .to(2, {x: 0})
        .call(() => {
            this.char.animation = 'discomfort';
            this.nchat.active = true;
            this.startCountDown();
        })
        .start()
    }
    start () {  
        this.effectShow();
    }

    // update (dt) {}
}
