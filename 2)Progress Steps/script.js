const progress = document.getElementById("progress");
const perv = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
perv.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
        circle.classList.add('active');
    } else {
        circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll('.active')

  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if(currentActive === 1) {
    perv.disabled = true
  }else if (currentActive === circles.length){
    next.disabled = true
  }else {
    perv.disabled = false
    next.disabled = false
  }
}
