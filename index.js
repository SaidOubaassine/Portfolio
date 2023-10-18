(function () {
  let text = document.querySelector("#banner h1");
  const text1 = "Hello, My name is Said";
  let i = 0;
  setInterval(() => {
    text.innerHTML += text1[i];
    i++;
    if (i == 23) {
      text.textContent = "";
      i = 0;
    }
  }, 200);
})();
(function () {
  let banner = document.getElementById("banner");
  let header = document.querySelector("header");
  window.addEventListener("scroll", (event) => {
    if (banner.getBoundingClientRect().top < -200) {
      header.style.display = "none";
    } else {
      header.style.display = "flex";
    }
  });
})();
