if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register ('service-worker.js')
}

const textInput = document.getElementById("textInput");

function updateHref(){
    newHref = textInput.value;
    newHref = newHref + ".html"; 
    document.getElementById("goButton").href=newHref;
}

textInput.addEventListener('input', updateHref);

// textInput.addEventListener('input', function() {
//     updateHref();
// });
