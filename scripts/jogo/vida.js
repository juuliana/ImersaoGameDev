class Vida{
  constructor(total, inicial){
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    this.largura = 40;
    this.altura = 40;
    this.xInicial = 35;
    this.y = 20;
  }

  draw(){
    for(let i = 0; i < this.vidas; i++){
      const margem = i * 10;
      const posicao = this.xInicial * (1 + i);
      
      image(imagemVida, posicao + margem, this.y, this.largura, this.altura); 
    } 
  }
  
  ganhaVida(){
    if(this.vidas < this.total){
      this.vidas++;
      somGanhaVida.play();
    }
  }
  
  perdeVida(){
    this.vidas--;
    somPerdeVida.play();
  }
}