var edit = document.getElementsByClassName('edit')[0];
var modelContainer = document.getElementsByClassName('model_container')[0];
var editLabel = document.getElementsByClassName('edit_label');
var submit = document.getElementsByClassName('submit')[0].childNodes[1];
var form = document.getElementsByClassName('user_message_form')[0].childNodes[1];
var close = editLabel[0].childNodes[1];
var messageLabel = document.getElementsByClassName('message_label');
var sexLabel = messageLabel[3];

var provinceSelect = document.getElementsByClassName('province')[0];
var citySelect = document.getElementsByClassName('city')[0];
var areaSelect = document.getElementsByClassName('area')[0];

var province = provinceSelect.getAttribute('data');
var city = citySelect.getAttribute('data');
var area = areaSelect.getAttribute('data');

var photo = document.getElementsByClassName('photo')[0].childNodes[0];
var upload = document.getElementsByClassName('photoUpload')[0];
var closeUpload = document.getElementsByClassName('photoUpload')[0].childNodes[0];

console.log(photo);

edit.addEventListener('click', function(){
    modelContainer.style.visibility = 'visible';

});

close.addEventListener('click', function(){
    modelContainer.style.visibility = 'hidden';

});

submit.addEventListener('click', function(){
    form.submit();

});

if(sexLabel.getAttribute('data') == '男'){
    var boy = document.getElementsByClassName('sex')[0];
    boy.setAttribute('checked', 'checked');

}else if(sexLabel.getAttribute('data') == '女'){
	var girl = document.getElementsByClassName('sex')[1];
    girl.setAttribute('checked', 'checked');

}else{

}

//region message
/*if(provinceSelect.style.display == ''){
	console.log("we are in now!");
	if(province == ''){
		provinceSelect.childNodes[0].selected = 'selected';
	}else{
		console.log(provinceSelect.childNodes[0]);
	    var options = document.getElementsByName('job')[0];
	    console.log(options.childNodes.length);
		for(var x = 0; x < provinceSelect.childNodes.length; x ++){
			console.log("???");
			console.log(provinceSelect.childNodes[x]);
			if(provinceSelect.childNodes[x].value == province){
				provinceSelect.childNodes[x].selected = 'selected';
				//console.log(provinceSelect.childNodes[x]);
				break;
			}
		}
	}
}*/

/*photo.addEventListener('click', function(){
    upload.style.display = 'block';

});*/

closeUpload.addEventListener('click', function(){
    upload.style.display = 'none';

});


