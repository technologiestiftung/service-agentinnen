{
  document.getElementById('video-placeholder').addEventListener('click', function() {
    const placeholder$ = document.getElementById('video-placeholder');
    placeholder$.innerHTML = `
      <iframe
        class="absolute inset-0 w-full h-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/iqpsEzLdl_k?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  });
}