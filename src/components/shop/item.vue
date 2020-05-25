<template>
  <div class="container h-100">
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
              <h5 class="card-title"></h5>
              <p class="card-text">{{ item.description }}</p>
              <form class="text-left">
                <div class="form-group row">
                  <label class="col-sm-5 col-form-label">Price</label>
                  <div class="col-sm-7">
                    <input type="text" readonly class="form-control-plaintext" :value="item.price">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-5 col-form-label">Type</label>
                  <div class="col-sm-7">
                    <input type="text" readonly class="form-control-plaintext" :value="item.type">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-5 col-form-label">Popularity</label>
                  <div class="col-sm-7">
                    <input type="text" readonly class="form-control-plaintext" :value="item.interest">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-5 col-form-label">Reactive</label>
                  <div class="col-sm-7">
                    <input type="text" readonly class="form-control-plaintext" :value="item.reactive">
                  </div>
                </div>
              </form>
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

.card-body {
  height: 452px;
}

</style>