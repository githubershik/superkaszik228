let FirstSlotList = [];
let SecondSlotList = [];
let ThirdSlotList = [];
let slot1_top_text = document.getElementById("slot1-top-text");
let slot1_mid_text = document.getElementById("slot1-mid-text");
let slot1_bot_text = document.getElementById("slot1-bot-text");
let slot2_top_text = document.getElementById("slot2-top-text");
let slot2_mid_text = document.getElementById("slot2-mid-text");
let slot2_bot_text = document.getElementById("slot2-bot-text");
let slot3_top_text = document.getElementById("slot3-top-text");
let slot3_mid_text = document.getElementById("slot3-mid-text");
let slot3_bot_text = document.getElementById("slot3-bot-text");
let isEnded = false;

async function start(){
    let FirstSlotList = [];
    let SecondSlotList = [];
    let ThirdSlotList = [];
    for(let i = 0; i<=7; i++) {
        FirstSlotList.push(Math.floor(Math.random() * 7 + 1));
        SecondSlotList.push(Math.floor(Math.random() * 7 + 1));
        ThirdSlotList.push(Math.floor(Math.random() * 7 + 1));
    };
    console.log(FirstSlotList);
    for(let i = 0; i<=7;i++){
        let promise = new Promise((resolve,reject) => {
            //1 slot
            setTimeout(()=>resolve(slot1_top_text.innerHTML=FirstSlotList[i]),500);
            if(i<=6){setTimeout(()=>resolve(slot1_mid_text.innerHTML=FirstSlotList[i]),1000);}
            if(i<=5){setTimeout(()=>resolve(slot1_bot_text.innerHTML=FirstSlotList[i]),1500);}
            //2 slot
            setTimeout(()=>resolve(slot2_top_text.innerHTML=SecondSlotList[i]),750);
            if(i<=6){setTimeout(()=>resolve(slot2_mid_text.innerHTML=SecondSlotList[i]),1250);}
            if(i<=5){setTimeout(()=>resolve(slot2_bot_text.innerHTML=SecondSlotList[i]),1750);}
            //3 slot
            setTimeout(()=>resolve(slot3_top_text.innerHTML=ThirdSlotList[i]),1000);
            if(i<=6){setTimeout(()=>resolve(slot3_mid_text.innerHTML=ThirdSlotList[i]),1500);}
            if(i<=5){setTimeout(()=>resolve(slot3_bot_text.innerHTML=ThirdSlotList[i]),2000);}
        });
        let result = await promise
        if(i==7){isEnded = true;}
    }
    if(isEnded){
        console.log(slot1_mid_text.innerHTML)
        console.log(slot2_mid_text.innerHTML)
        console.log(slot3_mid_text.innerHTML)
    }
}