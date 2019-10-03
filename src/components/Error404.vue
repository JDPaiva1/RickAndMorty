<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="py-5 my-3 text-center">
        <h1 class="py-2">Oops!</h1>
        <h2>404 No encontrado</h2>
        <div class="py-2">
          <p>
            Pero aquí encontraste a:
            <router-link :to="{ name: 'character', params: { id: character.id }}">
              {{character.name}}
            </router-link>
          </p>
          <img :src="character.image" :alt="character.name"/>
        </div>
        <div class="mt-2 mb-2">
          <router-link to="/" class="btn btn-primary btn-lg my-1">Volver</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Error404',
  data() {
    return {
      url: 'https://rickandmortyapi.com/api/character/',
      character: {},
      min: 1,
      max: 494,
    };
  },
  created() {
    this.fetchCharacterRandom();
  },
  methods: {
    fetchCharacterRandom() {
      const id = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      fetch(this.url + id)
        .then(res => res.json())
        .then((res) => { this.character = res; })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
  },
};
</script>
