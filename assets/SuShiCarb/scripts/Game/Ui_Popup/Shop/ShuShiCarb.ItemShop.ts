// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbGameManager from "../../../ShuShiCarb.GameManager";
import Global from "../../../ShuShiCarb.Global";
import ShuShiCarbShopView from "./ShuShiCarb.ShopView";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ShuShiCarbItemShop extends cc.Component {

    @property(cc.Node)
    nItemShop: cc.Node = null;
    @property(cc.Label)
    lbPrice: cc.Label = null;
    @property(cc.Node)
    nBtnBuy: cc.Node = null;
    @property(cc.Node)
    nStateBuy: cc.Node = null;
   
    @property(cc.Label)
    lbLeverSpeedOld: cc.Label = null;
    @property(cc.Label)
    lbLeverSpeedNew: cc.Label = null;

    @property(cc.SpriteFrame)
    lsSpFItemShop: cc.SpriteFrame[] = [];
    index = 0;
    isCheck = false;
    _data = null
    itemId = 0;

    onLoad() {
        //this.checkClick();
    }

    setData(id) {
        this.itemId = id;
        switch (id) {
            case 0: // hook
                this.index = Global.hookIndex;
                this._data = Global.dataHook[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                console.log(this._data,this.index);
                break;
            case 1: // Bag money
                this.index = Global.bagIndex;
                this._data = Global.dataBagMoney[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                this.lbLeverSpeedOld.node.active = false;
                break;
            case 2: // time Happy
                this._data = Global.dataTimeHappy[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                this.lbLeverSpeedOld.node.active = false;
                this.index = Global.timeIndex;

                break;
            default:
                break;
        }
        this.updatePrice(this.index);

    }

    updatePrice(index) {
        if (index < 4) {
            this.lbPrice.string = this._data.price + ' ';
            this.lbLeverSpeedOld.string = "0";
            //this.lbLeverSpeedNew.string = this._data[index].gold ? this._data[index].gold + ' ' : this._data[index].time + ' ';
            this.nBtnBuy.getComponent(cc.Button).interactable = true;
            console.log("Vao If ")
        } else {
            this.lbPrice.string = "Max";
            this.lbLeverSpeedNew.string = "Max";
            this.lbLeverSpeedOld.string = "Max";
            this.nBtnBuy.getComponent(cc.Button).interactable = false;
            console.log("vao Else");
        }

        this.updatePurchaseState();
    }

    savePurchaseState() {
        let purchaseData = {
            dataHook: Global.dataHook,
            dataBagMoney: Global.dataBagMoney,
            dataTimeHappy: Global.dataTimeHappy,
            activeIndexHook: Global.hookIndex,
        };
        cc.sys.localStorage.setItem('itemShopData', JSON.stringify(purchaseData));
        
    

    }

    updatePurchaseState() {
        for (let i = 0; i <= this.index; i++) {
            this.nStateBuy.children[i].active = true;
        }
    }

    checkBuy(): boolean {
        return Global.totalGold >= this._data.price;
    }

    onBuy() {
        if ( this.index < 4) {
            this.nStateBuy.children[this.index].active = true;
            Global.totalGold -= this._data.price;

            switch (this.itemId) {
                case 0:
                    this.index++;
                    Global.hookIndex = this.index;
                    this._data = Global.dataHook[this.index];
                    cc.sys.localStorage.setItem("hookIndex", this.index)
                    break;
                case 1:
                    this.index++;
                    Global.checkBagMoney = true;
                    Global.bagIndex = this.index;
                    this._data = Global.dataBagMoney[this.index];
                    cc.sys.localStorage.setItem("bagIndex",this.index);
                    cc.sys.localStorage.setItem("checkBagMoney", JSON.stringify(Global.checkBagMoney));
                    break;
                case 2:
                    this.index++
                    Global.timeIndex = this.index;
                    this._data = Global.dataTimeHappy[this.index];
                    cc.sys.localStorage.setItem("timeIndex", this.index);
                    //console.log("Index ", this.index);
                    break;
            }
            this.updatePrice(this.index);
            this.savePurchaseState();
            ShuShiCarbGameManager.instance.updateTotalGold();
            ShuShiCarbShopView.instance.updateGold();
            
            //this.checkClick(); // Gọi lại checkClick để cập nhật trạng thái nút sau khi mua
        }
    }
    // LIFE-CYCLE CALLBACKS:


    // onLoad () {
    //     this.index = JSON.parse(cc.sys.localStorage.getItem("itemIndex")) || 0;
    //     this.loadPurchaseState();
    //     this.checkClick();
    //     this.updatePrice(this.index);
    // }

    // loadPurchaseState() {
    //     const purchaseData = JSON.parse(cc.sys.localStorage.getItem("purchaseData")) || [];
    //     for (let i = 0; i < Global.dataHook.length; i++) {
    //         if (purchaseData[i]) {
    //             Global.dataHook[i].isBuy = purchaseData[i].isBuy;
    //             Global.dataHook[i].speed = purchaseData[i].speed;
    //             this.nStateBuy.children[i].active = purchaseData[i].isBuy;
    //         }
    //     }
    // }

    // savePurchaseState() {
    //     const purchaseData = Global.dataHook.map(item => ({
    //         isBuy: item.isBuy,
    //         speed: item.speed
    //     }));
    //     cc.sys.localStorage.setItem('purchaseData', JSON.stringify(purchaseData));
    //     cc.sys.localStorage.setItem('activeIndex', JSON.stringify(Global.activeIndex));
    //     cc.sys.localStorage.setItem('itemIndex', this.index.toString());
    //     cc.sys.localStorage.setItem('speedHook', JSON.stringify(Global.speedHook));
    //     cc.sys.localStorage.setItem('lengthHook', JSON.stringify(Global.lengthHook));
    // }


    // checkClick() {
    //     // if(this.index < Global.dataHook.length) {
    //     //     if(Global.totalGold >= Global.dataHook[this.index].price) {
    //     //         this.nCheckmask.active = false;
    //     //         this.isCheck = true;
    //     //     }else {
    //     //          this.nCheckmask.active = true;
    //     //          this.isCheck = false;
    //     //          this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
    //     //      }
    //     // }
    //     if(this.index < Global.dataHook.length && Global.totalGold >= Global.dataHook[this.index].price) { 
    //             this.nCheckmask.active = false;
    //             this.isCheck = true; 
    //     }
    //     else {
    //         this.nCheckmask.active = true;
    //         this.isCheck = false;
    //         this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
    //     }
    //     console.log(this.index);

    // }

    // onClickBuy() {
    //     if(this.isCheck && this.index < Global.dataHook.length) {
    //         Global.dataHook[this.index].isBuy = true;
    //         Global.totalGold -= Global.dataHook[this.index].price;
    //         Global.speedHook += Global.dataHook[this.index].speed;
    //         Global.lengthHook += Global.dataHook[this.index].widthHook;

    //         this.nStateBuy.children[this.index].active = Global.dataHook[this.index].isBuy;
    //         Global.activeIndex = this.index;

    //         this.index++;
    //         this.checkClick();
    //         this.savePurchaseState();
    //         ShuShiCarbGameManager.instance.updateTotalGold();
    //         ShuShiCarbShopView.instace.updateGold();
    //         this.updatePrice(this.index);
    //         console.log("data Hoook ",Global.dataHook);
    //     } else {
    //         this.nCheckmask.active = true;
    //         this.nBtnBuy.getComponent(cc.Toggle).interactable = false;
    //     }

    // }

    // updatePrice(index) {
    //     if(index < Global.dataHook.length) {
    //         this.lbPrice.string = Global.dataHook[index].price + ' '; 
    //         this.lbLeverSpeedNew.string = Global.dataHook[index].speed + 1 + ' ';
    //         this.lbLeverSpeedOld.string = Global.dataHook[index].speed + ' ' +  ' -> ';
    //     }else {
    //         this.lbPrice.string = "Max";
    //         this.lbLeverSpeedNew.string = "Max";
    //         this.lbLeverSpeedOld.string = "Max";
    //     }

    // }
    // start () {

    // }

    // update (dt) {}
}
