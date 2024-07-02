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

    @property(ShuShiCarbFood)
    ItemFood: ShuShiCarbFood[] = [];
    @property(sp.Skeleton)
    char: sp.Skeleton = null;

    @property(cc.Node)
    nchat: cc.Node = null;
    @property(sp.SkeletonData)
    listCharacter: sp.SkeletonData[] = [];

    setData(id, index) {
        
        this.char.skeletonData = this.listCharacter[index];
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    effectShow() {
        this.char.animation = 'move';
        this.nchat.active = false;
        cc.tween(this.char.node)
        .to(2, {x: 0})
        .call(() => {
            this.char.animation = 'discomfort';
            this.nchat.active = true;
        })
        .start()
    }
    start () {  
        this.effectShow();
    }

    // update (dt) {}
}
