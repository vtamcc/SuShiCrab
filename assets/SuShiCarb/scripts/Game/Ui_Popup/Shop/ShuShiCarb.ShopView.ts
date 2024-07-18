// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../../../ShuShiCarb.Global";
import ShuShiCarbItemShop from "./ShuShiCarb.ItemShop";



const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbShopView extends cc.Component {
    public static instance: ShuShiCarbShopView = null;
    @property(cc.Label)
    lbGold: cc.Label = null;
    @property(cc.Node)
    nlistItem: cc.Node = null;

    @property(cc.Prefab)
    prfItem: cc.Prefab = null;
    test = 0;
    listDataHook = [];
    onLoad() {
        ShuShiCarbShopView.instance = this;
        this.updateGold();
        this.itemShop();
    }

    start () {

    }

    
    updateGold() {
        this.lbGold.string = Global.totalGold + " ";
    }


    itemShop() {
        for(let i = 0; i < 3; i++) {
           let item = cc.instantiate(this.prfItem).getComponent(ShuShiCarbItemShop)
           item.setData(i);
           this.nlistItem.addChild(item.node);
        }
    }
    // changeBtn(isTrue: boolean) {
    //     this.nBtnGreen.active = isTrue;
    //     this.nBtnGray.active = !isTrue;
    // }
    onClickClose() {
        if(Global.soundManager) {
            Global.soundManager.playSoundClick();
         }
        this.node.destroy();
    }
    // update (dt) {}
}
