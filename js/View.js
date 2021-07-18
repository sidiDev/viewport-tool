export default class View {


    constructor(wrapper, srcCode) {
        this.wrapper = wrapper
        this.srcDoc = srcCode.replace(/"/g, "'").replace(/#/g, "/")
        this.wrapper.innerHTML = `
            <div class="wrapper-container">
                <div class="bg-blue-100 text-blue-600 flex p-4 mb-3 rounded-md border-l-4 border-blue-600 md:hidden">
                    <div class="w-6 h-6 mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p>Please try to browse this page on Desktop or Labtop to get better experience !</p>
                </div>
                <div class="bg-gray-200 hover:bg-gray-300 border-2 border-gray-200 hover:border-gray-300 inline-block rounded-md mb-2 controller">
                    <div class="flex">
                        <button class="bg-white focus:outline-none p-1.5 px-2 flex items-center flex-1 rounded-md text-sm previewBtn">
                            <svg width="20" height="20" fill="none" class="mx-1 lg:mr-2 text-indigo-500 text-gray-500">
                                <path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <circle cx="10" cy="10" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                            </svg>
                            Preview
                        </button>
                        <button class="focus:outline-none p-1.5 px-2 flex items-center flex-1 rounded-md text-sm codeBtn">
                            <svg width="20" height="20" fill="none" class="mx-1 lg:mr-2 text-gray-500 group-hover:text-gray-900">
                                <path d="M13.75 6.75l3.5 3.25-3.5 3.25M6.25 13.25L2.75 10l3.5-3.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            Code
                        </button>
                    </div>
                    </div>
                    <div class="float-right relative">
                        <button class="bg-white rounded-md text-indigo-600 p-2 border focus:ring-2 ring-indigo-600 ring-offset-1 focus:outline-none copy-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 copy" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden copy-succeed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </button>
                    </div>
                    <div class="viewport w-full bg-gray-500 border rounded-md mt-3">
                        <div class="viewport-iframe bg-white relative overflow-hidden" style="max-width: 100%; width: auto">
                            <div class="flex-grow iframe-container mr-4">
                                <iframe class="w-full iframe" srcDoc="<!DOCTYPE html>
                                <html lang='en'>
                                <head>
                                    <meta charset='UTF-8'>
                                    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                                    <link rel='stylesheet' href='tailwind.min.css'>
                                </head>
                                <body>
                                    ${this.srcDoc}
                                    
                                    <script>
                                        const links = document.querySelectorAll('a')
                                        links.forEach(e => e.setAttribute('target', '_top'))
                                    </script>
                                </body>
                                </html>"></iframe>
                            </div>
                            <div class="resizer bg-gray-200 flex items-center h-full absolute top-0 right-0" style="cursor: ew-resize;" id="resizer">
                                <svg class="h-4 w-4 text-gray-600 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                <div class="code bg-gray-900 rounded-md hidden">
                    <pre class="language-markup cursor-text" style="background: none;"><code class="language-markup" id="code"></code></pre>
                </div>
            </div>
        `
        const codeEL = this.wrapper.querySelector('.wrapper-container .code pre code')
        codeEL.textContent = this.srcDoc

        const controller = this.wrapper.querySelectorAll('.wrapper-container button')
        const code = this.wrapper.querySelector('.wrapper-container .code')
        const viewport = this.wrapper.querySelector('.wrapper-container .viewport')
        const previewBtn = controller[0]
        const codeBtn = controller[1]

        previewBtn.addEventListener('click', () => {
            this.switchToPreview(previewBtn, codeBtn, viewport, code)
        })
        codeBtn.addEventListener('click', () => {
            this.switchToCode(previewBtn, codeBtn, viewport, code)
        })

        const copySucceed = document.querySelector('.copy-succeed')
        const copy = document.querySelector('.copy')

        document.querySelector('.copy-btn')
        .onclick = () => {
            const textare = document.createElement('textarea')
            textare.textContent = this.srcDoc
            document.body.append(textare)
            textare.select()
            document.execCommand('copy')
            textare.remove()

            copy.classList.add('hidden')
            copySucceed.classList.remove('hidden')
        }

        setInterval(() => {
            copy.classList.remove('hidden')
            copySucceed.classList.add('hidden')
        }, 1000)
        
    }

    switchToCode(previewBtn, codeBtn, viewport, code) {
        codeBtn.querySelector('svg').classList.add('text-indigo-500')
        codeBtn.classList.add('bg-white')
        previewBtn.querySelector('svg').classList.remove('text-indigo-500')
        previewBtn.classList.remove('bg-white')

        viewport.classList.add('hidden')
        code.classList.remove('hidden')
    }

    switchToPreview(previewBtn, codeBtn, viewport, code) {

        previewBtn.querySelector('svg').classList.add('text-indigo-500')
        previewBtn.classList.add('bg-white')
        codeBtn.querySelector('svg').classList.remove('text-indigo-500')
        codeBtn.classList.remove('bg-white')

        code.classList.add('hidden')
        viewport.classList.remove('hidden')
    }
}