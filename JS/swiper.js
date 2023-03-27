
document.addEventListener('DOMContentLoaded', ()=>{
  const swiper = new Swiper('.hero-slider',{
    loop: true,
    touchAngle: 90,
    effect: 'slide',
    speed: 400,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: false,
    },
  })
})