const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click", function() {
    let userEmail = document.getElementById("email")
    userEmailValue = userEmail.value
    console.log(userEmailValue)
    userEmail.value = ''

})

const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').offsetWidth;
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * slideWidth+ 'px';
  slides.style.transform = 'translateX(' + offset + ')';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  updateCarousel();
  document.getElementById('next-btn').style.display = 'none'
  document.getElementById('prev-btn').style.display = 'block'
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
  updateCarousel();
  document.getElementById('next-btn').style.display = 'block'
  document.getElementById('prev-btn').style.display = 'none'
}


