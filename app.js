
$('.js-form').submit(function(event){
	event.preventDefault();
	var UserTextElement= $(event.currentTarget).find('#message');
	//var Name=$(event.currentTarget).find('#name');
	$(".js-display").prepend(UserTextElement.val()+"<br>");
	UserTextElement.val("");
	//Name.val("");
});


$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top 
         }, 700, 'swing', function () {
             window.location.hash = target;
         });
     });
 });



