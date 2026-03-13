const keywords = [
    "background", "background-color", "width", "height", "border", "border-radius", 
    "box-shadow", "transform", "opacity", "filter", "blur", "solid", "inset",
    "rotate", "scale", "skewX", "skewY", "translateX", "translateY", "grayscale", "brightness",
    "linear-gradient", "radial-gradient", "rgba", "rgb", "none"
];

// NIVELES DETALLADOS Y VARIADOS (30 retos)
const levels = [
    // 1-5: BÁSICOS: Dimensiones, Color, Bordes
    { title: "El Bloque Rojo", hint: "Un cuadrado simple.", info: "Color: red", target: { background: "red", width: "100px", height: "100px" } },
    { title: "Círculo Esmeralda", hint: "Hazlo perfectamente redondo.", info: "Color: #2ecc71", target: { background: "#2ecc71", width: "120px", height: "120px", borderRadius: "50%" } },
    { title: "Rectángulo Índigo", hint: "Ancho y alto diferentes.", info: "Color: indigo", target: { background: "indigo", width: "180px", height: "80px" } },
    { title: "Marco Dorado", hint: "Un borde sólido alrededor.", info: "Fondo: black; Borde: 8px solid gold", target: { background: "black", width: "100px", height: "100px", border: "8px solid gold" } },
    { title: "Píldora Azul", hint: "Forma de pastilla.", info: "Color: steelblue", target: { background: "steelblue", width: "200px", height: "60px", borderRadius: "30px" } },

    // 6-10: RADIOS DE BORDE AVANZADOS
    { title: "Esquina Redondeada", hint: "Solo una esquina suave.", info: "Fondo: chocolate; Radio superior izquierdo: 50px", target: { background: "chocolate", width: "100px", height: "100px", borderTopLeftRadius: "50px" } },
    { title: "Hoja Extraña", hint: "Radios opuestos asimétricos.", info: "Fondo: olive; Radios: 0 50px", target: { background: "olive", width: "100px", height: "100px", borderRadius: "0 50px" } },
    { title: "Huevo", hint: "Radios elípticos complejos.", info: "Fondo: beige; Radios: 50% / 60% 60% 40% 40%", target: { background: "beige", width: "100px", height: "140px", borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" } },
    { title: "Círculo Interno", hint: "Solo un borde circular, sin fondo.", info: "Borde: 12px solid purple", target: { background: "transparent", width: "100px", height: "100px", border: "12px solid purple", borderRadius: "50%" } },
    { title: "Pastilla Slim", hint: "Muy alargada.", info: "Fondo: gray; Ancho: 250px; Alto: 20px", target: { background: "gray", width: "250px", height: "20px", borderRadius: "10px" } },

    // 11-15: TRANSFORMACIONES BÁSICAS
    { title: "Diamante", hint: "Usa `transform: rotate()`.", info: "Fondo: crimson; Rotación: 45deg", target: { background: "crimson", width: "100px", height: "100px", transform: "rotate(45deg)" } },
    { title: "Inclinado X", hint: "Usa `transform: skewX()`.", info: "Fondo: teal; Skew: 20deg", target: { background: "teal", width: "120px", height: "80px", transform: "skewX(20deg)" } },
    { title: "Duplicado", hint: "Usa `transform: scaleX(-1)`.", info: "Fondo: mediumvioletred", target: { background: "mediumvioletred", width: "100px", height: "100px", transform: "scaleX(-1)" } },
    { title: "Más Pequeño", hint: "Usa `transform: scale()`.", info: "Fondo: darkgreen; Escala: 0.8", target: { background: "darkgreen", width: "100px", height: "100px", transform: "scale(0.8)" } },
    { title: "Desplazado", hint: "Usa `transform: translateX()`.", info: "Fondo: peru; Desplazamiento: 30px", target: { background: "peru", width: "100px", height: "100px", transform: "translateX(30px)" } },

    // 16-20: SOMBRAS Y OPACIDAD
    { title: "Flotante", hint: "Una sombra sutil.", info: "Fondo: white; Sombra: 0 10px 15px rgba(0,0,0,0.3)", target: { background: "white", width: "100px", height: "100px", boxShadow: "0 10px 15px rgba(0,0,0,0.3)" } },
    { title: "Botón Hundido", hint: "Usa `box-shadow: inset`.", info: "Fondo: lightgray; Sombra: inset 0 0 10px rgba(0,0,0,0.5)", target: { background: "lightgray", width: "140px", height: "50px", borderRadius: "10px", boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)" } },
    { title: "Fantasma", hint: "Hazlo semitransparente.", info: "Fondo: hotpink; Opacidad: 0.5", target: { background: "hotpink", width: "100px", height: "100px", opacity: "0.5" } },
    { title: "Marco Brillante", hint: "Borde y sombra combinados.", info: "Fondo: #000; Borde: 2px solid cyan; Sombra: 0 0 15px cyan", target: { background: "#000", width: "100px", height: "100px", border: "2px solid cyan", boxShadow: "0 0 15px cyan" } },
    { title: "Sombra Larga", hint: "Múltiples sombras.", info: "Fondo: #666; Sombra: 1px 1px black, 2px 2px black", target: { background: "#666", width: "100px", height: "100px", boxShadow: "1px 1px black, 2px 2px black, 3px 3px black" } },

    // 21-25: FILTROS Y EFECTOS VISUALES
    { title: "Desenfoque", hint: "Aplica un filtro `blur()`.", info: "Fondo: lime; Blur: 5px", target: { background: "lime", width: "100px", height: "100px", filter: "blur(5px)" } },
    { title: "Grayscale", hint: "Un filtro de escala de grises.", info: "Fondo: orange; Grayscale: 100%", target: { background: "orange", width: "100px", height: "100px", filter: "grayscale(100%)" } },
    { title: "Más Brillo", hint: "Un filtro de brillo.", info: "Fondo: yellow; Brillo: 150%", target: { background: "yellow", width: "100px", height: "100px", filter: "brightness(1.5)" } },
    { title: "Sombra y Blur", hint: "Combina sombra y filtro.", info: "Fondo: dodgerblue; Sombra y Blur: 0 0 20px 5px rgba(0,0,0,0.5), blur(3px)", target: { background: "dodgerblue", width: "100px", height: "100px", boxShadow: "0 0 20px 5px rgba(0,0,0,0.5)", filter: "blur(3px)" } },
    { title: "Transparencia con Borde", hint: "Opacidad y borde sólido.", info: "Fondo: rgba(255,0,0,0.7); Borde: 3px solid black", target: { background: "rgba(255,0,0,0.7)", width: "100px", height: "100px", border: "3px solid black" } },

    // 26-30: AVANZADOS Y COMBINADOS
    { title: "Sombra Interna Circular", hint: "Círculo con sombra que parece hundida.", info: "Fondo: #ddd; Sombra: inset 0 0 20px rgba(0,0,0,0.6)", target: { background: "#ddd", width: "120px", height: "120px", borderRadius: "50%", boxShadow: "inset 0 0 20px rgba(0,0,0,0.6)" } },
    { title: "Botón de Encendido", hint: "Borde redondo y brillo tenue.", info: "Fondo: #333; Borde: 2px solid lime; Sombra: 0 0 8px lime", target: { background: "#333", width: "60px", height: "60px", borderRadius: "50%", border: "2px solid lime", boxShadow: "0 0 8px lime" } },
    { title: "Tarjeta Volcada", hint: "Rotación y sombra compleja.", info: "Fondo: #f0f0f0; Rotación: -10deg; Sombra: 5px 5px 15px rgba(0,0,0,0.4)", target: { background: "#f0f0f0", width: "150px", height: "100px", transform: "rotate(-10deg)", boxShadow: "5px 5px 15px rgba(0,0,0,0.4)" } },
    { title: "Botón Futurista", hint: "Fondo, bordes, sombra y rotación.", info: "Fondo: #000; Borde: 2px solid #0ff; Sombra: 0 0 10px #0ff; Rotación: 5deg", target: { background: "#000", width: "160px", height: "70px", borderRadius: "8px", border: "2px solid #0ff", boxShadow: "0 0 10px #0ff", transform: "rotate(5deg)" } },
    { title: "Cubo 3D Plano", hint: "Múltiples sombras para profundidad.", info: "Fondo: #888; Sombras: 2px 2px #555, 4px 4px #444, 6px 6px #333", target: { background: "#888", width: "100px", height: "100px", boxShadow: "2px 2px #555, 4px 4px #444, 6px 6px #333" } },
];


let currentLevel = 0;
let activeSug = 0;

const editor = document.getElementById('editor');
const mirror = document.getElementById('textarea-mirror');
const suggestionsEl = document.getElementById('suggestions');
const targetEl = document.getElementById('target-element');
const userEl = document.getElementById('user-element');
const dynamicStyle = document.getElementById('dynamic-style');

function loadLevel(idx) {
    currentLevel = idx;
    const lvl = levels[idx];
    document.getElementById('level-indicator').innerText = `LVL: ${idx + 1}/${levels.length}`;
    document.getElementById('level-title').innerText = lvl.title;
    document.getElementById('hint').innerText = `PISTA: ${lvl.hint}`;
    document.getElementById('target-info').innerText = `DATO CRÍTICO: ${lvl.info}`;

    // Reset Visuals
    targetEl.removeAttribute('style');
    Object.assign(targetEl.style, lvl.target);
    
    // Reset editor content and trigger update
    editor.value = `.user-el {\n    \n}`;
    update();
    
    // Set cursor to the empty line for better UX
    setTimeout(() => {
        editor.focus();
        const emptyLinePos = editor.value.indexOf('\n') + 5;
        editor.setSelectionRange(emptyLinePos, emptyLinePos);
    }, 50);
}

function update() {
    dynamicStyle.innerHTML = editor.value;
    const score = validate();
    const fb = document.getElementById('feedback');
    fb.innerText = `COINCIDENCIA: ${score}%`;
    fb.style.color = score >= 90 ? "var(--success)" : "var(--accent)";
}

function validate() {
    const t = window.getComputedStyle(targetEl);
    const u = window.getComputedStyle(userEl);
    const targetProps = Object.keys(levels[currentLevel].target);
    let matches = 0;

    targetProps.forEach(p => {
        const cssP = p.replace(/([A-Z])/g, "-$1").toLowerCase();
        let vT = t.getPropertyValue(cssP).replace(/\s/g, "");
        let vU = u.getPropertyValue(cssP).replace(/\s/g, "");

        // Tolerancia para valores numéricos (px, deg, etc.)
        if (parseFloat(vT) && parseFloat(vU)) {
             if (Math.abs(parseFloat(vT) - parseFloat(vU)) < 5) { // 5px/deg de tolerancia
                 matches++;
                 return;
             }
        }
        
        // Comparación estricta para el resto (colores, none, etc.)
        if (vT === vU) matches++;
    });
    return Math.round((matches / targetProps.length) * 100);
}

// Seguimiento de cursor para sugerencias
function getCursorXY() {
    const textBefore = editor.value.substring(0, editor.selectionStart);
    mirror.textContent = textBefore;
    const marker = document.createElement('span');
    marker.textContent = "I"; // Un caracter para medir el cursor
    mirror.appendChild(marker);
    
    const rect = editor.getBoundingClientRect();
    let left = marker.offsetLeft + rect.left + 5; // +5px de ajuste
    let top = marker.offsetTop + rect.top + 25; // +25px de ajuste (línea + padding)

    // Ajustar si se sale por la derecha
    if (left + suggestionsEl.offsetWidth > window.innerWidth - 20) {
        left = window.innerWidth - suggestionsEl.offsetWidth - 20;
    }
    // Ajustar si se sale por abajo
    if (top + suggestionsEl.offsetHeight > window.innerHeight - 20) {
        top = editor.getBoundingClientRect().top + editor.offsetHeight - suggestionsEl.offsetHeight - 5;
    }
    
    return { top, left };
}

editor.addEventListener('input', () => {
    update();
    const val = editor.value.substring(0, editor.selectionStart);
    const word = val.split(/[\s\n{:]/).pop().toLowerCase();
    
    if (word.length > 1) {
        const matches = keywords.filter(k => k.startsWith(word));
        if (matches.length) {
            suggestionsEl.innerHTML = matches.map((m, i) => 
                `<div class="suggestion-item ${i===0?'active':''}"><span>${m}</span><small>CSS</small></div>`
            ).join('');
            
            const coords = getCursorXY();
            suggestionsEl.style.top = coords.top + "px";
            suggestionsEl.style.left = coords.left + "px";
            suggestionsEl.classList.remove('suggestions-hidden');
            activeSug = 0;
            return;
        }
    }
    suggestionsEl.classList.add('suggestions-hidden');
});

// Manejo de teclas especial (TAB, Enter, Arrows)
editor.addEventListener('keydown', (e) => {
    const isVisible = !suggestionsEl.classList.contains('suggestions-hidden');

    if (e.key === 'Tab') {
        e.preventDefault();
        if (isVisible) {
            applySug(suggestionsEl.children[activeSug].querySelector('span').innerText);
        } else {
            // Indentación si no hay sugerencias
            const start = editor.selectionStart;
            editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(editor.selectionEnd);
            editor.setSelectionRange(start + 4, start + 4);
        }
    }

    if (isVisible) {
        if (e.key === 'ArrowDown') { e.preventDefault(); activeSug = (activeSug + 1) % suggestionsEl.children.length; renderActive(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); activeSug = (activeSug - 1 + suggestionsEl.children.length) % suggestionsEl.children.length; renderActive(); }
        if (e.key === 'Enter') { e.preventDefault(); applySug(suggestionsEl.children[activeSug].querySelector('span').innerText); }
    }
});

function renderActive() {
    Array.from(suggestionsEl.children).forEach((it, i) => it.classList.toggle('active', i === activeSug));
    // Scroll to active suggestion if it's out of view
    const activeItem = suggestionsEl.querySelector('.suggestion-item.active');
    if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
}

function applySug(word) {
    const start = editor.selectionStart;
    const before = editor.value.substring(0, start);
    const after = editor.value.substring(start);
    const match = before.match(/[\w-]+$/);
    if (match) {
        editor.value = before.substring(0, match.index) + word + ": " + after;
        const newPos = match.index + word.length + 2; // +2 for ": "
        editor.setSelectionRange(newPos, newPos);
    }
    suggestionsEl.classList.add('suggestions-hidden');
    update();
}

// Menu Actions
document.getElementById('btn-menu').onclick = () => {
    const menu = document.getElementById('level-menu');
    const grid = document.getElementById('level-grid');
    grid.innerHTML = levels.map((_, i) => `<div class="level-item ${i===currentLevel?'active':''}" onclick="loadLevel(${i}); document.getElementById('level-menu').classList.add('menu-hidden')">${i+1}</div>`).join('');
    menu.classList.remove('menu-hidden');
};
document.getElementById('close-menu').onclick = () => document.getElementById('level-menu').classList.add('menu-hidden');
document.getElementById('btn-reset').onclick = () => loadLevel(currentLevel);
document.getElementById('btn-validate').onclick = () => { 
    if(validate() >= 90) {
        if(currentLevel < levels.length - 1) loadLevel(currentLevel + 1);
        else alert("¡Felicidades, HAS COMPLETADO TODOS LOS RETOS!");
    } else {
        alert("Precisión insuficiente. Inténtalo de nuevo.");
    }
};

window.onload = () => loadLevel(0);