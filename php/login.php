<?php
	//接收传递来的值
	$uuu=$_POST['uuu'];
	//echo $uuu;
	
	//声明已有的数据
	$arr=["李狗蛋","马蓉蓉","小强强","小莲莲","PGone","小璐璐"];
	//数据对比
	if(in_array($uuu,$arr)){
		//输出 y
		echo 'y';
	}else{
		echo 'n';
	}