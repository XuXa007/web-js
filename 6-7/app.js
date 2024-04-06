function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        const showMoreBtn = profile.querySelector('button');
        const lockRadio = profile.querySelector('input[value="lock"]'); //начальное состояние
        const hiddenFields = profile.querySelector('.profile > div'); //дочерний див в профиле

        showMoreBtn.addEventListener('click', () => {
            if (lockRadio.checked) return;
            if (hiddenFields.style.display === 'none') {
                hiddenFields.style.display = 'block';
                showMoreBtn.textContent = 'Hide it';
            } else {
                hiddenFields.style.display = 'none';
                showMoreBtn.textContent = 'Show more';
            }
        });
    });
}

window.onload = lockedProfile;
