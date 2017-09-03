var pageTurning = document.getElementsByClassName('page_turning')[0];
var indexPages = pageTurning.getElementsByTagName('a');
var pageCount = pageTurning.getElementsByTagName('span')[1];
var count = parseInt(pageCount.getAttribute('data'));
var welcome = document.getElementsByClassName('welcome');
console.log(welcome[0].childNodes[1]);
var account = welcome[0].childNodes[1].getAttribute('data')*1;

if(account == 0){
	welcome[0].style.display = 'none';
}else{
	var login = document.getElementsByClassName('login');
	var register = document.getElementsByClassName('register');
	login[0].style.display = 'none';
	register[0].style.display = 'none';
}

if(parseInt(indexPages[2].innerText) == 1){
	//indexPages[0].style.display = 'none';
     if(parseInt(indexPages[2].getAttribute('data')) == 1){
     	indexPages[0].style.display = 'none';
     }else{

     }

	indexPages[1].style.display = 'none';
	indexPages[2].style.display = 'inline-block';
	indexPages[2].setAttribute('href', '/index?page=1&loginaccount=' + account);
	indexPages[3].style.display = 'inline-block';
	indexPages[3].setAttribute('href', '/index?page=2&loginaccount=' + account);
	indexPages[4].style.display = 'inline-block';
	indexPages[4].setAttribute('href', '/index?page=3&loginaccount=' + account);
	indexPages[5].style.display = 'inline-block';
	indexPages[5].setAttribute('href', '/index?page=4&loginaccount=' + account);
	indexPages[6].style.display = 'inline-block';

}else if(Math.ceil(count/3)*3 - 2 == parseInt(indexPages[2].innerText)){
	var temp = Math.ceil(count/3)*3 - 2;
	indexPages[0].style.display = 'inline-block';
	indexPages[1].style.display = 'inline-block';
	indexPages[1].setAttribute('href', '/index?page=' + (temp - 3) + '&loginaccount=' + account);
	indexPages[2].style.display = 'inline-block';
	indexPages[2].setAttribute('href', '/index?page=' + temp + '&loginaccount=' + account);
	indexPages[5].style.display = 'none';
	//indexPages[6].style.display = 'none';
    for(var i = 2; i < 5; i ++){
    	if(parseInt(indexPages[i].getAttribute('data')) == 1){
    		if(parseInt(indexPages[i].innerText) == count){
    			indexPages[6].style.display = 'none';
    		}
    	}
    	break;
    }	

	if(parseInt(indexPages[3].innerText <= count)){
		indexPages[3].style.display = 'inline-block';
		indexPages[3].setAttribute('href', '/index?page=' + (temp + 1) + '&loginaccount=' + account);
	}else{
		indexPages[3].style.display = 'none';
	}

    if(parseInt(indexPages[4].innerText <= count)){
		indexPages[4].style.display = 'inline-block';
		indexPages[4].setAttribute('href', '/index?page=' + (temp + 2) + '&loginaccount=' + account);
	}else{
		indexPages[4].style.display = 'none';
	}

}else{
	var temp =parseInt(indexPages[2].innerText);
	for(var i = 0; i < indexPages.length; i ++){
		indexPages[i].style.display = "inline-block";
	}
	//indexPages[0].setAttribute('href', '/index?page=' + temp);
	indexPages[1].setAttribute('href', '/index?page=' + (temp - 3) + '&loginaccount=' + account);
	indexPages[2].setAttribute('href', '/index?page=' + temp + '&loginaccount=' + account);
	indexPages[3].setAttribute('href', '/index?page=' + (temp + 1) + '&loginaccount=' + account);
	indexPages[4].setAttribute('href', '/index?page=' + (temp + 2) + '&loginaccount=' + account);
	indexPages[5].setAttribute('href', '/index?page=' + (temp + 3) + '&loginaccount=' + account);
	//indexPages[6].setAttribute('href', '/index?page=' + temp);
}

//最后一页没有内容的BLOG隐藏
var blogs= document.getElementsByClassName('blogArticle');
for(var m = 4; m >= 0; m --){
	var blogger = blogs[m].childNodes[1];
	console.log(blogger);
	if(blogger.lastChild.innerText == ''){
		blogs[m].style.display = 'none';
	}
}

for(var x = 0; x <= 6; x ++){
	if(parseInt(indexPages[x].getAttribute('data')) == 1){
		var temp = parseInt(indexPages[x].innerText);
		indexPages[x].setAttribute('class', 'choosed');
		indexPages[0].setAttribute('href', '/index?page=' + (temp - 1) + '&loginaccount=' + account);
		indexPages[6].setAttribute('href', '/index?page=' + (temp + 1) + '&loginaccount=' + account);
	}else{
		indexPages[x].setAttribute('class', '');
	}
}
