// const faqItems = document.querySelectorAll('.topic__box');
// faqItems.forEach(item => {
//   const question = item.querySelector('.topic__question');
//   const answer = item.querySelector('.topic__answer');
//   question.addEventListener('click', () => {
//     item.classList.toggle('open');
//   });
// });

const questions = document.querySelectorAll('.topic__question');

questions.forEach(function (question){
  question.addEventListener('click', function () {
    question.classList.toggle('open')
  })
})
