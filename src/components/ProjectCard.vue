
<script>
import { state } from '../state.js';

export default {
  name: 'ProjectCard',
  props: ['project'],
  data() {
    return {
      state
    }
  }
}
</script>

<template>
  <div class="col">
    <div class="card">
      <img class="card-img-top" :src="project.image" alt="">
      <div class="card-body">
        <h3>{{ project.title }}</h3>
        <p>{{ project.content }}</p>
        <router-link :to="{name: 'project', params: {slug: project.slug}}">View</router-link>
      </div>
    </div>
  </div>
</template>

<style>

</style>