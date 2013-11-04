window.onload = function() {
setTimeout(function(){
	$("#loader").addClass("pt-page-scaleDown");
	$("#main").addClass("pt-page-moveFromBottom").show();
	$("#loader").hide();
	}, 2000);
};