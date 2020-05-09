<template>
  <div class="container-fluid no-side-padding">
    <div class="row h-100 w-100 no-side-margin">
      <div class="col-12 my-auto no-side-padding">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Welcome!</h1>
            <p class="lead">website purpose blurb.... </p>
            <hr class="my-4">
            <p>website features....</p>
            <p class="lead">
              <router-link :to="{ name: 'Shop' }">Continue to the item shop</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const Welcome = {
  name: 'welcome',
}
export default Welcome;
</script>

<style scoped>

.no-side-padding {
  padding-left: 0px;
  padding-right: 0px;
}

.no-side-margin {
  margin-left: 0px;
  margin-right: 0px;
}

@keyframes blur {
  from {
    filter: blur(0px);
  }
  to {
    filter: blur(6px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>