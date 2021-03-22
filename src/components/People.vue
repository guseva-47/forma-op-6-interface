<template>
  <div>
    <!-- 2 вкладка -->
    <div
      class="tab-pane"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <!-- 1 str -->
      <div class="d-flex bd-highlight align-items-center" style="padding-top: 10pt">
        <div class="flex bd-highlight">
          <label class="col-form-label" style="padding-right: 10pt">Организация</label>
        </div>
        <div class="flex-fill bd-highlight p-0">
          <input 
            class="form-control" 
            placeholder="Название организации" 
            v-model="peopleDate.organization"
          >
        </div>
      </div>

      <!-- 2 str -->
      <div class="d-flex bd-highlight align-items-center" style="padding-top: 5pt">
        <div class="flex bd-highlight">
          <label class="col-form-label" style="padding-right: 11pt">Отправитель</label>
        </div>
        <div class="flex-fill bd-highlight p-0">
          <input 
            class="form-control" 
            placeholder="Структурное подразделение"
            v-model="peopleDate.otpravitel"
          >
        </div>

        <div class="flex bd-highlight">
          <label class="col-form-label" style="padding-right: 5pt; padding-left: 15pt;">Получатель</label>
        </div>
        <div class="flex-fill bd-highlight p-0">
          <input
            class="form-control" 
            placeholder="Структурное подразделение"
            v-model="peopleDate.poluchatel"
          >
        </div>
      </div>

      <!-- 3 str -->
      <div class="row g-3 align-items-center" style="padding-top: 5pt">
        <div class="col-6" style="padding-right: 0;">
        <div class="d-flex bd-highlight align-items-center">
          <div class="flex bd-highlight">
            <label class="col-form-label" style="padding-right: 10pt;">
              Материально ответственное лицо
            </label>
          </div>
          <div class="flex-fill bd-highlight p-0">
            <input 
              class="form-control" 
              placeholder="Должность"
              v-model="peopleDate.matLico.doljnost"
            >
          </div>
        </div>
        </div>
        <div class="col-6">
          <input 
            class="form-control" 
            placeholder="Фамилия, Имя, Отчество"
            v-model="peopleDate.matLico.fio"
          >
        </div>
      </div>

      <!-- 4 str -->
      <div class="row g-3 align-items-center" style="padding-top: 5pt">
        <div class="col-6" style="padding-right: 0;">
        <div class="d-flex bd-highlight align-items-center">
          <div class="flex bd-highlight">
            <label class="col-form-label" style="padding-right: 10pt;">
              Руководитель
            </label>
          </div>
          <div class="flex-fill bd-highlight p-0">
            <input 
              class="form-control" 
              placeholder="Должность"
              v-model="peopleDate.rukovoditel.doljnost"
            >
            </div>
        </div>
        </div>
        <div class="col-6">
        <input 
          class="form-control" 
          placeholder="Фамилия, Имя, Отчество"
          v-model="peopleDate.rukovoditel.fio"
        >
        </div>
      </div>

      <!-- 5 str -->
      <div class="row g-3 align-items-center" style="padding-top: 5pt">
        <div class="col-12">
        <div class="d-flex bd-highlight align-items-center">
          <div class="flex bd-highlight">
            <label class="col-form-label" style="padding-right: 10pt;">
                Главный (старший) бухгалтер
            </label>
          </div>
          <div class="flex-fill bd-highlight">
            <input 
              class="form-control" 
              placeholder="Фамилия И. О."
              v-model="peopleDate.glavbuh"
            >
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["peopleDate"],
  data() {
    return {}
  }
};
</script>
