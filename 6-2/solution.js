function solve() {
    const text = document.getElementById('text').value.trim();
    const namingConvention = document.getElementById('naming-convention').value.trim();
    const resultSpan = document.getElementById('result');

    switch (namingConvention) {
        case 'Pascal Case':
            resultSpan.textContent = convertToPascalCase(text);
            break;
        case 'Camel Case':
            resultSpan.textContent = convertToCamelCase(text);
            break;
        default:
            resultSpan.textContent = 'Error!';
    }
}

function convertToPascalCase(text) {
    const words = text.toLowerCase().split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join('');
}

function convertToCamelCase(text) {
    const words = text.split(' ');
    const firstWord = words[0].toLowerCase();
    const capitalizedWords = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return firstWord + capitalizedWords.join('');
}
