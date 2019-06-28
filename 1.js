(() => {
  const menu_bar = document.querySelector("#menu");
  const aside_bar = document.querySelector("#aside-main");
  const backScreen = document.querySelector("#black-bg");

  menu_bar.onclick = () => {
    // show aside
    aside_bar.style.visibility = "visible";
    aside_bar.style.display = "inherit";

    // show black screen
    backScreen.style.visibility = "visible";
    backScreen.style.display = "inherit";
  };

  backScreen.onclick = () => {
    // hide aside
    aside_bar.style.visibility = "hidden";
    aside_bar.style.display = "none";

    // hide blackscreen
    backScreen.style.visibility = "hidden";
    backScreen.style.display = "none";
  };
})();
