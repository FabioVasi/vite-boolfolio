<script>
import axios from 'axios';
import { state } from "../state.js";
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'SingleTypeView',
    components: {
        ProjectCard
    },
    data() {
        return {
            state,
            loading: true,
            type: null
        }
    },
    mounted() {
        const url = `${this.state.base_url}/api/types/${this.$route.params.slug}`;
        axios.get(url)
        .then(response => {
            console.log(response.data.result);

            if (response.data.success) {
                console.log('type found');

                this.type = response.data.result;

                this.loading = false;
            } else {
                console.log('type not found');

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

        <section v-if="type">
            <div class="container">
                <div class="row">
                    <ProjectCard :project="project" v-for="project in type.data"></ProjectCard>
                </div>
            </div>
        </section>

    </div>
</template>

<style>

</style>