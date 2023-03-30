<template>
  <HeaderHero
    title="Explore The Scenic Rim"
    :backgroundImage="backgroundImage"
  />
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-12 col-lg-6">
          <GMapMap
            :center="center"
            :zoom="14"
            style="height: 40vh; width: 100%"
          >
            <GMapCluster>
              <GMapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center = m.position"
              />
            </GMapCluster>
            <GMapMarker :position="center" />
          </GMapMap>
        </div>
        <div class="col-sm-6 col-md-12 col-lg-6">
          The Scenic Rim is a picturesque region located in southeast
          Queensland, Australia. Known for its stunning landscapes, charming
          towns, and unique experiences, the Scenic Rim is a great spot to visit
          for those looking for an escape from the hustle and bustle of city
          life. Visitors can explore the region's beautiful national parks,
          indulge in delicious local produce, and take part in a range of
          outdoor activities such as hiking, camping, and horse riding. With its
          friendly locals and relaxed atmosphere, the Scenic Rim offers a truly
          authentic Australian experience that is not to be missed. Come see for
          yourself why The Scenic Rim has been ranked in the world's top 10
          regions to travel to in 2022 by Lonely Planet.
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <h2>Our Scenic Rim Recommendations</h2>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-12 col-lg-6">
          <button class="btn btn-dark" @click="toggleLowerPortals" id="toggle">
            Lower Portals at Mount Barney National Park
          </button>
          <div v-if="showLowerPortals">
            <p>
              The Lower Portals at Mount Barney National Park are a true hidden
              gem, offering visitors a breathtaking and refreshing experience in
              the heart of the park. The Lower Portals are a series of cascading
              waterfalls and crystal-clear rock pools, nestled in a picturesque
              valley surrounded by lush rainforest and towering cliffs.
            </p>
            <p>
              The Lower Portals are accessed via a picturesque hiking trail that
              winds through the park's stunning scenery, and is suitable for all
              skill levels. As you approach the Lower Portals, you will be
              greeted by the sound of rushing water and the refreshing mist that
              fills the air.
            </p>

            <div class="col-sm-6 col-md-12 col-lg-6">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/eb42d9fb-5383-4c75-b9f2-80d0891b9424.jpeg?im_w=1440"
                class="card img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <h2>Our Scenic Rim Recommendations</h2>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-12 col-lg-6">
          <button class="btn btn-dark" @click="toggleLowerPortals">
            Lower Portals at Mount Barney National Park
          </button>
          <div v-if="showLowerPortals">
            <p>
              The Lower Portals at Mount Barney National Park are a true hidden
              gem, offering visitors a breathtaking and refreshing experience in
              the heart of the park. The Lower Portals are a series of cascading
              waterfalls and crystal-clear rock pools, nestled in a picturesque
              valley surrounded by lush rainforest and towering cliffs.
            </p>
            <p>
              The Lower Portals are accessed via a picturesque hiking trail that
              winds through the park's stunning scenery, and is suitable for all
              skill levels. As you approach the Lower Portals, you will be
              greeted by the sound of rushing water and the refreshing mist that
              fills the air.
            </p>

            <div class="col-sm-6 col-md-12 col-lg-6">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53084565/original/eb42d9fb-5383-4c75-b9f2-80d0891b9424.jpeg?im_w=1440"
                class="card img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HeaderHero from "../components/HeaderHero.vue";
export default {
  components: { HeaderHero },
  name: "App",
  data() {
    return {
      backgroundImage: require("../assets/Boonah.jpg"),
      center: { lat: -28.170486, lng: 152.671196 },
      showLowerPortals: false,

      markers: [
        {
          position: {
            lat: -28.170486,
            lng: 152.671196,
          },
        }, // Along list of clusters
      ],
    };
  },
  methods: {
    toggleLowerPortals() {
      this.showLowerPortals = !this.showLowerPortals;
    },
  },
};
</script>
<style scoped>
section {
  margin-top: 100px;
  margin-bottom: 50px;
}
h2 {
  margin-bottom: 50px;
}
</style>
