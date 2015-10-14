var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype); //this delegates the Grub.prototype as default lookkup location
Bee.prototype.constructor = Bee;

// var myCutieBee = new Bee();
// console.log('myCutieBee is: ', myCutieBee);
