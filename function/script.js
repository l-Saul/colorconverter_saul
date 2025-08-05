function hexToRgb() {
    const hex = document.getElementById('hexInput').value.trim();
    const output = document.getElementById('outputHexToRgb');

    if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
        output.textContent = "Invalid HEX code.";
        output.style.backgroundColor = "transparent";
        return;
    }

    let cleanHex = hex.replace('#', '');
    let r = parseInt(cleanHex.substring(0, 2), 16);
    let g = parseInt(cleanHex.substring(2, 4), 16);
    let b = parseInt(cleanHex.substring(4, 6), 16);

    output.textContent = `RGB(${r}, ${g}, ${b})`;
    output.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    output.style.color = (r*0.299 + g*0.587 + b*0.114) > 150 ? "black" : "white";
}

function rgbToHex() {
    const r = parseInt(document.getElementById('red').value);
    const g = parseInt(document.getElementById('green').value);
    const b = parseInt(document.getElementById('blue').value);
    const output = document.getElementById('outputRgbToHex');

    if ([r, g, b].some(v => isNaN(v) || v < 0 || v > 255)) {
        output.textContent = "Invalid RGB values.";
        output.style.backgroundColor = "transparent";
        return;
    }

    const hex = "#" + 
        r.toString(16).padStart(2, '0') + 
        g.toString(16).padStart(2, '0') + 
        b.toString(16).padStart(2, '0');

    output.textContent = hex.toUpperCase();
    output.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    output.style.color = (r*0.299 + g*0.587 + b*0.114) > 150 ? "black" : "white";
}
