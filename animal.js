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
        const nc2=document.createElement("div");
        nc2.className='back'; 
                         
      nc2.appendChild(icon);
      
        newCard.appendChild(nc1);
        newCard.appendChild(nc2);
        
       // list.appendChild(newCard);
      
       newCard.addEventListener('click',function(e){
        
          this.classList.toggle('flip');
          
        } , false)
        return newCard;
    }
}