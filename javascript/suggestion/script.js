// Sample suggestions
const suggestions = [
    "JavaScript tutorial",
    "CSS animations",
    "HTML basics",
    "React.js guide",
    "Node.js crash course",
    "Web development tips",
    "Python for beginners",
    "Responsive design tutorial",
    "YouTube SEO tips",
    "Vue.js vs React"
  ];
  
  const searchInput = document.getElementById("searchInput");
  const suggestionList = document.getElementById("suggestionList");
  
  // Filter and display suggestions
  function filterSuggestions() {
    const query = searchInput.value.toLowerCase();
    suggestionList.innerHTML = "";
  
    if (query) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query)
      );
  
      filtered.forEach(suggestion => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        li.addEventListener("click", () => {
          searchInput.value = suggestion; // Set input value
          suggestionList.innerHTML = ""; // Clear suggestions
        });
        suggestionList.appendChild(li);
      });
    }
  }
  