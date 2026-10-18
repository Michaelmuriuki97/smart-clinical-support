/* =====================================================
   PIP / POLYPHARM ADE
   ADVANCED INTERACTION ENGINE
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const hamburger =
  document.getElementById("hamburger");

const navMenu =
  document.getElementById("nav-menu");

const header =
  document.getElementById("main-header");

const navLinks =
  document.querySelectorAll(".nav-link");

const revealElements =
  document.querySelectorAll(".reveal");

const cursorGlow =
  document.querySelector(".cursor-glow");



/* =====================================================
   MOBILE MENU
===================================================== */

hamburger.addEventListener("click", () => {

  const isOpen =
    hamburger.classList.toggle("active");

  navMenu.classList.toggle("active");

  hamburger.setAttribute(
    "aria-expanded",
    isOpen
  );

});



/* =====================================================
   CLOSE MENU WHEN LINK IS CLICKED
===================================================== */

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    hamburger.classList.remove("active");

    navMenu.classList.remove("active");

    hamburger.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});



/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 50) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  }
);



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
  document.querySelectorAll("section[id]");

const updateActiveNavigation = () => {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY <
      sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

};


window.addEventListener(
  "scroll",
  updateActiveNavigation
);



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.15
    }

  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});



/* =====================================================
   MOUSE FOLLOWING GLASS LIGHT
===================================================== */

document.addEventListener(
  "mousemove",
  event => {

    if (!cursorGlow) return;

    cursorGlow.style.left =
      `${event.clientX}px`;

    cursorGlow.style.top =
      `${event.clientY}px`;

  }
);



/* =====================================================
   HERO PARALLAX
===================================================== */

const heroVideo =
  document.querySelector(".hero-video");

const heroContent =
  document.querySelector(".hero-content");


window.addEventListener(
  "scroll",
  () => {

    const scroll =
      window.scrollY;

    if (heroVideo) {

      heroVideo.style.transform =
        `scale(1.05) translateY(${scroll * 0.12}px)`;

    }

    if (
      heroContent &&
      scroll < window.innerHeight
    ) {

      heroContent.style.transform =
        `translateY(${scroll * 0.15}px)`;

    }

  }
);



/* =====================================================
   OBJECTIVE CARD STAGGER
===================================================== */

const objectiveCards =
  document.querySelectorAll(
    ".objective-card"
  );


objectiveCards.forEach(
  (card, index) => {

    card.style.transitionDelay =
      `${index * 80}ms`;

  }
);



/* =====================================================
   3D GLASS TILT
===================================================== */

const tiltCards =
  document.querySelectorAll(
    ".objective-card, .tech-card"
  );


tiltCards.forEach(card => {

  card.addEventListener(
    "mousemove",
    event => {

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;


      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;


      const rotateX =
        ((y - centerY) / centerY) * -4;

      const rotateY =
        ((x - centerX) / centerX) * 4;


      card.style.transform =
        `perspective(800px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-6px)`;

    }
  );


  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform =
        "";

    }
  );

});



/* =====================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
  "click",
  event => {

    const clickedInsideMenu =
      navMenu.contains(event.target);

    const clickedHamburger =
      hamburger.contains(event.target);


    if (
      !clickedInsideMenu &&
      !clickedHamburger &&
      navMenu.classList.contains("active")
    ) {

      navMenu.classList.remove(
        "active"
      );

      hamburger.classList.remove(
        "active"
      );

      hamburger.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);



/* =====================================================
   ESCAPE KEY CLOSES MENU
===================================================== */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      navMenu.classList.contains("active")
    ) {

      navMenu.classList.remove(
        "active"
      );

      hamburger.classList.remove(
        "active"
      );

      hamburger.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);



/* =====================================================
   VIDEO FALLBACK
===================================================== */

const video =
  document.querySelector(".hero-video");


if (video) {

  video.addEventListener(
    "error",
    () => {

      video.style.display = "none";

    }
  );

}



/* =====================================================
   PAGE LOAD ANIMATION
===================================================== */

window.addEventListener(
  "load",
  () => {

    document.body.classList.add(
      "loaded"
    );

  }
);