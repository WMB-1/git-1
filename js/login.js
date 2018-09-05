function btn(){
		var uname=username_1.value;
		//alert(uname)
		console.log(uname);
		//发送 获取信息
		Ajax().post('php/login.php','uuu='+uname,function(msg){
			//console.log(msg);	
			if(msg=='y'){
				//表示以注册
				alert('登录成功');
			}else{
				//表示可以注册
				alert(2);
			}
		});

}
  
