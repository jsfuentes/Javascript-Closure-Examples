//closures keep secrets
function Keeper(secret) {
  return {
    get: () => secret,
    set: x => (secret = x)
  };
}

const person = Keeper("John");
console.log(person.get()); //John
person.set("Johnny");
console.log(person.get()); //Johnny
console.log(person.secret); //undefined!!!
