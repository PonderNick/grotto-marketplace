<template>
<div class="accordion">
  <div class="filter-card">
    <div class="card-header">
      <h2 class="mb-0">
        <button class="btn btn-light w-100" type="button">
          {{title}}
        </button>
      </h2>
    </div>
    <div class="collapse show">
      <div class="card-body">
          <div class="input-group mb-3">
            <select v-if="type === 'select'" v-model="selected.item" v-on:change="onChangeEvent(filter, selected.item)" class="custom-select">
              <option disabled>Please select one</option>
              <option v-for="opt in options" v-bind:key="opt.id" :value="opt.value">{{opt.name}}</option>
            </select>
            <input v-if="type === 'input'" v-model="selected.item" v-on:input="onChangeEvent(filter, selected.item)" type="text" class="form-control" placeholder="Enter item name" autocomplete="on">
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

const Accordion = {
  name: 'accordion',
  props:  {
    title: {
      type: String
    },
    type: {
      type: String
    },
    filterBy: {
      type: String
    },
    selectedItem: {
      type: String,
      default: '',
    },
    onChangeEvent: {
      type: Function,
    },
    options: {
      type: Array,
    },
    onClearEvent: {
      type: Function,
    }
  },
  data() {
    return {
      filter: this.filterBy,
      selected: {
        item: this.selectedItem,
      }
    };
  },
  methods: {
    clearFilter() {
      this.selected.item = '';
    },
  }
};

export default Accordion;
</script>

<style scoped>
.card-header {
  padding: 0px;
  border-bottom: 0px;
}

.card-body {
  padding: 0px;
  font-size: 14px;
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
</style>