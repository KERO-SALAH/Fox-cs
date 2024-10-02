function change(s) {
  console.log(s);
  var img = document.getElementById("level_img");
  img.setAttribute("src", s);
}
document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
// الهيدر
fetch("https://kero-salah.github.io/Fox-cs/parts/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });
//الفوتر
fetch("https://kero-salah.github.io/Fox-cs/parts/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

//القائمة الجانبية
fetch("https://kero-salah.github.io/Fox-cs/parts/aside.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("asider").innerHTML = data;
  });
//فتح القائمة الجانبية
function openSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}
//عرض الازرار الجانبية مثل الهوم و الاب
fetch("https://kero-salah.github.io/Fox-cs/parts/go_home.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("go_home").innerHTML = data;
  });
