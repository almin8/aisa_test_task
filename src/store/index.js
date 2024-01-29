import { createStore } from "vuex";

export default createStore({
  state: {
    myChoose: {
      6: ["./assets/1.jpeg", 0],
      8: ["./assets/2.jpeg", 0],
      12: ["./assets/3.jpeg", 0],
    },
    limeFresh: {
      6: "./assets/1.jpeg",
      8: "./assets/2.jpeg",
      12: "./assets/3.jpeg",
    },
  },
  mutations: {
    getlimeFresh(state, newValue) {
      console.log(state.myChoose[newValue][1]);
      state.myChoose[newValue][1] += 1;
    },

    saveConfig(state, newValue) {
      state.myChoose[Number(newValue[1])][1] = newValue[0];
    },
  },
});
