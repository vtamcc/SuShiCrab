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
   
    // @property(cc.Label)
    // lbLeverSpeedOld: cc.Label = null;
    // @property(cc.Label)
    // lbLeverSpeedNew: cc.Label = null;

    @property(cc.SpriteFrame)
    lsSpFItemShop: cc.SpriteFrame[] = [];
    index = 0;
    isCheck = false;
    _data = null
    _data2 = null;
    _data3 = null;
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
                // this.lbLeverSpeedOld.node.active = false;
                // this.lbLeverSpeedNew.node.x = 27;
                // this.lbLeverSpeedNew.node.y = 5;
                break;
            case 2: // time Happy
                this._data = Global.dataTimeHappy[this.index];
                this.nItemShop.getComponent(cc.Sprite).spriteFrame = this.lsSpFItemShop[id];
                // this.lbLeverSpeedOld.node.active = false;
                // this.lbLeverSpeedNew.node.x = 25;
                // this.lbLeverSpeedNew.node.y = 6;
                this.index = Global.timeIndex;
                this.nStateBuy.x = -115;
                this.nStateBuy.y = -28;
                break;
            default:
                break;
        }
        this.updatePrice(this.index,Global.totalGold);
    }

    updatePrice(index, totalGold) {
        if (index < 4) {
            this.lbPrice.string = this._data.price + ' ';
            if (totalGold >= this._data.price) {
                //this.lbLeverSpeedOld.string = "0";
                this.nBtnBuy.getComponent(cc.Button).interactable = true;
            } else {
                //this.lbLeverSpeedNew.string = this._data.price + ' ';
                //this.lbLeverSpeedOld.string = this._data.price + ' ';
                this.nBtnBuy.getComponent(cc.Button).interactable = false;
            }
        } else {
            this.lbPrice.string = "Max";
            //this.lbLeverSpeedNew.string = "Max";
            //this.lbLeverSpeedOld.string = "Max";
            this.nBtnBuy.getComponent(cc.Button).interactable = false;
        }
        this.updatePurchaseState();
    }
    // updatePrice(index, totalGold) {
    //     if (index < 4) {
    //         this.lbPrice.string = this._data.price + ' ';
    //         if (totalGold >= this._data.price) {
    //             switch (this.itemId) {
    //                 case 0:
                        
    //                     break;
                
    //                 default:
    //                     break;
    //             }
    //             this.lbLeverSpeedOld.string = "0";
    //             this.nBtnBuy.getComponent(cc.Button).interactable = true;
    //         } else {
    //             this.lbLeverSpeedNew.string = this._data.price + ' ';
    //             this.lbLeverSpeedOld.string = this._data.price + ' ';
    //             this.nBtnBuy.getComponent(cc.Button).interactable = false;
    //         }
    //     } else {
    //         this.lbPrice.string = "Max";
    //         this.lbLeverSpeedNew.string = "Max";
    //         this.lbLeverSpeedOld.string = "Max";
    //         this.nBtnBuy.getComponent(cc.Button).interactable = false;
    //     }
    //     this.updatePurchaseState();
    // }
   

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

    onBuy() {
        if (Global.soundManager) {
            Global.soundManager.playSoundClick();
        }

        if ( this.index < 4) {
            this.nStateBuy.children[this.index].active = true;
            Global.totalGold -= this._data.price;

            switch (this.itemId) {
                case 0:
                    this.index++;
                    Global.hookIndex = this.index;
                    this._data = Global.dataHook[this.index];
                    Global.speedHook += this._data.speed;
                    Global.lengthHook += this._data.widthHook;
                    cc.sys.localStorage.setItem("speedHook",JSON.stringify(Global.speedHook));
                    cc.sys.localStorage.setItem("lengthHook",JSON.stringify(Global.lengthHook));
                    cc.sys.localStorage.setItem("hookIndex", this.index)
                    break;
                case 1:
                    this.index++;
                    Global.checkBagMoney = true;
                    Global.bagIndex = this.index;
                    this._data = Global.dataBagMoney[this.index];
                    Global.moneyBag += this._data.gold;
                    cc.sys.localStorage.setItem("moneyBag",JSON.stringify(Global.moneyBag));
                    cc.sys.localStorage.setItem("bagIndex",this.index);
                    cc.sys.localStorage.setItem("checkBagMoney", JSON.stringify(Global.checkBagMoney));
                    break;
                case 2:
                    this.index++
                    Global.timeIndex = this.index;
                    this._data = Global.dataTimeHappy[this.index];
                    cc.sys.localStorage.setItem("timeIndex", this.index);
                    Global.timeHappy += this._data.time;
                    cc.sys.localStorage.setItem("timeHappy",JSON.stringify(Global.timeHappy));
                    //console.log("Index ", this.index);
                    break;
            }
           
            this.savePurchaseState();
          
            this.updatePrice(this.index,Global.totalGold);
            ShuShiCarbGameManager.instance.updateTotalGold();
            ShuShiCarbShopView.instance.updateGold(); 
            ShuShiCarbShopView.instance.updateItemsState(Global.totalGold);
           
        }

        
    }
}
