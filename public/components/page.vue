<template>
	<div>
		<h1>Hello world from {{componentName}} component</h1>
		<router-link to="/">To Home</router-link>
	</div>	
</template>

<script>
	export default {
		data() {
			return {
				componentName: 'Page'
			}
		},

		methods: {

		}
	}
</script>