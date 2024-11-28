(() => {
  const refs = {
    openModalBtn: document.querySelector(".header-burger"),
    menu: document.querySelector(".header-menu"),
    menuItems: document.querySelectorAll(".header-menu li"),
    body: document.querySelector('body'),
  };

  function toggleModal() {
    refs.openModalBtn.classList.toggle("active");
    refs.menu.classList.toggle("active");
    refs.body.classList.toggle('lock');
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.menuItems.forEach(el => {
    el.addEventListener('click', toggleModal)
  })

})();
