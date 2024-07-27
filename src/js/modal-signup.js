(() => {
    const refs = {
      openModalBtn: document.querySelector('[signup-modal-open]'),
      closeModalBtn: document.querySelector('[signup-modal-close]'),
      modal: document.querySelector('[signup-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
  })();