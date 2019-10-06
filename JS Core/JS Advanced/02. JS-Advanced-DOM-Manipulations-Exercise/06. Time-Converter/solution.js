function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', () => {
        hours.value = Number(days.value) * 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    })
    hoursButton.addEventListener('click', () => {
        days.value = (Number(hours.value) / 24).toFixed(2);
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    })
    minutesButton.addEventListener('click', () => {
        seconds.value = Number(minutes.value) * 60;
        hours.value = Number(minutes.value) / 60;
        days.value = (Number(hours.value) / 24).toFixed(2);
    })
    secondsButton.addEventListener('click', () => {
        minutes.value = (Number(seconds.value) / 60).toFixed(2);
        hours.value = (Number(minutes.value) / 60).toFixed(2);
        days.value = (Number(hours.value) / 24).toFixed(2);        
    })
}