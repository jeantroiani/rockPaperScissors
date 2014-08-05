$(document).ready(function(){

	player1 = new Player(prompt());
	player2 = new Player('computer');
	game = new Game(player1, player2);

	$('img').on('click',function(){
		player1.picks($(this).data("pick"));
		player2.picks(game.random_pick());
		$("<li>"+game.announce()+"</li>").prependTo('#winner ul').slideDown();
		$(' li:gt(2)').fadeOut(function(){
			$(this).remove();
		});
		
	})





	
	
	








})






