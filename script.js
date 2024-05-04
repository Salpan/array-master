const list = ['Zebra', 'Lion', 'Elephant', 'Giraffe',[0, 1, 8]]

const root = document.getElementById('root')

const newDiv = document.createElement('div')
newDiv.id = 'newDiv'

root.append(newDiv)

const animalsList = list
    .filter(
        (item) => {
            return typeof item === 'string'
        })
    .map(
        (item, index) => {
            return {
                id: `#${index+1}${item.toUpperCase()}${index}`,
                animal: item
            }
        });

console.log(animalsList)

const animalsOrderList = document.createElement('ul')

animalsOrderList.id = 'animals-list'

root.append(animalsOrderList)

animalsList.forEach((animal) => {
    const animalElement = document.createElement('li')
    animalElement.textContent = animal.animal
    animalsOrderList.append(animalElement)
})