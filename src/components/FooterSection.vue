<template>
  <div class="footer">
    <div class="row">
      <div class="col-md-12 col-lg-4 col-sm-12">
        <div class="container align-items-center">
          <h1>Mount Maroon Farm Stay</h1>
        </div>
      </div>

      <div class="col-md-12 col-lg-4 col-sm-12 contact-us">
        <P><h3>Contact Us</h3></P>
        <hr />

        <p><i class="bi bi-telephone-fill"></i>0422943860s</p>
        <p><i class="bi bi-geo-alt-fill"></i>Queensland, Brisbane, Maroon</p>
        <p><i class="bi bi-envelope-at-fill"></i>cec66@me.com</p>
        <p><i class="bi bi-facebook"></i></p>
        <hr />
      </div>

      <div class="col-md-12 col-lg-4 col-sm-12">
        <div class="container align-items-center text-center book-now">
          <button type="button" class="btn btn-light">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.contact-us {
  margin-top: 30px;
}
.book-now {
  position: relative;
}
.book-now button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.footer {
  height: auto;
  background-color: black;
  color: white;
  text-align: center;
  margin-top: 20px;
}
.container {
  display: flex;

  height: 100%;
}
i {
  margin-right: 5px;
}

h1 {
  margin-left: 10px;
  padding-left: 30px;
}
@media screen and (min-width: 200px) and (max-width: 991px) {
  .container {
    justify-content: center; /* center alignment for larger screens */
  }
  h1 {
    padding-right: 30px;
    padding-bottom: 30px;
    padding-top: 30px;
  }
  .book-now {
    margin-bottom: 80px;
  }
}
</style>
