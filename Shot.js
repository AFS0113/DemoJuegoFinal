class Shot{
    /*
    * Shot type:
    * 1) Corn: Long distance, long cooldown
    * 2) Egg: midddle distance, middle cooldown
    * 3) Coffee: short distance, short cooldown
    */

    constructor(xb,yb, tdir, tspeed, w, h, pic, type){
        this.xb = xb;
        this.yb = yb;
        this.dir = tdir;
        this.speed = tspeed;
        this.w = w;
        this.h = h;
        this.pic = pic;
        this.type = type;
    }


    render(){
        if(this.dir == 'r'){
            push();
            angleMode(DEGREES);
            rotate(0);
            image(this.pic, this.xb, this.yb, this.w, this.h);
            pop();
          }else if(this.dir == 'u'){
            push();
            angleMode(DEGREES);
            rotate(270);
            image(this.pic, -this.yb, this.xb, this.w, this.h);
            pop();
          }else if(this.dir == 'l'){
            push();
            angleMode(DEGREES);
            rotate(180);
            image(this.pic, -this.xb, -this.yb, this.w, this.h);
            pop();
          }else if(this.dir == 'd'){
            push();
            angleMode(DEGREES);
            rotate(90);
            image(this.pic, this.yb, -this.xb, this.w, this.h);
            pop();
          }

        
        switch (this.dir) {
            case 'u': 
                this.yb -= this.speed;	
                break;

            case 'd': 
                this.yb += this.speed;	
                break;

            case 'l': 
                this.xb -= this.speed;	
                break;

            case 'r': 
                this.xb += this.speed;	
                break;

        }
    }
}