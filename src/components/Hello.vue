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
      <button type="button" class="btn btn-primary float-end" v-on:click="exportToXLSX">Экспорт в xlsx</button>
      </div>
    </section>
  </div>
</template>

<script>
import BaseData from './BaseData';
import People from './People';
import TableProduct from './Table';
import * as XLSX from 'xlsx';

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

    createBook(filename, sheetname, sheetData) {
      const book = XLSX.utils.book_new();

      book.SheetNames.push(sheetname);
      book.Sheets[sheetname] = XLSX.utils.aoa_to_sheet(sheetData);

      XLSX.writeFile(book, filename);
    },
    excelTableHead() {
      const times = this.time.time
      const data = [
        ['#', 'Продукция', '', '	Единица измерения', '', 'Отпущено продукции (изделий)', '', '', '', '', '', 'Возвращено', '	Итого отпущено с учетом возврата', '', '', '', '', 'Примечание'],
        ['', 'наименование', 'код', 'наименование', 'код по ОКЕИ', 'время отпуска, ч.мин.', '', '', '', '', '', 'продукции (изделий)', 'кол-во', 'по учетным ценам', '', 'по ценам продажи', '', ''],
        ['', '', '', '', '', times[0], times[1], times[2], times[3], times[4], times[5], '', '', 'цена руб.коп.', 'сумма руб.коп.', 'цена руб.коп.', 'сумма руб.коп.', ''],
      ]
      return data;
    },
    excelTableFooter() {
      const i = this.itog;
      const data = [
        ['', '', '', '', 'Итого', i.izdelia[0], i.izdelia[1], i.izdelia[2], i.izdelia[3], i.izdelia[4], i.izdelia[5], i.vozvrat, i.kolich, '', i.c1, '', i.c2, ''],
      ]
      return data;
    },
    excelHead() {
      const data = [
        ['', '', '', 'Код', ],
        ['', '', 'Форма по ОКУД', '0330506'],
        ['Организация', this.peopleDate.organization, 'по ОКП',  this.base.okp],
        ['структурное подразделение \"отправитель\"', this.peopleDate.otpravitel],
        ['структурное подразделение \"получатель\"', this.peopleDate.poluchatel],
        ['', '','Вид деятельности по ОКДП', this.base.okdp],
        ['', '','Вид операции', this.base.vidoperac],
        [''],
        ['','ДНЕВНОЙ ЗАБОРНЫЙ ЛИСТ', this.base.n, this.base.date],
        ['Материально ответственное лицо', this.peopleDate.matLico.doljnost, this.peopleDate.matLico.fio],
        ['Руководитель', this.peopleDate.rukovoditel.doljnost, this.peopleDate.rukovoditel.fio],
        ['Главный (старший) бухгалтер', this.peopleDate.glavbuh],
        [''],
      ]
      return data;
    },
    excelTableBody() {
      const data = [];
      this.table.forEach(row => {
        const dataRow = [''];
        dataRow.push(row.product.title);
        dataRow.push(row.product.kod);
        dataRow.push(row.edinica.title);
        dataRow.push(row.edinica.kod);
        row.izdelia.forEach(elem => dataRow.push(elem));
        dataRow.push(row.vozvrat);
        dataRow.push(row.itogo.count);
        dataRow.push(row.itogo.price1.p);
        dataRow.push(row.itogo.price1.c);
        dataRow.push(row.itogo.price2.p);
        dataRow.push(row.itogo.price2.c);
        dataRow.push(row.primecnanie);

        data.push(dataRow);
      })
      return data;
    },
    exportToXLSX() {
      const data = this.excelHead();
      this.excelTableHead().forEach(row => data.push(row));
      this.excelTableBody().forEach(row => data.push(row));
      this.excelTableFooter().forEach(row => data.push(row));
      console.log(data)
      this.createBook('op-6.xlsx', 'OP-6', data);
    }
  }
}
</script>

