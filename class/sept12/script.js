alert("It is Portia's Birthday!");

const changeText = () =>{
    const helloP=document.getElementById("date");
    helloP.innerHTML ="hi hello hey!! hows it going?!";
    helloP.classList.add("special");
}
const showCocky = () =>{
   document.getElementById("cocky").classList.add("show");
}
const hideCocky = () =>{
     document.getElementById("cocky").classList.remove("hide");
}


window.onload = () =>{ //cannot call this function more than one time, when the window is loaded, progam wil call this function and execute code
    //get button, tie function to clickage
 document.getElementById("button-click").onclick=changeText;
 document.getElementById("button-show").onclick = showCocky;
 document.getElementById("button-hide").onclick = hideCocky;

}
