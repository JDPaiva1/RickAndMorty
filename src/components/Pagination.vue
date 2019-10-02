<template>
  <nav role="navegation" aria-label="pagination">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" @click="changePage(page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link">{{ page }}</a></li>
      <li class="page-item"><a class="page-link">{{ page + 1 }}</a></li>
      <li class="page-item"><a class="page-link">{{ page + 2 }}</a></li>
      <li class="page-item">
        <a class="page-link" @click="changePage(page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Pagination',
  props: [
    'page',
  ],
  methods: {
    changePage(page) {
      if (page <= 0) {
        this.page = 1;
      } else {
        this.page = page;
      }
      this.$emit('updatePage', this.page);
      this.$emit('fetchItems');
    },
  },
};
</script>

<style>
  .page-item {
    cursor: pointer;
  }
</style>
