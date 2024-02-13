<template>
  <main class="mt-3">
    <div class="container">
      <ul class="nav nav-pills">
  <li class="nav-item">
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style="color:black">리스트 선택</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="/CoffeeList">커피 리스트</a></li>
      <li><a class="dropdown-item" href="/AdeList">에이드/쉐이크 리스트</a></li>
      <li><a class="dropdown-item" href="/BakeryList">디저트 리스트</a></li>
      <li><a class="dropdown-item" href="/TeaList">차 리스트</a></li>
    </ul>
  </li>
</ul>
<div class="float-end mb-1">
        <button type="button" class="btn btn-dark" @click="goToInsert">제품등록</button>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>제품명</th>
            <th>제품가격</th>
            <th>제품출시일</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(bakery, i) in bakeryList">
            <td>
              <img v-if="bakery.path!=null" :src="`/download/${bakery.id}/${bakery.path}`" style="height:50px;width:auto;" />
            </td>
            <td>{{bakery.product_name}}</td>
            <td>{{bakery.product_price}}</td>
            <td>{{bakery.created_date}}</td>
            <td>
              <button type="button" class="btn btn-info me-1" @click="goToImageInsert(coffee.id);">사진등록</button>
              <!-- <button type="button" class="btn btn-warning me-1" @click="goToUpdate(coffee.id);">수정</button> -->
              <button type="button" class="btn btn-danger" @click="bakeryDelete(bakery.id);">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  data() {
    return {
      bakeryList: {}
    };
  },
  created() {
	this.productId = this.$route.query.product_id
    this.getbakeryList();
  },
  methods: {
    async getbakeryList() {
      this.bakeryList = await this.$api("/api/bakeryList2",{});
      console.log('this.bakeryList',this.bakeryList);
    },
    goToInsert() {
      this.$router.push({path:'/BakeryCreate'});
    },
    // goToDetail(product_id) {
    //  this.$router.push({path:'/detail', query:{product_id:product_id}});
    // },
    // goToUpdate(product_id) {
    //   this.$router.push({path:'/update', query:{product_id:product_id}});
    // },
    goToImageInsert(product_id) {
      this.$router.push({path:'/bakeryImageInsert', query:{product_id:product_id}});
    },
    bakeryDelete(product_id) {
      this.$swal.fire({
        title: '정말 삭제하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `삭제`,
        cancelButtonText: `취소`
      }).then(async (result) => {
        if (result.isConfirmed) {
          console.log(product_id)
          await this.$api("/api/bakeryDelete",{param:[product_id]});
          this.getbakeryList();
          this.$swal.fire('삭제되었습니다!', '', 'success')
        }
      });
    }
  }
}
</script>