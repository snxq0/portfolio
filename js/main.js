const roleElement = document.getElementById("role");
const roles = [
"Frontend Developer",
"UI/UX Designer",
"Creative Coder"
];



let roleIndex = 0;
let charIndex = 0;



function startTyping() {
  

  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(startTyping, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
if (charIndex > 0) {
roleElement.textContent =
roleElement.textContent.slice(0, -1);


charIndex--;

setTimeout(erase, 50);


} else {
roleIndex = (roleIndex + 1) % roles.length;


setTimeout(startTyping, 500);


}
}


/* Project preview */

const previewImg = document.getElementById("preview");

document.querySelectorAll("#projectList a").forEach(link => {
link.addEventListener("mouseenter", () => {
const imgPath = link.dataset.img;


if (!imgPath) return;

previewImg.style.opacity = "0";

setTimeout(() => {
  previewImg.src = imgPath;
  previewImg.style.opacity = "0.8";
}, 200);


});
});

/* Scroll reveal */

const observer = new IntersectionObserver(
entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("active");
}
});
},
{
threshold: 0.1
}
);

document
.querySelectorAll(".reveal")
.forEach(el => observer.observe(el));

window.onload = () => {

  startTyping();
};