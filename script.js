const animalsDiv = document.createElement('div');
const root = document.getElementById('body');

animalsDiv.id = 'animals';

root.append(animalsDiv);

const animals = ['Zebra', 'Lion', 'Elephant', 'Giraffe',[0, 1, 8]];

// console.log(animals[1]); 

const newAnimals = JSON.parse(JSON.stringify(animals));

newAnimals.push('Turtle')
newAnimals[4].push(4)

// console.log(myAnimals) 

// const myAnimals = newAnimals.map((item, index, array) => {
//     if (item === 'Lion') {return attak = true}
//     attak = false
//     if (typeof item === 'string'| item === 'Lion') {
//         return {
//             id: `${item.toUpperCase()}-${index}`,
//             name: item,
//             attantion: true
//         }
//     }
//     return item;
// })


// const myAnimals = newAnimals.map((item, index, array) => {
//     if (typeof item === 'string'| item === 'Lion') {
//         return {
//             id: `${item.toUpperCase()}-${index}`,
//             name: item,
//             attantion: true
//         }}
//         if (typeof item === 'string'| item === 'Lion') {
//             return {
//                 id: `${item.toUpperCase()}-${index}`,
//                 name: item,
//                 attantion: true
//             }
//     }
//     return item;
// })

// console.log('New Animals', newAnimals)
// console.log('Animals', animals)

// const onlyAnimals = animals.filter((item) => {
//     return typeof item === 'string'
// });

// const myAnimals = onlyAnimals.map((item, index, array)=> {
//         return {
//             id: `${index+2}${item.toUpperCase()}${index}`,
//             animal: item
//     }});

// console.log(myAnimals);

const onlyAnimals = animals
    .filter((item) => {
        return typeof item === 'string'
    })
    .map((item, index) => {
        return {
            id: `${index+2+item.toUpperCase()+index}`,
            animal: item
        }
    });

console.log(onlyAnimals);