const audioElement = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");
const loaderElement = document.getElementById("loader");

playButton.addEventListener("click", function () {
    // Show loader
    loaderElement.style.display = "block";
  
    // Play audio
    audioElement.play();
  
    // Redirect after a short delay (to simulate loading time)
    setTimeout(function () {
      window.location.href = "Challenge.html";  // Replace with your target URL
    }, 3000); // Adjust delay in milliseconds (1000ms = 1 second)
  });