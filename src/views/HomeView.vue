<script>
import axios from "axios";

export default {
    name: 'HomeView',
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            api_url: '/api/projects/latest',
            projects: null,
        };
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
                .catch(error => {
                console.error(error);
            });
        }
    },
    mounted() {
        this.getPosts();
    }  
}
</script>

<template>
    

    <section class="project py-5" v-if="projects">

        <div class="container text-center">
        
            <h1 class="pb-5">Projects List</h1>

            <div class="row g-4">
                <div class="col-4" v-for="project in projects">

                    <div class="card shadow h-100">
                        <img height="300" class="img-card-top rounded-top-1" :src="project.image" alt="">
                    
                        <div class="card-body text-start">
                            <h3>Title: {{ project.title }}</h3>
                            <p class="">Link: <a href="{{ project.github }}"> {{ project.github }}</a></p>
                            <p class="">Link: <a href="{{ project.second_link }}"> {{ project.second_link }}</a></p>
                            <h5>Type: {{ project.types }}</h5>
                            <h6 class="text-muted m-0" v-for="technology in project.technologies">Technology: {{ technology.name }}</h6>
                            <p>{{ project.content }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>

    <div class="newsletter py-5 mt-5 bg-light text-dark">
       <div class="container">
         <h4 class="mb-3">Subscribe</h4>
          <form action="">

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" name="email" id="email" class="form-control" placeholder="email@example.com" aria-describedby="emailHelper">
              <small id="emailHelper" class="text-muted">Type your addreess here</small>
            </div>

            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
       </div>
      </div>

</template>


<style>

</style>