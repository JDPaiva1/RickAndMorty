<template>
  <div class="card col-10 col-md-6 col-lg-5 m-3 p-0">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="item.image" class="card-img" alt="item.name"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text m-0 mb-1">Estado: {{ item.status }}</p>
          <hr/>
          <p class="card-text m-0">Especie: {{ item.species }}</p>
          <hr/>
          <p class="card-text m-0">Genero: {{ item.gender }}</p>
          <p class="card-text m-0">
            <small class="text-muted"> Origen: {{ item.origin.name }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: [
    'item',
  ],
};
</script>

<style>
div.card {
  background-color: #9FBF2A;
}
</style>
