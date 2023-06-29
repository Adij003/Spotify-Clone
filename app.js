console.log('Welcome ho aap');

let songIndex = 0;
let audioElement = new Audio('songs/Happy.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let smallSongPlay = document.getElementsByClassName('songItemPlay');
// let Song_ka_name = document.getElementsByClassName('songName');

let songs = [
    {songName: "Count On Me", filePath: "songs/count_On_Me.mp3", coverImage: "img/count_on_me.jpeg"},
    {songName: "Happy.mp3", filePath: "songs/Happy.mp3", coverImage: "img/happy.jpg"},
    {songName: "Dark_Horse.mp3", filePath: "songs/Dark_Horse.mp3", coverImage: "img/dark_horse.jpg"},
    {songName: "Youre_Beautiful.mp3", filePath: "songs/Youre_Beautiful.mp3", coverImage: "img/youre_beautiful.jpg"},
]

songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverImage;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;


});

//play/pause
// audioElement.play();    
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = '1'
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = '0'

    }
    
})

// updating seekbar
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseFloat((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

function makeAllPlay(){
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlay();
        
        index = parseInt(e.target.id);
        // audioElement.src = 'songs/${index}';
        audioElement.src = `songs/${index}`;

        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            element.classList.remove('fa-circle-play');
            element.classList.add('fa-circle-pause');
        }
        else{
            audioElement.pause();
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        }
    
    })
})



// what it does is for each element in class songItemPlay it adds am event listener to element which is activated on click and then it prints which element was clicked