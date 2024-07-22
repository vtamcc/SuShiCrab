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
    static dataHook = [{price: 150,speed: 1.5, widthHook: 3}, // id 0
        {price: 300,speed: 1.5, widthHook: 4}, 
        {price: 450,speed: 1.5, widthHook: 4},
        {price: 600,speed: 1.5, widthHook: 4},
        {price: 750,speed: 2.5, widthHook: 6,}];

    static dataBagMoney = [{price: 120, gold: 1}, // id 1
        {price: 250, gold: 2},
        {price: 320, gold: 2},
        {price: 450,gold: 2},
        {price: 750,gold: 4}
    ]

    static dataTimeHappy = [{price: 120, time: 2}, //id 2
        {price: 250, time: 2},
        {price: 320, time: 2},
        {price: 450, time: 2},
        {price: 750, time: 4}
    ]
    
    static timeHappy = 10;
    static checkBagMoney = false;
    static speedHook = 20;
    static moneyBag = 10;
    static lengthHook = 40;
    static isMusicOn = true;
    static isSoundOn = true;
    static hookIndex: number = 0;
    static bagIndex: number = 0;
    static timeIndex: number = 0;
    
    static timeHappyUpdated = false; // Thêm biến cờ

    // static formatNumber(mo) {
    //     let format = "";

    //     if (mo >= 1000000) {
    //         mo /= 1000000;
    //         format = " M";
    //     } else if (mo >= 1000) {
    //         mo /= 1000;
    //         format = " K";
    //     }

    //     return Math.floor(mo) + format;
    // }

    public static formatNumber(num: number, digits: number = 0): string { 
        if (num == 0) 
            return "0"; 
        if (digits != 0) { 
            return num.toFixed(digits).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
        } 
        return num.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 
    }
    // static dataHook = [1,23];
    
}
