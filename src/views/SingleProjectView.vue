<script>
import axios from 'axios';

export default {
    name: 'SingleProjectView',
    data() {
        return {
            loading: true,
            project: {}
        }
    },
    mounted() {
        const url = `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`;
        axios.get(url)
        .then(response => {
            if (response.data.succes) {
                this.project = response.data.result;

                this.loading = false;
            } else {
                this.$router.push({name: 'NotFound'});
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>

<template>
    <div>

        <div class="container">
            <div v-if="!loading">
                <div class="cover-image">
                    <img :src="project.image" class="img-fluid" alt="">
                </div>
                <h1>{{ project.title }}</h1>
                <p>{{ project.content }}</p>
                
                <div class="metadata">
                    <div class="type" v-if="project.type">
                        <h5>Type: {{ project.type.name }}</h5> 
                    </div>
                    <div class="technologies" v-if="project.technologies.length > 0">
                        <h5>Technologies: </h5>
                        <ul class="list-unstyled">
                            <li v-for="technology in project.technologies">
                                {{ technology.name }} 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-else>
                Loading...
            </div>   
        </div>
        
    </div>
</template>

<style>

</style>