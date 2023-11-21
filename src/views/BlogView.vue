<script>
import axios from 'axios';
import { state } from '../state.js';
import ProjectList from "../components/ProjectList.vue";

export default {
    name: 'Blog>View',
    components: {
        ProjectList
    },
    data() {
        return {
            state,
            types: null,
            technologies: null
        }
    },
    mounted() {
        const type_url = this.state.base_url + '/api/types'

        axios.get(type_url)
        .then(response => {
            console.log(response);
            this.types = response.data.result;

        })
        .catch(error => {
            console.log(error);
        })

        const technology_url = this.state.base_url + '/api/technologies'

        axios.get(technology_url)
        .then(response => {
            console.log(response);
            this.technologies = response.data.result;

        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>

<template>
    <div class="p-5 mb-4 bg-dark text-light">
    <div class="container py-5">
      <h1 class="display-5 fw-bold">Our Blog</h1>
      <p class="col-md-8 fs-4">Find top news from top authors</p>
      <button class="btn btn-primary btn-lg" type="button">Find out more</button>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-9">

        <ProjectList></ProjectList>

      </div>
      <aside class="col-3">
        <div class="widget card bg-light mb-3" v-if="types">
          <div class="card-header">
            Types
          </div>

          <div class="card-body">
            <ul class="list-unstyled">
              <li v-for="type in types">
                <router-link :to="{name: 'type', params: {slug : type.slug}}">{{ type.name }}</router-link>
              </li>
            </ul>
          </div>

          
        </div>

        <div class="widget card bg-light mb-3" v-if="technologies">
          <div class="card-header">
            Technologies
          </div>

          <div class="card-body">
            <ul class="list-unstyled">
              <li v-for="technology in technologies">
                <router-link :to="{ name: 'technology', params: { slug: technology.slug } }">{{ technology.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style>

</style>