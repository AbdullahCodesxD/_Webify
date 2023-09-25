function checkIfDark() {
  const check = window.localStorage.getItem("dark");
  if (check != null) {
    if (check == "true") {
      const body = document.querySelector("body");
      const list = document.querySelector(".toggle");
      body.classList.add("dark");
      list?.classList.add("dark");
    }
  }
}
checkIfDark();
function toggleBody() {
  const body = document.querySelector("body");
  body.classList.toggle("dark");
  body.classList.contains("dark")
    ? window.localStorage.setItem("dark", true)
    : window.localStorage.setItem("dark", false);
}
function toggleHandler() {
  const list = document.querySelector(".toggle");
  list?.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("dark");
    toggleBody();
  });
}
toggleHandler();
