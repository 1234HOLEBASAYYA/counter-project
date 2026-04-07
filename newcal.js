const bu1=document.getElementById("bu1");
const bu2=document.getElementById("bu2");
const bu3=document.getElementById("bu3");
const display=document.getElementById("display");
let count=0;
bu1.addEventListener("click",()=>{
    count++;
    display.textContent=count;

})
bu2.addEventListener("click",()=>{
    if(count>0)
    {
    count--;
     display.textContent=count;
    }
    else{
        count--;
        display.style.color="red";
        display.textContent=count;
    }
})
bu3.addEventListener("click",()=>{
    count=0;
     display.textContent=count;
})