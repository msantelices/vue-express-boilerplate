<template>
	<div>
		<h1>Hello world from {{componentName}} component</h1>
		<router-link to="/page">To page</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				componentName: 'Home'
			}
		},

		methods: {

		}
	}
</script>