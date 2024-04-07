function count1(count2){
    setTimeout(()=>{
        let divCount=document.createElement('div');
        divCount.setAttribute('id','count');
        divCount.setAttribute('class','rounded-circle');
        divCount.innerHTML=`<h1>1</h1>`;
        document.body.appendChild(divCount);
            console.log(1);
    },1000)
}

function count2(count3){
    setTimeout(()=>{
        let divCount=document.getElementById('count');
        divCount.innerHTML=`<h1>2</h1>`;
            console.log(2);
    },2000)
    
}

function count3(count4){
    setTimeout(()=>{
        let divCount=document.getElementById('count');
        divCount.innerHTML=`<h1>3</h1>`;
            console.log(3);
    },3000)
    //count4();
}

function count4(count5){
    setTimeout(()=>{
        let divCount=document.getElementById('count');
        divCount.innerHTML=`<h1>4</h1>`;
            console.log(4);
    },4000)
    //count5();
}

function count5(count6){
    setTimeout(()=>{
        let divCount=document.getElementById('count');
        divCount.innerHTML=`<h1>5</h1>`;
            console.log(5);
    },5000)
    //count6();
}

function count6(count7){
    setTimeout(()=>{
        let divCount=document.getElementById('count');
        divCount.innerHTML=`<h1>6</h1>`;
            console.log(6);
    },6000)
    //count7();
}

function count7(count8){
    setTimeout(()=>{
        let divCount=document.getElementById('count');
        divCount.innerHTML=`<h1>7</h1>`;
            console.log(7);
    },7000)
    //count8();
}

function count8(){
    setTimeout(()=>{
        let divCount=document.getElementById('count');
        divCount.innerHTML=`<h1>8</h1>`;
            console.log(8);
    },8000)
    //count9();
}

function count9(count9){
    setTimeout(()=>{
        let divCount=document.getElementById('count');
        divCount.innerHTML=`<h1>9</h1>`;
            console.log(9);
    },9000)
    //count10();
}
function count10(){
    setTimeout(()=>{
        let divCount=document.getElementById('count');
        divCount.innerHTML=`<h1>10</h1>`;
        let images=document.createElement('img');
        images.setAttribute('src','https://flagcdn.com/w320/in.png');
        document.body.appendChild(images);
        let happIndep=document.createElement('h1');
        happIndep.setAttribute('id','happIndep');
        happIndep.textContent='Happy Independence day';
        document.body.appendChild(happIndep);
            console.log(10);
    },10000)

}


count1(count2(count3(count4(count5(count6(count7(count8(count9(count10())))))))));


