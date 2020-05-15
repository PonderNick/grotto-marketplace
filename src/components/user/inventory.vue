<template>
  <div class="container">
    <div class="inventory-content">
      <div class="row h-100">
        <div class="col-12 my-auto">
          <h1>Inventory Page!</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const Inventory = {
  name: 'inventory',
  computed: {
    ...mapState({
      loggedIn: state => state.is.loggedIn,
    })
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      if (this.loggedIn) {
        return;
      } else {
        return this.$router.push(`/`);
      }
    },
  }
};

export default Inventory;
</script>

<style scoped>

.inventory-content {
  height: 100%;
}

h1 {
  color: whitesmoke;
}

</style>