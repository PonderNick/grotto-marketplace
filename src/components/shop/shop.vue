<template>
  <div class="container-fluid">
    <div class="shop-content">
      <div class="shop-content-header">
        <div class="row h-100 no-side-margin">
          <div class="col-12 no-side-padding">
            <div class="jumbotron jumbotron-fluid">
              <div class="container-fluid">
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
      <div class="container-fluid">
        <div class="shop-content-body">
          <div class="row h-100 w-100">
            <div class="col-2 mx-auto no-side-padding">
              <div class="filters-wrapper mx-auto shadow p-3 mb-5 bg-white rounded">
                <div class="accordion" id="filter-collapse-list">
                  <div class="filter-card">
                    <div class="card-header" id="filter-header">
                      <h2 class="mb-0">
                        <button class="btn btn-light w-100" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Type
                        </button>
                      </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="filter-header" data-parent="#filter-collapse-list">
                      <div class="card-body">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Options</label>
                          </div>
                          <select v-model="types.selected" v-on:change="addFilter('type', types.selected)" class="custom-select" id="inputGroupSelect01">
                            <option disabled>Please select one</option>
                            <option v-for="option in types.options" v-bind:key="option.id" :value="option.value">{{option.name}}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion" id="rarity-collapse-list">
                  <div class="filter-card">
                    <div class="card-header" id="rarity-header">
                      <h2 class="mb-0">
                        <button class="btn btn-light w-100" type="button" data-toggle="collapse" data-target="#rarity-list" aria-expanded="true" aria-controls="collapseOne">
                          Rarity
                        </button>
                      </h2>
                    </div>
                    <div id="rarity-list" class="collapse show" aria-labelledby="filter-header" data-parent="#rarity-collapse-list">
                      <div class="card-body">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Options</label>
                          </div>
                          <select v-model="rarity.selected" v-on:change="addFilter('rarity', rarity.selected)" class="custom-select" id="inputGroupSelect01">
                            <option disabled>Please select one</option>
                            <option v-for="option in rarity.options" v-bind:key="option.id" :value="option.value">{{option.name}}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn btn-outline-dark w-100" v-on:click="removeFilter()">Remove Filter</button>
              </div>
            </div>
            <div class="col-10 no-side-padding">
              <div v-show="!is.loading" class="items-wrapper mx-auto shadow p-3 mb-5 bg-white rounded">
                <div class="row">
                  <card v-for="item in displayedItems" v-bind:key="item.id" :cardTitle="item.name">
                    <img class="item-image" :src="item.images.background" :alt="item.name">
                  </card>
                </div>
                <pagination
                  :totalItems="items.filteredItems.length"
                  :itemsPerPage="itemsPerPage"
                  :currentPage="currentPage"
                  :paginate="updateVisibleItems"
                  :paginatePrev="prevPage"
                  :paginateNext="nextPage"
                  >
                </pagination>
              </div>
              <div v-show="is.loading" class="items-wrapper mx-auto shadow p-3 mb-5 bg-white rounded">
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
import Card from '../common/card.vue';
import Pagination from '../common/pagination.vue';
import Loader from '../common/loader.vue';

const Shop = {
  name: 'shop',
  components: {
    Card,
    Pagination,
    Loader
  },
  data() {
    return {
      is: {
        loading: false,
        active: false,
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
          {id: 12, name: 'rare', value: 'rare'},
          {id: 13, name: 'Uncommon', value: 'uncommon'},
          {id: 14, name: 'Common', value: 'common'},
        ],
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
        this.items.filteredItems = this.items.filteredItems.filter(item => {
          return item[filter.type].match(filter.value);
        });
      });

      return this.items.filteredItems.slice(indexOfFirstPost, indexOfLastPost);
    },
  },
  mounted() {
    this.getItems();
  },
  methods: {
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
      this.applyLoading();
    },
    removeFilter () {
      this.is.loading = true
      this.activeFilters = [];
      this.types.selected = '';
      this.rarity.selected = '';
      this.items.filteredItems = this.items.allItems;
      this.applyLoading();
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
    applyLoading() {
      setTimeout(() => {
        this.is.loading = false;
      }, 1000)
    },
  },
}
export default Shop;
</script>

<style scoped>

.shop-content {
  margin-top: 20px;
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
  padding: 0px;
}

.banner-image {
  border-radius: .25rem;
}

.shop-content-body {
  height: 100%;
  background-color: whitesmoke;
  border-radius: .25rem;
  padding-top: 25px;
}

.filters-wrapper {
  margin-left: auto;
  margin-right: auto;
  border-radius: .25rem;
  width: 90%;
}

.filter-card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    text-align: left;
}

.card-body {
  padding: 0px;
  font-size: 14px;
}

.list-group-item {
  border-radius: 0px;
}

.card-header {
  padding: 0px;
  border-bottom: 0px;
}

.badge-pill {
  position: absolute;
  right: 10px;
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