NavBar = document.getElementsByClassName("NavBar");
NavBar = NavBar[0];
NavIcon = document.getElementsByClassName("nav-links")[0];
click = 0;
NavBar.addEventListener("click", function () {
  click += 1;
  if (click % 2 != 0) {
    NavIcon.style.display = "flex";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  } else {
    NavIcon.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
});
