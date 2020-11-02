import { Bird } from './bird.js';
import { Cat } from './cat.js';
import { Crow } from './Crow.js';
import { Dog } from './dog.js';
import { Dragon } from './dragon.js';
import { Frog } from './frog.js';
import { Fish } from './fish.js';
import { Horse } from './hourse.js';
import { Spider } from './spider.js';

export class Board {
    constructor() {
        this.arr = [];
        this.animals = [];
    }
    mixCards() {
        for (let i = 0; this.arr.length > 0; i++) {
            const indexrandomElement = Math.floor(Math.random() * this.arr.length);
            const randomElement = this.arr[indexrandomElement];
            this.animals[i] = randomElement;
            this.arr.splice(indexrandomElement, 1);
        }
        console.log(this.animals);
    }
    fillArr() {
        this.arr[0] = new Bird("bird", `<i class="fas fa-kiwi-bird fa-8x "></i>`);
        this.arr[1] = new Bird("bird", `<i class="fas fa-kiwi-bird fa-8x "></i>`);
        this.arr[2] = new Cat("cat", `<i class="fas fa-cat fa-8x "></i>`);
        this.arr[3] = new Cat("cat", `<i class="fas fa-cat fa-8x "></i>`);
        this.arr[4] = new Crow("crow", `<i class="fas fa-crow fa-8x "></i>`);
        this.arr[5] = new Crow("crow", `<i class="fas fa-crow fa-8x "></i>`);
        this.arr[6] = new Dog("dog", `<i class="fas fa-dog fa-8x "></i>`);
        this.arr[7] = new Dog("dog", `<i class="fas fa-dog fa-8x "></i>`);
        this.arr[8] = new Dragon("dragon", `<i class="fas fa-dragon fa-8x "></i>`);
        this.arr[9] = new Dragon("dragon", `<i class="fas fa-dragon fa-8x "></i>`);
        this.arr[10] = new Frog("frog", `<i class="fas fa-frog fa-8x "></i>`);
        this.arr[11] = new Frog("frog", `<i class="fas fa-frog fa-8x "></i>`);
        this.arr[12] = new Fish("fish", `<i class="fas fa-fish fa-8x "></i>`);
        this.arr[13] = new Fish("fish", `<i class="fas fa-fish fa-8x "></i>`);
        this.arr[14] = new Horse("horse", `<i class="fas fa-horse fa-8x "></i>`);
        this.arr[15] = new Horse("horse", `<i class="fas fa-horse fa-8x "></i>`);
        this.arr[16] = new Spider("spider", `<i class="fas fa-spider fa-8x "></i>`);
        this.arr[17] = new Spider("spider", `<i class="fas fa-spider fa-8x "></i>`);

    }
    drawArr() {
        let r = document.createElement("div");
        this.animals.forEach(t => r.appendChild(t.draw()))
        return r;
    }

}