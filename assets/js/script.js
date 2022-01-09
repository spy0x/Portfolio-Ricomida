// JavaScript source code
var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function()
{
	$(".ToRed").dblclick(function()
	{
		$(this).css(
		{
			"color": "red",
		});
	});

	$(".ToggleOnOff").click(function()
	{
		$(".ShowHide").toggle();
	});
//	$('.carousel').carousel();
/*
	$("#carouselExampleIndicators").carousel();
	$(".carousel-item").click(function()
		{
		$("#carouselExampleIndicators").carousel(1);
		});
	$(".left").click(function()
		{
		$("#carouselExampleIndicators").carousel("prev");
		});
*/
});
