function Horse(name, speed){
    this.name = name;
    this.speed = speed;
}

Horse.prototype.run = function(){
    console.log(this.name + ' running with speed ' + this.speed);
}