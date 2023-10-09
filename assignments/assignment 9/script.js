//Carolina Turner CSCE 242
let quotes = ["'You Two Really Are Cowboys' -Iceman", " 'She's Lost That Loving Feeling.' -Maverick", "'Son, Your Ego Is Writing Checks Your Body Can't Cash.' -Stinger", "'I Feel The Need …The Need For Speed!' -Maverick"];
var i=0;
const changeQuotes = () =>{ 
        let resultDiv=document.getElementById("result"); 
        if(i < quotes.length){
        resultDiv.innerHTML = quotes[i];
        i++;
    }
}
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let count = 0;
const drawRainbow =()=>{
    let interval = setInterval(() => {
        let rainbow = document.getElementById("rainbow");
        const row= document.createElement("p");
        document.querySelectorAll("rainbow button").forEach((button)=>{
        })
           row.classList.add(colors[count]);
           rainbow.append(row);
           count++; 
           if(count == (7))
           {
            const pot= document.getElementById("pot-o-gold");
            pot.classList.remove("hidden");
            row.append(pot);
           }
       }, 500);  
};
window.onload= () =>{
    changeQuotes();
    setInterval(changeQuotes, 2000);
    document.getElementById("draw").onclick = drawRainbow;
}