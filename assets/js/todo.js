
// For striking off done todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//deleting the task by clicking on X
$("ul").on("click", "span" ,function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove()   //this refers to Li and not span. Included remove because fade out will just set display to none and not delete it
	});
	event.stopPropagation()
});

//Insert new todo
$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var newTask = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTask + "</li>")

	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});