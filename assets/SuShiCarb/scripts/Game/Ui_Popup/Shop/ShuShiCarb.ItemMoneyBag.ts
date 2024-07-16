// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbGame from "../../../ShuShiCarb.Game";
import ShuShiCarbGameManager from "../../../ShuShiCarb.GameManager";
import Global from "../../../ShuShiCarb.Global";
import ShuShiCarbShopView from "./ShuShiCarb.ShopView";

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
        this.loadPurchaseState()
        this.checkClick();
    }

    loadPurchaseState() {
        const purchaseData = JSON.parse(cc.sys.localStorage.getItem("itemMoneyBag")) || [];
        for (let i = 0; i < Global.dataBagMoney.length; i++) {
            if (purchaseData[i]) {
                Global.dataBagMoney[i].isBuy = purchaseData[i].isBuy;
                Global.dataBagMoney[i].gold = purchaseData[i].gold;
                this.nStateBuy.children[i].active = purchaseData[i].isBuy;
            }
        }
    }

    savePurchaseState() {
        const purchaseData = Global.dataBagMoney.map(item => ({
            isBuy: item.isBuy,
            gold: item.gold
        }));
        cc.sys.localStorage.setItem('itemMoneyBag', JSON.stringify(purchaseData));
        cc.sys.localStorage.setItem('activeIndexMoneyBag', JSON.stringify(Global.activeIndex));
        cc.sys.localStorage.setItem('itemIndexMoneyBag', this.index.toString());
        cc.sys.localStorage.setItem('moneyBag', JSON.stringify(Global.moneyBag));
    }

    checkClick() {
        if(this.index < Global.dataBagMoney.length) {
            if(Global.totalGold >= Global.dataBagMoney[this.index].price) {
                this.nCheckmask.active = false;
                this.isCheck = true;
            }else {
                this.nCheckmask.active = true;
                this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
             }
        }
    }  

    onBuy() {
        if (this.isCheck && this.index < Global.dataBagMoney.length) {
            Global.checkBagMoney = true;
            Global.dataBagMoney[this.index].isBuy = true;
            Global.totalGold -= Global.dataBagMoney[this.index].price;
            this.nStateBuy.children[this.index].active = Global.dataBagMoney[this.index].isBuy;
            Global.activeIndexMoneyBag = this.index;
            this.savePurchaseState();
            this.index++;
            this.savePurchaseState();
            ShuShiCarbGameManager.instance.updateTotalGold();
            ShuShiCarbShopView.instace.updateGold();
            
            this.updatePrice(this.index);
           
        }
        console.log("onbuy")
    }

    updatePrice(index) {
        if(index < Global.dataBagMoney.length) {
            this.lbPrice.string = Global.dataBagMoney[index].price + ' ';
            this.lbLeverSpeedOld.string = "0";
            this.lbLeverSpeedNew.string = Global.dataBagMoney[index].gold + ' ';
        }else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
            this.lbLeverSpeedOld.string = "Max";
        }
    }
    start () {

    }

    // update (dt) {}
}
