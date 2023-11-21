<script>
export default {
    name: 'AppHeader',
}
</script>

<template>

    <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-secondary d-flex justify-content-between align-items-center">
            <div class="nav navbar-nav">
                <router-link class="nav-item nav-link" :to="{ name: 'Home' }">Home</router-link>
                <router-link class="nav-item nav-link" :to="{ name: 'About' }">About</router-link>
                <router-link class="nav-item nav-link" :to="{ name: 'Blog' }">Blog</router-link>
                <router-link class="nav-item nav-link" :to="{ name: 'Contacts' }">Contacts</router-link>
            </div>
            <div>
                <a href="http://127.0.0.1:8000/admin" class="btn btn-primary">Admin</a>
            </div>
        </nav>
    </header>

</template>

<style>

</style>