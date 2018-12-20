export default {
  characters: state => state.characters,
  starbaseCharacterByIndex: state => index => state.characters[index],
  starbasePlanetByIndex: state => index => state.planets[index],
  loading: state => JSON.parse(JSON.stringify(state.loading)),
  initialCharacterIds: state => state.initialCharacterIds,
  initialPlanetIds: state => state.initialPlanetIds,
  shipCrew: state => state.shipCrew,
  ship: state => state.ship,
};
