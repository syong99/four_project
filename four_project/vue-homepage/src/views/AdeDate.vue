<template>
  <main class="mt-3" style="background-color: #F3F781">
    <div class="container">
        <div class="row mb-3">
            <div class="col-12">

        </div>
    </div>
        <div class="row g-3">
            <div class="col-xl-3 col-lg-4 col-md-6"  :key="i" v-for="(ade, i) in adeList">
                <div class="card text-center" style="width: 18rem;">
                    <a @click="goToDetail(ade.id);" style="cursor:pointer;"><img :src="ade.path" class="card-img-top" alt="..."></a>
                    <div class="card-body">
                      <h5 class="card-title">{{ade.product_name}}</h5>
                    <div class="d-flex justify-content-between aln-itemigs-center"></div>
                      <h5 class="text-red" style="color:black">{{ade.product_price}}원</h5>
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
      adeList: {}
    }
  },
  created () {
    this.getadeList()
  },
  methods: {
    async getadeList () {
      this.adeList = await this.$api('/api/adeList', {})
      console.log('this.adeList',this.adeList)
    },
    goToDetail(id) {
      console.log(id);
      this.$router.push({
        path: '/AdeDetail', query:{ product_id: id }
      })
    }
  }
}
</script>
