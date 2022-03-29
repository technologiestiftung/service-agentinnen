{
  document
    .getElementById("video-placeholder")
    .addEventListener("click", function () {
      const placeholder$ = document.getElementById("video-placeholder");
      placeholder$.innerHTML = `
      <video class="absolute inset-0 w-full h-full aspect-video" controls autoplay>
        <source src="/assets/videos/introduction.webm" type="video/webm" />
        <source src="/assets/videos/introduction.mp4" type="video/mp4" />
      </video>
    `;
    });
}
