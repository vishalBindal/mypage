
$('.js-form').submit(function(event){
	event.preventDefault();
	var UserTextElement= $(event.currentTarget).find('#message');
	//var Name=$(event.currentTarget).find('#name');
	$(".js-display").prepend(UserTextElement.val()+"<br>");
	UserTextElement.val("");
	//Name.val("");
});



