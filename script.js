
let currentUtterance = null; 

function speakText(text) {
    
    if (currentUtterance && speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
   
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    
    currentUtterance = utterance;

    
    speechSynthesis.speak(utterance);
}

document.getElementById('showMessageButton').addEventListener('click', function() {
    var message = document.getElementById('message');
    var hideButton = document.getElementById('hideMessageButton');

    
    var messageText = message.textContent.trim(); 
    speakText(messageText);

   
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
        setTimeout(function() {
            message.classList.add('show');
            hideButton.classList.remove('hidden');
        }, 10); 
    }
});


document.getElementById('hideMessageButton').addEventListener('click', function() {
    var message = document.getElementById('message');
    var hideButton = document.getElementById('hideMessageButton');

    
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }

   
    if (message.classList.contains('show')) {
        message.classList.remove('show');
        setTimeout(function() {
            message.classList.add('hidden');
            hideButton.classList.add('hidden');
        }, 500); 
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const videoList = document.getElementById('video-list');
    const videos = videoList.getElementsByTagName('li');

    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        if (filter) {
            videoList.style.display = 'block';
            for (let i = 0; i < videos.length; i++) {
                const videoTitle = videos[i].textContent || videos[i].innerText;
                if (videoTitle.toLowerCase().indexOf(filter) > -1) {
                    videos[i].style.display = '';
                } else {
                    videos[i].style.display = 'none';
                }
            }
        } else {
            videoList.style.display = 'none';
            document.getElementBYID("result").innerHTML=" No Movies Found Call Ash the Programmer Ash to fixed this problem";
        }
    });
});


document.getElementById('playButton').addEventListener('click', () => {
    const audioElement = document.getElementById('myAudio');
    audioElement.play().catch(error => {
        console.log('Error playing audio:', error);
    });
});



