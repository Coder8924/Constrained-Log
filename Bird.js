class Bird extends BaseClass { 
    constructor(x,y){ 
        /*var options = {
            'this.scale': 1.0,
            'this.setCollider': ("circle",0,0,40)   
        }*/
        super(x,y,20,20,options);
        this.image = loadImage("bird.png");
        //this.scale = 0.5;
    } display() 
    { this.body.position.x = mouseX; 
        this.body.position.y = mouseY; 
        super.display(); } 
    };
