
//--------------------------------
  // دالة للتحويل بناءً على الفرقة الدراسية
  function redirectToPageBasedOnYear(year) {
    let redirectUrl;
    if (year === "first") {
      redirectUrl = "https://fox-cs.blogspot.com/2024/06/home2024.html";
    } else if (year === "second") {
      redirectUrl = "First Semester of Sophomore Year.html";
    } else if (year === "third" || year === "fourth") {
      redirectUrl =
        "https://fox-cs.blogspot.com/2024/08/first-semester-of-sophomore-year.html";
    }

    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }

  // التحقق من التخزين المحلي عند تحميل الصفحة
 
  document.addEventListener("DOMContentLoaded", function () {
    const storedYear = localStorage.getItem("userYear");
    if (storedYear) {
      redirectToPageBasedOnYear(storedYear);
    }
  });
  // التعامل مع تسجيل الدخول
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // تخزين بيانات الفرقة في localStorage
      const selectedYear = document.getElementById("year").value;
      localStorage.setItem("userYear", selectedYear);

      // إعادة التوجيه إلى الرابط المحدد
      redirectToPageBasedOnYear(selectedYear);
    });