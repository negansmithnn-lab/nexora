
const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");
const articles = document.querySelectorAll(".article-card");
const emptyMessage = document.getElementById("emptyMessage");

let selectedCategory = "all";

function filterArticles() {
  const searchText = searchInput.value.trim().toLocaleLowerCase("fa");
  let visibleCount = 0;

  articles.forEach((article) => {
    const category = article.dataset.category;
    const text = article.textContent.toLocaleLowerCase("fa");

    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    const matchesSearch = text.includes(searchText);
    const visible = matchesCategory && matchesSearch;

    article.hidden = !visible;

    if (visible) visibleCount++;
  });

  emptyMessage.hidden = visibleCount !== 0;
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

    filters.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    filterArticles();
  });
});

searchInput.addEventListener("input", filterArticles);

