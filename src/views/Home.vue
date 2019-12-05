<template>
	<div class="default-tinymce">
		<h2 v-occupy="{ data: content, config }"> 编辑器1</h2>
		<textarea v-occupy="{ data: content, config }" class="editor1"></textarea>
		<h2 v-occupy="{ data: content, config }" >编辑器2</h2>
		<textarea v-occupy="{ data: content, config }" class="editor2"></textarea>
	</div>
</template>
<script>
	import Tinymce from 'tinymce'
	export default {
		data() {
			return {
				content: '',
				config: {
					width: '200px',
					height: '18px',
					background: '#ddd'
				}
			}
		},
		mounted() {
			console.log(this.$ajax);
			
			
			
			
			// Tinymce.init({
			// 	selector: '.editor1'
			// })
			// Tinymce.init({
			// 	selector: '.editor2'
			// })
		}
	}
</script>
