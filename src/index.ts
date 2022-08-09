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