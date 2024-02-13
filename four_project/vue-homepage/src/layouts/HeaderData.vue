<template>
    <nav class="navbar bg-body-tertiary" style="background-color: black">
        <div class="container-fluid">
          <a class="navbar-brand" href="/" style="color:white" >
            <img src="../assets/logo.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top">Four Color Cafe's
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item"><router-link class="nav-link" to="/CoffeeData" style="color:white" active-class="ac">Coffee</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/AdeDate" style="color:white">Ade/Shake</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/BaKer" style="color:white">Bakery</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/TeaData" style="color:white">Tea</router-link></li>
            <li v-if="isLoggedIn" class="nav-item"><router-link class="nav-link" to="/CoffeeList" style="color:white">salesList</router-link></li>
            <li v-if="isLoggedIn" class="nav-item"><router-link class="nav-link" to="/CoffeeCreate" style="color:white">등록</router-link></li>
          </ul>

        <router-link v-if="!isLoggedIn" to="/AdminLogin" class="btn btn-outline-secondary" style="color:white">로그인</router-link>
        <button v-if="isLoggedIn" @click="logout" class="btn btn-outline-secondary" style="color:white" >로그아웃</button>
    </div>
</nav>
</template>
<!-- eslint-disable-next--line -->
<!-- eslint-disable -->
<script>
import AdminLogin from '../views/AdminLogin.vue'
export default {
  name: 'HeaderData',
  data () {
    return {
    // isLoggedIn: 1,
    // isPaymentModalOpen: false,
    login: 0
    }
  },
  computed: {
    isLoggedIn() {
       return this.$store.state.isLoggedIn;
    }
  },
  components: {
    AdminLogin
  },
  methods: {

    openPaymentModal() {
      this.isPaymentModalOpen = true;
    },
    submitPayment() {
      this.isPaymentModalOpen = false;
      alert('결제가 완료되었습니다!');
    },
    logout () {
      this.$store.state.isLoggedIn = false;
      alert("로그아웃 되었습니다.")
    },
    loginSuccess() {
      // 로그인 성공 시 메뉴를 변경하는 로직 추가
      this.isLoggedIn = true;
    }

}
}
</script>

<style>
li{
  font-size: 24px;
}
.ac{
  color: blueviolet;
}
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
    width: 300px;
    padding: 20px;
    border-radius: 5px;
    position: relative;
}
</style>
