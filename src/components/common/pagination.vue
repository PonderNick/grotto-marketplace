<template>
  <div class="row pagination-wrapper">
    <div class="col-12">
      <nav>
        <ul class="pagination justify-content-center">
          <li><a class="page-link" v-on:click="paginatePrev()">Previous Page</a></li>
          <li><a class="page-link" v-on:click="paginateNext()">Next Page</a></li>
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
        nextPages: false,
      }
    };
  },
  computed: {
    calculatePages() {
      let index;
      this.pageCounter = 0;

      for (index = 0; index <= (this.totalItems / this.itemsPerPage); index++ ) {
        this.pageCounter = index;
      }

      return this.pageCounter + 1;
    },
  },
};
export default Pagination;

</script>

<style scoped>

.page-number {
  padding: .5rem .75rem;
}
</style>