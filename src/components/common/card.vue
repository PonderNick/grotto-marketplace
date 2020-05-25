<template>
  <div class="card">
    <div class="card-body">
      <h6 class="card-title text-center">{{ cardTitle }}</h6>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'card',
  props: {
    cardTitle: {
      type: String,
    },
    progress: {
      type: Number,
    },
  },
};

</script>

<style scoped>
.card {
  width: 15%;
  margin: 10px;
  background: rgba(245,245,245, 0.95);
  border: 2px solid #343a40;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  transition: transform .3s; /* Animation */
}

.card:hover {
  transform: scale(1.01);
  cursor: pointer;
}
</style>