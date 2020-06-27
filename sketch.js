function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Começar Aventura', width/2, height/2);
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}