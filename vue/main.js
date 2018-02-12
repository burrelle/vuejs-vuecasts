Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks">{{ task.task }}</task>
		</div>
	`,

	data() {
		return {
			tasks: [
				{ task: 'Go to the store', complete: true },
				{ task: 'Go to the email', complete: true },
				{ task: 'Go to the farm', complete: true },
				{ task: 'Go to work', complete: true }
			]
		};
	}
});


Vue.component('task', {
	template: '<li><slot></slot></li>'
});

Vue.component('message-item', {
	props: ['title', 'body'],

	data() {
		return {
			isVisable: true
		};
	},

	template: `
		<article class="message" v-show="isVisable">
	  		<div class="message-header">
	    		<p>{{ title }}</p>
	    		<button class="delete" aria-label="delete" @click="hideModal"></button>
	  		</div>
	  		<div class="message-body">
	  			{{ body }}
	  		</div>
		</article>
	`, 
	
	methods: {
		hideModal(){
			this.isVisable = false;
		}
	}
});



new Vue({
	el: '#root'
})