const animalsDiv = document.createElement('div');
const root = document.getElementById('body');

animalsDiv.id = 'animals';

root.append(animalsDiv);

const animals = ['Zebra', 'Lion', 'Elephant', 'Giraffe',[0, 1, 8]];

// console.log(animals[1]); 

const newAnimals = JSON.parse(JSON.stringify(animals));

newAnimals.push('Turtle')

console.log('New Animals', newAnimals)
console.log('Animals', animals)

const myAnimals = animals.map((item, index, array)=> {
    if (typeof item === 'string') {
        return item.toLowerCase()
    }
    return item
})

console.log(myAnimals)