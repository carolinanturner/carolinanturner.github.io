//Carolina Turner CSCE 242
 const showEx1 = () =>{
    document.getElementById("ex1").classList.remove("hide");
    document.getElementById("ex2").classList.add("hide");
 }
 const hideEx1 = () =>{
    document.getElementById("ex1").classList.add("hide");
    document.getElementById("ex2").classList.remove("hide");
 }
 const compareMessage = () => {
    const name1= document.getElementById("txt-name-1").value;
    const age1= document.getElementById("txt-age-1").value;
    const name2= document.getElementById("txt-name-2").value;
    const age2= document.getElementById("txt-age-2").value;
    const name3= document.getElementById("txt-name-3").value;
    const age3= document.getElementById("txt-age-3").value;
    const comparedAge=document.getElementById("compared-ages");
    comparedAge.innerHTML= "Youngest Age: " +youngestAge+" Name: "+youngestName ;
 };
 const compareAge = () =>{
    if (age1 < age2){
        youngestAge=age1;
    }
    else if (age2 <age1){
        youngestAge=age2;
    }
    else youngestAge=age3;
    return youngestAge;
 }

 window.onload = () =>{ 
  document.getElementById("button-ex1").onclick = showEx1;
  document.getElementById("button-ex2").onclick = hideEx1;
  document.getElementById("compared-ages").onclick=compareMessage;
 
 }
 