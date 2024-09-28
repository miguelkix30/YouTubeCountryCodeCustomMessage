// ==UserScript==
// @name         YouTube Country Code Custom Message
// @namespace    http://github.com/miguelkix30/YouTubeCountryCodeCustomMessage/
// @version      1.0
// @description  Cambia el codigo de región a algo custom supongo...
// @author       Miguelki
// @icon         https://i.imgur.com/vIKEx2i.png
// @grant        none
// @match           *.youtube.com/*
// @match           https://www.youtube-nocookie.com/*
// @match           https://m.youtube.com/*
// @match           https://music.youtube.com/*
// @downloadURL https://raw.githubusercontent.com/miguelkix30/YouTubeCountryCodeCustomMessage/main/YTCCCM.user.js
// @updateURL https://raw.githubusercontent.com/miguelkix30/YouTubeCountryCodeCustomMessage/main/YTCCCM.user.js
// ==/UserScript==

(function() {
    // Edita esta lista para cambiar el texto que se muestra AVISO: SI ESTE SCRIPT SE ACTUALIZA SE BORRARÁN LOS CAMBIOS QUE HAYAS HECHO
    setTimeout(function() {
        let span = document.getElementById("country-code");
        var codes = [
            'HOLA',
            'Miguelki RULES!!!',
            'Fortnite',
            'Carmen es una zorra',
            'Me aburro',
            'MateoGay',
            'Racist',
            'Nigger',
            'Josefas War Thunder',
            'PornHub',
            'Josefa puto gordo',
            '🤑🤑🤑',
            'MateoGay',
            'Miguelillo fucking roleplayer',
            'Dixo maricón',
            'Real Madrid da sida',
            'Tetas',
            'Tu madre',
            'Nada',
            'MC Launcher',
            'Dropshipping master'
        ];

        // Guarda el valor original del elemento
        var valorOriginal = span.innerHTML;

        // Realiza la comparación cada 3 segundos
        setInterval(function() {
                if (valorOriginal !== ' ES') {
                var numeroRandom = Math.floor(Math.random() * codes.length);
                span.innerHTML = codes[numeroRandom];
                }
        }, 3000);
    }, 50);
})();