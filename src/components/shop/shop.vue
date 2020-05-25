<template>
  <div class="container-fluid no-side-padding">
    <div class="shop-content">
      <div class="shop-content-header">
        <div class="row h-100 no-side-margin">
          <div class="col-12 no-side-padding">
            <div class="jumbotron jumbotron-fluid">
              <div class="container-fluid no-side-padding">
                <div id="banner-indicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#banner-indicators" data-slide-to="0" class="active"></li>
                    <li data-target="#banner-indicators" data-slide-to="1"></li>
                    <li data-target="#banner-indicators" data-slide-to="2"></li>
                  </ol>
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
      <div class="container-fluid no-side-padding">
        <div class="shop-content-body">
          <div class="row h-100 w-100">
            <div class="col-2 mx-auto no-side-padding">
              <div class="filters-wrapper mx-auto shadow p-3 mb-5 bg-white rounded">
                <accordion
                  ref="filterName"
                  title="Name"
                  filterBy="name"
                  type="input"
                  :selectedItem="name.selected"
                  :onChangeEvent="addFilter"
                  >
                </accordion>
                <accordion
                  ref="filterType"
                  title="Type"
                  filterBy="type"
                  type="select"
                  :selectedItem="types.selected"
                  :onChangeEvent="addFilter"
                  :options="types.options"
                  >
                </accordion>
                <accordion
                  ref="filterRarity"
                  title="Rarity"
                  filterBy="rarity"
                  type="select"
                  :selectedItem="rarity.selected"
                  :onChangeEvent="addFilter"
                  :options="rarity.options"
                  >
                </accordion>
                <accordion
                  ref="filterPopularity"
                  title="Popularity"
                  filterBy="interest"
                  type="select"
                  :selectedItem="popularity.selected"
                  :onChangeEvent="addFilter"
                  :options="popularity.options"
                  >
                </accordion>
                <button class="btn btn-outline-dark w-100" v-on:click="removeFilter()">Remove Filter</button>
              </div>
            </div>
            <div class="col-10 no-side-padding">
              <div v-if="!is.loading" class="items-wrapper mx-auto shadow p-3 mb-5 bg-white rounded">
                <span v-if="has.items" class="row">
                  <div class="row w-100">
                    <card
                      v-for="item in displayedItems"
                      v-bind:key="item.id"
                      :cardTitle="item.name"
                      >
                      <img v-on:click="goToItem(item)" class="item-image" :src="item.images.background" :alt="item.name">
                    </card>
                  </div>
                  <div class="row w-100">
                    <pagination
                      ref="pagination"
                      :totalItems="items.filteredItems.length"
                      :itemsPerPage="itemsPerPage"
                      :currentPage="currentPage"
                      :paginate="updateVisibleItems"
                      :paginatePrev="prevPage"
                      :paginateNext="nextPage"
                      >
                    </pagination>
                  </div>
                </span>
                <span v-if="!has.items" class="row">
                  <div class="col-12">
                    <h1>No Results...</h1>
                  </div>
                </span>
              </div>
              <div v-if="is.loading" class="items-wrapper mx-auto shadow p-3 mb-5 bg-white rounded">
                <loader type="page"></loader>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../data/router.vue';
import Accordion from '../common/accordion.vue';
import Card from '../common/card.vue';
import Pagination from '../common/pagination.vue';
import Loader from '../common/loader.vue';
import { mapState } from 'vuex';

const Shop = {
  name: 'shop',
  components: {
    Accordion,
    Card,
    Pagination,
    Loader
  },
  data() {
    return {
      is: {
        loading: false,
      },
      has: {
        items: false,
      },
      items: {
        rawData: [],
        allItems: [],
        filteredItems: [],
        selectedItems: [],
      },
      name: {
        selected: '',
      },
      types: {
        selected: '',
        options: [
          {id: 1, name: 'Backpack', value: 'backpack'},
          {id: 2, name: 'Banner Token', value: 'bannertoken'},
          {id: 3, name: 'Contrail', value: 'contrail'},
          {id: 4, name: 'Cosmetic Variant', value: 'cosmeticvariant'},
          {id: 5, name: 'Emote', value: 'emote'},
          {id: 6, name: 'Glider', value: 'glider'},
          {id: 7, name: 'Load screen', value: 'loadingscreen'},
          {id: 8, name: 'Music', value: 'music'},
          {id: 9, name: 'Outfit', value: 'outfit'},
          {id: 10, name: 'Pet', value: 'pet'},
          {id: 11, name: 'Pickaxe', value: 'pickaxe'},
          {id: 12, name: 'Spray', value: 'spray'},
          {id: 13, name: 'Toy', value: 'toy'},
          {id: 14, name: 'Wrap', value: 'wrap'},
        ],
      },
      rarity: {
        selected: '',
        options: [
          {id: 1, name: 'DC', value: 'dc'},
          {id: 2, name: 'Dark', value: 'dark'},
          {id: 3, name: 'Marvel', value: 'marvel'},
          {id: 4, name: 'Lava Series', value: 'lava series'},
          {id: 5, name: 'Icon Series', value: 'icon series'},
          {id: 6, name: 'Slurp Series', value: 'slurp series'},
          {id: 7, name: 'Star Wars Series', value: 'star wars series'},
          {id: 8, name: 'Shadow Series', value: 'shadow series'},
          {id: 9, name: 'Frozen Series', value: 'frozen series'},
          {id: 10, name: 'Legendary', value: 'legendary'},
          {id: 11, name: 'Epic', value: 'epic'},
          {id: 12, name: 'Rare', value: 'rare'},
          {id: 13, name: 'Uncommon', value: 'uncommon'},
          {id: 14, name: 'Common', value: 'common'},
        ],
      },
      popularity: {
        selected: '',
        options: [
          {id: 1, name: 'High - Low', value: 'high'},
          {id: 2, name: 'Low - High', value: 'low'},
        ]
      },
      currentPage: 1,
      itemsPerPage: 50,
      activeFilters: [],
    };
  },
  computed: {
    displayedItems() {
      const indexOfLastPost = this.currentPage * this.itemsPerPage;
      const indexOfFirstPost = indexOfLastPost - this.itemsPerPage;

      this.items.filteredItems = this.items.allItems;
      this.activeFilters.forEach(filter => {        
        if (filter.type === 'interest') {
          if (filter.value === 'high') {
            return this.items.filteredItems = this.items.filteredItems.sort((a,b) => {
              return b.interest - a.interest;
            });
          }
          if (filter.value === 'low') {
            return this.items.filteredItems = this.items.filteredItems.sort((a,b) => {
              return a.interest - b.interest;
            });
          }
        }
        this.items.filteredItems = this.items.filteredItems.filter(item => {
          let regex = new RegExp(filter.value, 'i');
          return item[filter.type].match(regex);
        });
      });

      this.checkItems();

      return this.items.filteredItems.slice(indexOfFirstPost, indexOfLastPost);
    },
    ...mapState({
      loggedIn: state => state.is.loggedIn,
    })
  },
  mounted() {
    this.checkAuth();
    this.getItems();
    this.scrollTop();
  },
  methods: {
    checkAuth() {
      if (this.loggedIn) {
        return;
      } else {
        return this.$router.push(`/`);
      }
    },
    getItems() {
      this.is.loading = true;
      return axios({
        method: 'GET',
        url: router.endpoints.items,
        headers: {
          Accept: 'application/json',
          Authorization: router.Auth.fortnite,
        },
      })
      .then((response) => {
        this.items.rawData = response.data.items;
      })
      .then(() => {
        this.sortItems();
        this.is.loading = false;
        this.has.items = true;
      })
      .catch((error) => {
        alert('Error getting items: ', error);
      });
    },
    sortItems() {
        var items;
        var index;
        var itemsArray = [];

        for (items in this.items.rawData) {
          itemsArray.push(this.items.rawData[items]);
        }

        for (index = 0; index < itemsArray.length; index++) {
          this.items.allItems = this.items.allItems.concat(itemsArray[index]);
        }
    },
    addFilter(filterType, filter) {
      this.is.loading = true
      this.currentPage = 1;
      let index, j;

      this.activeFilters.push({
        type: filterType,
        value: filter
      });

      for (index = 0; index < this.activeFilters.length; index++) {
        for (j = 0; j < this.activeFilters.length; j++) {
          if (index != j) {
            if (this.activeFilters[index].type == this.activeFilters[j].type) {
              this.activeFilters[index].value = this.activeFilters[j].value
              this.activeFilters.splice(j, 1);
            }
          }
        }
      }
      this.displayedItems;
      this.applyLoading();
    },
    checkItems() {
      if (this.items.filteredItems.length === 0) {
        this.has.items = false;
      }
      else {
        this.has.items = true;
      }
    },
    removeFilter() {
      this.is.loading = true
      this.$refs.filterName.clearFilter();
      this.$refs.filterType.clearFilter();
      this.$refs.filterRarity.clearFilter();
      this.$refs.filterPopularity.clearFilter();
      this.activeFilters = [];
      this.name.selected = '';
      this.types.selected = '';
      this.rarity.selected = '';
      this.popularity.selected = '';
      this.currentPage = 1;
      this.has.items = true;
      this.applyLoading();
      this.displayedItems;
    },
    nextPage() {
      this.is.loading = true;
      this.currentPage++;
      this.applyLoading();
    },
    prevPage() {
      this.is.loading = true;
      this.currentPage--;
      this.applyLoading();
    },
    updateVisibleItems(pageNumber) {
      this.is.loading = true;
      this.currentPage = 1;
      this.currentPage = pageNumber;
      this.applyLoading();
    },
    goToItem(item) {
      var Item = JSON.stringify(item);
      Item = encodeURIComponent(Item);
      this.$router.push(`/item?item=${Item}`);
    },
    applyLoading() {
      setTimeout(() => {
        this.is.loading = false;
      }, 1000)
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
}
export default Shop;
</script>

<style scoped>

.shop-content {
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}

.shop-content-header {
  background-color: none;
  height: 100%;
}

.jumbotron {
  background-color: transparent;
  margin-bottom: 0rem;
  padding: 0px;
}

.shop-content-body {
  height: 100%;
  background-color: whitesmoke;
  padding-top: 25px;
}

.filters-wrapper {
  margin-left: auto;
  margin-right: auto;
  border-radius: .25rem;
  width: 90%;
}

.items-wrapper {
  margin-left: auto;
  margin-right: auto;
  border-radius: .25rem;
  width: 95%;
}

.item-image {
  width: 100%;
}

.no-side-padding {
  padding-left: 0px;
  padding-right: 0px;
}

.no-side-margin {
  margin-left: 0px;
  margin-right: 0px;
}

</style>