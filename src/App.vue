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
  
  <footer class="bg-dark py-2">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <ul class="list-unstyled">
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
          </ul>
        </div>

        <div class="col-4">
          <ul class="list-unstyled">
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
          </ul>
        </div>

        <div class="col-4">
          <ul class="list-unstyled">
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
            <li>
              <a class="text-white text-decoration-none" href="#">Lorem</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

</template>

<style>

</style>
