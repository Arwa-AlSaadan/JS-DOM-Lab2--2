

let stop= document.getElementById("stopButton")
let slow= document.getElementById("slowButton")
let go= document.getElementById("goButton")

let red = document.getElementById("stopLight")
let yellow = document.getElementById("slowLight")
let green = document.getElementById("goLight")



stop.addEventListener("click", ()=>{
  red.style.backgroundColor="red"
  yellow.style.backgroundColor="#111"
  green.style.backgroundColor="#111"
})

slow.addEventListener("click", ()=>{
    yellow.style.backgroundColor="yellow"
    red.style.backgroundColor="#111"
    green.style.backgroundColor="#111"

})
  
go.addEventListener("click", ()=>{
    green.style.backgroundColor="green"
    red.style.backgroundColor="#111"
    yellow.style.backgroundColor="#111"
})
  

