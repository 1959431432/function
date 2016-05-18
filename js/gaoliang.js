// @author 多肉哥
// @addtime 2016/05/18
// 没有加载jquery自动加载bootcss的jquery cdn
! window.jQuery && document.write("<scri"+"pt src='//cdn.bootcss.com/jquery/2.2.3/jquery.min.js' type='text/javascript'></s"+"cript>");

// 替换搜索高亮
// @搜索框必须加一个class等于searchInput
// @显示内容替换成高亮必须加一个class等于searchContent
function showSearch(){
	this.run = function()
	{
		var searchInputName = $('.searchInput').attr('name'),searchInputValue= this.GetQueryString( searchInputName );
		$('.searchContent').each( function(){
			var t = decodeURIComponent($(this).html());
			var r = t.replace( searchInputValue, "<b style='color:#F44336'>"+searchInputValue+"</b>");
			$(this).html( r );
		})
	}
	this.GetQueryString = function( name ){
		var s = window.location.search.replace('?','');
	    var arrStr = s.split( '&' );
	    for( k in arrStr ){
	    	if( k ){
	    		var a = arrStr[k].split('=');
	    		if( a[0] == name ){
	    			// 对utf8编码转换成gbk
	    			return decodeURIComponent(a[1]); 
	    		}
	    	}
	    }
	}
}

// demo
var showSearchObj = new showSearch();
showSearchObj.run();


