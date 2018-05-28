import Vue from 'vue';
import App from './components/App';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

new Vue({
	components: {
		App
	}
}).$mount('#app');