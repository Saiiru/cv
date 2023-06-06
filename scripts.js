/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const screen = document.querySelector(".screen-content"),
  name = document.querySelector(".name");

screen.onmouseenter = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    name.innerText = name.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return name.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= name.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

// header appears

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var heroSection = document.getElementById("hero");

  var heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > heroBottom) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }
});
