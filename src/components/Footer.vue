<template>
  <footer class="main-footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center">
          <p class="social mb-4 ">
            <a href="https://github.com/JDPaiva1" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']"/>
            </a>
            <a href="https://twitter.com/JDPaiva1" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']"/>
            </a>
            <a href="https://jdpaiva.me/" target="_blank">
              <font-awesome-icon :icon="['fas', 'laptop-code']"/>
            </a>
          </p>
        </div>
        <div class="col-md-12 text-center mb-4">
          <p>
            <a href="https://rickandmortyapi.com/">API Rick And Morty</a>
          </p>
        </div>
        <div class="col-md-12 text-center">
          <p>© 2019 JDPaiva1.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
};
</script>

<style scoped>
footer.main-footer {
  padding: 60px 0;
  color: #0FAEBF;
  background: #18192b;
}
footer.main-footer p.social a {
  margin-left: 10px;
  color: #18192b;
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 25px;
  line-height: 45px;
  font-size: 1.3rem;
  vertical-align: middle;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  background-color: #0FAEBF;
}
footer.main-footer p {
  margin: 0;
  color: #0FAEBF;
  font-family: "Roboto Slab", serif;
  font-size: 0.9rem;
}
</style>
