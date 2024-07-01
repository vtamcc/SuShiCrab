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

  @property
  idConveyor: number = 0;


   update (dt) {
        if(this.idConveyor == 0 || this.idConveyor == 2) {
           if(this.node.x > 650) {
            this.node.x = -650;
           }
           this.node.x += 5;
        }else if(this.idConveyor == 1) {
            if(this.node.x < -650) {
                this.node.x = 650;
                
            }
            this.node.x -= 5;
        }

        
   }
}
