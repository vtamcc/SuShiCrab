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
      Global.totalGold = JSON.parse(cc.sys.localStorage.getItem("totalGold")) || 2000;
     
      this.updateTotalGold();
   }

   start () {

    }
   onClickPlay() {
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
      let shopView = cc.instantiate(this.prfShopView).getComponent(ShuShiCarbShopView)
      this.node.addChild(shopView.node);
   }
   updateTotalGold() {
      this.lbTotalGold.string = Global.totalGold + " "; 
   }

   onClickSettingView() {
      let setting = cc.instantiate(this.prfSetting)
      this.node.addChild(setting);
   }
    // update (dt) {}
}
