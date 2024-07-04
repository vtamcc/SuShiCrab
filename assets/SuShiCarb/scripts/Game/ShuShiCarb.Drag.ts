// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ShuShiCarbFood from "./ShuShiCarb.Food";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Drag extends cc.Component {
    initialLength: number = 100;  
    maxLength: number = 750;      
    growing: boolean = false;
    onLoad() {
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }

    onDestroy() {
        cc.Canvas.instance.node.off(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }

    onMouseDown(event: cc.Event.EventMouse) {
        this.growing = true;
        let mousePos = this.node.parent.convertToNodeSpaceAR(cc.v2(event.getLocationX()));
        console.log(mousePos);
        this.node.setPosition(mousePos);
    }

    update(dt: number) {
        if (this.growing) {
            if (this.node.height < this.maxLength) {
                this.node.height += 200 * 0.2;
                this.node.getComponent(cc.BoxCollider).size.height += 200 * 0.2;
            } else {
                this.growing = false;
                this.node.height = this.initialLength;
                this.node.getComponent(cc.BoxCollider).size.height = this.initialLength;
            }
        }
    }

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