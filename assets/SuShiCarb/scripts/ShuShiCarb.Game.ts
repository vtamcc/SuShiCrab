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

    @property(cc.SpriteFrame)
    listSpfFood: cc.SpriteFrame [] = [];
    // LIFE-CYCLE CALLBACKS:
    data = [0,1,2,3,4];

    isMove  = false;
    onLoad () {
        ShuShiCarbGame.instance = this;
        this.conveyor()
        this.renderFoodOder();

    }

    randomIdFood(arr,count) {
        let idFood = [];
        for(let i = 0; i < count; i++) {
            let randomIndex = Math.floor(Math.random() * arr.length);
            idFood.push(randomIndex);
            arr.splice(randomIndex,1);
        }
        return arr;
    }

    renderFoodOder() {
        let randomFood = this.randomIdFood(this.data,3);
        console.log(randomFood);
        let pOrder = cc.instantiate(this.prfOrder).getComponent(ShuShiCarbPlayer)
        pOrder.setData(randomFood,2);
        this.node.addChild(pOrder.node)
    }

    conveyor() {
        let randomFood = this.randomIdFood(this.data,3);
        console.log(randomFood);
        for(let i = 0; i < this.listConveyor.length; i++) {
            let dt = this.listConveyor[i].getComponent(ShuShiCarbConveyor).itemFood;
            for(let j = 0; j < dt.length; j++) {
                let item = dt[j].getComponent(ShuShiCarbFood);
                item.setData(randomFood[j]);
            }
        }
    }
    start () {
        
    }

    // update (dt) {}
}
