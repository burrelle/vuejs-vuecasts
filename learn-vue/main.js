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

Vue.component('modal-item', {
	template: `
		<div class="modal is-active">
				<div class="modal-background"></div>
				<div class="modal-content">
					<div class="box">
						<slot></slot>
					</div>
				</div>
				<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
		</div>
	`
})



new Vue({
	el: '#root',

	data: {
		showModal: false
	}
})