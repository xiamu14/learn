interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return "hello," + person.firstName + "" + person.lastName;
}

var user = { firstName: "Jane", "lastName": "User" }

console.log(greeter(user))