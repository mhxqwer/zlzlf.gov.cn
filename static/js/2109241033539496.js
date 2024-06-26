var windowWidth = $(window).width();
		var  webid = $('[name="i_webid"]').attr('content');
		var  zwfwid = "131000000000000";
		var goHref="/search.aspx?fieldOption=title&modelID=0&searchType=0&keyword=";
		// 必须
	//	var  hbg = ""; //头部背景
	//	var  hsearch_bg =""; //搜索背景
	//	var  hsearch_btn = "";//搜索按钮
	//	var  hlogo_img = "";//头部logo
	//	var  change_btn_normal = ""; //手机端默认切换按钮
	//	var  change_btn_selected = "";//手机端激活切换按钮
	//	var  hcolor = "#fff"; //头部文字颜色
		// 可选
	//	var  hfs_img = "src=''";
	//	document.writeln("<style>");
		//document.writeln(".clear{clear: both;height: 0px;overflow: hidden;}\n" +
		//		".hfl{float:left;}.hfr{float:right;}"+
			//	"body{font-size:16px;font-family: \"Microsoft YaHei\";}" +
			//	"input{border: none;outline: none;display: inline-block;vertical-align: top;}" +
		//        ".hhead{width: 100%;background: url("+hbg+") no-repeat center center;height: 260px;}\n" +
		   //     ".hhead-control{padding-top:18px;width:1200px;margin:0 auto;}\n" +
			//	".hhead-control2{width:1200px;margin:60px auto 0 auto;}\n" +
		//        ".hleft{float: left;font-size: 15px;color: "+hcolor+";margin-top:2px;margin-left: 20px}\n" +
		  //      ".hleft li{float: left;padding-right:10px;}\n" +
		//        ".hleft li span{height: 13px;display: block;float: right;width: 1px;background:#749dc5;margin-left: 10px;margin-top:5px; }\n" +
		//        ".hleft li a{color: "+hcolor+";}\n" +
		//        ".hgrob{width: 367px;height: 37px;background: url("+hsearch_bg+") no-repeat;float: left;}\n" +
		//        ".hsearch{outline: none;height: auto;border:none;background: none;margin-left: 20px;color: "+hcolor+";font-size: 15px;width: 300px;margin-top:0;padding:9px 0;font-family:\"微软雅黑\"}\n" +
		  //      ".hsbtn{background: url("+hsearch_btn+") no-repeat center center;width: 30px;height: 30px;cursor: pointer;margin-top:3px;}\n" +
	//	        ".hwx{float: left;margin-left: 24px;margin-top:4px;cursor: pointer;position: relative;}\n" +
		//        ".hwx .hsoan{position: absolute;width: 90px;height: 90px;display: none;top:33px;left:-33px;}\n" +
		//        ".hwx:hover .hsoan{display: block;}\n" +
	//	        ".mar60{margin-top:60px;}\n" +
		//        ".hlogo{margin-left: 20px;float: left;}\n" +
		//        ".hfs{float: left;margin-left:188px;margin-top:-20px;}\n" +
		//		".ckic{display:none;}" +
		//		".hright-select{width:89px;float:left;margin-top:-4px;}" +
	//			".hright-select > div{color:"+hcolor+";font-size:15px;}"+
		//		"#hchaxun{margin-top:-5px;}"+
		//		".hright-select > div >input{vertical-align:middle;}"+
		   //     "@media screen and (max-width: 768px) {\n" +
			//	".hckic{display: block;width: 0.6rem;height:0.5rem;position: absolute;z-index: 2;right: 0;top:0;background: url("+change_btn_normal+") no-repeat;background-size:cover; -webkit-background-size:cover;}" +
//				".hicon{background:url("+change_btn_selected+") no-repeat ;background-size:cover;-webkit-background-size:cover; top:0;} " +
		//        ".hhead-control{display: none}\n" +
		//		".hhead-control2{width:100%;margin-top:0}\n" +
		//        ".mar60{margin-top:0px;}\n" +
		//        ".hhead{background: url("+hbg+") no-repeat center;height: 2.1rem;background-size: cover;-webkit-background-size: cover;}\n" +
		 //       ".hlogo{margin-top:0.5rem;margin-left: 0.1rem;width: 100%}\n" +
		//        ".hlogo img{width: 3.5rem;}\n" +
		 //       ".hfs{width:1.6rem}\n" +
	//	        "}");
	//	document.writeln("</style>");
	//	document.writeln("<div class='hckic'></div>");
	//	document.writeln("<div class=\"hhead\">");
	//	document.writeln("<div class=\"hhead-control\">");
	
	//	document.writeln("<div class='hright hfr'>");
		document.writeln("<div class='hright-select'><div><input name=\"hchaxun\" type=\"radio\" checked=\'checked\' value=\"1\"  onclick=\'selt(1)\'> 门户</div>");
		document.writeln("<div><input name=\"hchaxun\" type=\"radio\" value=\"2\"  onclick=\'selt(2)\'> 政务服务</div></div>");
		document.writeln("<div class='hfl' id=\'hchaxun\'>");
		document.writeln("<div class=\"hgrob\">");
		document.writeln("<input onkeypress='goSearch2(event)' type=\"text\" class=\"hsearch hquery\" value=\"请输入关键词查询\" autocomplete=\"off\" onfocus=\"if(this.value==\'请输入关键词查询\'){this.value=\'\'}\" onblur=\"if(this.value==\'\'){this.value=\'请输入关键词查询\'}\">");
		document.writeln("<input type=\"button\" value=\'搜索\' onclick=\'goSearch()\' class=\"hsbtn\">");
		document.writeln("</div>");
	//	document.writeln("<div class=\"hwx\">");
	//	document.writeln("<a href=\' \'><img src=\"\" ></a>");
//		document.writeln("<img class=\"hsoan\" src=\"\">");
	//	document.writeln("</div>");
	//	document.writeln("<div class=\"clear\"></div>");
	//	document.writeln("</div>");
	//	document.writeln("</div>");
	//	document.writeln("<div class=\"clear\"></div>");
	//	document.writeln("</div>");
	
		document.writeln("</div>");
		
	
		
	//	document.writeln("<div class=\"nnav\">");
	//	document.writeln("<div class=\"hgrob nsearchshow\">");
	//	document.writeln("<input onkeypress='goSearch2(event)' type=\"text\" class=\"hsearch hquery\" value=\"请输入关键词查询\" autocomplete=\"off\" onfocus=\"if(this.value==\'请输入关键词查询\'){this.value=\'\'}\" onblur=\"if(this.value==\'\'){this.value=\'请输入关键词查询\'}\">");
	//	document.writeln("<input type=\"button\" value=\'搜索\' onclick=\'goSearch()\' class=\"hsbtn\">");
	//	document.writeln("</div>");
		
	//	document.writeln("</div>");
		
		
		function goSearch(){
			if(windowWidth < 768){
				var query = $(".hquery").eq(1).val();
			}else{
				var query = $(".hquery").eq(0).val();
			}
		    if(query=='请输入关键词查询' || query == ''){
		        alert('请输入您要搜索的内容!');
		    }else{
				if(webid == 34){
					window.open(goHref+encodeURI(encodeURI(query)));
				}else{
					window.open(goHref+encodeURI(query));
				}
		    }
		}
		function goSearch2(event){
			if(event.keyCode == '13'){
				goSearch();
			}
		}
		function selt(index){
			if(index == 1){
				goHref="https://www.lf.gov.cn/search.aspx?fieldOption=title&modelID=0&searchType=0&keyword=";
			}else if(index== 2){
				goHref = "http://www.hbzwfw.gov.cn/zwbjsearchfront/search.do?websiteid="+zwfwid+"&searchid=12&tpl=7&cateid=18&p=1&q=";
			}else if(index == 3){
				goHref = "";
			}
		}
	