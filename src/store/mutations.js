import Vue from 'vue';
import types from './mutation-types';


export default {
  [types.LOAD_NOTES](state, data) {
    console.log(data);
    Vue.set(state, 'notes', data);
  },
  [types.ADD_NOTE](state, data) {
    console.log('Mutation add note', data);
    state.notes.push(data);
  },
  [types.REMOVE_NOTE](state, data) {
    console.log('Mutation remove note', data);
    state.notes.splice(data, 1);
  },
};
