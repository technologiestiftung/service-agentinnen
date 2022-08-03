{
  // BACK BUTTON
  const backButton = document.getElementById("back-to-top-link");

  if (backButton) {
    backButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}
