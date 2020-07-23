import { Animal } from "./animal.js";

export  class Crow extends Animal{

    constructor(name,icon){
    super(name,icon);
    }
    
compare(){

}
//draw the card
draw(){
 let i= super.createIcon(); 
 i.innerHTML=this.icon;
 i.className=this.name;
return super.createCard(i);
}}

 