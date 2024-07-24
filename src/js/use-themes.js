function goBack() {
  window.location.href = 'themes.html';
}

function nextTopic() {
  // Implement logic for navigating to the next topic if needed
}

function loadSubtopics() {
  const selectedTopic = JSON.parse(localStorage.getItem('selectedTopic'));
  if (!selectedTopic) {
    window.location.href = 'themes.html';
    return;
  }

  document.getElementById('main-topic').textContent = selectedTopic.topic;
  const subtopicsList = document.getElementById('subtopics-list');
  subtopicsList.innerHTML = '';

  selectedTopic.subtopics.forEach(subtopic => {
    const li = document.createElement('li');
    li.className = 'topic__box';

    const questionDiv = document.createElement('div');
    questionDiv.className = 'topic__question';

    const p = document.createElement('p');
    p.className = 'topic__theme';
    p.textContent = subtopic.title;
    questionDiv.appendChild(p);

    const svg = document.createElement('svg');
    svg.className = 'topic__icon-arrow';
    svg.innerHTML = '<use href="./img/symbol-defs.svg#icon-arrow"></use>';
    questionDiv.appendChild(svg);

    const answerDiv = document.createElement('div');
    answerDiv.className = 'topic__answer hidden';

    const description = document.createElement('p');
    description.className = 'topic__text';
    description.textContent = subtopic.description;
    answerDiv.appendChild(description);

    const videoBox = document.createElement('div');
    videoBox.className = 'topic__video-box';
    subtopic.videoLinks.forEach(link => {
      const iframe = document.createElement('iframe');
      iframe.src = link;
      iframe.title = 'YouTube video player';
      iframe.frameBorder = '0';
      iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      videoBox.appendChild(iframe);
    });
    answerDiv.appendChild(videoBox);

    li.appendChild(questionDiv);
    li.appendChild(answerDiv);
    subtopicsList.appendChild(li);

    questionDiv.addEventListener('click', () => {
      answerDiv.classList.toggle('hidden');
    });
  });
}

loadSubtopics();
