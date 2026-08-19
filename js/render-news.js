// Renders NEWS (from data/news.js) into #news-root.
(function () {
  const root = document.getElementById("news-root");
  if (!root || typeof NEWS === "undefined") return;

  NEWS.forEach(function (item) {
    const wrap = document.createElement("div");
    wrap.className = "news-item";

    const date = document.createElement("p");
    date.className = "news-date";
    date.textContent = item.date;

    const text = document.createElement("p");
    text.className = "news-text";
    text.textContent = item.text;

    if (item.link) {
      text.appendChild(document.createTextNode(" "));
      const a = document.createElement("a");
      a.href = item.link;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = item.linkLabel || "Link";
      text.appendChild(a);
    }

    wrap.appendChild(date);
    wrap.appendChild(text);
    root.appendChild(wrap);
  });
})();
