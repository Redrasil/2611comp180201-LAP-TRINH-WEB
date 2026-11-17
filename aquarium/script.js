const aquarium = document.querySelector('.aquarium');
const motionButton = document.querySelector('.motion-button');
const feedButton = document.querySelector('.feed-button');
const foodZone = document.querySelector('.food-zone');

motionButton.addEventListener('click', () => {
    const paused = aquarium.classList.toggle('paused');
    motionButton.setAttribute('aria-pressed', String(!paused));
    motionButton.innerHTML = paused ? 'Bật chuyển động <span>▶</span>' : 'Tạm dừng chuyển động <span>Ⅱ</span>';
});

feedButton.addEventListener('click', () => {
    for (let index = 0; index < 12; index += 1) {
        const food = document.createElement('i');
        food.className = 'food';
        food.style.left = `${38 + Math.random() * 25}%`;
        food.style.top = `${10 + Math.random() * 8}%`;
        food.style.animationDelay = `${Math.random() * 0.8}s`;
        foodZone.appendChild(food);
        window.setTimeout(() => food.remove(), 3800);
    }
});
