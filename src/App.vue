<script>
import AppHeader from "./components/AppHeader.vue";

export default {
    name: 'App',
    components: {
      AppHeader,

    }
}
</script>

<template>

  <AppHeader></AppHeader>
  
  <main>

    <router-view></router-view>

  </main>
  
  <footer class="bg-secondary py-4 text-white">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <ul class="list-unslyled">
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
          </ul>
        </div>

        <div class="col-4">
          <ul class="list-unslyled">
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
          </ul>
        </div>

        <div class="col-4">
          <ul class="list-unslyled">
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Lorem</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

</template>

<style>

</style>
