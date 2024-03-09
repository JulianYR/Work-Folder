const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')
const message = document.getElementById('message')

const inForm = document.querySelector('.inFormNone')
let active = false

const sendButton = document.getElementById('sendButton')
sendButton.addEventListener('click', reviewInputs)

function reviewInputs(){

    nameInput.value
    emailInput.value
    message.value

    if (nameInput.value == '' || emailInput.value == '' || message.value == ''){
        inForm.classList.remove('inFormNone')
        inForm.classList.add('inFormView')
        active = true
    }
    else {
        if (active == true){
            inForm.classList.remove('inFormView')
            inForm.classList.add('inFormNone')
            active = false
        }
        else if (active == false){
            return ;
        }
    }

}