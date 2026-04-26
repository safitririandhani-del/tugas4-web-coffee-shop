  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-black/80", "backdrop-blur-md", "shadow-md");
    } else {
      navbar.classList.remove("bg-black/80", "backdrop-blur-md", "shadow-md");
      navbar.classList.add("bg-transparent");
    }
  });

  const btn = document.getElementById("searchBtn");
  const input = document.getElementById("searchInput");

  let open = false;

  btn.addEventListener("click", () => {
    open = !open;

    if (open) {
      input.classList.remove("w-0", "opacity-0");
      input.classList.add("w-56", "opacity-100", "px-3");
      input.focus();
    } else {
      input.classList.remove("w-56", "opacity-100", "px-3");
      input.classList.add("w-0", "opacity-0");
    }
  });

  const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots");

let index = 0;
let autoSlide;

const items = slider.children;
const total = items.length;

// buat dots
for (let i = 0; i < total; i++) {
  const dot = document.createElement("div");
  dot.className = "w-2 h-2 bg-gray-400 rounded-full cursor-pointer";
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
}

function updateDots() {
  [...dotsContainer.children].forEach((dot, i) => {
    dot.classList.toggle("bg-black", i === index);
    dot.classList.toggle("bg-gray-400", i !== index);
  });
}

function moveSlide(direction) {
  index += direction;

  if (index >= total) index = 0;
  if (index < 0) index = total - 1;

  goToSlide(index);
}

function goToSlide(i) {
  index = i;
  const width = items[0].offsetWidth + 24;
  slider.scrollTo({
    left: width * index,
    behavior: "smooth"
  });
  updateDots();
}

// auto slide
function startAuto() {
  autoSlide = setInterval(() => moveSlide(1), 3000);
}
function stopAuto() {
  clearInterval(autoSlide);
}

slider.addEventListener("mouseenter", stopAuto);
slider.addEventListener("mouseleave", startAuto);

startAuto();
updateDots();


const slide = document.getElementById("slider");

function moveSlide(direction) {
  const card = slider.querySelector("div");
  const gap = 24; // sesuai gap-6 (6 * 4 = 24px)
  const cardWidth = card.offsetWidth + gap;

  slider.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth"
  });
}


function moveSlide(id, direction) {
  const slider = document.getElementById(id);
  const card = slider.querySelector("div");
  const gap = 24; // sesuai gap-6
  const cardWidth = card.offsetWidth + gap;

  slider.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth"
  });
}