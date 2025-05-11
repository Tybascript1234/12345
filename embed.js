(function () {
  // تأكد من وجود div بالمعرف "embed"
  var container = document.getElementById("embed");
  if (!container) return;

  // تحميل الصفحة الرئيسية لموقعك
  var htmlUrl = "https://tybascript1234.github.io/12345/index.html";

  fetch(htmlUrl)
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;

      // تحميل السكريبتات بعد إدخال الـ HTML
      const scripts = container.querySelectorAll("script");
      scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
      });
    })
    .catch(err => {
      container.innerHTML = "<p style='color:red'>فشل تحميل المحتوى.</p>";
      console.error("خطأ في تحميل المحتوى:", err);
    });
})();
