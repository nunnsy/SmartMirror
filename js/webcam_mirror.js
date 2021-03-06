$(document).ready(function() {

  var video = document.querySelector("#webcam_video");

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia({
      video: true
    }, handleVideo, videoError);
  }

  function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
  }

  function videoError(e) {
    // do something
  }

  initialisePointDetection();
  initialiseFaceDetection();
});
