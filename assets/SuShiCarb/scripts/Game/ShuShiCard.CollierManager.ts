// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbGame from "../ShuShiCarb.Game";
import ShuShiCarbFood from "./ShuShiCarb.Food";
import ShuShiCarbHook from "./ShuShiCarb.Hook";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Collier extends cc.Component {

    onCollisionEnter(other, self) {
        let food = this.node.getComponent(ShuShiCarbFood);
        console.log(food);
        
        if (other.tag == 1) {
            console.log("va cham")
            ShuShiCarbHook.instance.hookObjects.push(food.node)
            ShuShiCarbHook.instance.hookState = 2;
            console.log("Thu ve luoon ne ")

            food.isCheck = 1;
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
