function increase(){
    const inputN=document.getElementById("n")
    let n = Number(inputN.value)
    n=n+1 //n++
    inputN.value=n
}

function decrease() {
    const inputN=document.getElementById("n")
    let n =Number(inputN.value)
    if (n<=0) {
        alert("Value must be 0 or more")
    }else{
        n=n-1
        inputN.value=n
    }



}
const buttonIncrease=document.getElementById("increase")
const buttonDecrease=document.getElementById("decrease")
buttonIncrease.onclick=increase
buttonDecrease.onclick=decrease