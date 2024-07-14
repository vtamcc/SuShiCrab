// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbGameManager from "../../../ShuShiCarb.GameManager";
import Global from "../../../ShuShiCarb.Global";
import ShuShiCarbShopView from "./ShuShiCarb.ShopView";


const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbItemHook extends cc.Component {

    @property(cc.Label)
    lbPrice: cc.Label = null;

    @property(cc.Node)
    nBtnBuy: cc.Node = null;

    @property(cc.Node)
    nStateBuy: cc.Node = null;
    @property(cc.Node)
    nCheckmask: cc.Node = null;
    index = 0;
    isCheck = false;
    _data = null
    // data;
 
    setData(data) {
        this._data = data;
        this.nStateBuy.active = data.isBuy;
        console.log("data ", data);
    }
    // LIFE-CYCLE CALLBACKS:

    
    onLoad () {
        //this.setData();
        //this.checkClick(this.index);
        console.log(Global.dataHook[this.index].price);
        this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndex")) || 0;
        // Global.dataHook[this.index] = JSON.parse(cc.sys.localStorage.getItem("price")) || 150;
        // this.updatePrice(this.index);
        this.loadPurchaseState();
        this.checkClick();
        this.updatePrice(this.index);
    }

    loadPurchaseState() {
        const purchaseData = JSON.parse(cc.sys.localStorage.getItem("purchaseData")) || [];
        for (let i = 0; i < Global.dataHook.length; i++) {
            if (purchaseData[i]) {
                Global.dataHook[i].isBuy = purchaseData[i].isBuy;
                Global.dataHook[i].speed = purchaseData[i].speed;
                this.nStateBuy.children[i].active = purchaseData[i].isBuy;
            }
        }
    }

    savePurchaseState() {
        const purchaseData = Global.dataHook.map(item => ({
            isBuy: item.isBuy,
            speed: item.speed
        }));
        cc.sys.localStorage.setItem('purchaseData', JSON.stringify(purchaseData));
    }
    
    checkClick() {
       if(Global.totalGold >= Global.dataHook[this.index].price) {
           this.nCheckmask.active = false;
           this.isCheck = true;
       }else {
            this.nCheckmask.active = true;
            this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
        }
    }

    onClickBuy() {
        if(this.isCheck) {
            Global.dataHook[this.index].isBuy = true;
            Global.totalGold -= Global.dataHook[this.index].price;
            Global.speedHook += Global.dataHook[this.index].speed;
            this.nStateBuy.children[this.index].active =   Global.dataHook[this.index].isBuy;
            this.savePurchaseState();
            cc.sys.localStorage.setItem('itemIndex',this.index.toString());
            // cc.sys.localStorage.setItem('price', Global.dataHook[this.index].price.toString);
            this.index++;

            console.log(this.index);
            this.checkClick();
            ShuShiCarbShopView.instace.updateGold();
            ShuShiCarbGameManager.instance.updateTotalGold();
            this.updatePrice(this.index);
            console.log("data Hoook ",Global.dataHook);
        }
       
    }

    updatePrice(index) {
        this.lbPrice.string = Global.dataHook[index].price + ' '; 
    }
    start () {

    }

    // update (dt) {}
}