var widget = SC.Widget(document.getElementById("soundcloudPlayer"));
var currentPos = 0;
var maxPos = 2000;
var isDone = false;
var isPaused = true;
document.getElementById("progress_max").textContent = maxPos/1000


widget.bind(SC.Widget.Events.PLAY_PROGRESS, 
    function progressListener(e){
        console.log(e.currentPosition);
        currentPos = e.currentPosition;
        if(!isPaused){
            document.getElementById("musicProgress").style.width = (currentPos/maxPos * 100 + progressOffsets[guessNum]) + "%"
            console.log((currentPos/maxPos * 100) + "%")
        }
        if(e.currentPosition > maxPos){
            pauseSong();
            isDone = true
        }
        if(isDone){
            widget.seekTo(0)
            document.getElementById("musicProgress").style.width = "0%"
            console.log("HERE")
        }
        if(isPaused){
            document.getElementById("musicProgress").style.width = (currentPos/maxPos * 100) + "%"
            console.log("Paused at: " + (currentPos/maxPos * 100) + "%")
        }
    }
);


function playSong(){
    if(currentPos < maxPos){
        widget.play()
        isDone = false
        isPaused = false
    }
    document.getElementById("playPauseDiv").innerHTML = '<h1 class="fa-solid fa-pause text-light" onclick="pauseSong()"></h1>'
}


function pauseSong(){
    widget.pause()
    isPaused = true
    document.getElementById("playPauseDiv").innerHTML = '<h1 class="fa-solid fa-play text-light" onclick="playSong()"></h1>'
}


var searchNum = 0;
var selectedSong = ""
var guessNum = 0;
var songLimits = [2, 4, 7, 12, 17, 25]
var progressOffsets = [64, 32, 18, 10, 8, 6]

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    if(searchString.length == 0){
        document.getElementById('songsList').innerHTML = ""
        songsList.style.visibility = "hidden"
    }else{
        const filteredSongs = songs.filter((song) => {
            return (
                song.title.toLowerCase().includes(searchString)
            );
        });
        searchNum = filteredSongs.length;
        displaySongs(filteredSongs.slice(0,5));
    }
});

function searchBoxClear(){
    document.getElementById('searchBar').value = "";
    selectedSong = ""
    document.getElementById("submitButton").disabled = true
}

function searchBoxLoseFocus(){
    songsList.style.visibility = "hidden"
}

const displaySongs = (songs) => {
    let count = 0;
    var htmlString = songs
        .map((song) => {
            count = count + 1;
            return `
            <li class="song">
                <p onMouseDown="songSelection(this.innerHTML)">${song.title}</p>
            </li>
        `;
        })
        .join('');
    htmlString = htmlString + "<p>Showing " + count + " of " + searchNum + " results</p>"
    songsList.style.visibility = "visible"
    songsList.innerHTML = htmlString;
};

function songSelection(song){
    searchBar.value = song
    document.getElementById('songsList').innerHTML = ""
    songsList.style.visibility = "hidden"
    selectedSong = song
    document.getElementById("submitButton").disabled = false
}

function skipGuess(){

    guessNum++
    if(guessNum == 6){
        endOfGame(0)
    }else{
        guessBox = document.getElementById("guess" + guessNum)
        guessBox.innerHTML = '<span><i class="fa-solid fa-minus text-secondary"></i>  <span class="text-light">Skipped<span></span>'
        document.getElementById('searchBar').value = "";
        selectedSong = ""
        maxPos = songLimits[guessNum] * 1000
        document.getElementById("progress_max").innerHTML = songLimits[guessNum]
    }
}

function guessSong(){
    guessNum++
    if(songs[offset].title == selectedSong){
        // Right Answer
        endOfGame(1)
    }else{
        // Wrong Answer
        if(guessNum == 6){
            // GAME OVER
            endOfGame(0)
        }else{
            guessBox = document.getElementById("guess" + guessNum)
            guessBox.innerHTML = '<span><i class="fa-solid fa-x text-danger"></i><span class="text-light"> ' + selectedSong + '<span></span>'
            document.getElementById('searchBar').value = "";
            selectedSong = ""
            maxPos = songLimits[guessNum] * 1000
            document.getElementById("progress_max").innerHTML = songLimits[guessNum]
        }
    }
}
// 0 -> Lost 1-> Win
function endOfGame(status){
    var message = ""
    switch(status){
        case 0:
            message = "Ah, so close! Try again tomorrow!"
            break;
        case 1:
            message = "Nice job! Can you do it again tomorrow??"
            break;
    }

    document.getElementById("top").innerHTML = `
        <h2 class="text-light text-center">${message}</h2>
        <br>
        <br>
        <iframe class="fixed-bottom" name="130" id="soundcloudPlayer" allow="autoplay" width = "100%" height="200px" src="https://w.soundcloud.com/player/?url=${songs[offset].url}&amp;show_teaser=false&amp;cache=130&amp;auto_play=true&amp;buying=false&amp;sharing=false&amp;download=false&amp;show_playcount=false&amp;show_user=false&amp;"></iframe>
    `;
}