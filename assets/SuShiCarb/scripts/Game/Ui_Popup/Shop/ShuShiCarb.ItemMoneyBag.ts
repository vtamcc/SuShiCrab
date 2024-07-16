// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbGame from "../../../ShuShiCarb.Game";
import Global from "../../../ShuShiCarb.Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbItemMoneyBag extends cc.Component {

    
    @property(cc.Label)
    lbPrice: cc.Label = null;
    @property(cc.Node)
    nBtnBuy: cc.Node = null;
    @property(cc.Node)
    nStateBuy: cc.Node = null;
    @property(cc.Node)
    nCheckmask: cc.Node = null;

    @property(cc.Label)
    lbLeverSpeedOld: cc.Label = null;
    @property(cc.Label)
    lbLeverSpeedNew: cc.Label = null;

    index = 0;
    isCheck = false;
    _data = null
    onLoad() {
        this.checkClick();
    }
    checkClick() {
        if(this.index < Global.dataMoney.length) {
            if(Global.totalGold >= Global.dataMoney[this.index].price) {
                this.nCheckmask.active = false;
                this.isCheck = true;
            }else {
                this.nCheckmask.active = true;
                this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
             }
        }
    }  

    onBuy() {
        if (this.isCheck) {
            // Trừ vàng của người chơi
            // Global.totalGold -= Global.dataMoney[this.index].price;
            // cc.sys.localStorage.setItem('totalGold', JSON.stringify(Global.totalGold));
            Global.checkBagMoney = true;
        }
        console.log("onbuy")
    }

    start () {

    }

    // update (dt) {}
}
