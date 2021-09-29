const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
// For circles there's more than one so we select by class instead of ID
// This will create a NodeList (similar to an array but diff properties)
const circles = document.querySelectorAll('.circle')


// add some index
let currentActive = 1

// we take the next button and add an event to it
next.addEventListener('click', () => {
    // To add one to the index each time we click
    currentActive++

    // cirlces, like an array, has a length property we can use
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    // To modify the DOM
    update()
})


prev.addEventListener('click', () => {
    // To REMOVE one to the index each time we click
    currentActive--

    if(currentActive < 1 ) {
        currentActive = 1
    }

      // To modify the DOM
    update()

})


function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

    })

    // We want to create a new NodeList that takes everytime
    // all the active elements
    const actives = document.querySelectorAll('.active')

    // This is how we access the element. class id, name of the css file, name of the style element we want
    progress.style.width = (actives.length - 1) / (circles.length
    // we also have to concatenate with the % sign because that's how the width is formatted
    - 1) * 100 + '%'

    // activate/desactive the prev/next buttons
    if(currentActive == 1) {
        // si on est au tout début on ne veut pas aller en arrière
        prev.disabled = true
        // si on est tout à la fin on ne veut pas aller plus loin
    } else if (currentActive == circles.length) {
        next.disabled = true
        // Si on est entre les deux on veut pouvoir aller en avant et en arrière
    } else {
        prev.disabled = false
        next.disabled = false
    }
}