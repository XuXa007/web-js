function attachEventsListeners() {
    document.querySelector('#daysBtn').addEventListener('click', onClick);
    document.querySelector('#hoursBtn').addEventListener('click', onClick);
    document.querySelector('#minutesBtn').addEventListener('click', onClick);
    document.querySelector('#secondsBtn').addEventListener('click', onClick);

    function onClick() {
        let typeTime = event.target.id.replace('Btn', '')
        const number = document.getElementById(typeTime).value
        switch (typeTime) {
            case 'days':
                document.getElementById('hours').value = number * 24
                document.getElementById('minutes').value = number * 24 * 60
                document.getElementById('seconds').value = number * 24 * 60 * 60
                break
            case 'hours':
                document.getElementById('days').value = number / 24
                document.getElementById('minutes').value = number * 60
                document.getElementById('seconds').value = number * 60 * 60
                break;
            case 'minutes':
                document.getElementById('days').value = number / (24 * 60)
                document.getElementById('hours').value = number / 60
                document.getElementById('seconds').value = number * 60
                break
            case 'seconds':
                document.getElementById('days').value = number / (24 * 60 * 60)
                document.getElementById('hours').value = number / (60 * 60)
                document.getElementById('minutes').value = number / 60
                break;
        }
    }
}