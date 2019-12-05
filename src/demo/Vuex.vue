<template>
	<div>
		<h1>值：{{hello}}</h1>
		<button @click="mutations()">同步方法</button>
		<h1>计算属性：{{world}} </h1>
		<button @click="getters()">计算属性</button>
		<h1>异步方法：{{loginUser}}</h1>
		<button @click="actions()">异步方法</button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			};
		},
		mounted() {},
		methods: {
			getters() {
				this.$store.commit('updateWorld', this.$store.getters.tripleCountWorld)
			},
			mutations() {
				this.$store.commit('updateHello', this.hello + 1)

			},
			actions() {
				this.$store.dispatch('actionSomemution')
			}
		},
		computed: {},
		watch: {},
		components: {},
		computed: {
			hello() {
				return this.$store.state.Hello
			},
			world() {
				return this.$store.state.World

			},
			loginUser() {
				return this.$store.state.loginUser
			}
		},
		updated() {},
		created() {}
	};
</script>
<style>

</style>
