<template>
	<TresCanvas v-bind="gl" window-size>
		<TresPerspectiveCamera :position="[0, 1.7, 7]" :look-at="[0, 0, 0]" />

		<OrbitControls :enabled="config.orbitControlsEnabled" />

		<SampleBox :position="[-2, 0, 0]" />

		<Suspense>
			<Suzanne :position="[2, 0, 0]" />
		</Suspense>
	</TresCanvas>
</template>

<script setup>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls, useTweakPane } from '@tresjs/cientos'

//
// Refs
//
const { pane } = useTweakPane()

const sampleStore = useSampleStore()

const config = reactive({
	orbitControlsEnabled: true,
})

const gl = reactive({
	clearColor: '#595959',
	powerPreference: 'high-performance',
})

//
// Lifecycle
//
onMounted(async () => {
	await nextTick()

	// Do stuff on mount
	createDebugPane()
})

//
// Functions
//
function createDebugPane() {
	pane.addSeparator()

	pane.addInput(gl, 'clearColor', { label: 'Clear Color' })

	pane.addSeparator()

	pane.addInput(config, 'orbitControlsEnabled', {
		label: 'Orbit Controls enabled',
	})

	pane.addSeparator()

	pane.addButton({ title: 'Increase counter (Pinia)' }).on('click', () => {
		sampleStore.increment()
	})

	pane.addButton({ title: 'Decreate counter (Pinia)' }).on('click', () => {
		sampleStore.decrement()
	})

	pane.addMonitor(sampleStore, 'count', {
		label: 'Pinia counter',
	})
}
</script>
