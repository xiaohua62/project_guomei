$(function() {
    // 电梯导航
    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
    // 节流阀  互斥锁 
    var flag = true;
    // 1.显示隐藏电梯导航
    var toolTop = $(".must").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedTool").fadeIn();
        } else {
            $(".fixedTool").fadeOut();
        };
    }

    $(window).scroll(function() {
        toggleTool();
        // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名


        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    $(".fixedTool li").eq(i).addClass("current").siblings().removeClass();

                }
            })
        }



    });
    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedTool li").click(function() {
        flag = false;
        console.log($(this).index());
        // 当我们每次点击小li 就需要计算出页面要去往的位置 
        // 选出对应索引号的内容区的盒子 计算它的.offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    })
})




$(function() {
    // alert('hello')
    // 鼠标点击 事件
    $(".tab-list-a  li").click(function() {
        // tab-list的li添加active类名其它隐藏
        $(this).addClass("active").siblings().removeClass()
            // 获取tab-list的索引号
        var index = $(this).index()
        console.log(index);

        // tab-con内容显示
        $(".tab-content-01 .item").eq(index).show().siblings().hide()

    })

    $(function() {
            // 实现导航添加active类名
            $(".nav-tabs li").click(function() {
                $(this).addClass("active").siblings().removeClass()
            })
        })
        // 实现快捷导航下拉菜单
    $(".shopcart-left li ").hover(function() {
            $(this).children(".vip").show()
        }, function() {
            $(this).children(".vip").hide()
        })
        // 焦点图时间
    $('.carousel').carousel({
        interval: 1000
    })
})
window.addEventListener('load', function() {
    // 实现搜索获取焦点失去焦点
    // 获取元素
    var search = document.querySelector(".search-a")
    console.log(search)
    var text = document.querySelector(".search-b")
    console.log(text)
        // 获得焦点事件
    search.onfocus = function() {
        if (this.value === '商品') {
            this.value = '';
        }
        this.style.color = '#333'
    }
    search.onblur = function() {
            if (this.value === '') {
                this.value = '商品';
            }
            this.style.color = '#ccc'
        }
        // 获得焦点事件
    text.onfocus = function() {
        if (this.value === '空调') {
            this.value = '';
        }
        this.style.color = '#333'
    }
    text.onblur = function() {
        if (this.value === '') {
            this.value = '空调';
        }
        this.style.color = '#ccc'
    }
})