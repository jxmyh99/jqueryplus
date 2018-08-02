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


## 回调
brandClick,systemClick,success都有一个回调参数
此参数内容 为下

  {
    brandVal:'',//选中的品牌文字
    brandCid:'',//选中的品牌id
    systemVal:'',//选中的车系文字
    systemCid:'',//选中的车系id
    modelVal:'',//选中的车型的文字
    modelCid:''//选中的车型的id
  }
````

var brand = $('body').brand({
  level:'3',//选择的层级
  brandId:'id',//绑定在品牌选择上的data-cid上的属性
  brandName:'name',//品牌的文字显示
  brandClick:function(val){
    cosnole.log(JSON.stringify(val));//返回的数据
    $.ajax({
        url: 'url?bid='+val.brandCid,
        type: 'GET',
        dataType: 'jsonp'
      })
      .done(function(data) {
        <!-- 写入到车系选择 -->
        brand.systemShow(data.Message)
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
  },
  systemName:'name',//绑定在车系选择上的data-cid上的属性
  systemId:'id',//绑定在车系文字显示
  systemClick:function(val){
    console.log(JSON.stringify(val));//返回的数据
    $.ajax({
      url: 'url?mid='+val.systemCid,
      type: 'GET',
      dataType: 'jsonp'
    })
    .done(function(data) {
      <!-- 写入到车型选择 -->
      brand.modelShow(data.Message);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  },
  modelName:'name',//绑定在车型文字显示
  modelId:'id',//绑定在车型选择上的data-cid上的属性
  success:function(val){
    console.log(JSON.stringify(val))
  }
})


````

## 参数列表

|   参数   |    说明    |   默认值    |   可填值    |
|---------|------------|------------|------------|
|  level  |可以选择的等级|3|String and  Number|
|json|车辆品牌的json数据|json数据|Object|
|brandName|车辆品牌的文字对象|name|Object|
|brandId|车辆品牌的Cid|id|Object|
|brandClick|车辆品牌的选择回调事件|空|Functiion|
|systemName|车辆车系的文字对象|name|Object|
|systemId|车辆车系的Cid|id|Object|
|systemClick|车辆车系点击后的回调事件|空|Function|
|modelName|车辆车型的文字对象|name|Object|
|modelId|车辆车型的Cid|id|Object|
|modelClick|车辆车型点击后的回调事件|空|Function|

## API

暴露一些功能，可以让brand更灵活的使用

`show` 显示brand
`hide` 隐藏brand
`systemShow` 显示brand的车系
`systemHide` 隐藏brand的车系
`modelShow` 显示brand的车型
`modelHide` 隐藏brand的车型
