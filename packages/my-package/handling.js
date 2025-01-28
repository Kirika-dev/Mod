const handlingSettings = {
  mass: 1500,
  brakeBiasFront: 0.7,
  tractionCurveMax: 2.5,
  tractionCurveMin: 2.0,
  suspensionForce: 2.5,
  suspensionDamping: 2.0,
};

function applyHandling(model, customSettings) {
  mp.vehicles.forEach(vehicle => {
      if (vehicle.model === mp.joaat(model)) {
          const settings = { ...handlingSettings, ...customSettings };
          for (const key in settings) {
              if (settings.hasOwnProperty(key)) {
                  vehicle.setHandling(key, settings[key]);
              }
          }
      }
  });
}

module.exports = {
  applyHandling
};