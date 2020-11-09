let chalk = require('chalk');

function Dog(name) {
    this.name = name;
    this.stomach = [];
}

Dog.prototype.sayHi = function () {
    console.log('Hi, My name is ' + chalk.red(this.name));
}

Dog.prototype.eat = function (bone) {
    this.stomach.push(bone);
}

module.exports = Dog;