var widget = SC.Widget(document.getElementById("soundcloudPlayer"));
var currentPos = 0;
var maxPos = 2000;
var isDone = false;
var isPaused = true;
var guesses = ["", "", "", "", "", ""]
var guessStats = [0, 0, 0, 0, 0, 0, 0]
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
        setGuess("Skipped", 0)
        // endOfGame(0)
    }else{
        setGuess("Skipped", -1)
        guessBox = document.getElementById("guess" + guessNum)
        guessBox.innerHTML = '<span><i class="fa-solid fa-minus text-secondary"></i>  <span class="text-light">Skipped<span></span>'
        document.getElementById('searchBar').value = "";
        selectedSong = ""
        maxPos = songLimits[guessNum] * 1000
        document.getElementById("progress_max").innerHTML = songLimits[guessNum]
        if(guessNum < 5){
            document.getElementById("skipButton").innerText = "Skip (+" + (songLimits[guessNum+1] - songLimits[guessNum]) + "s)"
        }else{
            document.getElementById("skipButton").innerText = "Give Up"
        }
    }
}

function guessSong(){
    guessNum++
    if(songs[offset].title == selectedSong){
        // Right Answer
        setGuess(selectedSong, 1)
        // endOfGame(1)
    }else{
        // Wrong Answer
        if(guessNum == 6){
            // GAME OVER
            setGuess(selectedSong, 0)
            // endOfGame(0)
        }else{
            setGuess(selectedSong, -1)
            guessBox = document.getElementById("guess" + guessNum)
            guessBox.innerHTML = '<span><i class="fa-solid fa-x text-danger"></i><span class="text-light"> ' + selectedSong + '<span></span>'
            document.getElementById('searchBar').value = "";
            selectedSong = ""
            maxPos = songLimits[guessNum] * 1000
            document.getElementById("progress_max").innerHTML = songLimits[guessNum]
            if(guessNum < 5){
                document.getElementById("skipButton").innerText = "Skip (+" + (songLimits[guessNum+1] - songLimits[guessNum]) + "s)"
            }else{
                document.getElementById("skipButton").innerText = "Give Up"
            }
        }
    }
}
// 0 -> Lost 1-> Win
function endOfGame(status){
    var message = ""
    if(isDone){
        ls.setItem("lead-played", parseInt(ls.getItem("lead-played")) + 1)
    }
    if(status == 0){
        message = "Ah, so close! Try again tomorrow!"
        if(isDone){
            ls.setItem("lead-streak", 0)
            guessStats[6]++
        }
    }else if(status == 1){
        if(isDone){
            let streak = parseInt(ls.getItem("lead-streak")) + 1
            ls.setItem("lead-streak", streak)

            if(streak > parseInt(ls.getItem("lead-maxStreak"))){
                ls.setItem("lead-maxStreak", streak)
            }

            ls.setItem("lead-correct", parseInt(ls.getItem("lead-correct")) + 1)

            guessStats[guessNum-1]++
        }
        message = "Nice job! Can you do it again tomorrow??"
    }
    
    if(isDone){
        ls.setItem("lead-guessStats", JSON.stringify(guessStats))
    }
    updateStats()
    document.getElementById("top").innerHTML = `
        <h2 class="text-light text-center">${message}</h2>
        <br>
        <br>
        <h4 class="text-light text-center">Share your results with friends!</h4>
        <div class="mx-auto text-center"><button id="shareButton" onclick="shareResults()" class="text-center text-light btn btn-success">Share!</button></div>
        <p id="copySuccess" class="text-light text-center"></p>
        <br>
        <br>
        <h2 class="text-light text-center">Today's Song:</h2>
        <h2 class="text-light text-center">${songs[offset].title}</h2>
        <iframe class="fixed-bottom" name="130" id="soundcloudPlayer" allow="autoplay" width = "100%" height="200px" src="https://w.soundcloud.com/player/?url=${songs[offset].url}&amp;show_teaser=false&amp;cache=130&amp;auto_play=true&amp;buying=false&amp;sharing=false&amp;download=false&amp;show_playcount=false&amp;show_user=false&amp;"></iframe>
    `;
}

var ls = window.localStorage

function setGuess(song, status){
    ls.setItem("guessNum", guessNum)
    guesses[guessNum-1] = song
    if(status == 0 || status == 1){
        ls.setItem("isDone", status)
        isDone = true
        endOfGame(status)
    }else if(guessNum < 6){
        
        if(guessNum == 1){
            ls.setItem("isStarted", "true")
        }
    }
    ls.setItem("guesses", JSON.stringify(guesses))

}

// Local Storage setup upon page load
if((ls.getItem("currentSong") != null) && (ls.getItem("currentSong") === songs[offset].title)){

    if((ls.getItem("isDone") === "0") || (ls.getItem("isDone") === "1")){
        endOfGame(parseInt(ls.getItem("isDone")))
        guesses = JSON.parse(ls.getItem("guesses"))
        guessNum = parseInt(ls.getItem("guessNum"))
    }else if(ls.getItem("isStarted") == "true"){
        guesses = JSON.parse(ls.getItem("guesses"))
        guessNum = parseInt(ls.getItem("guessNum"))
        updateGuesses(guesses, guessNum)
        
        if(guessNum < 5){
            document.getElementById("skipButton").innerText = "Skip (+" + (songLimits[guessNum+1] - songLimits[guessNum]) + "s)"
        }else{
            document.getElementById("skipButton").innerText = "Give Up"
        }
        maxPos = songLimits[guessNum] * 1000
        document.getElementById("progress_max").innerHTML = songLimits[guessNum]
    }
}else{
    ls.setItem("currentSong", songs[offset].title)
    ls.setItem("isDone", -1)
    ls.setItem("guesses", JSON.stringify(guesses))
    ls.setItem("isStarted", "false")
    ls.setItem("guessNum", 0)
}

function updateGuesses(guesses, num){
    

    for(let i = 0; i < num; i++){
        let song = guesses[i]
        
        if(guesses[i] === "Skipped"){
            var guessBox = document.getElementById("guess" + (i+1))
            guessBox.innerHTML = '<span><i class="fa-solid fa-minus text-secondary"></i>  <span class="text-light">Skipped<span></span>'
        }else{
            var guessBox = document.getElementById("guess" + (i+1))
            guessBox.innerHTML = '<span><i class="fa-solid fa-x text-danger"></i><span class="text-light"> ' + song + '<span></span>'
        }
    }
}

// Leaderboard Setup upon page load
// console.log(ls.getItem("lead-played"))
if(ls.getItem("lead-played") === null){
    console.log(ls.getItem("lead-played"))
    ls.setItem("lead-played", 0)
    ls.setItem("lead-streak", 0)
    ls.setItem("lead-maxStreak", 0)
    ls.setItem("lead-correct", 0)
    ls.setItem("lead-guessStats", JSON.stringify(guessStats))
}else{
    updateStats()
}
createChart()


function updateStats(){
    document.getElementById("playedStat").innerHTML= ls.getItem("lead-played")
    console.log("Updating!")
    let percent = ((parseInt(ls.getItem("lead-correct")) / parseInt(ls.getItem("lead-played"))) * 100).toFixed(1)
    document.getElementById("percentStat").innerHTML = (percent + "%")
    document.getElementById("streakStat").innerHTML = ls.getItem("lead-streak")
    document.getElementById("maxStat").innerHTML = ls.getItem("lead-maxStreak")
    guessStats = JSON.parse(ls.getItem("lead-guessStats"))
    createChart()
}

function createChart(){
    var xValues = ["1", "2", "3", "4", "5", "6", "X"];
    var yValues = guessStats;
    var barColors = ["green", "green","green","green","green", "green", "red"];

    new Chart("myChart", {
        base: 0,
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            legend: {display: false},
            title: {
            display: true,
            text: "All Time Guess Distribution"
            },
            base: 0,
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                        // OR //
                        beginAtZero: true,   // minimum value will be 0.
                        stepSize: 1,
                        suggestedMax: 1
                    }
                }]
            }
        }
    });
}


function shareResults(){
    console.log(guesses)
    var copyText = "Bollydle #" + offset + "\n"
    for(let i = 0; i < guessNum; i++){
        if(guesses[i] === "Skipped"){
            copyText += "⬛"
        }
        // else if(guesses[i] === ""){
        //     copyText += "⬜"
        // }
        else if(guesses[i] === songs[offset].title){
            copyText += "🟩"
        }else{
            copyText += "🟥"
        }
    }

    if(ls.getItem("isDone") === "0"){
        copyText += "❌\n"
    }else if(ls.getItem("isDone") === "1"){
        copyText += "✔️\n"
    }

    copyText += "http://bollydle.bawa.io\n"

    navigator.clipboard.writeText(copyText);
    document.getElementById("copySuccess").innerHTML = "Results Copied to Clipboard!"
}