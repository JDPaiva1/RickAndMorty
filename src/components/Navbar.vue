<template>
  <nav class="navbar navbar-expand-lg">

    <router-link class="navbar-brand" to="/">
      <img src="../assets/logo.png" alt="Rick And Morty" width="145">
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
          <router-link class="nav-link" to="/characters">Personajes</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/locations">Planetas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/episodes">Episodios</router-link>
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
nav.navbar {
  background-color: #18192b;
}
a.nav-link {
  text-transform: capitalize;
  color: #0FAEBF;
}
a.nav-link:hover, .router-link-exact-active.router-link-active {
  color: #41A632;
}
</style>
