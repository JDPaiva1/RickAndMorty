<template>
  <nav class="navbar navbar-expand-lg navbar-dark">

    <router-link class="navbar-brand" :to="{ name: 'home' }">
      <img src="@/assets/logo.png" alt="Rick And Morty" width="145">
    </router-link>

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

    <nav class="collapse navbar-collapse" id="burgerMenu">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'characters' }">Personajes</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'locations' }">Planetas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/episodes' }">Episodios</router-link>
        </li>
      </ul>
    </nav>

  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
nav.navbar.navbar-dark {
  background-color: #18192b;
}
nav.navbar.navbar-dark a.nav-link {
  text-transform: capitalize;
  color: #0FAEBF;
}
nav.navbar.navbar-dark  a.nav-link:hover, .router-link-exact-active.router-link-active {
  color: #41A632;
}
</style>
