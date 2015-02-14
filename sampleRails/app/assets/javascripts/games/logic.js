app={};

$(function(){
var alert_me = function(){
	alert('you clicked!');

}
var changeText = function(){
	$('h1').text($("input").val());
}

 $("input[type='button']").click(changeText);
})