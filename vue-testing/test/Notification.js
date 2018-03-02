import Vue from 'vue/dist/vue.js';
import test from 'ava';
import Notification from '../src/Notification';

let vm;

test.beforeEach(t => {
	let n = Vue.extend(Notification);

	vm = new n({ propsData: {
		message: 'Foobar'
	}}).$mount();
});

test('that it renders a notification', t => {
	t.is(vm.$el.textContent, 'FOOBAR');
});

test('that it capitalizes the message', t => {
	t.is(vm.$el.textContent, 'FOOBAR');
});