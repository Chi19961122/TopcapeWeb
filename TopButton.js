// Top button

// 當網頁捲動時觸發事件
window.onscroll = function() {
    // 如果捲動高度超過 500 像素，顯示回到頂部按鈕，否則隱藏按鈕
    if (document.documentElement.scrollTop > 500) {
      document.getElementById("back-to-top-btn").style.display = "block";
    } else {
      document.getElementById("back-to-top-btn").style.display = "none";
    }
  };
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }