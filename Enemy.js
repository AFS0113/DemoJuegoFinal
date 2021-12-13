class Enemy{

    constructor(x, y, speed, imger, imgel, typee, w, h, dir, limx1, limx2){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.imger = imger;
        this.imgel = imgel;
        this.typee = typee;
        this.w = w;
        this.h = h;
        this.dir = dir;
        this.limx1 = limx1;
        this.limx2 = limx2;
    }

    render(){
        imageMode(CENTER);
        
        if(this.dir == 'r'){
            push();
            image(this.imger, this.x, this.y, this.w, this.h);
            pop();
        }else if(this.dir == 'l'){
            push();
            image(this.imgel, this.x, this.y, this.w, this.h);
            pop();
        }else if(this.dir == 'u' || this.dir == 'd'){
            push();
            image(this.imgel, this.x, this.y, this.w, this.h);
            pop();
        }

        switch (this.dir) {
            
            case 'l': 
                if(this.x < this.limx1 ){
                    this.dir = 'r';
                }else{
                    this.x -= this.speed;
                }
                break;

            case 'r': 
                if(this.x > this.limx2 ){
                    this.dir = 'l';
                }else{
                    this.x += this.speed;
                }
                break;
            
            case 'd':
                if(this.y > this.limx2 - (this.h/2)){
                    this.dir = 'u';
                }else{
                    this.y += this.speed;
                }
                break;

            case 'u':
                if(this.y < this.limx1 + (this.h/2)){
                    this.dir = 'd';
                }else{
                    this.y -= this.speed;
                }
                break;
        }
    }

}