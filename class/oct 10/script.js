class Dog {
    constructor(title, breed, color, age, size, pic){
        this.title=title;
        this.breed=breed;
        this.color=color;
        this.age=age;
        this.size=size;
        this.pic=pic;
    }
    get item(){
        const section=document.createElement("section");
        section.classList.add("dog");

        const h3=document.createElement("h3");
        h3.innerHTML=this.title;
        section.append(h3)

        const ul=document.createElement("ul");
        section.append(ul);
        ul.append(this.listItem(this.breed));
        ul.append(this.listItem(this.color));
        ul.append(this.listItem("age: "+this.color));

        return section;
    }
    listItem(info){
        const li = document.createElement("li");
        li.textContent=info;
        return li;
    }
    picture (info){
        const pic=document.createElement("img");
        section.append(this.picture(this.pic));
        pic.src="images/" +this.pic; //name of picture for dog
        return pic;
    }
    get tableRow(){
        const tr=document.createElement("tr");
        tr.append(this.tableColumn(this.title));
        tr.append(this.tableColumn(this.breed));
        tr.append(this.tableColumn(this.color));
        tr.append(this.tableColumn(this.age));
        tr.append(this.tableColumn(this.size));
        tr.append(this.tableColumn(this.pic));
        tr.onclick= () =>{
            this.displayDetails(this);
        }
        return tr;
    }
    tableColumn(data){
        const td=document.createElement("td");
        td.textContent=data;
        return td;
    }
}   
    displayDetails(Dog){
        const section=document.getElementById("dog-details");
        console.log(Dog.title);
    }
    const displayDogTable = () =>{
        const table=document.getElementById("dog-table");
        const dogs = [];
        dogs.push(new Dog("Portia", "Yorkie", "White", "2", "small", "portia.jpg"));

        dogs.forEach(dog =>{
            table.append(dog.tableRow);
        })
}
const showDogs = () =>{
    const dogs =[];
    dogs.push(new Dog ("gary", "maltese", "brown", 2, "small", "pic"));
    dogs.push(new Dog(("stan", "golden retriever", "yellow", 1, "medium", "pic")))
    dogs.push(new Dog(("elliot", "golden retriever", "yellow", 4, "large", "pic")))
   
    dogs.forEach(dog =>{
        let p = document.createElement("p");
        p.innerHTML=(dog.title);
        dogList.append("p");
        console.log(dog.title);
    });


   // for (let i in dogs){
   //     console.log(dogs[i].title);
  //  }
}
window.onload = () =>{
    showDogs ();
}