function submitMessage() {
  var language = document.getElementById("language").value;
  var message = document.getElementById("message").value;
  var result = document.getElementById("result");
  var htmlCode = document.getElementById("htmlCode");
  var copyBtn = document.getElementById("copyBtn");

  if (message.trim() === "") {
    result.innerHTML = "الرسالة فارغة!";
    result.style.color = "red";
  } else {
    var finalMessage = message;

    // تحويل النص بين النجوم (*) إلى نص عريض (Bold)
    finalMessage = finalMessage.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
    finalMessage = finalMessage.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank">من هنا</a>'
    );
    console.log(finalMessage);
    finalMessage = finalMessage.replace(/\n/g, "<br>");
    console.log(finalMessage);
    finalMessage = finalMessage.replace(/(<br\s*\/?>){2,}/g, "<br>");

    var options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    var currentDate = new Date();
    var dateString = currentDate.toLocaleString("en-GB", options);

    result.innerHTML = "تم إرسال الرسالة!";
    result.style.color = "green";

    var htmlContent = `<div class="post_post ${language} border_post padding30_post">
          <div class="top_post flex_post">
            <div class="img_post">
              <img
                class="img50_post"
                src="https://i.ibb.co/V3CHNC2/kero-kero.jpg"
                alt=""
              />
            </div>
            <div class="name_time_post">
              <div class="name_post">KE RO Salah</div>
              <div class="time_post">${dateString}</div>
            </div>
          </div>
          <div class="mid_post">
            <h3 class="rtl">${finalMessage}</h3>
          </div>
        </div>`;

    navigator.clipboard.writeText(htmlContent).then(
      function () {
        htmlCode.innerHTML += " تم نسخ المحتوى تلقائيًا!";
      },
      function () {
        htmlCode.innerHTML += " فشل في نسخ المحتوى!";
      }
    );
  }
}
