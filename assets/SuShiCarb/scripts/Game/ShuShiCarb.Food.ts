// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbGame from "../ShuShiCarb.Game";
import ShuShiCarbHook from "./ShuShiCarb.Hook";



const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbFood extends cc.Component {

    @property(cc.Node)
    nFood: cc.Node = null;
    id = 0 
    // LIFE-CYCLE CALLBACKS:
    isCheck = 0;

    onLoad () {
       
    }

    start () {

    }

    setData(idFood) {
        this.id = idFood
        this.nFood.getComponent(cc.Sprite).spriteFrame = ShuShiCarbGame.instance.listSpfFood[idFood];
    }

    update(dt) {
    //    if(this.isCheck == 1) {
    //         this.node.setPosition(ShuShiCarbHook.instance.hookHead.x,ShuShiCarbHook.instance.hookHead.y);
    //    }
    }
}
