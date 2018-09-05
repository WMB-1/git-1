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

// 选项卡里有小选项
function sanji(){
	$(function(){
		$('.nav3_main>ul>li').mouseenter(function(){
			var index=$(this).index();
			$('.nav3_main>ul>li>div').eq(index).show().siblings('div').hide();
		}).mouseleave(function(){
			$('.nav3_main>ul>li>div').hide();
		})
	})
}
sanji();

// 选项卡
function lili(){
	$(function(){
		$('.nav3_1_a').mouseenter(function(){
			$('.nav3_main').show();
		}).mouseleave(function(){
			$('.nav3_main').hide();
		})
	})
}
lili();

// 放大镜
function fangdajing(){
	$(function(){
		//samll的move事件
		$('#small').mousemove(function(e){
			//move big显示
			$('#move,#big').show();
			//move的坐标=鼠标位置-small的偏移值-move的宽高一半
			var x=e.pageX-$(this).offset().left-($('#move').width()/2);
			var y=e.pageY-$(this).offset().top-($('#move').height()/2);
			//console.log(x,y);
			
			//判断边界
			if(x<=0){
				x=0
			}else if(x>=$('#small').width()-$('#move').width()){
				x=$('#small').width()-$('#move').width();
			}
			
			if(y<=0){
				y=0;
			}else if(y>=$('#small').height()-$('#move').height()){
				y=$('#small').height()-$('#move').height();
			}
			//move绑定坐标
			$('#move').css({left:x,top:y});
			//大图显示移动距离
			//大小图片比例
			var scale=$('#big>img').width()/$('#small>img').width();
			//console.log(scale);
			
			//设置big的移动距离
			$('#big').scrollLeft(x*scale);
			$('#big').scrollTop(y*scale);
			//big大图=samll图 src
			$('#big>img').attr('src',$('#small>img').attr('src'));
		}).mouseout(function(){
			//隐藏
			$('#move,#big').hide();
		})
		//点击toggle li 更换图片
		$('#toggle>li>img').click(function(){
			$('#small>img').attr('src',$(this).attr('src'));
		})
		
	
	})
}
fangdajing();

// 缩放
function soufang(){
	$(function(){
	
		//声明图片数组
		var imgUrls=['url(imgs/1.jpg)','url(imgs/2.jpg)','url(imgs/3.jpg)','url(imgs/4.jpg)']
		var index=0;
		//声明显示第一张图片
		function autoRun(){
			//真的 显示第一行图片
			$('#truePic').css('background-image',imgUrls[index]);
			
			//清空 falsePic
			$('#falsePic').html('');
			
			//设置假30张组成falsePic 3行10列
			var sW=$('#show').width();
			var sH=$('#show').height();
			//声明行列变量
			var row=10;
			var col=3;
			//单个div的宽高
			var dW=sW/row;
			var dH=sH/col;
			// console.log(dW,dH);
			
			//图片大 
			var lll=(sW-1920)/2;
			// console.log(lll);
			
			//循环添加div 3行10列
			for(var i=0;i<col;i++){
				for(var j=0;j<row;j++){
					//创建节点
					var newDiv=$('<div class="false"></div>');
					//设置样式
					newDiv.css({
						width:dW,
						height:dH,
						background:'red',
						//设置偏移值
						left:j*dW,
						top:i*dH,
						//div的背景与第一张相同
						backgroundImage:imgUrls[index],
						//设置每一个div背景偏移
						"background-position-x":lll- j*dW+'px',
						"background-position-y":- i*dH+'px',
					
					
					})
					
					//falsePic 添加节点
					$('#falsePic').append(newDiv);
				}			
			}
			
			//index自增
			index++;
			if(index>=imgUrls.length){
				index=0;
			}
			//重新赋值
			$('#truePic').css('background-image',imgUrls[index]);
		}
		//调用函数
		autoRun();
	
		
		setInterval(function(){
			autoRun();
			
		},3000)
	
	
	})
}
soufang();

//先获取节点
	var mian=document.getElementById('mian_tu1');
	var uls=mian.getElementsByTagName('ul');
	console.log(uls);
	
	//li的个数
	var num=1;
	//创建li节点函数
	function createLi(ul,num){
		//创建元素节点
		var li=document.createElement('li');
		//li设置随机高度 
		li.style.height=rand()+'px';
		//li设置显示的张数
		li.innerHTML=num;
		//li设置背景图片 随机图片
		li.style.backgroundImage='url(ims/'+bg()+'.jpg)';
		li.style.backgroundSize='100% 100%';
		//console.log(li);
		//将li添加到ul中
		ul.appendChild(li);
		
	}
	//调用函数
	//createLi(uls[0],num);
	
	//li的随机高度函数
	function rand(){
		return Math.floor(Math.random()*300)+100;
	}
	//li的随机图片
	function bg(){
		return Math.floor(Math.random()*20)+1;
	}

	//遍历uls添加li节点 然后找到最短的ul 继续添加li
	function state(){

		for(var i=0;i<30;i++){
			//在uls中找到最短的ul的高
			var ArrHeight=[uls[0].offsetHeight,uls[1].offsetHeight,uls[2].offsetHeight,uls[3].offsetHeight,uls[4].offsetHeight];
			//console.log(ArrHeight);
			
			//找到最短的uls的下标 然后继续添加li节点
			var index=mini(ArrHeight);
			console.log(index);
			
			//遍历添加li节点
			//createLi(uls[i],num++);
			//调用li函数 给最短ul添加li
			createLi(uls[index],num++);
		}
	}
	//调用函数 初始张数
	state();
	
	//声明最短ul的函数 返回下标
	function mini(arr){
		//数组中任意一个
		var mh=arr[0]; 
		//遍历判断
		for(var i=0;i<arr.length;i++){
			//找到数组中最短的
			if(arr[i]<mh){
				mh=arr[i];
			}
		}
		//反回的是下标
		return  arr.indexOf(mh);
	}
	
	
	//滚动条监听事件
	window.onscroll=function(){
		//判断滚动条到底部
		//html高度-可视区域的高度==滚动的距离
		//html总的高度
		var dh=document.documentElement.offsetHeight;
		console.log(dh)
		//获取可视区域高度
		var ch=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
		console.log(ch);
		//获取滚动的距离
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		console.log(st);
		
		//判断到底
		if(dh-ch==st){
			//调用函数
			state();
		}
	}