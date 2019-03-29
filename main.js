/* globals fetch */
console.log('work?');

function getArtistMusic() {
    console.log('work?2')
    return fetch(`https://itunes-api-proxy.glitch.me/search?term=jack+johnson`)
        .then(function (response) {
            if (!response.ok) {
                console.log('work?3')
                throw Error(response.statusText);
            }
            console.log('work?4');
            return response.json()
        });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('work?5')
    getArtistMusic()
        .then(function (artistMusicData) {
            console.log(artistMusicData)
            let idx
            for (idx = 0; idx < artistMusicData.results.length; idx++){
                const artist = artistMusicData.results[idx].artistName
                document.querySelector('#artist-name').innerHTML = artist
                const coverPhoto = artistMusicData.results[idx].artworkUrl30
                document.querySelector('#image-url').innerHTML = coverPhoto
                const trackName = artistMusicData.results[idx].trackName
                document.querySelector('#track-name').innerHTML = trackName
                    console.log(artist, 'yes')
                    console.log('work?6')
            }


            })
        console.log('work?7')
})
console.log('work?8')