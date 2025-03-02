// BACKGROUND COLOR CHANGER
const themeBtn = document.querySelector("#theme-btn");

const generateColorCode = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const toggleTheme = () => {
  const colorCode = generateColorCode();

  document.body.style.backgroundColor = colorCode;
};

themeBtn.addEventListener("click", toggleTheme);

// MARK AS COMPLETE
const cardContainer = document.querySelector("#card-container");
const taskCount = document.querySelector(".task-count");
const completedCount = document.querySelector(".completed-count");
const historyContainer = document.querySelector(".histories");
const clearBtn = document.querySelector(".clear-btn");

const setCompleteHistory = (title) => {
  const time = new Date().toLocaleTimeString();

  const message = `You have Complete The Task ${title} at ${time}`;

  const elem = document.createElement("p");
  elem.textContent = message;

  historyContainer.appendChild(elem);
};

cardContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (!target.classList.contains("complete-btn")) return;

  target.setAttribute("disabled", true);

  const count = taskCount.textContent - 1;
  taskCount.textContent = count < 10 ? `0${count}` : count;

  const completed = Number(completedCount.textContent) + 1;
  completedCount.textContent = completed;

  const card = target.closest(".task-card");

  const title = card.querySelector("h2").innerText;

  setCompleteHistory(title);

  // alert("Marked as complete!");
});

clearBtn.addEventListener("click", () => {
  historyContainer.innerHTML = "";
  taskCount.textContent = "06";
  completedCount.textContent = "00";

  document.querySelectorAll(".task-card button").forEach((btn) => {
    btn.removeAttribute("disabled");
  });
});
