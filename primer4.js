function show_color() {
    const inputR = document.getElementById("r")
    const inputG = document.getElementById("g")
    const inputB = document.getElementById("b")
    const divDisplay = document.getElementById("display")

    const r = Number(inputR.value)
    const g = Number(inputG.value)
    const b = Number(inputB.value)

    if (( r>=0 && r<=255) && (g>=0 && g<=255) && (b>=0 && b<=255)) {
        divDisplay.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"

    }else {
        alert("Values must be in range from 0 to 255.")
    }

    
}
function switch_to_defaults () {
    const inputR = document.getElementById("r")
    const inputG = document.getElementById("g")
    const inputB = document.getElementById("b")
    const divDisplay = document.getElementById("display")

    inputR.value="0"
    inputG.value="0"
    inputB.value="0"
    divDisplay.style.backgroundColor="rgb (0,0,0)"
}


const buttonShow=document.getElementById("show")
const buttonDefault=document.getElementById("default")
buttonShow.onclick=show_color
buttonDefault.onclick=switch_to_defaults