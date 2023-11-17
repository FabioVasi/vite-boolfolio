<script>
import axios from "axios";
export default {
  name: 'App',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      api_url: '/api/projects',
      projects: []
    }
  },
  methods: {
    getPosts() {
      const url = this.base_url + this.api_url;
      axios
      .get(url)
      .then(response => {
        console.log(response);
        this.projects = response.data.result;
      })
      .catch(err => {
        console.error(err);
      })

    }
  }
  ,
  mounted() {
    this.getPosts();
  }
}
</script>

<template>

  <header>

  </header>

  <main>
    <section class="project">

      <div class="container">
      
        <h1>Hello world</h1>

        <div class="row g-3">
          <div class="col" v-for="project in projects.data">

            <div class="card">
              <h4>{{ project.title }}</h4>
              <div class="card-body">
                {{ project.content }}
                <h2>hola</h2>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>

  </main>

  <footer>

  </footer>

</template>

<style>

</style>
