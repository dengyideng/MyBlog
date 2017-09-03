var commentPers = document.getElementsByClassName('commentPers_message');
var commentsBody = document.getElementsByClassName('blog_comments_body');

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