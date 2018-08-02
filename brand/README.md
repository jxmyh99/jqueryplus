## 汽车品牌、车系、车型多级选择
在业务工作中，需要调用洗车的品牌、车系和车型的三级选择功能，故封装，以便后期使用

## 最新版本

### 0.0.1
* 添加基础代码



## 依赖

Zepto 或者 jQuery 1.7以上版本，推荐jQuery 2.x版本（二者不要同时引用）


## 使用方法

引用css和js
<br />

    <link rel="stylesheet" href="../dist/brand.css">
    <script src="../dist/brand.min.js"></scritp>

````

$('body').brand({
  level:1,
  success:function(val){
    console.log(val)
  }
})


````

## 参数列表

|   参数   |    说明    |   默认值    |   可填值    |
|---------|------------|------------|------------|
|  level  |可以选择的等级|3|String and  Number|
