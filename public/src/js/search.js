window.addEventListener("DOMContentLoaded", async () => {
  const searchTitle = document.getElementById("search-title");

  const messages = [
    "Searching",
    "Looking up",
    "Hold tight",
    "Wait a sec",
    "Hold your horses",
    "Travelling",
    "Running",
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
  searchTitle.innerHTML = `<i class="fa-solid fa-circle-notch loading me-3" style="vertical-align: baseline;" class="me-2"></i>${message}...`;

  const url = new URL(location.href);
  const back = url.searchParams.get("from") || "/";
  const query = url.searchParams.get("q");
  if (!query) {
    location.href = back;
    return;
  }

  document.getElementById("search-box").value = query;
  await new Promise((r) => setTimeout(r, 2000));
  searchTitle.textContent = `Search results for "${query}"`;
  document.querySelector("main").classList.add("anim-fade-down");
  document.getElementById("search-results").classList.remove("visually-hidden");

  const title = document.querySelector("title");
  title.textContent += " - Searching for " + query;

  // Adding to session storage
  sessionStorage.setItem("lq", query);
});
