const goButton = document.getElementById("goButton");
const textInput = document.getElementById("textInput");
const videoTag = document.getElementById("videoPlayer");

function updateMedia(){
    // textInput.value;
    videoTag.src="test"+textInput.value;
}
goButton.addEventListener('click', updateMedia);
