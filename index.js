const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

let img = document.querySelector("img");
let bubble = document.querySelectorAll('.bubble')
let buttonZero = document.querySelector('#button-0')
let buttonOne = document.querySelector('#button-1')
let buttonTwo = document.querySelector('#button-2')
let buttonThree = document.querySelector('#button-3')
let buttonFour = document.querySelector('#button-4')
let buttonFive = document.querySelector('#button-5')
let rightArrow = document.querySelector('#right-side-bar')
let leftArrow = document.querySelector('#left-side-bar')

function filldot(button) {
    buttonZero.textContent = ""
    buttonZero.insertAdjacentHTML('beforeend', `<span>&#9675</span>`)
    buttonOne.textContent = ""
    buttonOne.insertAdjacentHTML('beforeend', `<span>&#9675</span>`)
    buttonTwo.textContent = ""
    buttonTwo.insertAdjacentHTML('beforeend', `<span>&#9675</span>`)
    buttonThree.textContent = ""
    buttonThree.insertAdjacentHTML('beforeend', `<span>&#9675</span>`)
    buttonFour.textContent = ""
    buttonFour.insertAdjacentHTML('beforeend', `<span>&#9675</span>`)
    buttonFive.textContent = ""
    buttonFive.insertAdjacentHTML('beforeend', `<span>&#9675</span>`)

    button.textContent = ""
    button.insertAdjacentHTML('beforeend', `<span>&#9679</span>`)
}

function imageVariable(number) {
    img.src = images[number]
    whichButton = number
}

img.src = images[0];
filldot(buttonZero)
let whichButton = 0

rightArrow.addEventListener("click", function() {
    if (whichButton === 0) {
        filldot(buttonOne)
        imageVariable(1)
    } else if (whichButton === 1) {
        filldot(buttonTwo)
        imageVariable(2)
    } else if (whichButton === 2) {
        filldot(buttonThree)
        imageVariable(3)
    } else if (whichButton === 3) {
        filldot(buttonFour)
        imageVariable(4)
    } else if (whichButton === 4) {
        filldot(buttonFive)
        imageVariable(5)
    } else if (whichButton === 5) {
        filldot(buttonZero)
        imageVariable(0)
    } 
})

leftArrow.addEventListener("click", function() {
    if (whichButton === 0) {
        filldot(buttonFive)
        imageVariable(5)
    } else if (whichButton === 1) {
        filldot(buttonZero)
        imageVariable(0)
    } else if (whichButton === 2) {
        filldot(buttonOne)
        imageVariable(1)
    } else if (whichButton === 3) {
        filldot(buttonTwo)
        imageVariable(2)
    } else if (whichButton === 4) {
        filldot(buttonThree)
        imageVariable(3)
    } else if (whichButton === 5) {
        filldot(buttonFour)
        imageVariable(4)
    } 
})

buttonZero.addEventListener('click', function() {
    filldot(buttonZero)
    imageVariable(0)
})

buttonOne.addEventListener('click', function() {
    filldot(buttonOne)
    imageVariable(1)
})

buttonTwo.addEventListener('click', function() {
    filldot(buttonTwo)
    imageVariable(2)
})

buttonThree.addEventListener('click', function() {
    filldot(buttonThree)
    imageVariable(3)
})

buttonFour.addEventListener('click', function() {
    filldot(buttonFour)
    imageVariable(4)
})

buttonFive.addEventListener('click', function() {
    filldot(buttonFive)
    imageVariable(5)
})
