document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[signup-modal-mobile-open]'),
    closeModalBtn: document.querySelector('[signup-modal-mobile-close]'),
    modal: document.querySelector('[signup-modal-mobile]'),
  };

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
});
