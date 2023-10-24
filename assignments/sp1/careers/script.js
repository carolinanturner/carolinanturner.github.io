const writeMessage =()=>{
    const message=document.getElementById("message");
    alert("Your interest form has been submitted! Thank you!");
}



window.onload =() =>{
    document.getElementById("message").onclick=writeMessage;
}