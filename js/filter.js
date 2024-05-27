document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.getElementById("filter-button");
    const articlesContainer = document.querySelector(".articles");

    filterButton.addEventListener("click", function () {
        const articles = Array.from(document.querySelectorAll(".article-item"));
        articles.sort((a, b) => {
            const dateA = new Date(a.querySelector("p").textContent);
            const dateB = new Date(b.querySelector("p").textContent);
            return dateB - dateA;
        });
        articles.forEach(article => articlesContainer.appendChild(article));
    });
});
