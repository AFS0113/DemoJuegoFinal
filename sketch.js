
let hen;
let shots = [];
let cooldown = 30;
let levelStatus = 1;
let enemies = [];
let enemiesChef = [];
let hp = 5;
let corns = false;
let coffees = false;
let eggs = false;

function setup() {
  cx = 800;
  cy = 600;

  createCanvas(cx, cy);

  uplim = (-1*cy/2) + 25;
  downlim = (cy/2) - 25;
  leftlim = (-1*cx/2) + 25;
  rightlim = (cx/2) - 25;

  img = loadImage('img/obj/chickenf.png');
  imgHenr = loadImage('img/obj/chickenr.png');
  imgHenl = loadImage('img/obj/chickenl.png');

  imgShotCorn = loadImage('img/obj/corn.png');
  imgShotEgg = loadImage('img/obj/egg.png');
  imgShotCoffee = loadImage('img/obj/coffee2.png');
  
  aux = 0;

  imageMode(CENTER);
  coffeeX = -305;
  coffeeY = 230;
  wormX = -170;
  wormY = -80;
  cornX = 175;
  cornY = 100;

  up = false;
  down = false;
  le = true;
  ri = false;

  //Levels background images
  imgLvl1 = loadImage("img/levels/nv1.png");
  imgLvl2 = loadImage("img/levels/nv2.png");
  imgLvl3 = loadImage("img/levels/nv3.jpg");
  imgLvl4 = loadImage("img/levels/nv4.jpg");
  imgLvl5 = loadImage("img/levels/nv5.png");
  imgLvl6 = loadImage("img/levels/nv6.jpg");
  imgLvl7 = loadImage("img/levels/nv7.jpg");

  //Health
  imgHp = loadImage("img/items/heart.png");
  imgHpContainer = loadImage("img/items/health.png");

  //Items
  imgCorns = loadImage("img/items/corninventory.png");
  imgWorm = loadImage("img/items/worm.png");
  imgCoffees = loadImage("img/obj/coffee3.png");


  //Screen 1 items:
  imgPlayButton = loadImage("img/items/buttonplay1.png");
  imgGameIcon = loadImage("img/items/gameicon.png");
  imgInstructionsButton = loadImage("img/items/buttoninstructions.png");

  //Screen 2 items:
  imgInstructions = loadImage("img/items/instructions.png");
  imgPlayButton2 = loadImage("img/items/buttonplay2.png");

  //Screen 3 items:
  imgFarmerRight = loadImage("img/obj/farmerr.png");
  imgFarmerLeft = loadImage("img/obj/farmerl.png");
  imgCatRight = loadImage("img/obj/catr.png");
  imgCatLeft = loadImage("img/obj/catl.png");
  imgDogRight = loadImage("img/obj/dogr.png");
  imgDogLeft = loadImage("img/obj/dogl.png");
  imgPaperOpen = loadImage("img/obj/openpaper.png");
  imgPaper = loadImage("img/obj/paper.png");
  imgPaperText = loadImage("img/items/msg.png");

  msgstatus = 0;

  

  //Screen 4 items:
  imgApples = loadImage("img/items/findapple.png");
  imgBittenApple = loadImage("img/items/bittenapple.png");

  //Screen 5 items:
  imgChef = loadImage("img/obj/chef.png");

  //Screen 6 items:
  imgCorn = loadImage("img/items/findcorn.png");
  imgColorCorn = loadImage("img/items/colorcorn.png");

  //Screen 7 items:
  imgRestart = loadImage("img/items/buttonrestart.png");
  imgEndmsg = loadImage("img/items/endmsg.png");
  imgWin  = loadImage("img/items/victory.png");

  loadEnemies();

  hen = new Hen(350, 40, 'u');
}

function draw() {
  
  background(220);

  translate (width/2, height/2);
  
  if(levelStatus == 1){
    screen1();
  }else if(levelStatus == 2){
    screen2();
  }else if(levelStatus == 3){
    screen3();
  }else if(levelStatus == 4){
    screen4();
  }else if(levelStatus == 5){
    screen5();
  }else if(levelStatus == 6){
    screen6();
  }else if(levelStatus == 7){
    screen7();
  }

  if(cooldown < 30){
    cooldown++;
  }

  if(hp == 0){
    gameover();
  }

  
}

function loadEnemies(){
  enemies.push(new Enemy(0, 200, 2, imgFarmerRight, imgFarmerLeft, 1, 100, 200, 'l', -400, 400));
  enemies.push(new Enemy(0, -90, 2, imgCatRight, imgCatLeft, 2, 100, 100, 'l', -200, 200));
  enemies.push(new Enemy(0, 250, 3, imgDogRight, imgDogLeft, 3, 100, 100, 'l', -400, 400));
  enemiesChef.push(new Enemy(100, -90, 5, imgChef, imgChef, 2, 200, 200, 'u', -300, 300));
  enemiesChef.push(new Enemy(-180, 250, 7, imgChef, imgChef, 3, 200, 200, 'd', -300, 300));
}

function resetEnemies(){
  enemies[0].x = 0;
  enemies[0].y = 200;
  enemies[0].speed = 2;

  enemies[1].x = 0;
  enemies[1].y = -90;
  enemies[1].speed = 2;

  enemies[2].x = 0;
  enemies[2].y = 250;
  enemies[2].speed = 3;

  enemiesChef[0].x = 100;
  enemiesChef[0].y = -90;
  enemiesChef[0].speed = 5;

  enemiesChef[1].x = -180;
  enemiesChef[1].y = 250;
  enemiesChef[1].speed = 7;
}

//Displays items
function showItems(){
  imageMode(CENTER);
  image(imgHpContainer, 250, -250);
  image(imgCorns, cornX, cornY, 80, 80);
  image(imgCoffees, coffeeX, coffeeY, 20, 30);
  image(imgWorm, wormX, wormY, 80, 80);
  
}

//Displays the health
function showHp(){
  image(imgHpContainer, -250, -250);
  for(var k = 1; k <= hp; k++){
    image(imgHp, (-45 * k) - 110, -255);
  }
}

//Resets the game if Hen has 0 health points
function gameover(){  
  levelStatus = 1;
  hp = 5;  
  coffees = false;
  corns = false;
  eggs = false;
  uplim = (-1*cy/2) + 25;
  downlim = (cy/2) - 25;
  leftlim = (-1*cx/2) + 25;
  rightlim = (cx/2) - 25;

  resetEnemies();
}


function mousePressed() {
  console.log("" + mouseX + ", " + mouseY);
  if(levelStatus == 1){
    if(mouseX > 256 && mouseX < 500 && mouseY >470 && mouseY < 515){
      levelStatus = 3;
    }else if(mouseX > 295 && mouseX < 500 && mouseY > 540 && mouseY < 585){
      levelStatus = 2;
    }
  }else if(levelStatus == 2){
    if(mouseX > 265 && mouseX < 510 && mouseY >505 && mouseY < 575){
      levelStatus = 3;
    }
  }else if(levelStatus == 4){
    if(mouseX > 230 && mouseX < 260 && mouseY >345 && mouseY < 365){
      levelStatus = 5;
    }else{
      hp--;
    }
  }else if(levelStatus == 6){
    if(mouseX > 500 && mouseX < 515 && mouseY > 325 && mouseY < 335){
      levelStatus = 7;
    }else{
      hp--;
    }
  }else if(levelStatus == 7){
    if(mouseX > 475 && mouseX < 765 && mouseY > 510 && mouseY < 580){
      resetEnemies();
      gameover();
    }
  }else if(levelStatus == 3 && msgstatus == 1){
    msgstatus++;
  }
}



//SCREEN 1
function screen1(){
  imageMode(CENTER);
  image(imgLvl1, 0, 0, 800, 600);
  image(imgGameIcon, 0, 0);
  image(imgPlayButton, 0, 200);
  image(imgInstructionsButton, 0, 260);
  showHp();
}

//SCREEN 2
function screen2(){
  imageMode(CENTER);
  image(imgLvl2, 0, 0, 800, 600);
  image(imgInstructions, 0, 0, 500, 600);
  image(imgPlayButton2, 0, 250);
}

//SCREEN 3
function screen3(){
  imageMode(CENTER);
  image(imgLvl3, 0, 0, 800, 600); 
  

  if(typeof enemies[0] != 'undefined'){
    enemies[0].render();
  }

  if(typeof enemies[1] != 'undefined'){
    enemies[1].render();
  }

  if(typeof enemies[2] != 'undefined'){
    enemies[2].render();
  }
  
  hen.render();

  if(dist(hen.xt, hen.yt, 175, 80)< 50){ //Unlock the corns
    corns = true;
    cornX = 180;
    cornY = -250
  }

  if(dist(hen.xt, hen.yt, -305, 230)< 50){ //Unlock the coffee
    coffees = true;
    coffeeX = 250;
    coffeeY = -260;
  }

  if(dist(hen.xt, hen.yt, -170, -80)< 50){ //Unlock the eggs
    eggs = true;
    wormX = 320;
    wormY = -260;
  }

  if(dist(hen.xt, hen.yt, 0, 0)< 50 && msgstatus == 0){ //Show paper
    msgstatus++;
  }

  if(keyIsDown(UP_ARROW) && up){
    if(hen.yt > uplim ){
      hen.move(0, -3);
    }
  }else if(keyIsDown(DOWN_ARROW) && down){
    if(hen.yt < downlim ){
      hen.move(0, 3);
    }
  }else if(keyIsDown(RIGHT_ARROW) && ri){
    if(hen.xt < rightlim){
      hen.move(3,0);
    }
  }else if(keyIsDown(LEFT_ARROW) && le){
    if(hen.xt > leftlim ){
      hen.move(-3,0);
    }
  } 

  if(dist(hen.xt, hen.yt, enemies[2].x, enemies[2].y) < 50  || dist(hen.xt, hen.yt, enemies[1].x, enemies[1].y) < 50 || dist(hen.xt, hen.yt, enemies[0].x, enemies[0].y) < 50){
    hp--;
    hen.xt = 350;
    hen.yt = 40;
    hen.dir = 'u';
  }

  if (shots.length > 0) {
    for (var i = 0; i < shots.length; i++) {
      shots[i].render();
      if(shots[i].type == 3 && dist(shots[i].xb, shots[i].yb, hen.xt, hen.yt) > 100){
        shots.splice(i, 1);
      }else if(shots[i].type == 2 && dist(shots[i].xb, shots[i].yb, hen.xt, hen.yt) > 300){
        shots.splice(i, 1);
      }else if (shots[i].xb < (-1*cx/2) || shots[i].xb > (cx/2) || shots[i].yb < (-1*cy/2) || shots[i].yb > (cy/2)){ 
        shots.splice(i, 1);
      }else if(dist(shots[i].xb, shots[i].yb, enemies[0].x, enemies[0].y) < 50){
        shots.splice(i, 1);
        enemies[0].x = 1000;
        enemies[0].speed = 0;
      }else if(dist(shots[i].xb, shots[i].yb, enemies[1].x, enemies[1].y) < 50){
        shots.splice(i, 1);
        enemies[1].x = 1000;
        enemies[1].speed = 0;
      }else if(dist(shots[i].xb, shots[i].yb, enemies[2].x, enemies[2].y) < 50){
        shots.splice(i, 1);
        enemies[2].x = 1000;
        enemies[2].speed = 0;
      } 
    }
  }

  if(enemies[0].speed == 0 && enemies[1].speed == 0 && enemies[2].speed == 0){
    levelStatus = 4;
  }

  showItems();

  if(msgstatus == 0){
    image(imgPaper, 0, 0, 80,50);
  }else if(msgstatus == 1){
    image(imgPaperOpen, 0, 0, 600, 400);
    image(imgPaperText, 0, 0);
  }

  showHp();
  
}

//SCREEN 4
function screen4(){
  imageMode(CENTER);
  image(imgLvl4, 0, 0, 800, 600);
  image(imgApples, 0, 0);
  image(imgBittenApple, -150, 60);

  showHp();
}

//SCREEN 5
function screen5(){
  imageMode(CENTER);
  image(imgLvl5, 0, 0, 800, 600);
  
  hen.render();

  if(aux == 0){
    hen.xt = -350;
    hen.yt = 0;
    aux++;
  }

  enemiesChef[0].render();
  enemiesChef[1].render();

  if(dist(hen.xt, hen.yt, enemiesChef[1].x, enemiesChef[1].y) < 80 || dist(hen.xt, hen.yt, enemiesChef[0].x, enemiesChef[0].y) < 80){
    hp--;
    hen.xt = -350;
    hen.yt = 40;
    hen.dir = 'u';
  }

  if(dist(hen.xt, hen.yt, 175, 80)< 50){ //Unlock the corns
    corns = true;
    cornX = 180;
    cornY = -250
  }

  if(dist(hen.xt, hen.yt, -305, 230)< 50){ //Unlock the coffee
    coffees = true;
    coffeeX = 250;
    coffeeY = -260;
  }

  if(dist(hen.xt, hen.yt, -170, -80)< 50){ //Unlock the eggs
    eggs = true;
    wormX = 320;
    wormY = -260;
  }

  uplim = (-1*cy/2) + 125;
  downlim = (cy/2) - 125;

  if(keyIsDown(UP_ARROW) && up){
    if(hen.yt > uplim ){
      hen.move(0, -3);
    }
  }else if(keyIsDown(DOWN_ARROW) && down){
    if(hen.yt < downlim ){
      hen.move(0, 3);
    }
  }else if(keyIsDown(RIGHT_ARROW) && ri){
    if(hen.xt < rightlim ){
      hen.move(3,0);
    }
  }else if(keyIsDown(LEFT_ARROW) && le){
    if(hen.xt > leftlim ){
      hen.move(-3,0);
    }
  } 

  if (shots.length > 0) {
    for (var i = 0; i < shots.length; i++) {
      shots[i].render();
      if(shots[i].type == 3 && dist(shots[i].xb, shots[i].yb, hen.xt, hen.yt) > 100){
        shots.splice(i, 1);
      }else if(shots[i].type == 2 && dist(shots[i].xb, shots[i].yb, hen.xt, hen.yt) > 300){
        shots.splice(i, 1);
      }else if (shots[i].xb < (-1*cx/2) || shots[i].xb > (cx/2) || shots[i].yb < (-1*cy/2) || shots[i].yb > (cy/2)){ 
        shots.splice(i, 1);
      }else if(dist(shots[i].xb, shots[i].yb, enemiesChef[1].x, enemiesChef[1].y) < 50){
        shots.splice(i, 1);
        enemiesChef[1].x = 1000;
        enemiesChef[1].speed = 0;
      }else if(dist(shots[i].xb, shots[i].yb, enemiesChef[0].x, enemiesChef[0].y) < 50){
        shots.splice(i, 1);
        enemiesChef[0].x = 1000;
        enemiesChef[0].speed = 0;
      }
        
    }
  }

  if(enemiesChef[0].speed == 0 && enemiesChef[1].speed == 0 ){
    levelStatus = 6;
  }

  showItems()
  showHp();
}

//SCREEN 6
function screen6(){
  imageMode(CENTER);
  image(imgLvl6, 0, 0, 800, 600);
  image(imgCorn, 0, 0);
  image(imgColorCorn, 108, 30);

  showHp();
}

//SCREEN 7
function screen7(){
  imageMode(CENTER);
  image(imgLvl7, 0, 0, 800, 600);
  image(imgRestart, 220, 250);
  image(imgEndmsg, 150, 50);
  image(imgWin, 0, -200);
  image(img, -150, 260,100,100);
}


function keyPressed(){

  switch (keyCode) {
    case DOWN_ARROW: 
        if(!down){
          hen.dir = 'd';
          up = false;
          down = true;
          le = false;
          ri = false;
        }	
        break;

    case UP_ARROW: 
        if(!up){
          hen.dir = 'u';
          up = true;
          down = false;
          le = false;
          ri = false;
        }	
        break;

    case LEFT_ARROW: 
        if(!le){
          hen.dir = 'l';
          up = false;
          down = false;
          le = true;
          ri = false;
        }
        break;

    case RIGHT_ARROW: 
        if(!ri){
          hen.dir ='r';
          up = false;
          down = false;
          le = false;
          ri = true;
        }	
        break;

    case 75:
        if(cooldown == 30 && corns){
          shots.push(new Shot(hen.xt, hen.yt, hen.dir, 15, 50, 30, imgShotCorn, 1));
          cooldown = -10;
        }
        break;

    case 76:
        if(cooldown == 30 && eggs){
          shots.push(new Shot(hen.xt, hen.yt, hen.dir, 10, 30, 20, imgShotEgg, 2));
          cooldown = 15;
        }
        break;

    case 74:
        if(cooldown == 30 && coffees){
          shots.push(new Shot(hen.xt, hen.yt, hen.dir, 7, 30, 20, imgShotCoffee, 3));
          cooldown = 15;
        }
        break;

  }
}

