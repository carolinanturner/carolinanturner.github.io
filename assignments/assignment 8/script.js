//Carolina Turner CSCE 242

const move = () => {
    let displacement = 0;
    const t = document.querySelector("turtle");
    let interval = setInterval(() => {
      displacement +=5;
      document.getElementById("turtle").style.setProperty("--left-margin", displacement + "px");
      if (displacement >= 550) {
        clearInterval(interval);
      }
    }, 100);
}
  const fillBox = () => {
    const input = document.getElementById("txt-goal").value;
    const root = document.querySelector(":root");
    let int = 0;
    if(int<input/100){
        let interval = setInterval(() => {
            const fill = "pink " + int + "%";
            root.style.setProperty("--pink", fill)
            root.style.setProperty("--white","white 0%")
            int++;
            if(int>=input/100){
                clearInterval(interval);
            }
        },50);
    }
}
 window.onload = () =>{ 
  document.getElementById("walking-turtle").onclick = move;
  document.getElementById("display").onclick=fillBox;
 
 }