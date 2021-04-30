import axios from "axios";

export default {
  namespaced: true,

  state: {
    token: null,
    user: null,
    loginFailed: false,
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },

  actions: {
    async signIn({ dispatch }, credentials) {
      await axios
        .post("http://localhost:5010/api/users/login", credentials)
        .then((res) => res.data)
        .then((data) => {
          dispatch("attempt", data.token);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    async attempt({ commit }, token) {
      commit("SET_TOKEN", token);

      await axios
        .get("http://localhost:5010/api/users/authenticate", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => res.data)
        .then((data) => {
          commit("SET_USER", data);
        })
        .catch(() => {
          commit("SET_TOKEN", null);
          commit("SET_USER", null);
        });
    },
  },
};
