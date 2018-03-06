	$(document).ready(init);
				
	//init function
	function init() {
		allShowAndHide();
		
		
		$("table#map div a").click(function () {
			$(this).parent().css("backgroundColor","lightgreen");
			//$(this).css("color", "white");
			  $(this).fadeOut(200);
		 });
		 
		 $("a.player").cluetip({
			activation:'click',
			mouseOutClose: true,
			sticky: true,
			closePosition:'title',
		 });
		 
		 $("#textarea").one('click',function () {
			$(this).animate({
				height: 500,
				width: 700,
			  }, 700);
		 }).height(100).width(400);
		 
		 //form stuff
		$(':input[type=text]').focusin(function() {
			 $(this).css("backgroundColor","#E8F8F7");
		});
		$(':input').focusout(function() {
			 $(this).css("backgroundColor","");
		});
		//grumble stuff
		//Grumble.show({message: 'Welcome to Life Beyond Apocalypse!', title: 'Welcome', icon: 'success', sticky: false, right: '100px'});
		 $("textarea").counter();
		
		//select all
		$("#selectAll").toggle(function() {
			$(":checkbox").attr("checked","checked");
			$(this).attr("checked","checked");
		}, function () {
			$(":checkbox").removeAttr("checked");
		});
		/*$("input:button,input:submit").click(function() {
			$(this).delay(700).attr("disabled","true");
		});*/

	}
	function allShowAndHide() {
		var buttons = ["#showItems","#showSkillsMercenary","#showSkillsTechnician","#showSkillsMedic","#showSkillsSurvivor","#showSkillsZombie"];
		var contentDivs = ["#items","#skillsMercenary","#skillsTechnician","#skillsMedic","#skillsSurvivor","#skillsZombie"];
		
		for ( var i in buttons )	{
			showAndHide(buttons[i],contentDivs[i]);
			
			$(buttons[i]).attr("title","|Click on the the link to minimaze or expand the options").cluetip({
				showTitle: false,
				splitTitle:    '|',       // A character used to split the title attribute into the clueTip title and divs
				dropShadow: true,
				arrows: true,
			});
		}
/*
		var toHide = [".error",".success",".warning"];
		for ( var i in toHide )	{
			$(toHide[i]).hide();
			$(toHide[i]).slideDown(700);
		}*/
	}
		
	function showAndHide(button,content) {
		$(button).toggle(function() {
			$(content).slideDown(700).fadeOut(500);
			$(this).text("[+]");
		}, function() {
			$(content).slideUp(700).fadeIn(500);
			$(this).text("[-]");

		});
	}
	
jQuery.fn.counter = function() {
	 $(this).each(function() {
		var max = $(this).attr('maxlength');
		var val = $(this).attr('value');
		var cur = 0;
		if(val) // value="", or no value at all will cause an error
		  cur = val.length;
		var left = max-cur;
		$(this).after("<div class='counter'>"
		  + left.toString()+"</div>");
		// You can use something like this to align the
		// counter to the right of the input field.
		var c = $(this).next(".counter");
		c.width(40);
		/*c.css("position","relative");
		c.css("top",-$(this).height()-8+"px");
		c.css("left",$(this).width()+8+"px");*/
		c.css("marginLeft",$(this).width());
		c.css("background","black");
	 
		$(this).keyup(function(i) {
		  var max = $(this).attr('maxlength');
		  var val = $(this).attr('value');
		  var cur = 0;
		  if(val)
			cur = val.length;
		  var left = max-cur;
		  $(this).next(".counter").text(left.toString());
		  return this;
		});
	 });
  return this;
}
