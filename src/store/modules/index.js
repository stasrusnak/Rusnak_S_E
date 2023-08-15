import Vuex from "vuex";
import Axios from "axios";
import {
  FETCH_TODOS,
  ADD_TODOS,
  DELETE_TODOS,
  UPDATE_TODOS,
  OPEN_DIALOG
} from '../action-types';


export default Vuex.createStore({
  state: {
    todos: [],
    dialog: [{
      visible: true,
      data:{}
    }],
  },
  getters:{
    todos: state => state.todos,
    dialog: state => state.dialog,
  },
  mutations: {
    [ADD_TODOS]: (state, todo) => state.todos.unshift(todo),
    [FETCH_TODOS](state, todos) {   state.todos = todos  },
    [DELETE_TODOS]: (state, id) =>
      (state.todos = state.todos.filter((todo) => todo.id !== id)),
    [OPEN_DIALOG](state, dialog) {
      state.dialog = dialog
    },
  },
  actions: {
    onAdd: async ({ commit }, data) => {
      const response = await Axios.post(
        "http://localhost:8081/posts",
        { data, completed: false }
      );
      console.log(response);
      commit(ADD_TODOS, response.data);
    },
    onFetch: async ({ commit }) => {
      const response = await Axios.get(
        "http://localhost:8081/posts",
      );
      commit(FETCH_TODOS, response.data.posts);
    },
    onDelete: async ({ commit }, id) => {
      Axios.delete(`http://localhost:8081/posts/${id}`);
      commit(DELETE_TODOS, id);
    },
    onOpenDialog: async ({ commit }, dialog) => {
      commit(OPEN_DIALOG, dialog);
    },
  },
});
