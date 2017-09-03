/*var button = document.getElementsByClassName('done')[0];
var userMessage = document.getElementsByClassName('user_message')[0];
var title = document.getElementsByClassName('title')[0];
var category = document.getElementsByClassName('category')[0];
var account = userMessage.getAttribute('data');
//console.log(title);

window.onload = function(){
    button.addEventListener('click', function(){
        var data = CKEDITOR.instances.edit1.getData();
        console.log(category.value);

        var xmlhttp = new XMLHttpRequest();
        var formData = new FormData();
        formData.append('loginaccount', account);
        if(title.value == ''){
        	alert("标题不能为空!");
        	return;
        }else{
        	formData.append('title', title.value);
        }

        if(data == ''){
        	alert("博客内容不能为空!");
        	return;
        }else{
        	formData.append('content', data);
        }

        formData.append('category', category.value);

        //ture/false 选择是否为异步模式
        xmlhttp.open('post', 'http://127.0.0.1:1337/addBlog', true);
        xmlhttp.onreadystatechange = function(){
        	if(xmlhttp.readyState == 4){
        		if(xmlhttp.status == 200){
        			console.log('success!');
        		}
        	}
        };

        xmlhttp.send(formData);
   
    });
}*/

/*var button = document.getElementsByClassName('done')[0];
var userMessage = document.getElementsByClassName('user_message')[0];
var title = document.getElementsByClassName('title')[0];
var category = document.getElementsByClassName('category')[0];
var account = userMessage.getAttribute('data');*/

/*window.onload = function(){
    button.addEventListener('click', function(){
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open('post', 'http://127.0.0.1:1337/addBlog', true);
        xmlhttp.onreadystatechange = function(){
        	if(xmlhttp.readyState == 4){
        		if(xmlhttp.status == 200){
        			console.log('success!');
        		}
        	}
        };

        xmlhttp.send();

    });
};*/

var submit = document.getElementsByClassName('done')[0];
var title = document.getElementsByClassName('title')[0];
var category = document.getElementsByClassName('category')[0];
var form = document.getElementsByTagName('form')[0];


/*submit.addEventListener('click', function(event){
    var data = CKEDITOR.instances.edit1.getData();
    //console.log(category.value);

    event.preventDefault();
    if(title.value == ''){
    	alert("标题不能为空!");
    	return;
    }
    if(data == ''){
    	alert("博客内容不能为空!");
    	return;
    }

    console.log(form);
    form.submit();

});*/

form.onsubmit = function(){
	var data = CKEDITOR.instances.edit1.getData();
    //console.log(category.value);

    //event.preventDefault();
    if(title.value == ''){
    	alert("标题不能为空!");
    	return false;
    }
    if(data == ''){
    	alert("博客内容不能为空!");
    	return false;
    }

    //console.log(form);
    //form.submit();
    return true;

}