<template>
	<div :data-theme='nowThemeInfo'>
		<div class="block">
			hihihhhhh
		</div>
		<button @click="click()">换肤</button>
		<div class="ss"></div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				nowThemeInfo: 'red-theme'
			};
		},
		mounted() {},
		methods: {
			click() {
				if (this.nowThemeInfo == 'red-theme') {
					this.nowThemeInfo = 'default-theme';
				} else {
					this.nowThemeInfo = 'red-theme';
				}
			}
		},
		watch: {},
		components: {},
		computed: {},
		updated() {},
		created() {
		}
	};
</script>

<style lang="scss">
	@import 'ss.scss';

	.block {
		width: 100px;
		height: 200px;
		@include base-background();
	}
		@mixin sss {
		font:{
			size:30rem;
			weight:600;
			family:fantasy;
		}
	}
	.ss{
		@include sss;  
	}

	.funky {
		font: {
			family: fantasy;
			size: 30em;
			weight: bold;
		}
		text:{
			align:center;
		}
	}

</style>
