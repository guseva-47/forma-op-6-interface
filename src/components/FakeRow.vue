<template>
    <tr>
      <!-- индекс -->
      <th scope="row"></th>
      <!-- наименование -->
      <td scope="col" class="text-center bl">
            <button 
              class="btn btn-outline-secondary m-0" 
              data-bs-toggle="tooltip" 
              data-bs-placement="right"
              title="Добавить строку"
              v-on:click="addRow"
            >
              +
            </button>
      </td>
      <!-- код -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
      <!-- единица измерения - наименование -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
      <!-- единица измерения - код ОКЕИ -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
      <!-- отпущено по времени -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
      <!-- столбец с кнопкой + -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
      <!-- возвращено -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
      
      <!-- количество (вычислемое) -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
      <!-- цена1 -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
      <!-- сумма1 -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
      <!-- цена2 -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
      <!-- сумма2 -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
      <!-- примечание -->
      <td><input class="form-control-plaintext text-center" disabled style="background-color: #eee;"></td>
    </tr>
</template>

<script>
export default {
  props: ["addRow"],
  methods: {
  },
}
</script>