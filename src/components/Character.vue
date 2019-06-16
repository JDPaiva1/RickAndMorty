<template>
  <div class="card col-10 col-md-6 col-lg-5 m-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="item.image" class="card-img" alt="item.name"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text"><small class="text-muted">{{ item.created }}</small></p>
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
