
function Chat () {
    this.update = updateChat;
    this.send = sendChat;
}

function sendChat (nickname,message) {
	console.log(message);
	if (message == "") { return }
	$.ajax({
		type: 'GET',
		url: "./chatHandling.ws3?ApocalypsE=default",
		dataType: "text",
		cache: false,
		async:true,
		data: {
			'action':'send',
		 'nickname':  nickname,
		  'message' : message,
		  		 },
		success: function(msg){
			eval(msg);
			if (serverObj.data) {
				$('#chat-area').html(serverObj.data);
			}
	
		},
		error : function(whatWrong) { bubble('error',"There was an error while loading" + whatWrong) }
	});

}
function updateChat(){
	$.ajax({
		type: 'POST',
		url: 'chatHandling.ws3',
		data: {'action': 'update'},
		success: function(msg){
			eval(msg);
			if (serverObj.data) {
				$('#chat-area').append(serverObj.data);
			}
		},
		error : function(whatWrong) { bubble('error',"There was an error while loading ajax.." + whatWrong) }
	});
	 setTimeout(updateChat, 1500);
}
function getTheTime(){
	var mydate=new Date();
	var hours=mydate.getHours();
	var minutes=mydate.getMinutes();
	var seconds=mydate.getSeconds();
	
	return '(' + hours + ':' + minutes + ':' + seconds + ')';
}
