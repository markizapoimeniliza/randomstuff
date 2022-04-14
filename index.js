let arr = ["🍎","🍊","🍎","🍎","🍊"]

let apples = document.getElementById("apples")
let oranges = document.getElementById("oranges")


function nAme(){
    for (let i = 0; i < arr.length; i++ ){
        if (i === 1 || i === 4) {
        apples.textContent += " " + " 🍎"
        }
        else if(i=== 0 || i === 2 || i === 3){
            oranges.textContent += " " + "🍊"}
    }
}

nAme()