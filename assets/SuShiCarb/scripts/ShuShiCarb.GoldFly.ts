// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShuShiCarbGoldFly extends cc.Component {
  public static instance: ShuShiCarbGoldFly = null;
 
  @property(cc.Prefab)
  coinPrefab: cc.Prefab = null;

  coinPool: cc.NodePool = null;

  onLoad() {
    ShuShiCarbGoldFly.instance = this;
    this.coinPool = new cc.NodePool();
    this.initCoinPool();
  }

  initCoinPool(count: number = 5) {
    for (let i = 0; i < count; i++) {
      let coin = cc.instantiate(this.coinPrefab);
      this.coinPool.put(coin);
    }
  }

  playAnim(startPos: cc.Node, endPos: cc.Node, nodeEffect: cc.Node) {
    let randomCount = 5;
    let stPos = startPos.getPosition();
    let edPos = endPos.getPosition();
    this.playCoinFlyAnim(randomCount, stPos, edPos);
    nodeEffect.active = true;
    cc.tween(nodeEffect)
    .to(1.2, {y:edPos.y})
    .call(() => {
        nodeEffect.y = 0;
        nodeEffect.active = false;
    })
    .start();
  }

  playCoinFlyAnim(count: number, stPos: cc.Vec2, edPos: cc.Vec2, r: number = 130) {
    // 确保当前节点池有足够的金币
    const poolSize = this.coinPool.size();
    const reCreateCoinCount = poolSize > count ? 0 : count - poolSize;
    this.initCoinPool(reCreateCoinCount);

    // 生成圆，并且对圆上的点进行排序
    let points = this.getCirclePoints(r, stPos, count);
    let coinNodeList = points.map(pos => {
      let coin = this.coinPool.get();
      coin.setPosition(stPos);
      this.node.addChild(coin);
      return {
        node: coin,
        stPos: stPos,
        mdPos: pos,
        edPos: edPos,
        dis: (pos as any).sub(edPos).mag()
      };
    });
    coinNodeList = coinNodeList.sort((a, b) => {
      if (a.dis - b.dis > 0) return 1;
      if (a.dis - b.dis < 0) return -1;
      return 0;
    });

    // 执行金币落袋的动画
    coinNodeList.forEach((item, idx) => {
      item.node.runAction(
        cc.sequence(
          cc.moveTo(0.3, item.mdPos),
          cc.delayTime(idx * 0.01),
          cc.moveTo(0.5, item.edPos),
          cc.callFunc(() => {
            this.coinPool.put(item.node);
          })
        )
      );
    });
  }

  /**
   * 以某点为圆心，生成圆周上等分点的坐标
   *
   * @param {number} r 半径
   * @param {cc.Vec2} pos 圆心坐标
   * @param {number} count 等分点数量
   * @param {number} [randomScope=80] 等分点的随机波动范围
   * @returns {cc.Vec2[]} 返回等分点坐标
   */
  getCirclePoints(r: number, pos: cc.Vec2, count: number, randomScope: number = 60): cc.Vec2[] {
    let points = [];
    let radians = (Math.PI / 180) * Math.round(360 / count);
    for (let i = 0; i < count; i++) {
      let x = pos.x + r * Math.sin(radians * i);
      let y = pos.y + r * Math.cos(radians * i);
      points.unshift(cc.v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
    }
    return points;
  }
}
