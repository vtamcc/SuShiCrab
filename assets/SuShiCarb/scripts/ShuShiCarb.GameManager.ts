// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


import ShuShiCarbShopView from "./Game/Ui_Popup/Shop/ShuShiCarb.ShopView";
import ShuShiCarbGame from "./ShuShiCarb.Game";
import Global from "./ShuShiCarb.Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbGameManager extends cc.Component {   
   public static instance: ShuShiCarbGameManager = null;
   @property(cc.Node)
   nHome: cc.Node = null;
   @property(cc.Prefab)
   prfGame: cc.Prefab = null;

   @property(cc.Prefab)
   prfShopView: cc.Prefab = null;
   @property(cc.Label) 
   lbTotalGold: cc.Label = null;
   @property(cc.Prefab)
   prfSetting: cc.Prefab = null;
    // LIFE-CYCLE CALLBACKS:

   onLoad () {
      ShuShiCarbGameManager.instance = this;
      Global.totalGold = JSON.parse(cc.sys.localStorage.getItem("totalGold")) || 250;
     
      this.updateTotalGold();
   }

   start () {

    }
   onClickPlay() {
      if(Global.soundManager) {
         Global.soundManager.playSoundClick();
      }
      //  this.nHome.active = false;
      //  this.nGame.active = true;
      let game = cc.instantiate(this.prfGame).getComponent(ShuShiCarbGame)
      this.node.addChild(game.node);
      //this.nHome.active = false;
      this.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = false;
      this.nHome.getChildByName('shop').getComponent(cc.Button).interactable = false;
      this.nHome.getChildByName('setting').getComponent(cc.Button).interactable = false;
      
   }

   onClickShopView() {
      if(Global.soundManager) {
         Global.soundManager.playSoundClick();
      }
      let shopView = cc.instantiate(this.prfShopView).getComponent(ShuShiCarbShopView)
      this.node.addChild(shopView.node);
   }
   updateTotalGold() {
      this.lbTotalGold.string = Global.totalGold + " ";
      cc.sys.localStorage.setItem('totalGold',JSON.stringify(Global.totalGold));
      console.log("Tong tien ", Global.totalGold);
   }

   onClickSettingView() {
      if(Global.soundManager) {
         Global.soundManager.playSoundClick();
      }
      let setting = cc.instantiate(this.prfSetting)
      this.node.addChild(setting);
   }

   clickTest() {
      cc.sys.localStorage.clear();
   }
    // update (dt) {}
}
