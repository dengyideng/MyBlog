var loginBox = document.getElementsByClassName('loginBox');
var errorCode = loginBox[0].getAttribute('data');

if(errorCode == ''){

}else if(errorCode == 1){
	setTimeout("alert('登录密码错误!');", 300);
}else if(errorCode == 2){
	setTimeout("alert('登录账号错误!');", 300);
}else{
	setTimeout("console.log('runningTime error!');", 300);
}