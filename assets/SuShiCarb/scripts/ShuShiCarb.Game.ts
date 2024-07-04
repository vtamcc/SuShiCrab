// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbConveyor from "./Game/ShuShiCarb.Conveyor";
import ShuShiCarbFood from "./Game/ShuShiCarb.Food";
import ShuShiCarbPlayer from "./Game/ShuShiCarb.Player";


const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbGame extends cc.Component {

    public static instance: ShuShiCarbGame = null;
    @property(cc.Prefab)
    prfOrder: cc.Prefab = null;
    @property(cc.Label)
    lbCountDown: cc.Label = null;
    @property(cc.SpriteFrame)
    listSpfFood: cc.SpriteFrame [] = [];

    @property(cc.Node)
    conveyor_1: cc.Node = null;

    @property(cc.Node)
    conveyor_2: cc.Node = null;

    @property(cc.Node)
    conveyor_3: cc.Node = null;

    @property(cc.Prefab)
    prfFood: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:
    data = [0,1,2,3,4,5];
    playOrders = [];
    arrResult = [];
    indexData = 0;

    numberCountdown = 7;
    countdownInterval: any = null;
    isMove  = false;
    onLoad () {
        ShuShiCarbGame.instance = this;
       
        // this.renderFoodOder();
        this.randomOrderFood();
        console.log(this.playOrders);
        this.renderOrderFood();
        //this.renderFood();
        this.conveyor(this.conveyor_1);
        this.conveyor(this.conveyor_2);
        this.conveyor(this.conveyor_3);

        console.log("asdasdasd",this.arrResult);
    }

    // randomIdFood(arr,count) {
    //     let idFood = [];
    //     for(let i = 0; i < count; i++) {
    //         let randomIndex = Math.floor(Math.random() * arr.length);
    //         idFood.push(randomIndex);
    //         arr.splice(randomIndex,1);
    //     }
    //     return arr;
    // }
    randomOrderFood() {
        for(let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * this.data.length);
            let foodId = this.data[randomIndex];
            this.playOrders.push(foodId);
        }
    }

    renderOrderFood() {
        this.indexData++
        for(let i = 0; i < this.playOrders.length; i++) {
            let prfPlayOrder = cc.instantiate(this.prfOrder).getComponent(ShuShiCarbPlayer)

            prfPlayOrder.setData(this.playOrders[0],this.playOrders[1],this.playOrders[2],this.indexData);
            this.node.addChild(prfPlayOrder.node);
        }
    }

   

    conveyor(node: cc.Node) {
       for(let i = 0; i < node.childrenCount; i++) {
            let item = node.children[i].getComponent(ShuShiCarbFood);
            item.setData(this.data[i]);
       }
    } 
    start () {
        
    }

    // update (dt) {}
}
