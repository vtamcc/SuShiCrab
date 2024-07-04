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
export default class Collier extends cc.Component {

    onCollisionEnter(other, self) {
        let food = this.node.getComponent(ShuShiCarbFood).id;
        console.log(food);
        
        if (other.tag == 1) {
            console.log("va cham")
            ShuShiCarbGame.instance.arrResult.push(food);
            console.log("sdasd", ShuShiCarbGame.instance.arrResult);
        }

    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let node = cc.director.getCollisionManager()
        node.enabled = true;
        node.enabledDebugDraw = true;
    }

    start () {

    }

    // update (dt) {}
}
