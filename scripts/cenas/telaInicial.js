class TelaInicial {
  constructor(){
    
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(70);
    text('Bruxinha Hipsta em', width/2, height/3.5);
    textSize(50);
    text('busca da sua varinha!', width/2, height/5*2);
    textSize(30);
    text('Ajude a Hispta encontrar sua varinha perdida, mas', width/2, height/5*4);
    textSize(30);
    text('para isso enfrente os desafios da floresta!', width/2, height/5*4.3);
  }
  
  _botao(){
    botaoGerenciador.draw();
  }
}