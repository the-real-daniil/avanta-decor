let isEnableMoving = true

$(window).scroll(function () {
    const menuOffset = document.querySelector(".menu").offsetTop + window.innerHeight
    const headerHeight = getHeaderHeight()
    const menuHeight = 70
    const scrollTop = $(window).scrollTop()
    if (scrollTop < window.innerHeight || scrollTop > (menuOffset - headerHeight)) {
        $('.header').removeClass('_fixed');
        $('.header_fake').css("display", "none");
    } else {
        $('.header_fake').css("display", "block");
        $('.header').addClass('_fixed');
        isEnableMoving = true
    }
})

const getHeaderHeight = () => {
    if (window.matchMedia("(min-width: 600px)").matches) {
        return 122
    } else {
        return 85
    }
}