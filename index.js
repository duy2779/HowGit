var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var cat = new Cat();
var dog = new Dog();
var mouse =new Mouse('Jerry');

dog = new Dog();

try{
    cat.eat(dog);
    console.log(cat);
}catch(err){
    console.log('Error when cat eating!!!');
}
