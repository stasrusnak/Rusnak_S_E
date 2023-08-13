import Vuex from "vuex";
import Axios from "axios";
import {
  FETCH_TODOS,
  ADD_TODOS,
  DELETE_TODOS,
  UPDATE_TODOS,
} from '../action-types';

export default Vuex.createStore({
  state: {
    todos: [],
  },
  // getters:{
  //   todos: state => state.todos
  // },
  mutations: {
    [ADD_TODOS]: (state, todo) => state.todos.unshift(todo),
  },
  actions: {
    onAddTodo: async ({ commit }, data) => {
      const response = await Axios.post(
        "http://localhost:8081/posts",
        { data, completed: false }
      );
      console.log(response);
      commit(ADD_TODOS, response.data);
    },
  },
});
