export default class Resizer {
    
    pressure = false

    constructor(resizer, viewportIframe) {
        this.viewport = document
        this.resizer = resizer
        this.viewportIframe = viewportIframe
        this.iframeContainer = document.querySelector('.iframe-container')

        this.iframe = document.querySelector('.iframe')
        
        window.onload = () => {
            this.handleIframeHeight()
        }

        this.resizer.addEventListener('mouseup', (e) => this.mouseUp(e))
        this.resizer.addEventListener('mousedown', (e) => this.mouseDown(e))

        this.viewport.addEventListener('mousemove', (e) => this.mouseMove(e))
        this.viewport.addEventListener('mouseup', (e) => this.mouseUp(e))
    }

    handleEvent(e) {
        e.preventDefault()
        e.stopPropagation()
    }

    mouseUp(e) {
        this.handleEvent(e)
        this.pressure = false
        this.iframeContainer.style = 'pointer-events: unset'
        document.querySelector('html').style = 'cursor: default'

    }

    mouseDown(e) {
        this.handleEvent(e)
        this.pressure = true
    }

    mouseMove(e) {
        this.handleEvent(e)
        if (this.pressure && e.pageX > 400) {
            this.handleIframeHeight()
            this.iframeContainer.style = 'pointer-events: none'
            document.querySelector('html').style = 'cursor: ew-resize'
            this.viewportIframe.style.width = e.pageX + 'px'
        }
    }

    handleIframeHeight() {
        this.iframeHeight = document.querySelector('.iframe').contentDocument.body.scrollHeight
        this.iframe.style.height = this.iframeHeight + 'px'
    }


}