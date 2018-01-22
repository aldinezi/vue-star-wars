import types from './mutation-types';

export default {
  loadNotes({ commit }) {
    const localData = JSON.parse(localStorage.localNotes || null) || [];
    commit(types.LOAD_NOTES, localData);
  },
  addNote({ commit }, data) {
    const localData = JSON.parse(localStorage.localNotes || null) || [];
    localData.push(data);
    console.log('Add note action');
    localStorage.localNotes = JSON.stringify(localData);
    commit(types.ADD_NOTE, data);
  },
  removeNote({ commit }, key) {
    const localData = JSON.parse(localStorage.localNotes || null) || [];
    localData.splice(key, 1);
    console.log('Remove note action');
    localStorage.localNotes = JSON.stringify(localData);
    commit(types.REMOVE_NOTE, key);
  },
};
