// JavaScript source code
var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*
$(document).ready(function(){
$("enviarCorreo").click(function(){
$(this).css({
	"color": "red",
	"font-size": "2em"
});
});
});
*/