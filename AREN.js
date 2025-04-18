function detectDirectionByFirstChar(text) {
  // شيل المسافات والأحرف الخاصة من البداية
  const cleaned = text.trim();

  for (let char of cleaned) {
    if (char >= 'ء' && char <= 'ي') return 'rtl'; // أول حرف عربي
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) return 'ltr'; // أول حرف إنجليزي
  }

  // افتراضي إذا ما فيش حرف واضح
  return 'ltr';
}

function autoAdjustDirection() {
  const elements = document.querySelectorAll('p, span, div, textarea, input, h1, h2, h3, h4, h5, h6');

  elements.forEach(el => {
    const text = el.innerText || el.value || '';
    if (text.trim() === '') return;

    el.dir = detectDirectionByFirstChar(text);
  });
}

window.addEventListener('DOMContentLoaded', autoAdjustDirection);
