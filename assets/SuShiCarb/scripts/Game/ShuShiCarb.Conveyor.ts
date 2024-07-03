// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbFood from "./ShuShiCarb.Food";



const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbConveyor extends cc.Component {

//    @property(cc.Node)
//    listNodeConveyor_1: cc.Node[] = [];
//    nextFoodIndex1: 0;
//    beltSpeed: cc.Vec2 = cc.v2(100, 0);
   @property(cc.Node)
   itemFood_1: cc.Node;
   @property(cc.Prefab)
   prfFood: cc.Prefab = null;
   
   onLoad() {
        
   }

//     }
   update (dt) {
   

   }
}
