<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
    name: 'App',
    components: {
      AppHeader,
      AppMain
    }
}
</script>

<template>

  <AppHeader></AppHeader>
  
  <main>

    <AppMain></AppMain>
    <router-view></router-view>
    
  </main>
  
  <footer>

  </footer>

</template>

<style>

</style>
