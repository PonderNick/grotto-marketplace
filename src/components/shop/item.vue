<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-sm-6 my-auto">
        <img class="item-image" :src="item.images.background ? item.images.background : item.images.full_size" :alt="item.name">
      </div>
      <div class="col-sm-6 my-auto">
        <div class="item-info">
          <div class="card text-center">
            <div class="card-header h-100">
              <h3 class="card-title my-auto">{{ item.name }}</h3>
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
  methods: {
    getItem() {
      this.item = JSON.parse(this.$route.query.item);
      return  this.item;
    },
  },
};

export default Item;
</script>

<style scoped>
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