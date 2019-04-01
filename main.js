/* globals fetch */

function query(selector) {
    return document.querySelector(selector);
}
function queryAll(selector) {
    return document.querySelectorAll(selector);
}

function getArtistMusic(artistInput) {
    console.log("work?2");
    return fetch(`https://itunes-api-proxy.glitch.me/search?term=${artistInput}`)
        .then(function (response) {
            if (!response.ok) {
                console.log("work?3");
                throw Error(response.statusText);
            }
            console.log("work?4");
            return response.json();
        });
}
function updateArtistMusic(artistInput) {
    getArtistMusic(artistInput)
        .then(function (artistMusicData) {
            console.log(artistMusicData);
            const listOfSongsDiv = document.getElementById('list-of-songs')
            listOfSongsDiv.innerHtml = ""
            let idx;
            for (idx = 0; idx < artistMusicData.results.length; idx++){
                //AJ Bryce: create div with other divs in it to show all songs/info fir artist
                const song = document.createElement('div')
                const songDetails = document.createElement('div') 
                const albumCover = document.createElement('div') 
                const playSong = document.createElement('div')
                console.log()
                song.classList.add('song')
                songDetails.classList.add('song-details')
                albumCover.classList.add('cover-image')
                playSong.classList.add('playAudio')

                //define all variables wanted from json
                let artistName = artistMusicData.results[idx].artistName
                let coverImg = artistMusicData.results[idx].artworkUrl60
                let songName = artistMusicData.results[idx].trackName
                let songURL = artistMusicData.results[idx].previewUrl
                console.log('artistName', artistName);
                console.log('coverImg', coverImg);
                console.log('songName', songName);
                console.log('songURL', songURL);
                //enter those variables into the song div via the songDetails Div or albumCover div
                let songAudio = new Audio(songURL)
                console.log('songAudio', songAudio);
                playSong.addEventListener('click', function () {
                    songAudio.play()
                })
                playSong.innerHTML = `<audio controls="controls">
                <source src="${songURL}" type="audio/ogg"/>
                <source src="${songURL}" type="audio/mpeg"/>
                Your browser does not support playing an audio element. </audio>`
                songDetails.innerHTML = `<ul class="song-info"><li class="artist-name"><strong class="a-name">${artistName} |</strong></li><li class="song-name"><strong class="s-name">${songName}</strong></li></ul>`; albumCover.innerHTML = `<div class="cover-image-inner"><img class="cover-image-inner" src="${coverImg}"></div>`
                //query("#artist-name").innerHTML = artistName
                //query("#artwork").innerHTML = `<img src="${cover}>`
                //query("#track-name").innerHTML = songName
                //query("#song").innerHTML = `${songTrack}`
                console.log('songDetails', songDetails)
                console.log('albumCover', albumCover)
                console.log('playSong', playSong)
                song.append(albumCover, songDetails, playSong)
                console.log('song', song)
                listOfSongsDiv.append(song)
                console.log('listOfSongsDiv', listOfSongsDiv)
            }
            })
            }


document.addEventListener("DOMContentLoaded", function () {
    console.log("work?7");


    query("#artist").addEventListener("change", function (event) {
        updateArtistMusic(event.target.value);
        console.log("work?8");
    })
});
//transform: rotate(10deg);