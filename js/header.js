document.querySelectorAll(".has-menu > a").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });