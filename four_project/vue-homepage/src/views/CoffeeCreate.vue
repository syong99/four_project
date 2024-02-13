<template>
<!-- eslint-disable-next-line -->
<!-- eslint-disable -->
		<main class="mt-3">
			<div class="container">
			  <div class="col-12">
				<h2 class="text-center">커피 등록</h2>
				 <ul class="nav nav-pills">
  <li class="nav-item">
  </li>
  <li class="nav-item dropdown" style="margin-left:-20px;">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style="color:red; font-size:20px">등록 선택</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="/CoffeeCreate" style="font-size:18px">커피 등록</a></li>
      <li><a class="dropdown-item" href="/AdeCreate" style="font-size:18px">에이드/쉐이크 등록</a></li>
      <li><a class="dropdown-item" href="/BakeryCreate" style="font-size:18px">디저트 등록</a></li>
      <li><a class="dropdown-item" href="/TeaCreate" style="font-size:18px">차 등록</a></li>
    </ul>
  </li>
</ul>
				<div class="mb-3 row">
						<label class="col-md-3 col-form-label">제품명</label>
					<div class="col-md-9">
						  <input type="text" class="form-control" v-model="product.product_name">
					</div>
				</div>
				<div class="mb-3 row">
						<label class="col-md-3 col-form-label">제품가격</label>
					<div class="col-md-9">
						<div class="input-group">
							<input type="text" class="form-control" v-model="product.product_price">
							<span class="input-group-text">원</span>
						  </div>
					</div>
				</div>
				<div class="mb-3 row">
					<label class="col-md-3 col-form-label">제품카테고리</label>
					<div class="col-md-9">
						<div class="row">
							<div class="col-auto">
								<select class="form-select" v-model="cate1" @change="changeCategory1">
									<option :value="cate" :key="i" v-for="(cate, i) in category1">{{ cate }}</option>
								</select>
							</div>
							<div class="col-auto">
								<select class="form-select" v-model="cate2" @change="changeCategory2">
									<option :value="cate" :key="i" v-for="(cate, i) in category2">{{ cate }}</option>
								</select>
							</div>
							<div class="col-auto">
								<select class="form-select" v-model="cate3" @change="changeCategory3">
									<option :value="cate" :key="i" v-for="(cate, i) in category3">{{ cate }}</option>
								</select>
							</div>
						</div>

					</div>
				</div>
				<div class="mb-3 row">
					<label class="col-md-3 col-form-label">태그</label>
					<div class="col-md-9">
					  <input type="text" class="form-control" v-model="product.tags">
					</div>
				</div>
				<div class="mb-3 row">
					<label class="col-md-3 col-form-label">출고일</label>
					<div class="col-md-9">
						<div class="input-group">
							<input type="text" class="form-control" v-model="product.created_date">
							<span class="input-group-text">일 이내 출고</span>
						  </div>
					</div>
				</div>

				<div class="mb-3 row">
					<div class="col-6 d-grid p-1">
						<button type="button" class="btn btn-lg btn-dark" @click="goToList">취소하기</button>
					</div>
					<div class="col-6 d-grid p-1">
						<button type="button" class="btn btn-lg btn-danger" @click="productUpdate">저장하기</button>
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
		data() {
			return {
			product: {
			product_name:'',
			product_price: 0,
			category_id:1,
			tags:'',
			created_date:0,
			}
			}

	 },
	created () {
    this.productId = this.$route.query.product_id
    this.getcoffeeDetail();
	this.getCategoryList();
   	},
	methods: {
		goToList() {
	this.$router.push({path:'/CoffeeList'});
   },
   async getCategoryList(){
      let categoryList = await this.$api("/api/categoryList",{});
      this.categoryList = categoryList;
	  console.log('this.categoryList',this.categoryList)

      let oCategory = {};
      categoryList.forEach(item => {        //배열명.forEach(item)이렇게 사용한다. 여기서는 category1에서 이름이 다른 각각의 이름이 출력된다.
		oCategory[item.category1] = item.id;
      });
	   console.log('oCategory',oCategory)  //{전자제품: 4, 가전제품: 5, 생필품: 6}

      let category1 = [];
      for(let key in oCategory) {
        category1.push(key);	          //키를 다시 부여하는 것으로 보인다.
      }
	  console.log('category1',category1) //(3) ['전자제품', '가전제품', '생필품']

      this.category1 = category1;  //category1 변수에 저장한다. 그럼 위 쪽에서 출력된다.

	  let category2 = [];
      category2 = categoryList.filter(c => {  //목록에서 카테고리가 같은 (필터링)목록만 별도로 저장한다.
        return c.category1 == category1[0];	  //키 0가 전자제품이므로 category1과 비교하여 같은 데이터만 저장함.
      });

	},
		async getcoffeeDetail () {
      let coffeeDetail = await this.$api('/api/coffeeDetail', {})
	  if(coffeeDetail.length > 0 ) {
		this.coffeeDetail = coffeeDetail[0];
	  }
      console.log('this.coffeeDetail',this.coffeeDetail)
    },
	changeCategory1(){
      // this.cate1
      this.category3 = [];
      let categoryList = this.categoryList.filter(c => {
        return c.category1 == this.cate1;
      });

      let oCategory2 = {};
      categoryList.forEach(item => {
        oCategory2[item.category2] = item.id;
      });

      let category2 = [];
      for(let key in oCategory2) {
        category2.push(key);
      }

      this.category2 = category2;
    },
	changeCategory2(){
      let categoryList = this.categoryList.filter(c => {
        return (c.category1 == this.cate1 && c.category2 == this.cate2)
      });

      let oCategory3 = {};
      categoryList.forEach(item => {
        oCategory3[item.category3] = item.id;
      });

      let category3 = [];
      for(let key in oCategory3) {
        category3.push(key);
      }

      this.category3 = category3;
    },
	 productUpdate() {
      if(this.product.product_name == "") {
        return this.$swal("제품명은 필수 입력값입니다.");
      }

      if(this.product.product_price == "" || this.coffeeDetail.product_price == 0) {
        return this.$swal("제품 가격을 입력하세요.");
      }

      if(this.product.outbound_days == "" || this.coffeeDetail.outbound_days == 0) {
        return this.$swal("출고일을 입력하세요.");
      }

    //   this.product.category_id = this.categoryList.filter(c => {
    //     return (c.category1 == this.cate1 && c.category2 == this.cate2 && c.category3 == this.cate3);
    //   })[0];

    //   console.log(this.product.category_id);

      this.$swal.fire({
        title: '정말 등록 하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `생성`,
        cancelButtonText: `취소`
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.$api("/api/coffeeInsert",{param:[this.product]});
          this.$swal.fire('저장되었습니다!', '', 'success');
          this.$router.push({path:'/CoffeeList'});
        }
      });
    }
  }
}
</script>