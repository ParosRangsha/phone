let display = document.querySelector("#view")
let checkBtn = document.querySelector("#checkBtn")
let btn = document.querySelectorAll(".btn")
let btnArray = Array.from(btn)
btnArray.map((e)=>{
    e.addEventListener("click",()=>{
        let digi = e.innerHTML
        if(digi == "."){
            let digiArray = Array.from(display.value)
            if(digiArray.includes(".")){
                
            }else{
                display.value += e.innerHTML
            }
        }else if(digi == "On"){
            display.value = ""
        }else{
            if(digi - 10){
                display.value += e.innerHTML
            }
        }
    })
    
})


