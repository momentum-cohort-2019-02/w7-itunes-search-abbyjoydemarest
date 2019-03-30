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
function updateArtistMusic(artistiInput) {
    getArtistMusic(artistInput)
        .then(function (artistMusicData) {
            console.log(artistMusicData)
            let idx
            for (idx = 0; idx < artistMusicData.results.length; idx++){
                const artist = artistMusicData.results[idx].artistName
                document.query('#artist-name').innerHTML = artist
                const coverPhoto = artistMusicData.results[idx].artworkUrl30
                document.query('#image-url').innerHTML = coverPhoto
                const trackName = artistMusicData.results[idx].trackName
                document.query('#track-name').innerHTML = trackName
                    console.log(artist, 'yes')
                    console.log('work?6')
            }

            })
            }


document.addEventListener('DOMContentLoaded', function () {
    console.log('work?5')
})
document.query('#artist-input').addEventListener('change', function (event) {
    updateAritistMusic(event.target.value)
})
console.log('work?8')