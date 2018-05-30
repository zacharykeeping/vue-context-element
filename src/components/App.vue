<template>
    <div>
        <v-nav :home-url="homeUrl"></v-nav>
        <div class="container">
            <vue-context-demo></vue-context-demo>
        </div>
    </div>
</template>

<script>
    import VNav from './v-nav';
    import VueContextDemo from './vue-context-demo';

    export default {
        components: {
            VNav,
            VueContextDemo
        },

        data () {
            return {
                homeUrl: '/vue-context'
            };
        },
    };
</script>