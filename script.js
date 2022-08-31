let body = document.querySelector("body")

window.onload = function () {
    setTimeout(function () {
        body.classList.add('loaded')
        
        Draggable.create('.result', {
            bounds: 'body',
            inertia: true
        })
    }, 800)
}