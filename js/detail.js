window.addEventListener('load', function() {
    // 实现图片预览区域 预览列表
    // 引入swiper插件的js样式 start
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // 引入swiper插件的js样式 end
    // 实现详情页tab
    // 获取tab-list父元素
    var tablist = document.querySelector('.tab-list-a')
        // 获取tab-list的li元素
    var lis = tablist.querySelectorAll('li')
    console.log(lis);
    // 获取tab-con父元素
    var tabcon = document.querySelector('.tab-con')
        // 获取tab-con的内容选项元素
    var item = tabcon.querySelectorAll('.tab-list-item')
    console.log(item);
    // 获取条条
    var line = document.querySelector('.line')
    console.log(line);
    // 遍历tab-list的li
    for (var i = 0; i < lis.length; i++) {
        // 设置tab-list自定义属性 值 
        lis[i].setAttribute('index', i)
            // 鼠标经过tab-list的li事件
        lis[i].onclick = function() {
            // li目标位置
            console.log(this.offsetLeft);
            // 动画(目标对象，目标位置)
            animate(line, this.offsetLeft)
            line.style.width = this.offsetWidth + 'px'
                // 得到tab-list 自定义属性值 
            var index = this.getAttribute("index")
            console.log(index);
            // 遍历tab-con
            for (var i = 0; i < item.length; i++) {
                // 干掉所有人
                item[i].style.display = 'none'
            }
            // 留下我自己
            item[index].style.display = 'block'

        }
    }

})

window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview-img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
            mask.style.display = 'none';
            big.style.display = 'none';
        })
        // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function(e) {
        // (1). 先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x, y);
        // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
        // (3) 我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // (4) 如果x 坐标小于了0 就让他停在0 的位置
        // 遮挡层的最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        // 大图
        var bigIMg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigMax = bigIMg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';

    })

})