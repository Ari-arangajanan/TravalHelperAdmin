<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="row w-100 background-rectangle">
      <div class="col-md-6 d-flex justify-content-center align-items-center position-relative">
        <!-- <div class="background-rectangle rounded position-absolute"></div> -->
        <img src="@/assets/travel-helper-logo.png" alt="Travel Helper Logo" class="luggage-img position-relative" />
      </div>
      <div class="col-md-4 position-relative">
        <div class="card p-4 shadow-lg custom-background">
          <div class="text-center mb-4">
            <h1 class="h1">It is paradise, Experience it!</h1>
          </div>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="userName" class="form-label">User name</label>
              <input type="userName" v-model="email" class="form-control" id="userName" required />
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

<script >

  export default{
    name: "LoginAdmin",
  }

</script>

<style scoped>
.background-rectangle {
  width:60%; /* Adjust width as needed */
  height: 80%; /* Adjust height as needed */
  background-color: #ffffff; /* Change color for background */
  border-radius: 20px;
  z-index: 1;
}

.luggage-img {
  width: 50%;
  z-index: 2;
}

.container {
  height: 100vh; /* Set the container height to the full viewport height */
  
}

.row {
  height: 100vh; /* Ensure the row takes up the full height of the container */
}

.col-md-4 {
  display: flex;
  justify-content: center; /* Center the column horizontally */
  align-items: center; /* Center the column vertically */
  
}
.custom-background{
  background-color: #66b5d3;
}
.h1{
  color: #ffffff;
}

.background-rectangle{
  position: fixed;
  top: 10%; /* Adjust as needed */
  left: 10%; 
  right: 10%;/* Adjust as needed */
  bottom: 10%;
  width: 80%; /* Cover 80% of the screen */
  height: 80%; /* Cover 80% of the screen */
  background-color: rgba(251, 250, 250, 0.5); /* 50% transparent black */
  border-radius: 20px; /* Rounded corners */
  z-index: 999; /* Ensure it's above other content */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5); /* Drop shadow */
}
</style>
