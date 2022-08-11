"use strict";
const myName = 'Aubin';
console.log(`${myName}`);
const greeting = (firstName, lastName) => {
    return 'Hello ' + firstName + ' ' + lastName + '!';
};
console.log(greeting('Aime Aubin', 'Irakoze'));
const user0 = {
    name: 'Michael Jeffrey Jordan',
    age: 59,
    getMessage() {
        return 'Hello ' + this.name;
    },
};
const user1 = {
    name: 'Wardell Stephen Curry',
    age: 34,
    getMessage() {
        return 'Hello ' + this.name;
    },
};
let pageName = '1';
let errorMessage = null;
const driver0 = {
    name: 'Charles Marc Hervé Perceval Leclerc',
    team: 'Scuderia Ferrari'
};
const driver1 = null;
const ids = ['001', '007'];
const popularJobs = ['Jedi Master', 'Jujutsu Sorcerer', 'Shinobi', 'Demon Slayer'];
const notPopularJobs = null;
let page = '44';
let numericPage = page;
class Person {
    firstName;
    lastName;
    dateOfBirth;
    static maxAge = 120;
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
    getFullName = () => {
        return 'The name is ' + this.firstName + ' ' + this.lastName;
    };
}
class Jedi extends Person {
}
const person0 = new Person('Jon', 'Snow', new Date('12/26/1986'));
console.log(person0.getFullName());
const addId = (obj) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id
    };
};
const hero0 = {
    name: 'Batman',
    misc: {
        powers: 'intellect'
    },
    city: 'Gotham'
};
const hero1 = {
    name: 'Spider-Man',
    misc: ['Avengers'],
    city: 'New York'
};
const result = addId(hero0);
console.log('result: ', result);
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
//# sourceMappingURL=index.js.map