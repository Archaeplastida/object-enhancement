//ES5 createInstructor

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

//ES2015 createInstructor

const createInstructor = (firstName, lastName) => ({firstName,lastName});

//ES5 favoriteNumber

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

//ES2015 favoriteNumber

const favoriteNumber = 144

const instructor = {firstName:"Saif",[favoriteNumber]:"That's my favorite!"}


//ES5 Object methods

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

//ES2015 Object Methods

const otherInstructor = { //I had to give it another variable name because "instructor was already taken in this code"
    firstName:"Saif",
    sayHi(){return "Hi!"},
    sayBye(){return `${this.firstName} says bye!`}
}


//ES2015 createAnimal

const createAnimal = (species, verb, noise) => ({species,[verb]:()=>(noise)});