x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
draw_apple = "";
speak_data = " ";
to_number = " ";

function perload() {
    loadImage('apple.png');
}
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    to_number = Number(content);
    console.log(event);
    if (Number.isInteger(to_number) == "start drawing apple") {} else {
        "The speech has not recognized a number";
    }
    draw_apple = "set"
    content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;

}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    createCanvas();
    screen_width = 150
    screen_height = 150
    canvas.position = 0, 150;

}

function draw() {

    if (draw_apple == "set") {
        image()
        document.getElementById("status").innerHTML = to_number + " Apples drawn";
        draw_apple = "apple.png";
        for (var i = 1; i < to_number; i++) {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
        }
        speak_data(to_number)
        speak_data = "Apples Drawn";
    }
}

function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}