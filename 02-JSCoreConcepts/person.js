class Person{
    constructor(name, surname){
        this.name = name,
        this.surname =surname
    }

    getCredentials(){
        return `${this.name} ${this.surname.toUpperCase()}`
    }

    getCredentialsShort(){
        return `${this.name.substring(0,1).toUpperCase()}.${this.surname.substring(0,1).toUpperCase()}.`
    }
}

let osoba = new Person('Kasia', 'Knapik')

console.log(osoba.getCredentials());
console.log(osoba.getCredentialsShort());