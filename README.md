# class01
## 第一课koa2环境搭建
### 第一章 package.json 安装

    命令：
      1. npm安装package.json时  直接转到当前项目目录下用命令npm install 或npm install --save-dev安装即可，自动将package.json中的模块安装到node-modules文件夹下
      2. package.json 中添加中文注释会编译出错
      3. 每个项目的根目录下面，一般都有一个package.json文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。npm install 命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。
      4. package.json文件可以手工编写，也可以使用npm init命令自动生成。

   ![](https://i.imgur.com/eyQtpBk.png)

   package:

	{
	  "name": "pro_koa",
	  "version": "1.0.0",
	  "description": "koa2",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "repository": {
	    "type": "git",
	    "url": "git+https://github.com/sutootototo2002/pro_koa.git"
	  },
	  "author": "",
	  "license": "ISC",
	  "bugs": {
	    "url": "https://github.com/sutootototo2002/pro_koa/issues"
	  },
	  "homepage": "https://github.com/sutootototo2002/pro_koa#readme"
	}

### 第一章 koa2 环境开发
	
	$ nvm install 7
	$ npm i koa
	$ node my-koa-app.js

   app.js

    const Koa = require('koa');
	const app = new Koa();
	app.use(async ctx => {
	  ctx.body = 'Hello World';
	});
	
	app.listen(3000);

### 第二章 es6 复习

#### 一、es6基本语法
    1、let 是块级作用域
    2、const 是常量
    3、方法的简写、属性的简写
    4、箭头函数
    5、回调函数
    6、promise处理异步

	if(true){
	    let a = 123;
	}
	console.log(a); //报错，只能在作用域内有效

    var name = 'suxiaoyan';
	var package = {
	    name, //属性
		run(){ //方法简写
		        console.log(`${this.name}正在跑步！`);
		    }
	}
    console.log(package.name); //suxiaoyan

    //箭头函数
	setTimeout(() => {
	    //this 指向上下文
	}, 2000);

    //回调函数
	function getData(callback){
	    setTimeout(function(){
	        var name = '张三';
	        callback(name);
	    }, 1000);
	}
	
	getData(function(data){
	    console.log(data+'1111')
	});

    //promise
    
	var p = new Promise(function(resolve,reject){
	    setTimeout(function(){
	        var name = '张三';
	        if(Math.random()<0.7){
	            resolve(name);
	        }else{
	            reject('失败');
	        }
	    }, 1000);
	})
	
	p.then((data)=>{
	    console.log(data);
	})


    //写法二
	function data1(resolve,reject){
	    setTimeout(function(){
	        var name = '苏晓燕';
	        if(Math.random()<0.7){
	            resolve(name);
	        }else{
	            reject('失败');
	        }
	    }, 1000);
	}
	
	var p1 = new Promise(data1);
	
	p1.then((data)=>{
	    console.log(data);
	})






