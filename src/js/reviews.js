document.addEventListener('DOMContentLoaded', function () {
  const reviewsList = document.querySelector('.reviews__list');
  const reviewsItems = document.querySelectorAll('.reviews__item');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let currentIndex = 0;
  const itemsToShow = 2; // Number of items to show at once
  const itemWidth = reviewsItems[0].offsetWidth + 20; // Include gap

  function updateSlider() {
    const offset = -itemWidth * currentIndex;
    reviewsList.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    if (currentIndex < reviewsItems.length - itemsToShow) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop to the start
    }
    updateSlider();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = reviewsItems.length - itemsToShow; // Loop to the end
    }
    updateSlider();
  }

  // Initial slider setup
  updateSlider();

  // Button event listeners
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
});
