const questions = document.querySelectorAll('.topic__question');

questions.forEach(function (question){
  question.addEventListener('click', function () {
    question.classList.toggle('open')
  })
})
