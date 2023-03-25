const colSteps = document.querySelectorAll('.step-wrap');
const navLinks = document.querySelectorAll('.nav-how-link');
let activeNum;
activeitem();
// console.log(navLinks)
function activeitem(){
navLinks.forEach((item, key) => {
  if(item.classList.contains('active')){
    activeNum = key;
    colSteps[key].classList.add('active')
  }
  item.addEventListener('click', changeActive)
})
}
function deliteClass(elem){
  elem.forEach(item =>{
    if(item.classList.contains('active')){
      item.classList.remove('active');
    }
  })
 
}

function changeActive(){
  if(!this.classList.contains('active')){
    deliteClass(navLinks)
    deliteClass(colSteps)
    this.classList.add('active')
    activeitem();
  }

}

// =========================== Slider ======================

// const sliders = document.querySelector('.hero-slider');
// const cilcle = document.querySelectorAll('.ellipse');

// cilcle.forEach( (item, key) => item.addEventListener('click', ()=> {
//   nextImg(key)
// }))

// function nextImg(key){
//   deliteClass(cilcle);

//   cilcle[key].classList.add('active');
//   sliders.style.transform = `translateX(${key * -100/3}%)`;
// }

// ================= FAQ =============

const faqSubtitles = document.querySelectorAll('.faq-item');
console.log(faqSubtitles); 
console.log('dsldsmkcmsdlcscs')

faqSubtitles.forEach( (item) => item.addEventListener('click', ()=> {
  if(item.classList.contains('active')){
    item.classList.remove('active');
    return;
  }
  item.classList.add('active');
}))
// =============== BURGER ===========

document.querySelector('.burger').addEventListener('click', ()=>{
  document.querySelector('.burger-up').classList.toggle('active');
  document.querySelector('.burger-header').classList.toggle('active');
})