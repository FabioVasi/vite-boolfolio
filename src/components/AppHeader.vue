<script>
export default {
    name: 'AppHeader',
}
</script>

<template>

    <header>
        <nav class="navbar navbar-expand navbar-light bg-light">
            <div class="nav navbar-nav">
                <router-link class="nav-item nav-link" to="/">Home</router-link>
                <router-link class="nav-item nav-link" to="/About">About</router-link>
                <router-link class="nav-item nav-link" to="/Contacts">Contacts</router-link>
            </div>
        </nav>
    </header>

</template>

<style>

</style>