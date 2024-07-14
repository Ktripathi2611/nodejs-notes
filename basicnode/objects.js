let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.firstName);
console.log(person.fullName());

// Create an object and pass all the datatypes as key value pairs and print them. String, Number, Boolean,null, undefined, array, object, Symbol

console.log(Object.keys(person));
console.log(Object.values(person));
