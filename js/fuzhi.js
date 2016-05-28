
//复制到剪切板
function copytext(id){
	textSelect(document.getElementById(id));
}

var textSelect = function(o){
	//a是起始位置，b是终点位置
	var l = o.value.length;
	if(l){
		if(o.createTextRange){//IE浏览器
			var range = o.createTextRange();
			range.moveStart("character",-l);
			range.moveEnd("character",-l);
			range.moveStart("character", 0);
			range.moveEnd("character",l);
			range.select();
			range.execCommand("Copy");
			alert('已成功复制！');
		}else{
			o.setSelectionRange(0, l);
			o.focus();
			if(document.execCommand('Copy')){
				document.execCommand('Copy','false',null);
				alert('已成功复制！');
			}else{
				alert('浏览器无法访问您的剪切板，请您手动ctrl+C进行复制');
			}
		}
	}
};
