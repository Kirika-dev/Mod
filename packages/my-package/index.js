mp.events.add('playerReady', (player) => {
  console.log(`${player.name} подключился к серверу!`);
  player.call('showHandlingUI');
});

mp.events.add('setHandling', (player, model, key, value) => {
  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue)) {
      player.outputChatBox('Значение должно быть числом.');
      return;
  }

  const customSettings = {};
  customSettings[key] = parsedValue;

  const handling = require('./handling');
  handling.applyHandling(model, customSettings);
  player.outputChatBox(`Handling для ${model} изменен: ${key} = ${value}`);
});