import {Bird} from './bird.js';
import {Cat} from './cat.js';
import {Crow} from './Crow.js';
import {Dog} from './dog.js';
import {Dragon} from './dragon.js';
import {Elephant} from './elephant.js';
import {Fish} from './fish.js';
import {Horse} from './hourse.js';


export  class Board {
    constructor() {
        this.arr = [];
    }
    fillArr() {
        this.arr[0] = new Bird("bird",`<i class="fas fa-bird fa-8x "></i>`);
        this.arr[1] = new Bird("bird",`<i class="fas fa-bird fa-8x "></i>`);
        this.arr[2] = new Cat("cat",`<i class="fas fa-cat fa-8x "></i>`);
        this.arr[3] = new Cat("cat",`<i class="fas fa-cat fa-8x "></i>`);
        this.arr[4] = new Crow("crow",`<i class="fas fa-crow fa-8x "></i>`);
        this.arr[5] = new Crow("crow",`<i class="fas fa-crow fa-8x "></i>`);
        this.arr[6] = new Dog("dog",`<i class="fas fa-dog fa-8x "></i>`);
        this.arr[7] = new Dog("dog",`<i class="fas fa-dog fa-8x "></i>`);
        this.arr[8] = new Dragon("dragon",`<i class="fas fa-dragon fa-8x "></i>`);
        this.arr[9] = new Dragon("dragon",`<i class="fas fa-dragon fa-8x "></i>`);
        this.arr[10] = new Elephant("elephant",`<i class="fas fa-elephant fa-8x "></i>`);
        this.arr[11] = new Elephant("elephant",`<i class="fas fa-elephant fa-8x "></i>`);
        this.arr[12] = new Fish("fish",`<i class="fas fa-fish fa-8x "></i>`);
        this.arr[13] = new Fish("fish",`<i class="fas fa-fish fa-8x "></i>`);
        this.arr[14] = new Horse("horse",`<i class="fas fa-horse fa-8x "></i>`);
        this.arr[15] = new Horse("horse",`<i class="fas fa-horse fa-8x "></i>`);
        

    }
    drawArr() {
        let r = document.createElement("div");
        this.arr.forEach(t => r.appendChild(t.draw()))
        return r;
    }
    
}