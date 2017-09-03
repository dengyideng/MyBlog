var expertMessage = document.getElementsByClassName('expert_message');
var contentRight = document.getElementsByClassName('content_right');
var count = 0;

for(var x = 0; x < expertMessage.length; x ++){
	console.log(expertMessage[x].childNodes[3]);
	if(expertMessage[x].childNodes[3].firstChild.innerText == ''){
		expertMessage[x].style.display = 'none';
		count = count + 1;
	}
}

if(count == 6){
	var focusNone = document.createElement('div');
	focusNone.innerText = "还没有关注呢！";
	focusNone.setAttribute('class', 'focusNone');
	contentRight[0].appendChild(focusNone);
}