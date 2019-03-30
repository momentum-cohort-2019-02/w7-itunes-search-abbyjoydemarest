/* globals fetch */
console.log('work?');
function query(selector) {
    return document.querySelector(selector)
}
function queryAll(selector) {
    return document.querySelectorAll(selector)
}

function getArtistMusic(artistInput) {
    console.log('work?2')
    return fetch(`https://itunes-api-proxy.glitch.me/search?term=${artistInput}`)
        .then(function (response) {
            if (!response.ok) {
                console.log('work?3')
                throw Error(response.statusText);
            }
            console.log('work?4');
            return response.json()
        });
}
function updateArtistMusic(artistInput) {
    getArtistMusic(artistInput)
        .then(function (artistMusicData) {
            console.log(artistMusicData)
            let idx
            for (idx = 0; idx < artistMusicData.results.length; idx++){
                const artist = artistMusicData.results[idx].artistName
                query('#artist-name').innerHTML = artist
                const coverPhoto = artistMusicData.results[idx].artworkUrl30
                query('#image-url').innerHTML = coverPhoto
                const trackName = artistMusicData.results[idx].trackName
                query('#track-name').innerHTML = trackName
                    console.log(artist, 'work?5')
                    console.log('work?6')
            }

            })
            }


document.addEventListener('DOMContentLoaded', function () {
    console.log('work?7')


query('#artist').addEventListener('change', function (event) {
    updateArtistMusic(event.target.value)
    console.log('work?8')
}) 
})
