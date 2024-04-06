function toggle(extraId) {
    const button = document.getElementById('toggleButton' + extraId.slice(-1));
    const extraContent = document.getElementById(extraId);

    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extraContent.style.display = 'none';
        button.textContent = 'More';
    }
}