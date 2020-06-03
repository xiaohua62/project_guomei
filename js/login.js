$(function() {
    $(".tab-a li").click(function() {
        $(this).addClass("active").siblings().removeClass("active")
        var index = $(this).index()
        $(".tab-con .item").eq(index).show().siblings().hide()
    })
})