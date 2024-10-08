function submitMessage() {
  var language = document.getElementById("language").value;

  var message = document.getElementById("message").value;
  var result = document.getElementById("result");
  var htmlCode = document.getElementById("htmlCode");
  var copyBtn = document.getElementById("copyBtn");

  if (message.trim() === "") {
    result.innerHTML = "الرجاء إدخال رسالة!";
    result.style.color = "red";
    htmlCode.innerText = "";
    copyBtn.style.display = "none";
  } else {
    var finalMessage = message;

    var options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    console.log(dateString);

    var currentDate = new Date();
    var dateString = currentDate.toLocaleString("en-GB", options);

    result.innerHTML = "تم إرسال الرسالة!";
    result.style.color = "green";

    // تحويل الرسالة إلى كود HTML
    var htmlContent = `<div class="post_post border_post padding30_post">
      <div class="top_post flex_post">
        <div class="img_post">
          <img
            class="img50_post"
            src="https://i.ibb.co/jRRc1R8/Picsart-24-05-18-13-42-30-197.png"
            alt=""
          />
        </div>
        <div class="name_time_post">
          <div class="name_post">Fox</div>
          <div class="time_post">${dateString}</div>
        </div>
      </div>
      <div class="mid_post">
        <h3 class="${language}">${message}</h3>
      </div>
     
    </div>`;

    htmlCode.innerText = htmlContent;

  }
}


