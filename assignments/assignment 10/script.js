//Carolina Turner CSCE 242
class Candle{ //class constructor
    constructor(title, scent, color, price, pic){
        this.title=title;
        this.scent=scent;
        this.color=color;
        this.price=price;
        this.pic=pic;
    }
    get candleDetails() { 
        const section = document.createElement("section");
        section.classList.add("candle");//add candle to new section
    
        const h3 = document.createElement("h3");
        h3.classList.add("hidden"); 
        h3.innerHTML = this.title; //add new h3 inner html

        const ul = document.createElement("ul");

        ul.classList.add("hidden") //create a hidden list with candle details
        ul.append(this.listItem(this.title));
        ul.append(this.listItem("Candle Color:" +this.color));
        ul.append(this.listItem("Current Price: "+this.price));
        ul.append(this.listItem("Scent: " + this.scent));

        section.append(h3);//append to section
        section.append(ul);

        const pic = document.createElement("img");
        section.append(pic);
        pic.src = "images/" + this.pic;//append img

        section.onmouseover =()=> {
            h3.classList.remove("hidden");//when you hover, remove hidden class from candle details
            ul.classList.remove("hidden");
            pic.classList.add("transparent");
           }
           section.onmouseout =()=> { //when you hover,add hidden class from candle details
            h3.classList.add("hidden");
            ul.classList.add("hidden");
            pic.classList.remove("transparent");
           }
        return section;
    }
    listItem(info) {//assign text content to list
        const li=document.createElement("li");
        li.textContent=info;
        return li;
    }
}

const showCandles = () => {
    const candleList = document.getElementById("candle-list");
    const candles = [];
    candles.push(new Candle("Hot Cocoa & Cream", "Hot chocolate and Whipped cream!", "Brown", "$24.95","candle1.jpg"));
    candles.push(new Candle("Pumpkin Pecan Waffles", "Pumpkin, Candied pecans, Maple", "Orange", "$24.95","candle2.jpg"));
    candles.push(new Candle("Sugared Snickerdoodle", "Warm cookies, Brown sugar and Nutmeg!", "Orange", "$24.95","candle3.jpg"));
    candles.push(new Candle("Marshmallow Fireside", "Toasted marshmallow, Fire wood and flannel", "White", "$24.95","candle4.jpg"));
    candles.push(new Candle("Peppermint Sugar Cookie", "Peppermint, Sugar crystals, Warm cookies!", "Green", "$24.95","candle5.jpg"));
    candles.push(new Candle("Winter", "We think this one might smell like winter?", "Blue", "$24.95","candle6.jpg"));//array of all of my festive fall candles

    candles.forEach((candle) => {
        candleList.append(candle.candleDetails); //append details of each candle object 
    });
}
const displayCandleDetails =()=> {
    const candleList = document.getElementById("candle-list");
    const candles = [];
}

window.onload = ()=>{
    showCandles();
}