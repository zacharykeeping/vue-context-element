<template>
    <div>
        <b-jumbotron>
            <template slot="header">Vue Context Advanced Usage</template>
            <template slot="lead">
                These are some demos of a more advanced usage of the
                <code>vue-context</code> component. Right click on each of the
                items to see an advanced implementation of the context menu.
            </template>
            <p>
                For more information, please visit the documentation.
            </p>
            <b-btn variant="primary"
                   href="https://github.com/rawilk/vue-context/tree/master#advanced-usage"
                   target="_blank"
            >
                More Info
            </b-btn>
        </b-jumbotron>

        <h3>Demo #1</h3>
        <p>
            Right click on each item to see a more customized context menu
            appear for each item.
        </p>

        <b-list-group>
            <b-list-group-item
                    v-for="(item, index) in items"
                    :key="index"
                    @contextmenu.prevent="$refs.menu1.open($event, { name: item, index })"
            >
                {{ item }}
            </b-list-group-item>
        </b-list-group>

        <vue-context ref="menu1">
            <ul slot-scope="child" v-if="child.data">
                <li @click="alertName(child.data.name)">Alert Name</li>
                <li @click="deleteItem(child.data.index)">Delete "{{ child.data.name }}"</li>
            </ul>
        </vue-context>

        <hr>
        <h3>Demo #2</h3>
        <p>
            Right click on each of the colors to have a context menu appear
            to allow you to add or remove the color from the array of selected colors.
        </p>

        <div class="d-flex">
            <div class="color-box border border-dark m-2"
                 v-for="(color, index) in colors"
                 :key="index"
                 :style="{ 'background-color': color.hex }"
                 @contextmenu.prevent="$refs.menu2.open($event, color)"
            >
                &nbsp;
            </div>
        </div>
        <h5 class="my-2">
            Selected colors:
        </h5>
        <code class="d-block mb-3">{{ selectedColors }}</code>

        <vue-context ref="menu2">
            <ul slot-scope="child" v-if="child.data">
                <li @click="toggleColor(child.data)">{{ hasColor(child.data.hex) ? 'Remove Color' : 'Select Color' }}
                </li>
            </ul>
        </vue-context>

        <p>
            <b-link href="https://github.com/rawilk/vue-context/blob/gh-pages/src/tabs/advanced-usage.vue">
                View demo source
            </b-link>
        </p>
    </div>
</template>

<script>
    import usageMixin from '../mixins/usageMixin';

    export default {
        name: 'advanced-usage',

        mixins: [usageMixin],

        data () {
            return {
                colors: [
                    { name: 'red', hex: '#f44336' },
                    { name: 'blue', hex: '#2196F3' },
                    { name: 'cyan', hex: '#00BCD4' },
                    { name: 'green', hex: '#4CAF50' },
                    { name: 'orange', hex: '#FF9800' }
                ],
                selectedColors: []
            };
        },

        methods: {
            /**
             * Alert the user of the given name.
             *
             * @param {string} name
             */
            alertName (name) {
                alert(`You clicked on: "${name}"!`);
            },

            /**
             * Find the index for the given hex.
             *
             * @param {string} hex
             * @returns {number}
             */
            colorIndex (hex) {
                return this.selectedColors.findIndex(color => color.hex === hex);
            },

            /**
             * Delete the given index from the items.
             *
             * @param {number} index
             */
            deleteItem (index) {
                this.$delete(this.items, index);
            },

            /**
             * Determine if the given color is selected.
             *
             * @param {string} hex
             * @returns {boolean}
             */
            hasColor (hex) {
                return this.colorIndex(hex) > -1;
            },

            /**
             * Add or remove the given color to/from the selected colors.
             *
             * @param {object} color
             */
            toggleColor (color) {
                const index = this.colorIndex(color.hex);

                if (index > -1) {
                    this.$delete(this.selectedColors, index);
                } else {
                    this.selectedColors.push(color);
                }
            },
        },
    };
</script>