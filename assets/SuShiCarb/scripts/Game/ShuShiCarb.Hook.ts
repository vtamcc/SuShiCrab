// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../ShuShiCarb.Global";
import ShuShiCarbFood from "./ShuShiCarb.Food";
import ShuShiCarbPlayer from "./ShuShiCarb.Player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbHook extends cc.Component {
    public static instance: ShuShiCarbHook = null;
    @property(cc.Node)
    hookRope: cc.Node = null;

    @property(cc.Node)
    hookSpriteOpen: cc.Node = null;

    @property(cc.Node)
    hookSpriteClose: cc.Node = null;

    @property(cc.Node)
    hookHead: cc.Node = null;
    
    hookSpeed = 30;
    hookState = 0;

    hookHeadBaseY: number = 80;
    hookRopeBaseWidth: number = 100;
    
    mousePos;
    isClickable: boolean = true;
    onLoad() {
        ShuShiCarbHook.instance = this;
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        let hookIndex = parseInt(cc.sys.localStorage.getItem("hookIndex")) || 0;
        let speed = Global.dataHook[hookIndex].speed;
        let widtHook = Global.dataHook[hookIndex].widthHook;
        Global.lengthHook += widtHook;
        console.log("speed ", speed);
        Global.speedHook += speed;
        console.log("Speed ne ",Global.speedHook);
    }


    initHook()  {
        this.hookHead.y  = this.hookHeadBaseY;
        this.hookRope.width = this.hookRopeBaseWidth;
    }

    start() {
        this.initHook();
    }
    setHookState(hookState) {
        this.hookState = hookState;
    }

    setHookSprite(isOpen: boolean) {
        this.hookSpriteClose.active = !isOpen;
        this.hookSpriteOpen.active = isOpen;
    }
 

    onTouchEnd(event: cc.Event.EventTouch) {
        if (!this.isClickable || this.hookState !== 0 || !ShuShiCarbPlayer.instace.isAtOrderPosition) {
            return;
        }
        this.hookState = 1;
        this.mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(event.getLocationX()));
        this.node.setPosition(this.mousePos);
    }

    moveHookHead(dt) {
        this.hookHead.y += dt * Global.speedHook;
        this.hookRope.width += dt * Global.lengthHook;
      
    }
    onDestroy() {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onTouchEnd, this);
    }
    update(dt) {
        this.setHookSprite(true);
        switch(this.hookState) {
            case 1:
                if(this.hookHead.y) {
                    this.moveHookHead(Global.speedHook * dt);
                    if(this.hookHead.y >= 600) {
                        this.hookState = 2;
                     
                    }
                }
                break;
            case 2:
                if(this.hookHead.y) {
                    this.moveHookHead(-Global.speedHook  * dt);
                    this.hookHead.getComponent(cc.BoxCollider).enabled = false;
                    if(this.hookHead.y  < 0) {
                        this.hookHead.y = 100;
                        this.hookRope.width = 100;
                        this.hookState = 0;
                        this.hookHead.getComponent(cc.BoxCollider).enabled = true;
                        this.disableClickTemporarily(0.2);
                    }
                }
               
                this.setHookSprite(false);
                break;
            case 0:
                default:
                    break;
        }
    }

    disableClickTemporarily(duration: number) {
        this.isClickable = false;
        this.scheduleOnce(() => {
            this.isClickable = true;
        }, duration);
    }
}