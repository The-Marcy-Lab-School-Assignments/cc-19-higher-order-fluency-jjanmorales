//write your code here
const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}]

const averageAge = arr => {
   let average = arr.reduce((a, b) => (a + b.age), 0) / arr.length;
   return Math.floor(average)
};

// console.log(averageAge(alumni));

const bananaBread = arr => arr.map(person => { 
       person.bananaBread = `${person.name} got banana bread at ${person.job}`
       return person;
});

// console.log(bananaBread(alumni));

const ninetiesBabies = arr => arr.filter(person => person.age > 21);

// console.log(ninetiesBabies(alumni));

const addSchool = arr => arr.map(person => { 
       person.school = `The Marcy Lab School`
       return person;
});


// console.log(addSchool(alumni));

const allUseJavaScript = arr => arr.every(person => person.language === 'JavaScript');

// console.log(allUseJavaScript(alumni));

const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']

const noVowel = arr => arr.map(animal => animal.replace(/[aeiou]/gi, 'x'));
console.log(noVowel(animals));

const onlyVowelA = arr => arr.filter(animal => animal.includes('a'));
console.log(onlyVowelA(animals));

const longerThanSeven = arr => arr.some(animal => animal.length > 7);
console.log(longerThanSeven(animals));

const allFour = arr => arr.every(animal => animal.length === 4);
console.log(allFour(animals));

const concatStrings = arr => arr.join(" ");
console.log(concatStrings(animals));