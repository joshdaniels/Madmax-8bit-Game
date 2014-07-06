$(".startbutton").click(function(){
	$(".titlescreen").show();
	$(".logogif").show();
});




  
  	
$(".clicktostart").click(function(){
	$(".road").show();

});


$('.attackbutton').click(function(){
	$(".yellowcardamage").show().delay(2000).fadeOut(400,function(){
                       $(".blackcardamage").show().delay(2000).fadeOut();
});
});














var playerHealth = $('#playerHealth'),
    attackBTN = $('.attackbutton'),
    damage;

// constructors setup

var Player = function (options) {
  var options = options || {};
  this.name = options.name;
  this.health = 100;
  this.attack = function (target) {
    process_attack(this, target);
  };
  this.elem = options.elem;
};

// monster constructor
var Monster = function (options) {
  var options = options || {};
  this.name = options.name;
  this.health = 100;
  this.elem = options.elem;
};


// player instance

var ryu = new Player ({
  name: 'Ryu',
  elem: $('.player')
});

// monster instance

var rickRoss = new Monster ({
  name: 'Rick Ross',
  elem: $('.monster')
});

// actions

// player attacks monster

attackBTN.on('click', function () {
  ryu.attack(rickRoss);
});


var process_attack = function (attacker, attackee) {

  // Reset our Attack Button
  attackBTN.prop('disabled', false).text('Attack');

  // Generate a new damage value each time
  damage = _.random(5, 20);

  // Lower the attackee's health
  attackee.health -= damage;

  // If Attackee is still alive, decrease health!
  if (attackee.health > 0) {

    // Update the individual attacked's health visually
    attackee.elem.find('input').val(attackee.health);
 
    // When we attack a monster, he fights back
    if (attackee instanceof Monster) {
      console.log('You were attacked back');
      attackBTN.prop('disabled', true).text('Defending...');
      _.delay(process_attack, 1000, attackee, attacker);
    }

  } else {

    if (attackee instanceof Player) {
      // You Loose!!
      $(".youlose").show();
    } else {
      // You Win!!
      $(".youwin").show();
    }

  }
};

$(".startbutton").click(function(){
  document.getElementById('audio1').play();
  });




 



