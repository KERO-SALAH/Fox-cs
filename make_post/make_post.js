

function changeLanguage() {
    var language = document.getElementById("language").value;
    var message = document.getElementById("message");

    if (language === "ar") {
        message.style.direction = "rtl";
        message.placeholder = "اكتب رسالتك هنا...";
    } else {
        message.style.direction = "ltr";
        message.placeholder = "Write your message here...";
    }
}

function submitMessage() {
    var language = document.getElementById("language").value;

    var message = document.getElementById("message").value;
    var includeDate = document.getElementById("includeDate").checked;
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

        // إضافة التاريخ والوقت إذا تم اختياره
        if (includeDate) {
            var currentDate = new Date();
            var dateString = currentDate.toLocaleString();
        }

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
      <div class=" bottom_post flex_post ">
        <div class=" btn-elegant_post flex_jcc_post like_post flex_post lr_post">
          <img class="icon_post" src="/img/heart.png" alt="" />
          <h4>Like</h4>
        </div>
        <div class="btn-elegant_post flex_jcc_post shadow_post share_post flex_post lr_post">
          <img class="icon_post" src="/img/share.png" alt="" />
          <h4>share</h4>
        </div>
        <div class=" btn-elegant_post flex_jcc_post shadow_post comment_post flex_post">
          <img class="icon_post" src="/img/comment.png" alt="" />
          <h4>comment</h4>
        </div>
      </div>
    </div>`
        
        
        
        
        
        htmlCode.innerText = htmlContent;

        // إظهار زر النسخ
        copyBtn.style.display = "block";
    }
}

function copyToClipboard() {
    var htmlCode = document.getElementById("htmlCode").innerText;

    // نسخ الكود إلى الحافظة
    navigator.clipboard.writeText(htmlCode).then(function() {
        alert("تم نسخ الكود بنجاح!");
    }, function() {
        alert("فشل في نسخ الكود. حاول مرة أخرى.");
    });
}
