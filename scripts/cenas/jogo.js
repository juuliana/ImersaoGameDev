class Jogo{
  constructor(){
    this.indice = 0;
    this.mapa = fita.mapa;
    this.perdeu = 0;
  }
  
  setup(){
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    
    personagem = new Personagem(matrizPersonagem,imagemPersonagem, 0, 30, 150, 175, 220, 270);
    
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 72, 72, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 190, 230, 400, 400, 15);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key){
    if(key === 'ArrowUp'){
      personagem.pula();
      somDoPulo.play();
    }
    if (key === 'Enter') {
      if (this.perdeu === 1) {
        window.location.reload();
      }
    }
  }
  
  draw(){
    
    if (keyIsDown(LEFT_ARROW)){
      personagem.andar(0);
    }
    if (keyIsDown(RIGHT_ARROW)){
      personagem.andar(1);
    }
    
    cenario.exibe();
    cenario.move();
    
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();
    
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < - inimigo.largura;
    
    inimigo.velocidade = linhaAtual.velocidade;
    
    inimigo.exibe();
    inimigo.move();
    
    if(inimigoVisivel){
      this.indice++;
      inimigo.reaparece();
      if(this.indice > this.mapa.length - 1){
        this.indice = 0;
      }
    }
    
    if(personagem.estaColidindo(inimigo)){
      vida.perdeVida();
      personagem.tornarInvencivel();
      if(vida.vidas === 0){
        GameOver();
        this.perdeu = 1;
      }
    }
  }
}