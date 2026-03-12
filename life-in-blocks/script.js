const grid = document.getElementById('life-grid');
const birthInput = document.getElementById('birth-date');
const generateBtn = document.getElementById('generate-btn');

const YEARS_LIMIT = 82; // Esperanza media en occidente
const WEEKS_LIMIT = YEARS_LIMIT * 52;

generateBtn.onclick = () => {
    const birthDate = new Date(birthInput.value);
    if (isNaN(birthDate)) return;

    renderGrid(birthDate);
    document.getElementById('setup-screen').classList.add('hidden');
    grid.classList.remove('hidden');
    document.getElementById('impact-panel').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function renderGrid(birthDate) {
    grid.innerHTML = '';
    const now = new Date();
    
    // Calcular semanas vividas
    const diffInMs = now - birthDate;
    const weeksLived = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));

    for (let i = 0; i < WEEKS_LIMIT; i++) {
        const block = document.createElement('div');
        block.className = 'block';

        if (i < weeksLived) {
            block.classList.add('lived');
        }

        grid.appendChild(block);
    }

    document.getElementById('weeks-lived').innerText = weeksLived.toLocaleString();
    document.getElementById('weeks-left').innerText = (WEEKS_LIMIT - weeksLived).toLocaleString();
}