{
  const backButton = document.getElementById("back-to-top-link");

  backButton
    .addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
}
