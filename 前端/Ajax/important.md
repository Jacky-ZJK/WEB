## 注意

+ `post`请求中需要说明`Content-Type`的类型，否则服务器默认以`text`类型解读数据

+ 为了避免中文或者`&`等特殊字符出现，可能导致数据不完整，所以需要经过`encodeURIComponent`进行`url`编码