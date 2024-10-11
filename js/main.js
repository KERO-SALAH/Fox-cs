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
fetch("../parts/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });
//الفوتر
fetch("../parts/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

//القائمة الجانبية
fetch("../parts/aside.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("sidebar").innerHTML = data;
  });

//فتح القائمة الجانبية
var sidebar = document.getElementById("sidebar");
sidebar.style.left = "-250px";

function openSidebar() {
  console.log(sidebar.style.left);
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}
//عرض الازرار الجانبية مثل الهوم و الاب
fetch("../parts/go_home.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("go_home").innerHTML = data;
  });
