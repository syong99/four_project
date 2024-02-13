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
            <h5 class="card-title  pt-3 pb-3">{{ adeDetail.product_name }}</h5>
            <h6 class="card-title border-top pt-3 pb-3">{{ adeDetail.product_price }}원</h6>
            <p class="card-title border-top pt-2">
            <span class="badge badge bg-dark me-2 mb-2">{{ adeDetail.category1 }}</span>
            <span class="badge badge-sm bg-dark me-2 mb-2">{{ adeDetail.category2 }}</span>
            <span class="badge badge-sm bg-dark me-2 mb-2">{{ adeDetail.category3 }}</span>
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
            <h6>사이즈 업</h6>
            <div class="row">
              <div class="col-auto ">
                <label class="col-form-label "></label>
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
      <button type="button" class="btn btn-lg btn-danger" @click="openPaymentModal">주문하기</button>
    </div>
    <!-- 결제 모달 -->
    <div id="modal-box" :class="{ 'active': isPaymentModalOpen }">
  <div id="modal-contents">
    <b-modal v-model="isPaymentModalOpen" title="결제하기">
      <form @submit.prevent="submitPayment">
        <div class="container">
          <div class="row">
            <h4 class="text">결제하실 방식을 선택해 주세요.</h4>
            <div class="col-md-6 text-center mb-4 " style="margin-top:20px; margin-left:-80; width:100px height:100px">
              <img src="../assets/card.png" alt="카드 이미지" class="img-fluid mb-2">
              <button type="button" class="btn btn-outline-success">카드 결제</button>
            </div>
            <div class="col-md-6 text-center mb-4" style="margin-top:-32px; margin-left:-70 width:100px height:100px">
              <img src="../assets/cash.png" alt="현금 이미지" class="img-fluid mb-2">
              <button type="button" class="btn btn-outline-success">현금 결제</button>
            </div>
          </div>
          <div class="container text-center">
          <button type="submit" class="btn btn-success me-4">결제하기</button>
          <div class="position-absolute top-0 end-0" style="cursor:pointer; color:brown" @click="closeModal">취소</div>
          </div>
        </div>
      </form>
    </b-modal>
  </div>
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
    isPaymentModalOpen: false,
    cardNumber: '',
    expiryDate: '',
    cvv: '',
	  count: 0,
    count1: 0,
    count2: 0,
    count3: 0,
	  totalPrice: 0,
    productId: 0,
    adeDetail: {},
    productImage: []
    }
  },
    created () {
    this.productId = this.$route.query.product_id
    console.log('this.productId',this.productId)
    this.getadeDetail()
    // this.getProductImage()
  },
  methods: {
     async getadeDetail () {
      let adeDetail = await this.$api('/api/adeDetail', {param: [this.productId]})
      console.log(this.adeDetail.id)
	  if(adeDetail.length > 0 ) {
		this.adeDetail = adeDetail[0];
	  }
      console.log('this.adeDetail',this.adeDetail)
    },
    openPaymentModal() {
      this.isPaymentModalOpen = true;
    },
    submitPayment() {
      this.isPaymentModalOpen = false;
      this.$swal("주문 완료!")
    },
    closeModal() {
      this.isPaymentModalOpen = false;
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
<style>
#modal-box{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: none;
    justify-content: center;
    align-items: center;
}
#modal-box.active{
  display: flex;
}

#modal-contents{
    background-color: rgb(255, 255, 255);
    width: 500px;
    padding: 30px;
    border-radius: 5px;
    position: relative;
}
#modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  overflow: auto;
}
#modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1250px;
  background: #fff;
  border-radius: 10px;
  padding: 440px;
  box-sizing: border-box;
  z-index: 1100;
}
.scr{
  width: 100%;
  height: 100%;
}
</style>
