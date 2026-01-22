function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    const starCount = 30;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 3 + 2;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animation = `twinkle ${duration}s ease-in-out infinite`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(star);
    }
}

window.onload = createStars;
const lyrics = [
    { time: 0.1, text: "When all I dream of is your eyes" },
    { time: 4.5, text: "All I long for is your touch" },
    { time: 8.3, text: "And, darlin', something tells me that's enough" },
    { time: 15.0, text: "You can say that I'm a fool" },
    { time: 18.5, text: "And I don't know very much" },
    { time: 22.0, text: "But I think they call this love" },
    { time: 28.5, text: "This belongs to you ❤️" }
];

function nextSection() {
    const music = document.getElementById('bg-music');
    const textElement = document.getElementById('lyric-text');
    const videoElement = document.getElementById('final-video');

    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.remove('hidden');

    music.play();

    let lastIndex = -1;
    music.ontimeupdate = () => {
        const currentTime = music.currentTime;
        
        let currentIndex = lyrics.findLastIndex(l => currentTime >= l.time);

        if (currentIndex !== -1 && currentIndex !== lastIndex) {
            lastIndex = currentIndex;
            textElement.innerText = lyrics[currentIndex].text;

            textElement.classList.remove('animate-smooth');
            void textElement.offsetWidth; 
            textElement.classList.add('animate-smooth');

            if (currentIndex === lyrics.length - 1) {
                videoElement.classList.remove('hidden');
                videoElement.play();
            }
        }
    };
}