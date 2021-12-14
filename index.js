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

console.log(allUseJavaScript(alumni));

