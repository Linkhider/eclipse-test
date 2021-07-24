<template>
  <div class="main">
    <Loader v-if="loading"/>
    <div class="container" v-else>
      <nav>
        <div class="nav-wrapper blue lighten-3">
          <form @search.enter.prevent="searchHandler">
            <div class="input-field">
              <input id="search" type="search" v-model="search" required>
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <div class="card " v-for="cur in filteredList" :key="cur.id">
        <div class="card__name">{{ cur.Name }}</div>
        <div class="card__items">
          <div class="card__items-nominal">1 {{ cur.CharCode }}</div>
          <img src="../assets/img/double-arrow.svg" class="col s2">
          <div>{{ cur.Value / cur.Nominal}} RUB</div>
          <div
              class="card__items-prev"
              :class="{below: (cur.Value < cur.Previous)}"
          >
            <i
                class="material-icons"
                :class="{below: (cur.Value < cur.Previous)}"
            >
              arrow_upward
            </i>
            {{ Math.abs(cur.Value - cur.Previous).toFixed(4)}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Currencies',
  data: () => ({
    loading: true,
    currency: null,
    search: ''
  }),
  components: {
  },
  methods: {
    searchHandler() {
      console.log(this.search)
    }
  },
  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency')
    console.log(this.currency.Valute)
    //console.log(Object.values(this.currency.Valute).filter(currency => currency.ID == "R01035"));
    this.loading = false
  },
  computed: {
    filteredList() {
      return Object.values(this.currency.Valute).filter(currency => {
        return currency.CharCode.toLowerCase().includes(this.search.toLowerCase()) || currency.Name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
<style lang="scss">
  .card{
    padding: 10px;
    &__name{
      margin-bottom: 5px;
      color: gray;
    }
    &__items{
      display: flex;
      width: 100%;
      align-items: center;
      &-nominal{

      }
      img{
        margin: 0 20px;
        width: 25px;
      }

      &-prev{
        margin-left: auto;
        display: flex;
        align-items: center;
        color: #06ac06;
        &.below{
          color: red;
          i{
            transform: rotate(180deg);
          }
        }
      }
    }
  }

</style>