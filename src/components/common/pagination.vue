<template>
  <div class="row w-100 pagination-wrapper">
    <div class="col-12">
      <nav>
        <ul class="pagination justify-content-center">
          <li v-bind:class="{ 'disabled': !has.previousPages }" class="page-item">
            <a class="page-link" v-on:click="paginatePrev()">Previous Page</a>
          </li>
          <li v-bind:class="{ 'disabled': !has.nextPages }" class="page-item ">
            <a class="page-link" v-on:click="paginateNext()">Next Page</a>
          </li>
        </ul>
        <p class="page-number">Page {{currentPage}} of {{calculatePages}}</p>
      </nav>
    </div>
  </div>
</template>

<script>

const Pagination = {
  name: 'pagination',
  props: {
    totalItems: {
      type: Number,
      default: 1,
    },
    itemsPerPage: {
      type: Number,
      default: 50,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    paginate: {
      type: Function,
      default: null,
    },
    paginateNext: {
      type: Function,
      default: null,
    },
    paginatePrev: {
      type: Function,
      default: null,
    }
  },
  data() {
    return {
      pageCounter: 0,
      has: {
        previousPages: false,
        nextPages: true,
      }
    };
  },
  computed: {
    calculatePages() {
      let index;
      this.pageCounter = 0;

      for (index = 0; index <= Math.ceil(this.totalItems / this.itemsPerPage); index++ ) {
        this.pageCounter = index;
      }

      if (this.currentPage === 1) {
        this.has.previousPages = false;
      }
      else {
        this.has.previousPages = true;
      }

      if (this.currentPage === this.pageCounter) {
        this.has.nextPages = false;
      }
      else {
        this.has.nextPages = true;
      }

      return this.pageCounter;
    },
  },
};
export default Pagination;

</script>

<style scoped>

.page-number {
  padding: .5rem .75rem;
}

.page-item {
  width: 150px;
}
</style>