var commentPers = document.getElementsByClassName('commentPers_message');
var commentsBody = document.getElementsByClassName('blog_comments_body');
var focusMess = document.getElementsByClassName('focusHim');
var statusCode = focusMess[0].getAttribute('statuscode')*1;

var count = 0;
for(var x = 0; x < commentPers.length; x ++){
	console.log(commentPers[x].childNodes[0]);
	if(commentPers[x].childNodes[0].getAttribute('src') == ''){
		commentPers[x].parentNode.style.display = 'none';
		count += 1;
	}
}

if(count == 5){
	var commentNone = document.createElement('div');
	commentNone.innerText = '暂时没有评论呢!'
	commentNone.setAttribute('class', 'commentNone');
	commentsBody[0].appendChild(commentNone);
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