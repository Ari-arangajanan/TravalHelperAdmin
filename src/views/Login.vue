<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <div class="row d-flex justify-content-center align-items-center background-rectangle">
      <div class="col-md-6 d-flex justify-content-center align-items-center non-mobile-view">
        <img src="@/assets/travalimg1.png" alt="Travel Helper Logo" class="luggage-img" />
      </div>
      <div class="col-sm-6 d-flex justify-content-center align-items-center ">
        <div class="card p-4 shadow-lg custom-background">
          <div class="text-center mb-4">
            <h1 class="h1">It is a paradise, Experience it!</h1>
          </div>
          <form @submit.prevent="handleLogin" class="w-100">
            <div class="mb-3">
              <label for="userName" class="form-label">User name</label>
              <input type="text" v-model="userName" class="form-control" id="userName" required />
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
              <!-- <a href="#" @click.prevent="forgotPassword" class="text-decoration-none">Forgot Password?</a> -->
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Home from "./Home.vue"

export default {
  name: "LoginAdmin",
  data() {
    return {
      userName: "",
      password: "",
      rememberMe: false,
      isMobileView: window.innerWidth <= 576,
      isTabView: window.innerWidth <= 720,
    };
  },
  components:{
    Home,
  },
  methods: {
    checkViewport() {
      this.isMobileView = window.innerWidth <= 576 || window.innerWidth <= 720;
    },

    async handleLogin() {
      try {
        console.log("--------------------------called");
        const response = await axios.post('admin/systemUser/login', {  // Use the correct URL here
          userName: this.userName,  // Ensure you are using the correct field name (email or userName)
          password: this.password,
          rememberMe: this.rememberMe,
        }
      );
        console.log(response.data);
        localStorage.setItem(
          "token",response.data
      )
        // Handle successful login (e.g., redirect to dashboard, store token, etc.)
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.error('Response error:', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error in request setup:', error.message);
        }
        console.error('Error config:', error.config);
      }
  },
 mounted() {
    this.checkViewport();
    window.addEventListener('resize', this.checkViewport);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkViewport);
  },
}
};
</script>

<style scoped>

.non-mobile-view {
  display: block;
}

.luggage-img {
  max-width: 100%;
  height: 600px;
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
  border-radius: 5%;
  text-align: center;
  align-content: center;
  width: 100%;
  max-width: 400px; /* Adjust as needed */
  aspect-ratio: 1 / 1; /* Maintain a square aspect ratio */
}


.h1 {
  color: #ec8c4f;
}
.btn{
  margin-bottom: 3%;
}
.container-fluid{
  background: url("@/assets/mainBackground3.jpg") no-repeat top center fixed;
  background-size: cover;
  
}

@media (min-width: 576px) and (max-width: 767.98px) {
  /* .row {
    flex-direction: column;
  } */
  .luggage-img {
    max-width: 0%;
    max-height: auto;
  }
  .non-mobile-view {
    display: none;
    width: 0px;
    height: 0px;
  }
  .w-100{
    max-width:400%;
    max-height: 400px;
  }

  .background-rectangle {
  background-color: rgba(251, 250, 250, 0.5);
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  padding: 18vh;
  }
  .col-sm-6{
    flex: 0 0 auto;
    width: 100%;
  }
  
}

@media (max-width: 576px) {
  /* .row {
    flex-direction: column;
  } */
  .luggage-img {
    max-width: 0%; /* Adjust as needed for smaller size */
    max-height: auto; /* Adjust as needed for smaller size */
  }
  .container-fluid {
    background: url("@/assets/mobileBackground.jpg") no-repeat center center fixed;
    background-size: cover;
  }
  .non-mobile-view {
    display: none;
    width: 0px;
    height: 0px;
  }
  /* .custom-background{
    width: 500px;
    max-width: 576px;
    
  } */
  .w-100{
    max-width:150%;
    max-height: 400px;
  }
  .background-rectangle {
  background-color: rgba(251, 250, 250, 0.5);
  border-radius: 2px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  padding: 1vw;
  
}

@media (max-width: 768) {
  /* .row {
    flex-direction: column;
  } */
  .luggage-img {
    max-width: 0%; /* Adjust as needed for smaller size */
    max-height: auto; /* Adjust as needed for smaller size */
  }
  .container-fluid {
    background: url("@/assets/mobileBackground.jpg") no-repeat center center fixed;
    background-size: cover;
  }
  .non-mobile-view {
    display: none;
    width: 0px;
    height: 0px;
  }
  /* .custom-background{
    width: 500px;
    max-width: 576px;
    
  } */
  .w-100{
    max-width:150%;
    max-height: 400px;
  }
  .background-rectangle {
  background-color: rgba(251, 250, 250, 0.5);
  border-radius: 2px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  padding: 1vw;
  
  }
  .col-sm-6{
    flex: 0 0 auto;
    width: 100%;
  }
  
}

}

</style>
