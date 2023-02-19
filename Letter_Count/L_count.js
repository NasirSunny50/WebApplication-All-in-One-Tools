const textarea = document.getElementById("textarea");
const letterCount = document.getElementById("letterCount");

textarea.addEventListener("input", function() {
  letterCount.textContent = textarea.value.length;
});
