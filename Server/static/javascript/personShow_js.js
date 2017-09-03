var blogTitle = document.getElementsByClassName('blog_title');
var contentRight = document.getElementsByClassName('content_right');
var count = 0;
var focusMess = document.getElementsByClassName('focusHim');
var statusCode = focusMess[0].getAttribute('statuscode')*1;

for(var x = 0; x < blogTitle.length; x ++){
	if(blogTitle[x].lastChild.firstChild.innerText == ''){
		blogTitle[x].style.display = 'none';
		count = count + 1;
	}
}

if(count == 10){
	var blogNone = document.createElement('div');
	blogNone.innerText = "主人很懒,还没有博客呢！";
	blogNone.setAttribute('class', 'blogNone');
	contentRight[0].appendChild(blogNone);
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
