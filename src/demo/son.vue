<template>
	<div class="hello">
		<h1>{{demo}}</h1>
		<h1>接受父亲值：{{ss}}</h1>
		<button @click="sss()">儿子使用父亲</button>
	</div>
</template>

<script>
	export default {
		name: 'demo',
		props: {
			ss: String,
		},
		data() {
			return {
				demo: '子组件',
			};
		},
		methods: {
			sss() {
				this.$emit('ss');
			},
			sonClick() {
				alert("？？？")
			}
		},
		// （创建前）vue实例的挂载元素$el和数据对象 data都是undefined, 还未初始化
		beforeCreate() {},
		// (创建后) 完成了 data数据初始化, el还未初始化
		created() {},
		// (载入前) vue实例的$el和data都初始化了, 相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。
		beforeMount() {},
		// (载入后) 在el 被新创建的 vm.$el替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互
		mounted() {},
		// (更新前) 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。
		beforeUpdate() {},
		// （更新后） 在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
		updated() {},
		// (销毁前） 在实例销毁之前调用。实例仍然完全可用。
		beforeDestroy() {},
		// (销毁后） 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。
		destroyed() {},
		components: {},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
