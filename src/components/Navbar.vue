<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="/">Rick And Morty</a>

    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#burgerMenu"
        aria-controls="burgerMenu"
        aria-expanded="false"
        aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="burgerMenu">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{active : activeItem1}">
          <a class="nav-link" :href="navItem1">{{ navItem1.substr(1) }}</a>
        </li>
        <li class="nav-item" :class="{active : activeItem2}">
          <a class="nav-link" :href="navItem2">{{ navItem2.substr(1) }}</a>
        </li>
        <li class="nav-item" :class="{active : activeItem3}">
          <a class="nav-link" :href="navItem3">{{ navItem3.substr(1) }}</a>
        </li>
      </ul>

      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="text"
          v-model="search"
          @keyup.enter="searchData()"/>
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          @click="searchData()">Search</button>
      </form>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      search: '',
      activeItem1: false,
      activeItem2: false,
      activeItem3: false,
    };
  },
  props: [
    'navItem1',
    'navItem2',
    'navItem3',
    'pathname',
  ],
  created() {
    this.activeClass();
  },
  methods: {
    searchData() {
      this.$emit('searchData', this.search);
    },
    activeClass() {
      switch (this.pathname) {
        case this.navItem1:
          this.activeItem1 = true;
          this.activeItem2 = false;
          this.activeItem3 = false;
          break;
        case this.navItem2:
          this.activeItem1 = false;
          this.activeItem2 = true;
          this.activeItem3 = false;
          break;
        case this.navItem3:
          this.activeItem1 = false;
          this.activeItem2 = false;
          this.activeItem3 = true;
          break;
        default:
          this.activeItem1 = false;
          this.activeItem2 = false;
          this.activeItem4 = false;
          break;
      }
    },
  },
};
</script>

<style>
a.nav-link {
  text-transform: capitalize;
}
nav.navbar {
  background-color: #498350;
}
</style>
