// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../../ShuShiCarb.Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbShopView extends cc.Component {
    @property(cc.Label)
    lbGold: cc.Label = null;
    @property(cc.Node)
    nBtnGreen: cc.Node = null;
    @property(cc.Node)
    nBtnGray: cc.Node = null;
    isCheck = false;

    onLoad() {
        this.updateGold();
        this.checkGold();
    }
    start () {

    }
    
    checkGold() {
        if(Global.totalGold >= Global.priceSpeedHook) {
            this.changeBtn(true);
            this.isCheck = true;
        }
    }

    clickBuyHookSpeed() {
      
        this.updateGold();
        console.log(Global.totalGold - Global.priceSpeedHook);
    }
    updateGold() {
        this.lbGold.string = Global.totalGold + ' ';
    }


    changeBtn(isTrue: boolean) {
        this.nBtnGreen.active = isTrue;
        this.nBtnGray.active = !isTrue;
    }
    onClickClose() {
        this.node.destroy();
    }
    // update (dt) {}
}
