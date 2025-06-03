// Logo parpadeante al hacer clic
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo-jotu");
  if (logo) {
    logo.addEventListener("click", function () {
      logo.classList.add("logo-blanco-intermitente");
      setTimeout(() => {
        logo.classList.remove("logo-blanco-intermitente");
      }, 1500);
    });
  }
});

// Animación de entrada para el título principal
document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".animated-title");
  if (title) {
    const spans = title.querySelectorAll("span");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          spans.forEach((span, index) => {
            span.style.animation = `fadeUp 1.2s ease-in-out ${index * 0.2}s infinite alternate`;
          });
        } else {
          spans.forEach(span => {
            span.style.animation = "none";
          });
        }
      });
    }, {
      threshold: 0.5
    });

    observer.observe(title);
  }
});

// Slide-in text para subtítulos
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  threshold: 0.3
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById("colapsar");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide(); // esto activa la animación interna de Bootstrap
        }
      }
    });
  });
});