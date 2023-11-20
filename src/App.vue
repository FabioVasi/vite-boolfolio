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
  
  <footer>

  </footer>

</template>

<style>

</style>
