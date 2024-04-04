function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //  em vez do toggle
  //  if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //  }  else {
  //  html.classList.add("light")
  //  }

  //  pegar a tag img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //  se tiver light mode, adicionar a imagem correspondente
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //  se tiver darkmode, manter a imagem correspondente
    img.setAttribute("src", "./assets/avatar.png")
  }
}
