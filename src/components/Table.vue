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
      </tbody>
      <table-footer :time="time" :table="this.table" :itog="itog" />
    </table>
</template>

<script>
import TableHead from './TableHead'
import TableFooter from './TableFooter'
import R from './r'

export default {
  props: ["table", "time", "itog"],
  components: {
    TableHead,
    TableFooter,
    R
  },
  data() {
    return {
    }
  },
  created: function() {
    // console.log(this.table)
  },
  methods: {
    async getTable(id) {
      await api
        .getTable(id)
        .then((result) => {
          this.table = result.data;
          this.table.gameSystem = this.gameSystemTitle(this.table.gameSystem);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

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
