var welcome = document.getElementsByClassName('welcome');
console.log(welcome[0].childNodes[1]);
var account = welcome[0].childNodes[1].getAttribute('data');
var focusMess = document.getElementsByClassName('expert_content_experts');
var statusCode = focusMess[0].getAttribute('statuscode')*1;

if(account == 0){
	welcome[0].style.display = 'none';
}else{
	var login = document.getElementsByClassName('login');
	var register = document.getElementsByClassName('register');
	login[0].style.display = 'none';
	register[0].style.display = 'none';
}

//addFocusDeal
if(statusCode == 0){

}else if(statusCode == 1){
	setTimeout("alert('添加关注成功!');", 300);

}else if(statusCode == 2){
	setTimeout("alert('您已经关注了这个人了哦!');", 300);
	
}else if(statusCode == 3){
	setTimeout("alert('您为什么要关注你自己呢？');", 300);
	
}else{
	setTimeout("alert('runningTime error!');", 300);
}
