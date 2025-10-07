function playVideo(answer) {
  const video = document.getElementById('videoPlayer');

  if (answer === 'yes') {
    video.src = 'yes.mp4'; // replace with your YES video file
  } else {
    video.src = 'no.mp4'; // replace with your NO video file
  }

  video.style.display = "block";
  video.play();
}
