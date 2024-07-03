// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbGame from "../ShuShiCarb.Game";



const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbFood extends cc.Component {

    @property(cc.Node)
    nFood: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.effectShow()
    }

    start () {

    }

    setData(idFood) {
        this.nFood.getComponent(cc.Sprite).spriteFrame = ShuShiCarbGame.instance.listSpfFood[idFood];
    }

    effectShow() {
        cc.tween(this.node)
        .to(2, {x: 500})
        .call(()=>{
            if (this.node.x >= 500) {
                this.node.x = -750
            }
        })
        // .repeatForever()
        .start()
    }
    // update (dt) {}
}
