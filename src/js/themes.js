let topics = [];
let filteredTopics = [];
let currentIndex = 0;
const itemsPerPage = 5;

document
  .getElementById('search-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = document
      .getElementById('search-input')
      .value.toLowerCase();
    filteredTopics = topics.filter(topic =>
      topic.topic.toLowerCase().includes(searchTerm)
    );
    currentIndex = 0;
    document.getElementById('themes-list').innerHTML = '';
    loadMoreTopics(true);
  });

function loadTopics() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'src/json/topics.json', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      topics = JSON.parse(xhr.responseText);
      filteredTopics = topics;
      loadMoreTopics();
    } else {
      console.error('Failed to load topics');
    }
  };
  xhr.onerror = function () {
    console.error('Request error...');
  };
  xhr.send();
}

function loadMoreTopics(reset = false) {
  if (reset) {
    document.getElementById('themes-list').innerHTML = '';
  }
  const list = document.getElementById('themes-list');
  const endIndex = Math.min(currentIndex + itemsPerPage, filteredTopics.length);

  for (let i = currentIndex; i < endIndex; i++) {
    const li = document.createElement('li');
    li.className = 'themes__item';

    const img = document.createElement('img');
    img.src = filteredTopics[i].image; // Використання картинки з JSON
    img.alt = 'themes img';
    img.className = 'themes__img';

    const h2 = document.createElement('h2');
    h2.className = 'themes__title';
    h2.textContent = filteredTopics[i].topic;

    const a = document.createElement('a');
    a.href = '#';
    a.className = 'themes__link';
    a.textContent = 'Start learn';
    a.dataset.index = i;
    a.addEventListener('click', showSubtopics);

    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(a);
    list.appendChild(li);
  }

  currentIndex = endIndex;

  if (currentIndex >= filteredTopics.length) {
    document.getElementById('load-more').style.display = 'none';
  } else {
    document.getElementById('load-more').style.display = 'block';
  }
}

function showSubtopics(event) {
  const index = event.currentTarget.dataset.index;
  const selectedTopic = filteredTopics[index];
  localStorage.setItem('selectedTopic', JSON.stringify(selectedTopic));
  window.location.href = 'subtopics.html';
}

document
  .getElementById('load-more')
  .addEventListener('click', () => loadMoreTopics());

loadTopics();
