//标题栏
//左边 
function zhongguo(){
	$(function(){
		$('#header_nav1_1').mouseover(function(){
			$('.header_nav1_active').show();
			$('#header_nav1_1').css({background:"#fff"});
		})
		$('header_nav1 p').click(function(){
			$('.header_nav1_active p').siblings().removeClass('active');
			$(this).addClass('active');
			$('#header_nav1_1,span').text($(this).text());
		})
		
		$('#header_nav1_1').mouseout(function(){
			$('.header_nav1_active').hide();
			$('#header_nav1_1,span').css({background:""})
		})
	})
}
zhongguo();
//右边
function wodetaobao(){
	$(function(){
		$('#header_nav2_1').mouseover(function(){
			$('.header_nav2_act1').show();
			$('#header_nav2_1').css({background:"#fff"});
		})
		$('#header_nav2_1').mouseout(function(){
			$('.header_nav2_act1').hide();
			$('#header_nav2_1').css({background:""})
		})
	})
}
wodetaobao();

function shoucang(){
	$(function(){
		$('#header_nav2_2').mouseover(function(){
			$('.header_nav2_act2').show();
			$('#header_nav2_2').css({background:"#fff"})
		})
		$('#header_nav2_2').mouseout(function(){
			$('.header_nav2_act2').hide();
			$('#header_nav2_2').css({background:""})
		})
	})
}
shoucang();

function maijia(){
	$(function(){
		$('#header_nav2_3').mouseover(function(){
			$('.header_nav2_act3').show();
			$('#header_nav2_3').css({background:"#fff"})
		})
		$('#header_nav2_3').mouseout(function(){
			$('.header_nav2_act3').hide();
			$('#header_nav2_3').css({background:""})
		})
	})
}
maijia();

function kefu(){
	$(function(){
		$('#header_nav2_4').mouseover(function(){
			$('.header_nav2_act4').show();
			$('#header_nav2_4').css({background:"#fff"})
		})
		$('#header_nav2_4').mouseout(function(){
			$('.header_nav2_act4').hide();
			$('#header_nav2_4').css({background:""})
		})
	})
}
kefu();

function daohang(){
	$(function(){
		$('#header_nav2_5').mouseover(function(){
			$('.header_nav2_act5').show();
			$('#header_nav2_5').css({background:"#fff"})
		})
		$('#header_nav2_5').mouseout(function(){
			$('.header_nav2_act5').hide();
			$('#header_nav2_5').css({background:""})
		})
	})
}
daohang();

// 遮罩
function zhezhao(){
	$(function(){
		
		//a标签的点击事件
		$('.main_bth').eq(0).click(function(){
			$('.bar').css({width:$(window).width(),height:$(window).height()});
			$('.bar').show();
			$('.show').show();
		})
	
		//小叉叉的点击隐藏
		$('.show p').eq(0).click(function(){
			$('.bar').fadeOut();
			$('.show').fadeOut();
		})
		
		//show的拖拽
		$('.show').mousedown(function(e){
			//添加鼠标箭头
			$(this).css('cursor','move');
			//获取鼠标与show不变的距离
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;
			console.log(x,y);
			
			//文档的移动事件
			$(window).mousemove(function(ev){
				//获取移动的距离=当前鼠标坐标-与show不变的距离
				var ll=ev.pageX-x;
				var tt=ev.pageY-y;
				console.log(ll,tt);
				
				//判断边界
				if(ll<=0){
					ll=0
				}else if(ll>=$(window).width()-$('.show').width()){
					ll=$(window).width()-$('.show').width()
				}
				
				if(tt<=0){
					tt=0
				}else if(tt>=$(window).height()-$('.show').height()){
					tt=$(window).height()-$('.show').height()
				}	
				
				//show left top 赋值
				$('.show').css({left:ll,top:tt});
			
			})
	
		
		})
		
		//取消拖拽
		$(window).mouseup(function(){
			//取消鼠标箭头
			$('.show').css('cursor','');
			$(this).off('mousemove');
		})
	
	})


}
zhezhao();


// 正则匹配
$(function(){
      var pattern=/^1(([358]\d)|(47)|(66)|(7[013678]))\d{8}$/; 
  
  //获取节点
  var zczh=document.getElementById('zczh');
  var zhyz=document.getElementById('zhyz');
  //num的失去焦点事件
  zczh.onblur=function(){
    //获取用户输入的值
    var v=this.value;
    //alert(v)
    console.log(v);
    //test() 方法
    if(pattern.test(v)){
      //显示正确
      zhyz.innerHTML='该账户可以使用！'
    }else{
      //显示不正确
      zhyz.innerHTML='该账户已被注册！'
    }
  }
  
  
  
  //匹配身份证号码
  var szmm=document.getElementById('szmm');
  var mmyz=document.getElementById('mmyz');
  
  /*
    分析：
    370831 19881012 1957
    月份：1-12 01-09 10-12 
    日期：
  */
  //声明正则
  var pp=/^[a-zA-Z0-9]{4,10}$/; 
  
  //失去焦点
  szmm.onblur=function(){
    //获取用户输入的值
    var v=this.value;
    //alert(v)
    
    //test() 方法
    if(pp.test(v)){
      //显示正确
      mmyz.innerHTML='密码格式正确'
    }else{
      //显示不正确
      mmyz.innerHTML='密码格式不正确'
    }
  }
})