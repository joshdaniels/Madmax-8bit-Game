
$(".startbutton").click(function(){
	$(".titlescreen").show();
	$(".logogif").show();
});




  $(".startbutton").click(function(){
  document.getElementById('audio1').play();
  });
  	
$(".clicktostart").click(function(){
	$(".road").show();
	
});


$(".attackbutton").click(function(){
	$(".yellowcardamage").show().delay(2000).fadeOut(400,function(){
                       $(".blackcardamage").show().delay(2000).fadeOut();
});
});