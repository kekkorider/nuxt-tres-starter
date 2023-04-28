<template>
	<TresCanvas v-bind="gl" window-size>
		<TresPerspectiveCamera :position="[5, 5, 5]" :look-at="[0, 0, 0]" />

		<TresMesh ref="boxRef" :position="[0, 0, 0]" @click="onBoxClick">
			<TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
			<TresMeshBasicMaterial color="#4F4F4F" />
		</TresMesh>
	</TresCanvas>

	<div class="credits">
		Basic implementation of
		<a href="https://tresjs.org/" target="_blank" rel="noopener">TresJS</a> into
		<a href="https://nuxt.com/" target="_blank" rel="noopener">Nuxt 3</a>.<br />
		Check out the
		<a
			href="https://github.com/kekkorider/nuxt-tresjs"
			target="_blank"
			rel="noopener"
			>GitHub Repository</a
		>
		to see how to implement it.<br /><br />
		Click the box to change its color.
	</div>
</template>

<script setup>
import { sRGBEncoding } from 'three'
import { TresCanvas, useRenderLoop } from '@tresjs/core'

//
// Refs
//
const boxRef = shallowRef('boxRef')
const { onLoop } = useRenderLoop()

const gl = {
	clearColor: '#82DBC5',
	outputEncoding: sRGBEncoding,
}

//
// Lifecycle
//
onMounted(async () => {
	await nextTick()

	onLoop(() => {
		boxRef.value.rotation.y += 0.01
	})
})

//
// Methods
//
function onBoxClick(event) {
	event.object.material.color.set(Math.random() * 0xffffff)
}
</script>

<style scoped lang="scss">
.credits {
	font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	position: fixed;
	left: 30px;
	bottom: 30px;
}

a {
	color: red;

	&:hover {
		text-decoration: none;
	}
}
</style>
