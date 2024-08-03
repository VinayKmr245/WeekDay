const accountId=446846
let userAdd= "Hyderabad"
greet = "Hello!"
var varUndef;

// console.log(accountId,userName,userAdd,greet,"printing name")

/*
    Do not use var because it has scope problems
*/
var userName = "vinay"
// console.table(["accountId","userName","userAdd","Greeting","newVar"],[accountId,userName,userAdd,greet,varUndef]);

// an object whose properties are objects

class Person{
    firstName;
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    setMobileNumber(mnumber){
        this.mobileNumber = mnumber;
    }

}

const family = {};

family.mother = new Person("Janet", "Jones");
family.father = new Person("Tyrone", "Jones");
family.daughter = new Person("Maria", "Jones");
family.father.setMobileNumber(95456259723)

console.log(typeof Person,"Person")
console.table(family);
