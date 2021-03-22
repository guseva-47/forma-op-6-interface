<template>
  <tfoot>
    <th colspan="5" scope="row" class="text-end">Итого</th>
    <th v-for="(t, index) in timesArr" :key="index"
      colspan="1" 
      scope="col" 
      class="text-center"
    >{{t}}
    </th>
    <th scope="row" v-if="time.count < 6"></th>
    <th scope="row">{{vozvrat}}</th>
    <th colspan="2" scope="row">{{itog.kolich}}</th>
    <th colspan="2" scope="row">{{itog.c1}}</th>
    <th colspan="3" scope="row">{{itog.c2}}</th>
  </tfoot>
</template>
<script>
export default {
  props: ["time", "table", "itog"],
  computed: {
    timesArr: function() {
      const sums = [0, 0, 0, 0, 0, 0];

      for(let i = 0; i < this.table.length; i++) {
        for(let j = 0; j < this.time.count; j++) {
          sums[j] += Number(this.table[i].izdelia[j])
        }
      }
      this.itog.izdelia = sums;
      return sums.slice(0, this.time.count);
    },
    vozvrat: function() {
      this.itog.vozvrat = 0;
      this.itog.kolich = 0;
      this.itog.c1 = 0;
      this.itog.c2 = 0;
      for(let i = 0; i < this.table.length; i++) {
        this.itog.vozvrat += Number(this.table[i].vozvrat)
        this.itog.kolich += Number(this.table[i].itogo.count)
        this.itog.c1 += Number(this.table[i].itogo.price1.c)
        this.itog.c2 += Number(this.table[i].itogo.price2.c)
      }
      return this.itog.vozvrat;
    }
  }
}
</script>
