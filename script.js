const btn = document.querySelectorAll(".btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
}
