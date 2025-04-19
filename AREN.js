function detectDirectionByFirstChar(text) {
  const cleaned = text.trim();

  for (let char of cleaned) {
    // نركز بس على الحروف العربية أو الإنجليزية
    if (/[ء-ي]/.test(char)) return 'rtl'; // أول حرف عربي
    if (/[a-zA-Z]/.test(char)) return 'ltr'; // أول حرف إنجليزي
  }

  return 'ltr'; // افتراضي
}

function autoAdjustDirection() {
  const elements = document.querySelectorAll('*'); // كل العناصر

  elements.forEach(el => {
    // لو العنصر قابل لاحتواء نص
    let text = '';

    if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
      text = el.value;
    } else {
      text = el.innerText;
    }

    if (text && text.trim() !== '') {
      const dir = detectDirectionByFirstChar(text);
      el.setAttribute('dir', dir); // نحط الاتجاه صراحةً
    }
  });
}

window.addEventListener('DOMContentLoaded', autoAdjustDirection);
