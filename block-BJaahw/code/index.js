// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function CreateUser(name, age){
    this.name=name;
    this.age=age;
}
let user1 = new CreateUser('Seema',24);
// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
CreateUser.prototype = {
    sayHello(){
        alert(`Welcome ${this.name}`);
    }
}
let user2 = new CreateUser('Fiona',24);
// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
let personOne = user1;
let personTwo = user2;
// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
function CreateUser2(name,age){
    let user = Object.create(userMethod);
    user.name = name;
    user.age = age;
    return user;
}
let userMethod = {
    sayHello(){
        alert(`Welcome ${this.name}`);
    }
}
let user3 = CreateUser2("Ajay",22)
// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
function CreateUser3(name,age){
    let user = Object.create(CreateUser3.prototype)
    user.name = name;
    user.age = age;
    return user;
}
CreateUser3.prototype = {
    sayHello(){
        alert(`Welcome ${this.name}`)
    }
}
let user4 = CreateUser3("Teena",24);
// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
personOne = new CreateUser("Reeza",23);
personTwo = new CreateUser("Rachana",25); 
// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello(); 
personTwo.sayHello(); 
// 8. Convert the `createUser` function into `User` class.
class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        alert(`Welcome ${this.name}`)
    }
};
// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
let user5 = new User("Sam",28);
let user6 = new User("Sag",25);
personOne = user5;
personTwo = user6;
// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello();
personTwo.sayHello(); 