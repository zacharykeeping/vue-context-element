<template>
    <div>
        <b-jumbotron>
            <template slot="header">Vue Context Basic Usage</template>
            <template slot="lead">
                This is a demo of basic usage the <code>vue-context</code> component.
                Right click on each of the items to see a basic implementation of the
                context menu.
            </template>
            <p>
                For more information, please visit the documentation.
            </p>
            <b-btn variant="primary"
                   href="https://github.com/rawilk/vue-context/tree/master#basic-usage"
                   target="_blank"
            >
                More Info
            </b-btn>
        </b-jumbotron>

        <h3>Demo #1</h3>
        <p>
            Right click on each item to see a generic custom context menu appear.
        </p>

        <b-list-group>
            <b-list-group-item
                    v-for="(item, index) in items"
                    :key="index"
                    @contextmenu.prevent="$refs.menu.open"
            >
                {{ item }}
            </b-list-group-item>
        </b-list-group>

        <vue-context ref="menu">
            <ul>
                <li @click="onClick($event.target.innerText)">Do something</li>
                <li @click="onClick($event.target.innerText)">Do something else</li>
            </ul>
        </vue-context>

        <p class="mt-4">
            <strong>Note:</strong>
            This is a very basic implementation of the <code>vue-context</code>
            menu component. This implementation might work in some situations,
            but you might find that in most cases you will need to reach
            for a more advanced implementation of the component.
            <a href="#" @click.prevent="$emit('go-to-advanced')">
                Click here for a more advanced solution
            </a>
        </p>

        <p>
            <b-link href="https://github.com/rawilk/vue-context/blob/gh-pages/src/tabs/basic-usage.vue">
                View demo source
            </b-link>
        </p>
    </div>
</template>

<script>
    import { VueContext } from 'vue-context';
    import usageMixin from '../mixins/usageMixin';

    export default {
        name: 'basic-usage',

        components: {
            VueContext
        },

        mixins: [usageMixin],

        methods: {
            /**
             * Alert the given text.
             *
             * @param {string} text
             */
            onClick (text) {
                alert(`You clicked on: "${text}"`);
            }
        }
    };
</script>