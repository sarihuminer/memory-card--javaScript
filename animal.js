let clickCard=null;
let selectedCard=null;
 export class Animal {
    

    constructor(name,icon) {
        this._name = name;
        this._icon=icon;
       
    }
    set name(value) {
             this._name = value
    }
    get name() {
        return this._name;
    }
    set icon(value) {
            this._icon = value
    }
    get icon() {
        return this._icon;
    }
    drow(){

    }

createIcon(){
    const icon=document.createElement("i");
    icon.style+=" text-align: center;"
    return icon;
}

    createCard(icon) {

        const newCard=document.createElement("div");
        newCard.className="flp-card";
        const nc1=document.createElement("div");
        nc1.className='front';
        nc1.innerText="?"   ;  
 
        const nc2=document.createElement("div");
        nc2.className='back'; 
                  
      nc2.appendChild(icon);
      
        newCard.appendChild(nc1);
        newCard.appendChild(nc2);
        

        newCard.addEventListener('click',()=>this.clickCard(icon,newCard),false);
           

       



        return newCard;
    }
    clickCard(i,newCard){
       newCard.classList.toggle('flip');
        debugger;
       if(clickCard==null){
           clickCard=i.className;
           selectedCard=newCard;
           console.log(clickCard);
       }
       else{
           if(clickCard==i.className)
           {
               alert('won!!!!!');
      
            }
            setTimeout(function(){ 
                newCard.classList.toggle('flip');
                selectedCard.classList.toggle('flip');
                console.log(clickCard);
            //console.log(document.getElementsByClassName(clickCard)[0].classList.toggle('flip'));
               // document.getElementsByClassName(clickCard).classList.toggle('flip');
                clickCard=null;
                selectedCard=null;
             }, 3000);
           
       }

    }
}