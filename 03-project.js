
// 顯示全部
window.onload = function () {
    filterSelection('all');
}

// 按鈕互動
$(".btn").click(function () {
    // 取得按鈕上的過濾器類別
    var filterValue = $(this).attr(" ");
    // 執行過濾器
    filterSelection(filterValue);
});

// 過濾器功能
function filterSelection(c) {
    $(".column").each(function () {

        // 如果類別 c 是all，顯示全部
        if (c == 'all' || $(this).hasClass(c)) {
            $(this).addClass("show");
        } else {
            $(this).removeClass("show");
        }

    });
    // alert(c)
}


$(function () {
    $(".btn").click(function () {
        // 移除現有的 active class
        $(".btn.active").removeClass("active");
        // 加上 active class
        $(this).addClass("active");
    })
})




//



