

$('.sousuoAreaInput').focus(function(){
	var _top = $(this).offset().top;
	var _height = $(this).height();
	var _width = $(this).width()+14;
	var left = $(this).offset().left;
	var top = _top + _height;
	console.log(top)
	$('.sousuoArea').css({
		'left':left+'px',
		'top':top+'px',
		'display':'flex',
		'width':'510px'
	})
})
$('.sousuoAreaInput').blur(function(){
	$('.sousuoArea').css('display','none');
})

$('.areaOne ul li').mousemove(function(){
	$('.areaTwo').remove();
	var areaTwo = $('<div class="areaTwo"></div>');
	var areaTwoUl = $('<ul></ul>');
	var _index = $(this).index();
	var _html = '';
	for(var i = 0;i<10;i++){
		_html += '<li>'+_index+'</li>';
	}
	areaTwoUl.append(_html);
	areaTwo.append(areaTwoUl);
	$('.sousuoArea').append(areaTwo);
})
