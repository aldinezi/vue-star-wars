import Vue from 'vue';
import types from './mutation-types';

export default {
  [types.LOAD_CHARACTERS](state, data) {
    Vue.set(state, 'characters', data);
  },
  [types.LOAD_RANDOM_CHARACTER](state, { data, index }) {
    Vue.set(state.people, index, data);
  },
  [types.LOAD_CHARACTER_BY_ID](state, data) {
    state.people.push(data);
  },
  [types.LOAD_PLANET_BY_ID](state, data) {
    state.planets.push(data);
  },
  [types.LOAD_RANDOM_PLANET](state, { data, index }) {
    Vue.set(state.planets, index, data);
  },
  [types.LOADING](state, { index, type }) {
    Vue.set(state.loading, `${type}${index}`, true);
  },
  [types.CLEAR_LOADING](state, { index, type }) {
    Vue.set(state.loading, `${type}${index}`, false);
  },
  [types.REMOVE_CHARACTER](state, { id }) {
    if (state.ship.indexOf(id) > -1) {
      Vue.delete(state.ship, state.ship.indexOf(id));
      Vue.delete(state.shipCrew, id);
    }
  },
  [types.ADD_TO_SHIP](state, { id, character }) {
    if (state.ship.indexOf(id) === -1) {
      state.ship.push(id);
      Vue.set(state.shipCrew, id, character);
    }
  },
};
