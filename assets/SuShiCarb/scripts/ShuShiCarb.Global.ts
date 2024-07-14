// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


export default class Global {
    static totalGold: number = 0;
    static dataHook = [{price: 150,speed: 21 ,isBuy: false},
        {price: 300,speed: 22, isBuy: false}, 
        {price: 450,speed: 23, isBuy: false},
        {price: 600,speed: 25, isBuy: false},
        {price: 750,speed: 27, isBuy: false}];
    static speedHook = 20;
    // static dataHook = [1,23];
    
}
