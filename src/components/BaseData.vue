<template>
  <div>
    <!-- 1 вкладка -->
    <div
      class="tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <!-- 1 str -->
      <div class="row g-3 align-items-center" style="padding-top: 10pt">
        <div class="col-4">
          <div class="d-flex bd-highlight align-items-center">
            <div class="flex bd-highlight">
              <label class="col-form-label" style="padding-right: 10pt"
                >Номер документа</label
              >
            </div>
            <div class="flex-fill bd-highlight p-0">
              <input
                v-model="base.n"
                type="text"
                class="form-control text-center"
              />
            </div>
          </div>
        </div>

        <div class="col-4 text-end">
          <div class="d-flex bd-highlight align-items-center">
            <div class="flex bd-highlight">
              <label class="col-form-label" style="padding-right: 10pt; padding-left: 15pt">
              Дата
              </label>
            </div>
            <div class="flex-fill bd-highlight p-0">
              <input
                v-model="base.date"
                type="text"
                class="form-control text-center"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 2 str -->
      <div class="row g-3 align-items-center" style="padding-top: 5pt">
        <div class="col-4">
          <div class="d-flex bd-highlight align-items-center">
            <div class="flex bd-highlight">
              <label class="col-form-label" style="padding-right: 10pt"
                >Форма по ОКУД</label
              >
            </div>
            <div class="flex-fill bd-highlight p-0">
              <input
                v-model="base.okud"
                class="form-control text-center"
                placeholder="ОКУД"
                disabled
              />
            </div>
          </div>
        </div>

        <div class="col-4 text-end">
          <div class="d-flex bd-highlight align-items-center">
            <div class="flex bd-highlight">
              <label
                class="col-form-label"
                style="padding-right: 10pt; padding-left: 15pt"
                >по ОКП</label
              >
            </div>
            <div class="flex-fill bd-highlight p-0">
              <input 
                v-model="base.okp"
                class="form-control text-center"
                placeholder="ОКП"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 3 str -->
      <div class="row g-3 align-items-center" style="padding-top: 5pt">
        <div class="col-4">
          <div class="d-flex bd-highlight align-items-center">
            <div class="flex bd-highlight">
              <label class="col-form-label" style="padding-right: 10pt"
                >Вид деятельности по ОКДП</label
              >
            </div>
            <div class="flex-fill bd-highlight p-0">
              <input 
                class="form-control text-center" 
                placeholder="ОКДП" 
                v-model="base.okdp"
              />
            </div>
          </div>
        </div>

        <div class="col-4 text-end">
          <div class="d-flex bd-highlight align-items-center">
            <div class="flex bd-highlight">
              <label
                class="col-form-label"
                style="padding-right: 10pt; padding-left: 15pt"
              >
                Вид операции
              </label>
            </div>
            <div class="flex-fill bd-highlight p-0">
              <input 
                class="form-control text-center" 
                placeholder="Вид"
                v-model="base.vidoperac"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["base"],
  data() {
    return {
      newBase: {
        n: this.base.n,
        date: this.base.date,
        okud: this.base.okud,
        okp: this.base.okp,
        okdp: this.base.okdp,
        vidoperac: this.base.vidoperac
      }
    };
  },
  created() {},

  methods: {
    toInvite() {
      this.subscribe(this.toSubscribe).then(() => (this.toSubscribe = []));
    },

    toOut() {
      this.unsubscribe(this.toUnSubscribe).then(
        () => (this.toUnSubscribe = [])
      );
    },
  },
};
</script>
