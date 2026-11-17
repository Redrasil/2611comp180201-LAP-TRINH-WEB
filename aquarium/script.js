const aquarium = document.querySelector('.aquarium');
const motionButton = document.querySelector('.motion-button');
const soundButton = document.querySelector('.sound-toggle');

motionButton.addEventListener('click', () => {
    const paused = aquarium.classList.toggle('paused');
    motionButton.setAttribute('aria-pressed', String(!paused));
    motionButton.innerHTML = paused ? 'Bật chuyển động <span>▶</span>' : 'Tạm dừng chuyển động <span>Ⅱ</span>';
});

soundButton.addEventListener('click', () => {
    const enabled = soundButton.getAttribute('aria-pressed') !== 'true';
    soundButton.setAttribute('aria-pressed', String(enabled));
    soundButton.textContent = `Âm thanh: ${enabled ? 'bật' : 'tắt'}`;
});
