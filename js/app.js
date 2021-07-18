import Viewport from './Viewport.js'

const wrapperRef = document.getElementById('wrapper')

new Viewport(
    wrapperRef
)

document.getElementById('code')
.innerText = `<div></div>`