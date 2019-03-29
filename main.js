/* globals fetch */


document.addEventListener('DOMContentLoad', function () {
    fetch('https://itunes-api-proxy.glitch.me/search?term=jack/johnson')
        .then(function (response) {
            if (!response.ok) {
                throw Error(reponse.statusText)
            }
            return response.json()
        }).then(function (json) {
            console.log(json)
        }).catch(function (error) {
            console.log('Looks like there was a problem...boo', error)
        })
})