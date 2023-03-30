<template>
  <div class="hero" :style="heroStyle">
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderHero",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
  },
  computed: {
    heroStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
      };
    },
  },
};
</script>

<style>
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-position: center bottom;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 2rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .hero {
    height: 100vh;
  }
  .hero h1 {
    font-size: 2.5rem;
  }
  .hero .col-md-6 {
    margin-bottom: 2rem;
  }
}

.hero {
  position: relative;
}

.hero::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 28, 28, 0.288); /* Adjust the opacity as needed */
}

.hero h1,
.hero p {
  position: relative;
  z-index: 1;
  color: #fff; /* Change the text color to white */
}
</style>
