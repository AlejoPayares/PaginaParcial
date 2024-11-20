
// Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerText = "⬆️";
backToTop.style.position = "fixed";
backToTop.style.bottom = "70px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

