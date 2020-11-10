function Mouse(name) {
    this.name = name;
}

Mouse.prototype.sleep = function (animalAround) {
    var Cat = require('./Cat');
    if (animalAround instanceof Cat) {
        console.log('Mouse cannot sleep');
    } else {
        console.log('Mouse is sleeping...');
    }
}

module.exports = Mouse;