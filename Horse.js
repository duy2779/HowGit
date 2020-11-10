function Horse(name, speed) {
    this.name = name;
    this.speed = speed;
}

Horse.prototype.jump = function () {
    console.log('This horse jumping');
}