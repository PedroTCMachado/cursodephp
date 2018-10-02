var esconde_menu_usuario = document.querySelector(".iconSeta").onclick = () => {
  let menu_card = document.querySelector(".menuUsuario").style.display;
  if (menu_card == "none") {
    document.querySelector(".menuUsuario").style.display = "flex";
  }else {
    document.querySelector(".menuUsuario").style.display = "none"
  }
}

var esconde_menu_card = document.querySelector(".setaMenuCard").onclick = () => {
  let menu_card = document.querySelector(".menuCard").style.display;
  if (menu_card == "none") {
    document.querySelector(".menuCard").style.display = "flex";
  }else {
    document.querySelector(".menuCard").style.display = "none"
  }
}

var esconde_menu_card = document.querySelector(".btnVisualizarConfessario").onclick = () => {
  let menu_card = document.querySelector(".MenuLateral").style.display;
  if (menu_card == "none") {
    document.querySelector(".MenuLateral").style.display = "flex";
  }else {
    document.querySelector(".MenuLateral").style.display = "none"
  }
}
