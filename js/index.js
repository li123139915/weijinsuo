$(function () {
   
    $('[data-toggle="tooltip"]').tooltip(); //初始化按钮提示

    // 轮播图
    $(window).resize(function () {
        var windowWidth = $(window).width();

        if (windowWidth < 768) {
            $(".carousel-inner .item").each(function (index, ele) { //jquery的遍历方法,形参位置不能交换,否则无法传给对应参数
                $(ele).html('<img class="smBg" src="image/slide_0' + (index + 1) + '_640x340.jpg" alt="...">');

            })
        } else {
            $(".carousel-inner .item").each(function (index, ele) {
                $(ele).html('<div class="bigBg" style="background-image: url(./image/slide_0' + (index + 1) + '_2000x410.jpg);"></div>');
                // 当添加的字符串内部有多个双引号,要记得外层与内层不能一样
            })
        }
    }).trigger("resize"); //在函数末尾点个trigger(当前事件名称),可以在事件注册后立即执行一次.

})