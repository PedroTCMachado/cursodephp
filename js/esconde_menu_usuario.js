document.querySelector(".setaMenuCard").onclick = () => {
  let menu_card = document.querySelector(".menuCard").style.display;
  if (menu_card == "none") {
    document.querySelector(".menuCard").style.display = "flex";
  }else {
    document.querySelector(".menuCard").style.display = "none"
  }
}
