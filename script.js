function showVideo() {
  const pictures = document.getElementById('pictures');
  const video = document.getElementById('videoPlayer');

  // hide the pictures
  pictures.style.display = "none";

  // show and play the video
  video.src = "video.mp4"; // ✅ put your video file here
  video.style.display = "block";
  video.play();
}
