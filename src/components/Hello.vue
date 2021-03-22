<template>
  <div class="hello">
    <section>
      <div class="container-xxl">
      <!-- Заголовок и дата -->
      <div class="row g-2">
        <div class="col-7">
          <h2>Дневной заборный лист</h2>
        </div>
        <div class="col-5 text-end"><h2>N-{{base.n}} {{base.date}}</h2></div>
      </div>
      <!-- Tabs, страницы с шапкой документа -->
      <div class="" style="padding-bottom: 15pt">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button 
              v-on:click="isTabBaseData = true"
              class="nav-link active"
              data-bs-toggle="tab" 
              :aria-selected="isTabBaseData">
              Основные данные
            </button>
            <button 
              v-on:click="isTabBaseData = false"
              class="nav-link"
              data-bs-toggle="tab"
              :aria-selected="!isTabBaseData">
              Участники
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div v-if="isTabBaseData">
            <base-data :base="this.base"
            />
          </div>
          <div v-else>
            <people :peopleDate="this.peopleDate" />
          </div>
        </div>
      </div>

      <table-product :table="this.table" :time="this.time" :itog="itog" />
      </div>
    </section>
  </div>
</template>

<script>
// TODO: 
//       удаление строки, мб столбца времени
//       css
//       сохранение в файл
import BaseData from './BaseData';
import People from './People';
import TableProduct from './Table';

export default {
  components: {
    BaseData,
    People,
    TableProduct,
  },
  data() {
    return { 
      isTabBaseData: true,
      base: {
        n: '012032',
        date: null,
        okud: '0330506',
        okp: '',
        okdp: '',
        vidoperac: ''
      },
      peopleDate: {
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
        glavbuh: ''
      },
      table: [],
      time: null,
      itog: {
        izdelia: [0,0,0,0,0,0],
        vozvrat: 0,
        kolich: 0,
        c1: 0,
        c2: 0
      }
    };
  },
  created: function() {
    this.base = this.getHeadBase();
    this.peopleDate = this.getHeadPeople();
    this.table = this.getTable();
    this.time = this.getTime();

    var dateFormat = require("dateformat");
    const now = new Date();
    this.base.date = dateFormat(now, "dd.mm.yyyy");
  },
  methods: {
    getHeadBase() {
      return this.$store.getters.getHeadBase;
    },
    getTable() {
      return this.$store.getters.getTable;
    },
    getHeadPeople() {
      return this.$store.getters.getHeadPeople;
    },
    getTime() {
      return this.$store.getters.getTime;
    },

    setPeopleDate(headPeople) {
      this.peopleDate = headPeople;
      this.$store.dispatch('setHeadPeople', headPeople);
    },
    setBaseData(base) {
      this.base = base;
      this.$store.dispatch('setHeadBase', base)
    },
    setTable(table) {
      this.table = table;
      this.$store.dispatch('setTable', table)
    },


    async getTables() {
      await this.$store.dispatch('getTables');
    },
    async deleteTable(table) {
      await this.$store.dispatch('deleteTable', table);
      this.tables = this.$store.state.tables;
    },
    isOwner(table) {
      if(this.$store.state.user && table){
        return this.$store.state.user.id == table.owner.id;
      }
      return false;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bl {
  border-right: rgb(13, 110, 253) solid 2px;
}
.bb {
  border-bottom: rgb(13, 110, 253) solid 1px;    
}
#bbl {
  border-right: rgb(13, 110, 253) solid 2px;
  border-bottom: rgb(13, 110, 253) solid 1px;    
}

.bbl {
  border-right: rgb(13, 110, 253) solid 2px;
  border-bottom: rgb(13, 110, 253) solid 1px;    
}
</style>
