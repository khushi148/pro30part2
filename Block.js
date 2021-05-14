class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png");
      this.Visiblity=255;
      World.add(world, this.body);
    }
    display(){
        if(this.body.speed < 5){
          push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0, this.width, this.height);
        pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
           pop();
         }
        
     }
 }
