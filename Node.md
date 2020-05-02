# 2020/04/20

#### [单点登录（SSO）](https://yq.aliyun.com/articles/636281)

+ 在多个应用系统中，只需要登录一次，就可以访问其他相互信任的应用系统。

#### restful

#### encodeURIComponent

#### js转换成机器语言

#### Centos 7 安装完成后需要手动启动网卡设备

+ 修改`/etc/sysconfig/network-scripts/ifcfg-ens33`中`ONBOOT=yes`

# 2020/04/21

#### Linux 系统中的软链接与硬连接

# 2020/04/22

#### [处理器的二级调度](https://blog.csdn.net/HaoDaWang/article/details/78596312)

+ 先被作业调度选中才有机会去竞争处理器，并且仅当被进程调度选中时才能占用处理器。

#### 排序算法

| 算法 |时间复杂度 | 稳定性 |
| :---: | :---: | :---: |
|冒泡排序|O(n^2)|稳定|
|选择排序|O(n^2)|不稳定|
|插入排序|O(n^2)|稳定|
|希尔排序|O(n·log(n))|不稳定|
|归并排序|O(n·log(n))|稳定|
|堆排序|O(n·log(n))|不稳定|
|快速排序|O(n·log(n))|不稳定|

#### [jQuery中live,bind,on,delegate的区别](https://www.jb51.net/article/120018.htm)

+ `.bind()`方法浪费性能,因为它把同一个事件处理函数附加到了每一个匹配的元素上

+ `.live()`方法将与事件处理函数关联的选择器和事件信息一起附加到文档的根级元素（即document）

+ `.delegate()`方法会给你带来很多好处当你需要解决一些性能上的问题和对动态添加的元素作出处理

+ `.on()`方法其实就是模拟.bind() ， .live() 和.delegate()实现的语法糖，具体取决于你如何调用它

#### cookie、session、sessionStorage、localStorage区别

+ [cookies、sessionStorage和localStorage解释及区别](https://www.cnblogs.com/pengc/p/8714475.html)

# 2020/04/26

#### 数据库连接池

#### http 长连接

# 2020/05/01

#### WebSocket

+ Client: new Websocket('url') /// socket.onopen /// socket.onmessage /// socket.onclose //// socket.send

+ Server: require('net', sock=>{}) /// sock.once(连接) /// sock.on(data) /// sock.on(end) 

  - 101 Switch Protocols // sha1(key + mask) // Upgrade: websocket // Connection: Upgrade // Sec-WebSocket-Accept: key\r\n\r\n

#### 正则表达式

+ 正则方法: // test() // exec()

+ 字符串方法: // match() // replace() // split() // search()