<template>
  <main class="mt-3">
    <div class="container">
        <div class="row mb-3">
            <div class="col-12">
            <select class="form-select">
                <option selected>메뉴선택</option>
                <option value="1">가장많이 팔린 순</option>
                <option value="2"></option>
                <option value="3"></option>
              </select>
        </div>
    </div>
        <div class="row g-3">
            <div class="col-xl-3 col-lg-4 col-md-6"  :key="i" v-for="(coffee, i) in coffeeList">
                <div class="card text-center" style="width: 18rem;">
                    <a @click="goToDetail(coffee.id);" style="cursor:pointer;"><img :src="coffee.path" class="card-img-top" alt="..."></a>
                    <div class="card-body">
                      <h5 class="card-title">{{ coffee.product_name }}</h5>
                      <span class="badge bg-dark text-white me-1">{{coffee.category1}}</span>
                    <span class="badge bg-dark text-white me-1">{{coffee.category2}}</span>
                    <span class="badge bg-dark text-white me-1">{{coffee.category3}}</span>
                    <span class="badge bg-dark text-white me-1">{{coffee.category4}}</span>
                    <div class="d-flex justify-content-between aln-itemigs-center"></div>
                      <h5 class="text-red" style="color:black">{{coffee.product_price}}원</h5>
                    </div>
                  </div>
            </div>
        </div>
    </div>
      </main>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  data () {
    return {
      coffeeList: {}
    }
  },
  created () {
    this.getcoffeeList()
  },
  methods: {
    async getcoffeeList () {
      this.coffeeList = await this.$api('/api/coffeeList', {})
      console.log(this.coffeeList)
    },
    goToDetail(product_id) {
      this.$router.push({
        path: '/CoffeeDetail', query: { product_id: product_id }
      })
    }
  }
}
</script>
