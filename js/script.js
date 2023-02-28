let doc = document

let black = doc.querySelector('.black')
let white = doc.querySelector('.white')
let beige = doc.querySelector('.beige')
let car_vid = doc.querySelector('.btn_form_car')
let salon_vid = doc.querySelector('.btn_form_salon')

let img = doc.querySelector('img')

let txt = doc.querySelector('btn_form')

let img1 = "./img/salon_black.jpg"
let img2 = "./img/salon_white.jpg"
let img3 = "./img/salon_beige.jpg"

let vid = "./img/tesla_vid.jpg"

black.addEventListener('click', ()=>{
    img.src = img1
    car_vid.classList.remove('btn')
    salon_vid.classList.remove('btn')
})
white.addEventListener('click', ()=>{
    img.src = img2
    car_vid.classList.remove('btn')
    salon_vid.classList.remove('btn')
})
beige.addEventListener('click', ()=>{
    img.src = img3
    car_vid.classList.remove('btn')
    salon_vid.classList.remove('btn')
})
car_vid.addEventListener('click', ()=>{
    img.src = vid
    car_vid.classList.add('btn')
    salon_vid.classList.remove('btn')
})
salon_vid.addEventListener('click', ()=>{
    img.src = img1
    car_vid.classList.remove('btn')
    salon_vid.classList.add('btn')
})