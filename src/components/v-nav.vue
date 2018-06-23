<template>
    <b-navbar toggleable="md" type="dark" variant="primary" sticky>
        <div class="container">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand :href="homeUrl">Vue Context</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="https://github.com/rawilk/vue-context">
                        <i class="fab fa-github d-sm-none d-md-inline-block">
                            <span class="sr-only">documentation</span>
                        </i>
                        <span class="d-sm-inline-block d-md-none">Documentation</span>
                    </b-nav-item>
                    <b-nav-item href="https://randallwilk.com" target="_blank">
                        &copy; Randall Wilk
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
    export default {
        name: 'v-nav',

        props: {
            homeUrl: {
                type: String,
                required: true
            },
        },
    };
</script>