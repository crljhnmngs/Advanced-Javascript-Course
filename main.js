/*
-----SCOPE-----

    Nested function Scope - 


let a = 10;

function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a, b, c);
    }
    inner();
}
outer();

*/

/*
-----------CLOSURE------
    

function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}
const fn = outer();
fn();
fn();
fn();
*/

/*
--------FUNCTION CURRYING-------

-function f(a,b,c) is transformed to f(a)(b)(c)

function sum(a, b, c) {
    return a + b + c;
}
//console.log(sum(2, 5, 1));

//sum(2,5,1) to sum(2)(5)(1) - 1 argument at a time

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c);
            };
        };
    };
}
const curriedSum = curry(sum);
console.log(curriedSum(2)(5)(1));

const add2 = curriedSum(5);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);
*/

/*
----------THIS--------- 

How to determine `this`

    Implicit binding
    Explicit binding
    New binding
    Default binding

function sayMyName(name) {
    console.log(`My name is ${name}`);
}
sayMyName('Carl');
sayMyName('John');



//Implicit binding

const person = {
    name: 'John',
    sayMyname: function () {
        console.log(`My name is ${this.name}`);
    },
};

//person.sayMyname();

//Explicit binding
//const name = 'Superman';
//globalThis.name = 'Superman';
function sayMyName() {
    console.log(`My name is ${this.name}`);
}

//sayMyName.call(person);

//New binding

function Person(name) {
    // this = {} or empty object
    this.name = name;
}
const p1 = new Person('CJ');
const p2 = new Person('CARL');

//console.log(p1.name, p2.name);

//Default binding

sayMyName();

    ORDER OF PRECEDENCE

    1st: New binding
    2nd: Explicit binding
    3rd: Implicit binding
    4th: Default binding
*/

/*
------------PROTOTYPE----------

function Person(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
}

// const person1 = new Person('Bruce', 'Wayne');
// const person2 = new Person('John', 'Carl');

// person1.getFullname = function () {
//     return this.firstname + ' ' + this.lastname;
// };

Person.prototype.getFullname = function () {
    return this.firstname + ' ' + this.lastname;
};

function SuperHero(fname, lname) {
    // this = {}
    Person.call(this, fname, lname);
    this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function () {
    console.log('Fighting Crime -_-');
};
SuperHero.prototype = Object.create(Person.prototype);
const batman = new SuperHero('John', 'Carl');
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullname());

// console.log(person1.getFullname());
// console.log(person2.getFullname());

// INHERITANCE

*/
/*
---------CLASS----------


class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    sayMyName() {
        return this.firstname + ' ' + this.lastname;
    }
}
const classP1 = new Person('Carl', 'John Manigos');
console.log(classP1.sayMyName());

class SuperHero extends Person {
    constructor(fname, lname) {
        super(fname, lname);
        this.isSuperHero = true;
    }
    fightCrime() {
        console.log('Fighting Crime');
    }
}

const batman = new SuperHero('JC', 'MANIGOS');
console.log(batman.sayMyName());

*/

/*
---------ITERABLES AND ITERATORS----------


const str = 'carljohn';

for (const char of str) {
    console.log(char);
}

const arr = ['c', 'a', 'r', 'l', 'j', 'o', 'h', 'n'];

for (const item of arr) {
    console.log(item);
}



const obj = {
    [Symbol.iterator]: function () {
        let step = 0;
        const iterator = {
            next: function () {
                step++;
                if (step === 1) {
                    return { value: 'Hello', done: false };
                } else if (step === 2) {
                    return { value: 'World', done: false };
                }
                return { value: undefined, done: true };
            },
        };
        return iterator;
    },
};

for (const word of obj) {
    console.log(word);
}

*/

/* 
---------------GENERATOR------------
*/
