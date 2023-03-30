<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Mount Maroon Farm Stay</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/gallery"
                  >Gallery</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/ContactPage"
                  >Contact Us</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/BookNow"
                  >Book Now</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Explore"
                  >Explore</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>

<style></style>
