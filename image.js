const lightbox = document.createElement("div");
const left = document.createElement("p");
left.innerHTML = "&lt;";
left.id = "left";
const right = document.createElement("p");
right.innerHTML = "&gt;";
right.id = "right";
lightbox.id = "lightbox";
document.body.appendChild(lightbox);
lightbox.appendChild(left);
lightbox.appendChild(right);

const images = document.querySelectorAll("img");
let counter;
images.forEach((image, index) => {
  image.addEventListener("click", e => {
    counter = index;
    const img = document.createElement("img");
    img.src = image.src;
    lightbox.classList.add("active");
    lightbox.appendChild(img);
  });
});
//hello
lightbox.addEventListener("click", e => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
  lightbox.removeChild(lightbox.lastChild);
});

document.body.addEventListener("keydown", event => {
  if (lightbox.classList.contains("active")) {
    if (event.keyCode == 37) {
      step(-1);
    } else if (event.keyCode == 39) {
      step(1);
    }
  }
  return;
});

left.addEventListener("click", () => {
  step(-1);
});
right.addEventListener("click", () => {
  step(1);
});
function step(num) {
  if (num > 0 && counter >= images.length - 1) {
    counter = -1;
  } else if (num < 0 && counter <= 0) {
    counter = images.length;
  }
  let nextImg = document.createElement("img");
  nextImg.src = images[counter + num].src;
  lightbox.removeChild(lightbox.lastChild);
  lightbox.appendChild(nextImg);
  counter += num;
}
