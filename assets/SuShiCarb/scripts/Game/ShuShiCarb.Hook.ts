// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbFood from "./ShuShiCarb.Food";

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
    hookRopeBaseWidth: number = 0;
    
    mousePos;
   
    onLoad() {
        ShuShiCarbHook.instance = this;
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);  
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
        console.log("hookState ",hookState);
    }

    setHookSprite(isOpen: boolean) {
        this.hookSpriteClose.active = !isOpen;
        this.hookSpriteOpen.active = isOpen;
    }
 

    onMouseDown(event: cc.Event.EventMouse) {
        if(this.hookState !== 0) {
            return;
        }
        this.hookState = 1;
        this.mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(event.getLocationX()));

        console.log(this.mousePos);
        this.node.setPosition(this.mousePos);
    }

    moveHookHead(dt) {
        this.hookHead.y += dt * 30;
        this.hookRope.width -= dt * 40;
      
    }
    onDestroy() {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }
    update(dt) {
        this.setHookSprite(true);
        switch(this.hookState) {
            case 1:
                if(this.hookHead.y) {
                    this.moveHookHead(this.hookSpeed * dt);
                    if(this.hookHead.y >= 600) {
                        this.hookState = 2;
                     
                    }
                }
                break;
            case 2:
                if(this.hookHead.y) {
                    this.moveHookHead(-this.hookSpeed  * dt);
                    this.hookHead.getComponent(cc.BoxCollider).enabled = false;
                    if(this.hookHead.y  < 0) {
                        this.hookHead.y = 100;
                        this.hookRope.width = 50;
                        this.hookState = 0;
                        this.hookHead.getComponent(cc.BoxCollider).enabled = true;
                    }
                }
               
                this.setHookSprite(false);
                break;
            case 0:
                default:
                    break;
        }
    }

}