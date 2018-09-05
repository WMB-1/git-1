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

// 选项卡
function xuan(){
	$(function(){
		$('.nav2_you>li').mouseenter(function(){
			var index=$(this).index();
			$('.nav2_you>li>div').eq(index).show().siblings().hide();
		}).mouseleave(function(){
			$('.nav2_you>li>div').hide();
		})
	})


}
xuan();

function zongjia(){
	$(function(){
		$('.nav5_zong').mouseenter(function(){
			$('.nav5_1main').show();
		}).mouseleave(function(){
			$('.nav5_1main').hide();
		})
	})

}
zongjia();
// 小选项卡

function suozaidi(){
	$(function(){
		$('.nav5_3').mouseenter(function(){
			$('.nav5_3').css('background','#fff');
			$('.nav5_3_1').show();
			$('.nav5_3_1 ul li').click(function(){
				var index=$(this).index();
				$('.nav5_3>p').eq(index).hide().siblings('li').show();
			})
		}).mouseleave(function(){
			$('.nav5_3').css('background','');
			$('.nav5_3_1').hide();
		})
	})
}

suozaidi();

function zhaobutong(){
	$(function(){
		$('#main ul li').mouseenter(function(){
			var index=$(this).index();
			$('.main_1').eq(index).show().siblings('div').hide();
		}).mouseleave(function(){
			$('.main_1').hide();
		})
	})
}
zhaobutong();