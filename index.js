const axios = require("axios")
const urls = ["https://fvckboy.glitch.me", "https://bot-paw-arka.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
