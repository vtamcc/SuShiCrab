// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundManager from "./ShuShiCarb.SoundManager";

export default class Global {
    static soundManager: SoundManager = null
    static totalGold: number = 0;
    static dataHook = [{price: 150,speed: 1.5, widthHook: 3,isBuy: false},
        {price: 300,speed: 2.5, widthHook: 5, isBuy: false}, 
        {price: 450,speed: 3.5, widthHook: 7,isBuy: false},
        {price: 600,speed: 4.5, widthHook: 9,isBuy: false},
        {price: 750,speed: 5.5, widthHook: 11,isBuy: false}];
    static speedHook = 20;
    static lengthHook = 35;
    static isMusicOn = true;
    static isSoundOn = true;
    static activeIndex: number = 0;
    // static dataHook = [1,23];
    
}
