function submitMessage() {
  var language = document.getElementById("language").value;
  var dis = document.getElementById("dis").value;
  var link = document.getElementById("link").value;
  var title = document.getElementById("title").value;

  var result = document.getElementById("result");
  var htmlCode = document.getElementById("htmlCode");
  var copyBtn = document.getElementById("copyBtn");

  if (link.trim() === "") {
  } else {
    var finalMessage = dis;

    finalMessage = finalMessage.replace(/\*(.*?)\*/g, "<strong>$1</strong>");

    finalMessage = finalMessage.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank">من هنا</a>'
    );

    // تحويل الأسطر الجديدة إلى <br>
    finalMessage = finalMessage.replace(/\n/g, "<br>");

    var options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    var currentDate = new Date();
    var dateString = currentDate.toLocaleString("en-GB", options);

    var htmlContent = `
                 <div class="lecture-card ${language} ">
                  <div class="lecture-image">
                    <img
                      src="https://img.icons8.com/color/48/youtube-play.png"
                      alt="Play Icon"
                    />
                  </div>
                  <div class="lecture-title">${title}</div>
                  <div class="lecture-description">${dis}</div>
                  <a
                    href="${link}"
                  >
                    <button class="lecture-button">Show</button>
                  </a>
                </div>
                `;

    // htmlCode.innerText = htmlContent;
    navigator.clipboard.writeText(htmlContent).then(
      function () {
        result.innerHTML += " تم نسخ المحتوى تلقائيًا!";
      },
      function () {
        result.innerHTML += " فشل في نسخ المحتوى!";
      }
    );
  }
}
