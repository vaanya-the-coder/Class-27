class Chain{
    constructor(body_a, body_b){
        var options ={
            bodyA: body_a,
            bodyB: body_b,
            stiffness: 0.1,
            length: 10,
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        stroke("red");
        strokeWeight(3);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);

    }
}