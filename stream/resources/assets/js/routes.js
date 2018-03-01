import VueRouter from 'vue-router';
import router from './routes';

let routes = [
	{
		path: '/',
		component: require('./views/Home.vue')
	},

	{
		path: '/about',
		component: require('./views/About.vue')
	},

	{
		path: '/contact',
		component: require('./views/Contact.vue')
	},


];

export default new VueRouter ({
	routes,
	linkActiveClass: 'is-active'
});