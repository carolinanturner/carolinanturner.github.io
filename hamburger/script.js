const toggleNav = () =>{
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

var width=100;
const grow =() =>{
    resize(width +=10);
}
const shrink = () =>{
    resize(width -=10);
}
const resize = (size) => {
    document.getElementById("square").style.setProperty("--x", size + "px");
}
const changeColors =() =>{
    const root=document.querySelector(":root");
    root.style.setProperty("--primary", "aquamarine");
    root.style.setProperty("--primary", "yellow");
} 
const validateForm = () =>{
    const firstName =document.getElementById("txt-first-name").value;
    const lastName =document.getElementById("txt-last-name").value;
    const age=document.getElementById("txt-age").value;
    const resultP=document.getElementById("result");
    if(isBlank(firstName, "error-first-name") | 
    isBlank(lastName, "error-last-name") |
    isNotNumber (age, "error-age")){
        return false;
    }
    resultP.innerHTML="Hello " +firstName + " "+ lastName;
}
const isBlank = (data, id) =>{
    if(data.trim()== ""){
       document.getElementById(id).classList.remove("hide");
       return true;
    }
    return false;
}

const isNotNumber = (data, id) =>{
    if (data.trim()== "" || isNaN(data)){
        document.getElementById(id).classList.remove("hide");
        return true;
    }
    return false;
}
const loopItUp = () =>{
    let firstNumber =parseInt(document.getElementById("first-num").value);
    let lastNumber =parseInt(document.getElementById("last-num").value);
    let resultUL= document.getElementById("result");
    
    for (let i=firstNumber; i<= lastNumber; i++){
        const liElem =  document.createElement("li");
        liElem.textContent=i;
        resultUL.append(liElem);
    }
}
const editHTML =() =>{
    const h2=document.querySelector("#food-title");
    h2.innerHTML="Best Title Ever";
    const h3=document.createElement("h3");
    h3.textContent="my subtitleeee";
    h2.after(h3);
    const foodUL=document.getElementById("fav-foods");
    const foodLis = foodUL.getElementsByTagName("li");
    for (let i=0 ; i< foodLis.length; i++){
        foodLis[i].innerHTML= "I &hearts; " + foodLis[i].innerHTML;
    }
}

window.onload = ()=>{
    document.getElementById("nav-toggle").onclick=toggleNav;
    document.getElementById("button-change-colors").onclick=changeColors;
    document.getElementById("button-shrink").onclick=shrink;
    document.getElementById("button-grow").onclick=grow;
    document.getElementById("button-validate").onclick=validateForm;
    document.getElementById("button-loops").onclick=loopItUp;
    document.getElementById("button-foods").onclick=editHTML;
}