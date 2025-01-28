document.getElementById('handling-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const model = document.getElementById('model').value;
    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;

    if (mp) {
        mp.trigger('setHandling', model, key, value);
    }
});