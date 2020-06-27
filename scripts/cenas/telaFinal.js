function TelaFinal() {

  createCanvas(windowWidth, windowHeight);
  image(imagemFim, 0, 0, width, height);
  pontuacao.exibeTelaFinal(imagemFim.height);
  noLoop();
}