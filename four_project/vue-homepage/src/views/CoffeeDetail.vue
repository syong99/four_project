<template>
    <main class="container mt-3">
    <div class="row">
      <div class="col-md-7">
        <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <!-- <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="" class="d-block w-100" alt="...">
                </div>
            <div class="carousel-item">
              <img src="" class="d-block w-100" alt="...">
            </div>
          </div> -->
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="col-md-5">
        <div class="card border">
          <div class="card-body">
            <h5 class="card-title  pt-3 pb-3">{{ coffeeDetail.product_name }}</h5>
            <h6 class="card-title border-top pt-3 pb-3">{{ coffeeDetail.product_price }}원</h6>
            <p class="card-title border-top pt-2">
            <span class="badge badge bg-dark me-2 mb-2">{{ coffeeDetail.category1 }}</span>
            <span class="badge badge-sm bg-dark me-2 mb-2">{{ coffeeDetail.category2 }}</span>
            </p>

            <div class="cad border-top pt-3 pb-3">
              <h6>얼음선택(1개선택)</h6>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                각얼음
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                간얼음
              </label>
            </div>
          </div>

          <div class="card-text border-top pt-3 pb-3">
            <h6>샷추가(0~4개선택)</h6>
            <div class="row">
              <div class="col-auto ">
                <label class="col-form-label ">샷추가</label>
              </div>
              <div class="d-flex justify-content-end">
              <div class="col-auto ">
                <div class="input-group ">
                  <span class="input-group-text" style="cursor:pointer;" @click="minus1(-1);">-</span>
                  <input type="text" class="form-control" style="width:40px;" v-model="count1">
                  <span class="input-group-text" style="cursor:pointer;" @click="plus1(1);">+</span>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div class="card-text border-top pt-3 pb-3">
            <div class="row">
            <h6>토핑추가(0~4개선택)</h6>
              <div class="col-auto">
                <label class="col-form-label">펄추가</label>
              </div>
              <div class="d-flex justify-content-end">
              <div class="col-auto">
                <div class="input-group">
                  <span class="input-group-text" style="cursor:pointer;" @click="minus2(-1);">-</span>
                  <input type="text" class="form-control" style="width:40px;" v-model="count2">
                  <span class="input-group-text" style="cursor:pointer;" @click="plus2(1);">+</span>
                </div>
              </div>
              </div>
              <div class="col-auto">
                <label class="col-form-label">헤이즐넛시럽추가</label>
              </div>
              <div class="d-flex justify-content-end">
              <div class="col-auto">
                <div class="input-group">
                  <span class="input-group-text" style="cursor:pointer;" @click="minus3(-1);">-</span>
                  <input type="text" class="form-control" style="width:40px;" v-model="count3">
                  <span class="input-group-text" style="cursor:pointer;" @click="plus3(1);">+</span>
                </div>
              </div>
            </div>
          </div>
          </div>
            <div class="card-text border-top pt-3">
            <div class="row ">
              <div class="col-auto ">
                <label class="col-form-label me-3">수량</label>
              </div>
              <div class="col-auto">
                <div class="input-group">
                  <span class="input-group-text" style="cursor:pointer;" @click="minus(-1);">-</span>
                  <input type="text" class="form-control" style="width:40px;" v-model="count">
                  <span class="input-group-text" style="cursor:pointer;" @click="plus(1);">+</span>
                </div>
              </div>
            </div>
          </div>
            <p class="fw-bold mt-3">{{totalPrice}}원</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="col-6 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-dark">장바구니 담기</button>
              </div>
              <div class="col-6 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-danger">주문하기</button>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<!-- eslint-disable-next--line -->
<!-- eslint-disable -->
<script>
export default {
  data () {
    return {
	count: 0,
    count1: 0,
    count2: 0,
    count3: 0,
	totalPrice: 0,
    productId: 0,
    coffeeDetail: {},
    productImage: []
    }
  },
    created () {
    this.productId = this.$route.query.product_id
    console.log('this.productId',this.productId)
    this.getcoffeeDetail()
    // this.getProductImage()
  },
  methods: {
     async getcoffeeDetail () {
      let coffeeDetail = await this.$api('/api/coffeeDetail', {param: [this.productId]})
      console.log(this.coffeeDetail.id)
	  if(coffeeDetail.length > 0 ) {
		this.coffeeDetail = coffeeDetail[0];
	  }
      console.log('this.coffeeDetail',this.coffeeDetail)
    },
    // async getProductImage () {
    //   this.productImage = await this.$api('/api/productMainImages', { param: [this.productId] })
    //   console.log(this.productImage)
    // },
	plus() {
	this.count = this.count +1;
	this.totalPrice = 5000 * this.count + 500 * this.count1 + 1200 * this.count2 + 800 * this.count3;
	},
	minus() {
		if(this.count == 0) {
			return;
		}else {
	this.count = this.count -1;
	this.totalPrice = 5000 * this.count + 500 * this.count1 + 1200 * this.count2 + 800 * this.count3;
      }
	},
  plus1() {
	this.count1 = this.count1 +1;
	this.totalPrice = 5000 * this.count + 500 * this.count1 + 1200 * this.count2 + 800 * this.count3;
	},
	minus1() {
		if(this.count1 == 0) {
			return;
		}else {
	this.count1 = this.count1 -1;
	this.totalPrice = 5000 * this.count + 500 * this.count1 + 1200 * this.count2 + 800 * this.count3;
      }
	},
  plus2() {
	this.count2 = this.count2 +1;
	this.totalPrice = 5000 * this.count + 500 * this.count1 + 1200 * this.count2 + 800 * this.count3;
	},
	minus2() {
		if(this.count2 == 0) {
			return;
		}else {
	this.count2 = this.count2 -1;
	this.totalPrice = 5000 * this.count + 500 * this.count1 + 1200 * this.count2 + 800 * this.count3;
      }
	},plus3() {
	this.count3 = this.count3 +1;
	this.totalPrice = 5000 * this.count + 500 * this.count1 + 1200 * this.count2 + 800 * this.count3;
	},
	minus3() {
		if(this.count3 == 0) {
			return;
		}else {
	this.count3 = this.count3 -1;
	this.totalPrice = 5000 * this.count + 500 * this.count1 + 1200 * this.count2 + 800 * this.count3;
      }
	},
  getCurrencyFormat(value) {
    return this.$currencyFormat(value)
  }
  }
}
</script>
