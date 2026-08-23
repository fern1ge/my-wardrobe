document.addEventListener('DOMContentLoaded', () => {
    
    const lightBtn = document.querySelector('.light-theme-btn');
    const darkBtn = document.querySelector('.dark-theme-btn');

    if (darkBtn && lightBtn) {
        darkBtn.addEventListener('click', () => document.body.classList.add('dark-theme'));
        lightBtn.addEventListener('click', () => document.body.classList.remove('dark-theme'));
    }
    
    const changeAvatarBtn = document.getElementById('changeAvatarBtn');
    const avatarInput = document.getElementById('avatarInput');
    const profileContainer = document.querySelector('.profile');
    const profileLetter = document.querySelector('.profile p');

    changeAvatarBtn.addEventListener('click', () => {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                profileContainer.style.backgroundImage = `url('${e.target.result}')`;
                profileContainer.style.backgroundSize = 'cover';
                profileContainer.style.backgroundPosition = 'center';

                if (profileLetter) {
                    profileLetter.style.opacity = '0';
                    profileLetter.style.visibility = 'hidden';
                }
            };

            reader.readAsDataURL(file);
        }
    });
});