<template>
  <div class="container">
    <div class="row h-10 mt-5">
      <div class="col-sm-12 header">
        <h1>{{ item.name }}</h1>
      </div>
    </div>
    <div class="row h-90 mt-5">
      <div class="col-sm-6 my-auto">
        <img v-on:click="goBack()" class="back-button" src="../../assets/back-button.png" alt="back-button"/>
        <img class="item-image" :src="item.images.background ? item.images.background : item.images.full_size" :alt="item.name">
      </div>
      <div class="col-sm-6 my-auto">
        <div class="item-info">
          <div class="card text-center">
            <div class="card-header h-100">
              <h3 class="card-title my-auto">Item Overview</h3>
            </div>
            <div class="card-body">
              <p class="card-text"><strong>{{ item.description }}</strong></p>
              <form class="text-left">
                <div class="form-group row">
                  <label class="col-sm-5 col-form-label"><strong>Price</strong></label>
                  <div class="col-sm-7">
                    <input type="text" readonly class="form-control-plaintext" :value="item.price">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-5 col-form-label"><strong>Type</strong></label>
                  <div class="col-sm-7">
                    <input type="text" readonly class="form-control-plaintext" :value="item.type">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-5 col-form-label"><strong>Popularity</strong></label>
                  <div class="col-sm-7">
                    <input type="text" readonly class="form-control-plaintext" :value="item.interest">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-5 col-form-label"><strong>Reactive</strong></label>
                  <div class="col-sm-7">
                    <input type="text" readonly class="form-control-plaintext" :value="item.reactive">
                  </div>
                </div>
              </form>
              <div class="row">
                <div class="col-sm-12">
                <div id="banner-indicators" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner banner-image">
                    <div class="carousel-item active">
                      <img src="../../assets/Banner.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="../../assets/Banner2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="../../assets/Banner3.png" class="d-block w-100" alt="...">
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const Item = {
  name: 'Item',
  data() {
    return {
      item: this.getItem(),
    };
  },
  mounted() {
    this.scrollTop();
  },
  methods: {
    getItem() {
      this.item = JSON.parse(this.$route.query.item);
      return  this.item;
    },
    goBack() {
      this.$router.push('/shop');
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};

export default Item;
</script>

<style scoped>
.header {
  color: whitesmoke;
}
.back-button {
  position: absolute;
  top: 0px;
  left: -100px;
  height: 100px;
  transition: transform .3s;
}

.back-button:hover {
  cursor: pointer;
  transform: scale(1.25);
}

.item-info {
  height: 512px;
}

.item-image {
  max-height: 512px;
}

.item-icon {
  max-height: 150px;
}

.card-body {
  height: 452px;
}

.carousel-inner {
  border-radius: .25rem;
}

</style>