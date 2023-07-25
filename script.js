const checkbox = document.getElementById('check');
const navlist = document.getElementsByClassName('navli');

const box = document.getElementById('navul');

checkbox.addEventListener('click', function handleClick() {
if (checkbox.checked) {
box.style.left = '0';
} else {
box.style.left = '-100%';
}
});
for(var i=0;i<navlist.length;i++){
navlist[i].addEventListener('click' , ()=>{
    box.style.left = '-100%';
    checkbox.checked=false;
})
}

const card = document.querySelector(".card");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 3;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}
