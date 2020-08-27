
let $navHamburger = $('#navbar-hamburger');// 漢堡條
let $navBar = $('#navbar-line');// navbar
let $navContent = $('#nav');// nav選單

// 打開Nav選單
function openNavBar() {
    $navHamburger.addClass('active');
    $navBar.addClass('nav-bcg-change');
    $navContent.addClass('active');
    $navContent.removeClass('fade');
}

// 關閉Nav選單
function closeNavBar() {
    $navContent.addClass('fade');
    $navContent.removeClass('active');
    $navHamburger.removeClass('active');
    $navBar.removeClass('nav-bcg-change');
}

// NavBar加上底色
function addNavBarBg() {
    $navBar.attr('class','navbar-line active')
}

// NavBar移除底色
function removeNavBarBg() {
    $navBar.attr('class','navbar-line')
}

// 漢堡條點擊事件
function hamburgerClick() {
    if ($navContent.hasClass('active')) {
        closeNavBar()
    } else {
        openNavBar()
    }
}

// 滾軸事件
function navScroll() {
    let vh = window.innerHeight;
    let scrollValue = window.scrollY;

    if (scrollValue >= vh && $navContent.hasClass('active')) {
        addNavBarBg();
        closeNavBar();
    } else if (scrollValue >= vh) {
        addNavBarBg();
    } else if (scrollValue < vh && $navContent.hasClass('active')) {
        closeNavBar();
        removeNavBarBg();
    } else if(scrollValue < vh){
        removeNavBarBg();
    }
}

// 關閉轉場動畫
function closePageChange() {
    $('#page-change').delay(1000).fadeOut(1000);
    $navBar.addClass('show');
}

// 事件監聽
$navHamburger.click(hamburgerClick);
$(window).scroll(navScroll);
$(document).ready(closePageChange);