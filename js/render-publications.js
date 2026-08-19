// Renders PUBLICATIONS (from data/publications.js) into #publications-root.
(function () {
  const root = document.getElementById("publications-root");
  if (!root || typeof PUBLICATIONS === "undefined") return;

  Object.keys(PUBLICATIONS).forEach(function (sectionTitle) {
    const h2 = document.createElement("h2");
    h2.className = "pub-section-title";
    h2.textContent = sectionTitle;
    root.appendChild(h2);

    const ol = document.createElement("ol");
    ol.className = "pub-list";

    PUBLICATIONS[sectionTitle].forEach(function (pub) {
      const li = document.createElement("li");

      if (pub.authors) {
        // Citation-style entry (paper/journal/talk).
        const tag = pub.tag ? pub.tag + " " : "";
        const doiHtml = pub.doi
          ? ' <a href="' + pub.doi + '" target="_blank" rel="noopener">' + pub.doi + "</a>"
          : "";
        const videoList = pub.videos || (pub.video ? [{ label: "Video", url: pub.video }] : []);
        const videoHtml = videoList
          .map(function (v) {
            return ' <a href="' + v.url + '" target="_blank" rel="noopener">[' + v.label + ']</a>';
          })
          .join("");
        li.innerHTML =
          tag +
          pub.authors + (pub.year ? " " + pub.year : "") + " " +
          "<strong>" + pub.title + "</strong> " +
          pub.venue +
          doiHtml +
          videoHtml;
      } else {
        // Simple award/misc entry: title, date, optional links.
        const linksHtml = (pub.links || [])
          .map(function (url) {
            return ' <a href="' + url + '" target="_blank" rel="noopener">' + url + "</a>";
          })
          .join("");
        li.innerHTML =
          "<strong>" + pub.title + "</strong>, " + pub.date + linksHtml;
      }

      ol.appendChild(li);
    });

    root.appendChild(ol);
  });
})();
