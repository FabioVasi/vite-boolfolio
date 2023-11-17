<script>
export default {
  name: 'App',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      api_url: '/api/projects',
      projects: []
    }
  },
  mounted() {
    axios
    .get('')
    .then(response => {
      console.log(response);
      this.projects = response.data.result
    })
    .catch(err => {
      console.error(err);
    })
  }
}
</script>

<template>

  <header>

  </header>

  <main>
    <div class="container">
      
    <h1>Hello</h1>

      <div class="row g-3">
        <div class="col-3" v-for="project in projects.data">
          <div class="card">
            <h4>{{ project.title }}</h4>
            <div class="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>

  </footer>

</template>

<style>

</style>
