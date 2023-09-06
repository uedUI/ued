// button.vue
<template>
	<button class="ued-button" :class="buttonStyle">
		<slot />
	</button>
</template>

<script lang="ts" setup>
import './style/index.less'
import { computed } from 'vue'

defineOptions({ name: 'ued-button' })

type ButtonProps = {
	type?: string
}

const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
	return { [`ued-button--${buttonProps.type}`]: buttonProps.type }
})
</script>
