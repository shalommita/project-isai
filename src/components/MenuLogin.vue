<!-- <template>
    <div class="login">
        <form>
            <h3>Login</h3>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name:'Log-In'
    }
</script>
<style>
    
</style> -->
<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" placeholder="Email..">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" placeholder="Password..">
            </div>
            <router-link to="/Beranda" class="menus" @click="beranda()">
            <button type="submit" class="btn btn-primary">Submit</button>
              </router-link>
            <div class="social-icons d-flex mt-3 gap-4 justify-center">
              
                  <i class="fa fa-google" aria-hidden="true"></i>
                  <i class="fa fa-facebook"></i>
                  <i class="fa fa-twitter"></i>
              </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
methods: {
beranda() {
  if (this.items.length < 3) {
    this.items.push('Beranda')
  }
  else {
    this.items.shift()
    this.items.push('Beranda')
  }
}}}
</script>