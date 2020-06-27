function GameOver() {
  somDoJogo.stop();
  somGameOver.play();

  createCanvas(windowWidth, windowHeight);
  image(imagemGameOver, ((windowWidth / 2) - (imagemGameOver.width / 2)), ((windowHeight / 2) - (imagemGameOver.height / 2)));
  pontuacao.exibePontuacaoFinal(imagemGameOver.height);
  noLoop();
}