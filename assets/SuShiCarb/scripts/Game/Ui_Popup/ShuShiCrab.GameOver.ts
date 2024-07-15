import ShuShiCarbGame from "../../ShuShiCarb.Game";
import ShuShiCarbGameManager from "../../ShuShiCarb.GameManager";
const { ccclass, property } = cc._decorator;

@ccclass
export default class ShuShiCarbGameOver extends cc.Component {

    @property(cc.Label)
    lbGold: cc.Label = null;

    // @property(cc.Node)
    // starWin: cc.Node[] = [];
    // @property(cc.Node)
    // starLose: cc.Node[] = [];
    // @property(cc.Node)
    // textWin: cc.Node = null;
    // @property(cc.Node)
    // textLose: cc.Node = null;

    // gameWin() {
    //     this.starWin.forEach(element => {
    //         element.active = true;
    //     });
    //     this.starLose.forEach(element => {
    //         element.active = false;
    //     });
    //     this.textWin.active = true;
    //     this.textLose.active = false;
    //     // this.stopGamePlay();
    // }

    // gameLose() {
    //     this.starWin.forEach(element => {
    //         element.active = false;
    //     });
    //     this.starLose.forEach(element => {
    //         element.active = true;
    //     });
    //     this.textWin.active = false;
    //     this.textLose.active = true;
    //     // this.stopGamePlay();
    // }

    open() {
        cc.tween(this.node)
        .to(0.2, {scale: 1})
        .start()
    }

    onHome() {
        ShuShiCarbGameManager.instance.updateTotalGold();
        // let nodeGamePlay = cc.Canvas.instance.node.getChildByName("GamePlay")
        // nodeGamePlay.destroy();
        this.stopGamePlay();
    }

    goldEnd() {
        this.lbGold.string = ShuShiCarbGame.instance.gold + " ";
        
    }
    stopGamePlay() {
        let nodeGamePlay = cc.Canvas.instance.node.getChildByName("Main")
        ShuShiCarbGameManager.instance.nHome.getChildByName('playbtn').getComponent(cc.Button).interactable = true;
        nodeGamePlay.destroy();
    }

    onLoad() {
        this.open()
        this.goldEnd();
    }
}
