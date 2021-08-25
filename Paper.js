class Paper extends BaseClass{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        function keyPressed(){
            if(keyCode === UP_ARROW){
                Matter.Body.applyForce(paperObject.body.position(x:130,y:145));
            }
        }
    }
}