function submitMessage() {
  var language = document.getElementById("language").value;
  var link = document.getElementById("link").value;
  var title = document.getElementById("title").value;

  var result = document.getElementById("result");
  var htmlCode = document.getElementById("htmlCode");
  var copyBtn = document.getElementById("copyBtn");

  if (link.trim() === "") {
  } else {
    // تحويل الأسطر الجديدة إلى <br>

    var htmlContent = `
                 <div class="lecture-card ${language}">
                  <div class="lecture-image">
                    <img
                      src="https://img.icons8.com/3d-fluency/94/mic.png"
                      alt="Play Icon"
                    />
                  </div>
                  <div class="lecture-title">${title}</div>
                                    <a
                    href="${link}" target="_blank"
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
