console.log("access granted");

const button = document.querySelector("#doSomething");

button.addEventListener("click", printButtonText)
const ecran = document.querySelector("#EcranNumere");
ecran.innerHTML.innerText=3;

function printButtonText(e){
    console.log(e.target.innerText);
}

const basicNumbers= document.querySelectorAll("div.numere");
console.log(basicNumbers)


const specialNumbers= document.querySelectorAll("div.numereSpeciale");




const equal= document.querySelector("#equals")
const zero= document.querySelector("#zer0")

equal.addEventListener("click", specialLogic)

basicNumbers.forEach(element => {
    console.log(element);

    element.addEventListener("click", logit)

});


function logit(e){
    console.log(e.target.innerText);
    ecran.innerText+=e.target.innerText

}

specialNumbers.forEach( element =>{
    element.addEventListener("click", specialLogic)

})


function specialLogic(e){
 
    switch (e.target.innerText) {
        case "DEL":
            console.log("line deleted");
            ecran.innerText.slice(0,-1);
            break;
    
        case "C":
            console.log("line wsomehting");
            ecran.innerText=null
            break;
    
        case "/":
            console.log("line whjat");
            break;
        case "X":
            console.log("line multiplied");
            break;
        case "+":
            console.log("line added");
            ecran.innerText+="+";
            break;
        case "-":
            console.log("line minused");
            ecran.innerText+="-";
            break;
        case "=":
            console.log("equaled");
           ecran.innerText= idunno();
            break;
    
        default:
            break;
    }

   function idunno(){
        var allNumbers= ecran.innerText.split('+')
    
        sum= allNumbers.reduce((a,b) =>{
            return Number(a)+Number(b);
        })
        return sum;
    }
}

