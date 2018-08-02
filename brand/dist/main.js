/*
 * @Author: 明月寒
 * @Date:   2017-01-11 15:33:43
 * @github: http://www.github.com/jxmyh99
 * @email:  email@example.com
 * @blog:  http://www.33u3.com
 * @Last Modified by:   huangxinmin
 * @Last Modified time: 2018-07-23 14:36:46
 */
// @import 'public/changeHtml.js'
var globalTouch = {};
var lContPos = {};
$(function() {
  "use strict";
  // 显示品牌选择
  $('button').click(function(){
    $(".brand_list").show();
  })

  $("body").brand();


  var tree = {};
  // 获取字母表并且写入对象
  $('.brand_list__letter ol').children('li').each(function() {
    var me = $(this);
    if (me.data('key') != '#') {
      tree[me.data('key')] = '';
    }
  });
  console.log(tree)
  // 获取车辆品牌
  $.ajax({
      url: 'http://10.10.1.110:3000/mock/22/getBrand',
      type: 'GET',
      data: '',
    })
    .done(function(data) {
      var listTree = data.result.data.tree;
      var html = '';
      // 写入到dom内
      for (var i in listTree) {
        html += '<li class="brand_group__title" data-key="' + i + '">' + i + '</li>';
        var itm = listTree[i];
        for (var j in itm) {
          html += '<li class="brand_group__item" data-cid="'+itm[j].cid+'" >' + itm[j].cname + '</li>';
        }
      }
      // 写入
      $(".brand_list__group ul").html(html);
      // 延时获取品牌选择的每个字母的top
      setTimeout(function() {
        for (var i in tree) {
          lContPos[i] = $('.brand_list__group .brand_group__title[data-key=' + i + ']').offset().top - 40;
        }
        // 给每个品牌绑定方法
        $(".brand_list__letter ol").on('touchstart', bindTouchEvents)
          .on('touchmove', bindTouchEvents)
          .on('touchend', bindTouchEvents);
      }, 2000)
      // 触发车系
      $('body').on('click','.brand_list__group li.brand_group__item',function(){
        $(".card_system").show().find('.brand_pop__wrap').removeClass('out').addClass('in');
        $(".card_system .brand_pop__title span").text($(this).text());
        // 获取车系
        getCardSystem($(this).data('cid'))
      })

      // 关闭车系和车型
      $('body').on('click','.brand_pop .brand_pop__close,.brand_pop .brand_pop__bg',function(){
        var $this = $(this);
        $(this).parents('.brand_pop').find('.brand_pop__wrap').removeClass('in').addClass('out')
        setTimeout(function(){
          $this.parents('.brand_pop').hide();
        },260)
      })
      // 关闭车辆品牌选择
      $("body").on('click','.brand_list .brand_pop__close',function(){
        $(".brand_list").hide();
      })
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });



});
/**
 * 用于touch事件的回调
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
function bindTouchEvents(e) {
  e.preventDefault();
  e.stopPropagation();
  var letsilderheight = parseInt($('.brand_list__letter ol li').eq(0).css('height'));
  var letWrapHeight = $(".brand_list__letter").height();

  if (e.originalEvent.touches.length <= 1) {
    switch (e.type) {
      case 'touchstart':
        globalTouch.y = e.originalEvent.touches[0].clientY;
        globalTouch.dy = 0;
        globalTouch.index = $(e.target).data('index');
        var dataKey = $(e.target).data('key');
        $('.brand_alert').show().children('span').text(dataKey);
        $('.brand_list__main').scrollTop(lContPos[dataKey]);
        break;
      case 'touchmove':
        var dataKey = $('.brand_list__letter li').eq(globalTouch.dindex).text();
        globalTouch.dy = e.originalEvent.touches[0].clientY - globalTouch.y;
        globalTouch.dindex = globalTouch.dy > 0 ? Math.floor(globalTouch.dy / letsilderheight) + globalTouch.index : Math.ceil(globalTouch.dy / letsilderheight) + globalTouch.index;
        // 解决滑动到外面
        if(globalTouch.dindex > $('.brand_list__letter li').length-1 || globalTouch.dindex < 0){
          $('.brand_alert').hide();
          return;
        }
        if (Math.abs(globalTouch.dy) >= letsilderheight) {
          
          $('.brand_alert').show().children('span').text(dataKey);
          $('.brand_list__main').scrollTop(lContPos[dataKey]);
        }
        
        break;
      case 'touchend':
        setTimeout(function() {
          $('.brand_alert').hide();
        }, 300);
        break;
    }
  }
}

/**
 * 获取车系
 * 
 */

function getCardSystem(cid){
  $.ajax({
    url: 'http://10.10.1.110:3000/mock/22/getSystem?cid='+cid,
  })
  .done(function(data) {
    var result = data.result.data.data_list.data;
    var html = '';

    result.forEach((v,i)=>{
      html+='<li data-sid="'+v.serialId+'">'+v.cname+'</li>'
    })

    $(".card_system ul").html(html);

    $(document).on('click','.card_system li',function(){
      var sid = $(this).data('sid');
      $(".card_model").show().find('.brand_pop__wrap').removeClass('out').addClass('in');
      $(".card_model .brand_pop__title span").text($(this).text());
      getCardModel(sid);
    })
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  
}
/**
 * 获取车型
 * @param  {[type]} sid [description]
 * @return {[type]}     [description]
 */
function getCardModel(sid){
  $.ajax({
    url: 'http://10.10.1.110:3000/mock/22/getSystem?sid='+sid,
  })
  .done(function(data) {
    var result = data.result.data.data_list.data;
    var html = '';

    result.forEach((v,i)=>{
      html+='<li data-sid="'+v.serialId+'">'+v.cname+'</li>'
    })

    $(".card_model ul").html(html);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
}
