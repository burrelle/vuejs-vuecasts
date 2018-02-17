new Vue({
	el: '#app',

	data: {
		skills: []
	},

	mounted(){
		// Make and ajax request to server.
		// axios
		axios.get('/skills').then(response => this.skills = response.data);
	}
});


