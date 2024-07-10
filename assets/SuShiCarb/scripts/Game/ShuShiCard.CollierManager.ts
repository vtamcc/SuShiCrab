// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbGame from "../ShuShiCarb.Game";
import ShuShiCarbConveyor from "./ShuShiCarb.Conveyor";
import ShuShiCarbFood from "./ShuShiCarb.Food";
import ShuShiCarbHook from "./ShuShiCarb.Hook";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Collier extends cc.Component {

    onCollisionEnter(other, self) {
        let food = this.node.getComponent(ShuShiCarbFood);
        let id = food.id;
        console.log(food);
        if (other.tag == 1) {
            // ShuShiCarbHook.instance.hookObjects.push(food.node)
            // ShuShiCarbHook.instance.hookState = 2;
            // console.log("Thu ve luoon ne ")
            let nodeNew = new cc.Node()
            nodeNew.parent = this.node.parent;
            nodeNew.scale = 0.5;
            nodeNew.addComponent(cc.Sprite).spriteFrame = ShuShiCarbGame.instance.listSpfFood[id]
            nodeNew.setParent(ShuShiCarbHook.instance.hookHead);
            nodeNew.setPosition(cc.v2(0, -25));
            ShuShiCarbGame.instance.hookObjects.push({node: nodeNew, id: id});
            console.log("obj ", ShuShiCarbGame.instance.hookObjects)
            ShuShiCarbHook.instance.setHookState(2);
            food.isCheck = 1;
            ShuShiCarbGame.instance.checkCorrect();
            // this.scheduleOnce(()=> {
            //     ShuShiCarbGame.instance.removeNode(nodeNew, id);
                
            // },0.5)
            this.node.getComponent(ShuShiCarbConveyor).resetSate(false);
            this.scheduleOnce(() => {
                // Xóa món ăn khỏi mảng hookObjects
                ShuShiCarbGame.instance.hookObjects = ShuShiCarbGame.instance.hookObjects.filter(obj => obj.node !== nodeNew);
                nodeNew.destroy()
              }, 0.5);
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
