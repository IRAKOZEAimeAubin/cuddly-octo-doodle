// Variable Declaration

const myName: string = 'Aubin';
console.log(`${myName}`);

// Function

const greeting = (firstName: string, lastName: string): string => {
    return 'Hello ' + firstName + ' ' + lastName + '!';
}

console.log(greeting('Aime Aubin', 'Irakoze'));

// Interfaces

interface UserInterface {
    name: string,
    age?: number,
    getMessage(): string
}

const user0: UserInterface = {
    name: 'Michael Jeffrey Jordan',
    age: 59,
    getMessage() {
        return 'Hello ' + this.name
    },
}

const user1: UserInterface = {
    name: 'Wardell Stephen Curry',
    age: 34,
    getMessage() {
        return 'Hello ' + this.name
    },
}

// Union

let pageName: string | number = '1';
let errorMessage: string | null = null;

interface DriverInterface {
    name: string,
    team: string
}

const driver0: DriverInterface | null = {
    name: 'Charles Marc Hervé Perceval Leclerc',
    team: 'Scuderia Ferrari'
}

const driver1: DriverInterface | null = null;

// Type Aliases

type ID = string;
interface PersonInterface {
    id: ID,
    name: string
}

const ids: ID[] = ['001', '007'];

// Type Aliases + Union

type Job = string | null;
const popularJobs: Job[] = ['Jedi Master', 'Jujutsu Sorcerer', 'Shinobi', 'Demon Slayer'];
const notPopularJobs: Job = null;

// Type Assertions

let page: string = '44';
let numericPage: number = page as unknown as number;

// Classes

interface PersonInterface {
    getFullName(): string;
}
class Person {
    private firstName: string;
    private lastName: string;
    readonly dateOfBirth: Date;
    static readonly maxAge = 120;

    constructor(firstName: string, lastName: string, dateOfBirth: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    getFullName = (): string => {
        return 'The name is ' + this.firstName + ' ' + this.lastName;
    }
}

class Jedi extends Person {}

const person0 = new Person('Jon', 'Snow', new Date('12/26/1986'));
console.log(person0.getFullName());

// Generics

const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id
    };
};

interface HeroInterface<T, V> {
    name: string;
    misc: T;
    city: V;
}

const hero0: HeroInterface<{powers: string}, string> = {
    name: 'Batman',
    misc: {
        powers: 'intellect'
    },
    city: 'Gotham'
};

const hero1: HeroInterface<string[], string> = {
    name: 'Spider-Man',
    misc: ['Avengers'],
    city: 'New York'
}

const result= addId(hero0);
console.log( 'result: ', result );

// Enums

enum Status {
    NotStarted,
    InProgress,
    Done
}