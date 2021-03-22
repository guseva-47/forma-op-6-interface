import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headBase: {
      n: '012032',
      date: null,
      okud: '0330506',
      okp: '',
      okdp: '',
      vidoperac: ''
    },
    headPeople: {
      organization: "Сладкая ложка",
      otpravitel: '',
      poluchatel: '',
      matLico: {
        doljnost: '',
        fio: ''
      },
      rukovoditel: {
        doljnost: '',
        fio: ''
      },
      glavbuh: 'Мамонтова Л. А.'
    },
    table: [
      { 
        id:1,
        product: {
          title: "Грибы",
          kod: ""
        },
        edinica: {
          title: "sm",
          kod: ""
        },
        izdelia: [10, 20, 30, 40, 50, 60],
        vozvrat: 0,
        itogo: {
          count: 0,
          price1: {
            p: 0,
            c: 0
          },
          price2: {
            p: 0,
            c: 0
          }

        },
        primecnanie: 'tra ta ta'
      },
      { 
        id:2,
        product: {
          title: "",
          kod: ""
        },
        edinica: {
          title: "sm",
          kod: ""
        },
        izdelia: [0, 0, 0, 0, 0, 0],
        vozvrat: 0,
        itogo: {
          count: 0,
          price1: {
            p: 0,
            c: 0
          },
          price2: {
            p: 0,
            c: 0
          }

        },
        primecnanie: 'tra ta ta'
      },
    ],
    time: {
      time: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
      count: 1,
    },

    count: 0,
    user: null,
    tables: [],
  },
  getters: {
    getHeadBase(state) {
      return state.headBase;
    },
    getHeadPeople(state) {
      return state.headPeople;
    },
    getTable(state) {
      return state.table;
    },
    getTime(state) {
      return state.time;
    },
    getTableRow(state, i) {
      return state.table[i];
    },
  },
  mutations: {
    setHeadPeople(state, headPeople) {
      state.headPeople = headPeople;
    },
    setHeadBase(state, headBase) {
      state.headBase = headBase;
    },
    setTable(state, table) {
      state.table = table;
    },
    setTableRow(state, i, row) {
      state.table[i] = row;
    },
  },
  actions: {
    updateHeadPeople({ commit }, headPeople) {
      commit('setHeadPeople', headPeople)
    },
    updateHeadBase({ commit }, headBase) {
      commit('setHeadBase', headBase)
    },
    async unauthorize(context) {
      context.commit('setUser', null);
    },

    async getTables({ commit }) {
      await api
        .getTables()
        .then((result) => {
          let tables = result.data;
          commit('setTables', tables);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    async deleteTable({ commit }, table) {
      let tableId = table.id;
      await api
        .deleteTable(tableId)
        .then((result) => {
          if (result.status === 200) {
            commit('deleteTable', table);
          }
        });
    }
    
  }
})