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
    @property(cc.Node)
    hookRope: cc.Node = null;

    @property(cc.Node)
    hookSpriteOpen: cc.Node = null;

    @property(cc.Node)
    hookSpriteClose: cc.Node = null;

    @property(cc.Node)
    hookHead: cc.Node = null;
    
    hookSpeed = 400;
    hookState = 0;

    hookHeadBaseY: number = 80;
    hookRopeBaseWidth: number = 0;
    hookObjects: cc.Node[] = [];

    // initialLength: number = 100;  
    // maxLength: number = 750;      
    // growing: boolean = false;
    onLoad() {
         cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }


    initHook()  {
        this.hookObjects = [];
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
        this.hookState = 1;
        let mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(event.getLocationX()));
        console.log(mousePos);
        this.node.setPosition(mousePos);
    }

 
    moveHookHead(dt) {
        this.hookHead.y += dt * 30;
        this.hookRope.width -= dt * 30;
    }

   

    moveHookPack() {
        // Di chuyển các đối tượng được móc theo đầu móc
        for (let object of this.hookObjects) {
            object.setPosition(this.getHookHeadGlobalPos());
        }
    }

    getHookHeadGlobalPos(): cc.Vec2 {
        return this.node.convertToWorldSpaceAR(cc.v2(this.hookHead.x, this.hookHead.y - 25));
    }
    onDestroy() {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }
    update(dt) {
        this.setHookSprite(true);
        switch(this.hookState) {
            case 1:
                if(this.hookHead.y) {
                    this.moveHookHead(50 * dt);
                    if(this.hookHead.y >= 600) {
                        this.hookState = 2;
                        console.log("state",this.hookState)
                    }
                }
                break;
            case 2:
                this.moveHookHead(-30 * dt);
                this.scheduleOnce(()=> {
                    this.hookState = 0;
                },0.8)
                this.setHookSprite(false);
            case 0:
            default:
                break;
        }
    }

    // update(dt: number) {
    //     if (this.growing) {
    //         if (this.node.height < this.maxLength) {
    //             this.node.height += 200 * 0.2;
    //             this.node.getComponent(cc.BoxCollider).size.height += 200 * 0.2;
    //         } else {
    //             this.growing = false;
    //             this.node.height = this.initialLength;
    //             this.node.getComponent(cc.BoxCollider).size.height = this.initialLength;
    //         }
    //     }
    // }

    onCollisionEnter(other) {
        // // Lấy bounding box của thanh kéo
        // const dragBarBoundingBox = this.node.getBoundingBoxToWorld();

        // // Lặp qua tất cả các món ăn để kiểm tra va chạm
        // for (let i = 0; i < this.foodContainer.children.length; i++) {
        //     const foodItem = this.foodContainer.children[i];
        //     const foodBoundingBox = foodItem.getBoundingBoxToWorld();

        //     if (dragBarBoundingBox.intersects(foodBoundingBox)) {
        //         // Nếu va chạm, kéo món ăn về vị trí nhất định
        //         foodItem.setPosition(cc.v2(100, 100));  // Ví dụ đặt về vị trí (100, 100)
        //         break;  // Dừng lại sau khi tìm thấy va chạm đầu tiên
        //     }
        // }
        
      
    }
}