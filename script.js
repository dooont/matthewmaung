
// script.js
document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("words");
  const text = " Data Engineer";
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust the speed here
    } else {
      textElement.style.borderRight = "none"; // Remove cursor after typing
    }
  }

  textElement.innerHTML = ""; // Clear initial text
  type();
});
