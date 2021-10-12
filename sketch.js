//Youtube fase beta: youtu.be/i5CTQt0-_Ns
//Youtube código final: youtu.be/95NSqaUfQfE 
//ColabEduc: www.colabeduc.org/descricao/show/508

var opcao = 1; y = 190;
var escolha = 1;
var correta, corretaantigo, corretamedium, corretahard;
var tela = 0;
var regressiva = 5;
function preload(){  // Carregar a imagem
  backmenu = loadImage('background.png');
  backjogo = loadImage('backgame.png');
  descricaofoto = loadImage('descricao.png');
  creditosfoto = loadImage('creditos.png');
  failsound = loadSound('failhorn.mp3');
  clicksound = loadSound('switch-sound.mp3')
}

function setup() {
  createCanvas(800, 450);
}

function draw(){
  image(backjogo, 0, 0)
  if(tela == 0){ // tela do menu
    menu();
    regressiva = 5;
  }
  if(tela == 1){ // tela de jogo
    jogo();
  }
  if(tela > 3){ // tela de créditos
    if (regressiva == 0){
    regressiva = 5;
    escolha = 0;
    }
    regressiva = (regressiva - 0.015);
    regressiva = regressiva.toFixed(2);
  }
  
  if(tela == 2){ // tela de instruções
    instrucoes();
  }
  if(tela == 3){
    creditos();
  }
  if(tela == 4){
    facil();
  }
  if(tela == 5){
    medio();
  }
  if(tela == 6){
    dificil();
  }
}

function menu() {
  image(backmenu, 0, 0);
  fill( 50, 150, 160);
  rect(278, y, 250, 40, 15);
  fill(0,0,0);

  textSize(48);
  textAlign(CENTER, TOP);
  textFont('Impact')
  text("The NOT! Game", 400, 85);

  textFont('Arial')
  textSize(24);
  text("Jogar/Play", 400, 200);
  text("Instruções/Instructions", 400, 250);
  text("Créditos/Credits", 400, 300);

  if (mouseX < 530 && mouseX > 270) {
    if (mouseY > 190 && mouseY < 235) {
      y = 190;
    }
    if (mouseY > 235 && mouseY < 285) {
      y = 240;
    }
    if (mouseY > 285 && mouseY < 340) {
      y = 290;
    }
  }
}

function jogo(){
  image(backmenu, 0, 0);
  fill( 50, 150, 160);
  rect(278, y, 250, 40, 15);
  fill(0,0,0);

  textSize(48);
  textAlign(CENTER, TOP);
  textFont('Impact')
  text("The NOT! Game", 400, 85);

  textFont('Arial')
  textSize(24);
  text("Fácil/Easy", 400, 200);
  text("Médio/Medium", 400, 250);
  text("Difícil/Hard", 400, 300);

  if (mouseX < 530 && mouseX > 270) {
    if (mouseY > 190 && mouseY < 235) {
      y = 190;
    }
    if (mouseY > 235 && mouseY < 285) {
      y = 240;
    }
    if (mouseY > 285 && mouseY < 340) {
      y = 290;
    }
  }
}

function instrucoes(){
image(descricaofoto, 0, 0)
}

function creditos(){
image(creditosfoto, 0, 0)
}

function facil(){
  if(escolha == 1){
    fill(50, 150, 160);
    rect(350, 30, 90, 90, 15);  //Cima
    rect(50, 180, 90, 90, 15);  //Esquerda
    rect(660, 180, 90, 90, 15);  //Direita
    rect(350, 330, 90, 90, 15);  //Baixo
    fill(0,0,0);

    textFont('Impact')
    textSize(36);
    text('Up', 395, 55);
    text('Left', 95, 205);
    text('Right', 705, 205);
    text('Down', 394, 355);

    textSize(48);
    text('Do NOT go', 363, 200);
    text('Tempo:', 610, 30);
    text(regressiva, 730, 30);
    
    if(correta == 0){
      text('Up', 490, 200);
    }
    if(correta == 1){
      text('Left', 503, 200);
    }
    if(correta == 2){
      text('Right', 515, 200);
    }
    if(correta == 3){
      text('Down', 520, 200);
    }
  }
  if(escolha == 0){
    textSize(48)
    text("You lose but don't worry, try again :(", 400, 200)
    textSize(18)
    text('Press esc to return to the game menu', 150, 50)
  }
}

function medio(){
  if(escolha == 1){
    fill(50, 150, 160);
    rect(350, 30, 90, 90, 15);  //Cima
    rect(50, 180, 90, 90, 15);  //Esquerda
    rect(660, 180, 90, 90, 15);  //Direita
    rect(350, 330, 90, 90, 15);  //Baixo
    fill(0,0,0);

    textFont('Impact')
    textSize(36);
    text('Up', 395, 55);
    text('Left', 95, 205);
    text('Right', 705, 205);
    text('Down', 394, 355);

    textSize(48);
    text('Do NOT go', 363, 200);
    text('Tempo:', 610, 30);
    text(regressiva, 730, 30);
    
    if(correta == 0){
      text('Up', 490, 200);
    }
    if(correta == 1){
      text('Left', 503, 200);
    }
    if(correta == 2){
      text('Right', 515, 200);
    }
    if(correta == 3){
      text('Down', 520, 200);
    }
    if(corretamedium == 0){
      text('and Up', 450, 250);
    }
    if(corretamedium == 1){
      text('and Left', 463, 250);
    }
    if(corretamedium == 2){
      text("and Right", 475, 250);
    }
    if(corretamedium == 3){
      text('and Down', 480, 250);
    }
  }
  if(escolha == 0){
    textSize(48)
    text("You lose but don't worry, try again :(", 400, 200)
    textSize(18)
    text('Press esc to return to the game menu', 150, 50)
  }
}

function dificil(){
  if(escolha == 1){
    fill(50, 150, 160);
    rect(350, 30, 90, 90, 15);  //Cima
    rect(50, 180, 90, 90, 15);  //Esquerda
    rect(660, 180, 90, 90, 15);  //Direita
    rect(350, 330, 90, 90, 15);  //Baixo
    fill(0,0,0);

    textFont('Impact')
    textSize(36);
    text('Up', 395, 55);
    text('Left', 95, 205);
    text('Right', 705, 205);
    text('Down', 394, 355);

    textSize(48);
    text('Do NOT go', 353, 200);
    text('Tempo:', 610, 30);
    text(regressiva, 730, 30);
    if(correta == 0){
      text('Up,', 480, 200);
    }
    if(correta == 1){
      text('Left,', 493, 200);
    }
    if(correta == 2){
      text('Right,', 515, 200);
    }
    if(correta == 3){
      text('Down,', 510, 200);
    }
    if(corretamedium == 0){
      text('Up', 350, 250);
    }
    if(corretamedium == 1){
      text('Left', 323, 250);
    }
    if(corretamedium == 2){
      text("Right", 315, 250);
    }
    if(corretamedium == 3){
      text('Down', 310, 250);
    }
    if(corretahard == 0){
      text('and Up', 440, 250);
    }
    if(corretahard == 1){
      text('and Left', 453, 250);
    }
    if(corretahard == 2){
      text("and Right", 465, 250);
    }
    if(corretahard == 3){
      text('and Down', 470, 250);
    }
  }
  if(escolha == 0){
    textSize(48)
    text("You lose but don't worry, try again :(", 400, 200)
    textSize(18)
    text('Press esc to return to the game menu', 150, 50)
  }
}

function mouseClicked(){
  clicksound.play();
  if (mouseX < 530 && mouseX > 270) {
    if (mouseY > 190 && mouseY < 235) {
      if(tela == 1){
        tela = 4;
      }
      if(tela == 0){
          tela = 1;
      }
    }
    if (mouseY > 235 && mouseY < 285) {
      if(tela == 0){
          tela = 2;
      }
      if(tela == 1){
        tela = 5;
      }
    }
    if (mouseY > 285 && mouseY < 340) {
      if(tela == 0){
          tela = 3;
      }
      if(tela == 1){
        tela = 6;
      }
    }
  }
  if(tela > 3 && escolha == 1){
    if(mouseX < 440 && mouseX > 350 && mouseY < 120 && mouseY > 30) {
      regressiva = 5;
      escolha = 1;
      if(tela > 3){
        if(correta == 0){
          escolha = 0;
          failsound.play();
        }
      }
      if(tela > 4){
        if(corretamedium == 0){
          escolha = 0;
          failsound.play();
        }
      }
      if(tela > 5){
        if(corretahard == 0){
          escolha = 0;
          failsound.play();
        }
      }
      nrandom();
    }
    if(mouseX < 140 && mouseX > 50 && mouseY < 270 && mouseY > 180) {
      regressiva = 5;
      escolha = 1;
      if(tela > 3){
        if(correta == 1){
          escolha = 0;
          failsound.play();
        }
      }
      if(tela > 4){
        if(corretamedium == 1){
          escolha = 0;
          failsound.play();
        }
      }
      if(tela > 5){
        if(corretahard == 1){
          escolha = 0;
          failsound.play();
        }
      }
      nrandom();
    }
    if(mouseX < 750 && mouseX > 660 && mouseY < 270 && mouseY > 180) {
      regressiva = 5;
      escolha = 1;
      if(tela > 3){
        if(correta == 2){
          escolha = 0;
          failsound.play();
        }
      }
      if(tela > 4){
        if(corretamedium == 2){
          escolha = 0;
          failsound.play();
        }
      }
      if(tela > 5){
        if(corretahard == 2){
          escolha = 0;
          failsound.play();
        }
      }
      nrandom();
    }
    if(mouseX < 440 && mouseX > 350 && mouseY < 420 && mouseY > 330) {
      regressiva = 5;
      escolha = 1;
      if(tela > 3){
        if(correta == 3){
          escolha = 0;
          failsound.play();
        }
      }
      if(tela > 4){
        if(corretamedium == 3){
          escolha = 0;
          failsound.play();
        }
      }
      if(tela > 5){
        if(corretahard == 3){
          escolha = 0;
          failsound.play();
        }
      }
      nrandom();
    }
  }
}

function keyPressed(){
  if(key=="Escape"){
    if (tela > 0 && tela < 4){
      tela = 0;
    }
    if(tela > 3){
      tela = 1;
      escolha = 1;
      regressiva = 5;
    }
  }  
}

nrandom();
function nrandom(){
  correta = parseInt(Math.random() * (0, 4));
  while(corretaantigo == correta){
      correta = parseInt(Math.random() * (0, 4));
  }
  corretaantigo = correta;
  corretamedium = parseInt(Math.random() * (0, 4));
  corretahard = parseInt(Math.random() * (0, 4));
  while(correta == corretamedium || corretahard == corretamedium){
    corretamedium = parseInt(Math.random() * (0, 4));
  }
  while(correta == corretahard || corretahard == corretamedium){
    corretahard = parseInt(Math.random() * (0, 4));
  }
  return
}