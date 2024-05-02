const animalsDiv = document.createElement('div');
const root = document.getElementById('body');

animalsDiv.id = 'animals';

root.append(animalsDiv);

const animals = ['Zebra', 'Lion', 'Elephant', 'Giraffe',[0, 1, 8]];

// console.log(animals[1]); 

const newAnimals = JSON.parse(JSON.stringify(animals));

newAnimals.push('Turtle')
newAnimals[4].push(4)

// console.log('New Animals', newAnimals)
// console.log('Animals', animals)

// const myAnimals = animals.map((item, index, array)=> {
//     if (typeof item === 'string') {
//         return item.toLowerCase()
//     }
//     return item
// })

// console.log(myAnimals) 


const myAnimals = newAnimals.map((item, index, array, attak) => {
    if (item === 'Lion') {return attak = true}
    if (typeof item === 'string') {
        return {
            id: `${item.toUpperCase()}-${index}`,
            name: item,
            attantion: attak
        }
    }

})

console.log(myAnimals);