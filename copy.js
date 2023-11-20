const copyText = document.querySelector(".copy-text");

copyText.addEventListener("click", async function () {
  try {
    await navigator.clipboard.writeText(colorName.textContent);
    copyText.textContent = "copied";
  } catch (error) {
    console.error("Copy failed !");
  }
});
