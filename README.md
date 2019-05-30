## 重学前端笔记
###1.使用语义化标签的作用：
- 1.即使没有css的时候，开发者也能够清晰地看出网页的结构。
- 2.适宜机器阅读，更适合搜索引擎检索（SEO）。
### 2.表示与主文相关的图像：
	<fingure>
	  <img src="https://.....440px-NeXTcube_first_webserver.JPG"/>
	  <figcaption>The NeXT Computer used by Tim Berners-Lee at CERN.</figcaption>
	</fingure>
###4.关于js中的类型：
  - Undefined---表示未定义，是一个变量，而不是一个关键字，用void 0获取Undefined的值
  - null----表示定义了，但是是空
  - Bolean----true/false
  - String----有最大长度限制 2^53 -1 字符串的最大长度，实际上是受字符串的编码长度影响的
  - Number----NaN/Infinity无穷大/-Infinity无穷小
  - Symbol----一切非字符串的对象 key 的集合
  - Object---对象
### 5.js中的对象
  	对象有唯一标示，有状态，有行为，javascript把属性和对象统一抽象为属性
  - 第一类属性：数据属性
   	属性的值/决定属性是否被赋值/能否枚举（for in）/决定能否被删除或改变
  - 第二类属性：访问器属性（getter/setter）
   getter/setter/枚举/删除或改变
### 6.模拟基于类的面向对象
    基于类的编程语言 JAVA现有类，然后从类去实例化一个对象
    基于原型的编程语言
### 7.js中的对象分类：
  - 1.宿主对象：浏览器环境中的宿主
  - 2.内置对象：
      固有对象：类
      原生对象：通过本身的构造器创建的对象
      普通对象：{}
### 8.http请求
  - 1.request
  
		POST / HTTP1.1 -------------------------------------请求行
		Host:www.wrox.com
		User-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)
		Content-Type:application/x-www-form-urlencoded
		Content-Length:40
		Connection: Keep-Alive------------------------------请求头部
                      ------------------------------空行
		name=Professional%20Ajax&publisher=Wiley-----------请求数据
  - 2.response
  
    	HTTP/1.1 200 OK-----------------------------------状态行(HTTP协议版本号， 状态码， 状态消息)
    	Date: Fri, 22 May 2009 06:07:21 GMT
    	Content-Type: text/html; charset=UTF-8-------------消息报头
                                          -------------空行
    	<html>
          <head></head>
          <body>
                <!--body goes here-->
          </body>
    	</html>---------------------------------------------正文
  - 3.请求的状态码：
  
    	1xx  指示信息--表示请求已接收，继续处理
    	2xx  成功--表示请求已被成功接收、理解、接受
    	3xx  重定向--要完成请求必须进行更进一步的操作
    	4xx  客户端错误--请求有语法错误或请求无法实现
    	5xx  服务器端错误--服务器未能实现合法的请求
  - 4.请求方法
  
    	GET-------(查)
    	PUT-------从客户端向服务器传送的数据取代指定的文档的内容(增)
    	POST------导致新的资源的建立和/或已有资源的修改(改)
    	OPTIONS----允许客户端查看服务器的性能
    	HEAD-----用于获取报头
    	DELETE----(删)
    	TRACE-----测试或诊断
    	CONNECT----将连接改为管道方式的代理服务器
  
