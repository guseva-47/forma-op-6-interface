<template>
    <thead>
        <tr class="border-2 border-bottom-0">
          <th scope="col" id="bl">#</th>
          <th colspan="2" scope="col" id="bbl">Продукция</th>
          <th colspan="2" scope="col" id="bbl">Единица измерения</th>
          <th :colspan="colsCount" scope="col" id="bbl">Отпущено продукции (изделий)</th>
          <th colspan="1" scope="col" id="bl">Возвращено</th>
          <th colspan="5" scope="col" id="bbl">Итого отпущено с учетом возврата</th>
          <th colspan="1" scope="col" id="bl">Примечание</th>
        </tr>
        <tr class="border-2 border-bottom-0 border-top-0" style="font-size: x-small;">
          <td scope="col" id="bl"></td>
          <td colspan="1" scope="col" class="">наименование</td>
          <td colspan="1" scope="col" id="bl">код</td>
          <td colspan="1" scope="col">наименование</td>
          <td colspan="1" scope="col" id="bl">код</td>
          <td :colspan="colsCount" scope="col" id="bbl">время отпуска, ч.мин.</td>
          <th colspan="1" scope="col" class="text-center" id="bl">продукции (изделий)</th>
          <td colspan="1" scope="col" >кол-во</td>
          <td colspan="2" scope="col" id="bb">по учетным ценам</td>
          <td colspan="2" scope="col" id="bbl">по ценам продажи</td>
          <td colspan="1" scope="col"></td>
        </tr>
        <tr class="border-2 border-top-0" style="font-size: x-small;">
          <td scope="col" class="borderleft" id="bl"></td>
          <td colspan="1" scope="col" class="text-center"></td>
          <td colspan="1" scope="col" class="align-top" id="bl"></td>
          <td colspan="1" scope="col" class="text-center"></td>
          <td colspan="1" scope="col" class="align-top" id="bl">по ОКЕИ</td>
          <td v-for="(t, index) in timesArr" :key="index"
            colspan="1" 
            scope="col" 
            class="text-center"
          >
            <input class="form-control-plaintext text-center" v-model="time.time[index]">
          </td>
          <td v-if="time.count < 6" colspan="1" scope="col" class="text-center" id="bl">
            <button 
              class="btn btn-outline-secondary m-0" 
              data-bs-toggle="tooltip" 
              data-bs-placement="right"
              title="Добавить время отпуска"
              v-on:click="addTime"
            >
              +
            </button>
          </td>
          <td colspan="1" scope="col" class="text-center" id="bl"></td>
          <td colspan="1" scope="col" class="text-center"></td>
          <td colspan="1" scope="col" class="text-center">цена руб.коп.</td>
          <td colspan="1" scope="col" class="text-center">сумма руб.коп.</td>
          <td colspan="1" scope="col" class="text-center">цена руб.коп.</td>
          <td colspan="1" scope="col" class="text-center" id="bl">сумма руб.коп.</td>
          <td colspan="1" scope="col" class="text-center"></td>
        </tr>
      </thead>
</template>

<script>
export default {
  props: ["time", "table"],
  data () {
    return {
      counter: 1,
    }
  },
  computed: {
    timesArr: function() {
      return this.time.time.slice(0, this.time.count);
    },
    colsCount: function() {
      if (this.time.count < 6) return this.time.count + 1
      return this.time.count
    },
  },
  methods: {
    addTime() {
      if (this.time.count < 6) this.time.count += 1
    },
  },
  created: function() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

#bl {
  border-right: rgb(13, 110, 253) solid 2px;
}
#bb {
  border-bottom: rgb(13, 110, 253) solid 1px;   
}
#bbl {
  border-right: rgb(13, 110, 253) solid 2px;
  border-bottom: rgb(13, 110, 253) solid 1px;
}

</style>