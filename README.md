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

