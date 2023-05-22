<template>
	<TresCanvas v-bind="gl" window-size>
		<TresPerspectiveCamera :position="[0, 1.7, 7]" :look-at="[0, 0, 0]" />

		<OrbitControls />

		<SampleBox :position="[-2, 0, 0]" />

		<Suspense>
			<Suzanne :position="[2, 0, 0]" ref="suzanneRef" />
		</Suspense>
	</TresCanvas>
</template>

<script setup>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'

const gl = {
	clearColor: '#82DBC5',
	powerPreference: 'high-performance',
}

//
// Lifecycle
//
onMounted(async () => {
	await nextTick()

	// Do stuff on mount
})
</script>
