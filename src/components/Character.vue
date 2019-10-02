<template>
  <div class="container">
    <div class="row mt-4 mx-auto">
      <div class="col-lg-8">
        <div class="tab-content pb-3">
          <div class="tab-pane active" :id="character.id">
            <h3 class="m-2">{{ character.name }}</h3>
            <div class="row">
              <div class="col-md-6">
                <h6>Estado</h6>
                <p>{{ character.status }}</p>
                <h6>Especie</h6>
                <p>{{ character.species }}</p>
              </div>
              <div class="col-md-6">
                <h6>Género</h6>
                <p>{{ character.gender }}</p>
                <h6>Origen</h6>
                <router-link to="/">{{ character.origin.name }}</router-link>
              </div>
              <div class="col-md-12">
                <h5 class="mt-2">Episodios</h5>
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr v-for="episode in character.episode" :key="episode">
                      <td>{{ episode }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mt-2 text-sm-center">
        <img :src="character.image" class="mx-auto img-fluid" alt="avatar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'character',
  data() {
    return {
      url: 'https://rickandmortyapi.com/api',
      id: window.location.pathname,
      character: {},
    };
  },
  created() {
    this.fetchCharacter();
  },
  methods: {
    fetchCharacter() {
      fetch(this.url + this.id)
        .then(res => res.json())
        .then((res) => { this.character = res; })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
  },
};
</script>
