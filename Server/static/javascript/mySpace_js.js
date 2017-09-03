var blogTitle = document.getElementsByClassName('blog_title');
var contentRight = document.getElementsByClassName('content_right');
var count = 0;

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