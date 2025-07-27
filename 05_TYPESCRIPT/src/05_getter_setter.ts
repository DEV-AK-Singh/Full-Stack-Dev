class Person {
    constructor(private _name: string, private _age: number) {}
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get age(): number {
        return this._age;
    }
    set age(value: number) {
        this._age = value;
    }
}

const person = new Person("John", 30);
console.log(person.name); // "John"
person.name = "Jane";
console.log(person.name); // "Jane"