<template>
	<div class="users">
		<h1>Users component</h1>
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter Name">
			<input type="txt" v-model="newUser.email" placeholder="Enter Email">
			<input type="submit" value="add user">
		</form>

		<ul>
			<li v-for="user in users">
				<label>Contacted</label>
				<input type="checkbox" class="toggle" v-model="user.contacted">
				<span :class="{contacted_class: user.contacted}">
					{{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">X</button>
				</span>
			</li>
		</ul>
	</div>
</template>


<script>
	export default {
		name: 'users',
		data() {
			return {
				newUser: {},
				users: [
					{
						name: 'David Cabala',
						email: 'david.cabala@gmail.com',
						contacted: true
					},
					{
						name: 'Steve Smith',
						email: 'Steve.Smith@gmail.com',
						contacted: false
					},
					{
						name: 'Gair Blair',
						email: 'Gair.Blair@gmail.com',
						contacted: true
					},
				]
			}
		},
		methods: {
			addUser: function(e) {
				e.preventDefault();
				this.users.push({
					name: this.newUser.name,
					email: this.newUser.email,
					contacted: false,
					onemore: 'fd'
				})
				console.log(this.users)
			},
			deleteUser: function(user) {
				this.users.splice(this.users.indexOf(user), 2)
			}
		},
		// initiated on creation ()
		created: function() {
			// using fetch
			fetch('https://jsonplaceholder.typicode.com/users')
			.then( res => { return res.json() })
			.then( data=> this.users = data )

/* 		  // using vue-resource
			this.$http.get('https://jsonplaceholder.typicode.com/users')
			.then( (res) => {
				console.log(res)
				this.users = res.data
			})
			 */ 
		},
	}
</script>

<style scoped>
	.contacted_class {
		text-decoration: line-through;
		color: red;
	}
</style>


/* 
	# get vue-resource to use this.$http.get
	npm install vue-resource --save

	# npm router
	npm install vue-router --save
*/