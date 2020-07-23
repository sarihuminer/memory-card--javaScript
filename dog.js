import { Animal } from "./animal.js";

export  class Dog extends Animal{

    constructor(name,icon){
    super(name,icon);
    }
    
compare(){

}
//draw the card
draw(){
 let i= super.createIcon();
 i.className=this.name;
 i.innerHTML=this.icon;
return super.createCard(i);
}}

 