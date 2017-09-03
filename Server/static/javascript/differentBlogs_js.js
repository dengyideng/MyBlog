var pageTurning = document.getElementsByClassName('page_turning')[0];
var indexPages = pageTurning.getElementsByTagName('a');
var pageCount = pageTurning.getElementsByTagName('span')[1];
var count = parseInt(pageCount.getAttribute('data'));
var category, clickMark = 0;//0 time, 1 views
var welcome = document.getElementsByClassName('welcome');
//console.log(welcome[0].childNodes[1]);
var account = welcome[0].childNodes[1].getAttribute('data');
console.log(typeof(account));

if(account == 0){
	welcome[0].style.display = 'none';
}else{
	var login = document.getElementsByClassName('login');
	var register = document.getElementsByClassName('register');
	login[0].style.display = 'none';
	register[0].style.display = 'none';
}

indexPages[0].style.display = 'none';
indexPages[1].style.display = 'none';
indexPages[2].style.display = 'none';
indexPages[3].style.display = 'none';
indexPages[4].style.display = 'none';
indexPages[5].style.display = 'none';
indexPages[6].style.display = 'none';

var blogs= document.getElementsByClassName('blogArticle');
for(var m = 4; m >= 0; m --){
	//console.log(blogs[m]);
	var blogger = blogs[m].childNodes[1];
	if(blogger.lastChild.innerText == ''){
		blogs[m].style.display = 'none';
	}
}

var categoryDiv = document.getElementsByClassName('categoryLabel');
var blogsLabel = document.getElementsByClassName('blogs_label');
var div = document.createElement('div');
var span = document.createElement('span');
var i = document.createElement('i');

//console.log(categoryDiv[0].childNodes[0].innerText);
switch(categoryDiv[0].childNodes[0].innerText){
	case '前端':
	    i.setAttribute('class', 'iconfont icon-qianduan');
	    category = 'web';
	    break;
	case '移动开发':
	    i.setAttribute('class', 'iconfont icon-shouji');
	    category = 'android';
	    break;
	case '数据库':
	    i.setAttribute('class', 'iconfont icon-shujuku');
	    category = 'database';
	    break;
	case '云计算':
	    i.setAttribute('class', 'iconfont icon-yun');
	    category = 'cloud';
	    break;
	case 'Java开发':
	    i.setAttribute('class', 'iconfont icon-java');
	    category = 'java';
	    break;
	default:
	    i.setAttribute('class', 'iconfont icon-all');
	    category = 'others';
	    break;
}

span.innerText = categoryDiv[0].childNodes[0].innerText;
div.appendChild(i);
div.appendChild(span);
 
blogsLabel[0].removeChild(blogsLabel[0].firstChild);
blogsLabel[0].removeChild(blogsLabel[0].firstChild);

console.log(div);
console.log(blogsLabel[0]);
blogsLabel[0].insertBefore(div, blogsLabel[0].firstChild);

//test
/*for(var x = 0; x < indexPages.length; x ++){
	console.log(indexPages[x]);
}

for(var x in indexPages){
	console.log(x);
	console.log(indexPages[x])
}*/
//for in 循环注意变量x 的取值可能为id

var orderBy = document.getElementsByClassName('orderBy');

orderBy[0].firstChild.setAttribute('href', '/differentBlogs?listby=time&category=' + category +'&loginaccount=' + account);
orderBy[1].firstChild.setAttribute('href', '/differentBlogs?listby=views&category=' + category +'&loginaccount=' + account);

if(blogsLabel[0].getAttribute('data') == 'views'){
	orderBy[0].setAttribute('class', 'orderBy');
	orderBy[1].setAttribute('class', 'orderBy focus');
}else{
	orderBy[0].setAttribute('class', 'orderBy focus');
	orderBy[1].setAttribute('class', 'orderBy');
}

