
<script>
import axios from "axios";

export default {
    name: 'AppMain',
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            api_url: '/api/projects',
            projects: [],
        };
    },
    methods: {
        getPosts() {
            const complete_url = this.base_url + this.api_url;
            axios
                .get(complete_url)
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
    

    <section class="project">

        <div class="container">
        
            <h1>Hello world</h1>

            <div class="row g-4">
                <div class="col-4" v-for="project in projects.data">

                    <div class="card h-100">
                        <img class="img-card-top" :src="project.image" alt="">
                    
                        <div class="card-body">
                            <h3>{{ project.title }}</h3>
                            <a href="{{ project.github }}">{{ project.github }}</a>
                            <a href="{{ project.second_link }}">{{ project.second_link }}</a>
                            <h5 v-for="type in project.types">{{ type.name }}</h5>
                            <h4 v-for="technology in project.technologies">{{ technology.name }}</h4>
                            <h4>{{ project.content }}</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>



</template>


<style>

</style>