<template>
  <div class="gallery">
    <HeaderHero title="Gallery" :background-image="backgroundImage" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>The Property</h1>
          <hr />
          <div class="card-container d-flex flex-wrap">
            <div
              v-for="(item, index) in house"
              :key="index"
              class="images col-lg-4 col-md-6 col-sm-6"
            >
              <a
                href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg"
              >
                <img
                  :src="item.src"
                  class="d-block w-100 glightbox"
                  style="border-radius: 5px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <h1>The Animals</h1>
          <hr />
          <div class="card-container d-flex flex-wrap">
            <div
              v-for="(item, index) in animals"
              :key="index"
              class="images col-lg-4 col-md-6 col-sm-6"
            >
              <a
                href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg"
              >
                <img
                  :src="item.src"
                  class="d-block w-100 glightbox"
                  style="border-radius: 5px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHero from "../components/HeaderHero.vue";
import "glightbox/dist/css/glightbox.css";
import "glightbox/dist/js/glightbox.js";
import GLightbox from "glightbox";
export default {
  name: "GalleryPage",
  components: { HeaderHero },
  data() {
    return {
      backgroundImage: require("../assets/OutsideHouseView.jpg"),
      house: [
        {
          src: require("../assets/OutsideHouse.jpg"),
        },
        {
          src: require("../assets/OutsideHouse.jpg"),
        },
        {
          src: require("../assets/OutsideHouseView.jpg"),
        },
        {
          src: require("../assets/Boonah.jpg"),
        },
        {
          src: require("../assets/OutsideHouseView.jpg"),
        },
        {
          src: require("../assets/OutsideHouseView.jpg"),
        },
      ],
      animals: [
        {
          src: "https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/5ca02cc9-253c-49fb-adfc-3be74e6ef4c8.jpeg?im_w=1440",
        },
        {
          src: "https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/66740060-1123-49b7-9e05-d977195c0d32.jpeg?im_w=1440",
        },
        {
          src: "https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/6636776a-aec5-4de1-8cb9-4fe370ec7499.jpeg?im_w=1440",
        },
        {
          src: "https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/1d2d7daf-c57e-404b-8c5d-660994f5a909.jpeg?im_w=1440",
        },
        {
          src: "https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/c7049a70-97ef-4ee3-af38-15e914d0c683.jpeg?im_w=1440",
        },
        {
          src: "https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/15666301-1412-4570-aced-b0bccb68a474.jpeg?im_w=1440",
        },
      ],
    };
  },

  mounted() {
    //lightbox settings
    this.lightbox = GLightbox({
      selector: ".glightbox",
    });
  },
};
</script>

<style scoped>
.images {
  padding: 10px;
  background-color: rgb(39, 38, 38);
}
hr {
  color: white;
}
h1 {
  margin-top: 50px;
  color: white;
}
.gallery {
  background-color: rgb(39, 38, 38);
}
</style>
