export default {
	template: `<div>{{message | capitalize }}</div>`,

	props: [ 'message' ],

	filters: {
		capitalize(message) {
			return message.toUpperCase();
		}
	}
};