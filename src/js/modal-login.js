(() => {
  const refs = {
    openModalBtn: document.querySelector('[login-modal-open]'),
    closeModalBtn: document.querySelector('[login-modal-close]'),
    modal: document.querySelector('[login-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
