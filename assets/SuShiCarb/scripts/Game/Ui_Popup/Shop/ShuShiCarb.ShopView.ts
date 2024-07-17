// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../../../ShuShiCarb.Global";
import ShuShiCarbItemHook from "./ShuShiCarb.ItemHook";
import ShuShiCarbItemMoneyBag from "./ShuShiCarb.ItemMoneyBag";
import ShuShiCarbItemTimeHappy from "./ShuShiCarb.ItemTimeHappy";



const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbShopView extends cc.Component {
    public static instace: ShuShiCarbShopView = null;
    @property(cc.Label)
    lbGold: cc.Label = null;
    @property(cc.Node)
    nlistItem: cc.Node = null;

    @property(cc.Prefab)
    prfItemSpeedHook: cc.Prefab = null;
    
    @property(cc.Prefab)
    prfItemTimeHapy: cc.Prefab = null;

    @property(cc.Prefab)
    prfItemMoney: cc.Prefab = null;
    listDataHook = [];
    onLoad() {
        ShuShiCarbShopView.instace = this;
        this.itemSpeedHook();
        this.updateGold();
        this.itemMoney();
        this.itemTimeHappy();
    }
    start () {

    }

    itemSpeedHook() {
        let item = cc.instantiate(this.prfItemSpeedHook).getComponent(ShuShiCarbItemHook)
        this.nlistItem.addChild(item.node);
    }
    
    itemMoney() {
        let item = cc.instantiate(this.prfItemMoney).getComponent(ShuShiCarbItemMoneyBag)
        this.nlistItem.addChild(item.node);
    }

    itemTimeHappy() {
        let item = cc.instantiate(this.prfItemTimeHapy).getComponent(ShuShiCarbItemTimeHappy)
        this.nlistItem.addChild(item.node);
    }
    updateGold() {
        this.lbGold.string = Global.totalGold + " ";
    }


    
    // changeBtn(isTrue: boolean) {
    //     this.nBtnGreen.active = isTrue;
    //     this.nBtnGray.active = !isTrue;
    // }
    onClickClose() {
        this.node.destroy();
    }
    // update (dt) {}
}
