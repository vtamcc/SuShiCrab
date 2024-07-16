// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbConveyor from "./Game/ShuShiCarb.Conveyor";
import ShuShiCarbFood from "./Game/ShuShiCarb.Food";
import ShuShiCarbPlayer from "./Game/ShuShiCarb.Player";
import ShuShiCarbGameOver from "./Game/Ui_Popup/ShuShiCrab.GameOver";

import ShuShiCarbGameManager from "./ShuShiCarb.GameManager";
import Global from "./ShuShiCarb.Global";
import ShuShiCarbGoldFly from "./ShuShiCarb.GoldFly";


const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbGame extends cc.Component {

    public static instance: ShuShiCarbGame = null;
    @property(cc.Prefab)
    prfOrder: cc.Prefab = null;
    @property(cc.Node)
    nHome: cc.Node = null;
    @property(cc.SpriteFrame)
    listSpfFood: cc.SpriteFrame [] = [];
    @property(cc.Node)
    nPlayer: cc.Node = null;
    @property(cc.Node)
    conveyor_1: cc.Node = null;

    @property(cc.Node)
    conveyor_2: cc.Node = null;

    @property(cc.Node)
    conveyor_3: cc.Node = null;

    @property(cc.Prefab)
    prfFood: cc.Prefab = null;

    @property(cc.Node)
    lsFoodTable: cc.Node[]= [];

    @property(cc.Label)
    lbGold: cc.Label = null;
   
    @property(cc.Prefab)
    prfGameOver: cc.Prefab = null;
    @property(cc.ProgressBar)
    prgTime: cc.ProgressBar = null;
    @property(cc.Label)
    lbCountDown: cc.Label = null
    @property(cc.Node)
    nGoldFly: cc.Node = null; 
    @property(cc.Node)
    nCheckFalse: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:
    data = [0,1,2,3,4,5];
    playOrders = [];
    hookObjects: {node:cc.Node, id: number} [] = [];
    indexData = 0;
    countCorrect = 0;
    // numberCountdown = 7;
    countdownInterval: any = null;
    isMove  = false;
    player = null;
    gold = 0;
    duration = 60;
    numberCountDown = 0;
    isCountDown = false;
    onLoad () {
        ShuShiCarbGame.instance = this;
       
        // this.renderFoodOder();
        this.randomOrderFood();
        console.log(this.playOrders);
        this.conveyor(this.conveyor_1);
        this.conveyor(this.conveyor_2);
       this.conveyor(this.conveyor_3);
        this.renderOrderFood();
        this.startCountDown();
        console.log(Global.checkBagMoney);
        //this.schedule(this.addRandomMoneyBag, 5)
        //this.renderFood();      
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
        this.playOrders = []; 
        for(let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * this.data.length);
            let foodId = this.data[randomIndex];
            this.playOrders.push(foodId);
        }
    }

    startCountDown() {
        this.isCountDown = true;
        this.numberCountDown = this.duration;
        this.schedule(this.updateCountDown,1);
    }

    updateCountDown() {
        if(this.numberCountDown > 0) {
            this.numberCountDown--;
            this.updatePrgressTime();
            this.lbCountDown.string = "00: " + this.numberCountDown + " " ;
        }else {
            this.isCountDown = false;
            this.lbCountDown.string = "00:00"
            this.gameOver(this.prfGameOver);
          
        }
    }

    gameOver(prfGameOver: cc.Prefab) {
        let gamOver = cc.instantiate(prfGameOver).getComponent(ShuShiCarbGameOver)
        this.node.addChild(gamOver.node);
    }

    updatePrgressTime() {
        if(this.prgTime) {
            this.prgTime.progress -= 1/ this.duration;
        }
    }

    renderOrderFood() {
        // if (this.player) {
        //     this.player.node.destroy(); // Destroy previous player node
        // }
        this.player = cc.instantiate(this.prfOrder).getComponent(ShuShiCarbPlayer);
        for(let i = 0; i < this.player.listFood.length; i++) {
            let food = this.player.listFood[i]
            food.getComponent(cc.Sprite).spriteFrame = this.listSpfFood[this.playOrders[i]];
        }
        this.indexData++;
        this.player.setData(this.indexData);
        this.nPlayer.addChild(this.player.node);
    }

    checkCorrect() {
        if (this.hookObjects.length === 0) {
            return;
        }
        let hookFoodId = this.hookObjects[0].id;
        let foundMatch = false;
        for (let i = 0; i < this.playOrders.length; i++) {
            if (this.playOrders[i] === hookFoodId) {
                if (!this.player.listFood[i].getChildByName("tick").active) {
                    this.player.listFood[i].getChildByName("tick").active = true;
                    this.nGoldFly.active = true;
                    this.scheduleOnce(() => {
                        this.lsFoodTable[i].getComponent(cc.Sprite).spriteFrame = this.listSpfFood[hookFoodId];
                        this.lsFoodTable[i].active = true;
                        this.nGoldFly.active = false;
                    },0.2);
                    ShuShiCarbGoldFly.instance.playAnim();
                    this.gold += 5;
                    
                    this.updateGold();
                    foundMatch = true;
                    this.countCorrect++;
                    break;
                }
                
            }
            
        }

        this.lbGold.string = this.gold + ' ';
        if (!foundMatch) {
        }
        
        if(this.countCorrect >=3) {
            this.resetGame(true);
        }
    }



    updateGold() {
        Global.totalGold += 5;
        console.log("Tong tien ", Global.totalGold);
        cc.sys.localStorage.setItem('totalGold',JSON.stringify(Global.totalGold));
    }
    conveyor(node: cc.Node) {
        for (let i = 0; i < node.childrenCount; i++) {
            let item = node.children[i].getComponent(ShuShiCarbFood);
            if(Global.checkBagMoney == true && i === 5) {
                item.setData(999);
                console.log("khong chay vao day a ")
            } else {
                let randomIndex = Math.floor(Math.random() * this.data.length);
                item.setData(this.data[randomIndex]);
            }
           
        }
    }

    removeNode(node: cc.Node, id) {
        node.destroy();
        for(let i = 0; i < this.hookObjects.length; i++) {
            if(this.hookObjects[i].node == node && this.hookObjects[i].id == id) {
                this.hookObjects.splice(i,1);
            }
        }

    }
    resetFoodTable() {
        for(let i = 0; i < this.lsFoodTable.length; i++) {
            let item = this.lsFoodTable[i];
            item.active = false;
        } 
    }
    resetGame(isHappy: boolean) {
        if(this.indexData >= 8) {
            this.indexData = 0;
        }
        console.log("Resetting game...");
        this.countCorrect = 0;
        let resetCallback = () => {
            this.randomOrderFood(); 
            this.renderOrderFood(); 
            // this.conveyor(this.conveyor_1);
            // this.conveyor(this.conveyor_2); 
            // this.conveyor(this.conveyor_3);
            this.resetFoodTable();
        }

        if(isHappy) {
            this.player.happyEffectPlayerMoveOut(resetCallback);
        }else {
            this.player.sadEffectPlayerMoveOut(resetCallback);
        }
    }

    onclickBack() { 
        ShuShiCarbGameManager.instance.updateTotalGold();
        this.node.destroy();
        ShuShiCarbGameManager.instance.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = true;
        ShuShiCarbGameManager.instance.nHome.getChildByName('shop').getComponent(cc.Button).interactable = true;
        ShuShiCarbGameManager.instance.nHome.getChildByName('setting').getComponent(cc.Button).interactable = true;
    }

    
    start () {
    }

    // update (dt) {}
}
