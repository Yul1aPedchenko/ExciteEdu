document.addEventListener('DOMContentLoaded', function () {
  const loadMoreButton = document.getElementById('load-more');
  const resourceItems = document.querySelectorAll('.resources__item');
  const hiddenItems = Array.from(resourceItems).slice(
    window.innerWidth >= 1200 ? 3 : 2
  );

  loadMoreButton.addEventListener('click', function () {
    hiddenItems.forEach(item => {
      item.classList.remove('hidden');
      item.style.display = 'block';
    });

    loadMoreButton.style.display = 'none';
  });
});
