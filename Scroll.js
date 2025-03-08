// var Typed = new Typed(".text", {
//   Strings:["USA", "Europe", "UK", "India", "Australia", "UAE", "Turkey"], 
//   typeSpeed:100, 
//   backSpeed:100, 
//   backDelay:1000,
//   loop:true
// })

window.addEventListener('scroll', () => {
    const image = document.querySelector('.travel-image');
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    // Check if the element is in view
    if (rect.top < windowHeight && rect.bottom > 0) {
        image.classList.add('show');
    }
  });
  window.addEventListener('scroll', () => {
    const image = document.querySelector('.Shopping-image');
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    // Check if the element is in view
    if (rect.top < windowHeight && rect.bottom > 0) {
        image.classList.add('show');
    }
  });
  window.addEventListener('scroll', () => {
    const image = document.querySelector('.Insurance-image');
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    // Check if the element is in view
    if (rect.top < windowHeight && rect.bottom > 0) {
        image.classList.add('show');
    }
  });
 