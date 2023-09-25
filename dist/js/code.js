function getCode() {
  const body = document.querySelector("body");
  const code = window.localStorage.getItem("code");
  const [html, css] = code.split("---");
  const HTML = document.querySelector(".html");
  const CSS = document.querySelector(".css");
  const p = body.querySelector("p");
  HTML.addEventListener("click", function (e) {
    e.preventDefault();
    p.classList.add("done");
    navigator.clipboard.writeText(html);
    setTimeout(function () {
      p.classList.remove("done");
    }, 2000);
  });
  CSS.addEventListener("click", function (e) {
    e.preventDefault();
    p.classList.add("done");
    navigator.clipboard.writeText(css);
    setTimeout(function () {
      p.classList.remove("done");
    }, 2000);
  });
}
getCode();
