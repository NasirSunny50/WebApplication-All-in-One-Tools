const textarea = document.getElementById("textarea");
const wordCount = document.getElementById("wordCount");

textarea.addEventListener("input", function() {
  wordCount.textContent = textarea.value.split(" ").length;
});
