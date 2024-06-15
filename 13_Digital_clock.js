setInterval(() => {
    d = new Date()
    document.getElementById('time').innerHTML = d.toLocaleTimeString();
    // time.innerHTML = d
}, 1000);