/* globals fetch */
console.log('work?')

function getArtistMusic() {
    console.log('work?2')
    return fetch(`https://itunes-api-proxy.glitch.me/search?term=jack+johnson`)
        .then(function (response) {
            if (!response.ok) {
                console.log('work?3')
                throw Error(response.statusText)
            }
            console.log('work?4')
            return response.json()
        })
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('work?5')
    getArtistMusic()
        .then(function (json) {
            console.log('work?6')
            console.log(json)
        })
        console.log('work?7')
})
console.log('work?8')