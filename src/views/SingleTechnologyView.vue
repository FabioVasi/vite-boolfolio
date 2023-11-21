<script>
import axios from 'axios';
import { state } from "../state.js";
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'SingleTechnologyView',
    components: {
        ProjectCard
    },
    data() {
        return {
            state,
            loading: true,
            technology: null
        }
    },
    mounted() {
        const url = `${this.state.base_url}/api/technologies/${this.$route.params.slug}`;
        axios.get(url)
        .then(response => {
            console.log(response.data.result);

            if (response.data.success) {
                console.log('technology found');

                this.technology = response.data.result;

                this.loading = false;
            } else {
                console.log('technology not found');

                this.$router.push({name: 'NotFound'});
            }
        })
        .catch(error => {
            console.log(error.message);
        })
    }
}
</script>

<template>
    <div>

        <div class="container">
            <h1 class="display-5 fw-bold">{{ $route.params.slug }} Archieve</h1>
        </div>

        <section v-if="technology">
            <div class="container">
                <div class="row">
                    <ProjectCard :project="project" v-for="project in technology.data"></ProjectCard>
                </div>
            </div>
        </section>
        
    </div>
</template>

<style>

</style>