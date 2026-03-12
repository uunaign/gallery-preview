const textInput = document.getElementById('text-input');
const binaryInput = document.getElementById('binary-input');

// Traducción de Texto a Binario
textInput.addEventListener('input', () => {
    const text = textInput.value;
    binaryInput.value = text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
});

// Traducción de Binario a Texto
binaryInput.addEventListener('input', (e) => {
    const cursorPosition = e.target.selectionStart;
    const originalValue = binaryInput.value;
    const cleanValue = originalValue.replace(/[^01\s]/g, '');
    
    if (originalValue !== cleanValue) {
        binaryInput.value = cleanValue;
        binaryInput.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
    }

    const binaryArray = binaryInput.value.trim().split(/\s+/);
    let decodedText = "";

    binaryArray.forEach(bin => {
        if (bin.length === 8) {
            const charCode = parseInt(bin, 2);
            if (!isNaN(charCode)) {
                decodedText += String.fromCharCode(charCode);
            }
        } else if (bin.length > 8) {
            for (let i = 0; i < bin.length; i += 8) {
                const chunk = bin.slice(i, i + 8);
                if (chunk.length === 8) {
                    decodedText += String.fromCharCode(parseInt(chunk, 2));
                }
            }
        }
    });

    textInput.value = decodedText;
});