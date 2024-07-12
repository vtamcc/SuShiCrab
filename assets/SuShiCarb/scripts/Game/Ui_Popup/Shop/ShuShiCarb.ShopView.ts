// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../../../ShuShiCarb.Global";
import ShuShiCarbItemHook from "./ShuShiCarb.ItemHook";



const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbShopView extends cc.Component {
    public static instace: ShuShiCarbShopView = null;
    @property(cc.Label)
    lbGold: cc.Label = null;
    @property(cc.Node)
    nItemSpeedHook: cc.Node = null;

    @property(cc.Prefab)
    prfItemSpeedHook: cc.Prefab = null;

    onLoad() {
        ShuShiCarbShopView.instace = this;
        this.itemSpeedHook();
        this.updateGold();
    }
    start () {

    }

    itemSpeedHook() {
        let item = cc.instantiate(this.prfItemSpeedHook).getComponent(ShuShiCarbItemHook)
        this.nItemSpeedHook.addChild(item.node);

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
