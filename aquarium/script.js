const aquarium = document.querySelector('.aquarium');
const motionButton = document.querySelector('.motion-button');
const feedButton = document.querySelector('.feed-button');
const foodZone = document.querySelector('.food-zone');
const speedButtons = document.querySelectorAll('[data-speed]');
const aquariumStatus = document.querySelector('#aquarium-status');

motionButton.addEventListener('click', () => {
    const paused = aquarium.classList.toggle('paused');
    motionButton.setAttribute('aria-pressed', String(!paused));
    motionButton.innerHTML = paused ? 'Bật chuyển động <span>▶</span>' : 'Tạm dừng chuyển động <span>Ⅱ</span>';
    aquariumStatus.textContent = paused ? 'Chuyển động đã tạm dừng' : '9 sinh vật đang bơi';
});

feedButton.addEventListener('click', () => {
    aquariumStatus.textContent = 'Đang cho cá ăn...';
    for (let index = 0; index < 12; index += 1) {
        const food = document.createElement('i');
        food.className = 'food';
        food.style.left = `${38 + Math.random() * 25}%`;
        food.style.top = `${10 + Math.random() * 8}%`;
        food.style.animationDelay = `${Math.random() * 0.8}s`;
        foodZone.appendChild(food);
        window.setTimeout(() => food.remove(), 3800);
    }
    window.setTimeout(() => {
        if (!aquarium.classList.contains('paused')) {
            aquariumStatus.textContent = '9 sinh vật đang bơi';
        }
    }, 3800);
});

aquarium.addEventListener('click', (event) => {
    if (event.target.closest('button')) {
        return;
    }

    const aquariumBox = aquarium.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'water-ripple';
    ripple.style.left = `${event.clientX - aquariumBox.left - 12}px`;
    ripple.style.top = `${event.clientY - aquariumBox.top - 12}px`;
    aquarium.appendChild(ripple);
    window.setTimeout(() => ripple.remove(), 1500);
});

speedButtons.forEach((button) => {
    button.addEventListener('click', () => {
        speedButtons.forEach((speedButton) => speedButton.classList.remove('active'));
        button.classList.add('active');
        aquarium.classList.remove('speed-slow', 'speed-fast');
        if (button.dataset.speed !== 'normal') {
            aquarium.classList.add(`speed-${button.dataset.speed}`);
        }
        const speedName = button.dataset.speed === 'slow' ? 'Tốc độ chậm' : button.dataset.speed === 'fast' ? 'Tốc độ nhanh' : 'Tốc độ bình thường';
        aquariumStatus.textContent = speedName;
    });
});
