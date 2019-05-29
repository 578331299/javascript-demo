# javascript-demo
js 面试题


重学前端笔记：

1.使用语义化标签的作用：
  1.即使没有css的时候，开发者也能够清晰地看出网页的结构。
  2.适宜机器阅读，更适合搜索引擎检索（SEO）。
2.表示与主文相关的图像：
<fingure>
  <img src="https://.....440px-NeXTcube_first_webserver.JPG"/>
  <figcaption>The NeXT Computer used by Tim Berners-Lee at CERN.</figcaption>
</fingure>
3.hr标签的语义是话题的转变
4.关于js中的类型：
  Undefined---表示未定义，是一个变量，而不是一个关键字，用void 0获取Undefined的值
  null----表示定义了，但是是空
  Bolean----true/false
  String----有最大长度限制 2^53 -1 字符串的最大长度，实际上是受字符串的编码长度影响的
  Number----NaN/Infinity无穷大/-Infinity无穷小
  Symbol----一切非字符串的对象 key 的集合
  Object---对象
5.js中的对象
  对象有唯一标示，有状态，有行为，javascript把属性和对象统一抽象为属性
  第一类属性：数据属性
   属性的值/决定属性是否被赋值/能否枚举（for in）/决定能否被删除或改变
  第二类属性：访问器属性（getter/setter）
   getter/setter/枚举/删除或改变
6.模拟基于类的面向对象
 基于类的编程语言 JAVA现有类，然后从类去实例化一个对象
 基于原型的编程语言
7.js中的对象分类：
  1.宿主对象：浏览器环境中的宿主
  2.内置对象：
      固有对象：类
      原生对象：通过本身的构造器创建的对象
      普通对象：{}
  
