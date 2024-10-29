const goButton = document.getElementById("goButton");
const textInput = document.getElementById("textInput");
const videoTag = document.getElementById("videoPlayer");

function updateMedia(){
    // textInput.value;
    // newVideo = "video/test" + textInput.value + ".mp4"
    videoTag.src="video/test"+textInput.value+".mp4";
}
goButton.addEventListener('click', updateMedia);
