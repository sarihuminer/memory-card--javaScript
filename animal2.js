const animalsArray = ['dog' , 'horse' , 'cat' , 
    'bird', 'elephant' , 'crow' , 'dragon' ,  'fish','dog' , 'horse' , 'cat' , 
    'bird', 'elephant' , 'crow' , 'dragon' ,  'fish']; 
 const animalPlace=["","","","","",""," ","" ,"","","","","","",""," "]   ;

//import Elefant from './elephant' ;
class Animal{

    constructor(name){
       this.name=name;
    }
    //return yout name

 start(){
   for(let i=0;animalsArray.length>0;i++){
    const indexrandomElement=Math.floor(Math.random() * animalsArray.length);
    const randomElement = animalsArray[indexrandomElement];
    animalPlace[i]=randomElement;
    animalsArray.splice(indexrandomElement, 1);
   }
  console.log(animalPlace);
 }   
compare(){

}
//draw the card
draw(){

  const list=  document.getElementById("listCard");
  
  // newCard.style.height="200px";
  // newCard.style.transformStyle="preserve-3d";
  // newCard.style.position="relative";
  // newCard.style.transition="5s linear";


animalPlace.map((elm)=>{
  const newCard=document.createElement("div");
  newCard.className="flp-card";
  debugger;
  const nc1=document.createElement("div");
  nc1.className='front';
  const nc2=document.createElement("div");
  nc2.className='back'; 
  
 const icon=document.createElement("i");
  icon.innerHTML=`<i class="fas fa-cat fa-8x "></i>`
 //icon.innerHTML= Elefant.draw();
//icon.className="fas fa-cat fa-8x icon"
icon.style+=" text-align: center;"
 
nc2.appendChild(icon);

  newCard.appendChild(nc1);
  newCard.appendChild(nc2);
  
  list.appendChild(newCard);

  document.querySelector('.flp-card').addEventListener('click',function(e){
  
    this.classList.toggle('flip');
    
  } , false)
})
}}


  let a=new Animal('elefant');
  a.start();
  a.draw();
