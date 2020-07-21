const animalsArray = ['Dog' , 'Horse' , 'Cat' , 
    'Bird', 'elephent' , 'Bat' , 'Dragon' ,  'duck'] 
class Animal{

    constructor(name){
       this.name=name;
    }
    //return yout name

compare(){

}
//draw the card
draw(){
    alert("d");
  const list=  document.getElementById("listCard");
  const newCard=document.createElement("div");
  newCard.className="flp-card";
  // newCard.style.height="200px";
  // newCard.style.transformStyle="preserve-3d";
  // newCard.style.position="relative";
  // newCard.style.transition="5s linear";

 

  const nc1=document.createElement("div");
  nc1.className='front';

  const icon=document.createElement("i");
  icon.innerHTML=`<i class="fas fa-cat"></i>`
 
nc1.appendChild(icon);

  const nc2=document.createElement("div");
  nc2.className='back'; 
  
  newCard.appendChild(nc1);
  newCard.appendChild(nc2);
  
  list.appendChild(newCard);

  document.querySelector('.flp-card').addEventListener('click',function(e){
  
    this.classList.toggle('flip');
    
  } , false)

}}

  let a=new Animal('elefant');
  a.draw();
