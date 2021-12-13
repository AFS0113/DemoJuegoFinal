class Hen{
  
    constructor(xt, yt, dir){
        this.xt = xt;
        this.yt = yt;
        this.dir = dir;
      
    }
  
    move(xdir,ydir){
      this.xt += xdir;
      this.yt += ydir;
    }
  

    render(){

        if(this.dir == 'd'){
            push();
            angleMode(DEGREES);
            rotate(180);
            image(img, -hen.xt, -hen.yt, 70, 70);
            pop();
          }else if(this.dir == 'u'){
            push();
            angleMode(DEGREES);
            rotate(0);
            image(img, hen.xt, hen.yt, 70, 70);
            pop();
          }else if(this.dir == 'l'){
            push();
            angleMode(DEGREES);
            rotate(270);
            image(imgHenl, -hen.yt, hen.xt, 70, 70);
            pop();
          }else if(this.dir == 'r'){
            push();
            angleMode(DEGREES);
            rotate(90);
            image(imgHenr, hen.yt, -hen.xt, 70, 70);
            pop();
          }

    }
  }