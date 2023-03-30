<template>
  <HeaderHero
    title="Mount Maroon Farm Stay"
    :backgroundImage="backgroundImage"
  />

  <section class="features">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-6 col-sm-12">
          <div class="feature">
            <h2>Welcome to Mount Maroon Farm Stay</h2>
            <hr />
            <p>
              Take a break and unwind at this secluded couples retreat. With
              majestic views of Mt Maroon and surrounding mountains . Our Farm
              house is the perfect retreat for that get away , all within less
              than 90 minute drive of Brisbane/Gold Coast. Only 12 minutes from
              Boonah and 3 minutes for Maroon Dam ,this picturesque Farm is the
              ideal location for a Scenic Rim get-away, writers retreat, Artist
              inspiration or wedding accommodation for Boonah or Kalbar.
            </p>
            <p>
              The farm house is perched on the highest point of the property,
              commanding 180 deg views of the valley and mountains. With two
              decks to enjoy the changing colours of Mt Maroon you will have
              full access to the property and are able to wander the five
              paddocks .
            </p>
          </div>
        </div>

        <div class="col-md-12 col-lg-6 col-sm-12">
          <div class="feature">
            <div class="card">
              <img
                src="
                https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/b04438c7-b547-448e-873f-bb563d07578b.jpeg?im_w=1440"
                class="card img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="features features2">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-6 col-sm-12">
          <div class="feature">
            <div class="card">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/eb42d9fb-5383-4c75-b9f2-80d0891b9424.jpeg?im_w=1440"
                class="card img-fluid"
              />
            </div>
          </div>
        </div>

        <div class="col-md-12 col-lg-6 col-sm-12">
          <div class="feature">
            <h2>The Property</h2>
            <hr />

            <p>
              There are 24 Sheep and two cheeky horses that love to get a carrot
              or apple. They may even go for a walk with you in the main
              paddock.
            </p>
            <p>
              Our house is very spacious for a couple with three decks and out
              door undercover areas to enjoy the views. There are fold out
              tables supplied for outdoor dining . Two hammocks available as
              well . There is a HD TV and an open Netflicks account ,but no WiFi
              or Free to Air .Mobile service works well for 4G telstra for hot
              spotting. The kitchen is set up for self-catering and has a
              microwave, oven, kettle and toaster with pantry staples and a well
              stocked spice rack. Or perhaps cook a wood fire pizza . The
              nearest supermarket is in Boonah, (Drakes IGA) call into Oppy's
              fruit and Veg for local fresh produce. We can recommend the two
              quality butchers in town for supplies. Fire pit outside (weather
              permitting) and being in a rural area, fire restrictions are
              sometimes in place . There is extra wood for sale at the Farm.
              There is an office work space complete with extra screen (if you
              need to work )
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="features">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-6 col-sm-12">
          <div class="feature">
            <h2>The House</h2>
            <hr />
            <p>
              Our house is the perfect retreat for a couple, offering three
              decks and outdoor undercover areas with stunning views. Enjoy
              outdoor dining with the fold-out tables provided, or relax in one
              of our two hammocks. For entertainment, we have an HD TV and an
              open Netflix account, but please note that we don't have WiFi or
              Free to Air. You can use your Telstra 4G mobile service for
              hotspotting.
            </p>
            <p>
              The kitchen is fully equipped for self-catering, with a microwave,
              oven, kettle, and toaster, as well as pantry staples and a
              well-stocked spice rack. You can even make wood-fired pizzas! The
              nearest supermarket is in Boonah at Drake's IGA, and Oppy's Fruit
              and Veg offers fresh local produce. We also recommend the two
              quality butchers in town for your supplies.
            </p>
            <p>
              and we have extra wood for sale at the farm. Please note that fire
              restrictions may apply in this rural area. If you need to work, we
              provide an office workspace complete with an extra screen."
              Outside, you can gather around the fire pit (weather permitting),
            </p>
          </div>
        </div>

        <div class="col-md-12 col-lg-6 col-sm-12">
          <div class="feature">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner container">
                <div
                  v-for="(item, index) in house"
                  :key="index"
                  :class="
                    index === 0 ? 'carousel-item active' : 'carousel-item '
                  "
                >
                  <img :src="item.src" class="img-fluid" />
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div
    class="banner"
    style="
      background-image: url('https://a0.muscache.com/im/pictures/e6e2f708-896b-4bfd-9812-04e5ac78eda4.jpg?im_w=1440');
    "
  ></div>

  <TestimonialSection />
</template>

<script>
import TestimonialSection from "../components/TestimonialSection.vue";
import HeaderHero from "../components/HeaderHero.vue";

export default {
  mounted() {},
  name: "HomeView",
  components: { TestimonialSection, HeaderHero },

  data() {
    return {
      backgroundImage: require("../assets/Boonah.jpg"),
      house: [
        {
          src: "https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/b4f51cb7-b8dd-4415-9c2e-169824162cb0.jpeg?im_w=1440 ",
        },
        {
          src: "https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/0eaadefc-328a-4ef1-bde7-df326e1541b1.jpeg?im_w=1440",
        },
        {
          src: "https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/bdcb5b35-9c8d-4526-92da-24e5128b62cb.jpeg?im_w=1440",
        },
        {
          src: "https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/ce06f36d-4446-430a-97e3-682c895cddcb.jpeg?im_w=1440",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(100%);
}
.carousel-inner img {
  height: 500px; /* set a fixed height */
  object-fit: cover; /* ensure the images fit within the container while maintaining their aspect ratio */
}
.container {
  margin-bottom: 100px;
}
.banner {
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-size: cover;
  background-position: center;

  margin-bottom: 50px;
}

.features {
  background-color: #f8f9fa;
  margin-top: 50px;
}

.features h2 {
  text-align: center;
}

.feature {
  text-align: center;
}

.feature h3 {
  font-size: 20px;
}

.feature p {
  font-size: 1.1rem;
  color: #666;
}
@media screen and (min-width: 200px) and (max-width: 991px) {
  .features2 h2 {
    margin-top: 50px;
  }
}
</style>
