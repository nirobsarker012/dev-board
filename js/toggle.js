const header = document.querySelector("#header");
const main = document.querySelector("#main");
const blog = document.querySelector("#blog");

const discoverBtn = document.querySelector("#discover");
const backBtn = document.querySelector("#back-btn button");

discoverBtn.addEventListener("click", () => {
  header.classList.add("hidden");
  main.classList.add("hidden");

  blog.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  header.classList.remove("hidden");
  main.classList.remove("hidden");

  blog.classList.add("hidden");
});
