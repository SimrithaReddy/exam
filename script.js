let bar = document.querySelector(".bar");

let buttons = document.querySelectorAll(".btn")

let clear = document.querySelector(".clear-btn")
let equal = document.querySelector(".equal-btn")
let dot = document.querySelector(".dot-btn")

buttons.forEach((key)=>{
    key.addEventListener('click',(e)=>{
        let val  = e.target.dataset.test;
        bar.innerHTML += val;
    })
})

equal.addEventListener('click',(e)=>{
    if(bar.innerHTML==="") alert("Please Enter valid numbers/operators")
    else{
        debugger
        let ans = eval(bar.innerHTML);
        bar.innerHTML = ans;
    }
})

clear.addEventListener('click',()=>{
    bar.innerHTML = ""
})