import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    workoutExercises: [],
    exercises: [],
    filter: []
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    },
    ADD_EXERCISE(state, exercise) {
      state.exercises.push(exercise);
    },
    ADD_EXERCISE_TO_WORKOUT(state, exercise) {
      state.workoutExercises.push(exercise);
    },
    REMOVE_EXERCISE_FROM_WORKOUT(state, exercise) {
      let index = state.workoutExercises.indexOf(exercise);
      state.workoutExercises.slice(index, 1);
    },
    REMOVE_EXERCISE_FROM_FILTER(state, exercise) {
      let index = state.workoutExercises.indexOf(exercise);
      state.filter.slice(index, 1);
    }
  }
})
