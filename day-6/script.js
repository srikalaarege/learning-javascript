const change=()=>{
    let display=document.getElementById("display")
    display.innerText="welcome"
    display.style.color="red"
    display.style.backgroundColor="aqua"
}
let change1=document.getElementById("a")
let c=0
const inc=()=>{
    c++
    change1.innerText=c
}
inc()