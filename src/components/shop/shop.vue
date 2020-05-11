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
                        <div class="list-group">
                          <a v-on:click="filterItems('backpacks')" class="list-group-item list-group-item-action">
                            Backpacks
                            <span class="badge badge-primary badge-pill">{{items.backpacks.length}}</span>
                          </a>
                          <a v-on:click="filterItems('bannertoken')" class="list-group-item list-group-item-action">
                            Banner Token
                            <span class="badge badge-primary badge-pill">{{items.bannertoken.length}}</span>
                          </a>
                          <a v-on:click="filterItems('contrail')" class="list-group-item list-group-item-action">
                            Contrail
                            <span class="badge badge-primary badge-pill">{{items.contrail.length}}</span>
                          </a>
                          <a v-on:click="filterItems('cosmeticvariant')" class="list-group-item list-group-item-action">
                            Cosmetic Variant
                            <span class="badge badge-primary badge-pill">{{items.cosmeticvariant.length}}</span>
                            </a>
                          <a v-on:click="filterItems('emote')" class="list-group-item list-group-item-action">
                            Emote
                            <span class="badge badge-primary badge-pill">{{items.emote.length}}</span>
                          </a>
                          <a v-on:click="filterItems('glider')" class="list-group-item list-group-item-action">
                            Glider
                            <span class="badge badge-primary badge-pill">{{items.glider.length}}</span>
                          </a>
                          <a v-on:click="filterItems('loadingscreen')" class="list-group-item list-group-item-action">
                            Load screen
                            <span class="badge badge-primary badge-pill">{{items.loadingscreen.length}}</span>
                          </a>
                          <a v-on:click="filterItems('music')" class="list-group-item list-group-item-action">
                            Music<span class="badge badge-primary badge-pill">{{items.music.length}}</span>
                          </a>
                          <a v-on:click="filterItems('outfit')" class="list-group-item list-group-item-action">
                            Outfit
                            <span class="badge badge-primary badge-pill">{{items.outfit.length}}</span>
                          </a>
                          <a v-on:click="filterItems('pet')" class="list-group-item list-group-item-action">
                            Pet
                            <span class="badge badge-primary badge-pill">{{items.pet.length}}</span>
                          </a>
                          <a v-on:click="filterItems('pickaxe')" class="list-group-item list-group-item-action">
                            Pickaxe
                            <span class="badge badge-primary badge-pill">{{items.pickaxe.length}}</span>
                          </a>
                          <a v-on:click="filterItems('spray')" class="list-group-item list-group-item-action">
                            Spray
                            <span class="badge badge-primary badge-pill">{{items.spray.length}}</span>
                          </a>
                          <a v-on:click="filterItems('toy')" class="list-group-item list-group-item-action">
                            Toy
                            <span class="badge badge-primary badge-pill">{{items.toy.length}}</span>
                          </a>
                          <a v-on:click="filterItems('wrap')" class="list-group-item list-group-item-action">
                            Wrap
                            <span class="badge badge-primary badge-pill">{{items.wrap.length}}</span>
                          </a>
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
                        <div class="list-group">
                          <a href="#" class="list-group-item list-group-item-action">DC<span class="badge badge-primary badge-pill">{{items.loadingscreen.length}}</span></a>
                          <a href="#" class="list-group-item list-group-item-action">Dark<span class="badge badge-primary badge-pill">{{items.loadingscreen.length}}</span></a>
                          <a href="#" class="list-group-item list-group-item-action">Marvel<span class="badge badge-primary badge-pill">{{items.backpacks.length}}</span></a>
                          <a href="#" class="list-group-item list-group-item-action">Legendary<span class="badge badge-primary badge-pill">{{items.bannertoken.length}}</span></a>
                          <a href="#" class="list-group-item list-group-item-action">Epic<span class="badge badge-primary badge-pill">{{items.contrail.length}}</span></a>
                          <a href="#" class="list-group-item list-group-item-action">Rare<span class="badge badge-primary badge-pill">{{items.cosmeticvariant.length}}</span></a>
                          <a href="#" class="list-group-item list-group-item-action">Uncommon<span class="badge badge-primary badge-pill">{{items.emote.length}}</span></a>
                          <a href="#" class="list-group-item list-group-item-action">Common<span class="badge badge-primary badge-pill">{{items.glider.length}}</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-10 no-side-padding">
              <div class="items-wrapper mx-auto shadow p-3 mb-5 bg-white rounded">
                <div class="row">
                  <card v-for="(item) in displayedItems" v-bind:key="item.id" :cardTitle="item.name">
                    <img class="item-image" :src="item.images.background" :alt="item.name">
                  </card>
                </div>
                <div class="row">
                  <div class="col-12">
                    <nav>
                      <ul class="pagination justify-content-center">
                        <li v-for="n in pageSize" v-bind:key="n" class="page-item"><a class="page-link" v-on:click="updateVisibleItems(n)">{{n}}</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
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

const Shop = {
  name: 'shop',
  components: {
    Card,
  },
  data() {
    return {
      items: {
        allItems: [],
        selectedItems: [],
        backpacks: [],
        bannertoken: [],
        contrail: [],
        cosmeticvariant: [],
        emote: [],
        glider: [],
        loadingscreen: [],
        music: [],
        outfit: [],
        pet: [],
        pickaxe: [],
        spray: [],
        toy: [],
        wrap: [],
        misc: [],
        rarity: {
          dc: [],
          dark: [],
          marvel: [],
          legendary: [],
          epic: [],
          rare: [],
          uncommon: [],
          common: [],
        }
      },
      currentPage: 1,
      itemsPerPage: 25,
      pageSize: 1,
    };
  },
  computed: {
    displayedItems() {
      const indexOfLastPost = this.currentPage * this.itemsPerPage;
      const indexOfFirstPost = indexOfLastPost - this.itemsPerPage;
      this.tempPageSize = this.items.selectedItems.length / 50;
      this.pageSize = parseInt(this.tempPageSize, 10) + (1);
      
      return this.items.selectedItems.slice(indexOfFirstPost, indexOfLastPost);
    },
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      return axios({
        method: 'GET',
        url: router.endpoints.items,
        headers: {
          Accept: 'application/json',
          Authorization: router.Auth.fortnite,
        },
      })
      .then((response) => {
        this.items.allItems = response.data.items;
      })
      .then(() => {
        this.sortItems();
      })
      .catch((error) => {
        alert('Error getting items: ', error);
      });
    },
    sortItems() {
        let index = 0;

        for (index = 0; index < this.items.allItems.backpack.length; index++) {
          this.items.backpacks.push(this.items.allItems.backpack[index]);
        }

        for (index = 0; index < this.items.allItems.bannertoken.length; index++) {
          this.items.bannertoken.push(this.items.allItems.bannertoken[index]);
        }

        for (index = 0; index < this.items.allItems.contrail.length; index++) {
          this.items.contrail.push(this.items.allItems.contrail[index]);
        }

        for (index = 0; index < this.items.allItems.cosmeticvariant.length; index++) {
          this.items.cosmeticvariant.push(this.items.allItems.cosmeticvariant[index]);
        }

        for (index = 0; index < this.items.allItems.emote.length; index++) {
          this.items.emote.push(this.items.allItems.emote[index]);
        }

        for (index = 0; index < this.items.allItems.glider.length; index++) {
          this.items.glider.push(this.items.allItems.glider[index]);
        }

        for (index = 0; index < this.items.allItems.loadingscreen.length; index++) {
          this.items.loadingscreen.push(this.items.allItems.loadingscreen[index]);
        }

        for (index = 0; index < this.items.allItems.music.length; index++) {
          this.items.music.push(this.items.allItems.music[index]);
        }

        for (index = 0; index < this.items.allItems.outfit.length; index++) {
          this.items.outfit.push(this.items.allItems.outfit[index]);
        }

        for (index = 0; index < this.items.allItems.pet.length; index++) {
          this.items.pet.push(this.items.allItems.pet[index]);
        }

        for (index = 0; index < this.items.allItems.pickaxe.length; index++) {
          this.items.pickaxe.push(this.items.allItems.pickaxe[index]);
        }

        for (index = 0; index < this.items.allItems.spray.length; index++) {
          this.items.spray.push(this.items.allItems.spray[index]);
        }

        for (index = 0; index < this.items.allItems.toy.length; index++) {
          this.items.toy.push(this.items.allItems.toy[index]);
        }

        for (index = 0; index < this.items.allItems.wrap.length; index++) {
          this.items.wrap.push(this.items.allItems.wrap[index]);
        }

        this.items.selectedItems = this.items.outfit;
    },
    filterItems(param) {
      this.items.selectedItems = [];
      if (param === 'backpacks') {
        return this.items.selectedItems =this.items.backpacks;
      }

      if (param === 'bannertoken') {
        return this.items.selectedItems =this.items.bannertoken;
      }

      if (param === 'bannertoken') {
        return this.items.selectedItems =this.items.bannertoken;
      }

      if (param === 'contrail') {
        return this.items.selectedItems =this.items.contrail;
      }

      if (param === 'cosmeticvariant') {
        return this.items.selectedItems =this.items.cosmeticvariant;
      }

      if (param === 'emote') {
        return this.items.selectedItems =this.items.emote;
      }

      if (param === 'glider') {
        return this.items.selectedItems =this.items.glider;
      }

      if (param === 'loadingscreen') {
        return this.items.selectedItems =this.items.loadingscreen;
      }

      if (param === 'music') {
        return this.items.selectedItems =this.items.music;
      }

      if (param === 'outfit') {
        return this.items.selectedItems =this.items.outfit;
      }

      if (param === 'pet') {
        return this.items.selectedItems =this.items.pet;
      }

      if (param === 'pickaxe') {
        return this.items.selectedItems =this.items.pickaxe;
      }

      if (param === 'spray') {
        return this.items.selectedItems =this.items.spray;
      }

      if (param === 'toy') {
        return this.items.selectedItems =this.items.toy;
      }

      if (param === 'wrap') {
        return this.items.selectedItems =this.items.wrap;
      }
    },
    updateVisibleItems(pageNumber) {
      this.currentPage = pageNumber;
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