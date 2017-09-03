var loginBox = document.getElementsByClassName('loginBox');
var errorCode = loginBox[0].getAttribute('data')*1;
var account = loginBox[0].getAttribute('account')*1;
var loginaccount = loginBox[0].getAttribute('loginaccount')*1;

console.log(loginaccount);

if(errorCode == 1){
	setTimeout("alert('用户密码长度请控制在6~12位!');", 300);

}else if(errorCode == 2){
	setTimeout("alert('两次输入的密码不相同!');", 300);

}else if(errorCode == 3){
	setTimeout("alert('该用户昵称已经存在,请跟换!');", 300);

}else if(errorCode == 4){
    setTimeout("alert('用户名和密码不能为空!');", 300);

}else if(errorCode == 0){
    if(account != 0){
        var callback = function(){
        	alert('您注册的账号为' + account + '\n请记住这个账号！');
        	window.location.href = 'http://127.0.0.1:1337/index?page=1&loginaccount=' + loginaccount;
        };

    	setTimeout(callback, 300);
        
    }else{}
    
}else{
	setTimeout("alert('runningTime error!');", 300);

}