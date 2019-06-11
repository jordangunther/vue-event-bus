<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <my-header></my-header>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <servers></servers>
      </div>
      <div class="col-xs-12 col-sm-6">
        <server-details></server-details>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12">
        <my-footer></my-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Servers from './components/Server/Servers.vue';
  import ServerDetails from './components/Server/ServerDetails.vue';

  export default {
    components: {
      'servers': Servers,
      'server-details': ServerDetails,
    }
  }
</script>

<style>

</style>
