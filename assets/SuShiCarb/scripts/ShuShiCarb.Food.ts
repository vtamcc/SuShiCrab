// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbGolal from "./ShuShiCarb.Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbFood extends cc.Component {

    @property(cc.Node)
    nFood: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    setData(idFood) {
        this.nFood.getComponent(cc.Sprite).spriteFrame = ShuShiCarbGolal.instance.listSpfFood[idFood];
    }
    // update (dt) {}
}
