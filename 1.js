(() => {
  const menu_bar = document.querySelector("#menu");
  const aside_bar = document.querySelector("#aside-main");
  const backScreen = document.querySelector("#black-bg");

  menu_bar.onclick = () => {
    // show aside
    aside_bar.style.WebkitAnimation = "showSlow .8s forwards";

    // show black screen
    backScreen.style.visibility = "visible";
    backScreen.style.display = "inherit";
  };

  backScreen.onclick = () => {
    // hide aside
    aside_bar.style.WebkitAnimation = "hideSlow .8s forwards";

    // hide blackscreen
    backScreen.style.visibility = "hidden";
    backScreen.style.display = "none";
  };
})();
