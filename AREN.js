function detectDirectionByFirstChar(text) {
  const cleaned = text.trim();

  for (let char of cleaned) {
    // تجاهل الحروف غير المفيدة (رموز، أرقام، مسافات، إلخ)
    if (!char.match(/[A-Za-z\u0600-\u06FF]/)) continue;

    // لو أول حرف عربي
    if (char >= 'ء' && char <= 'ي') return 'rtl';

    // لو أول حرف إنجليزي
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) return 'ltr';
  }

  return 'ltr'; // افتراضي
}

function autoAdjustDirection() {
  const elements = document.querySelectorAll('*');

  elements.forEach(el => {
    // تأكد إن العنصر قابل لاحتواء نص
    const text = el.innerText || el.value || '';
    if (text.trim() === '') return;

    const direction = detectDirectionByFirstChar(text);
    el.dir = direction;
  });
}

window.addEventListener('DOMContentLoaded', autoAdjustDirection);
