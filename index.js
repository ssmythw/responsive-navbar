{
  let hamburger = document.getElementById("hamburger");
  let nav2 = document.getElementById("nav-links2");
  let counter = 0;
  hamburger.addEventListener("click", (e) => {
    if (counter === 0) {
      nav2.style.display = "flex";
      counter++;
    } else {
      nav2.style.display = "none";
      counter--;
    }
  });
}
