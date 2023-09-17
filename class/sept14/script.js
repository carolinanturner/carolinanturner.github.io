const buttonAnim = () =>{
   document.getElementById("square").classList.add("move-square") ;
}
const displayName = () =>{
    const firstName=document.getElementById("text-first-name").value;
    console.log("Hello " + firstName +"!");
}
window.onload = () => { 
 document.getElementById("button").onclick=buttonAnim;
 document.getElementById("button-show-name").onclick= displayName;
}
