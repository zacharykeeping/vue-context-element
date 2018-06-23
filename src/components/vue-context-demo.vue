<template>
    <div class="py-3">
        <b-tabs v-model="tabIndex">
            <b-tab title="Basic Usage">
                <basic-usage @go-to-advanced="tabIndex = 1"></basic-usage>
            </b-tab>
            <b-tab title="Advanced Usage">
                <advanced-usage></advanced-usage>
            </b-tab>
        </b-tabs>

        <div id="demo-notes">
            <b-card header="Demo Notes">
                <ul class="mb-0">
                    <li>Built with
                        <b-link href="https://getbootstrap.com/" target="_blank">Bootstrap 4</b-link>
                        CSS framework and icons from
                        <b-link href="https://fontawesome.com/" target="_blank">Font Awesome</b-link>
                    </li>
                    <li>
                        Also built with many components from the
                        <b-link href="https://bootstrap-vue.js.org/" target="_blank">Bootstrap-Vue</b-link>
                        library
                    </li>
                    <li>
                        Please refer to the
                        <b-link href="https://github.com/rawilk/vue-context">project website</b-link>
                        for more information
                    </li>
                </ul>
            </b-card>
        </div>

    </div>
</template>

<script>
    import BasicUsage from '../tabs/basic-usage';
    import AdvancedUsage from '../tabs/advanced-usage';

    export default {
        name: 'vue-context-demo',

        components: {
            BasicUsage,
            AdvancedUsage
        },

        data () {
            return {
                tabIndex: 0
            };
        }
    };
</script>