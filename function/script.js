function hexToRgb() {
    const hex = document.getElementById("hexInput").value.trim();
    const output = document.getElementById("outputHexToRgb");

    if (!(hex.startsWith("#") && hex.length === 7)) {
        output.textContent = "Erro: Código HEX deve começar com '#' e ter 6 caracteres.";
        return;
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    output.innerHTML = `
    <strong>RGB:</strong> rgb(${r}, ${g}, ${b})<br><br>
    <strong>Red:</strong> ${r}<br>
    <strong>Green:</strong> ${g}<br>
    <strong>Blue:</strong> ${b}
    `;
}

function rgbToHex() {
    const r = parseInt(document.getElementById("red").value);
    const g = parseInt(document.getElementById("green").value);
    const b = parseInt(document.getElementById("blue").value);
    const output = document.getElementById("outputRgbToHex");

    if (
        isNaN(r) || r < 0 || r > 255 ||
        isNaN(g) || g < 0 || g > 255 ||
        isNaN(b) || b < 0 || b > 255
    ) {
        output.textContent = "Erro: Todos os valores RGB devem estar entre 0 e 255.";
        return;
    }

    const hex = "#" +
        r.toString(16).padStart(2, "0").toUpperCase() +
        g.toString(16).padStart(2, "0").toUpperCase() +
        b.toString(16).padStart(2, "0").toUpperCase();

    output.innerHTML = `
    <strong>HEX:</strong> ${hex}
    `;
}