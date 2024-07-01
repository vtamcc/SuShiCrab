// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbConveyor from "./ShuShiCarb.Conveyor";
import ShuShiCarbFood from "./ShuShiCarb.Food";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbGolal extends cc.Component {

    public static instance: ShuShiCarbGolal = null;
    @property(cc.Node)
    nFood1: cc.Node = null;
    @property(cc.Node)
    nFood2: cc.Node = null;
    @property(cc.Node)
    nFood3: cc.Node = null;
    @property(cc.Node)
    listConveyor: cc.Node[] = [];

    @property(cc.SpriteFrame)
    listSpfFood: cc.SpriteFrame [] = [];
    // LIFE-CYCLE CALLBACKS:
    data = [0,1,2,3,4,5];
    onLoad () {
        ShuShiCarbGolal.instance = this;
        let randomElements = this.randomIdFood(this.data, 3);
        console.log(randomElements);
        this.conveyor();
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

    conveyor() {
        let randomFood = this.randomIdFood(this.data,2);
        for(let i = 0; i < this.listConveyor.length; i++) {
           
            let dt = this.listConveyor[i].getComponent(ShuShiCarbConveyor)
            console.log("Node ", dt);
            let item = dt.itemFood[i].getComponent(ShuShiCarbFood)

        }
    }
    start () {

    }

    // update (dt) {}
}
