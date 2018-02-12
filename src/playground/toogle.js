class Person {
    constructor(name = 'No Name', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `${this.name} is ${this.age} years old.`;
    }
}


class Traveler extends Person {
  constructor(name, age, location) {
   super(name,age);
   this.location = location;
  }
 PersonWillTravel() {
   return !!this.location;
 } 

 getDescription() {
     let description = super.getGretting();
     
     if(this.PersonWillTravel()) {

          description += ` Will travel to ${this.location}`;
         
     }
     return description;
 }
  
}

const Viktor = new Traveler("Viktor", 33);
const Iryna = new Traveler("Iryna", 31, "Portland, OR");


console.log(Viktor.getDescription());
console.log(Iryna.getDescription());

