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
            <div class="col-xl-3 col-lg-4 col-md-6"  :key="i" v-for="(tea, i) in teaList">
                <div class="card text-center" style="width: 18rem;">
                    <a @click="goToDetail(tea.id);" style="cursor:pointer;"><img :src="tea.path" class="card-img-top" alt="..."></a>
                    <div class="card-body">
                      <h5 class="card-title">{{tea.product_name}}</h5>
                      <span class="badge bg-dark text-white me-1">{{tea.category1}}</span>
                    <span class="badge bg-dark text-white me-1">{{tea.category2}}</span>
                    <span class="badge bg-dark text-white me-1">{{tea.category3}}</span>
                    <span class="badge bg-dark text-white me-1">{{tea.category4}}</span>
                    <div class="d-flex justify-content-between aln-itemigs-center"></div>
                      <h5 class="text-red" style="color:black">{{tea.product_price}}원</h5>
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
      teaList: []
    }
  },
  created () {
    this.getteaList()
  },
  methods: {
    async getteaList () {
      this.teaList = await this.$api('/api/teaList', {})
      console.log(this.teaList)
    },
    goToDetail(product_id) {
      this.$router.push({
        path: '/TeaDetail', query: { product_id: product_id }
      })
    }
  }
}
</script>
