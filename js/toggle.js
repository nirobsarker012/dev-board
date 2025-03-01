document.querySelector("#blog").style.display = "none";

document.querySelector("#discover").addEventListener("click", function () {
  document.querySelector("#header").style.display = "none";
  document.querySelector("#main").style.display = "none";
  document.querySelector("#blog").style.display = "block";
});

document.querySelector("#back-btn").addEventListener("click", function () {
  document.querySelector("#header").style.display = "block";
  document.querySelector("#main").style.display = "block";
  document.querySelector("#blog").style.display = "none";
});
