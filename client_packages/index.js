mp.events.add('showHandlingUI', () => {
    const browser = mp.browsers.new('package://ui/index.html');
});

mp.events.add('setHandling', (model, key, value) => {
    mp.events.callRemote('setHandling', model, key, value);
});