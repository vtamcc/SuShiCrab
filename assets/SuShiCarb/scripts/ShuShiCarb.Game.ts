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
    @property(cc.Node)
    nFood1: cc.Node = null;
    @property(cc.Node)
    nFood2: cc.Node = null;
    @property(cc.Node)
    nFood3: cc.Node = null;
    @property(cc.Node)
    listConveyor: cc.Node[] = [];
    @property(cc.Prefab)
    prfOrder: cc.Prefab = null;
    @property(cc.Label)
    lbCountDown: cc.Label = null;
    @property(cc.SpriteFrame)
    listSpfFood: cc.SpriteFrame [] = [];

    @property(cc.Node)
    conveyor_1: cc.Node = null;
    @property(cc.Prefab)
    prfFood: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:
    data = [0,1,2,3,4,5];
    playOrders = [];

    indexData = -1;

    numberCountdown = 7;
    countdownInterval: any = null;
    isMove  = false;
    onLoad () {
        ShuShiCarbGame.instance = this;
       
        // this.renderFoodOder();
        this.randomOrderFood();
        console.log(this.playOrders);
        this.renderOrderFood();
        this.renderFood();
        //this.conveyor();

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

    renderFood() {
        let itemFood = cc.instantiate(this.prfFood).getComponent(ShuShiCarbFood)
        itemFood.setData(1);
        this.conveyor_1.addChild(itemFood.node);
    }
    // startCountDown() {
    //     this.updateCountDown();
    //     this.countdownInterval = setInterval(() => {
    //         this.numberCountdown--;
    //         this.updateCountDown();
    //         if (this.numberCountdown <= 0) {
    //             this.stopCountDown();
    //             this.onCountDownEndGame();
    //         }
    //     }, 1000)
    // }

    // stopCountDown() {
    //     if (this.countdownInterval) {
    //         clearInterval(this.countdownInterval);
    //         this.countdownInterval = null;
    //     }
    // }

    // onCountDownEndGame() {
    //     console.log("You Lost")
    // }
    // updateCountDown() {
    //     this.lbCountDown.string = this.numberCountdown + " ";
    // }
    // renderFoodOder() {
    //     console.log(this.idOderFood);
    //     for(let i = 0; i < 3; i++) {
    //         let pOrder = cc.instantiate(this.prfOrder).getComponent(ShuShiCarbPlayer)
    //         pOrder.setData(this.idOderFood[i],1);
    //         this.node.addChild(pOrder.node)
    //     }
        
    // }

    // conveyor() {
    //    for(let i = 0; i < this.listConveyor.length; i++) {
    //         let dt = this.listConveyor[i];
    //         let item = dt.getComponent(ShuShiCarbConveyor).listNodeConveyor_1;
    //         for(let j = 0; j < item.length; j++) {
    //             let food = item[j];
    //             food.getComponent(cc.Sprite).spriteFrame = this.listSpfFood[this.playOrders[j]];
    //         }
    //    }
    // }
    start () {
        
    }

    // update (dt) {}
}
