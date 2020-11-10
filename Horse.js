function Horse(name, speed) {
    this.name = name;
    this.speed = speed;
}

Horse.prototype.jump = function () {
    console.log('This horse jumping');
}

Horse.prototype.run = function(){
    console.log(this.name + ' running with speed ' + this.speed);
}

module.exports = Horse;