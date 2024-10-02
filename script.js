window.onscroll = function() {
    let scrollToTopButton = document.getElementById("scrollToTop");

    // إظهار السهم إذا كانت الصفحة تم النزول فيها لمسافة 300 بكسل
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// عند النقر على السهم، ترجع إلى الأعلى
