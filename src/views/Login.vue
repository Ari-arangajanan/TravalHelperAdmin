<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <div class="row d-flex justify-content-center align-items-center background-rectangle">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img src="@/assets/travel-helper-logo.png" alt="Travel Helper Logo" class="luggage-img" />
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="card p-4 shadow-lg custom-background">
          <div class="text-center mb-4">
            <h1 class="h1">It is a paradise, Experience it!</h1>
          </div>
          <form @submit.prevent="handleLogin">
            <div class="mb-2">
              <label for="userName" class="form-label">User name</label>
              <input type="text" v-model="email" class="form-control" id="userName" required />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" v-model="password" class="form-control" id="password" required />
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="form-check">
                <input type="checkbox" v-model="rememberMe" class="form-check-input" id="rememberMe" />
                <label class="form-check-label" for="rememberMe">Remember me</label>
              </div>
              <a href="#" @click.prevent="forgotPassword" class="text-decoration-none">Forgot Password?</a>
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginAdmin",
};
</script>

<style scoped>

.luggage-img {
  max-width: 100%;
  height: 50vh;
  max-height: 80vh;
  z-index: 2;
}

.container-fluid {
  height: 100vh;
}

.background-rectangle {
  background-color: rgba(251, 250, 250, 0.5);
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  padding: 10vh;
}

.custom-background {
  /* background-color: #66b5d3; */
  border-color: #66b5d3;
  margin-right: 20px;
  border-radius: 5%;
}

.h1 {
  color: #ec8c4f;
}
.btn{
  margin-bottom: 3%;
}
.container-fluid{
  background: url("@/assets/mainBackground2.jpg") no-repeat top center fixed;
  background-size: cover;
  
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
  .luggage-img {
    max-width: 30%; /* Adjust as needed for smaller size */
  }
}
</style>
