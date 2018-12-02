<template>
    <div class=test>
			<input type='text' v-model="title"> 
				<span v-html="title"></span>
				<p v-if="showName">{{user.first_name}}</p>
				<!-- <p v-else="showName">No name :(</p> -->
				<p v-else>Nobody</p>
				<!-- <p v-text="user.first_name"></p> -->

				<ul>
					<li v-for="item in items">{{item.title}}</li>
				</ul>

				<hr><br>
				<button v-on:click="greet('Hello World')">Say Greeting</button>
				<br><br>
				<input id="second-input" type='text' v-on:keyup="pressKey" v-on:keyup.enter="enterHit"> type and press enter

				<br><br><hr><br>
				Computed object/directive <br><br>
				<label>First name</label> <input type="text" v-model="user.first_name"> <br><br>
				<label>Last name</label> <input type="text" v-model="user.last_name"> <br><br>
				<h3>full name: {{fullName}}</h3>

				<hr><br>
				<h3>{{msg}}</h3>

		</div>
</template>

<script>
	export default {
		name: 'test-name',
		props: {
			msg: {
				type: String, //or object or anything else
				default: 'default property',
			}
		},
		data() {
			return {
				title: '<h1>Hello from Vue :)</h1>',
				user: {
					first_name: 'John',
					last_name: 'Doe',
				},
				showName: true,
				items: [
					{title: 'Item one'},
					{title: 'Item two'},
					{title: 'Item three'}
				]
			}
		},
		methods: {
			greet: function(g) {
				this.title = '<h1 style=color:red>' + g + '</h1>'
			},
			pressKey: function(e) {
				// console.log('Key-pressed: '+ e.target.value)
				console.log('Key-pressed: '+ e.key + ' code: ' + e.keyCode)
			},
			enterHit: function() {
				let value2 = document.querySelector('#second-input').value;
				this.title = value2;
				console.log(value2);
			}
		},
		// for computations or more complex logic, template suppose to stay as simple as possible
		computed: {
			fullName: function() {
				return this.user.first_name + ' ' + this.user.last_name;
			}
		}

	}
</script>

<style scoped>

</style>