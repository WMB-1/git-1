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
//搜索框选项
function baobei(){
	$(function(){
		$('.search_main_1 li').click(function(){
			$('.search_main_1a').attr({color:"",background:""});

			var index=$(this).index();
			$('.search_main_1 li').eq(index).css({background:"#ff5b00",color:"#fff"}).siblings().css({color:"",background:""});
			$('.search_main>ul').eq(index).show().siblings('ul').hide();
		})
	})
}
baobei();

//手机淘宝二维码
function shouji(){
	$(function(){
		$('.search_right p').click(function(){
		$('.search_right').css("display","none");
		})
	})
}
shouji();
//左侧选项卡
function zuoxuanka(){
	$(function(){
		$('.main_nav>li').mouseenter(function(){
			var index=$(this).index();
			$('.main_nav>li>div').eq(index).show().siblings().hide();
		}).mouseleave(function(){
			$('.main_nav>li>div').hide();
		})
	})
}
zuoxuanka();
// 主轮播图
function zhulun(){
	$(function(){
		var m=0;
		var timer=null;
		function run(){
			timer=setInterval(function(){
				m++;
				if(m>4){
					m=0;
				}
				$('.main_nav2_img li').eq(m).addClass('show').siblings('li').removeClass('show')
				$('.main_nav2_yuan>li').eq(m).addClass('on').siblings('li').removeClass('on')
			},2000)
		}
		run();
		$('.main_nav2').mouseenter(function(){
			clearInterval(timer);
			$('.main_nav2_lr').show();
			 $('.main_nav2_yuan>li').click(function(){
			 	m=$(this).index();
			 	$('.main_nav2_img li').eq(m).addClass('show').siblings('li').removeClass('show');
			 	$('.main_nav2_yuan>li').eq(m).addClass("on").siblings('li').removeClass("on");

			 });
		}).mouseleave(function(){
			run();
			$('.main_nav2_lr').hide();
		})
			
		$('.main_nav2_lr .right').click(function(){
			m++;
			if(m>4){
				m=0;
			}
			$('.main_nav2_img li').eq(m).addClass('show').siblings('li').removeClass('show');
		 	$('.main_nav2_yuan>li').eq(m).addClass('on').siblings('li').removeClass('on');
		})

		$('.main_nav2_lr .left').click(function(){
			m--;
			if(m<0){
				m=4;
			}
			$('.main_nav2_img li').eq(m).addClass('show').siblings('li').removeClass('show');
		 	$('.main_nav2_yuan>li').eq(m).addClass('on').siblings('li').removeClass('on');
		})

	})
}zhulun();
// 小轮播图
function xiaolun(){
	$(function(){
		var m=0;
		function run(){
			timer=setInterval(function(){
				m++;
				if(m>5){
					m=0;
				}
				$('.img1 li').eq(m).addClass('show1').siblings('li').removeClass('show1')
				$('.main_nav3_2 li').eq(m).addClass('on1').siblings('li').removeClass('on1')
				$('.img_shu li').eq(m).addClass('show_shu').siblings('li').removeClass('show_shu')
			},2000)
		}
		run();
		$('.main_nav3_lun').mouseenter(function(){
			clearInterval(timer);
			$('.main_nav3_lr').show();
			$('.main_nav3_lr').mouseenter(function(){
				clearInterval(timer);
				$('.main_nav3_lr').show();
			})

		}).mouseleave(function(){
			run();
			$('.main_nav3_lr').hide();
		})

		$('.main_nav3_lr .right1').click(function(){
			m++;
			if(m>5){
				m=0;
			}
			$('.img1 li').eq(m).addClass('show1').siblings('li').removeClass('show1');
			$('.main_nav3_2 li').eq(m).addClass('on1').siblings('li').removeClass('on1');
			$('.img_shu li').eq(m).addClass('show_shu').siblings('li').removeClass('show_shu');
			
		})

		$('.main_nav3_lr .left1').click(function(){
			m--;
			if(m<0){
				m=5;
			}
			$('.img1 li').eq(m).addClass('show1').siblings('li').removeClass('show1');
			$('.main_nav3_2 li').eq(m).addClass('on1').siblings('li').removeClass('on1');
			$('.img_shu li').eq(m).addClass('show_shu').siblings('li').removeClass('show_shu');
		})
	})
}
xiaolun();
// 右边选项卡
function xiaoka(){
	$(function(){
		$('.main_nav6_3_tab ul li').mouseenter(function(){
			$(this).addClass('sele').siblings().removeClass('sele');
			var index=$(this).index();
			$('.cont_one>div').eq(index).show().siblings().hide();
		})
	})	
		
}
xiaoka();

// 右下选项卡
function huafei(){
	$(function(){
		$('.main_nav6_4>ul>li').mouseenter(function(){
			var index=$(this).index();
			$('.main_nav6_4>ul>li>div').eq(index).show().siblings().hide();
			$('.main_nav6_4>ul>li>a').show();
		}).mouseleave(function(){
			$('.aa_1x').click(function(){
				$('.main_nav6_4>ul>li>div').hide();
			})
			$('.main_nav6_4>ul>li>div').hide();
		})
	})

}
huafei();




// 一组二维码显示
function yizu(){
	$(function(){
		$('.main_you_1 li').mouseenter(function(){
			var index=$(this).index();
			$('.main_you_1 li div').eq(index).show().siblings('div').hide();
		}).mouseleave(function(){
			$('.main_you_1 li div').hide();
		})
	})

}
yizu();

// 选项卡里的选项卡
function chongzhi(){
	$(function(){
		$('.aa_1_1 ul li').mouseenter(function(){
			$(this).addClass('selected2').siblings().removeClass('selected2');
			var index=$(this).index();
			$('.aa_1_2>div').eq(index).show().siblings().hide();
		})
	})
}
chongzhi();
// 小图标二维码
function xiaotubiao(){
	$(function(){
		$('.main2_zuo_tou>a').mouseenter(function(){
			$('.main2_zuo_tou_1').show();
		}).mouseleave(function(){
			$('.main2_zuo_tou_1').hide();
		})
	})
}
xiaotubiao();
// 倒计时
function uu(){
    setInterval(function(){
		var d1=new Date();
		var d2=new Date('2018/6/25');
		var cha=d2.getTime()-d1.getTime();
		
		var hour=Math.floor(cha/(1000*60*60))
		cha%=1000*60*60;
		
		var minute=Math.floor(cha/(1000*60))
		cha%=1000*60;

		var second=Math.floor(cha/(1000))

		var box=document.getElementsByClassName('mm11')[0];
		var box1=document.getElementsByClassName('mm12')[0];
		var box2=document.getElementsByClassName('mm13')[0];
		//console.log(box);
		if(second<10){
            box2.innerHTML='0'+second;
        }else{
            box2.innerHTML=second;
        }
        
        if(minute<10){
            box1.innerHTML='0'+minute;
        }else{
            box1.innerHTML=minute;
        }
        if(hour<10){
            box.innerHTML='0'+hour;
        }else{
            box.innerHTML=hour;
        }

	},1000)

}uu();

function zhaoxiangsi(){
	$(function(){
		$('#main8 ul li').mouseenter(function(){
			var index=$(this).index();
			$('.main8_tive').eq(index).show().siblings('div').hide();
		}).mouseleave(function(){
			$('.main8_tive').hide();
		})
	})
}
zhaoxiangsi();
// 滚动显示
function tianmao(){
	$(function(){
		$('.gundong_zh_zuo').mouseenter(function(){
			$('.tianmao').show();
		}).mouseleave(function(){
			$('.tianmao').hide();
		})
	})
}
tianmao();
// 滚动事件
function gungun(){
	$(function(){
		var a = $('#header').height() + $('#nav').height() + $('#search').height();
		 y=0;
		$(document).scroll(function(){
			y = $(document).scrollTop();
			if(y>a){
				$('#gundong').show();
			}else{
				$('#gundong').hide();
			}
		})
	})
}
gungun();

// 楼层滚动
function luoceng(){
	$(function(){
		$('#lc ul li').click(function(){
			var index=$(this).index();
			console.log($('.floor').eq(index).offset().top);
			var top=$('.floor').eq(index).offset().top;
			$('html').animate({scrollTop:top},500);
		})
		$('#lc ul li').mouseenter(function(){
			$(this).css({background:"#fe6100",color:"#fff",fontWeight:"bold"});
		}).mouseleave(function(){
			$(this).css({background:"",color:"",fontWeight:""});
		})
		var  heights=[];
		$('.floor').each(function(){
			heights.push($(this).offset().top);
		})
		console.log(heights);

		$(window).scroll(function(){
			var top=$(window).scrollTop();
			console.log(top);

			var index;
		for(var i=0;i<heights.length;i++){
			if(top>=heights[i] && top<heights[i+1]){
				index=i;

				$('#lc ul li').eq(index).css({background:"#fe6100",color:"#fff",fontWeight:"bold"}).siblings().css({background:"",color:""})
			}else if(top>=heights[heights.length-1]){
				index=heights.length-1;
				$('#lc ul li').eq(index).css({background:"#fe6100",color:"#fff",fontWeight:"bold"}).siblings().css({background:"",color:""})
				}
			}
		})
	})
}
luoceng();