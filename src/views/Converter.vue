<template>
  <div class="main">
    <Loader v-if="loading"/>
    <div class="container" v-else>
      <div class="card">
        <label v-if="firstSelected">{{firstSelected.Name}}</label>
        <label v-else>Валюта не выбрана</label>
        <select
            class="browser-default"
            @change="changeValues"
            v-model="firstSelected"
        >
          <option value=null disabled selected>Выберите валюту</option>
          <option v-for="cur in currency.Valute" :key="cur.id" :value="cur">{{ cur.CharCode }}</option>
        </select>
        <input @input="changeValues" type="number" v-model="firstValue">
      </div>

        <button @click="Flip(); changeValues()" class="btn-floating btn-large waves-effect waves-light blue lighten-1"><i class="material-icons">compare_arrows</i></button>

      <div class="card">
        <label v-if="secondSelected">{{secondSelected.Name}}</label>
        <label v-else>Валюта не выбрана</label>
        <select
            class="browser-default"
            @change="changeValues"
            v-model="secondSelected"
        >
          <option value=null disabled selected>Выберите валюту</option>
          <option v-for="cur in currency.Valute" :key="cur.id" :value="cur">{{ cur.CharCode }}</option>
        </select>
        <input type="number" v-model="secondValue" disabled>
      </div>
<!--      1 USD = 2val/1val-->


    </div>
  </div>
</template>

<script>

export default {
  name: 'Converter',
  data: () => ({
    loading: true,
    currency: null,
    firstSelected: null,
    secondSelected: null,
    firstValue: 1,
    secondValue: null
  }),
  components: {

  },
  methods: {
    changeValues() {
      if (this.firstSelected && this.secondSelected) {
        this.secondValue = (this.firstValue * (this.secondSelected.Value / this.firstSelected.Value)).toFixed(3)
      }
    },
    Flip() {
      [this.firstSelected, this.secondSelected] = [this.secondSelected, this.firstSelected]

    },

  },
  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.loading = false
  },
  computed: {

  }
}
</script>
<style lang="scss" scoped>
.container{
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .card{
    width: 40%;
    padding: 10px;
    label{
      font-size: 14px;
    }
  }
  button{
    margin: 0 20px;
  }
}


</style>