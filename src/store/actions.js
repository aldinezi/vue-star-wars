import types from './mutation-types';
import api from '../api';
import util from '../utils';

export default {
  fetchCharacters({ commit }) {
    return api.fetchCharacters().then((response) => {
      console.log(response, 'api.fetch from action fetch');
      commit(types.LOAD_CHARACTERS, response.data.results);
    });
  },
  fetchRandomCharacter({ commit, state }, { index, type }) {
    commit(types.LOADING, { index, type });
    let randNum = Math.floor(Math.random() * 88) + 1;
    while (util.contains(state.people, randNum)) {
      randNum = Math.floor(Math.random() * 88) + 1;
    }
    return api.fetchCharacterById(randNum).then((response) => {
      commit(types.LOAD_RANDOM_CHARACTER, { data: response.data, index, newId: randNum });
    }).finally(() => {
      commit(types.CLEAR_LOADING, { index, type });
    });
  },
  fetchCharacterById({ commit }, { id, index, type }) {
    commit(types.LOADING, { index, type });
    return api.fetchCharacterById(id).then((response) => {
      commit(types.LOAD_CHARACTER_BY_ID, response.data);
    }).finally(() => {
      commit(types.CLEAR_LOADING, { index, type });
    });
  },
  fetcShipCharacterById({ commit }, { id }) {
    return api.fetchCharacterById(id).then((response) => {
      commit(types.LOAD_SHIP_CHARACTER_BY_ID, { id, data: response.data });
    });
  },
  fetchPlanetById({ commit }, { id, index, type }) {
    commit(types.LOADING, { index, type });
    return api.fetchPlanetById(id).then((response) => {
      commit(types.LOAD_PLANET_BY_ID, response.data);
    }).finally(() => {
      commit(types.CLEAR_LOADING, { index, type });
    });
  },
  fetchRandomPlanet({ commit }, { index, type }) {
    commit(types.LOADING, { index, type });
    const randNum = Math.floor(Math.random() * 61) + 1;
    return api.fetchPlanetById(randNum).then((response) => {
      commit(types.LOAD_RANDOM_PLANET, { data: response.data, index });
    }).finally(() => {
      commit(types.CLEAR_LOADING, { index, type });
    });
  },
  removeFromShip({ commit }, { id }) {
    commit(types.REMOVE_CHARACTER, { id });
  },
  addToShip({ commit }, { id, character }) {
    commit(types.ADD_TO_SHIP, { id, character });
  },
};
