document.querySelector(".iconSeta").onclick = () => {
  let menu_card = document.querySelector(".menuUsuario").style.display;
  if (menu_card == "none") {
    document.querySelector(".menuUsuario").style.display = "flex";
  }else {
    document.querySelector(".menuUsuario").style.display = "none"
  }
}
