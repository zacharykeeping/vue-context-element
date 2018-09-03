<template>
    <div class="v-context"
         v-show="show"
         :style="style"
         tabindex="-1"
         @blur="close"
         @click="close"
         @contextmenu.capture.prevent
    >
        <slot :data="data"></slot>
    </div>
</template>

<script>
    export default {
        props: {
            closeOnScroll: {
                type: Boolean,
                default: true
            }
        },

        computed: {
            /**
             * Generate the CSS styles for positioning the context menu.
             *
             * @returns {object|null}
             */
            style () {
                return this.show
                    ? { top: `${this.top}px`, left: `${this.left}px` }
                    : null;
            },
        },

        data () {
            return {
                top: null,
                left: null,
                show: false,
                data: null
            };
        },

        mounted () {
            var uls = this.$el.getElementsByTagName('ul');
            for (var ul of uls) {
                ul.classList.add('el-dropdown-menu');
            }

            var lis = this.$el.getElementsByTagName('li');
            for (var li of lis) {
                li.classList.add('el-dropdown-menu__item');

                if (li.hasAttribute('disabled')) {
                    li.classList.add('is-disabled');
                }

                if (li.hasAttribute('divided')) {
                    li.classList.add('el-dropdown-menu__item--divided');
                }
            }

            if (this.closeOnScroll) {
                this.addScrollEventListener();
            }
        },

        beforeDestroy () {
            if (this.closeOnScroll) {
                this.removeScrollEventListener();
            }
        },

        methods: {
            /**
             * Add scroll event listener to close context menu.
             */
            addScrollEventListener () {
                window.addEventListener('scroll', this.close);
            },

            /**
             * Close the context menu.
             */
            close () {
                this.top = null;
                this.left = null;
                this.data = null;
                this.show = false;
            },

            /**
             * Open the context menu.
             *
             * @param {MouseEvent} event
             * @param {array|object|string} data User provided data for the menu
             */
            open (event, data) {
                this.data = data;
                this.show = true;

                this.$nextTick(() => {
                    this.positionMenu(event.clientY, event.clientX);
                    this.$el.focus();
                });
            },

            /**
             * Set the context menu top and left positions.
             *
             * @param {number} top
             * @param {number} left
             */
            positionMenu (top, left) {
                const largestHeight = window.innerHeight - this.$el.offsetHeight - 25;
                const largestWidth = window.innerWidth - this.$el.offsetWidth - 25;

                if (top > largestHeight) {
                    top = largestHeight;
                }

                if (left > largestWidth) {
                    left = largestWidth;
                }

                this.top = top;
                this.left = left;
            },

            /**
             * Remove the scroll event listener to close the context menu.
             */
            removeScrollEventListener () {
                window.removeEventListener('scroll', this.close);
            }
        },

        watch: {
            /**
             * Add or remove the scroll event listener when the prop value changes.
             *
             * @param {boolean} value
             * @param {boolean} oldValue
             */
            closeOnScroll (value, oldValue) {
                if (value === oldValue) {
                    return;
                }

                if (value) {
                    this.addScrollEventListener();
                } else {
                    this.removeScrollEventListener();
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .v-context {
        position: fixed;
        z-index: 99999;

        ul {
            li {
                white-space: nowrap;
            }
        }
    }

    .v-context:focus {
            outline: none;
    }
</style>