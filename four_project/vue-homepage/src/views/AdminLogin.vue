<template>
  <div class="container d-flex align-items-center justify-content-center">
    <main class="form-signin w-100 m-auto">
      <form @submit.prevent="login">
        <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">관리자 로그인</h1>

        <div class="form-floating">
          <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">아이디를 입력해주세요.</label>
        </div>
        <div class="form-floating">
          <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">패스워드를 입력해주세요.</label>
        </div>

        <div class="form-check text-start my-3">
          <input v-model="rememberMe" class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit" @click="logout">로그인</button>
        <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
      </form>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      a: false,
      email: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    logout () {
      this.$store.commit('logout')
    },
    async login () {
      try {
        // 서버로 보낼 데이터 준비
        const userData = {
          email: this.email,
          password: this.password,
          rememberMe: this.rememberMe
        }

        // 서버와 통신하여 로그인 시도
        const response = await axios.post('/api/login', userData)

        // 서버로부터 받은 응답을 확인
        if (response.data.success) {
          // 로그인 성공시
          this.$swal('관리자 로그인 성공!')
          this.$router.push({ path: '/CoffeeList' })
        } else {
          // 로그인 실패시
          this.$swal('로그인 실패', '아이디 또는 비밀번호가 잘못되었습니다.', 'error')
        }
      } catch (error) {
        console.error('로그인 에러:', error)
        this.$swal('에러', '서버와의 통신 중 오류가 발생했습니다.', 'error')
      }
    }
  }
}
</script>
