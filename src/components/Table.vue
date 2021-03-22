<template>
    <table class="table table-bordered table-sm border-primary table-hover">
      <table-head :time="time" />
      <tbody class="border-2">
        <r v-for="(row, index) in table" 
          :key="row.id"
          style="font-size: small;" 
          :row="row"
          :index="index"
          :time="time"
        />
        <fake-row :addRow="addRow" />
      </tbody>
      <table-footer :time="time" :table="this.table" :itog="itog" />
    </table>
</template>

<script>
import TableHead from './TableHead'
import TableFooter from './TableFooter'
import R from './r'
import FakeRow from './FakeRow'

export default {
  props: ["table", "time", "itog"],
  components: {
    TableHead,
    TableFooter,
    R,
    FakeRow
  },
  data() {
    return {
    }
  },
  created: function() {
    // console.log(this.table)
  },
  methods: {
    addRow() {
      this.table.push(
        { 
        id: this.table[this.table.length - 1].id + 1,
        product: {
          title: "",
          kod: ""
        },
        edinica: {
          title: "",
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
        primecnanie: ''
      },
      )
    }    
  },
  
};
</script>


