//Carolina Turner CSCE 242

const move = () => {
    let displacement = 0;
    let turtle = document.querySelector("turtle");
    let interval = setInterval(() => {
      displacement ++;
      document.getElementById("turtle").style.setProperty("--left-margin", displacement, "px");
      if (displacement >= 100) {
        clearInterval(interval);
      }
    }, 1);
}



 window.onload = () =>{ 
  document.getElementById("walking-turtle").onclick = move;
 
 
 }