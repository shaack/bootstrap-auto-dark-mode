/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/bootstrap-auto-dark-mode
 * License: MIT, see file 'LICENSE'
 */

;(function () {
    function updateTheme() {
        document.querySelector("html").setAttribute("data-bs-theme",
            window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme)
    updateTheme()
})()
