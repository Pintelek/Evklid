const colSteps = document.querySelectorAll('.step-wrap');
const navLinks = document.querySelectorAll('.nav-how-link');
let activeNum;
activeItem();
function activeItem() {
  navLinks.forEach((item, key) => {
    if (item.classList.contains('active')) {
      activeNum = key;
      colSteps[key].classList.add('active')
    }
    item.addEventListener('click', changeActive)
  })
}
function deleteClass(elem) {
  elem.forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  })

}

function changeActive() {
  if (!this.classList.contains('active')) {
    deleteClass(navLinks)
    deleteClass(colSteps)
    this.classList.add('active')
    activeItem();
  }

}

// =========================== Slider ======================

const sliders = document.querySelector('.hero-slider');
const circle = document.querySelectorAll('.ellipse');

circle.forEach((item, key) => item.addEventListener('click', () => {
  nextImg(key)
}))

function nextImg(key) {
  deleteClass(circle);

  circle[key].classList.add('active');
  sliders.style.transform = `translateX(${key * -100 / 3}%)`;
}


// =============== BURGER ===========

document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.burger-up').classList.toggle('active');
  document.querySelector('.burger-header').classList.toggle('active');
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    document.querySelector('.burger-up').classList.remove('active');
    document.querySelector('.burger-header').classList.remove('active');
  }

})

// =======FORM========

const btnForm = document.querySelector('.btn-footer-form');


btnForm.addEventListener('click', (event) => {
  const form = document.querySelector('.footer-form');
  event.preventDefault();

  const formData = new FormData(form);

  let name = formData.get('name');
  let Email = formData.get('Email');
  let message = formData.get('message')

  if (name && Email) {
    const upWindow = document.createElement('div');
    upWindow.classList.add('form-window');

    const windowTitle = document.createElement('h3');
    windowTitle.classList.add('window-title');
    windowTitle.append('Спасибо за заявку.');

    const emailWindow = document.createElement('p');
    emailWindow.classList.add('email-window');
    emailWindow.append(`Уважаемый/ая , ${name}, ваша заявка принята к рассмотрению. Ожидайте сообщения на ${Email}`)

    upWindow.append(emailWindow, windowTitle);

    document.querySelector('.footer').append(upWindow);
    setTimeout(() => {
      upWindow.classList.add('active')
    }, 300);
    setTimeout(() => {
      window.addEventListener('click', () => {
        upWindow.remove();
      })
    }, 1500)
  }

})