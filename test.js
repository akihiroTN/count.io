"use strict";
let guds=["アクリルキーホルダー","缶バッジ32mm","缶バッジ44mm","ステッカーホワイト","ステッカークリア","トートバックS","トートバックM","ハンカチタオル","マグカップ","ポーチ","白Tシャツ","キッズ白Tシャツ","iPhoneケース(白)","iPhoneケース(クリア)","手帳型ケース"];
let price=[478,261,261,166,166,525,704,336,280,497,922,922,638,638,638];
let itiran=document.getElementById("itiran");
let el=document.getElementById("else");
let elsea=document.getElementById("elsea");
let elseb=document.getElementById("elseb");
let elsec=document.getElementById("elsec");
let elpara=document.createElement("p");
let elin1=document.createElement("input");
let elin2=document.createElement("input");
let display1=document.getElementById("display1");
let display2=document.getElementById("display2");
let audio=new Audio("se_maoudamashii_onepoint23.mp3");
elin1.type="Number";
elin2.type="Number";
elin1.min=0;
elin2.min=0;
elin1.id="else1";
elin2.id="else2";
elpara.id="elpa";
elpara.innerText="その他";
elsea.appendChild(elpara);
elseb.appendChild(elin1);
elsec.appendChild(elin2);

for(let i=0;i<guds.length;i++){
    let pro=document.createElement('p');
    let fee=document.createElement('p')
    let inp=document.createElement('input');
    pro.innerText=guds[i];
    if(price[i]!==null){
        fee.innerText=price[i]+"円";
    }
    pro.id="pro"+[i];
    fee.id="fee"+[i];
    inp.id="inp"+[i];
    inp.type="Number"
    inp.min=0;
    itiran.appendChild(pro);
    itiran.appendChild(fee);
    itiran.appendChild(inp);   
}
function sum(price,num){
    var result=price*num;
    return result;
}
function button(){
    let el1=elin1.value;
    let el2=elin2.value;
    let display2=document.getElementById("display2");
    let total=0;
    for(let g=0;g<price.length;g++){
        let inped=document.getElementById("inp"+[g]);
        let val=inped.value;
        let pricen=price[g];
        total=total+sum(pricen,val);
    }
    total=total+sum(el1,el2);
     display2.innerText=total;
     audio.play();
}
function secondbtn(){
    let num2=0;
    let el2=elin2.value;
    let display1=document.getElementById("display1");
    for(let s=0;s<15;s++){
        let inps=document.getElementById("inp"+[s]);
        let inm=inps.value;
        if(inm.length==0){
            inm=0;
       }
        num2=num2+parseInt(inm);
    }
    if(el2.length==0){
        el2=0;
        audio.play();
    }
    num2=num2+parseInt(el2); 
    display1.innerText=num2; 

   
}