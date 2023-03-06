const heading = document.querySelector('header')
const headingTextContainer = document.createElement('div')
const headingTitle = document.createElement('h1')
const headingSubTitle = document.createElement('p')

const headingButton = document.createElement('button')

headingButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
})

headingButton.textContent = "All Bosses"

headingTextContainer.className = "heading-container"
headingTitle.textContent = "Hollow Knight"
headingSubTitle.textContent = "For those who are tired of being repeatedly defeated by the bosses 💀"

heading.appendChild(headingTextContainer)
headingTextContainer.appendChild(headingTitle)
headingTextContainer.appendChild(headingSubTitle)
headingTextContainer.appendChild(headingButton)