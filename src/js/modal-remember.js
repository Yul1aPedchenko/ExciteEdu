(() => {
  const refs = {
    openModalBtn: document.querySelector('[remember-modal-open]'),
    closeModalBtn: document.querySelector('[remember-modal-close]'),
    modal: document.querySelector('[remember-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
