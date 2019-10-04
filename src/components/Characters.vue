<template>
  <div class="row justify-content-center">
    <div v-for="item of items" :key="item.id" class="shadow card col-10 col-md-6 col-lg-5 m-3 p-0">
      <div class="row no-gutters">
        <div class="col-md-4 align-self-center">
          <img :src="item.image" class="card-img" :alt="item.name"/>
        </div>
        <div class="col-md-8">
          <div class="card-header pb-0">
            <h5 class="card-title">{{ item.name }}</h5>
          </div>
          <div class="card-body pb-0">
            <p class="card-text m-0">Especie: {{ item.species }}</p>
            <p class="card-text m-0">Genero: {{ item.gender }}</p>
            <p class="card-text m-0">
              <small class="text-muted"> Origen: {{ item.origin.name }}</small>
            </p>
            <router-link
              class="shadow btn btn-success btn-sm mt-3"
              :to="{ path: `/character/${item.id}` }">
              Ver Más
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100"></div>

    <Pagination
      :page="page"
      :info="info"
      @fetchItems="fetchItems"
      @updatePage="updatePage"/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'characters',
  components: { Pagination },
  data() {
    return {
      items: [],
      url: 'https://rickandmortyapi.com/api/character/?page=',
      page: 1,
      info: {},
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      fetch(this.url + this.page)
        .then(res => res.json())
        .then((res) => {
          this.items = res.results;
          this.info = res.info;
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
    updatePage(value) {
      this.page = value;
    },
  },
};
</script>

<style scoped>
div.card {
  background-color: #9FBF2A;
}
.card-body .btn.btn-sm {
  background-color: #0FAEBF;
  color: #18192b;
}
</style>>
