let card = document.querySelector(".main .card")
let thanks = document.querySelector(".main .thanks")
let thanksImg = document.querySelector(".main .thanks .image-two")
let list = document.querySelectorAll(".form label input")
let btnSubmit = document.querySelector("#submit_btn")
let btnBack = document.querySelector("#back_btn")
let span
let listArray = Array.from(list)
let rate;



listArray.forEach((e) => {
    e.addEventListener('click', (ele) => {
        listArray.forEach((e) => {
            e.classList.remove('active')
        })
        ele.currentTarget.classList.add('active')
        rate = ele.currentTarget.value
    })
})

btnSubmit.addEventListener('click', () => {
    if (rate !== undefined) {
        card.style = 'display: none'
        thanks.style = 'display: flex'
        span = document.createElement("span")
        span.textContent = `You selected ${rate} out of 5`
        span.className = "span"
        thanksImg.after(span)
    } 
})
btnBack.addEventListener('click', () => {
    listArray.forEach((e) => {
        e.classList.remove('active')
    })
    card.style = 'display: flex'
    thanks.style = 'display: none'
    rate = undefined
    span.remove()
})