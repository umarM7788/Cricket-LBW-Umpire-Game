const audioElement = document.getElementById("myAudio");
const EasyBtn = document.getElementById("Easy-btn")
const MedBtn = document.getElementById("Medium-btn")
const HardBtn = document.getElementById("Hard-btn")
const loaderElement = document.getElementById("loader");


EasyBtn.addEventListener("click", function () {
    // // Show loader
    loaderElement.style.display = "block";
  
    // Play audio
    audioElement.play();
  
    // // Redirect after a short delay (to simulate loading time)
    setTimeout(function () {
      window.location.href = "Easy.html";  // Replace with your target URL
    }, 3000); // Adjust delay in milliseconds (1000ms = 1 second)
  });


