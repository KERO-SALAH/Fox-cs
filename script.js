window.onscroll = function () {
  let scrollToTopButton = document.getElementById("scrollToTop");

  // إظهار السهم إذا كانت الصفحة تم النزول فيها لمسافة 300 بكسل
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = "https://i.ibb.co/yYdJNqF/logo.png"; // ضع المسار الصحيح هنا
document.head.appendChild(link);
