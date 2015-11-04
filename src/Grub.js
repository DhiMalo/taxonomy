var Grub = function() {

this.age = 0;
this.color = 'pink';
this.food = 'jelly';

};

Grub.prototype.eat = function(){}; //This is important - remember, it's not this.eat but Name.prototype.method so it can be subclass's prototype.

//var myGrubbie = new Grub(); <--NOTE: Use this if further testing is required.
