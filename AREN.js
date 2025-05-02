function toggleAnswers() {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(p => {
    if (p.innerText.toLowerCase().includes("answer")) {
      p.style.display = answersHidden ? "block" : "none";
    }
  });

  // تغيير حالة العرض
  answersHidden = !answersHidden;

  // تغيير نص الزر حسب الحالة
  const btn = document.querySelector(".toggle-btn");
  btn.innerHTML = answersHidden ? "👁️ Show Answers" : "🙈 Hide Answers";
}
