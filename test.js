// console.log('Welcome ho aap');

let songIndex = 0;
let audioElement = new Audio('songs/count_On_Me.mp3');
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
    // console.log(element, i);
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
        makeAllPlay();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = '0'

    }
    
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

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         console.log(e.target);
//         makeAllPlay();
        
//         index = parseInt(e.target.id);
//         // audioElement.src = 'songs/${index}';
//         audioElement.src = `songs/${index}`;

//         if(audioElement.paused || audioElement.currentTime<=0){
//             audioElement.play();
//             element.classList.remove('fa-circle-play');
//             element.classList.add('fa-circle-pause');
//         }
//         else{
//             audioElement.pause();
//             element.classList.remove('fa-circle-pause');
//             element.classList.add('fa-circle-play');
//         }
    
//     })
// })

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
      
      
  
      songIndex = parseInt(e.target.id); // Get the index from the clicked element's ID
      let selectedSong = songs[songIndex]; // Get the corresponding song from the 'songs' array
          
      audioElement.src = selectedSong.filePath; // Set the 'src' based on the song's file path
      audioElement.currentTime = 0;
  
      if (element.classList.contains('fa-circle-play')) {
        audioElement.play();
        makeAllPlay(); 
        console.log('If statement is true');
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
      } 
    else
     {
        audioElement.pause();
        console.log('else statement is true');
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
      }
    });
  });

  document.getElementsByClassName('next')[0].addEventListener('click', ()=>{
    if(songIndex > 3){
        songIndex = 0;
    }
    else{
        songIndex++;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementsByClassName('previous')[0].addEventListener('click', ()=>{
    if(songIndex < 0){
        songIndex = 3;
    }
    else{
        songIndex--;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
  

// what it does is for each element in class songItemPlay it adds am event listener to element which is activated on click and then it prints which element was clicked

// updating seekbar
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    progress = parseFloat((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    progressBar.value = progress;
})