<template>
  <div class="button">
		<div class="button-base">
			<h1>基础按钮</h1>
			<div class="button-base-show">
				<ued-button>默认按钮</ued-button>
				<ued-button type="primary">主要按钮</ued-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { UedButton } from '@ued/components'
</script>
<style lang="less" scoped>
.button {
	&-base {
		&-show {
      display: flex;
      justify-content: flex-start;
      .ued-button:not(:last-child) {
        margin-right: 10px;
      }
		}
	}
}
</style>
