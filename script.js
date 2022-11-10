const submitButton = document.getElementById('submit-button')
const mainContainer = document.querySelector('.container')
const feedbackContainer = document.querySelector('.feedback-container')

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none"
    feedbackContainer.classList.remove('hidden')
})

function display() {
    if(document.getElementById('radio-1').checked) {
        document.getElementById('rating').innerHTML = '1'
    }else if(document.getElementById('radio-2').checked) {
        document.getElementById('rating').innerHTML = '2'
    }else if(document.getElementById('radio-3').checked) {
        document.getElementById('rating').innerHTML = '3'
    }else if(document.getElementById('radio-4').checked) {
        document.getElementById('rating').innerHTML = '4'
    }else if(document.getElementById('radio-5').checked) {
        document.getElementById('rating').innerHTML = '5'
    }else {
        document.getElementById('rating').innerHTML = '0'
    }
}