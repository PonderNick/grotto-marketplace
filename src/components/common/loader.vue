<template>
  <div class="loader-wrapper">
    <div
      v-bind:class="{
        'page-loading': type === 'page',
      }"
      >
    </div>
  </div>
</template>

<script>
const Loader = {
  name: 'loader',
  props: {
    type: {
      type: String,
      default: 'text',
    },
  },
}

export default Loader;
</script>

<style scoped>
  .loader-wrapper {
    opacity: 0.65;
  }

  .page-loading {
    display: inline-block;
    height: 16px;
    border-radius: .25rem;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: loading;
    background: #f6f7f8;
    background: linear-gradient(to right, #EEEEEE 8%, #DDDDDD 18%, #EEEEEE 33%);
    background-size: 800px 104px;
  }

  .page-loading {
    height: 80vh;
    width:  100%;
  }

  @keyframes loading {
    0% {
      background-position: -468px 0;
    }
    100%{
      background-position: 468px 0;
    }
  }

  @media screen and (max-width: 600px) {

  }
</style>
