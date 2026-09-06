(function () {
  "use strict";
  const content = window.SITE_CONTENT;
  const page = document.body.dataset.page;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const clean = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const navButton = $(".nav-button");
  const nav = $("#nav");
  navButton.addEventListener("click", () => {
    const open = navButton.getAttribute("aria-expanded") === "true";
    navButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });

  $$("#consultant-name").forEach((element) => {
    element.textContent = content.consultant.name;
    element.hidden = !content.consultant.name;
  });
  $$('[data-email-link]').forEach((link) => {
    if (content.consultant.email) link.href = `mailto:${content.consultant.email}`;
    else link.hidden = true;
  });
  $$('[data-appointment-link]').forEach((link) => {
    if (content.consultant.appointmentUrl) {
      link.href = content.consultant.appointmentUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        window.alert("Add your appointment URL in site-content.js.");
      });
    }
  });

  if (page === "home") {
    $("#term-label").textContent = content.consultant.term;
    $("#appointment-note").textContent = content.consultant.appointmentNote;
    $("#office-hours").innerHTML = content.consultant.officeHours.map((item) => `
      <div class="office-row"><div><strong>${clean(item.day)}</strong><span>${clean(item.detail)}</span></div><span>${clean(item.location)}</span></div>
    `).join("");
    $("#news-list").innerHTML = content.news.slice(0, 3).map((item) => `
      <article class="news-item"><p>${clean(item.date)}</p><h3><a href="${clean(item.url)}">${clean(item.title)}</a></h3><span>${clean(item.summary)}</span></article>
    `).join("");
  }

  if (page === "resources") {
    $("#tools-resources").innerHTML = content.resources.map((item) => `
      <a class="list-item" href="${clean(item.url)}"><span><strong>${clean(item.title)}</strong><small>${clean(item.description)}</small></span><b aria-hidden="true">↗</b></a>
    `).join("");
    $("#umgpt-advantages").innerHTML = content.umgptAdvantages.map((item) => `<li>${clean(item)}</li>`).join("");
    $("#umgpt-disadvantages").innerHTML = content.umgptDisadvantages.map((item) => `<li>${clean(item)}</li>`).join("");
    $("#pricing-body").innerHTML = content.paidTools.map((item) => `
      <tr><td>${clean(item.vendor)}</td><td>${clean(item.product)}</td><td>${clean(item.free)}</td><td>${clean(item.eight)}</td><td>${clean(item.twenty)}</td><td>${clean(item.hundred)}</td><td>${clean(item.twoHundred)}</td></tr>
    `).join("");
    $("#researcher-options").innerHTML = content.researcherOptions.map((item) => `
      <a class="list-item" href="${clean(item.url)}"><span><strong>${clean(item.title)}</strong></span><b aria-hidden="true">↗</b></a>
    `).join("");
  }

  if (page === "events") {
    const eventList = $("#event-list");
    if (!content.events.length) {
      eventList.innerHTML = "";
    } else {
      eventList.innerHTML = [...content.events].sort((a, b) => a.date.localeCompare(b.date)).map((item) => `
        <article class="event-item"><p>${clean(item.date)} · ${clean(item.time)}</p><h3>${clean(item.title)}</h3><span>${clean(item.type)} · ${clean(item.location)}</span><p>${clean(item.description)}</p>${item.url ? `<a href="${clean(item.url)}">Details and registration ↗</a>` : ""}</article>
      `).join("");
    }

    const recordingList = $("#recording-list");
    if (!content.recordings.length) {
      recordingList.innerHTML = "";
    } else {
      recordingList.innerHTML = content.recordings.map((item) => `
        <a class="list-item" href="${clean(item.url)}"><span><strong>${clean(item.title)}</strong><small>${clean(item.date)} · ${clean(item.duration)}<br>${clean(item.description)}</small></span><b aria-hidden="true">▶</b></a>
      `).join("");
    }
  }
})();
