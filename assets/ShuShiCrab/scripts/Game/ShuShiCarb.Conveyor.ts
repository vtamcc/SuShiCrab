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
   
   
   @property
   idFood: number = 0;
   isMove = false;
      
      update() {
      if(this.isMove) {
         return;
      }
      if(this.idFood == 0) {
         if(this.node.x >= 1200||!this.node.active) {
            this.resetPos();
            this.resetSate(true);
         }
         this.node.x += 4;
      }else if(this.idFood == 1 ||!this.node.active) {
         if(this.node.x <= -1800) {
            this.node.x = 50;
            this.resetSate(true);
         }
         this.node.x -= 3;
      }
      else if(this.idFood == 2 ||!this.node.active) {
         if(this.node.x >= 1200) {
            this.resetPos();
            this.resetSate(true);
         }
         this.node.x += 3;
         
      }
   
   }

      

   resetPos() {
      this.node.x = -700;
   }

   resetSate(isActive: boolean) {
      this.node.getComponent(cc.Sprite).enabled = isActive;
      this.node.getComponent(cc.BoxCollider).enabled = isActive;
   }
}

