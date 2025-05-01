// Load posts from localStorage or start with empty list
let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

function displayPosts() {
  const container = document.getElementById("blog-posts");
  container.innerHTML = "<h2>Blog Posts</h2>"; // Reset with heading

  posts.forEach(post => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h3>${post.title}</h3>
      <small>${post.date}</small>
      <p>${post.content}</p>
    `;
    container.appendChild(article);
  });
}

document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const date = new Date().toLocaleDateString();

  if (title && content) {
    const newPost = { title, content, date };
    posts.unshift(newPost); // Add to the beginning
    localStorage.setItem("blogPosts", JSON.stringify(posts));
    displayPosts();

    // Clear form
    document.getElementById("postForm").reset();
  }
});

displayPosts(); // Show posts on page load
