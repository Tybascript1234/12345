(function () {
  const fileURL = "https://tybascript1234.github.io/12345/calculator.html";

  fetch(fileURL)
    .then((response) => {
      if (!response.ok) throw new Error("فشل تحميل الملف");
      return response.text();
    })
    .then((htmlContent) => {
      const container = document.getElementById("apps12345");
      if (!container) throw new Error("لم يتم العثور على العنصر target");

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;

      const scripts = tempDiv.querySelectorAll("script");
      const bodyContent = tempDiv.querySelector("body")?.innerHTML || htmlContent;

      container.innerHTML = bodyContent;

      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.textContent = script.textContent;
        }
        document.body.appendChild(newScript);
      });
    })
    .catch((err) => console.error("خطأ أثناء تحميل الآلة الحاسبة:", err));
})();
