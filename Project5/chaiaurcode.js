// generate a random color

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;

const startBgColor = () => {
    if (!intervalId) {
        intervalId = setInterval(changeBg, 1000);
    }
    function changeBg() {
        document.body.style.backgroundColor = randomColor();
    }
}
const stopBgColor = () => {
    clearInterval(intervalId);
    intervalId = null;
}

document.getElementById('start').addEventListener('click', startBgColor);
document.getElementById('stop').addEventListener('click', stopBgColor);

