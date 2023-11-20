<script>
export default {
    name: 'AppHeader',
}
</script>

<template>

    <header>
        <nav class="navbar navbar-expand navbar-light bg-secondary">
            <div class="nav navbar-nav">
                <router-link class="nav-item nav-link" :to="{ name: 'Home' }">Home</router-link>
                <router-link class="nav-item nav-link" :to="{ name: 'About' }">About</router-link>
                <router-link class="nav-item nav-link" :to="{ name: 'Contacts' }">Contacts</router-link>
            </div>
        </nav>
    </header>

</template>

<style>

</style>