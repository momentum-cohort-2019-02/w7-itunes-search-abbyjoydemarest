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
                console.log()
                song.classList.add('song')
                songDetails.classList.add('song-details')
                albumCover.classList.add('cover-image')

                //define all variables wanted from json
                let artistName = artistMusicData.results[idx].artistName
                let cover = artistMusicData.results[idx].artworkUrl30
                let songName = artistMusicData.results[idx].trackName
                console.log('artistName', artistName);
                console.log('cover', cover);
                console.log('songName', songName);
                //enter those variables into the song div via the songDetails Div or albumCover div
                songDetails.innerText = artistName + songName; albumCover.innerHtml = `<img src="${cover}"`
                //query("#artist-name").innerHTML = artistName
                //query("#artwork").innerHTML = `<img src="${cover}>`
                //query("#track-name").innerHTML = songName
                //query("#song").innerHTML = `${songTrack}`
                console.log('songDetails', songDetails)
                console.log('albumCover', albumCover)
                song.appendChild(songDetails, albumCover)
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