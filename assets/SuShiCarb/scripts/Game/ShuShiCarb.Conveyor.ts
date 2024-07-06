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
export default class ShuShiCarbConveyor extends cc.Component {

  @property(ShuShiCarbFood)
  itemFood_1: ShuShiCarbFood[] = [];
  @property
  idFood: number = 0;
  isMove = false;
   
   update() {
   if(this.isMove) {
      return;
   }
   if(this.idFood == 0) {
      if(this.node.x >= 1200) {
         this.resetPos();
      }
      this.node.x += 4;
   }else if(this.idFood == 1) {
      if(this.node.x <= -1800) {
         this.node.x = 600
      }
      this.node.x -= 3;
   }
   else if(this.idFood == 2) {
      if(this.node.x >= 1200) {
         this.resetPos();
      }
      this.node.x += 3;
   }
  
  }

  resetPos() {
   this.node.x = -900;
  }
}
