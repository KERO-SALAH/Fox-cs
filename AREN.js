function detectDirectionByFirstChar(text) {
  const cleaned = text.trim();

  for (let char of cleaned) {
    if (/[\d\s\W_]/.test(char)) continue;

    if (char >= 'ء' && char <= 'ي') return 'rtl';
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) return 'ltr';
  }

  return 'ltr';
}

function autoAdjustDirection() {
  const elements = document.querySelectorAll('*'); // ✅ كل العناصر

  elements.forEach(el => {
    // اتأكد إن العنصر ممكن يكون فيه نص
    if (!('innerText' in el || 'value' in el)) return;

    const text = el.innerText || el.value || '';
    if (text.trim() === '') return;

    el.dir = detectDirectionByFirstChar(text);
  });
}

window.addEventListener('DOMContentLoaded', autoAdjustDirection);
