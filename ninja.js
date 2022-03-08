class Ninja{
    constructor(name,health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    sayname(){
        console.log(`AKA ${this.name}`)
    }

    showStats(){
        console.log(`Name: ${this.name} , Strength: ${this.strength} , Speed: ${this.speed} , Health: ${this.health}`)
    }

    drinksake(){
        this.health += 10
        console.log(`${this.name} drank`)
    }

}
const ninja1 = new Ninja("Naruto",100);
ninja1.sayname();
ninja1.showStats();
ninja1.drinksake();
console.log(ninja1);

//inheritance
class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10

    }

    speakwisdom(){
        super.drinksake();
        console.log("To be or not to be?")
    }

}

const Sensei1 = new Sensei("lao");
Sensei1.speakwisdom();
Sensei1.showStats();