// Array of video sources and their corresponding correct answers
const audioElement = document.getElementById("myAudio");

const videos = [
    { src: "assets/Easy/Easy video 01.mp4", answer: "out" },
    { src: "assets/Easy/Easy video 02.mp4", answer: "out" },
    { src: "assets/Easy/Easy video 04.mp4", answer: "out" },
    { src: "assets/Easy/Easy video 05.mp4", answer: "not out" },
    { src: "assets/Easy/Easy video 06.mp4", answer: "out" },
    { src: "assets/Easy/Easy video 07.mp4", answer: "not out" },
    { src: "assets/Easy/Easy video 08.mp4", answer: "out" },
    { src: "assets/Easy/Easy video 09.mp4", answer: "not out" },
    { src: "assets/Easy/Easy video 10.mp4", answer: "out" },
    { src: "assets/Easy/Easy video 11.mp4", answer: "not out" },
    { src: "assets/Easy/Easy video 12.mp4", answer: "out" },
    { src: "assets/Easy/Easy video 13.mp4", answer: "not out" },
    { src: "assets/Easy/Easy video 14.mp4", answer: "not out" },
    { src: "assets/Easy/Easy video 15.mp4", answer: "not out" },
    // Add more videos as needed
];

let currentVideoIndex = 0;
const videoPlayer = document.getElementById('videoPlayer');
const answerInput = document.getElementById('answerInput');

// Event listener for video end
videoPlayer.addEventListener('ended', function() {
    setTimeout(function() {
        showQuestion();
    }, 3000); // 5 seconds delay
});

// Function to show question after video ends
function showQuestion() {
    if (currentVideoIndex < videos.length) {
        videoPlayer.src = videos[currentVideoIndex].src;
        videoPlayer.play();
        answerInput.value = ""; // Clear previous answer
    } else {
        endQuiz();
    }
}

// Function to check the answer
function checkAnswer() {
    audioElement.play();
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = videos[currentVideoIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is: " + correctAnswer);
    }

    currentVideoIndex++;
    showQuestion();
}

// Function to end the quiz
function endQuiz() {
    // Calculate and display score
    const score = calculateScore();
    alert("Quiz ended. Your score: " + score);
}

// Function to calculate the score
function calculateScore() {
    let correctAnswers = 0;
    for (let i = 0; i < videos.length; i++) {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = videos[i].answer.toLowerCase();
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        }
    }
    return correctAnswers;
}

// Start the quiz
showQuestion();
