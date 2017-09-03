var contentRight = document.getElementsByClassName('content_right');
var blogTitle = document.getElementsByClassName('blog_title');
var count = 0;

for(var x = 0; x < blogTitle.length; x ++){
	console.log(blogTitle[x].firstChild.childNodes[1]);
	if(blogTitle[x].firstChild.childNodes[1].innerText == ''){
		blogTitle[x].style.display = 'none';
		count = count + 1;
	}
}

if(count == 6){
	var blogNone = document.createElement('div');
	blogNone.innerText = "还没有收藏呢！";
	blogNone.setAttribute('class', 'blogNone');
	contentRight[0].appendChild(blogNone);
}