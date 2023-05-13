const button = document.querySelector(".button")
const input = document.querySelector(".input")
const wrongEmail = document.querySelector(".wrongEmail")
const validEmail = document.querySelector(".validEmail")

button.addEventListener("click",function(){
    let inputvalue = input.value 
    let rejex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let valid = rejex.test(inputvalue)
    if (valid == false) {
        wrongEmail.style.display = "block"
    }
    else {
        validEmail.style.display = "block"
    }
}) 

input.addEventListener("input", function(){
    wrongEmail.style.display = "none"
    validEmail.style.display = "none"
})


