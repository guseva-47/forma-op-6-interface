<template>
    <tr>
      <!-- индекс -->
      <th scope="row">{{index + 1}}</th>
      <!-- наименование -->
      <td colspan="1" style="width: 15%">
        <!-- v-model="row.product.title" -->
        <input 
          class="form-control-plaintext text-center" 
          v-model="ti" 
          list="datalistOptions1"
        >
        <datalist style="font-size: small;" id="datalistOptions1">
          <option  v-for="(opt, i) in options"  :key="i" :value="opt" />
        </datalist>
      </td>
      <!-- код -->
      <td><input class="form-control-plaintext text-center" v-model="row.product.kod"></td>
      <!-- единица измерения - наименование -->
      <td>
        <input 
          class="form-control-plaintext text-center" 
          v-model="ed"
          list="datalistOptions2"
        >
        <datalist style="font-size: small;" id="datalistOptions2">
          <option  v-for="(ed, i) in edinici"  :key="i" :value="ed" />
        </datalist>
      </td>
      <!-- единица измерения - код ОКЕИ -->
      <td>
        <input class="form-control-plaintext text-center" v-model="row.edinica.kod">
      </td>
      <!-- отпущено по времени -->
      <td v-for="(t, index) in timesArr" :key="index"
        colspan="1" 
        scope="col" 
        class="text-center"
      >
        <input class="form-control-plaintext text-center" v-model="row.izdelia[index]">
      </td>
      <!-- столбец с кнопкой + -->
      <td v-if="time.count < 6">
        <input class="form-control-plaintext text-center" disabled style="background-color: #eee;">
      </td>
      <!-- возвращено -->
      <td><input class="form-control-plaintext text-center" v-model="row.vozvrat"></td>
      
      <!-- количество (вычислемое) -->
      <td><input class="form-control-plaintext text-center" v-model="co"></td>
      <!-- цена1 -->
      <td><input class="form-control-plaintext text-center" v-model="row.itogo.price1.p"></td>
      <!-- сумма1 -->
      <td><input class="form-control-plaintext text-center" v-model="c1"></td>
      <!-- цена2 -->
      <td><input class="form-control-plaintext text-center" v-model="row.itogo.price2.p"></td>
      <!-- сумма2 -->
      <td><input class="form-control-plaintext text-center" v-model="c2"></td>
      <!-- примечание -->
      <td><input class="form-control-plaintext text-center" v-model="row.primecnanie"></td>
      </tr>
</template>

<script>
export default {
  props: ["row", "index", "time"],
  data () {
    return {
      ti: this.row.product.title ,
      ed: this.row.edinica.title,
      options: ["Грибы соленые", "Каша рисовая на молоке", "Кисель фруктовый", "Котлета по пражски"],
      edinici: ["ШТ", "КГ", "Г", "Л"],
      edinic_kod: ["796", "166", "163", "112"]
    }
  },
  computed: {
    timesArr: function() {
      return this.row.izdelia.slice(0, this.time.count);
    },
    co: function() {
      let s = 0;
      this.timesArr.forEach(elem => s += elem);
      s -= this.row.vozvrat;
      this.row.itogo.count = s;
      return s;
    },
    c1: function() {
      const c = this.co * this.row.itogo.price1.p;
      this.row.itogo.price1.c = c;
      return c;
    },
    c2: function() {
      const c = this.co * this.row.itogo.price2.p;
      this.row.itogo.price2.c = c;
      return c;
    }
  },
  watch: {
    ti: function(newKod, _) {
      this.row.product.title = newKod;
      this.updateRow(newKod);
    },
    ed: function(newEd, _) {
      this.row.edinica.title = newEd;
      const i = this.edinici.indexOf(newEd);
      if (i != -1) this.row.edinica.kod = this.edinic_kod[i];
      else this.row.edinica.kod = '';
    },
  },
  methods: {
    updateRow(row) {
      switch(row) {
        case this.options[0] :
          this.row.product.kod = '1121';
          this.row.itogo.price1.p = 7;
          this.row.itogo.price2.p = 10;
          break;
        case this.options[1] :
          this.row.product.kod = '02134';
          this.row.itogo.price1.p = 12;
          this.row.itogo.price2.p = 15;
          break;
        case this.options[2] :
          this.row.product.kod = '2132';
          this.row.itogo.price1.p = 17;
          this.row.itogo.price2.p = 20;
          break;
        case this.options[3] :
          this.row.product.kod = '3213';
          this.row.itogo.price1.p = 14;
          this.row.itogo.price2.p = 18;
          break;
        default:
          this.row.product.kod = '';
          this.row.itogo.price1.p = 0;
          this.row.itogo.price2.p = 0;
          break;
      }
    }
  },
}
</script>