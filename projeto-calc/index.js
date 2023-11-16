import calculate from "./js/calculate.js"
import copyToClipBoard from "./js/copyToClipBoard.js"
import { handleButtonClear, handleButtonPress, handleTyping } from "./js/keyHandlers.js"
import themeSwitch from "./js/themeSwitch.js"

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', handleButtonClear)

document.getElementById('input').addEventListener('keydown', handleTyping)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', copyToClipBoard)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitch)