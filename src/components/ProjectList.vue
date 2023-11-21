<script>
import axios from 'axios';
import { state } from "../state.js";
import ProjectCard from "./ProjectCard.vue";

export default {
    name: 'ProjectList',
    components: {
        ProjectCard
    },
    data() {
        return {
            state,
            blog_api: '/api/projects',
            projects: null
        }
    },
    methods: {
        getProjects() {
            const url = this.state.base_url + this.blog_url;
            console.log(url);
            axios
            .get(url)
            .then(response => {
                console.log(response);
                this.projects = response.data.result

            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <div>
        <section v-if="projects">
            <div class="container">
                <div class="row">
                    <ProjectCard :project="project" v-for="project in projects.data"></ProjectCard>
                </div>
            </div>

            <div class="container">
                <div class="pagination my-3">
                    <nav aria-label="Page navigation">
                        <ul class="pagination    ">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    </div>
</template>

<style>

</style>